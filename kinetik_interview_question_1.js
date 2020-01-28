//return patient with the highest average trip cost

let input = [
  ["John", 80],["Mark", 60],["John", 50], ["Brian", 90]
]

function namesWithAverages(input){
  let summary = {}

  for (i=0;i<input.length;i++){
    let name = input[i][0]
    let cost = input[i][1]
    if (summary[name]){
      summary[name].push(cost)
    } else {
      summary[name] = [cost]
    }
  } //O(n)

  Object.keys(summary).forEach(key=>{
    averageOfArray = summary[key].reduce((a,b) => a + b, 0) / summary[key].length
    summary[key]= averageOfArray
  }) //O(n)

  let maxNumber = 0
  let maxName = null

  Object.keys(summary).map(function ( key ) {
    currentAverage = summary[key]
    if (currentAverage>maxNumber){
      maxNumber = currentAverage
      maxName = key
    }
  }) //O(n)

  return maxName
}

let summary = namesWithAverages(input)
console.log(summary)
