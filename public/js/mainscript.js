var myTemplate = document.getElementById("myTemplate");
var shoesTemplate = Handlebars.compile(myTemplate.innerHTML);
var myShoes = document.getElementById('myShoes');
var renderSize =  document.querySelector(".selectSize");
var sizeTemp = document.getElementById('sizeTemplate');
var renderColTemplate = Handlebars.compile(sizeTemp.innerHTML);

var renderBrand =  document.querySelector(".selectBrand");
var brandTemp = document.getElementById('brandTemplate');
var renderBrandTemplate = Handlebars.compile(brandTemp.innerHTML);
// var allShoes
var url =  "http://localhost:8000/api/shoes" //"https://shoe-cart-api.herokuapp.com/api/shoes"
$.get(url).done(function(data) {
  var allShoes = data.data

  renderAll(allShoes)
  renderSize.innerHTML = renderColTemplate({
    sizes: uniqueSizes(allShoes)
  })
  renderBrand.innerHTML = renderBrandTemplate({
    brands: uniqueBrands(allShoes)
  })

  console.log(uniqueBrands(allShoes));
})
 function renderAll(shoes) {
   myShoes.innerHTML = shoesTemplate({
     shoes: shoes //JSON.stringify(data.data)
   })
 }
