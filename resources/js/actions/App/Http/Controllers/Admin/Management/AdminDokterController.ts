import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\Management\AdminDokterController::index
 * @see app/Http/Controllers/Admin/Management/AdminDokterController.php:23
 * @route '/admin/dokter'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/dokter',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Management\AdminDokterController::index
 * @see app/Http/Controllers/Admin/Management/AdminDokterController.php:23
 * @route '/admin/dokter'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Management\AdminDokterController::index
 * @see app/Http/Controllers/Admin/Management/AdminDokterController.php:23
 * @route '/admin/dokter'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Management\AdminDokterController::index
 * @see app/Http/Controllers/Admin/Management/AdminDokterController.php:23
 * @route '/admin/dokter'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\Management\AdminDokterController::create
 * @see app/Http/Controllers/Admin/Management/AdminDokterController.php:41
 * @route '/admin/dokter/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/dokter/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Management\AdminDokterController::create
 * @see app/Http/Controllers/Admin/Management/AdminDokterController.php:41
 * @route '/admin/dokter/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Management\AdminDokterController::create
 * @see app/Http/Controllers/Admin/Management/AdminDokterController.php:41
 * @route '/admin/dokter/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Management\AdminDokterController::create
 * @see app/Http/Controllers/Admin/Management/AdminDokterController.php:41
 * @route '/admin/dokter/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\Management\AdminDokterController::store
 * @see app/Http/Controllers/Admin/Management/AdminDokterController.php:48
 * @route '/admin/dokter'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/dokter',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\Management\AdminDokterController::store
 * @see app/Http/Controllers/Admin/Management/AdminDokterController.php:48
 * @route '/admin/dokter'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Management\AdminDokterController::store
 * @see app/Http/Controllers/Admin/Management/AdminDokterController.php:48
 * @route '/admin/dokter'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\Management\AdminDokterController::edit
 * @see app/Http/Controllers/Admin/Management/AdminDokterController.php:76
 * @route '/admin/dokter/{id_dokter}/edit'
 */
export const edit = (args: { id_dokter: string | number } | [id_dokter: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/dokter/{id_dokter}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Management\AdminDokterController::edit
 * @see app/Http/Controllers/Admin/Management/AdminDokterController.php:76
 * @route '/admin/dokter/{id_dokter}/edit'
 */
edit.url = (args: { id_dokter: string | number } | [id_dokter: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id_dokter: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id_dokter: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id_dokter: args.id_dokter,
                }

    return edit.definition.url
            .replace('{id_dokter}', parsedArgs.id_dokter.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Management\AdminDokterController::edit
 * @see app/Http/Controllers/Admin/Management/AdminDokterController.php:76
 * @route '/admin/dokter/{id_dokter}/edit'
 */
edit.get = (args: { id_dokter: string | number } | [id_dokter: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Management\AdminDokterController::edit
 * @see app/Http/Controllers/Admin/Management/AdminDokterController.php:76
 * @route '/admin/dokter/{id_dokter}/edit'
 */
edit.head = (args: { id_dokter: string | number } | [id_dokter: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\Management\AdminDokterController::update
 * @see app/Http/Controllers/Admin/Management/AdminDokterController.php:86
 * @route '/admin/dokter/{id_dokter}'
 */
export const update = (args: { id_dokter: string | number } | [id_dokter: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/dokter/{id_dokter}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\Management\AdminDokterController::update
 * @see app/Http/Controllers/Admin/Management/AdminDokterController.php:86
 * @route '/admin/dokter/{id_dokter}'
 */
update.url = (args: { id_dokter: string | number } | [id_dokter: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id_dokter: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id_dokter: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id_dokter: args.id_dokter,
                }

    return update.definition.url
            .replace('{id_dokter}', parsedArgs.id_dokter.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Management\AdminDokterController::update
 * @see app/Http/Controllers/Admin/Management/AdminDokterController.php:86
 * @route '/admin/dokter/{id_dokter}'
 */
update.put = (args: { id_dokter: string | number } | [id_dokter: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Admin\Management\AdminDokterController::update
 * @see app/Http/Controllers/Admin/Management/AdminDokterController.php:86
 * @route '/admin/dokter/{id_dokter}'
 */
update.patch = (args: { id_dokter: string | number } | [id_dokter: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Admin\Management\AdminDokterController::destroy
 * @see app/Http/Controllers/Admin/Management/AdminDokterController.php:117
 * @route '/admin/dokter/{id_dokter}'
 */
export const destroy = (args: { id_dokter: string | number } | [id_dokter: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/dokter/{id_dokter}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\Management\AdminDokterController::destroy
 * @see app/Http/Controllers/Admin/Management/AdminDokterController.php:117
 * @route '/admin/dokter/{id_dokter}'
 */
destroy.url = (args: { id_dokter: string | number } | [id_dokter: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id_dokter: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id_dokter: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id_dokter: args.id_dokter,
                }

    return destroy.definition.url
            .replace('{id_dokter}', parsedArgs.id_dokter.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Management\AdminDokterController::destroy
 * @see app/Http/Controllers/Admin/Management/AdminDokterController.php:117
 * @route '/admin/dokter/{id_dokter}'
 */
destroy.delete = (args: { id_dokter: string | number } | [id_dokter: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})
const AdminDokterController = { index, create, store, edit, update, destroy }

export default AdminDokterController