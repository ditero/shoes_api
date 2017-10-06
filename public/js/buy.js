function buythis(id) {
  $.ajax({
    url: "http://localhost:8000/api/shoes/sold/"+id, //"https://shoe-cart-api.herokuapp.com/api/shoes",
    type: "POST",
    data: id
  }).done(function(shoes) {
    // console.log(shoes);
    // renderAll(shoes)
  })

}
