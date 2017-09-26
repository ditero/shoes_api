var myTemplate = document.getElementById("myTemplate");
var myTemplateInstance = Handlebars.compile(myTemplate.innerHTML);
var myShoes = document.getElementById('myShoes');

var url = "http://localhost:8000/api/shoes"
$.get(url).then(function(data) {
  let allShoes = data.data
  myShoes.innerHTML = myTemplateInstance({
    shoes: allShoes //JSON.stringify(data.data)
  })
  console.log("Available Brands in stock: "+allShoes.length);
})
