# mithril-media-query
A mithril component for selectively rendering based on the current viewport dimensions.


[![coverage](https://img.shields.io/codecov/c/github/soulofmischief/mithril-media-query/master.svg?style=flat-square)](http://codecov.io/gh/soulofmischief/libmq?branch=master)
[![size](https://img.shields.io/bundlephobia/min/mithril-media-query.svg?style=flat-square)](https://www.npmjs.com/package/libmq)

## Install

```$ npm install mithril-media-query --save```

## Example

```jsx
import { MediaQuery, query } from 'mithril-media-query'

<MediaQuery type="phone-only">
  Howdy
</MediaQuery>

if ( query.phoneOnly()) console.log( 'This is a phone.' )
```

## Configuration

`mithril-media-query` requires the `type` attribute, a string which controls the width threshold for displaying its children.

The following types are available:

* `'bigDesktopUp'` - Above 1800px
* `'desktopUp'` - Above 1200px
* `'phoneOnly'` - Below 599px
* `'tabletPortraitDown'` - Below 899px
* `'tabletPortraitUp'` - Above 600px
* `'tabletLandscapeDown'` - Below 899px
* `'tabletLandscapeUp'` - Above 600px
* `'landscape'` - Greater than or equal to `window.innerHeight`
* `'portrait'` - Less than `window.innerHeight`

By default, `mithril-media-query` checks against `window.innerWidth`, but it can be passed a numerical `size` attribute to be tested instead in order to programmatically control rendering.

You can optionally automatically redraw during window resize by enabling the `redraw` attribute. Redraws are throttled to once every 150ms.

## Notes

`mithril-media-query` is powered by [`libmq`](https://www.npmjs.com/package/libmq), a Javascript library for making media queries. For convenience, `libmq` is exposed as `query` in `mithril-media-query`'s named exports.
