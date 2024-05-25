
function printReport(pages){
  const sorted = sortReport(pages);
  for (let page of sorted){
    console.log(`Found ${page.count} internal links to ${url}`)
  }
}

function sortReport(pages){
  let arrOfPages = [];
  let result = {}; 
  let keys = Object.keys(pages);
  for (let link of keys){
    console.log(pages[link]);
    arrOfPages.push({[link]:pages[link]});
  }
  arrOfPages.sort((a,b) => { a - b });

  for (let page of arrOfPages){
   result[Object.keys(page)[0]] = Object.values(page)[0]
  }

  return result 
}

module.exports = {
  sortReport, 
  printReport,
};

