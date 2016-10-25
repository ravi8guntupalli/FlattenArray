//This example demonstrates array flattening
//This could be done easily using lodash.flatten and lodash.flattenDeep, how ever can be done also using plain java script

/**
 *
 * @param arrayToBeFlattened
 * @returns {Array}
 */
function flattenArray(arrayToBeFlattened) {
    var flattenedArray = [];
    for(var i = 0; i < arrayToBeFlattened.length; i++) {
        if(Array.isArray(arrayToBeFlattened[i])) {
            flattenedArray = flattenedArray.concat(flatten(arrayToBeFlattened[i]));
        } else {
            flattenedArray.push(arrayToBeFlattened[i]);
        }
    }
    return flattenedArray;
}

console.log(flatten([[1,2,[3]],4]));
console.log(flatten([[[[1,2,3]]]]));