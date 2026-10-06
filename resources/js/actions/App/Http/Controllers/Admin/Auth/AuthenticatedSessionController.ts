import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\Auth\AuthenticatedSessionController::create
 * @see app/Http/Controllers/Admin/Auth/AuthenticatedSessionController.php:14
 * @route '/admin'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Auth\AuthenticatedSessionController::create
 * @see app/Http/Controllers/Admin/Auth/AuthenticatedSessionController.php:14
 * @route '/admin'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Auth\AuthenticatedSessionController::create
 * @see app/Http/Controllers/Admin/Auth/AuthenticatedSessionController.php:14
 * @route '/admin'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Auth\AuthenticatedSessionController::create
 * @see app/Http/Controllers/Admin/Auth/AuthenticatedSessionController.php:14
 * @route '/admin'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\Auth\AuthenticatedSessionController::store
 * @see app/Http/Controllers/Admin/Auth/AuthenticatedSessionController.php:25
 * @route '/admin/login'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\Auth\AuthenticatedSessionController::store
 * @see app/Http/Controllers/Admin/Auth/AuthenticatedSessionController.php:25
 * @route '/admin/login'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Auth\AuthenticatedSessionController::store
 * @see app/Http/Controllers/Admin/Auth/AuthenticatedSessionController.php:25
 * @route '/admin/login'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\Auth\AuthenticatedSessionController::destroy
 * @see app/Http/Controllers/Admin/Auth/AuthenticatedSessionController.php:36
 * @route '/admin/logout'
 */
export const destroy = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: destroy.url(options),
    method: 'post',
})

destroy.definition = {
    methods: ["post"],
    url: '/admin/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\Auth\AuthenticatedSessionController::destroy
 * @see app/Http/Controllers/Admin/Auth/AuthenticatedSessionController.php:36
 * @route '/admin/logout'
 */
destroy.url = (options?: RouteQueryOptions) => {
    return destroy.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Auth\AuthenticatedSessionController::destroy
 * @see app/Http/Controllers/Admin/Auth/AuthenticatedSessionController.php:36
 * @route '/admin/logout'
 */
destroy.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: destroy.url(options),
    method: 'post',
})
const AuthenticatedSessionController = { create, store, destroy }

export default AuthenticatedSessionController