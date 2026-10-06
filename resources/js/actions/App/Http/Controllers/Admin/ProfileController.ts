import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
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
* @see \App\Http\Controllers\Admin\ProfileController::updateProfile
 * @see app/Http/Controllers/Admin/ProfileController.php:24
 * @route '/admin/profile'
 */
export const updateProfile = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateProfile.url(options),
    method: 'patch',
})

updateProfile.definition = {
    methods: ["patch"],
    url: '/admin/profile',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Admin\ProfileController::updateProfile
 * @see app/Http/Controllers/Admin/ProfileController.php:24
 * @route '/admin/profile'
 */
updateProfile.url = (options?: RouteQueryOptions) => {
    return updateProfile.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ProfileController::updateProfile
 * @see app/Http/Controllers/Admin/ProfileController.php:24
 * @route '/admin/profile'
 */
updateProfile.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateProfile.url(options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Admin\ProfileController::updatePassword
 * @see app/Http/Controllers/Admin/ProfileController.php:54
 * @route '/admin/profile/password'
 */
export const updatePassword = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatePassword.url(options),
    method: 'put',
})

updatePassword.definition = {
    methods: ["put"],
    url: '/admin/profile/password',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\ProfileController::updatePassword
 * @see app/Http/Controllers/Admin/ProfileController.php:54
 * @route '/admin/profile/password'
 */
updatePassword.url = (options?: RouteQueryOptions) => {
    return updatePassword.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ProfileController::updatePassword
 * @see app/Http/Controllers/Admin/ProfileController.php:54
 * @route '/admin/profile/password'
 */
updatePassword.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatePassword.url(options),
    method: 'put',
})
const ProfileController = { edit, updateProfile, updatePassword }

export default ProfileController