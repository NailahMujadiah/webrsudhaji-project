import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../wayfinder'
import password from './password'
/**
* @see \App\Http\Controllers\Admin\ProfileController::edit
 * @see app/Http/Controllers/Admin/ProfileController.php:17
 * @route '/admin/profile'
 */
export const edit = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ProfileController::edit
 * @see app/Http/Controllers/Admin/ProfileController.php:17
 * @route '/admin/profile'
 */
edit.url = (options?: RouteQueryOptions) => {
    return edit.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ProfileController::edit
 * @see app/Http/Controllers/Admin/ProfileController.php:17
 * @route '/admin/profile'
 */
edit.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ProfileController::edit
 * @see app/Http/Controllers/Admin/ProfileController.php:17
 * @route '/admin/profile'
 */
edit.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\ProfileController::update
 * @see app/Http/Controllers/Admin/ProfileController.php:24
 * @route '/admin/profile'
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/admin/profile',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Admin\ProfileController::update
 * @see app/Http/Controllers/Admin/ProfileController.php:24
 * @route '/admin/profile'
 */
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ProfileController::update
 * @see app/Http/Controllers/Admin/ProfileController.php:24
 * @route '/admin/profile'
 */
update.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(options),
    method: 'patch',
})
const profile = {
    edit: Object.assign(edit, edit),
update: Object.assign(update, update),
password: Object.assign(password, password),
}

export default profile