var myTemplate = document.getElementById("myTemplate");
var shoesTemplate = Handlebars.compile(myTemplate.innerHTML);
var myShoes = document.getElementById('myShoes');
var renderSize =  document.querySelector(".selectSize");
var sizeTemp = document.getElementById('sizeTemplate');
var renderColTemplate = Handlebars.compile(sizeTemp.innerHTML);

var renderBrand =  document.querySelector(".selectBrand");
var brandTemp = document.getElementById('brandTemplate');
var renderBrandTemplate = Handlebars.compile(brandTemp.innerHTML);

var url = "http://localhost:8000/api/shoes"
$.get(url).then(function(data) {
  let allShoes = data.data

  myShoes.innerHTML = shoesTemplate({
    shoes: allShoes //JSON.stringify(data.data)
  })
  renderSize.innerHTML = renderColTemplate({
    sizes: uniqueSizes(allShoes)
  })
  renderBrand.innerHTML = renderBrandTemplate({
    brands: uniqueBrands(allShoes)
  })

  console.log(uniqueBrands(allShoes));
})
