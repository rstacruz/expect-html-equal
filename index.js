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
    if (!message) message = 'HTML is not equal'
    toHtmlEqual.call(this, 'toEqual', other, message)
  }

  expect.prototype.toNotHtmlEqual = function (other, message) {
    if (!message) message = 'HTML is equal'
    toHtmlEqual.call(this, 'toNotEqual', other, message)
  }

  expect.prototype.toHtmlInclude = function (other, message) {
    toHtmlEqual.call(this, 'toInclude', other, message)
  }

  expect.prototype.toNotHtmlInclude = function (other, message) {
    toHtmlEqual.call(this, 'toExclude', other, message)
  }

  expect.prototype.toHtmlContain =
  expect.prototype.toHtmlInclude

  expect.prototype.toHtmlExclude =
  expect.prototype.toNotHtmlContain =
  expect.prototype.toNotHtmlInclude

  expect.htmlNormalize = normalize

  function toHtmlEqual (assertion, other, message) {
    this.actual = normalize(this.actual)
    other = normalize(other)
    this[assertion](other, message)
  }

  function normalize (html) {
    var div = document.createElement('div')
    div.innerHTML = html
    return div.innerHTML
  }

  return expect

})); // eslint-disable-line semi
