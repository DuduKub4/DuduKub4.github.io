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
            url: 'viacep.com.br/ws/'+cep+'/json/',
            type: 'GET',
            dataJson: 'json',
            success: function(data){
                console.log(data);
            }
        })


    }
})