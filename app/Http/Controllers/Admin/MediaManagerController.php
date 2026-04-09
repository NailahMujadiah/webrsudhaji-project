<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\View\View;

class MediaManagerController extends Controller
{
    public function index(Request $request): View
    {
        $directories = [
            'admin/profiles' => 'Profil Admin',
            'artikel' => 'Artikel',
            'dokter' => 'Dokter',
            'banner' => 'Banner',
        ];

        $query = trim((string) $request->string('q'));
        $selectedCategory = trim((string) $request->string('category'));

        $media = [];

        foreach ($directories as $directory => $label) {
            foreach (Storage::disk('public')->allFiles($directory) as $filePath) {
                $extension = Str::lower(pathinfo($filePath, PATHINFO_EXTENSION));

                if (! in_array($extension, ['jpg', 'jpeg', 'png', 'webp', 'gif', 'svg'])) {
                    continue;
                }

                $fileName = basename($filePath);

                if ($selectedCategory !== '' && $selectedCategory !== $directory) {
                    continue;
                }

                if ($query !== '' && ! Str::contains(Str::lower($filePath . ' ' . $fileName . ' ' . $label), Str::lower($query))) {
                    continue;
                }

                $media[] = [
                    'category' => $label,
                    'directory' => $directory,
                    'path' => $filePath,
                    'name' => $fileName,
                    'url' => '/storage/' . ltrim(str_replace('\\', '/', $filePath), '/'),
                    'size' => $this->formatBytes(Storage::disk('public')->size($filePath)),
                    'last_modified' => Carbon::createFromTimestamp(Storage::disk('public')->lastModified($filePath)),
                ];
            }
        }

        usort($media, static fn (array $left, array $right): int => $right['last_modified']->timestamp <=> $left['last_modified']->timestamp);

        $stats = [
            'total' => count($media),
            'admin_profiles' => count(array_filter($media, static fn (array $item): bool => $item['directory'] === 'admin/profiles')),
            'artikel' => count(array_filter($media, static fn (array $item): bool => $item['directory'] === 'artikel')),
            'dokter' => count(array_filter($media, static fn (array $item): bool => $item['directory'] === 'dokter')),
            'banner' => count(array_filter($media, static fn (array $item): bool => $item['directory'] === 'banner')),
        ];

        return view('admin.media-manager.index', [
            'media' => $media,
            'stats' => $stats,
            'directories' => $directories,
            'selectedCategory' => $selectedCategory,
            'query' => $query,
            'admin' => $request->user('admin'),
        ]);
    }

    private function formatBytes(int $bytes): string
    {
        if ($bytes >= 1073741824) {
            return number_format($bytes / 1073741824, 2) . ' GB';
        }

        if ($bytes >= 1048576) {
            return number_format($bytes / 1048576, 2) . ' MB';
        }

        if ($bytes >= 1024) {
            return number_format($bytes / 1024, 2) . ' KB';
        }

        return $bytes . ' B';
    }
}