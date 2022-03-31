const alertMe = () => {
    alert( 'Last Worning it is!!!' );
};

const confirmMe = () => {
    const value = confirm( 'Are you sure?' );
    console.log( value );
};

const getData = () => {
    const value = prompt( 'What is your name?' );
    console.log( value );
};
const soap = () => {
    console.log( 'Do some thing' );
};
console.log( 'I am First' );
// setTimeout( function () {
//     console.log( "My name is Md Akbar Hossain" );
// }, 5000 );
setTimeout( () => {
    console.log( "My name is Md Akbar Hossain" );
}, 5000 );
console.log( 'I am third' );
console.log( 'I am Fourth' );
console.log( 'I am last' );