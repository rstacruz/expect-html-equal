/* global define */
void (function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory)
  } else if (typeof exports === 'object') {
    module.exports = factory(require('expect'))
  } else {
    factory(root.expect)
  }
}(this, function (expect) {

  expect.prototype.toHtmlEqual = function (other, message) {
    toHtmlEqual.call(this, true, other, message)
  }

  expect.prototype.toNotHtmlEqual = function (other, message) {
    toHtmlEqual.call(this, false, other, message)
  }

  function toHtmlEqual (sign, other, message) {
    var assertion = sign ? 'toEqual' : 'toNotEqual'
    this.actual = normalize(this.actual)
    other = normalize(other)
    if (!message) message = 'HTML ' + (sign ? 'is not' : 'is') + ' equal'
    this[assertion](other, message)
  }

  function normalize (html) {
    var div = document.createElement('div')
    div.innerHTML = html
    return div.innerHTML
  }

  return expect

})); // eslint-disable-line semi
