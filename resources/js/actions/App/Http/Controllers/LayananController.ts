import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\LayananController::index
 * @see app/Http/Controllers/LayananController.php:10
 * @route '/api/layanan'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/layanan',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LayananController::index
 * @see app/Http/Controllers/LayananController.php:10
 * @route '/api/layanan'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LayananController::index
 * @see app/Http/Controllers/LayananController.php:10
 * @route '/api/layanan'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LayananController::index
 * @see app/Http/Controllers/LayananController.php:10
 * @route '/api/layanan'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\LayananController::store
 * @see app/Http/Controllers/LayananController.php:21
 * @route '/api/layanan'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/layanan',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\LayananController::store
 * @see app/Http/Controllers/LayananController.php:21
 * @route '/api/layanan'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LayananController::store
 * @see app/Http/Controllers/LayananController.php:21
 * @route '/api/layanan'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\LayananController::show
 * @see app/Http/Controllers/LayananController.php:45
 * @route '/api/layanan/{layanan}'
 */
export const show = (args: { layanan: string | number } | [layanan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/layanan/{layanan}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LayananController::show
 * @see app/Http/Controllers/LayananController.php:45
 * @route '/api/layanan/{layanan}'
 */
show.url = (args: { layanan: string | number } | [layanan: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { layanan: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    layanan: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        layanan: args.layanan,
                }

    return show.definition.url
            .replace('{layanan}', parsedArgs.layanan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LayananController::show
 * @see app/Http/Controllers/LayananController.php:45
 * @route '/api/layanan/{layanan}'
 */
show.get = (args: { layanan: string | number } | [layanan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LayananController::show
 * @see app/Http/Controllers/LayananController.php:45
 * @route '/api/layanan/{layanan}'
 */
show.head = (args: { layanan: string | number } | [layanan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\LayananController::update
 * @see app/Http/Controllers/LayananController.php:54
 * @route '/api/layanan/{layanan}'
 */
export const update = (args: { layanan: string | number } | [layanan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/layanan/{layanan}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\LayananController::update
 * @see app/Http/Controllers/LayananController.php:54
 * @route '/api/layanan/{layanan}'
 */
update.url = (args: { layanan: string | number } | [layanan: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { layanan: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    layanan: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        layanan: args.layanan,
                }

    return update.definition.url
            .replace('{layanan}', parsedArgs.layanan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LayananController::update
 * @see app/Http/Controllers/LayananController.php:54
 * @route '/api/layanan/{layanan}'
 */
update.put = (args: { layanan: string | number } | [layanan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\LayananController::update
 * @see app/Http/Controllers/LayananController.php:54
 * @route '/api/layanan/{layanan}'
 */
update.patch = (args: { layanan: string | number } | [layanan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\LayananController::destroy
 * @see app/Http/Controllers/LayananController.php:94
 * @route '/api/layanan/{layanan}'
 */
export const destroy = (args: { layanan: string | number } | [layanan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/layanan/{layanan}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\LayananController::destroy
 * @see app/Http/Controllers/LayananController.php:94
 * @route '/api/layanan/{layanan}'
 */
destroy.url = (args: { layanan: string | number } | [layanan: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { layanan: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    layanan: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        layanan: args.layanan,
                }

    return destroy.definition.url
            .replace('{layanan}', parsedArgs.layanan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LayananController::destroy
 * @see app/Http/Controllers/LayananController.php:94
 * @route '/api/layanan/{layanan}'
 */
destroy.delete = (args: { layanan: string | number } | [layanan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})
const LayananController = { index, store, show, update, destroy }

export default LayananController