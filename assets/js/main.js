$(document).ready(function(){
    'use strict'

    //trabajando con el formulario (NO VALIDAR FORMULARIO)
    function focus(val1, val2) {
        val1.focus(function(){
            val2.addClass('active');
        });
        val1.focusout(function(){
            if (val1.val()!= '') {
                val2.addClass('active');
            } else {
                val2.removeClass('active');
            }
        });
    };

    focus($('#dni'),$('label[for="dni"]'));
    focus($('#procedure'),$('label[for="procedure"]'));

    //Mostrar y ocultar explicacion version DNI
    $('.card_info-title').click(function(){
        $('.card_info-content').slideToggle(300);
    });

    //Aceptar terminos y condiciones (e)
    var input_check = $('#confirmation');
    var terms = $('.input_terms');

    terms.click(function(){
        if (input_check.attr('checked') != 'checked' || input_check.attr('checked') == 'undefined'){
            input_check.attr('checked', true);
        } else {
            input_check.attr('checked', false);
        }
    });


    /* NOTA
    agregamos onsubmit="return false" en formulario, para realizar pruebas
    asi logramos de realizar en jquery
    $(fomr).submit(function(){
        {
            posibles validaciones
            return(true);
        }
        return(false);
    });
    */
   
});