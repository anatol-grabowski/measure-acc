const { measure } = require('.')

console.log(measure)

measure.start('m1')

measure.end('m1')

measure.logAll()
