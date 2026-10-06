import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\KontakController::index
 * @see app/Http/Controllers/KontakController.php:10
 * @route '/api/kontak'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/kontak',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\KontakController::index
 * @see app/Http/Controllers/KontakController.php:10
 * @route '/api/kontak'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\KontakController::index
 * @see app/Http/Controllers/KontakController.php:10
 * @route '/api/kontak'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\KontakController::index
 * @see app/Http/Controllers/KontakController.php:10
 * @route '/api/kontak'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\KontakController::store
 * @see app/Http/Controllers/KontakController.php:21
 * @route '/api/kontak'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/kontak',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\KontakController::store
 * @see app/Http/Controllers/KontakController.php:21
 * @route '/api/kontak'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\KontakController::store
 * @see app/Http/Controllers/KontakController.php:21
 * @route '/api/kontak'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\KontakController::show
 * @see app/Http/Controllers/KontakController.php:47
 * @route '/api/kontak/{kontak}'
 */
export const show = (args: { kontak: string | number } | [kontak: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/kontak/{kontak}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\KontakController::show
 * @see app/Http/Controllers/KontakController.php:47
 * @route '/api/kontak/{kontak}'
 */
show.url = (args: { kontak: string | number } | [kontak: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kontak: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    kontak: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        kontak: args.kontak,
                }

    return show.definition.url
            .replace('{kontak}', parsedArgs.kontak.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\KontakController::show
 * @see app/Http/Controllers/KontakController.php:47
 * @route '/api/kontak/{kontak}'
 */
show.get = (args: { kontak: string | number } | [kontak: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\KontakController::show
 * @see app/Http/Controllers/KontakController.php:47
 * @route '/api/kontak/{kontak}'
 */
show.head = (args: { kontak: string | number } | [kontak: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\KontakController::update
 * @see app/Http/Controllers/KontakController.php:56
 * @route '/api/kontak/{kontak}'
 */
export const update = (args: { kontak: string | number } | [kontak: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/kontak/{kontak}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\KontakController::update
 * @see app/Http/Controllers/KontakController.php:56
 * @route '/api/kontak/{kontak}'
 */
update.url = (args: { kontak: string | number } | [kontak: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kontak: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    kontak: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        kontak: args.kontak,
                }

    return update.definition.url
            .replace('{kontak}', parsedArgs.kontak.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\KontakController::update
 * @see app/Http/Controllers/KontakController.php:56
 * @route '/api/kontak/{kontak}'
 */
update.put = (args: { kontak: string | number } | [kontak: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\KontakController::update
 * @see app/Http/Controllers/KontakController.php:56
 * @route '/api/kontak/{kontak}'
 */
update.patch = (args: { kontak: string | number } | [kontak: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\KontakController::destroy
 * @see app/Http/Controllers/KontakController.php:101
 * @route '/api/kontak/{kontak}'
 */
export const destroy = (args: { kontak: string | number } | [kontak: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/kontak/{kontak}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\KontakController::destroy
 * @see app/Http/Controllers/KontakController.php:101
 * @route '/api/kontak/{kontak}'
 */
destroy.url = (args: { kontak: string | number } | [kontak: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { kontak: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    kontak: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        kontak: args.kontak,
                }

    return destroy.definition.url
            .replace('{kontak}', parsedArgs.kontak.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\KontakController::destroy
 * @see app/Http/Controllers/KontakController.php:101
 * @route '/api/kontak/{kontak}'
 */
destroy.delete = (args: { kontak: string | number } | [kontak: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})
const KontakController = { index, store, show, update, destroy }

export default KontakController