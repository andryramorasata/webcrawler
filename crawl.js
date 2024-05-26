const { JSDOM } = require('jsdom');

async function crawlPage(
  currentURL,
  baseURL,
  pages = {}
) {
  const current = new URL(currentURL);
  const base = new URL(baseURL);
  if (current.hostname !== base.hostname) {
    return pages;
  }
  const normalizedURL = normalizeURL(currentURL);
  if (pages[normalizedURL]) {
    pages[normalizedURL] += 1;
    return pages;
  } else {
    pages[normalizedURL] = 1;
  }
  try {
    const htmlBody = await getHTML(currentURL);
    const links = getURLsFromHTML(htmlBody, baseURL);
    for (const link of links) {
      pages = await crawlPage(link, baseURL, pages);
    }
  } catch (err) {
    console.log(`error thrown: ${err} for ${currentURL}`)
  } finally {
    return pages;
  }
}

function normalizeURL(url) {
  const urlObj = new URL(url);
  const splitPath = urlObj.pathname.split('/');
  const normalizedPath = splitPath
    .slice(1, splitPath.length)
    .filter((item) => item != '')
    .join('/');
  return urlObj.hostname + '/' + normalizedPath;
}

async function getHTML(url) {
  const webpageRequest = new Request(url);
  const myInit = {
    method: 'GET',
    mode: 'cors',
    headers: {
      Accept: 'text/html',
    },
  };
  try {
    const response = await fetch(webpageRequest, myInit);
    const results = await response.text();
    console.log(`${url} returns ${response.status}`)
    return results;
  } catch (err) {
    console.log(`an error was thrown: ${err} for ${url}`);
    return results;
  }
}

function getURLsFromHTML(htmlBody, baseURL) {
  const dom = new JSDOM(htmlBody);
  const listOfURLs = dom.window.document.querySelectorAll('a');
  let results = [];
  for (let i = 0; i < listOfURLs.length; i++) {
    try {
      const convertURL = new URL(listOfURLs[i].href);
      results.push(convertURL.href);
    } catch (error) {
      //only looking for relative URLs
      const isAlphaNumeric = /[A-Za-z0-9]/;
      const splitString = listOfURLs[i].href.split('/')[1];
      if (isAlphaNumeric.test(splitString)) {
        results.push(baseURL + listOfURLs[i].href);
      }
    }
  }
  return results;
}

module.exports = {
  normalizeURL,
  getURLsFromHTML,
  crawlPage,
  getHTML,
};
