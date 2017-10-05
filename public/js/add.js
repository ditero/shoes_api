function addNewStock(shoes) {
  $.ajax({
    url: "https://shoe-cart-api.herokuapp.com/api/shoes" //"http://localhost:8000/api/shoes"
    type: "POST",
    data: shoes
  }).done(function(results) {
    // console.log(results);
    renderAll(allShoes)
  })

}
var newShoes = {}
$(".newStock").on('change', function(t) {
  newShoes = {
    id: parseInt(document.getElementById('id').value),
    brand: document.getElementById('brand').value,
    size: parseInt(document.getElementById('size').value),
    color:document.getElementById('color').value,
    price: parseInt(document.getElementById('price').value),
    in_stock: parseInt(document.getElementById('qty').value),
    image: document.getElementById('image').value
  }
})

$("#submitStock").on('click', function(){
  addNewStock(newShoes)
  console.log(addNewStock(newShoes));
})
