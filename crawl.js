const { JSDOM } = require('jsdom')

function getURLsFromHTML(htmlBody, basURL){
    const urls = []
    const dom = new JSDOM(htmlBody)
    const linkElements = dom.window.document.querySelectorAll('a')
    for (const linkElement of linkElements){
        if (linkElement.href.slice(0, 1) === '/'){
            //relative
            try{
                const urlObj = new URL(`${basURL}${linkElement.href}`)
            urls.push(urlObj.href)
            } catch (err){
                console.log(`error ${err.message}`)
            }
            
        }else{
            //ab
            try{
                const urlObj = new URL(linkElement.href)
            urls.push(urlObj.href)
            } catch (err){
                console.log(`error abs ${err.message}`)
            }
            
        }
        
    }
    return urls
}


function normalizeURL(urlString){
    const urlObj = new URL(urlString)
    const hostPath = `${urlObj.hostname}${urlObj.pathname}`
    if (hostPath.length > 0 && hostPath.slice(-1) === '/'){
        return hostPath.slice(0, -1)
    }
    return hostPath
}

module.exports = {
    normalizeURL,
    getURLsFromHTML
}