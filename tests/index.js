// Libmq doesn't need a browser mock and handles compatibility itself,
// so load it first.
const libmq = require( 'libmq' )

// use a mock DOM so we can run mithril on the server
require('mithril/test-utils/browserMock')(global)
global.requestAnimationFrame = () => {}
// This allows m.request() to function
//global.window.XMLHttpRequest = require('w3c-xmlhttprequest').XMLHttpRequest

global.innerWidth = 0
global.innerHeight = 0

const
  m = require( 'mithril' ),
  r = require( 'mithril-node-render' ),
  o = require( 'ospec' ),
  MediaQuery = require( '../lib' ).MediaQuery

const
  q = libmq.query,
  w = libmq.screenWidths


o.spec( 'phone-only', function () {
  o( 'default', async function () {
    o( await r( m(
      MediaQuery,
      { type: 'phone-only' },
      'hello'
    ))).equals( 'hello' )
  })

  o( 'size -> display', async function () {
    o( await r( m(
      MediaQuery,
      { type: 'phone-only', size: w.phoneOnly },
      'hello'
    ))).equals( 'hello' )
  })

  o( 'size -> hide', async function () {
    o( await r( m(
      MediaQuery,
      { type: 'phone-only', size: w.phoneOnly + 1 },
      'hello'
    ))).equals( '' )
  })
})


o.spec( 'tablet-portrait-down', function () {
  o( 'default', async function () {
    o( await r( m(
      MediaQuery,
      { type: 'tablet-portrait-down' },
      'hello'
    ))).equals( 'hello' )
  })

  o( 'size -> display', async function () {
    o( await r( m(
      MediaQuery,
      { type: 'tablet-portrait-down', size: w.tabletPortraitDown },
      'hello'
    ))).equals( 'hello' )
  })

  o( 'size -> hide', async function () {
    o( await r( m(
      MediaQuery,
      { type: 'tablet-portrait-down', size: w.tabletPortraitDown + 1 },
      'hello'
    ))).equals( '' )
  })
})


o.spec( 'tablet-portrait-up', function () {
  o( 'default', async function () {
    o( await r( m(
      MediaQuery,
      { type: 'tablet-portrait-up' },
      'hello'
    ))).equals( '' )
  })

  o( 'size -> display', async function () {
    o( await r( m(
      MediaQuery,
      { type: 'tablet-portrait-up', size: w.tabletPortraitUp },
      'hello'
    ))).equals( 'hello' )
  })

  o( 'size -> hide', async function () {
    o( await r( m(
      MediaQuery,
      { type: 'tablet-portrait-up', size: w.tabletPortraitUp - 1 },
      'hello'
    ))).equals( '' )
  })
})


o.spec( 'tablet-landscape-down', function () {
  o( 'default', async function () {
    o( await r( m(
      MediaQuery,
      { type: 'tablet-landscape-down' },
      'hello'
    ))).equals( 'hello' )
  })

  o( 'size -> display', async function () {
    o( await r( m(
      MediaQuery,
      { type: 'tablet-landscape-down', size: w.tabletLandscapeDown },
      'hello'
    ))).equals( 'hello' )
  })

  o( 'size -> hide', async function () {
    o( await r( m(
      MediaQuery,
      { type: 'tablet-landscape-down', size: w.tabletLandscapeDown + 1 },
      'hello'
    ))).equals( '' )
  })
})


o.spec( 'tablet-landscape-up', function () {
  o( 'default', async function () {
    o( await r( m(
      MediaQuery,
      { type: 'tablet-landscape-up' },
      'hello'
    ))).equals( '' )
  })

  o( 'size -> display', async function () {
    o( await r( m(
      MediaQuery,
      { type: 'tablet-landscape-up', size: w.tabletLandscapeUp },
      'hello'
    ))).equals( 'hello' )
  })

  o( 'size -> hide', async function () {
    o( await r( m(
      MediaQuery,
      { type: 'tablet-landscape-up', size: w.tabletLandscapeUp - 1 },
      'hello'
    ))).equals( '' )
  })
})


o.spec( 'desktop-up', function () {
  o( 'default', async function () {
    o( await r( m(
      MediaQuery,
      { type: 'desktop-up' },
      'hello'
    ))).equals( '' )
  })

  o( 'size -> display', async function () {
    o( await r( m(
      MediaQuery,
      { type: 'desktop-up', size: w.desktopUp },
      'hello'
    ))).equals( 'hello' )
  })

  o( 'size -> hide', async function () {
    o( await r( m(
      MediaQuery,
      { type: 'desktop-up', size: w.desktopUp - 1 },
      'hello'
    ))).equals( '' )
  })
})


o.spec( 'big-desktop-up', function () {
  o( 'default', async function () {
    o( await r( m(
      MediaQuery,
      { type: 'big-desktop-up' },
      'hello'
    ))).equals( '' )
  })

  o( 'size -> display', async function () {
    o( await r( m(
      MediaQuery,
      { type: 'big-desktop-up', size: w.bigDesktopUp },
      'hello'
    ))).equals( 'hello' )
  })

  o( 'size -> hide', async function () {
    o( await r( m(
      MediaQuery,
      { type: 'big-desktop-up', size: w.bigDesktopUp - 1 },
      'hello'
    ))).equals( '' )
  })
})


o.spec( 'landscape', function () {
  o( 'default', async function () {
    o( await r( m(
      MediaQuery,
      { type: 'landscape' },
      'hello'
    ))).equals( 'hello' )
  })

  o( 'size -> display', async function () {
    o( await r( m(
      MediaQuery,
      { type: 'landscape', size: 1 },
      'hello'
    ))).equals( 'hello' )
  })

  o( 'size -> hide', async function () {
    o( await r( m(
      MediaQuery,
      { type: 'landscape', size: -1 },
      'hello'
    ))).equals( '' )
  })
})


o.spec( 'portrait', function () {
  o( 'default', async function () {
    o( await r( m(
      MediaQuery,
      { type: 'portrait' },
      'hello'
    ))).equals( '' )
  })

  o( 'size -> display', async function () {
    o( await r( m(
      MediaQuery,
      { type: 'portrait', size: -1 },
      'hello'
    ))).equals( 'hello' )
  })

  o( 'size -> hide', async function () {
    o( await r( m(
      MediaQuery,
      { type: 'portrait', size: 1 },
      'hello'
    ))).equals( '' )
  })
})


o( 'listener stub', async function () {
  o( await r( m( MediaQuery, { redraw: true }, 'hello' ))).equals( '' )
})

o( 'no type', async function () {
  o( await r( m( MediaQuery, 'hello' ))).equals( '' )
})
