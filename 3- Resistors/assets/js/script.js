R1 = prompt("Please Enter the first individual resistance R1");
R2 = prompt("Please Enter the first individual resistance R2");


Req_series = (R1*1)+(R2*1);
Req_parallel = 1/((1/R1) + (1/R2));
console.log(`Req in series: ${Req_series}`);
console.log(`Req in parallel: ${Req_parallel}`);