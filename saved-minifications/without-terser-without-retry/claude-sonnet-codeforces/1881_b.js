x=+readline();while(x--){const a=r=>r.every(v=>v===r[0]);t=readline().split(" ").map(Number);for(i=0;i<3&&!a(t);i++){t.sort((a,b)=>a-b);m=t[0];p=t.pop()-m;t.push(m,p)}print(a(t)?"YES":"NO")}
