module.exports = {
    name: 'buttler',
    settings: {},
    // dependencies: [],
    actions: {
        sayHello () {
            return 'Hello from Weave'
        },
        welcome: {
            params: {
                name: 'string'
            },
            handler (ctx) {
                return `Welcome, ${ctx.params.name}`
            }
        }
    },
    events: {

    },
    methods: {

    },
    created () {

    },
    started () {

    },
    stopped () {

    }
}
