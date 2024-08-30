function main() {
    var testCases = parseInt(readline(), 10);

    for (var t = 0; t < testCases; t++) {
        var input = readline().split(" ").map(function(num) {
            return parseInt(num, 10);
        });
        var x = input[0];
        var y = input[1];
        var k = input[2];
        var result = x;

        if (x < y) {
            var d = y - x;
            if (d > k) {
                result = x + k + 2 * (d - k);
            } else {
                result = y;
            }
        }

        print(result + "\n");
    }
}

main();
