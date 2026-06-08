<?php
require __DIR__ . '/../vendor/autoload.php';
$app = require_once __DIR__ . '/../bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use App\Models\Artikel;
use Illuminate\Support\Facades\Storage;

$diskName = (string) config('filesystems.media_disk', 'public');
$disk = Storage::disk($diskName);
$localBase = realpath(__DIR__ . '/../storage/app/public');

if ($localBase === false) {
    echo "Local storage base directory not found.\n";
    exit(1);
}

$artikels = Artikel::query()
    ->whereNotNull('gambar_artikel')
    ->where('gambar_artikel', '<>', '')
    ->get(['id_artikel', 'gambar_artikel']);

if ($artikels->isEmpty()) {
    echo "No artikel records with gambar_artikel found.\n";
    exit(0);
}

echo "Uploading artikel images to disk '{$diskName}'...\n";
$uploaded = 0;
$skipped = 0;
$missing = 0;
$already = 0;

foreach ($artikels as $artikel) {
    $path = $artikel->gambar_artikel;
    if (preg_match('#^https?://#i', $path)) {
        echo "[SKIP] {$artikel->id_artikel}: already a URL ({$path})\n";
        $skipped++;
        continue;
    }

    if ($disk->exists($path)) {
        echo "[OK]   {$artikel->id_artikel}: already uploaded ({$path})\n";
        $already++;
        continue;
    }

    $localPath = $localBase . DIRECTORY_SEPARATOR . str_replace(['/', '\\'], DIRECTORY_SEPARATOR, $path);

    if (! file_exists($localPath)) {
        echo "[MISS] {$artikel->id_artikel}: local file missing ({$localPath})\n";
        $missing++;
        continue;
    }

    $contents = file_get_contents($localPath);
    if ($contents === false) {
        echo "[ERR]  {$artikel->id_artikel}: cannot read local file ({$localPath})\n";
        $missing++;
        continue;
    }

    $success = $disk->put($path, $contents, ['visibility' => 'public']);

    if ($success) {
        echo "[UPLD] {$artikel->id_artikel}: uploaded {$path}\n";
        $uploaded++;
    } else {
        echo "[FAIL] {$artikel->id_artikel}: upload failed {$path}\n";
    }
}

echo "\nSummary:\n";
echo "  uploaded: {$uploaded}\n";
echo "  already:  {$already}\n";
echo "  skipped:  {$skipped}\n";
echo "  missing:  {$missing}\n";
