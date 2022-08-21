function receivesAFunction(pingback) {
    pingback();
}

function returnsANamedFunction() {
    return function namedFunction(){
        return "awesome"
    }
}

function returnsAnAnonymousFunction() {
    
        return() => console.log("anonymous function")
    
}