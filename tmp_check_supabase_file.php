<?php
require __DIR__ . '/vendor/autoload.php';
$app = require_once __DIR__ . '/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use Illuminate\Support\Facades\Storage;

$path = 'artikel/artikel-tips-menjaga-imunitas-keluarga-20260603160147.jpeg';
$disk = Storage::disk((string) config('filesystems.media_disk', 'public'));

echo 'DISK: ' . config('filesystems.media_disk', 'public') . "\n";
echo 'URL: ' . $disk->url($path) . "\n";
echo 'EXISTS: ' . ($disk->exists($path) ? 'true' : 'false') . "\n";
