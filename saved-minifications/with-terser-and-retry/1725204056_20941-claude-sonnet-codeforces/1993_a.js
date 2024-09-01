var n=parseInt(readline(),10);for(;n--;){var s=readline(),o={A:0,B:0,C:0,D:0},l=parseInt(readline(),10);for(var i=0;i<s.length;i++)o[s[i]]=Math.min(++o[s[i]],l);print(o.A+o.B+o.C+o.D)}
