```javascript
function main(){var t=parseInt(readline(),10);for(var n=0;n<t;n++){var a=readline().split(" ").map(function(n){return parseInt(n,10)}),r=a[0],e=a[1],i=a[2],u=r;if(r<e){var f=e-r;u=f>i?r+i+2*(f-i):e}print(u+"\n")}}main();
```;
