<?php
require __DIR__ . '/vendor/autoload.php';
$app = require_once __DIR__ . '/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use App\Models\Artikel;

$artikel = Artikel::query()->first();
if (! $artikel) {
    echo "NO_ARTICLE\n";
    exit(0);
}

echo "GAMBAR: " . var_export($artikel->gambar_artikel, true) . "\n";
echo "URL: " . var_export($artikel->gambar_artikel_url, true) . "\n";
exit(0);
