function main() {
    var testCases = parseInt(readline(), 10);

    for (var t = 0; t < testCases; t++) {
        var inputs = readline().split(" ").map(function(num) {
            return parseInt(num, 10);
        });
        var n = inputs[0];
        var m = inputs[1];

        if (n > m) {
            print(n + "\n");
        } else {
            print(m + "\n");
        }
    }
}

main();
