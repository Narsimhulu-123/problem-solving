num = prompt("enter a number:");
for (i = -1; !(i == -11); i--)
    console.log(i)

console.log("print the sum of even number")

num = prompt("enter a number:")
sum = 0;
for (i of num)
    if (i % 2 == 0)
        sum = sum + Number(i)
console.log(sum)
console.log("print the sum of digits")


num = prompt("enter a number:")
i = 0
sum = 0
while (i < num.length) {
    sum = sum + Number(num[i]);
    i++;
}
console.log(sum)