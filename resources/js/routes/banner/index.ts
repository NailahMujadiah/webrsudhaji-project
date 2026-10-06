import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\BannerController::index
 * @see app/Http/Controllers/BannerController.php:10
 * @route '/api/banner'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/banner',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BannerController::index
 * @see app/Http/Controllers/BannerController.php:10
 * @route '/api/banner'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BannerController::index
 * @see app/Http/Controllers/BannerController.php:10
 * @route '/api/banner'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\BannerController::index
 * @see app/Http/Controllers/BannerController.php:10
 * @route '/api/banner'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BannerController::store
 * @see app/Http/Controllers/BannerController.php:21
 * @route '/api/banner'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/banner',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BannerController::store
 * @see app/Http/Controllers/BannerController.php:21
 * @route '/api/banner'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BannerController::store
 * @see app/Http/Controllers/BannerController.php:21
 * @route '/api/banner'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BannerController::show
 * @see app/Http/Controllers/BannerController.php:43
 * @route '/api/banner/{banner}'
 */
export const show = (args: { banner: string | number } | [banner: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/banner/{banner}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BannerController::show
 * @see app/Http/Controllers/BannerController.php:43
 * @route '/api/banner/{banner}'
 */
show.url = (args: { banner: string | number } | [banner: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { banner: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    banner: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        banner: args.banner,
                }

    return show.definition.url
            .replace('{banner}', parsedArgs.banner.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BannerController::show
 * @see app/Http/Controllers/BannerController.php:43
 * @route '/api/banner/{banner}'
 */
show.get = (args: { banner: string | number } | [banner: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\BannerController::show
 * @see app/Http/Controllers/BannerController.php:43
 * @route '/api/banner/{banner}'
 */
show.head = (args: { banner: string | number } | [banner: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BannerController::update
 * @see app/Http/Controllers/BannerController.php:52
 * @route '/api/banner/{banner}'
 */
export const update = (args: { banner: string | number } | [banner: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/banner/{banner}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\BannerController::update
 * @see app/Http/Controllers/BannerController.php:52
 * @route '/api/banner/{banner}'
 */
update.url = (args: { banner: string | number } | [banner: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { banner: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    banner: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        banner: args.banner,
                }

    return update.definition.url
            .replace('{banner}', parsedArgs.banner.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BannerController::update
 * @see app/Http/Controllers/BannerController.php:52
 * @route '/api/banner/{banner}'
 */
update.put = (args: { banner: string | number } | [banner: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\BannerController::update
 * @see app/Http/Controllers/BannerController.php:52
 * @route '/api/banner/{banner}'
 */
update.patch = (args: { banner: string | number } | [banner: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\BannerController::destroy
 * @see app/Http/Controllers/BannerController.php:87
 * @route '/api/banner/{banner}'
 */
export const destroy = (args: { banner: string | number } | [banner: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/banner/{banner}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\BannerController::destroy
 * @see app/Http/Controllers/BannerController.php:87
 * @route '/api/banner/{banner}'
 */
destroy.url = (args: { banner: string | number } | [banner: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { banner: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    banner: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        banner: args.banner,
                }

    return destroy.definition.url
            .replace('{banner}', parsedArgs.banner.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BannerController::destroy
 * @see app/Http/Controllers/BannerController.php:87
 * @route '/api/banner/{banner}'
 */
destroy.delete = (args: { banner: string | number } | [banner: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})
const banner = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
show: Object.assign(show, show),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default banner