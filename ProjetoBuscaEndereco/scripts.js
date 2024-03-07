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


        $.ajax({
            url: 'https://viacep.com.br/ws/'+cep+'/json/',
            type: 'GET',
            dataType: 'json',
            success: function(data){
                console.log(data);
            }
        })


    }
})