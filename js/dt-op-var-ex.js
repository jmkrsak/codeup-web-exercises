var a = 1;
undefined
var b = a++
undefined
var c = ++a;
undefined
a
3
b
1
c
3
var d = "hello";
undefined
var e = false;
undefined
d++;
NaN
e++;
0
var perplexed;
undefined
perplexed + 2;
NaN
var price = 2.7;
undefined
price.toFixed(2);
'2.70'
var price = "2.7";
undefined
price.toFixed(2);
/* Uncaught TypeError: price.toFixed is not a function
at <anonymous>:1:7 */
isNaN(0)
false
isNaN(1)
false
isNaN("")
false
isNaN("string")
true
isNaN("0")
false
isNaN("1")
false
isNaN("3.145")
false
isNaN(Number.MAX_VALUE)
false
isNaN(Infinity)
false
isNaN("true")
true
isNaN(true)
false
isNaN("false")
true
isNaN(false)
false
NaN == NaN
false
!true
false
!false
true
!!true
true
!!false
false
!!0
false
!!-0
false
!!1
true
!!-1
true
!!0.1
true
!!"hello"
true
!!""
false
!!''
false
!!"false"
true
!!"0"
true
var sample = "Hello Codeup";
undefined
sample.length
12
sample.toLocaleUpperCase()
'HELLO CODEUP'
sample += " Students"
'Hello Codeup Students'
sample.replace("Students", "Class")
'Hello Codeup Class'
sample.indexOf("c")
-1
sample.indexOf("C")
6
sample.substring(sample.indexOf("C"), sample.indexOf("p")+1)
'Codeup'
let a = 3
undefined
let b = 5
undefined
let c = 1
undefined
(a + b + c) * 3
27
let a = 400
undefined
let b = 380
undefined
let c = 350
undefined
(c * 10) + (a * 6) + (c * 4)
7300
let notFull = true
undefined
let doesNotConflict = true
undefined
notFull && doesNotConflict
true
let buysTwoOrMore = true
undefined
let hasNotExpired = true
undefined
let premiumMember = true
undefined
(buysTwoOrMore && hasNotExpired) || premiumMember
true