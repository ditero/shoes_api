function addNewStock(shoes) {
  $.ajax({
    url: "/api/shoes", //"https://shoe-cart-api.herokuapp.com/api/shoes",
    type: "POST",
    data: shoes
  }).done(function(results) {
    $(".fMessage").on('change', function() {

      this.innerHTML = results.response;
    })
    console.log(results.response);
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
//  getAll()

  //renderAll(allShoes)
  // console.log(addNewStock(newShoes));
})
