/**
 * String utility functions
 * @module my-awesome-package
 */

/**
 * capitalizeWords - capitalizes the first letter of each word in a string
 * @param {string} str - the input string
 * @returns {string} - the transformed string
 */

function capitalizeWords(str){
    return str
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ')
}

/**
 * reverseString - Reverses a string
 * @param {string} str - the input string
 * @return {string} the reversed string
 */

function reverseString(str){
    return str.split('').reverse().join('')
}

module.exports = {
    capitalizeWords,
    reverseString
}