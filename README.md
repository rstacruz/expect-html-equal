# expect-html-equal

Extension to [expect] to compares two HTML snippets. It normalizes HTML
snippets to be cross-compatible with legacy IE.

[![Status](https://travis-ci.org/rstacruz/expect-html-equal.svg?branch=master)](https://travis-ci.org/rstacruz/expect-html-equal "See test builds")

```js
var expect = require('expect')
require('expect-html-equal')

it('works', function () {
  var input = '<div class="name">Hello</div>'
  expect(input).toHtmlEqual('<DIV CLASS=name>Hello</DIV>')
})
```

In node/iojs, it expects a `global.document` to exist, so you might want to do
this in a jsdom environment. (eg, [mocha-jsdom])

In the browser, you can use the rawgit CDN (change `{VERSION}`):

```js
<script src='https://cdn.rawgit.com/mjackson/expect/{VERSION}/dist/expect.min.js'></script>
<script src='https://cdn.rawgit.com/rstacruz/expect-html-equal/{VERSION}/index.js'></script>
```

[expect]: https://www.npmjs.com/package/expect
[mocha-jsdom]: https://www.npmjs.com/package/mocha-jsdom

<br>

## Thanks

**expect-html-equal** © 2015+, Rico Sta. Cruz. Released under the [MIT] License.<br>
Authored and maintained by Rico Sta. Cruz with help from contributors ([list][contributors]).

> [ricostacruz.com](http://ricostacruz.com) &nbsp;&middot;&nbsp;
> GitHub [@rstacruz](https://github.com/rstacruz) &nbsp;&middot;&nbsp;
> Twitter [@rstacruz](https://twitter.com/rstacruz)

[MIT]: http://mit-license.org/
[contributors]: http://github.com/rstacruz/expect-html-equal/contributors
