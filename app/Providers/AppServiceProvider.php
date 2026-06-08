<?php

namespace App\Providers;

use App\Models\Admin;
use App\Policies\AdminContentPolicy;
use Carbon\CarbonImmutable;
use Illuminate\Auth\Middleware\RedirectIfAuthenticated;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;
use Illuminate\Validation\Rules\Password;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Paginator::useBootstrap();
        $this->configureDefaults();
        $this->registerPolicies();
        $this->configureAuthRedirects();
    }

    /**
     * Register authorization policies.
     */
    protected function registerPolicies(): void
    {
        Gate::policy(Model::class, AdminContentPolicy::class);
    }

    /**
     * Configure default behaviors for production-ready applications.
     */
    protected function configureDefaults(): void
    {
        
    if (app()->isProduction()) {
        URL::forceScheme('https');
    }
    
    Date::use(CarbonImmutable::class);

        DB::prohibitDestructiveCommands(
            app()->isProduction(),
        );

        Password::defaults(fn (): ?Password => app()->isProduction()
            ? Password::min(12)
                ->mixedCase()
                ->letters()
                ->numbers()
                ->symbols()
                ->uncompromised()
            : null,
        );
    }

    /**
     * Keep admin-auth flow on admin pages when guest/admin middleware triggers redirects.
     */
    protected function configureAuthRedirects(): void
    {
        RedirectIfAuthenticated::redirectUsing(function (Request $request): string {
            if ($request->is('admin') || $request->is('admin/*')) {
                return route('admin.dashboard');
            }

            return route('dashboard');
        });
    }
}
