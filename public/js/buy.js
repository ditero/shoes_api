function buythis(id) {
  $.ajax({
    url: "https://shoe-cart-api.herokuapp.com/api/shoes/sold/"+id, //"https://shoe-cart-api.herokuapp.com/api/shoes",
    type: "POST",
    data: id
  }).done(function(shoes) {
    renderAll(shoes.data);
  })

}
