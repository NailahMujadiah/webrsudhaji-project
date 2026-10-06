import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\Management\AdminArtikelController::index
 * @see app/Http/Controllers/Admin/Management/AdminArtikelController.php:20
 * @route '/admin/artikel'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/artikel',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Management\AdminArtikelController::index
 * @see app/Http/Controllers/Admin/Management/AdminArtikelController.php:20
 * @route '/admin/artikel'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Management\AdminArtikelController::index
 * @see app/Http/Controllers/Admin/Management/AdminArtikelController.php:20
 * @route '/admin/artikel'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Management\AdminArtikelController::index
 * @see app/Http/Controllers/Admin/Management/AdminArtikelController.php:20
 * @route '/admin/artikel'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\Management\AdminArtikelController::create
 * @see app/Http/Controllers/Admin/Management/AdminArtikelController.php:31
 * @route '/admin/artikel/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/artikel/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Management\AdminArtikelController::create
 * @see app/Http/Controllers/Admin/Management/AdminArtikelController.php:31
 * @route '/admin/artikel/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Management\AdminArtikelController::create
 * @see app/Http/Controllers/Admin/Management/AdminArtikelController.php:31
 * @route '/admin/artikel/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Management\AdminArtikelController::create
 * @see app/Http/Controllers/Admin/Management/AdminArtikelController.php:31
 * @route '/admin/artikel/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\Management\AdminArtikelController::store
 * @see app/Http/Controllers/Admin/Management/AdminArtikelController.php:38
 * @route '/admin/artikel'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/artikel',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\Management\AdminArtikelController::store
 * @see app/Http/Controllers/Admin/Management/AdminArtikelController.php:38
 * @route '/admin/artikel'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Management\AdminArtikelController::store
 * @see app/Http/Controllers/Admin/Management/AdminArtikelController.php:38
 * @route '/admin/artikel'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\Management\AdminArtikelController::edit
 * @see app/Http/Controllers/Admin/Management/AdminArtikelController.php:75
 * @route '/admin/artikel/{id_artikel}/edit'
 */
export const edit = (args: { id_artikel: string | number } | [id_artikel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/artikel/{id_artikel}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Management\AdminArtikelController::edit
 * @see app/Http/Controllers/Admin/Management/AdminArtikelController.php:75
 * @route '/admin/artikel/{id_artikel}/edit'
 */
edit.url = (args: { id_artikel: string | number } | [id_artikel: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id_artikel: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id_artikel: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id_artikel: args.id_artikel,
                }

    return edit.definition.url
            .replace('{id_artikel}', parsedArgs.id_artikel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Management\AdminArtikelController::edit
 * @see app/Http/Controllers/Admin/Management/AdminArtikelController.php:75
 * @route '/admin/artikel/{id_artikel}/edit'
 */
edit.get = (args: { id_artikel: string | number } | [id_artikel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Management\AdminArtikelController::edit
 * @see app/Http/Controllers/Admin/Management/AdminArtikelController.php:75
 * @route '/admin/artikel/{id_artikel}/edit'
 */
edit.head = (args: { id_artikel: string | number } | [id_artikel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\Management\AdminArtikelController::update
 * @see app/Http/Controllers/Admin/Management/AdminArtikelController.php:85
 * @route '/admin/artikel/{id_artikel}'
 */
export const update = (args: { id_artikel: string | number } | [id_artikel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/artikel/{id_artikel}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\Management\AdminArtikelController::update
 * @see app/Http/Controllers/Admin/Management/AdminArtikelController.php:85
 * @route '/admin/artikel/{id_artikel}'
 */
update.url = (args: { id_artikel: string | number } | [id_artikel: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id_artikel: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id_artikel: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id_artikel: args.id_artikel,
                }

    return update.definition.url
            .replace('{id_artikel}', parsedArgs.id_artikel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Management\AdminArtikelController::update
 * @see app/Http/Controllers/Admin/Management/AdminArtikelController.php:85
 * @route '/admin/artikel/{id_artikel}'
 */
update.put = (args: { id_artikel: string | number } | [id_artikel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Admin\Management\AdminArtikelController::update
 * @see app/Http/Controllers/Admin/Management/AdminArtikelController.php:85
 * @route '/admin/artikel/{id_artikel}'
 */
update.patch = (args: { id_artikel: string | number } | [id_artikel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Admin\Management\AdminArtikelController::destroy
 * @see app/Http/Controllers/Admin/Management/AdminArtikelController.php:127
 * @route '/admin/artikel/{id_artikel}'
 */
export const destroy = (args: { id_artikel: string | number } | [id_artikel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/artikel/{id_artikel}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\Management\AdminArtikelController::destroy
 * @see app/Http/Controllers/Admin/Management/AdminArtikelController.php:127
 * @route '/admin/artikel/{id_artikel}'
 */
destroy.url = (args: { id_artikel: string | number } | [id_artikel: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id_artikel: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id_artikel: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id_artikel: args.id_artikel,
                }

    return destroy.definition.url
            .replace('{id_artikel}', parsedArgs.id_artikel.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Management\AdminArtikelController::destroy
 * @see app/Http/Controllers/Admin/Management/AdminArtikelController.php:127
 * @route '/admin/artikel/{id_artikel}'
 */
destroy.delete = (args: { id_artikel: string | number } | [id_artikel: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})
const AdminArtikelController = { index, create, store, edit, update, destroy }

export default AdminArtikelController