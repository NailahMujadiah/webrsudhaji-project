import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\LayananController::index
 * @see app/Http/Controllers/LayananController.php:10
 * @route '/api/layanan'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/layanan',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LayananController::index
 * @see app/Http/Controllers/LayananController.php:10
 * @route '/api/layanan'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LayananController::index
 * @see app/Http/Controllers/LayananController.php:10
 * @route '/api/layanan'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LayananController::index
 * @see app/Http/Controllers/LayananController.php:10
 * @route '/api/layanan'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\LayananController::store
 * @see app/Http/Controllers/LayananController.php:21
 * @route '/api/layanan'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/layanan',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\LayananController::store
 * @see app/Http/Controllers/LayananController.php:21
 * @route '/api/layanan'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LayananController::store
 * @see app/Http/Controllers/LayananController.php:21
 * @route '/api/layanan'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\LayananController::show
 * @see app/Http/Controllers/LayananController.php:45
 * @route '/api/layanan/{layanan}'
 */
export const show = (args: { layanan: string | number } | [layanan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/layanan/{layanan}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LayananController::show
 * @see app/Http/Controllers/LayananController.php:45
 * @route '/api/layanan/{layanan}'
 */
show.url = (args: { layanan: string | number } | [layanan: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { layanan: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    layanan: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        layanan: args.layanan,
                }

    return show.definition.url
            .replace('{layanan}', parsedArgs.layanan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LayananController::show
 * @see app/Http/Controllers/LayananController.php:45
 * @route '/api/layanan/{layanan}'
 */
show.get = (args: { layanan: string | number } | [layanan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LayananController::show
 * @see app/Http/Controllers/LayananController.php:45
 * @route '/api/layanan/{layanan}'
 */
show.head = (args: { layanan: string | number } | [layanan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\LayananController::update
 * @see app/Http/Controllers/LayananController.php:54
 * @route '/api/layanan/{layanan}'
 */
export const update = (args: { layanan: string | number } | [layanan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/layanan/{layanan}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\LayananController::update
 * @see app/Http/Controllers/LayananController.php:54
 * @route '/api/layanan/{layanan}'
 */
update.url = (args: { layanan: string | number } | [layanan: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { layanan: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    layanan: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        layanan: args.layanan,
                }

    return update.definition.url
            .replace('{layanan}', parsedArgs.layanan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LayananController::update
 * @see app/Http/Controllers/LayananController.php:54
 * @route '/api/layanan/{layanan}'
 */
update.put = (args: { layanan: string | number } | [layanan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\LayananController::update
 * @see app/Http/Controllers/LayananController.php:54
 * @route '/api/layanan/{layanan}'
 */
update.patch = (args: { layanan: string | number } | [layanan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\LayananController::destroy
 * @see app/Http/Controllers/LayananController.php:94
 * @route '/api/layanan/{layanan}'
 */
export const destroy = (args: { layanan: string | number } | [layanan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/layanan/{layanan}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\LayananController::destroy
 * @see app/Http/Controllers/LayananController.php:94
 * @route '/api/layanan/{layanan}'
 */
destroy.url = (args: { layanan: string | number } | [layanan: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { layanan: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    layanan: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        layanan: args.layanan,
                }

    return destroy.definition.url
            .replace('{layanan}', parsedArgs.layanan.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LayananController::destroy
 * @see app/Http/Controllers/LayananController.php:94
 * @route '/api/layanan/{layanan}'
 */
destroy.delete = (args: { layanan: string | number } | [layanan: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
 * @see routes/web.php:24
 * @route '/layanan/unggulan'
 */
export const unggulan = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: unggulan.url(options),
    method: 'get',
})

unggulan.definition = {
    methods: ["get","head"],
    url: '/layanan/unggulan',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:24
 * @route '/layanan/unggulan'
 */
unggulan.url = (options?: RouteQueryOptions) => {
    return unggulan.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:24
 * @route '/layanan/unggulan'
 */
unggulan.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: unggulan.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:24
 * @route '/layanan/unggulan'
 */
unggulan.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: unggulan.url(options),
    method: 'head',
})

/**
 * @see routes/web.php:25
 * @route '/layanan/rawat-jalan'
 */
export const rawatJalan = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: rawatJalan.url(options),
    method: 'get',
})

rawatJalan.definition = {
    methods: ["get","head"],
    url: '/layanan/rawat-jalan',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:25
 * @route '/layanan/rawat-jalan'
 */
rawatJalan.url = (options?: RouteQueryOptions) => {
    return rawatJalan.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:25
 * @route '/layanan/rawat-jalan'
 */
rawatJalan.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: rawatJalan.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:25
 * @route '/layanan/rawat-jalan'
 */
rawatJalan.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: rawatJalan.url(options),
    method: 'head',
})

/**
 * @see routes/web.php:26
 * @route '/layanan/rawat-inap'
 */
export const rawatInap = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: rawatInap.url(options),
    method: 'get',
})

rawatInap.definition = {
    methods: ["get","head"],
    url: '/layanan/rawat-inap',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:26
 * @route '/layanan/rawat-inap'
 */
rawatInap.url = (options?: RouteQueryOptions) => {
    return rawatInap.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:26
 * @route '/layanan/rawat-inap'
 */
rawatInap.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: rawatInap.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:26
 * @route '/layanan/rawat-inap'
 */
rawatInap.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: rawatInap.url(options),
    method: 'head',
})

/**
 * @see routes/web.php:27
 * @route '/layanan/rawat-intensif'
 */
export const rawatIntensif = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: rawatIntensif.url(options),
    method: 'get',
})

rawatIntensif.definition = {
    methods: ["get","head"],
    url: '/layanan/rawat-intensif',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:27
 * @route '/layanan/rawat-intensif'
 */
rawatIntensif.url = (options?: RouteQueryOptions) => {
    return rawatIntensif.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:27
 * @route '/layanan/rawat-intensif'
 */
rawatIntensif.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: rawatIntensif.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:27
 * @route '/layanan/rawat-intensif'
 */
rawatIntensif.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: rawatIntensif.url(options),
    method: 'head',
})

/**
 * @see routes/web.php:28
 * @route '/layanan/gawat-darurat'
 */
export const gawatDarurat = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: gawatDarurat.url(options),
    method: 'get',
})

gawatDarurat.definition = {
    methods: ["get","head"],
    url: '/layanan/gawat-darurat',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:28
 * @route '/layanan/gawat-darurat'
 */
gawatDarurat.url = (options?: RouteQueryOptions) => {
    return gawatDarurat.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:28
 * @route '/layanan/gawat-darurat'
 */
gawatDarurat.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: gawatDarurat.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:28
 * @route '/layanan/gawat-darurat'
 */
gawatDarurat.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: gawatDarurat.url(options),
    method: 'head',
})

/**
 * @see routes/web.php:29
 * @route '/layanan/sarana'
 */
export const sarana = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sarana.url(options),
    method: 'get',
})

sarana.definition = {
    methods: ["get","head"],
    url: '/layanan/sarana',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:29
 * @route '/layanan/sarana'
 */
sarana.url = (options?: RouteQueryOptions) => {
    return sarana.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:29
 * @route '/layanan/sarana'
 */
sarana.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sarana.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:29
 * @route '/layanan/sarana'
 */
sarana.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: sarana.url(options),
    method: 'head',
})

/**
 * @see routes/web.php:30
 * @route '/layanan/penunjang'
 */
export const penunjang = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: penunjang.url(options),
    method: 'get',
})

penunjang.definition = {
    methods: ["get","head"],
    url: '/layanan/penunjang',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:30
 * @route '/layanan/penunjang'
 */
penunjang.url = (options?: RouteQueryOptions) => {
    return penunjang.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:30
 * @route '/layanan/penunjang'
 */
penunjang.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: penunjang.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:30
 * @route '/layanan/penunjang'
 */
penunjang.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: penunjang.url(options),
    method: 'head',
})
const layanan = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
show: Object.assign(show, show),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
unggulan: Object.assign(unggulan, unggulan),
rawatJalan: Object.assign(rawatJalan, rawatJalan),
rawatInap: Object.assign(rawatInap, rawatInap),
rawatIntensif: Object.assign(rawatIntensif, rawatIntensif),
gawatDarurat: Object.assign(gawatDarurat, gawatDarurat),
sarana: Object.assign(sarana, sarana),
penunjang: Object.assign(penunjang, penunjang),
}

export default layanan