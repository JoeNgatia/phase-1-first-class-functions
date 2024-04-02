// index.js

// Function that takes a callback function as an argument and calls it
function receivesAFunction(callback) {
    callback();
}

// Function that returns a named function
function returnsANamedFunction() {
    // Named function example
    function namedFunction() {
        console.log("This is a named function returned by returnsANamedFunction");
    }
    return namedFunction;
}

// Function that returns an anonymous function
function returnsAnAnonymousFunction() {
    // Anonymous function example
    return function() {
        console.log("This is an anonymous function returned by returnsAnAnonymousFunction");
    };
}

// Example usage:
// Define a callback function
function callbackFunction() {
    console.log("Callback function called!");
}

// Call receivesAFunction with the callbackFunction
receivesAFunction(callbackFunction);

// Call returnsANamedFunction and store the returned named function
const namedFunc = returnsANamedFunction();

// Call the returned named function
namedFunc();

// Call returnsAnAnonymousFunction and store the returned anonymous function
const anonymousFunc = returnsAnAnonymousFunction();

// Call the returned anonymous function
anonymousFunc();
