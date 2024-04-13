const { JSDOM } = require('jsdom')

function normalizeURL(url){
	const urlObj = new URL(url)
	const splitPath = urlObj.pathname.split('/')
	const normalizedPath = splitPath.slice(1, splitPath.length).filter((item) => item != '').join('/')
	return urlObj.hostname + normalizedPath
}

function getURLsFromHTML(htmlBody, baseURL){
	const dom = new JSDOM(htmlBody)
	const listOfURLs = dom.window.document.querySelectorAll("a")
	let results = []
	for (let i = 0; i < listOfURLs.length; i++){
		try {
			const convertURL = new URL(listOfURLs[i].href)
			results.push(convertURL.href)
		} catch (error) {
				//only looking for relative URLs
				const isAlphaNumeric =  /[A-Za-z0-9]/
				const splitString = listOfURLs[i].href.split('/')[1]
				if (isAlphaNumeric.test(splitString)){
					results.push(baseURL + listOfURLs[i].href)
				}
		}
	}
	return results
}


module.exports = {
	normalizeURL,
	getURLsFromHTML
}

