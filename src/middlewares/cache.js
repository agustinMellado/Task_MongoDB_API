import getExpeditiousCache from 'express-expeditious'

const defaultOptions = {
    namespace: 'expresscache',
    defaultTtl: '1 minute', // conversion 60*1000s
    statusCodeExpires: {
        404: '5 minutos',
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