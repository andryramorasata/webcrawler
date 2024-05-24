
function printReport(pages){
  const sorted = sortReport(pages);
  for (let page of sorted){
    console.log(`Found ${page.count} internal links to ${url}`)
  }
}

function sortReport(pages){
  //using a nested for loop since I never expect this to be used for a page with more than 10k pages
  let pageLinks = Object.keys(pages);
  let pageCountArr = Object.values(pages);
  for (let i = 0; i < pageCountArr.length; i++){
    for (let j = i + 1; j < pageCountArr.length; j++){
      if (pageCountArr[i] > pageCountArr[j]){
        let temp = pageCountArr[j];
        let tempLink = pageLinks[j];
        pageCountArr[j] = pageCountArr[i];
        pageLinks[j] = pageLinks[i];
        pageCountArr[i] = temp;
        pageLinks[i] = temp;
      }
    }
  }
  for (let link of pageLinks){
    console.log(link);
  }

  let results = {};

  for (let i = 0; pages.length; i++){
   results[pageLinks[i]] = pageCountArr[i]; 
  }
  return results 

}

module.exports = {
  sortReport, 
  printReport,
};

