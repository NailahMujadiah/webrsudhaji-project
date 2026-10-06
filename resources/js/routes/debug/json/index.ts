import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
 * @see routes/web.php:39
 * @route '/debug-json-dokter/{id}'
 */
export const dokter = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dokter.url(args, options),
    method: 'get',
})

dokter.definition = {
    methods: ["get","head"],
    url: '/debug-json-dokter/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:39
 * @route '/debug-json-dokter/{id}'
 */
dokter.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return dokter.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see routes/web.php:39
 * @route '/debug-json-dokter/{id}'
 */
dokter.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dokter.url(args, options),
    method: 'get',
})
/**
 * @see routes/web.php:39
 * @route '/debug-json-dokter/{id}'
 */
dokter.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dokter.url(args, options),
    method: 'head',
})

/**
 * @see routes/web.php:45
 * @route '/debug-count-dokter'
 */
export const count = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: count.url(options),
    method: 'get',
})

count.definition = {
    methods: ["get","head"],
    url: '/debug-count-dokter',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:45
 * @route '/debug-count-dokter'
 */
count.url = (options?: RouteQueryOptions) => {
    return count.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:45
 * @route '/debug-count-dokter'
 */
count.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: count.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:45
 * @route '/debug-count-dokter'
 */
count.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: count.url(options),
    method: 'head',
})
const json = {
    dokter: Object.assign(dokter, dokter),
count: Object.assign(count, count),
}

export default json