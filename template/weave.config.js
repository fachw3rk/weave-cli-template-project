module.exports = {
    namespace: 'dev',
    nodeID: 'my-first-node',
    logLevel: 'info',
    {{#needTransporter}}
    transporter: '{{transporter}}',
    {{/needTransporter}}
    {{#needCacher}}
    cacher: '{{cacher}}',
    {{/needCacher}}
    requestTimeout: 0 * 1000,
    requestRetry: 0,
    maxCallLevel: 0,
    heartbeatInterval: 5000,
    heartbeatTimeout: 1500,
    disableBalancer: false,
    registry: {
        strategy: 'RoundRobin',
        preferLocal: true
    },
    circuitBreaker: {
        enabled: false,
        maxFailures: 3,
        halfOpenTime: 10000,
        failureOnTimeout: true,
        failureOnReject: true
    },
    validation: true,
    metrics: false,
    metricsRate: 1,
    internalActions: true,
    hotReload: false
}