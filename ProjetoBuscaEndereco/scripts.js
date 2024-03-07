$(document).ready(function(){
    
    $('body').on('click','#consultar', function(){
        consultaCep();
    })
    function consultaCep(){
        const cep = $('#cep').val();
        if(cep.length !== 8){
              alert('Digite o CEP corretamente !')
              return false; 
        }
    }
})