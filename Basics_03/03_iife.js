// Immediately Invoked Function Expression (IIFE).
// - to avoid pollutin from global scope.
// - to executed function immediately.

(function iife(){                // named iife
    console.log(`DB CONNECTED`);
})();


((name) => {
    console.log(`DB CONNECTED TWO ${name}`);  //unnamed iife
})('Micky');

