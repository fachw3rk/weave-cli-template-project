const ApiGatewayMixin = require('@weave-js/web')

module.exports = {
    name: 'api',
    mixins: [ApiGatewayMixin()],
    settings: {
        port: process.env.PORT || 3000,
        routes: [{
            path: '/',
            aliases: {
                'GET /say-hello': 'buttler.sayHello', // Call "http://localhost:3000/say-hello" in your browser
                'GET /welcome/:name': 'buttler.welcome' // Call "http://localhost:3000/welcome/John" in your browser
            }
        }]
    }
}
