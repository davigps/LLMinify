/* ----------------------------------------------- /
/  Template by Bharadwaj ( The Authentic JS CodeBuff )  /
/ ------------------------------------------------ /
/    Youtube: https://youtube.com/@code-with-Bharadwaj    /
/    Portfolio: https://manu-bharadwaj-portfolio.vercel.app/ /
/ ----------------------------------------------- */

var t = parseInt(readline());

while(t--){
var n = parseInt(readline());
var a = readline().split(" ").map(Number);

var sum = 0;
if(n%2 == 0){
for(var i = 0; i < n; i += 2){
var crr = a[i] - a[i+1];
sum += crr;
}
} else {
for(var i = 0; i < n-1; i += 2){
var crr = a[i] - a[i+1];
sum += crr;
}
sum += a[n-1];
}

print(sum);
}