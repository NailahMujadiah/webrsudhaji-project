import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
import json from './json'
/**
 * @see routes/web.php:34
 * @route '/debug-detail-dokter/{id}'
 */
export const detailDokter = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: detailDokter.url(args, options),
    method: 'get',
})

detailDokter.definition = {
    methods: ["get","head"],
    url: '/debug-detail-dokter/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:34
 * @route '/debug-detail-dokter/{id}'
 */
detailDokter.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return detailDokter.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see routes/web.php:34
 * @route '/debug-detail-dokter/{id}'
 */
detailDokter.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: detailDokter.url(args, options),
    method: 'get',
})
/**
 * @see routes/web.php:34
 * @route '/debug-detail-dokter/{id}'
 */
detailDokter.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: detailDokter.url(args, options),
    method: 'head',
})
const debug = {
    detailDokter: Object.assign(detailDokter, detailDokter),
json: Object.assign(json, json),
}

export default debug