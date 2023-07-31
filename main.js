const { crawlPage } = require('./crawl.js')
// console.log('hello World')


async function main() {
    if (process.argv.length < 3) {
        console.log("no websites provided")
        process.exit(1)
    }
    if (process.argv.length < 3) {
        console.log("too many command")
        process.exit(1)
    }
    // for(const arg of process.argv){
    //     console.log(arg)
    // }
    const baseURL = process.argv[2]

    console.log(`starting crawl of ${baseURL}`)
    const pages= await crawlPage(baseURL, baseURL, {})

    for (const page of Object.entries(pages)){
        console.log(page)
    }
}

main()