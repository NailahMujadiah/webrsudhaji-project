import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\JadwalDokterController::index
 * @see app/Http/Controllers/JadwalDokterController.php:10
 * @route '/api/jadwal-dokter'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/jadwal-dokter',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\JadwalDokterController::index
 * @see app/Http/Controllers/JadwalDokterController.php:10
 * @route '/api/jadwal-dokter'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\JadwalDokterController::index
 * @see app/Http/Controllers/JadwalDokterController.php:10
 * @route '/api/jadwal-dokter'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\JadwalDokterController::index
 * @see app/Http/Controllers/JadwalDokterController.php:10
 * @route '/api/jadwal-dokter'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\JadwalDokterController::store
 * @see app/Http/Controllers/JadwalDokterController.php:22
 * @route '/api/jadwal-dokter'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/jadwal-dokter',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\JadwalDokterController::store
 * @see app/Http/Controllers/JadwalDokterController.php:22
 * @route '/api/jadwal-dokter'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\JadwalDokterController::store
 * @see app/Http/Controllers/JadwalDokterController.php:22
 * @route '/api/jadwal-dokter'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\JadwalDokterController::show
 * @see app/Http/Controllers/JadwalDokterController.php:48
 * @route '/api/jadwal-dokter/{jadwal_dokter}'
 */
export const show = (args: { jadwal_dokter: string | number } | [jadwal_dokter: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/jadwal-dokter/{jadwal_dokter}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\JadwalDokterController::show
 * @see app/Http/Controllers/JadwalDokterController.php:48
 * @route '/api/jadwal-dokter/{jadwal_dokter}'
 */
show.url = (args: { jadwal_dokter: string | number } | [jadwal_dokter: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { jadwal_dokter: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    jadwal_dokter: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        jadwal_dokter: args.jadwal_dokter,
                }

    return show.definition.url
            .replace('{jadwal_dokter}', parsedArgs.jadwal_dokter.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\JadwalDokterController::show
 * @see app/Http/Controllers/JadwalDokterController.php:48
 * @route '/api/jadwal-dokter/{jadwal_dokter}'
 */
show.get = (args: { jadwal_dokter: string | number } | [jadwal_dokter: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\JadwalDokterController::show
 * @see app/Http/Controllers/JadwalDokterController.php:48
 * @route '/api/jadwal-dokter/{jadwal_dokter}'
 */
show.head = (args: { jadwal_dokter: string | number } | [jadwal_dokter: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\JadwalDokterController::update
 * @see app/Http/Controllers/JadwalDokterController.php:59
 * @route '/api/jadwal-dokter/{jadwal_dokter}'
 */
export const update = (args: { jadwal_dokter: string | number } | [jadwal_dokter: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/jadwal-dokter/{jadwal_dokter}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\JadwalDokterController::update
 * @see app/Http/Controllers/JadwalDokterController.php:59
 * @route '/api/jadwal-dokter/{jadwal_dokter}'
 */
update.url = (args: { jadwal_dokter: string | number } | [jadwal_dokter: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { jadwal_dokter: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    jadwal_dokter: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        jadwal_dokter: args.jadwal_dokter,
                }

    return update.definition.url
            .replace('{jadwal_dokter}', parsedArgs.jadwal_dokter.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\JadwalDokterController::update
 * @see app/Http/Controllers/JadwalDokterController.php:59
 * @route '/api/jadwal-dokter/{jadwal_dokter}'
 */
update.put = (args: { jadwal_dokter: string | number } | [jadwal_dokter: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\JadwalDokterController::update
 * @see app/Http/Controllers/JadwalDokterController.php:59
 * @route '/api/jadwal-dokter/{jadwal_dokter}'
 */
update.patch = (args: { jadwal_dokter: string | number } | [jadwal_dokter: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\JadwalDokterController::destroy
 * @see app/Http/Controllers/JadwalDokterController.php:112
 * @route '/api/jadwal-dokter/{jadwal_dokter}'
 */
export const destroy = (args: { jadwal_dokter: string | number } | [jadwal_dokter: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/jadwal-dokter/{jadwal_dokter}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\JadwalDokterController::destroy
 * @see app/Http/Controllers/JadwalDokterController.php:112
 * @route '/api/jadwal-dokter/{jadwal_dokter}'
 */
destroy.url = (args: { jadwal_dokter: string | number } | [jadwal_dokter: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { jadwal_dokter: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    jadwal_dokter: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        jadwal_dokter: args.jadwal_dokter,
                }

    return destroy.definition.url
            .replace('{jadwal_dokter}', parsedArgs.jadwal_dokter.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\JadwalDokterController::destroy
 * @see app/Http/Controllers/JadwalDokterController.php:112
 * @route '/api/jadwal-dokter/{jadwal_dokter}'
 */
destroy.delete = (args: { jadwal_dokter: string | number } | [jadwal_dokter: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})
const jadwalDokter = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
show: Object.assign(show, show),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default jadwalDokter