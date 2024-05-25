
function printReport(pages){
  const sorted = sortReport(pages);
  for (let page in sorted){
    if (page){
    console.log(`Found ${page} internal links to ${sorted[page]}`)
    }
  }
}

function sortReport(pages){
  let arrOfPages = [];
  for (let link in pages){
    arrOfPages.push([link, pages[link]]);
  }
  arrOfPages.sort((a,b) => {
    return a[1]- b[1]});
  
  return Object.fromEntries(arrOfPages)
}

module.exports = {
  sortReport, 
  printReport,
};

