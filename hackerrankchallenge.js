'use strict';

const fs = require('fs');
//
process.stdin.resume();
process.stdin.setEncoding('utf-8');
//
let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    console.log(inputString)
    inputString = inputString.split('\n');
    inputString.pop()
    console.log(inputString)

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function getMaxStreaks(toss) {
    // Return an array of two integers containing the maximum streak of heads and tails respectively
    let streaks = {}

    for (let i=0; i<toss.length;i++){
      let m=i
      streaks[`${toss[m]} ${m}`]=1
      while (toss[i]==toss[i+1]){
        streaks[`${toss[m]} ${m}`]++
        i++
      }
    }
    heads = Object.keys(streaks).filter(key=>{
      return key.slice(0,5)=="Heads"
    }).map(head=>streaks[head])
    headMax=Math.max(...heads)

    tails = Object.keys(streaks).filter(key=>{
      return key.slice(0,5)=="Heads"
    })
    tails = tails.map(tail=>streaks[tail])
    tailMax=Math.max(...tails)

    return [headMax,tailMax]
}

function main() {
    const ws = fs.createWriteStream('output.txt');

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
