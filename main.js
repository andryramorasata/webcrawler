const { getURLsFromHTML, crawlPage } = require('./crawl.js');
const { argv, exit, execArgv } = require('node:process');
const { printReport } = require('./report.js');

async function main() {
  if (argv.length != 3) {
    console.log('Only 1 argument of BASE_URL is allowed');
    exit(1);
  }
  const baseURL = argv[2];
  console.log(`starting crawler at ${argv[2]}...`);
  const report = await crawlPage(argv[2], baseURL);
  printReport(report); 
}

main();
