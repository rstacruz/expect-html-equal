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
    toHtmlEqual.call(this, 'toEqual', other, message)
  }

  expect.prototype.toNotHtmlEqual = function (other, message) {
    toHtmlEqual.call(this, 'toNotEqual', other, message)
  }

  function toHtmlEqual (assertion, other, message) {
    this.actual = normalize(this.actual)
    this[assertion](normalize(other), message)
  }

  function normalize (html) {
    var div = document.createElement('div')
    div.innerHTML = html
    return div.innerHTML
  }

  return expect

})); // eslint-disable-line semi
