  // INPUT
  const tests = parseInt(readline().trim());

  const solve = () => {
    const n = parseInt(readline().trim());
    const a = readline()
      .split(" ")
      .map((u) => parseInt(u));

    // console.log(n);
    // console.log(a);

    const count = new Array(102).fill(0);
    for (var u of a) {
      count[u]++;
    }

    var im = 0;
    for (var i = 0; i <= 102; i++) {
      if (count[i] > count[im]) {
        im = i;
      }
    }
    print(n - count[im]);
  };

  for (var i = 0; i < tests; i++) {
    solve();
  }