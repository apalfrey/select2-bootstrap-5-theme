window.addEventListener( 'DOMContentLoaded', function () {
    anchors.options = {
        icon: '#'
    }
    anchors.add('.s2bs5-content > h2, .s2bs5-content > h3, .s2bs5-content > h4, .s2bs5-content > h5')

    document.querySelectorAll( '.btn-clipboard' ).forEach( function ( btn ) {
        var tooltipBtn = new bootstrap.Tooltip( btn )

        btn.addEventListener( 'mouseleave', function () {
            // Explicitly hide tooltip, since after clicking it remains
            // focused (as it's a button), so tooltip would otherwise
            // remain visible until focus is moved away
            tooltipBtn.hide()
        } )
    } )

    var clipboard = new ClipboardJS( '.btn-clipboard', {
        target: function ( trigger ) {
            return trigger.parentNode.nextElementSibling
        }
    } )

    clipboard.on( 'success', function ( e ) {
        var tooltipBtn = bootstrap.Tooltip.getInstance( e.trigger )

        e.trigger.setAttribute( 'data-bs-original-title', 'Copied!' )
        tooltipBtn.show()

        e.trigger.setAttribute( 'data-bs-original-title', 'Copy to clipboard' )
        e.clearSelection()
    } )

    clipboard.on( 'error', function ( e ) {
        var modifierKey = /mac/i.test( navigator.userAgent ) ? '\u2318' : 'Ctrl-'
        var fallbackMsg = 'Press ' + modifierKey + 'C to copy'
        var tooltipBtn = bootstrap.Tooltip.getInstance( e.trigger )

        e.trigger.setAttribute( 'data-bs-original-title', fallbackMsg )
        tooltipBtn.show()

        e.trigger.setAttribute( 'data-bs-original-title', 'Copy to clipboard' )
    } )
} )