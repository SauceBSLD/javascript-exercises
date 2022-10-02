const removeFromArray = function (...args) { // prend nombre array infini arguments et mets dans args[]
    const array = args[0]; // prend l'array donné comme argument en position 0 et le met dans array
    const newArray = []; // declare un nouvel array

    array.forEach(function(item){       // item = valeur de l'array
        if (!args.includes(item)) {     // donc forEach value if !args
            newArray.push(item);        // on push dans le nouvel array
        }
    });

    return newArray;
    // function anon(item) {             // Même chose sans fonction anonyme
    //    if (!args.includes(item)) {   // elle serait call avec array.forEach(anon)
    //        newArray.push(item);
    //    }
    // }

    // const removeFromArray = (...args) => {  // avec arrow function
    //    const array = args[0];              // 
    //    const newArray = [];                //
    //
    //    array.forEach(function(item){       //
    //        if (!args.includes(item)) {     //
    //            newArray.push(item);        //
    //        }
    // });
}





// Do not edit below this line
module.exports = removeFromArray;