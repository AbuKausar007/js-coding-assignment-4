function evenOdd(string) {
    if (typeof string !== 'string') {
        return "Please input only string!!";
    } else if (string.length % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}
console.log(evenOdd(55)); // Output: even

