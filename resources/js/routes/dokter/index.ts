import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\DokterController::index
 * @see app/Http/Controllers/DokterController.php:72
 * @route '/api/dokter'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/dokter',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DokterController::index
 * @see app/Http/Controllers/DokterController.php:72
 * @route '/api/dokter'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DokterController::index
 * @see app/Http/Controllers/DokterController.php:72
 * @route '/api/dokter'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DokterController::index
 * @see app/Http/Controllers/DokterController.php:72
 * @route '/api/dokter'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\DokterController::store
 * @see app/Http/Controllers/DokterController.php:103
 * @route '/api/dokter'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/dokter',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\DokterController::store
 * @see app/Http/Controllers/DokterController.php:103
 * @route '/api/dokter'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DokterController::store
 * @see app/Http/Controllers/DokterController.php:103
 * @route '/api/dokter'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\DokterController::show
 * @see app/Http/Controllers/DokterController.php:121
 * @route '/api/dokter/{dokter}'
 */
export const show = (args: { dokter: string | number } | [dokter: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/dokter/{dokter}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DokterController::show
 * @see app/Http/Controllers/DokterController.php:121
 * @route '/api/dokter/{dokter}'
 */
show.url = (args: { dokter: string | number } | [dokter: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { dokter: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    dokter: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        dokter: args.dokter,
                }

    return show.definition.url
            .replace('{dokter}', parsedArgs.dokter.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DokterController::show
 * @see app/Http/Controllers/DokterController.php:121
 * @route '/api/dokter/{dokter}'
 */
show.get = (args: { dokter: string | number } | [dokter: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DokterController::show
 * @see app/Http/Controllers/DokterController.php:121
 * @route '/api/dokter/{dokter}'
 */
show.head = (args: { dokter: string | number } | [dokter: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\DokterController::update
 * @see app/Http/Controllers/DokterController.php:132
 * @route '/api/dokter/{dokter}'
 */
export const update = (args: { dokter: string | number } | [dokter: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/dokter/{dokter}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\DokterController::update
 * @see app/Http/Controllers/DokterController.php:132
 * @route '/api/dokter/{dokter}'
 */
update.url = (args: { dokter: string | number } | [dokter: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { dokter: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    dokter: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        dokter: args.dokter,
                }

    return update.definition.url
            .replace('{dokter}', parsedArgs.dokter.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DokterController::update
 * @see app/Http/Controllers/DokterController.php:132
 * @route '/api/dokter/{dokter}'
 */
update.put = (args: { dokter: string | number } | [dokter: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\DokterController::update
 * @see app/Http/Controllers/DokterController.php:132
 * @route '/api/dokter/{dokter}'
 */
update.patch = (args: { dokter: string | number } | [dokter: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\DokterController::destroy
 * @see app/Http/Controllers/DokterController.php:152
 * @route '/api/dokter/{dokter}'
 */
export const destroy = (args: { dokter: string | number } | [dokter: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/dokter/{dokter}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\DokterController::destroy
 * @see app/Http/Controllers/DokterController.php:152
 * @route '/api/dokter/{dokter}'
 */
destroy.url = (args: { dokter: string | number } | [dokter: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { dokter: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    dokter: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        dokter: args.dokter,
                }

    return destroy.definition.url
            .replace('{dokter}', parsedArgs.dokter.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DokterController::destroy
 * @see app/Http/Controllers/DokterController.php:152
 * @route '/api/dokter/{dokter}'
 */
destroy.delete = (args: { dokter: string | number } | [dokter: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
 * @see routes/web.php:97
 * @route '/detail-dokter'
 */
export const detail = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: detail.url(options),
    method: 'get',
})

detail.definition = {
    methods: ["get","head"],
    url: '/detail-dokter',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:97
 * @route '/detail-dokter'
 */
detail.url = (options?: RouteQueryOptions) => {
    return detail.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:97
 * @route '/detail-dokter'
 */
detail.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: detail.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:97
 * @route '/detail-dokter'
 */
detail.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: detail.url(options),
    method: 'head',
})
const dokter = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
show: Object.assign(show, show),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
detail: Object.assign(detail, detail),
}

export default dokter