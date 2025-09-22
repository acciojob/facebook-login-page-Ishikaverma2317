function runProgram(input) {
    input = input.trim().split("\n");
    let t = +input[0]; // number of test cases
    let line = 1;

    for (let i = 0; i < t; i++) {
        let str = input[line++].trim();

        // agar empty string di ho to empty print
        if (str === "") {
            console.log("");
            continue;
        }

        // split by comma and convert to integers
        let arr = str.split(",").map(Number);

        // output format: space separated
        console.log(arr.join(" "));
    }
}

// Boilerplate (for online judge)
if (process.env.USERNAME === "YOUR_NAME") {
    runProgram(`2
1,2,3,4,5
10,20,30`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        runProgram(read);
    });
    process.on("SIGINT", function () {
        runProgram(read);
        process.exit(0);
    });
}
