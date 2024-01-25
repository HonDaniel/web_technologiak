
$(document).ready(function()
{
    $("table#table1 tr:even").css("background-color", "whitesmoke");
    $("table#table1 tr:odd").css("background-color", "red");
}
);

$(document).ready(function(){
    $("#gomb2").click(function(){
       $("#fly").animate({
           marginLeft: '1400px'
       }, "slow");
     });
     
   });

   $(document).ready(function(){
    $("#gomb").click(function(){
      $("#div1").fadeIn();
    });
  });

  
  let lista = ["London"];
  function listArray(){
      document.getElementById("listAdd").innerHTML = "";
      var text = document.getElementById("txtListAdd").value;
  
      var exists = false;
      for(i=0; i<lista.length; i++){
          if(text == lista[i]){
              alert("Az elem már létezik!");
              exists = true;
              break;
          }
      }
      if(!exists){
          lista.push(text);
      }
  
      for (i=0; i<lista.length; i++){
          var node = document.createElement("li");
          var textnode = document.createTextNode(lista[i]);
          node.appendChild(textnode);
          document.getElementById("listAdd").appendChild(node);
      }
  }
