'use strict';

module.exports = function(values) {
	return {
		questions: [
			{
				type: 'confirm',
				name: 'needTransporter',
				message: 'Do you want to connect several nodes with each other?',
				default: false
			},
			{
				type: 'list',
				name: 'transporter',
				message: 'Select a transport adapter',
				choices: [
					{ name: 'Redis (recommended)', value: 'Redis' },
					{ name: 'NATS', value: 'NATS' }
				],
				when (answers) {
					return answers.needTransporter
				},
				default: 'Redis'
			},
			{
				type: 'confirm',
				name: 'needCacher',
				message: 'Would you like to use cache?',
				default: false
			},
			{
				type: 'list',
				name: 'cache',
				message: 'Select a caching solution',
				choices: [
					{ name: 'Memory', value: 'Memory' },
					{ name: 'Redis', value: 'Redis' }
				],
				when (answers) {
					return answers.needCacher
				},
				default: 'Memory'
			},
			{
				type: 'confirm',
				name: 'webGateway',
				message: 'Add a web gateway service service',
				default: true
			},
			{
				type: 'confirm',
				name: 'lint',
				message: 'Use ESLint to lint your code?',
				default: true
			},
			{
				type: 'confirm',
				name: 'jest',
				message: 'Setup unit tests with Jest?',
				default: true
			}
		],
		'filters': {
			'services/api.service.js': 'webGateway',
			'.eslintrc.js': 'lint',
			'test/**/*': 'jest',
		},

		completeMessage: `
	To get started:

	cd {{projectName}}
	npm run dev
		`
	};
};
