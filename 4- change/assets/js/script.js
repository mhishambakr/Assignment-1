quarters = prompt("Quarters: ");
dimes = prompt("Dimes: ");
nickels = prompt("Nickels: ");
cents = prompt("Cents: ");
cents = (cents*1) + (quarters*25) + (dimes*10) + (nickels*5);
dollars = cents/100
console.log(`Dollars = ${dollars}`);