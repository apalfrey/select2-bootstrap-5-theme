function select2( size ) {
    $( "select" ).each( function () {
        $( this ).select2( {
            theme: "bootstrap-5",
            width: $( this ).data( "width" ) ? $( this ).data( "width" ) : $( this ).hasClass( "w-100" ) ? "100%" : "style",
            placeholder: $( this ).data( "placeholder" ),
            allowClear: Boolean( $( this ).data( "allow-clear" ) ),
            closeOnSelect: !$( this ).attr( "multiple" ),
            containerCssClass: size == "small" || size == "large" ? "select2--" + size : "",
            selectionCssClass: size == "small" || size == "large" ? "select2--" + size : "",
            dropdownCssClass: size == "small" || size == "large" ? "select2--" + size : "",
        } );
    } );
}

select2()

var buttons = document.querySelectorAll(".select2-size")

buttons.forEach( function( button ) {
    var id = button.id
    button.addEventListener( "click", function( e ) {
        e.preventDefault()
        select2( id )
        document.querySelectorAll(".select2-size").forEach( function( item ) {
            item.classList.remove( "active" )
        } )

        this.classList.add( "active" )
    } )
} )