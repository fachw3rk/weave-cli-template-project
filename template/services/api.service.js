const ApiGatewayMixin = require('weave-web')

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
