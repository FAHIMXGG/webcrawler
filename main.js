// const { crawlPage } = require('./crawl.js')
// // console.log('hello World')


// async function main() {
//     if (process.argv.length < 3) {
//         console.log("no websites provided")
//         process.exit(1)
//     }
//     if (process.argv.length < 3) {
//         console.log("too many command")
//         process.exit(1)
//     }
//     // for(const arg of process.argv){
//     //     console.log(arg)
//     // }
//     const baseURL = process.argv[2]

//     console.log(`starting crawl of ${baseURL}`)
//     const pages= await crawlPage(baseURL, baseURL, {})

//     for (const page of Object.entries(pages)){
//         console.log(page)
//     }
// }

// main()

// main.js

const express = require('express');
const { crawlPage } = require('./crawl.js');

const app = express();
const port = 3000;

app.get('/*', async (req, res) => {
    const baseURL = req.params[0]; // Use [0] to capture the entire URL
  
    console.log(`starting crawl of ${baseURL}`);
    const pages = await crawlPage(baseURL, baseURL, {});
  
    // Convert pages object to an array of [url, count]
    const crawledData = Object.entries(pages);
  
    res.json({ baseURL, crawledData });
  });

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
