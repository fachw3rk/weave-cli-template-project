const ApiGatewayMixin = require('@weave-js/web')

module.exports = {
    name: 'api',
    mixins: [ApiGatewayMixin],
    settings: {
        port: process.env.PORT || 3000,
        routes: [{
            path: '/',
            whitelist: [
                'greeter.*'
            ]
        }]
    }
}
