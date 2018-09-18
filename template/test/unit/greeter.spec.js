const { ServiceBroker } = require('@weave-js/core')
const { WeaveValidationError } = require('@weave-js/core').Errors
const TestService = require('../../services/buttler.service')

describe('Test "greeter" service', () => {
    let broker = Weave()
    broker.createService(TestService)

    beforeAll(() => broker.start())
    afterAll(() => broker.stop())

    describe('Test "buttler.sayHello" action', () => {
        it('should return with "Hello from Weave"', () => {
            expect(broker.call('buttler.sayHello')).resolves.toBe('Hello from Weave')
        })
    })

    describe('Test "buttler.welcome" action', () => {
        it('should return with "Welcome"', () => {
            expect(broker.call('buttler.welcome', { name: 'James' })).resolves.toBe('Welcome, James')
        })

        it('should reject an WeaveValidationError', () => {
            expect(broker.call('buttler.welcome')).rejects.toBeInstanceOf(WeaveValidationError)
        })
    })
})

