$(document).ready(function(){
  $(function(){
    $("#createBurger").on("click",function(event){
      event.preventDefault();
      let burger=$("#burger").val().trim();
      if (burger.length > 0){
        let newBurger={
          burger:$("#burger").val().trim()
        };
        console.log(newBurger);
        $.ajax("/api/burgers",{
          type:"POST",
          data:newBurger
        }).then(function(){
          console.log("Burger Created.");
          location.reload();
        });
        $("#burger").val("");
      }
    });
    $(".devour").on("click",function(event){
      let audioElement=document.createElement("audio");
        audioElement.setAttribute("src","../audio/eat_short.mp3");
      
      let id = $(this).attr("id");
      $.ajax("/api/burgers/"+id,{
        type:"PUT",
      }).then(function(){
        console.log("Burger Devoured.");
        location.reload();
      });
      audioElement.play();
    });
    $(".makeAnother").on("click",function(event){
      let id=$(this).attr("id");
      $.ajax("/api/burgers/"+id,{
        type:"PUT",
      }).then(function(){
        console.log("Devoured.");
        location.reload();
      });
    });
    $(".delete").on("click",function(event){
      let id = $(this).attr("id");
      $.ajax("/api/burgers/"+id,{
        type:"DELETE",
      }).then(function(){
        console.log("Burger Deleted.");
        location.reload();
      }); 
    });
  });
});