import getExpeditiousCache from 'express-expeditious'

const defaultOptions = {
    namespace: 'expresscache',
    defaultTtl: '15 minute', // tiempo en la que se guarda la cache
    statusCodeExpires: {
        404: '5 minutes',
        500: 0//1 minuto en milisegundos.
    },
    //conexion con redis.
    // engine: require('expeditious-engine-redis')({
    //     // options for the redis driver
    //     host: 'redis.acme.com',
    //     port: 6379
    // })
}
const cacheInit = getExpeditiousCache(defaultOptions)

export default cacheInit