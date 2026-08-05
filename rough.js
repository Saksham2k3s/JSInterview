const person = {
    name: "Saksham",
    age : 21,
    address: {
        city: "Gwalior",
        street: "Mama ka bazar"
    }
}

const newObj = JSON.parse(JSON.stringify(person))

newObj.address.city = "Sahibabad";

console.log(newObj, person);