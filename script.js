function runProgram(input) {
    input = input.trim().split("\n");
    let t = parseInt(input[0]); // number of test cases
    let line = 1;

    for (let i = 0; i < t; i++) {
        let str = input[line++].trim();  // comma separated string
        if (str.length === 0) {
            console.log([]); // agar empty string ho
            continue;
        }
        let arr = str.split(",").map(Number); // string → number array
        console.log(arr.join(" "));
    }
}

// Boilerplate code for online judge
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
