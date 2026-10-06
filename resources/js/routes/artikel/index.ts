import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\ArtikelController::index
 * @see app/Http/Controllers/ArtikelController.php:16
 * @route '/api/artikel'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/artikel',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ArtikelController::index
 * @see app/Http/Controllers/ArtikelController.php:16
 * @route '/api/artikel'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ArtikelController::index
 * @see app/Http/Controllers/ArtikelController.php:16
 * @route '/api/artikel'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ArtikelController::index
 * @see app/Http/Controllers/ArtikelController.php:16
 * @route '/api/artikel'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ArtikelController::store
 * @see app/Http/Controllers/ArtikelController.php:27
 * @route '/api/artikel'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/artikel',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ArtikelController::store
 * @see app/Http/Controllers/ArtikelController.php:27
 * @route '/api/artikel'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ArtikelController::store
 * @see app/Http/Controllers/ArtikelController.php:27
 * @route '/api/artikel'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ArtikelController::show
 * @see app/Http/Controllers/ArtikelController.php:67
 * @route '/api/artikel/{artikel}'
 */
export const show = (args: { artikel: string | number } | [artikel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/artikel/{artikel}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ArtikelController::show
 * @see app/Http/Controllers/ArtikelController.php:67
 * @route '/api/artikel/{artikel}'
 */
show.url = (args: { artikel: string | number } | [artikel: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { artikel: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    artikel: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        artikel: args.artikel,
                }

    return show.definition.url
            .replace('{artikel}', parsedArgs.artikel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ArtikelController::show
 * @see app/Http/Controllers/ArtikelController.php:67
 * @route '/api/artikel/{artikel}'
 */
show.get = (args: { artikel: string | number } | [artikel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ArtikelController::show
 * @see app/Http/Controllers/ArtikelController.php:67
 * @route '/api/artikel/{artikel}'
 */
show.head = (args: { artikel: string | number } | [artikel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ArtikelController::update
 * @see app/Http/Controllers/ArtikelController.php:76
 * @route '/api/artikel/{artikel}'
 */
export const update = (args: { artikel: string | number } | [artikel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/artikel/{artikel}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\ArtikelController::update
 * @see app/Http/Controllers/ArtikelController.php:76
 * @route '/api/artikel/{artikel}'
 */
update.url = (args: { artikel: string | number } | [artikel: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { artikel: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    artikel: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        artikel: args.artikel,
                }

    return update.definition.url
            .replace('{artikel}', parsedArgs.artikel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ArtikelController::update
 * @see app/Http/Controllers/ArtikelController.php:76
 * @route '/api/artikel/{artikel}'
 */
update.put = (args: { artikel: string | number } | [artikel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\ArtikelController::update
 * @see app/Http/Controllers/ArtikelController.php:76
 * @route '/api/artikel/{artikel}'
 */
update.patch = (args: { artikel: string | number } | [artikel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\ArtikelController::destroy
 * @see app/Http/Controllers/ArtikelController.php:137
 * @route '/api/artikel/{artikel}'
 */
export const destroy = (args: { artikel: string | number } | [artikel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/artikel/{artikel}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ArtikelController::destroy
 * @see app/Http/Controllers/ArtikelController.php:137
 * @route '/api/artikel/{artikel}'
 */
destroy.url = (args: { artikel: string | number } | [artikel: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { artikel: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    artikel: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        artikel: args.artikel,
                }

    return destroy.definition.url
            .replace('{artikel}', parsedArgs.artikel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ArtikelController::destroy
 * @see app/Http/Controllers/ArtikelController.php:137
 * @route '/api/artikel/{artikel}'
 */
destroy.delete = (args: { artikel: string | number } | [artikel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})
const artikel = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
show: Object.assign(show, show),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default artikel