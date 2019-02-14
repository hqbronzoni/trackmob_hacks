<script>
  $(document).ready(function(){
  
    document.getElementsByClassName("text-info")[0].innerHTML = "&#10003; - Estou de acordo com a <a class=\"modal_button\" data-keyboard=\"true\" data-toggle=\"modal\" data-target=\"#modal-service-term\" href=\"#\">Política de Doação</a> e a <a class=\"modal_button\" data-keyboard=\"true\" data-toggle=\"modal\" data-target=\"#modal-privacy-policy\" href=\"#\">Politica de Privacidade</a>.";
    
    document.getElementsByClassName("texto")[0].innerHTML = " - Aceito receber mais informações por e-mail.";
    
    document.getElementsByClassName("modal-container")[1].tabIndex = "-1";
    
    $('#modal-service-term').modal({
      keyboard: false
    })
    
    $('#modal-privacy-policy').modal({
      keyboard: false
    })

  })
</script>
