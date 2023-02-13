const minusButtons = document.querySelectorAll( '.minus' );
const plusButtons = document.querySelectorAll( '.plus' );
const counterValues = document.querySelectorAll( '.value' );
let subtotal = 0;

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
    button.addEventListener( 'click', updateSubtotalSubtract );
} );

plusButtons.forEach( ( button, index ) =>
{
    button.addEventListener( 'click', () =>
    {
        let value = counterValues[ index ].value;
        value++;
        counterValues[ index ].value = value;
    } );
    button.addEventListener( 'click', updateSubtotalAdd );
} );

function updateSubtotalAdd ( event )
{
    const dishAndPrice = getPrice( event );
    subtotal = subtotal + parseInt( dishAndPrice[ 1 ] );
    document.querySelector( '#subtotal' ).textContent = `Subtotal: $${ subtotal }`;
}

function updateSubtotalSubtract ( event )
{
    const dishAndPrice = getPrice( event );
    if ( subtotal > 0 )
    {
        subtotal = subtotal - parseInt( dishAndPrice[ 1 ] );
        document.querySelector( '#subtotal' ).textContent = `Subtotal: $${ subtotal }`;
    }
}

function getPrice ( event )
{
    const input = event.target.parentNode.querySelector( ".value" );
    const dishAndPrice = input.parentNode.parentNode.previousElementSibling.textContent.trim().split( "$" );
    return dishAndPrice;
};

document.querySelector( "#clearAll" ).addEventListener( "click", function ()
{
    document.querySelectorAll( ".value" ).forEach( function ( input )
    {
        input.value = 0;
    } );
    subtotal = 0;
    document.querySelector( "#subtotal" ).textContent = `Subtotal: $${ subtotal }`;
} );

document.querySelector( "#order" ).addEventListener( "click", function ()
{
    const order = []
    const inputs = document.querySelectorAll( ".value" );
    console.log( inputs );
    for ( let input of inputs )
    {
        const dishAndPrice = input.parentNode.parentNode.previousElementSibling.textContent.trim().split( "$" );
        const dish = dishAndPrice[ 0 ].trim();
        const quantity = parseInt( input.value );

        if ( quantity > 0 )
        {
            order.push( { dish, quantity } );
        }
    }
    if ( order.length == 0 )
    {
        alert( "No items in cart" );
    } else
    {
        let toString = "Order Placed! \n"
        order.forEach( item =>
        {
            const dish = item.dish;
            const quantity = item.quantity;
            toString += quantity + " " + dish + "\n";
        } );
        alert( toString );
    }
} );
