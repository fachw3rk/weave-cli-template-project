module.exports = {
    //namespace: 'dev',
    nodeId: 'my-first-node',
    logLevel: 'info',
    {{#needTransporter}}
    transporter: {
        adapter: '{{transporter}}',
        // codec for transport serialization/deserialization
        // maximum queue size
        maxQueueSize: 80000,
        // heartbeat interval
        heartbeatInterval: 5 * 1000,
        // heartbeat timeout
        heartbeatTimeout: 10 * 1000,
        // interval to check and remove not offline nodes.
        offlineNodeCheckInterval: 10 * 60 * 1000
    },
    {{/needTransporter}}
    {{#needCaching}}
    cache: '{{cache}}',
    {{/needCaching}}
    middlewares: null,
    bulkhead: {
        enabled: false,
        concurrency: 15,
        maxQueueSize: 150
    },
    circuitBreaker: {
        enabled: false,
        // Time after which an open circuit breaker is set to half-open.
        halfOpenTimeout: 10000,
        maxFailures: 3,
        windowTime: 60000
    },
    registry: {
        preferLocalActions: true,
        // request timeout in ms
        requestTimeout: 0 * 1000,
        // loadbalancing stategy
        loadBalancingStrategy: 'round_robin'
    },
    validateActionParams: true,
    metrics: {
        enabled: false,
        metricRate: 1.0
    },
    retryPolicy: {
        enabled: false,
        retries: 5,
        delay: 3000
    },
    loadNodeService: true,
    // load Internal service actions
    publishNodeService: false,
    watchServices: false
}
