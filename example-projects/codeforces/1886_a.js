var i,t,n,x,y,z;
t=readline()
for(i =0;i< t; i++){
    n = readline()
    if(n<=3){
        print("NO")
    }else if(n % 2 === 0){
        n-=1
        z=1
            x=(n/2).toFixed()*1
            y=n-x
            do{
            if(y%3 ===0 || x%3 ===0){
                x+=1
                y-=1
            }  
        }while(y!=z && (y%3 ===0 && x%3 ===0))
    if(y == z || x==z){
        print("NO")
    }else{
            print("YES")
            print(x+" "+y+" 1")
    }
    }else{
        n-=2
        z=2
            x=(n/2).toFixed()*1
            y=n-x
            do{
            if(y%3 ===0 || x%3 ===0){
                x+=1
                y-=1
            }  
        }while(y!=z && (y%3 ===0 && x%3 ===0)) 
            if(y == z || x==z){
        print("NO")
    }else{
            print("YES")
            print(x+" "+y+" 2")
    }
    }
    

}