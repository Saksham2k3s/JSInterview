// Q.1 What will output

const obj = {
  a: "one",
  b: "two",
  a: "Three", // This a will override the previous one put it remains on its first position
};

console.log(obj);

// Q.2 Create a function mulByTwo(obj2) that multiply all the numeric field by 2

let obj2 = {
  a: 200,
  b: 300,
  c: "Saksham",
};

function mulByTwo(obj2) {
  for (key in obj2) {
    if (typeof obj2[key] === "number") {
      obj2[key] *= 2;
    }
  }
}

mulByTwo(obj2);

console.log(obj2);

//Q.3 What will be the output of this code ?

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]); // when we try to add b which is object itself it will converted to string "Object Object" as key;
console.log(a[c]); // it will set the value of "Object Object " to 456 i.e. it will overlap the a[b];

// Q.4 What will be the output of this code ?

const obj3 = { 1: "a", 2: "b", 3: "c" };
const set = new Set([1, 2, 3, 4, 5]);

obj3[set] = "hello";

console.log(obj3);

// Q.5 What are JSON.stringfy() and JSON.parse() ?

// These methods are commonly used when you need to exchange
// data between a server and a web browser, as JSON is a lightweight
// data interchange format that is easy for both humans to read and write,
// and easy for machines to parse and generate.

const obj4 = {
  name: "Saksham",
  age: 20,
};

const strobj = JSON.stringify(obj4);
console.log(strobj); // it will convert our obj to string obj

// but when we try to access strobj.name it will give undefined

console.log(strobj.name);

console.log(JSON.parse(strobj));

// Q.6 What will output of this code

const obj5 = {
  name: "Saksham",
  age: 20,
};

const admin = { admin: true, ...obj5 }; // sperade operator will spread the obj5 in admin
console.log(admin);

// Q.7 What will output of this code

const settings = {
  username: "Saksham",
  health: 90,
  level: 10,
};

const newset = JSON.stringify(settings, ["health", "level"]); // here we are only specifying that only convert the health and level to string
console.log(newset);

// Q.8 What will output of this code

const shape = {
  radius: 10,
  diameter() {
    return 2 * this.radius; // in the anomious func the this keyword will automatically bind into this to obj in which the fucntion
  },
  permeter: () => {
    return 3 * this.radius; // in arrow func the this keyword refer to window obj
  },
};

console.log(shape.diameter());
console.log(shape.permeter());

//Q.9 What will output of this code

let cc = { greeting: "Hey!" };
let d;
d = cc;
cc.greeting;
("Hello");
console.log(d.greeting); // d.greeting will also show the Hello because we are not copying the cc to d we are only giving the reference of cc to d

//Q.10 What will output of this code

console.log({ a: 1 } == { a: 1 });
console.log({ a: 1 } == { a: 1 }); // They will give false because object are only same when they are refering to same space in memory

const obj6 = {
  name: "saksham",
  age: 21,
};

for (key in obj6) {
  console.log(key, obj6[key]);
}

const bb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(bb[i]), 1000);
}

<svg
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  width="512"
  height="512"
  x="0"
  y="0"
  viewBox="0 0 512 512"
  style="enable-background:new 0 0 512 512"
  xml:space="preserve"
  class=""
>
  <g>
    <path
      d="M114.914 176.485c-4.566 9.506-7.124 20.159-7.124 31.41 0 40.114 32.519 72.633 72.633 72.633s72.633-32.519 72.633-72.633-32.519-72.633-72.633-72.633c-17.352 0-33.283 6.085-45.776 16.238"
      style="stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;"
      fill="none"
      stroke="#11bf22"
      stroke-width="15"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      data-original="#000000"
      class=""
      opacity="1"
    ></path>
    <path
      d="M294.506 332.377c-28.022-32.08-69.136-51.85-114.083-51.85h-14.28c-62.854 0-117.22 43.787-130.612 105.198h0c-3.974 18.224 9.906 35.458 28.559 35.458h131.423M187.961 9.985l12.843 21.601a5.082 5.082 0 0 0 3.249 2.36l24.513 5.539c3.76.85 5.243 5.413 2.7 8.31l-16.575 18.89a5.085 5.085 0 0 0-1.241 3.819l2.306 25.025c.354 3.839-3.528 6.659-7.069 5.136L185.6 90.739a5.085 5.085 0 0 0-4.016 0l-23.087 9.927c-3.542 1.523-7.423-1.297-7.069-5.136l2.306-25.025a5.085 5.085 0 0 0-1.241-3.819l-16.575-18.89c-2.543-2.898-1.06-7.461 2.7-8.31l24.513-5.539a5.085 5.085 0 0 0 3.249-2.36l12.843-21.601c1.97-3.314 6.768-3.314 8.738-.001zM53.789 26.473l10.519 17.692a4.164 4.164 0 0 0 2.661 1.933l20.076 4.537c3.08.696 4.294 4.433 2.212 6.806L75.681 72.912a4.161 4.161 0 0 0-1.016 3.128l1.889 20.496c.29 3.144-2.889 5.454-5.79 4.207l-18.909-8.13a4.167 4.167 0 0 0-3.289 0l-18.909 8.13c-2.901 1.247-6.08-1.062-5.79-4.207l1.889-20.496a4.165 4.165 0 0 0-1.016-3.128L11.165 57.441c-2.083-2.373-.868-6.11 2.212-6.806l20.076-4.537a4.164 4.164 0 0 0 2.661-1.933l10.519-17.692c1.613-2.714 5.543-2.714 7.156 0zM306.833 26.473l-10.519 17.692a4.164 4.164 0 0 1-2.661 1.933l-20.076 4.537c-3.08.696-4.294 4.433-2.212 6.806l13.575 15.471a4.161 4.161 0 0 1 1.016 3.128l-1.889 20.496c-.29 3.144 2.889 5.454 5.79 4.207l18.909-8.13a4.167 4.167 0 0 1 3.289 0l18.909 8.13c2.901 1.247 6.08-1.062 5.79-4.207l-1.889-20.496a4.165 4.165 0 0 1 1.016-3.128l13.575-15.471c2.083-2.373.868-6.11-2.212-6.806l-20.076-4.537a4.164 4.164 0 0 1-2.661-1.933l-10.519-17.692c-1.612-2.714-5.542-2.714-7.155 0zM501.872 359.382h0c0-11.449-9.282-20.731-20.731-20.731l-75.348-.116c-9.872-.015-17.868-8.023-17.868-17.895v-53.537a32.15 32.15 0 0 0-15.01-27.201c-7.458-4.7-17.349-.942-19.827 7.519l-29.943 102.243c-4.798 16.383-19.824 27.64-36.896 27.64h-20.48v106.951h31.676c16.753 0 33.417 3.159 48.781 9.839a121.576 121.576 0 0 0 48.476 10.083l86.438.324c11.45 0 20.731-9.281 20.731-20.731h0c0-11.449-9.282-20.731-20.731-20.731 11.45 0 20.731-9.282 20.731-20.731h0c0-11.45-9.282-20.731-20.731-20.731 11.45 0 20.731-9.282 20.731-20.731h0c0-11.449-9.282-20.731-20.731-20.731 11.45-.002 20.732-9.284 20.732-20.733zm0 0h0c0-11.449-9.282-20.731-20.731-20.731l-75.348-.116c-9.872-.015-17.868-8.023-17.868-17.895v-53.537a32.15 32.15 0 0 0-15.01-27.201c-7.458-4.7-17.349-.942-19.827 7.519l-29.943 102.243c-4.798 16.383-19.824 27.64-36.896 27.64h-20.48v106.951h31.676c16.753 0 33.417 3.159 48.781 9.839a121.576 121.576 0 0 0 48.476 10.083l86.438.324c11.45 0 20.731-9.281 20.731-20.731h0c0-11.449-9.282-20.731-20.731-20.731 11.45 0 20.731-9.282 20.731-20.731h0c0-11.45-9.282-20.731-20.731-20.731 11.45 0 20.731-9.282 20.731-20.731h0c0-11.449-9.282-20.731-20.731-20.731 11.45-.002 20.732-9.284 20.732-20.733zm-20.732 20.731h-24.62m24.62 41.463h-24.62m24.62 41.462h-24.62"
      style="stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;"
      fill="none"
      stroke="#11bf22"
      stroke-width="15"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      data-original="#000000"
      class=""
      opacity="1"
    ></path>
    <path
      d="M257.543 500.217h-49.604a8.227 8.227 0 0 1-8.227-8.227V365.52a8.227 8.227 0 0 1 8.227-8.227h49.604a8.227 8.227 0 0 1 8.227 8.227v126.47a8.227 8.227 0 0 1-8.227 8.227z"
      style="stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;"
      fill="none"
      stroke="#11bf22"
      stroke-width="15"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      data-original="#000000"
      class=""
      opacity="1"
    ></path>
  </g>
</svg>;
