const routes = require('next-routes')()

routes
  .add('/disputes/new', '/disputes/new')
  .add('/disputes/:address', '/disputes/show')
  .add('/disputes/:address/issues', '/disputes/issues/index')
  .add('/disputes/:address/issues/new', '/disputes/issues/new')

module.exports = routes
