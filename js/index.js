const person = new Object(
    {
        name: 'Max',
        age: 25,
        greed: function(){
            console.log('Greet!!!')
        }
    }
)

Object.prototype.sayHello = function(){
    console.log('Hello!')
}

const lena = Object.create(person)