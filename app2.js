let num = prompt("Vergul ile ayıraraq 3 ede 2 reqemli eded yaz").split(",")
let num1 = num[0];
let num2 = num[1];
let num3 = num[2];

if (num1.length!=2||num2.length!=2||num3.length!=2||num.length!=3) {
    console.log("Duzgun reqemler qyed edilmeyib");
} else {
    console.log("Qebul eledi");
}