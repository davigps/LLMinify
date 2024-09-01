x=+readline();while(x--){const a=t=>t.every((v=>v===t[0]));r=readline().split(" ").map(Number);for(i=0;i<3&&!a(r);i++){r.sort(((a,b)=>a-b));m=r[0];t=r.pop()-m;r.push(m,t)}print(a(r)?"YES":"NO")}
