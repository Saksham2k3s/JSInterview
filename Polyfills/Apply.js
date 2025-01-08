Function.prototype.myApply = function (context = {}, args) {
    if(typeof this !== 'function'){
        console.log("Can't use method with this");
        return;
    }

    context.fn = this;
    context.fn(args);
}

const obj = {
    name : "Saksham",
    age : 20
}

var func = function (args) {
    console.log("These are args", args, "Name", this.name);
}

func.myApply(obj, ["Hello", "Panda"]);