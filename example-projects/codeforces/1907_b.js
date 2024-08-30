const t = +(readline());
for(var i =0;i<t;i++){
    var str = readline().split("");
    var lowercaseArr =[];
    var uppercaseArr = [];
    for(var j = 0 ; j<str.length;j++){
        if(str[j] === "B"){
            str[j]="";
            if(uppercaseArr.length >0){
                str[uppercaseArr.pop()] =""
            }
        }
        else if(str[j] === "b"){
            str[j]="";
            if(lowercaseArr.length >0){
                str[lowercaseArr.pop()] =""
            }
        }else{
            if(str[j] === str[j].toLowerCase()) lowercaseArr.push(j)
            else uppercaseArr.push(j)
        }
    }
    print(str.join(""))
}