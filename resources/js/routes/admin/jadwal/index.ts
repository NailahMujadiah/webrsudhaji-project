import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\Management\AdminJadwalDokterController::index
 * @see app/Http/Controllers/Admin/Management/AdminJadwalDokterController.php:16
 * @route '/admin/jadwal-dokter'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/jadwal-dokter',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Management\AdminJadwalDokterController::index
 * @see app/Http/Controllers/Admin/Management/AdminJadwalDokterController.php:16
 * @route '/admin/jadwal-dokter'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Management\AdminJadwalDokterController::index
 * @see app/Http/Controllers/Admin/Management/AdminJadwalDokterController.php:16
 * @route '/admin/jadwal-dokter'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Management\AdminJadwalDokterController::index
 * @see app/Http/Controllers/Admin/Management/AdminJadwalDokterController.php:16
 * @route '/admin/jadwal-dokter'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\Management\AdminJadwalDokterController::create
 * @see app/Http/Controllers/Admin/Management/AdminJadwalDokterController.php:28
 * @route '/admin/jadwal-dokter/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/jadwal-dokter/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Management\AdminJadwalDokterController::create
 * @see app/Http/Controllers/Admin/Management/AdminJadwalDokterController.php:28
 * @route '/admin/jadwal-dokter/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Management\AdminJadwalDokterController::create
 * @see app/Http/Controllers/Admin/Management/AdminJadwalDokterController.php:28
 * @route '/admin/jadwal-dokter/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Management\AdminJadwalDokterController::create
 * @see app/Http/Controllers/Admin/Management/AdminJadwalDokterController.php:28
 * @route '/admin/jadwal-dokter/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\Management\AdminJadwalDokterController::store
 * @see app/Http/Controllers/Admin/Management/AdminJadwalDokterController.php:39
 * @route '/admin/jadwal-dokter'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/jadwal-dokter',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\Management\AdminJadwalDokterController::store
 * @see app/Http/Controllers/Admin/Management/AdminJadwalDokterController.php:39
 * @route '/admin/jadwal-dokter'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Management\AdminJadwalDokterController::store
 * @see app/Http/Controllers/Admin/Management/AdminJadwalDokterController.php:39
 * @route '/admin/jadwal-dokter'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\Management\AdminJadwalDokterController::edit
 * @see app/Http/Controllers/Admin/Management/AdminJadwalDokterController.php:84
 * @route '/admin/jadwal-dokter/{jadwal_dokter}/edit'
 */
export const edit = (args: { jadwal_dokter: string | number } | [jadwal_dokter: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/jadwal-dokter/{jadwal_dokter}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Management\AdminJadwalDokterController::edit
 * @see app/Http/Controllers/Admin/Management/AdminJadwalDokterController.php:84
 * @route '/admin/jadwal-dokter/{jadwal_dokter}/edit'
 */
edit.url = (args: { jadwal_dokter: string | number } | [jadwal_dokter: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{jadwal_dokter}', parsedArgs.jadwal_dokter.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Management\AdminJadwalDokterController::edit
 * @see app/Http/Controllers/Admin/Management/AdminJadwalDokterController.php:84
 * @route '/admin/jadwal-dokter/{jadwal_dokter}/edit'
 */
edit.get = (args: { jadwal_dokter: string | number } | [jadwal_dokter: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Management\AdminJadwalDokterController::edit
 * @see app/Http/Controllers/Admin/Management/AdminJadwalDokterController.php:84
 * @route '/admin/jadwal-dokter/{jadwal_dokter}/edit'
 */
edit.head = (args: { jadwal_dokter: string | number } | [jadwal_dokter: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\Management\AdminJadwalDokterController::update
 * @see app/Http/Controllers/Admin/Management/AdminJadwalDokterController.php:99
 * @route '/admin/jadwal-dokter/{jadwal_dokter}'
 */
export const update = (args: { jadwal_dokter: string | number } | [jadwal_dokter: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/jadwal-dokter/{jadwal_dokter}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\Management\AdminJadwalDokterController::update
 * @see app/Http/Controllers/Admin/Management/AdminJadwalDokterController.php:99
 * @route '/admin/jadwal-dokter/{jadwal_dokter}'
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
* @see \App\Http\Controllers\Admin\Management\AdminJadwalDokterController::update
 * @see app/Http/Controllers/Admin/Management/AdminJadwalDokterController.php:99
 * @route '/admin/jadwal-dokter/{jadwal_dokter}'
 */
update.put = (args: { jadwal_dokter: string | number } | [jadwal_dokter: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Admin\Management\AdminJadwalDokterController::update
 * @see app/Http/Controllers/Admin/Management/AdminJadwalDokterController.php:99
 * @route '/admin/jadwal-dokter/{jadwal_dokter}'
 */
update.patch = (args: { jadwal_dokter: string | number } | [jadwal_dokter: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Admin\Management\AdminJadwalDokterController::destroy
 * @see app/Http/Controllers/Admin/Management/AdminJadwalDokterController.php:133
 * @route '/admin/jadwal-dokter/{jadwal_dokter}'
 */
export const destroy = (args: { jadwal_dokter: string | number } | [jadwal_dokter: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/jadwal-dokter/{jadwal_dokter}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\Management\AdminJadwalDokterController::destroy
 * @see app/Http/Controllers/Admin/Management/AdminJadwalDokterController.php:133
 * @route '/admin/jadwal-dokter/{jadwal_dokter}'
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
* @see \App\Http\Controllers\Admin\Management\AdminJadwalDokterController::destroy
 * @see app/Http/Controllers/Admin/Management/AdminJadwalDokterController.php:133
 * @route '/admin/jadwal-dokter/{jadwal_dokter}'
 */
destroy.delete = (args: { jadwal_dokter: string | number } | [jadwal_dokter: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})
const jadwal = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default jadwal