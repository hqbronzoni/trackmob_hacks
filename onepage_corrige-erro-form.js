<script>
  $(document).ready(function(){
    $(".message-error").each(function() {
      
      var error = $(this).text();
      
      switch(error) {
        case 'não pode ser vazio':
          $(this).text('Preenchimento obrigatório.');
          break;
          
        case 'precisa ser marcado.':
          $(this).text('Preenchimento obrigatório.');
          break;
        
        case 'não possui sobrenome. Insira nome e sobrenome.':
          $(this).text('Preenchimento obrigatório do sobrenome.');
          break;
        
        case 'não é um formato válido':
          $(this).text('Não é um formato válido.');
          break;
        
        case 'precisa ser maior de idade.':
          $(this).text('Necessário ser maior de idade.');
          break;
          
        case 'validade expirada':
          $(this).text('Validade expirada.');
          break;
    }
  });
  
  $( "input" ).focusout(function() {
    $(".message-error").each(function() {
    
      var error = $(this).text();
      
      switch(error) {
        case 'não pode ser vazio':
          $(this).text('Preenchimento obrigatório.');
          break;
          
        case 'precisa ser marcado.':
          $(this).text('Preenchimento obrigatório.');
          break;
        
        case 'não possui sobrenome. Insira nome e sobrenome.':
          $(this).text('Preenchimento obrigatório do sobrenome.');
          break;
        
        case 'não é um formato válido':
          $(this).text('Não é um formato válido.');
          break;
          
        case 'precisa ser maior de idade.':
					$(this).text('Necessário ser maior de idade.');
					break;
          
        case 'validade expirada':
					$(this).text('Validade expirada.');
					break;
      }
    });
  }).blur(function() {
      $(".message-error").each(function() {
      
        var error = $(this).text();
        
        switch(error) {
          case 'não pode ser vazio':
            $(this).text('Preenchimento obrigatório.');
            break;
            
          case 'precisa ser marcado.':
            $(this).text('Preenchimento obrigatório.');
            break;
            
          case 'não possui sobrenome. Insira nome e sobrenome.':
            $(this).text('Preenchimento obrigatório do sobrenome.');
            break;
          
          case 'não é um formato válido':
            $(this).text('Não é um formato válido.');
            break;
          
          case 'precisa ser maior de idade.':
            $(this).text('Necessário ser maior de idade.');
            break;
          
          case 'validade expirada':
            $(this).text('Validade expirada.');
            break;
        }
      });
    });
  });
</script>
