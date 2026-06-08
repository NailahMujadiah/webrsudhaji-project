<?php
$urls = [
    'https://lhapnnfnlpooukfqtigc.supabase.co/storage/v1/object/public/media/artikel/artikel-tips-menjaga-imunitas-keluarga-20260603160147.jpeg',
    'https://lhapnnfnlpooukfqtigc.storage.supabase.co/storage/v1/object/public/media/artikel/artikel-tips-menjaga-imunitas-keluarga-20260603160147.jpeg',
];

foreach ($urls as $url) {
    echo "CHECKING: $url\n";
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HEADER, true);
    curl_setopt($ch, CURLOPT_NOBODY, false);
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $error = curl_error($ch);
    curl_close($ch);

    if ($response === false) {
        echo "CURL_ERROR: $error\n\n";
        continue;
    }

    echo "HTTP_CODE: $httpCode\n";
    echo $response;
    echo "\n\n";
}
