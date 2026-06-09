<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EnsureAdminAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if (! Auth::guard('admin')->check()) {
            return redirect()->guest(route('admin.login'));
        }

        // Ensure authorization/policy calls use the admin guard for admin routes
        Auth::shouldUse('admin');

        return $next($request);
    }
}
