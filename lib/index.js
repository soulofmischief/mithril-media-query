const
  { throttle } = require( '@soulofmischief/js-utils' ),
  libmq = require( 'libmq' ),
  m = require( 'mithril' )


const
  q = libmq.query

// Listener that redraws every 150 ms while resizing window.
const drawOnResize = throttle(
  () => m.redraw(),
  150,
  { leading: false }
)


/**
 * A mithril component which displays children if a chosen media query passes.
 * The `type` attribute contains a string corresponding to a media query.
 * You can optionally automatically redraw during window resize by enabling
 * the `listener` attribute, or provide the `size` attribute which will
 * be tested instead of `window.innerWidth` in order to programmatically
 * control rendering.
 */
module.exports.MediaQuery = function MediaQuery() { return {
  oninit({ attrs }) {
    if ( attrs.listener )
      window.addEventListener( 'resize', drawOnResize )
  },

  view({ attrs, children }) {
    switch ( attrs.type ) {
      case 'phone-only':
        return q.phoneOnly( attrs.size ) ? children : null
      case 'tablet-portrait-down':
        return q.tabletPortraitDown( attrs.size ) ? children : null
      case 'tablet-portrait-up':
        return q.tabletPortraitUp( attrs.size ) ? children : null
      case 'tablet-landscape-down':
        return q.tabletLandscapeDown( attrs.size ) ? children : null
      case 'tablet-landscape-up':
        return q.tabletLandscapeUp( attrs.size ) ? children : null
      case 'desktop-up':
        return q.desktopUp( attrs.size ) ? children : null
      case 'big-desktop-up':
        return q.bigDesktopUp( attrs.size ) ? children : null
      case 'landscape':
        return q.landscape( attrs.size ) ? children : null
      case 'portrait':
        return q.portrait( attrs.size ) ? children : null
      default: return null
    }
  },
}}

// Expose libmq for convenience.
module.exports.query = libmq.query