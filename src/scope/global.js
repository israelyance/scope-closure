var hello = "HELLO"
var hello = 'Hello +'

let world = 'Hello world'
let world = 'Hello'

const helloWorld = 'Hello World'


const anotherFunction = () => {
    console.log(hello)
    console.log(world)
    console.log(helloWorld)
}

anotherFunction()


//
const helloWorld = () => {
    globalVar = 'Im global'
}

helloWorld()
console.log(globalVar)


//
const anotherFunction = () => {
    var localVar = globalVar = 'Im Global'
}

anotherFunction()
console.log(globalVar)