function main(){var t=parseInt(readline(),10);for(var i=0;i<t;i++){var[x,y,k]=readline().split(" ").map((n=>parseInt(n,10))),r=x;if(x<y){var d=y-x;r=d>k?x+k+2*(d-k):y}print(r+"\n")}}main();
