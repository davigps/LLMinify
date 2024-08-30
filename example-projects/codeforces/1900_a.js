var t = +readline("");
for (var j = 0; j < t; j++) {
    var n = +readline("");
    var s = readline("");
    if (s.includes("...")) {
        print(2);
    }
    else {
        print(s.replace(/#/g, "").length);
    }
}