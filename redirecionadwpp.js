function abrirWhatsapp() {
      var nome = document.getElementById("nome").value;
      var telefone = document.getElementById("telefone").value;
      var cidade = document.getElementById("cidade").value;
       var endereco = document.getElementById("endereco").value;
       var ref = document.getElementById("ref").value;
	 var mbs1 =   document.querySelector('input[name="planomb"]:checked').value //retorna valor selecionado no radio
   var url = "https://wa.me/5528999165455?text=" // Seu numero
        + "*Quero Solicitar Instalação*" + "%0a" // Mensagem personalizada
        + "%0a" // Quebra de linha
        + "*Nome*: " + nome + "%0a" // Dados do formulário
        + "*Telefone*: " + telefone + "%0a"
        + "*Cidade*: " + cidade + "%0a"
        + "*Endereço*: " + endereco + "%0a"
        + "*Ponto Referência*: " + ref + "%0a"
	    + "*plano*:"  + mbs1; //colocar variável pra retornar valor selecionado radio
        
      window.open(url, '_blank').focus();
    }