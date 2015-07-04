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

  describe('failure', function () {    
    beforeEach(function () {
      try {
        var input = '<DIV class="name">Hello</div>'
        expect(input).toHtmlEqual('<DIV class="name">Hi</div>')
      } catch (err) {
        this.err = err
      }
    })

    it('.actual', function () {
      expect(this.err.actual).toEqual('<div class="name">Hello</div>')
    })

    it('.expected', function () {
      expect(this.err.expected).toEqual('<div class="name">Hi</div>')
    })

    it('.message', function () {
      expect(this.err.message).toEqual('HTML is not equal')
    })

    it('.generatedMessage', function () {
      expect(this.err.generatedMessage).toEqual(false)
    })
  })

  it('toNotHtmlEqual works', function () {
    var input = '<div class="name">Hello</div>'
    expect(input).toNotHtmlEqual('<div class="name">Hi</div>')
  })
})
