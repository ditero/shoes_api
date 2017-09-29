//Create unique brands list dropdown values.
function uniqueBrands(shoeList){
  var shoeBrands = [];
  var mapBrands = {};
  for (var y = 0; y < shoeList.length; y++) {
    var brandData = shoeList[y];
    if (mapBrands[brandData.brand]  === undefined) {
      mapBrands[brandData.brand] = brandData.brand;
      shoeBrands.push(brandData.brand);
    }
  }
  return shoeBrands;
};
