import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\ProfileController::update
 * @see app/Http/Controllers/Admin/ProfileController.php:54
 * @route '/admin/profile/password'
 */
export const update = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/profile/password',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\ProfileController::update
 * @see app/Http/Controllers/Admin/ProfileController.php:54
 * @route '/admin/profile/password'
 */
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ProfileController::update
 * @see app/Http/Controllers/Admin/ProfileController.php:54
 * @route '/admin/profile/password'
 */
update.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(options),
    method: 'put',
})
const password = {
    update: Object.assign(update, update),
}

export default password