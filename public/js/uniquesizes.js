//Create unique sizes list dropdown values.
function uniqueSizes(shoeList){
  var shoeSizes = [];
  var mapSizes = {};
  for (var y = 0; y < shoeList.length; y++) {
    var sizeData = shoeList[y];
    if (mapSizes[sizeData.size]  === undefined) {
      mapSizes[sizeData.size] = sizeData.size;
      shoeSizes.push(sizeData.size);
    }
  }
  return shoeSizes;
};
