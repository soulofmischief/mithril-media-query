# mithril-media-query
A mithril component for selectively rendering based on the current viewport dimensions.


[![coverage](https://img.shields.io/codecov/c/github/soulofmischief/mithril-media-query/master.svg?style=flat-square)](http://codecov.io/gh/soulofmischief/libmq?branch=master)
[![size](https://img.shields.io/bundlephobia/min/mithril-media-query.svg?style=flat-square)](https://www.npmjs.com/package/libmq)

## Install

```$ npm install mithril-media-query --save```

## Example

```jsx
import MediaQuery from 'mithril-media-query'

<MediaQuery type="phone-only">
  Howdy
</MediaQuery>
```

## Configuration

`mithril-media-query` requires the `type` attribute, a string which controls the width threshold for displaying it's children.

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

By default, `mithril-media-query` checks against `window.innerWidth`, but it can optionally be passed a `size` attribute. This should be a number which will be checked against the above values.

## Notes

`mithril-media-query` is powered by [`libmq`](https://www.npmjs.com/package/libmq), a Javascript library for making media queries.