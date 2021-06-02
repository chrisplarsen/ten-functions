"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

function isTrue(valueT) {
    return valueT === true;
}

function isFalse(valueF) {
    return valueF === false;
}

function not(valueNot1) {
    return !valueNot1
}

function addOne(numberAdd) {
    return ++numberAdd
}

function isEven(numberEven) {
    return (Number(numberEven) % 2) === 0;
}

function isIdentical(identical1, identical2) {
    return identical1 === identical2;
}

function isEqual(equal1, equal2) {
    return equal1 == equal2;
}

function or(option1, option2) {
    return option1 || option2;
}

function and(and1, and2) {
    return and1 && and2;
}

function concat(lineA, lineB) {
    return lineA.toString() + lineB.toString();
}