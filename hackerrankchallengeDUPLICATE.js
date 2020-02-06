'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'getMaxStreaks' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY toss as parameter.
 */

function getMaxStreaks(toss) {
    // Return an array of two integers containing the maximum streak of heads and tails respectively

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const tossCount = parseInt(readLine().trim(), 10);

    let toss = [];

    for (let i = 0; i < tossCount; i++) {
        const tossItem = readLine();
        toss.push(tossItem);
    }

    const ans = getMaxStreaks(toss);

    ws.write(ans.join(' ') + '\n');

    ws.end();
}
