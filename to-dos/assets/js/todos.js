$("ul").on("click", "li", function(event){
  $(this).toggleClass("completed");
});

// click on X to delete todos
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

// add new todos
$("input[type='text']").keypress(function(event){
  if (event.which === 13) {
    var todoTxt = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoTxt + "</li>");
  }
});

$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle();
});
