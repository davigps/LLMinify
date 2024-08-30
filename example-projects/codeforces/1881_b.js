x=+readline();
while(x--) {
    const allEqual = arr => arr.every(val => val === arr[0]);
    threadlets = readline().split(" ").map(Number);
    for(i=0;i<3;i++) {
        check = allEqual(threadlets);
        if (check ===true) {
            break;
        }
        threadlets = threadlets.sort(function (a,b) {return a - b});
        min = threadlets[0];
        //print(min)
        temp = threadlets.pop();
        //print(temp)
        temp = temp - min;
        threadlets.push(min);
        threadlets.push(temp);
        //print(temp)
    }
    check = allEqual(threadlets);
    if (check === true) {
        print("YES");
    }else {
        print("NO");
    }
}