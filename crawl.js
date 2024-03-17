function normalizeURL(url){
	const urlObj = new URL(url)
	const splitPath = urlObj.pathname.split('/')
	const normalizedPath = splitPath.slice(1, splitPath.length).filter((item) => item != '').join('/')
	return urlObj.hostname + normalizedPath
}


module.exports = {
	normalizeURL
}

