const minusButtons = document.querySelectorAll( '.minus' );
const plusButtons = document.querySelectorAll( '.plus' );
const counterValues = document.querySelectorAll( '.value' );

minusButtons.forEach( ( button, index ) =>
{
    button.addEventListener( 'click', () =>
    {
        let value = counterValues[ index ].value;
        if ( value > 0 )
        {
            value--;
            counterValues[ index ].value = value;
        }
    } );
} );

plusButtons.forEach( ( button, index ) =>
{
    button.addEventListener( 'click', () =>
    {
        let value = counterValues[ index ].value;
        value++;
        counterValues[ index ].value = value;
    } );
} );