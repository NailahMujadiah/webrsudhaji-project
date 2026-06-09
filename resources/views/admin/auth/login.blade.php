<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Login | Web RSUD Haji</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: {
                            DEFAULT: '#2563eb',
                            foreground: '#ffffff',
                            hover: '#1d4ed8',
                        },
                        card: {
                            DEFAULT: '#ffffff',
                            foreground: '#0f172a',
                        },
                        muted: {
                            DEFAULT: '#f1f5f9',
                            foreground: '#64748b',
                        },
                        destructive: {
                            DEFAULT: '#fee2e2',
                            foreground: '#991b1b',
                            border: '#fca5a5',
                        },
                        border: '#e2e8f0',
                        input: '#e2e8f0',
                        ring: '#2563eb',
                        background: '#f8fafc',
                    },
                    borderRadius: {
                        lg: '0.5rem',
                        md: '0.375rem',
                        sm: '0.25rem',
                    },
                    boxShadow: {
                        card: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
                        'card-hover': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                    }
                }
            }
        }
    </script>
    <style>
        * { box-sizing: border-box; }
        body { font-family: ui-sans-serif, system-ui, -apple-system, sans-serif; }

        /* --- shadcn/ui Button --- */
        .btn-primary {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            white-space: nowrap;
            border-radius: 0.375rem;
            font-size: 0.875rem;
            font-weight: 500;
            line-height: 1.25rem;
            transition: background-color 0.15s, box-shadow 0.15s;
            background-color: #2563eb;
            color: #ffffff;
            padding: 0.5rem 1rem;
            width: 100%;
            border: none;
            cursor: pointer;
            height: 2.5rem;
        }
        .btn-primary:hover { background-color: #1d4ed8; }
        .btn-primary:focus-visible {
            outline: 2px solid #2563eb;
            outline-offset: 2px;
        }
        .btn-primary:disabled { opacity: 0.5; cursor: not-allowed; }

        /* --- shadcn/ui Input --- */
        .input-field {
            display: flex;
            height: 2.5rem;
            width: 100%;
            border-radius: 0.375rem;
            border: 1px solid #e2e8f0;
            background-color: #ffffff;
            padding: 0.5rem 0.75rem;
            font-size: 0.875rem;
            line-height: 1.25rem;
            color: #0f172a;
            transition: border-color 0.15s, box-shadow 0.15s;
            outline: none;
        }
        .input-field::placeholder { color: #94a3b8; }
        .input-field:focus {
            border-color: #2563eb;
            box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
        }

        /* --- Input wrapper with icon --- */
        .input-wrapper {
            position: relative;
            display: flex;
            align-items: center;
        }
        .input-wrapper .input-field {
            padding-left: 2.5rem;
        }
        .input-icon {
            position: absolute;
            left: 0.75rem;
            color: #94a3b8;
            width: 1rem;
            height: 1rem;
            pointer-events: none;
        }

        /* --- shadcn/ui Card --- */
        .card {
            background-color: #ffffff;
            border-radius: 0.5rem;
            border: 1px solid #e2e8f0;
            box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
            overflow: hidden;
        }
        .card-header {
            display: flex;
            flex-direction: column;
            gap: 0.375rem;
            padding: 1.5rem 1.5rem 0;
        }
        .card-content {
            padding: 1.5rem;
        }

        /* --- shadcn/ui Alert (destructive) --- */
        .alert-destructive {
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;
            padding: 0.75rem 1rem;
            border-radius: 0.375rem;
            border: 1px solid #fca5a5;
            background-color: #fee2e2;
            color: #991b1b;
            font-size: 0.875rem;
            line-height: 1.25rem;
            margin-bottom: 1rem;
        }
        .alert-icon {
            width: 1rem;
            height: 1rem;
            margin-top: 0.125rem;
            flex-shrink: 0;
        }

        /* --- Label --- */
        .label {
            font-size: 0.875rem;
            font-weight: 500;
            color: #0f172a;
            line-height: 1;
            display: block;
            margin-bottom: 0.375rem;
        }

        /* --- Form group --- */
        .form-group {
            display: flex;
            flex-direction: column;
            gap: 0.375rem;
            margin-bottom: 1rem;
        }

        /* --- Separator --- */
        .separator {
            border: none;
            border-top: 1px solid #e2e8f0;
            margin: 0 -1.5rem;
            margin-bottom: 1.5rem;
        }
    </style>
</head>
<body style="min-height: 100vh; background-color: #f8fafc; display: flex; align-items: center; justify-content: center; padding: 1rem;">

<div style="width: 100%; max-width: 26rem;">

    {{-- Logo / Brand --}}
    <div style="text-align: center; margin-bottom: 1.5rem;">
    <a href="{{ url('/') }}" style="text-decoration: none; display: inline-flex; align-items: center; gap: 0.75rem;">
        <img src="{{ asset('images/logohaji.webp') }}" alt="Logo RSUD Haji" style="height: 4rem; width: auto;">
    </a>
</div>


    {{-- Card --}}
    <div class="card">
        <div class="card-header" style="padding-bottom: 1.25rem;">
            <h1 style="font-size: 1.25rem; font-weight: 600; color: #0f172a; margin: 0; text-align: center;">
                Masuk Panel Admin
            </h1>
            <p style="font-size: 0.875rem; color: #64748b; margin: 0; text-align: center;">
                Gunakan akun admin untuk melanjutkan.
            </p>
        </div>

        <hr class="separator" style="border: none; border-top: 1px solid #e2e8f0; margin: 0 0 1.5rem 0;">

        <div class="card-content" style="padding-top: 0;">

            {{-- Error Alert --}}
            @if ($errors->any())
                <div class="alert-destructive" role="alert">
                    <svg class="alert-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="12" x2="12" y1="8" y2="12"/>
                        <line x1="12" x2="12.01" y1="16" y2="16"/>
                    </svg>
                    <span>{{ $errors->first() }}</span>
                </div>
            @endif

            <form method="POST" action="{{ route('admin.login.store') }}">
                @csrf

                {{-- Username --}}
                <div class="form-group">
                    <label class="label" for="username">Username</label>
                    <div class="input-wrapper">
                        <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                            <circle cx="12" cy="7" r="4"/>
                        </svg>
                        <input
                            type="text"
                            id="username"
                            class="input-field"
                            placeholder="Masukkan username"
                            name="username"
                            value="{{ old('username') }}"
                            required
                            autofocus
                            autocomplete="username"
                        >
                    </div>
                </div>

                {{-- Password --}}
                <div class="form-group" style="margin-bottom: 1.5rem;">
                    <label class="label" for="password">Password</label>
                    <div class="input-wrapper">
                        <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                        </svg>
                        <input
                            type="password"
                            id="password"
                            class="input-field"
                            placeholder="Masukkan password"
                            name="password"
                            required
                            autocomplete="current-password"
                        >
                    </div>
                </div>

                {{-- Submit Button --}}
                <button type="submit" class="btn-primary">
                    Masuk
                </button>

            </form>
        </div>
    </div>

    {{-- Footer --}}
    <p style="text-align: center; font-size: 0.75rem; color: #94a3b8; margin-top: 1.5rem;">
        &copy; {{ date('Y') }} RSUD Haji. Hak cipta dilindungi.
    </p>

</div>

</body>
</html>