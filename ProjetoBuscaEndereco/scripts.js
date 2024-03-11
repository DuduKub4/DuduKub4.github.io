$(document).ready(function(){
    $('#cep').on('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    $('body').on('click','#consultar', function(){
        consultaCep();
    });

    function consultaCep(){
        const cep = $('#cep').val();
        if(cep.length !== 8){
            alert('Digite o CEP corretamente !');
            return false; 
        }
        loading();
        setTimeout(function(){


        
        $.ajax({
            url: 'https://viacep.com.br/ws/'+cep+'/json/',
            type: 'GET',
            dataType: 'json',
            success: function(data){
                $('body').find('#resultados').html('<h2>Resultado da consulta</h2>'
                                                    +'<p>CEP: '+data.cep+'</p>'
                                                    +'<p>Logradouro: '+data.logradouro+'</p>'
                                                    +'<p>Bairro: '+data.bairro+'</p>'
                                                    +'<p>Localidade: '+data.localidade+'</p>'
                                                    +'<p>Estado: '+data.uf+'</p>'
                                                    +'<p>IBGE: '+data.ibge+'</p>'
                                                    );
            }
        });
    }, 1000)
    }
    function loading(){
        $('#resultados').html('<img src="loading.gif"/>')
    }
    $('body').on('click','#modo-noturno', function(){
        alert(123);
        $('body').toggleClass('dark-mode')
    });
});

