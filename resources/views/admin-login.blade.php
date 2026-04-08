<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Admin</title>
    <style>
        :root {
            color-scheme: light;
            --bg: #f6f8fb;
            --card: #ffffff;
            --text: #1f2937;
            --muted: #6b7280;
            --primary: #0f766e;
            --danger: #b91c1c;
            --border: #e5e7eb;
        }

        body {
            margin: 0;
            min-height: 100vh;
            display: grid;
            place-items: center;
            background: radial-gradient(circle at 20% 20%, #d1fae5 0%, var(--bg) 50%);
            color: var(--text);
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            padding: 20px;
        }

        .card {
            width: 100%;
            max-width: 420px;
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: 14px;
            padding: 24px;
            box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
        }

        h1 {
            margin: 0 0 8px;
            font-size: 24px;
        }

        p {
            margin: 0 0 20px;
            color: var(--muted);
        }

        .row {
            margin-bottom: 14px;
        }

        label {
            display: block;
            margin-bottom: 6px;
            font-weight: 600;
            font-size: 14px;
        }

        input {
            width: 100%;
            box-sizing: border-box;
            border: 1px solid var(--border);
            border-radius: 10px;
            font-size: 14px;
            padding: 10px 12px;
        }

        button {
            width: 100%;
            border: 0;
            border-radius: 10px;
            padding: 12px;
            background: var(--primary);
            color: #fff;
            font-weight: 600;
            cursor: pointer;
        }

        .error {
            margin-bottom: 12px;
            color: var(--danger);
            font-size: 14px;
        }

        .status {
            margin-bottom: 12px;
            color: var(--primary);
            font-size: 14px;
        }

        .auth-box {
            margin-bottom: 16px;
            border: 1px solid var(--border);
            border-radius: 10px;
            padding: 12px;
            font-size: 14px;
            background: #f9fafb;
        }

        .auth-box strong {
            display: inline-block;
            min-width: 90px;
        }

        .logout {
            margin-top: 10px;
            background: #334155;
        }
    </style>
</head>
<body>
<div class="card">
    <h1>Login Admin</h1>
    <p>Akses cepat halaman login admin via URL /admin.</p>

    @if (session('status'))
        <div class="status">{{ session('status') }}</div>
    @endif

    @if (Auth::guard('admin')->check())
        <div class="auth-box">
            <div><strong>ID Admin:</strong> {{ Auth::guard('admin')->user()->id_admin }}</div>
            <div><strong>Username:</strong> {{ Auth::guard('admin')->user()->username }}</div>
            <div><strong>Nama:</strong> {{ Auth::guard('admin')->user()->nama_admin }}</div>
        </div>

        <form method="POST" action="{{ route('admin.logout') }}">
            @csrf
            <button type="submit" class="logout">Logout Admin</button>
        </form>
    @else
        @if ($errors->any())
            <div class="error">{{ $errors->first() }}</div>
        @endif

        <form method="POST" action="{{ route('admin.login.submit') }}">
            @csrf
            <div class="row">
                <label for="username">Username</label>
                <input id="username" type="text" name="username" value="{{ old('username') }}" required autofocus>
            </div>

            <div class="row">
                <label for="password">Password</label>
                <input id="password" type="password" name="password" required>
            </div>

            <button type="submit">Login</button>
        </form>
    @endif
</div>
</body>
</html>
