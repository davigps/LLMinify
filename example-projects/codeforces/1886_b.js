var t = readline();
function max(a,b)
{
    if(a <= b) return b;
    else return a;
}
function min(a,b)
{
    if(a <= b) return a;
    else return b;
}
while(t--)
{
    var p = readline().split(" ");
    var a = readline().split(" ");
    var b = readline().split(" ");
    p[0] = Number(p[0]);
    p[1] = Number(p[1]);
    a[0] = Number(a[0]);
    a[1] = Number(a[1]);
    b[1] = Number(b[1]);
    b[0] = Number(b[0]);
    ap = Math. sqrt(Math.pow(a[0]-p[0],2)+Math.pow(a[1]-p[1],2));
    bp = Math. sqrt(Math.pow(b[0]-p[0],2)+Math.pow(b[1]-p[1],2));
    ab = Math. sqrt(Math.pow(a[0]-b[0],2)+Math.pow(a[1]-b[1],2));
    aa = Math. sqrt(Math.pow(a[0],2)+Math.pow(a[1],2));
    bb = Math. sqrt(Math.pow(b[0],2)+Math.pow(b[1],2));
    ac = max(aa,ap);
    bc = max(bb,bp);
    ab /= 2;
    cc = min(aa,bb);
    cp = min(ap,bp);
    c = max(cc,cp);
    c = max(c,ab);
    c1 = min(ac,bc);
    c = min(c,c1);
    print(c);
}
