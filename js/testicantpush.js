function isTrue(str) {
    return (str === true);
}

function isFalse(str) {
    return (str === false);
}

function not(str) {
    return (!str);
}

function addOne(num) {
    return (parseFloat(num) + 1);
}

function isEven(num) {
    return (parseInt(num) % 2 === 0);
}

function isIdentical(a, b) {
    return (a === b);
}

function isEqual(a, b) {
    return (a == b);
}

function or(a, b) {
    return (a || b);
}

function and(a, b) {
    return (a && b);
}

function concat(a, b) {
    return a.toString().concat(b.toString());
}

// finished the practice