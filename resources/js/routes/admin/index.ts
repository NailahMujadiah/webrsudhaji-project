import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
import loginDf2c2a from './login'
import profile from './profile'
import mediaManager from './media-manager'
import artikel from './artikel'
import dokter from './dokter'
import jadwal from './jadwal'
import profilDireksi from './profil-direksi'
/**
* @see \App\Http\Controllers\AdminController::index
 * @see app/Http/Controllers/AdminController.php:19
 * @route '/api/admin'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/admin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AdminController::index
 * @see app/Http/Controllers/AdminController.php:19
 * @route '/api/admin'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AdminController::index
 * @see app/Http/Controllers/AdminController.php:19
 * @route '/api/admin'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AdminController::index
 * @see app/Http/Controllers/AdminController.php:19
 * @route '/api/admin'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AdminController::store
 * @see app/Http/Controllers/AdminController.php:40
 * @route '/api/admin'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/admin',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AdminController::store
 * @see app/Http/Controllers/AdminController.php:40
 * @route '/api/admin'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AdminController::store
 * @see app/Http/Controllers/AdminController.php:40
 * @route '/api/admin'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AdminController::show
 * @see app/Http/Controllers/AdminController.php:60
 * @route '/api/admin/{admin}'
 */
export const show = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/admin/{admin}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AdminController::show
 * @see app/Http/Controllers/AdminController.php:60
 * @route '/api/admin/{admin}'
 */
show.url = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { admin: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    admin: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        admin: args.admin,
                }

    return show.definition.url
            .replace('{admin}', parsedArgs.admin.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AdminController::show
 * @see app/Http/Controllers/AdminController.php:60
 * @route '/api/admin/{admin}'
 */
show.get = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AdminController::show
 * @see app/Http/Controllers/AdminController.php:60
 * @route '/api/admin/{admin}'
 */
show.head = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AdminController::update
 * @see app/Http/Controllers/AdminController.php:77
 * @route '/api/admin/{admin}'
 */
export const update = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/admin/{admin}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\AdminController::update
 * @see app/Http/Controllers/AdminController.php:77
 * @route '/api/admin/{admin}'
 */
update.url = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { admin: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    admin: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        admin: args.admin,
                }

    return update.definition.url
            .replace('{admin}', parsedArgs.admin.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AdminController::update
 * @see app/Http/Controllers/AdminController.php:77
 * @route '/api/admin/{admin}'
 */
update.put = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\AdminController::update
 * @see app/Http/Controllers/AdminController.php:77
 * @route '/api/admin/{admin}'
 */
update.patch = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\AdminController::destroy
 * @see app/Http/Controllers/AdminController.php:113
 * @route '/api/admin/{admin}'
 */
export const destroy = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/admin/{admin}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AdminController::destroy
 * @see app/Http/Controllers/AdminController.php:113
 * @route '/api/admin/{admin}'
 */
destroy.url = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { admin: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    admin: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        admin: args.admin,
                }

    return destroy.definition.url
            .replace('{admin}', parsedArgs.admin.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AdminController::destroy
 * @see app/Http/Controllers/AdminController.php:113
 * @route '/api/admin/{admin}'
 */
destroy.delete = (args: { admin: string | number } | [admin: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Admin\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Admin/Auth/AuthenticatedSessionController.php:14
 * @route '/admin'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/admin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Admin/Auth/AuthenticatedSessionController.php:14
 * @route '/admin'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Admin/Auth/AuthenticatedSessionController.php:14
 * @route '/admin'
 */
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Auth\AuthenticatedSessionController::login
 * @see app/Http/Controllers/Admin/Auth/AuthenticatedSessionController.php:14
 * @route '/admin'
 */
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

/**
 * @see routes/web.php:128
 * @route '/admin/dashboard'
 */
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/admin/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:128
 * @route '/admin/dashboard'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:128
 * @route '/admin/dashboard'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:128
 * @route '/admin/dashboard'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\Auth\AuthenticatedSessionController::logout
 * @see app/Http/Controllers/Admin/Auth/AuthenticatedSessionController.php:36
 * @route '/admin/logout'
 */
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/admin/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\Auth\AuthenticatedSessionController::logout
 * @see app/Http/Controllers/Admin/Auth/AuthenticatedSessionController.php:36
 * @route '/admin/logout'
 */
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Auth\AuthenticatedSessionController::logout
 * @see app/Http/Controllers/Admin/Auth/AuthenticatedSessionController.php:36
 * @route '/admin/logout'
 */
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})
const admin = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
show: Object.assign(show, show),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
login: Object.assign(login, loginDf2c2a),
dashboard: Object.assign(dashboard, dashboard),
profile: Object.assign(profile, profile),
mediaManager: Object.assign(mediaManager, mediaManager),
logout: Object.assign(logout, logout),
artikel: Object.assign(artikel, artikel),
dokter: Object.assign(dokter, dokter),
jadwal: Object.assign(jadwal, jadwal),
profilDireksi: Object.assign(profilDireksi, profilDireksi),
}

export default admin