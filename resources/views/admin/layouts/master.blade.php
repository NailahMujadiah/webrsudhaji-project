<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title') | Admin RSUD Haji</title>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/css/all.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/admin-lte@3.2/dist/css/adminlte.min.css">
    @vite(['resources/css/app.css'])
    
    <style>
    [data-sidebar-panel] {
        transition: width 0.3s ease, max-width 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        will-change: width, max-width, transform;
    }

    [data-admin-content] {
        transition: transform 0.3s ease;
        will-change: transform;
    }

    /* Reset link Bootstrap di dalam sidebar */
    [data-sidebar-panel] a {
        text-decoration: none !important;
        color: inherit;
    }

    /* Menu aktif */
    [data-sidebar-panel] a.active-menu {
        background-color: #22c55e !important;
        color: #ffffff !important;
    }

    /* Icon saat aktif */
    [data-sidebar-panel] a.active-menu i {
        color: #ffffff !important;
    }

    /* ===== Admin dropdown hover ===== */
    #admin-dropdown-wrap .admin-dropdown-menu {
        visibility: hidden;
        opacity: 0;
        transform: translateY(4px);
        transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
    }

    #admin-dropdown-wrap:hover .admin-dropdown-menu {
        visibility: visible;
        opacity: 1;
        transform: translateY(0);
    }

    /* Reset margin Bootstrap pada p di dalam dropdown */
    #admin-dropdown-wrap p {
        margin-bottom: 0 !important;
    }

    @media (min-width: 1024px) {
        .sidebar-collapsed [data-sidebar-panel] {
            width: 5.75rem !important;
            max-width: 5.75rem !important;
        }

        .sidebar-collapsed [data-sidebar-panel]:hover {
            width: 20rem !important;
            max-width: 20rem !important;
            box-shadow: 0 24px 60px rgba(0, 0, 0, 0.1);
        }

        .sidebar-collapsed [data-sidebar-panel]:not(:hover) a,
        .sidebar-collapsed:not(.sidebar-hover) [data-sidebar-panel] a {
            justify-content: center;
            padding-left: 0;
            padding-right: 0;
        }

        .sidebar-collapsed [data-sidebar-panel]:hover a {
            justify-content: flex-start;
            padding-left: 1rem;
            padding-right: 1rem;
        }

        .sidebar-collapsed.sidebar-hover [data-sidebar-panel] a {
            justify-content: flex-start;
            padding-left: 1rem;
            padding-right: 1rem;
        }

        .sidebar-collapsed.sidebar-hover [data-sidebar-panel] {
            width: 20rem !important;
            max-width: 20rem !important;
            box-shadow: 0 24px 60px rgba(0, 0, 0, 0.1);
        }

        .sidebar-collapsed [data-sidebar-panel]:hover [data-sidebar-label],
        .sidebar-collapsed [data-sidebar-panel]:hover [data-sidebar-meta],
        .sidebar-collapsed [data-sidebar-panel]:hover .sidebar-section-title,
        .sidebar-collapsed [data-sidebar-panel]:hover .sidebar-footer-text,
        .sidebar-collapsed.sidebar-hover [data-sidebar-panel] [data-sidebar-label],
        .sidebar-collapsed.sidebar-hover [data-sidebar-panel] [data-sidebar-meta],
        .sidebar-collapsed.sidebar-hover [data-sidebar-panel] .sidebar-section-title,
        .sidebar-collapsed.sidebar-hover [data-sidebar-panel] .sidebar-footer-text {
            display: block !important;
        }

        .sidebar-collapsed [data-sidebar-panel] [data-sidebar-label],
        .sidebar-collapsed [data-sidebar-panel] [data-sidebar-meta],
        .sidebar-collapsed [data-sidebar-panel] .sidebar-section-title,
        .sidebar-collapsed [data-sidebar-panel] .sidebar-footer-text {
            display: none !important;
        }

        .sidebar-collapsed [data-admin-content] {
            transform: translateX(0) !important;
        }
    }
</style>

</head>
<body class="min-h-screen bg-background text-foreground antialiased">
@php($currentAdmin = Auth::guard('admin')->user())

<div class="min-h-screen bg-background">
    <div class="mx-auto flex min-h-screen w-full max-w-[1600px] flex-col lg:flex-row">

        {{-- ======================== SIDEBAR ======================== --}}
        <aside id="admin-sidebar" data-sidebar-panel
               class="fixed inset-y-0 left-0 z-40 w-80 -translate-x-full overflow-hidden
                      border-r border-sidebar-border bg-sidebar
                      transition-transform duration-300 ease-in-out
                      lg:sticky lg:top-0 lg:z-auto lg:h-screen lg:flex-none lg:translate-x-0">

            <div class="flex h-full flex-col">

                {{-- Logo --}}
                <div class="border-b border-sidebar-border px-4 py-3">
                    <a href="{{ route('admin.dashboard') }}"
                       class="flex items-center gap-3 text-sidebar-foreground no-underline">
                        <img src="{{ asset('images/LOGOHAJI2.png') }}"
                             alt="Logo RSUD Haji"
                             class="h-11 w-11 rounded-xl object-contain">
                        <span data-sidebar-label>
                            <span class="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                                Admin Panel
                            </span>
                            <span class="block text-xl font-semibold leading-none text-sidebar-foreground">
                                RSUD Haji
                            </span>
                        </span>
                    </a>
                </div>

                {{-- Nav Menu --}}
                <nav class="flex-1 space-y-5 overflow-y-auto px-3 py-5">
                    @foreach ([
                        'Navigasi' => [
                            ['route' => 'admin.dashboard',           'icon' => 'fa-gauge-high',  'label' => 'Dashboard',      'match' => 'admin.dashboard'],
                            ['route' => 'admin.profile.edit',        'icon' => 'fa-user-gear',   'label' => 'Profil Admin',   'match' => 'admin.profile.*'],
                            ['route' => 'admin.media-manager.index', 'icon' => 'fa-photo-film',  'label' => 'Media Manager',  'match' => 'admin.media-manager.*'],
                        ],
                        'Management Konten' => [
                            ['route' => 'admin.artikel.index',       'icon' => 'fa-newspaper',   'label' => 'Artikel',        'match' => 'admin.artikel.*'],
                        ],
                        'Management Rumah Sakit' => [
                            ['route' => 'admin.dokter.index',         'icon' => 'fa-user-md',    'label' => 'Dokter',         'match' => 'admin.dokter.*'],
                            ['route' => 'admin.profil-direksi.index', 'icon' => 'fa-id-badge',   'label' => 'Profil Direksi', 'match' => 'admin.profil-direksi.*'],
                            ['route' => 'admin.jadwal.index',         'icon' => 'fa-calendar',   'label' => 'Jadwal Dokter',  'match' => 'admin.jadwal.*'],
                        ],
                    ] as $group => $items)
                        <div>
                            <p class="sidebar-section-title px-3 mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                                {{ $group }}
                            </p>
                            <div class="space-y-0.5">
                                @foreach ($items as $item)
                                    <a href="{{ route($item['route']) }}"
                                       class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors
                                              {{ request()->routeIs($item['match'])
                                                ? 'active-menu'
: 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground' }}">
                                        <i class="fas {{ $item['icon'] }} w-5 text-center text-lg shrink-0 text-green-500"></i>
                                        <span data-sidebar-label>{{ $item['label'] }}</span>
                                    </a>
                                @endforeach
                            </div>
                        </div>
                    @endforeach
                </nav>

            </div>
        </aside>

        {{-- ======================== MAIN CONTENT ======================== --}}
        <div id="admin-content" data-admin-content class="flex min-w-0 flex-1 flex-col">

            {{-- Header --}}
            <header class="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur">
                <div class="flex flex-wrap items-center justify-between gap-4 px-6 py-4 lg:px-8">

                    <div class="flex items-center gap-3">
                        {{-- Hamburger (mobile only) --}}
                        <button id="sidebar-toggle" type="button"
                                class="flex flex-col items-center justify-center gap-1.5 rounded-lg
                                       border border-border p-2.5 transition hover:bg-accent lg:hidden"
                                aria-controls="admin-sidebar" aria-expanded="true">
                            <span class="block h-0.5 w-5 bg-foreground transition-all duration-300" id="bar1"></span>
                            <span class="block h-0.5 w-5 bg-foreground transition-all duration-300" id="bar2"></span>
                            <span class="block h-0.5 w-5 bg-foreground transition-all duration-300" id="bar3"></span>
                        </button>
                        <div>
                            <p class="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                                @yield('title')
                            </p>
                            <h1 class="mt-0.5 text-xl font-semibold tracking-tight text-foreground">
                                @yield('page-title', 'Admin Panel')
                            </h1>
                        </div>
                    </div>

                   {{-- Admin Info Dropdown --}}
<div class="relative" id="admin-dropdown-wrap">

    {{-- Trigger: foto saja --}}
    <button type="button"
            class="block rounded-full  hover:ring-green-500
                   transition-all duration-200 focus:outline-none">
        @if (!empty($currentAdmin?->foto_admin))
            <img src="{{ $currentAdmin->foto_admin_url }}"
                 alt="Foto Admin"
                 class="h-10 w-10 rounded-full object-cover">
        @else
            <div class="flex h-10 w-10 items-center justify-center rounded-full
                        bg-primary text-primary-foreground text-sm font-semibold">
                {{ strtoupper(substr($currentAdmin?->nama_admin ?? 'A', 0, 1)) }}
            </div>
        @endif
    </button>

    {{-- Dropdown Menu --}}
    <div class="admin-dropdown-menu absolute right-0 top-full z-50 pt-2">
        <div class="w-64 overflow-hidden rounded-xl border border-border bg-background"
             style="box-shadow: 0 8px 24px rgba(0,0,0,0.12);">

            {{-- Info Admin --}}
            <div class="flex items-center gap-3 border-b border-border px-4 py-3">
                @if (!empty($currentAdmin?->foto_admin))
                    <img src="{{ $currentAdmin->foto_admin_url }}"
                         alt="Foto Admin"
                         class="h-11 w-11 rounded-full object-cover ring-2 ring-border shrink-0">
                @else
                    <div class="flex h-11 w-11 items-center justify-center rounded-full
                                bg-primary text-primary-foreground text-sm font-semibold shrink-0">
                        {{ strtoupper(substr($currentAdmin?->nama_admin ?? 'A', 0, 1)) }}
                    </div>
                @endif
                <div style="min-width:0; display:flex; flex-direction:column; justify-content:center; gap:2px;">
                    <p style="margin:0; font-size:0.875rem; font-weight:600; line-height:1.2; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">
                        {{ $currentAdmin?->nama_admin }}
                    </p>
                    <p style="margin:0; font-size:0.75rem; line-height:1.2; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; color:#6b7280;">
                        {{ $currentAdmin?->username }}
                    </p>
                </div>
            </div>

            {{-- Menu Items --}}
            <div class="py-1.5">
                <a href="{{ route('admin.profile.edit') }}"
                   class="flex items-center gap-2.5 px-4 py-2.5 text-sm text-foreground
                          hover:bg-accent transition-colors no-underline">
                    <i class="fas fa-user-gear w-4 text-center text-muted-foreground"></i>
                    Profil Admin
                </a>

                <div class="mx-4 my-1 border-t border-border"></div>

                <form action="{{ route('admin.logout') }}" method="POST" style="margin:0;">
                    @csrf
                    <button type="submit"
                            class="flex w-full items-center gap-2.5 px-4 py-2.5 text-sm
                                   text-red-600 hover:bg-red-50 transition-colors text-left">
                        <i class="fas fa-right-from-bracket w-4 text-center"></i>
                        Logout
                    </button>
                </form>
            </div>

        </div>
    </div>
</div>

                </div>
            </header>

            {{-- Page Content --}}
            <main class="flex-1 px-4 py-6 lg:px-8 lg:py-8">
                <div class="mx-auto w-full max-w-7xl space-y-6">

                    {{-- Error Alert --}}
                    @if ($errors->any())
                        <div class="rounded-lg border border-destructive/30 bg-destructive/10 px-5 py-4 text-destructive" role="alert">
                            <div class="flex items-start justify-between gap-4">
                                <div>
                                    <h4 class="text-sm font-semibold">Gagal!</h4>
                                    <ul class="mt-2 list-disc space-y-1 pl-5 text-sm">
                                        @foreach ($errors->all() as $error)
                                            <li>{{ $error }}</li>
                                        @endforeach
                                    </ul>
                                </div>
                                <button type="button" class="text-destructive/70 hover:text-destructive" data-dismiss="alert">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        </div>
                    @endif

                    {{-- Success Alert --}}
                    @if (session('success'))
                        <div class="rounded-lg border border-emerald-200 bg-emerald-50 px-5 py-4 text-emerald-700" role="alert">
                            <div class="flex items-center justify-between gap-4">
                                <p class="text-sm font-medium">{{ session('success') }}</p>
                                <button type="button" class="text-emerald-500 hover:text-emerald-700" data-dismiss="alert">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        </div>
                    @endif

                    @yield('content')
                </div>
            </main>

            {{-- Footer --}}
            <footer class="border-t border-border bg-background/70 px-6 py-4 text-sm text-muted-foreground backdrop-blur lg:px-8">
                <div class="mx-auto flex w-full max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <span><strong class="font-semibold text-foreground">Copyright &copy; 2026</strong> Web RSUD Haji.</span>
                    <span><strong class="font-semibold text-foreground">Version</strong> 1.0.0</span>
                </div>
            </footer>

        </div>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/admin-lte@3.2/dist/js/adminlte.min.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', function () {
        const body = document.body;
        const sidebar = document.getElementById('admin-sidebar');
        const content = document.getElementById('admin-content');
        const toggleButton = document.getElementById('sidebar-toggle');
        const bar1 = document.getElementById('bar1');
        const bar2 = document.getElementById('bar2');
        const bar3 = document.getElementById('bar3');
        const mobileQuery = window.matchMedia('(max-width: 1023px)');

        const saved = localStorage.getItem('admin.sidebar.collapsed');
        let sidebarOpen = saved === '1' ? false : !mobileQuery.matches;

        function renderToggleIcon() {
            if (sidebarOpen) {
                bar1.classList.add('translate-y-2', 'rotate-45');
                bar2.classList.add('opacity-0');
                bar3.classList.add('-translate-y-2', '-rotate-45');
            } else {
                bar1.classList.remove('translate-y-2', 'rotate-45');
                bar2.classList.remove('opacity-0');
                bar3.classList.remove('-translate-y-2', '-rotate-45');
            }
            toggleButton.setAttribute('aria-expanded', sidebarOpen ? 'true' : 'false');
        }

        function syncSidebar() {
            if (mobileQuery.matches) {
                body.classList.remove('sidebar-collapsed');
                if (sidebarOpen) {
                    sidebar.classList.remove('-translate-x-full');
                    sidebar.classList.add('translate-x-0');
                    content.classList.add('translate-x-80');
                } else {
                    sidebar.classList.add('-translate-x-full');
                    sidebar.classList.remove('translate-x-0');
                    content.classList.remove('translate-x-80');
                }
            } else {
                sidebar.classList.remove('-translate-x-full');
                sidebar.classList.add('translate-x-0');
                content.classList.remove('translate-x-80');
                body.classList.toggle('sidebar-collapsed', !sidebarOpen);
            }
            renderToggleIcon();
        }

        toggleButton.addEventListener('click', function () {
            sidebarOpen = !sidebarOpen;
            localStorage.setItem('admin.sidebar.collapsed', sidebarOpen ? '0' : '1');
            syncSidebar();
        });

        sidebar.addEventListener('mouseenter', function () {
            if (!mobileQuery.matches && !sidebarOpen) {
                document.body.classList.add('sidebar-hover');
            }
        });

        sidebar.addEventListener('mouseleave', function () {
            if (!mobileQuery.matches && !sidebarOpen) {
                document.body.classList.remove('sidebar-hover');
            }
        });

        sidebar.querySelectorAll('a[href]').forEach(function (link) {
            link.addEventListener('click', function () {
                localStorage.setItem('admin.sidebar.collapsed', '1');
            });
        });

        mobileQuery.addEventListener('change', function () {
            sidebarOpen = !mobileQuery.matches;
            syncSidebar();
        });

        syncSidebar();
    });
</script>
@yield('scripts')
</body>
</html>