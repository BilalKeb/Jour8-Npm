function multiply (number)

var args = process.argv.slice(2)

function multiply(num) {
    num = args[0]
    for (var i = 0; i <= 10; i++) {
        var results = num + i
        console.log(`${num} + ${i} = ${results}`)
    }
    console.log("\n")
}
console.log(multiply())

module.export = multiplyelse 
    console.log("error")
