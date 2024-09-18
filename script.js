$(document).ready(function() {
    
    $("#adicionarTarefa").click(function() {
        $("#formTarefa").slideDown()
    })

    $("#cancelarTarefa").click(function() {
        $("#formTarefa").slideUp()
    })

    $("form").on("submit", function(e) {
        e.preventDefault()

        const nomeTarefa = $("#nomeTarefa").val()
        const novaTarefa = $("<li></li>") 
        
        if (nomeTarefa != "") {
            $(`<li>- ${nomeTarefa}</li>`).appendTo(novaTarefa)
            $(novaTarefa).appendTo("ul") 
        }

        $("#nomeTarefa").val("")
    })

    $("ul").on("click", "li", function() {
        $(this).toggleClass("tarefaCompletada")
    })

    $("ul").on("dblclick", "li", function() {
        $(this).remove()
    })
    
 })




    
      
      /*$("button").click("submit", function(e) {
          e.preventDefault()
  
          const nomeTarefa = $("#nomeTarefa").val()
          const novaTarefa = $("<li></li>")
  
          $(`<li>${nomeTarefa}</li>`).appendTo(novaTarefa)
  
          
          
          
          
          $(novaTarefa).appendTo("ul")  $("ul").click(function() {
              $("li").css("text-decoration", "line-through")
          })
          
  
  
          $("ul").click(function() {
              $("li").css("text-decoration", "line-through")
          })
  
  
  
  
      })*/
  
