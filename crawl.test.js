const {test, expect} = require('@jest/globals')
const { normalizeURL, getURLsFromHTML } = require('./crawl.js')
const { htmlString } = require('./testHTML.js')

test('https://blog.boot.dev/clean-code/give-up-sooner/ to equal https://blog.boot.dev/clean-code/give-up-sooner', () => {
	expect(normalizeURL('https://blog.boot.dev/clean-code/give-up-sooner/') == normalizeURL('https://blog.boot.dev/clean-code/give-up-sooner')).toBe(true);});

test('https://blog.boot.dev/clean-code/give-up-sooner// to equal https://blog.boot.dev/clean-code/give-up-sooner', () => {
	expect(normalizeURL('https://blog.boot.dev/clean-code/give-up-sooner//') == normalizeURL('https://blog.boot.dev/clean-code/give-up-sooner')).toBe(true);});

test('http://blog.boot.dev/clean-code/give-up-sooner to equal https://blog.boot.dev/clean-code/give-up-sooner', () => {
	expect(normalizeURL('http://blog.boot.dev/clean-code/give-up-sooner') == normalizeURL('https://blog.boot.dev/clean-code/give-up-sooner')).toBe(true);});

test('https://blog.boot.dev/computer-science/ai-taking-programming-jobs/ to not equal https://blog.boot.dev/clean-code/give-up-sooner/', () => {
	expect(normalizeURL('https://blog.boot.dev/computer-science/ai-taking-programming-jobs/') == normalizeURL('https://blog.boot.dev/clean-code/give-up-sooner/')).toBe(false);});

test('it should return 3 <a> links', () => {
	expect(getURLsFromHTML(htmlString,'https://blog.boot.dev').length).toBe(3)})


const absoluteUrls = ["https://blog.boot.dev/", "https://blog.boot.dev/golang/format-on-save-vs-code-golang/",
"https://boot.dev/playground/go"]

test('relative URLs are converted to absolute URLs', () => {
	expect(getURLsFromHTML(htmlString, 'https://blog.boot.dev')).toEqual(absoluteUrls)})
