// Task 1
function logDairy() {
    var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
    for (var dairy of dairy) {
        console.log(dairy)
    }

}
logDairy()

// Task 2

function birdCan() {
    
const animal = {

    canJump: true

};

//object.create(animal) to extend properties of animal

const bird = Object.create(animal);

    bird.canFly = true;

    bird.hasFeathers = true;

//object.keys to itterate over properties of bird
//for of loop in this instance loops over what is specified such as the bird's props

for (prop of Object.keys(bird)) {
        console.log(prop + ": " + bird[prop]);
}
}
birdCan()

// Task 3

function animalCan() {

    const animal = {

    canJump: true

};

const bird = Object.create(animal);

    bird.canFly = true;

    bird.hasFeathers = true;

//for in loop loops over animals in whole and not only the birds props - not ideal in this scenario 

for (property in bird) {
    console.log(prop)
}
    
}

animalCan()
