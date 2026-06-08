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

echo json_encode($artikel->toArray(), JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) . "\n";
