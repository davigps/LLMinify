// credit to smilegupta
r = readline;
for (x = +r(); x; x--) {
    s = r().split("")
    t = r().split("")

    idx = 0
    for(idy = 0; idy < s.length; idy++) {
        if(s[idy] === "?" && t[idx]) { //if s is "?" and t exists
            s[idy] = t[idx] // throw the t in
        }
        if(s[idy] === t[idx] && idx < t.length) { //if s matches t and there's still room
            idx++ //move to the next t
        }
        if(s[idy] === "?") { //if it's just a question mark
        s[idy] = "a" //throw in an a
        }
    }
    
    if(idx === t.length) print("YES\n",s.join("")) // only if all letters were used, YES
    else print("NO") // otherwise NO
    
}