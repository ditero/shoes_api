// Search the given brand using AJAX Call
function searchBrand(myshoes, brand, shoesTemplate){
  $.ajax({
    url: "http://localhost:8000/api/shoes/brand/"+brand,
    type: "GET"
  }).done(function(shoesData){
    myShoes.innerHTML = shoesTemplate({
      shoes: shoesData.data
    })
  })
}

var thisBrand
//Selection event of dropdown options
$(".selectBrand").on('change', function(e){
thisBrand = this.children.brand.value

//Conditional statement to check which drop option has been selected
  if (thisBrand !== "Brands" && (thisSize === "Sizes" || thisSize === undefined)) {
    searchBrand(myShoes, thisBrand, shoesTemplate)
  }else if (thisBrand !== "Brands" && thisSize !== "Sizes") {
    searchBrandAndSize(myShoes, thisBrand, thisSize, shoesTemplate)
  }else{
    renderAll(allShoes)
  }

})
