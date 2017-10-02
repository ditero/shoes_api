// Search the given size and brand using AJAX Call
function searchBrandAndSize(myshoes, brand, size, shoesTemplate){
  $.ajax({
    url: "http://localhost:8000/api/shoes/brand/"+brand+"/size/"+size,
    type: "GET"
  }).done(function(shoesData){
    myShoes.innerHTML = shoesTemplate({
      shoes: shoesData.data
    })
  })
}
