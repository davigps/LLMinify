var n=parseInt(readline(),10);for(;n--;){var t=parseInt(readline(),10),r=readline(),o={A:0,B:0,C:0,D:0};for(var i=0;i<r.length;i++)o[r[i]]=Math.min(++o[r[i]],t);print(o.A+o.B+o.C+o.D)}
