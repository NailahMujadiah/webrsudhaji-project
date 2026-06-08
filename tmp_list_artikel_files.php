<?php
require __DIR__ . '/vendor/autoload.php';
$app = require_once __DIR__ . '/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use App\Models\Artikel;

$artikels = Artikel::query()->select(['id_artikel', 'gambar_artikel'])->get();
$root = __DIR__ . '/storage/app/public';

foreach ($artikels as $artikel) {
    $path = $artikel->gambar_artikel;
    if (empty($path)) {
        echo "{$artikel->id_artikel}: <empty>\n";
        continue;
    }
    $localPath = $root . '/' . $path;
    $exists = file_exists($localPath) ? 'exists' : 'missing';
    echo "{$artikel->id_artikel}: {$path} => {$exists}";
    if ($exists === 'exists') {
        echo " (size=" . filesize($localPath) . ")";
    }
    echo "\n";
}
