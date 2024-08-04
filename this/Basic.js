// What is this keyword ?

// This keyword is use to refer something 

this.a = 5                 // globle 
console.log(this.a);

// nested object with this

const user = {
    name : "Abhishek",
    age : 20,
    childobj : {
        newname : "Abhi",
        newage : 20,
        getdetails : function(){
            console.log(this.newname, "and", this.name);  // it will show this.name as undefined becoze here this is showing the childobj objrct
            
        }
    }
}

user.childobj.getdetails();

// this inside the class

class a {    // inside the class the this refer to all the thing inside the constructor
  constructor(n){
    this.name =  n;
  }
  getName(){
    console.log(this);
  }
}

const aa = new a("Saksham")
console.log(aa);

const obj = {
  name : "Saksham",
  obj2 : {
    name : "Sakshi Shrivastava",
    getName : function() {
      return innerFunc = () => {
          console.log(this.name);
      }
    }
  }
}

obj.obj2.getName()();


const cal = {
  total : 0,
  add(a){
   this.total = this.total + a;
   return this;
  },

  sub(a){
    this.total = this.total - a;
    return this
  },

  mul(a){
    this.total = this.total * a;
    return this
  },

  div(a){
    this.total = this.total / a;
    return this;
  }

}

cal.add(3);
cal.add(5);

console.log(cal.total);