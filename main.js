const {getURLsFromHTML} = require('./crawl.js')
const {htmlString} = require('./testHTML.js')

function run(){
	const result = getURLsFromHTML(htmlString, "https://blog.boot.dev")
	console.log(result)
}

run();
