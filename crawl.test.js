const {test, expect} = require('@jest/globals')
const { normalizeURL } = require('./crawl.js')

test('https://blog.boot.dev/clean-code/give-up-sooner/ to equal https://blog.boot.dev/clean-code/give-up-sooner', () => {
	expect(normalizeURL('https://blog.boot.dev/clean-code/give-up-sooner/') == normalizeURL('https://blog.boot.dev/clean-code/give-up-sooner')).toBe(true);});

test('https://blog.boot.dev/clean-code/give-up-sooner// to equal https://blog.boot.dev/clean-code/give-up-sooner', () => {
	expect(normalizeURL('https://blog.boot.dev/clean-code/give-up-sooner//') == normalizeURL('https://blog.boot.dev/clean-code/give-up-sooner')).toBe(true);});

test('http://blog.boot.dev/clean-code/give-up-sooner to equal https://blog.boot.dev/clean-code/give-up-sooner', () => {
	expect(normalizeURL('http://blog.boot.dev/clean-code/give-up-sooner') == normalizeURL('https://blog.boot.dev/clean-code/give-up-sooner')).toBe(true);});

test('https://blog.boot.dev/computer-science/ai-taking-programming-jobs/ to not equal https://blog.boot.dev/clean-code/give-up-sooner/', () => {
	expect(normalizeURL('https://blog.boot.dev/computer-science/ai-taking-programming-jobs/') == normalizeURL('https://blog.boot.dev/clean-code/give-up-sooner/')).toBe(false);});

