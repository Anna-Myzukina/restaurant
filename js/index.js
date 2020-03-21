function hello(){
    console.log('Hello', this)
}

const person = {
    name: 'Max',
    age: 37,
    sayHello: hello
}