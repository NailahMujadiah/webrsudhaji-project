import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\DokterController::index
 * @see app/Http/Controllers/DokterController.php:72
 * @route '/api/dokter'
 */
const index2d187505c9fce4532e881abbe2b885ae = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index2d187505c9fce4532e881abbe2b885ae.url(options),
    method: 'get',
})

index2d187505c9fce4532e881abbe2b885ae.definition = {
    methods: ["get","head"],
    url: '/api/dokter',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DokterController::index
 * @see app/Http/Controllers/DokterController.php:72
 * @route '/api/dokter'
 */
index2d187505c9fce4532e881abbe2b885ae.url = (options?: RouteQueryOptions) => {
    return index2d187505c9fce4532e881abbe2b885ae.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DokterController::index
 * @see app/Http/Controllers/DokterController.php:72
 * @route '/api/dokter'
 */
index2d187505c9fce4532e881abbe2b885ae.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index2d187505c9fce4532e881abbe2b885ae.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DokterController::index
 * @see app/Http/Controllers/DokterController.php:72
 * @route '/api/dokter'
 */
index2d187505c9fce4532e881abbe2b885ae.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index2d187505c9fce4532e881abbe2b885ae.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\DokterController::index
 * @see app/Http/Controllers/DokterController.php:72
 * @route '/dokter'
 */
const index02c24f56a40502bb61e0ffa03e6fe89b = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index02c24f56a40502bb61e0ffa03e6fe89b.url(options),
    method: 'get',
})

index02c24f56a40502bb61e0ffa03e6fe89b.definition = {
    methods: ["get","head"],
    url: '/dokter',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DokterController::index
 * @see app/Http/Controllers/DokterController.php:72
 * @route '/dokter'
 */
index02c24f56a40502bb61e0ffa03e6fe89b.url = (options?: RouteQueryOptions) => {
    return index02c24f56a40502bb61e0ffa03e6fe89b.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DokterController::index
 * @see app/Http/Controllers/DokterController.php:72
 * @route '/dokter'
 */
index02c24f56a40502bb61e0ffa03e6fe89b.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index02c24f56a40502bb61e0ffa03e6fe89b.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DokterController::index
 * @see app/Http/Controllers/DokterController.php:72
 * @route '/dokter'
 */
index02c24f56a40502bb61e0ffa03e6fe89b.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index02c24f56a40502bb61e0ffa03e6fe89b.url(options),
    method: 'head',
})

export const index = {
    '/api/dokter': index2d187505c9fce4532e881abbe2b885ae,
    '/dokter': index02c24f56a40502bb61e0ffa03e6fe89b,
}

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
* @see \App\Http\Controllers\DokterController::adminOptions
 * @see app/Http/Controllers/DokterController.php:171
 * @route '/api/dokter-admin-options'
 */
export const adminOptions = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: adminOptions.url(options),
    method: 'get',
})

adminOptions.definition = {
    methods: ["get","head"],
    url: '/api/dokter-admin-options',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DokterController::adminOptions
 * @see app/Http/Controllers/DokterController.php:171
 * @route '/api/dokter-admin-options'
 */
adminOptions.url = (options?: RouteQueryOptions) => {
    return adminOptions.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DokterController::adminOptions
 * @see app/Http/Controllers/DokterController.php:171
 * @route '/api/dokter-admin-options'
 */
adminOptions.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: adminOptions.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DokterController::adminOptions
 * @see app/Http/Controllers/DokterController.php:171
 * @route '/api/dokter-admin-options'
 */
adminOptions.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: adminOptions.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\DokterController::indexWeb
 * @see app/Http/Controllers/DokterController.php:14
 * @route '/daftar-dokter'
 */
export const indexWeb = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexWeb.url(options),
    method: 'get',
})

indexWeb.definition = {
    methods: ["get","head"],
    url: '/daftar-dokter',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DokterController::indexWeb
 * @see app/Http/Controllers/DokterController.php:14
 * @route '/daftar-dokter'
 */
indexWeb.url = (options?: RouteQueryOptions) => {
    return indexWeb.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\DokterController::indexWeb
 * @see app/Http/Controllers/DokterController.php:14
 * @route '/daftar-dokter'
 */
indexWeb.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexWeb.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DokterController::indexWeb
 * @see app/Http/Controllers/DokterController.php:14
 * @route '/daftar-dokter'
 */
indexWeb.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexWeb.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\DokterController::showWeb
 * @see app/Http/Controllers/DokterController.php:38
 * @route '/detail-dokter/{id}'
 */
export const showWeb = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showWeb.url(args, options),
    method: 'get',
})

showWeb.definition = {
    methods: ["get","head"],
    url: '/detail-dokter/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DokterController::showWeb
 * @see app/Http/Controllers/DokterController.php:38
 * @route '/detail-dokter/{id}'
 */
showWeb.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return showWeb.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DokterController::showWeb
 * @see app/Http/Controllers/DokterController.php:38
 * @route '/detail-dokter/{id}'
 */
showWeb.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showWeb.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\DokterController::showWeb
 * @see app/Http/Controllers/DokterController.php:38
 * @route '/detail-dokter/{id}'
 */
showWeb.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showWeb.url(args, options),
    method: 'head',
})
const DokterController = { index, store, show, update, destroy, adminOptions, indexWeb, showWeb }

export default DokterController