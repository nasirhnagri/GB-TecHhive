console.log("hello")
//  function with parameters

const addFun = (name, b, c) => {
return name + b ** c
}
let result = addFun("nasir",2,3)
console.log(result)


// F = ma


let force = (m, a) => {
return m * a
}


let result3 = force(3,5)

console.log(result3)

// Convert Fahrenheit to Celsius:

const toCelsius = (fahrenheit) => {
    return (5/9) * (fahrenheit - 32);
}

let valueOfCelsius = toCelsius(88);
console.log(valueOfCelsius)

// output result 31.111111111111114

// ================find f = ma ============== 
let a = 20
let m =38

const calculateForce = () => {
    return m * a
}
console.log(calculateForce())

const cForce = (mass, acceleration) => {
    return mass * acceleration
}
let valueOfForce = cForce(23, 44)

console.log(valueOfForce)
// output result 1012

// Gravitational Force (Newton + Large Numbers)
// formula
// ================F = G m1m2/r2================

const gravitationalForce = (m1, m2, r) => {
    const G = 6.67430e-11;
    return G *(m1 * m2 / r**2)
}

let valueGf = gravitationalForce(33.43, 22, 54)

console.log(valueGf)
// output result  1.683361000685871e-11


// =============Matrix Multiplication===============

const multiplyMatrix = (A, B) => {
   
// let result = Array(A.length).fill(0).map(()=> Array(B[0].length).fill(0));
    let result = Array(A.length).fill(0).map(() => Array(B[0].length).fill(0));

    for(let i = 0; i < A.length; i++ ) {
        for(let j = 0; j < B[0].length; j++){
            for(let k = 0; k < B.length; k++){

                result[i][j] += A[i][k] * B[k][j]
            }

        }
    }
    
return result;
} 
let finalResult = multiplyMatrix([[1,2],[3,4]], [[5,6],[7,8]])
console.log(finalResult)

