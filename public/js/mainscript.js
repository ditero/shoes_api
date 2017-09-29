var myTemplate = document.getElementById("myTemplate");
var myTemplateInstance = Handlebars.compile(myTemplate.innerHTML);
var myShoes = document.getElementById('myShoes');
var renderSize =  document.querySelector(".selectSize");
var colorTemp = document.getElementById('colorTemplate');
var renderColTemplate = Handlebars.compile(colorTemp.innerHTML);

var renderBrand =  document.querySelector(".selectBrand");
var brandTemp = document.getElementById('brandTemplate');
var renderBrandTemplate = Handlebars.compile(brandTemp.innerHTML);

var url = "http://localhost:8000/api/shoes"
$.get(url).then(function(data) {
  let allShoes = data.data

  myShoes.innerHTML = myTemplateInstance({
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
