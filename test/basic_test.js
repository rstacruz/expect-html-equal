/* global describe, it */
var expect = require('expect')
require('../index')

if (typeof process === 'object') {
  require('mocha-jsdom')()
}

describe('my project', function () {
  it('works', function () {
    var input = '<div class="name">Hello</div>'
    expect(input).toHtmlEqual('<DIV CLASS=name>Hello</DIV>')
  })
})
