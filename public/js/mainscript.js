var myTemplate = document.getElementById("myTemplate");
var shoesTemplate = Handlebars.compile(myTemplate.innerHTML);
var myShoes = document.getElementById('myShoes');
var renderSize =  document.querySelector(".selectSize");
var sizeTemp = document.getElementById('sizeTemplate');
var renderColTemplate = Handlebars.compile(sizeTemp.innerHTML);

var renderBrand =  document.querySelector(".selectBrand");
var brandTemp = document.getElementById('brandTemplate');
var renderBrandTemplate = Handlebars.compile(brandTemp.innerHTML);
var allShoes
var url =  "/api/shoes" //"https://shoe-cart-api.herokuapp.com/api/shoes"
function getAll(){  $.ajax({
    url: url,
    type: "GET"
  }).done(function(data) {
  allShoes = data.data

  renderAll(allShoes)
  renderSize.innerHTML = renderColTemplate({
    sizes: uniqueSizes(allShoes)
  })
  renderBrand.innerHTML = renderBrandTemplate({
    brands: uniqueBrands(allShoes)
  })
})}
getAll()

//Update display on page load, when filtering and also buying shoes
 function renderAll(shoes) {
   console.log(shoes);
   myShoes.innerHTML = shoesTemplate({
     shoes: shoes //JSON.stringify(data.data)
   })
 }
