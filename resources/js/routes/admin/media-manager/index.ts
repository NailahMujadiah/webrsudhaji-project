import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\MediaManagerController::index
 * @see app/Http/Controllers/Admin/MediaManagerController.php:14
 * @route '/admin/media-manager'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/media-manager',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\MediaManagerController::index
 * @see app/Http/Controllers/Admin/MediaManagerController.php:14
 * @route '/admin/media-manager'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MediaManagerController::index
 * @see app/Http/Controllers/Admin/MediaManagerController.php:14
 * @route '/admin/media-manager'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\MediaManagerController::index
 * @see app/Http/Controllers/Admin/MediaManagerController.php:14
 * @route '/admin/media-manager'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})
const mediaManager = {
    index: Object.assign(index, index),
}

export default mediaManager