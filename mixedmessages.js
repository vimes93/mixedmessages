const array1 = ["Hello", "What ho", "Good grief"];
const array2 = ["you are", "I am", "he is"];
const array3 = ["sorry.", "a llama!", "not to be trusted."];

let resultarray = [];

function generate(array) {
    let i = Math.floor(Math.random()*3);
    resultarray.push(array[i])
}

generate(array1)
generate(array2)
generate(array3)


console.log(`${resultarray[0]}, ${resultarray[1]} ${resultarray[2]}`)