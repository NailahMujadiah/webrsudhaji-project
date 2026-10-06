import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\Management\AdminProfilDireksiController::index
 * @see app/Http/Controllers/Admin/Management/AdminProfilDireksiController.php:22
 * @route '/admin/profil-direksi'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/profil-direksi',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Management\AdminProfilDireksiController::index
 * @see app/Http/Controllers/Admin/Management/AdminProfilDireksiController.php:22
 * @route '/admin/profil-direksi'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Management\AdminProfilDireksiController::index
 * @see app/Http/Controllers/Admin/Management/AdminProfilDireksiController.php:22
 * @route '/admin/profil-direksi'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Management\AdminProfilDireksiController::index
 * @see app/Http/Controllers/Admin/Management/AdminProfilDireksiController.php:22
 * @route '/admin/profil-direksi'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\Management\AdminProfilDireksiController::edit
 * @see app/Http/Controllers/Admin/Management/AdminProfilDireksiController.php:35
 * @route '/admin/profil-direksi/{id}/edit'
 */
export const edit = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/profil-direksi/{id}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\Management\AdminProfilDireksiController::edit
 * @see app/Http/Controllers/Admin/Management/AdminProfilDireksiController.php:35
 * @route '/admin/profil-direksi/{id}/edit'
 */
edit.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Management\AdminProfilDireksiController::edit
 * @see app/Http/Controllers/Admin/Management/AdminProfilDireksiController.php:35
 * @route '/admin/profil-direksi/{id}/edit'
 */
edit.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\Management\AdminProfilDireksiController::edit
 * @see app/Http/Controllers/Admin/Management/AdminProfilDireksiController.php:35
 * @route '/admin/profil-direksi/{id}/edit'
 */
edit.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\Management\AdminProfilDireksiController::update
 * @see app/Http/Controllers/Admin/Management/AdminProfilDireksiController.php:47
 * @route '/admin/profil-direksi/{id}'
 */
export const update = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/profil-direksi/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\Management\AdminProfilDireksiController::update
 * @see app/Http/Controllers/Admin/Management/AdminProfilDireksiController.php:47
 * @route '/admin/profil-direksi/{id}'
 */
update.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\Management\AdminProfilDireksiController::update
 * @see app/Http/Controllers/Admin/Management/AdminProfilDireksiController.php:47
 * @route '/admin/profil-direksi/{id}'
 */
update.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
const AdminProfilDireksiController = { index, edit, update }

export default AdminProfilDireksiController