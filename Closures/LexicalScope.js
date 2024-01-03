// What is Lexical Scope ?

// lexical scope means a variable which define outside the function can assible 
// inside the function but its opposite is not true.

var username = "Saksham Shrivastava";        // globle scope

function display(){
    // local scope
    console.log(username);
}

display();