$( function () {
    $( "select" ).each( function () {
        $( this ).select2( {
            theme: "bootstrap-5",
            width: $( this ).data( "width" ) ? $( this ).data( "width" ) : $( this ).hasClass( "w-100" ) ? "100%" : "style",
            placeholder: $( this ).data( "placeholder" ),
            allowClear: Boolean( $( this ).data( "allow-clear" ) ),
            closeOnSelect: !$( this ).attr( "multiple" ),
            selectionCssClass: "select2--small",
            dropdownCssClass: "select2--small"
        } );
    } );
} );