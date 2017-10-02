// Search the given size using AJAX Call
function searchSize(myshoes, size, shoesTemplate){
  $.ajax({
    url: "http://localhost:8000/api/shoes/size/"+size,
    type: "GET"
  }).done(function(shoesData){
    myShoes.innerHTML = shoesTemplate({
      shoes: shoesData.data
    })
  })
}

var thisSize
//Selection event of dropdown options
$(".selectSize").on('change', function(e){
 thisSize = this.children.size.value

//Conditional statement to check which drop option has been selected
if (thisSize  && thisBrand === undefined) {
    searchSize(myShoes, thisSize, shoesTemplate)
  }else if (thisBrand !== undefined && thisSize !== undefined) {
    searchBrandAndSize(myShoes, thisBrand, thisSize, shoesTemplate)

  }
})
