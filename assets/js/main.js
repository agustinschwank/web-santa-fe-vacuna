$(document).ready(function(){

    //trabajando con el formulario (NO VALIDAR FORMULARIO)
    var dni = $('#dni');
    var labeldni = $('label[for="dni"]');
    var procedure = $('#procedure');
    var labelprocedure = $('label[for="procedure"]');

    dni.focus(function(){
        labeldni.addClass('active');
    });
    dni.focusout(function(){
        if (dni.val()!= '') {
            labeldni.addClass('active');
        } else {
            labeldni.removeClass('active');
        }
        
    });
    procedure.focus(function(){
        labelprocedure.addClass('active');
    });
    procedure.focusout(function(){
        if(procedure.val() != ''){
            labelprocedure.addClass('active');
        } else {
            labelprocedure.removeClass('active');
        }
    });

    //Mostrar y ocultar explicacion version DNI
    var info_open = $('.card_info-title');
    var info_view = $('.card_info-content');

    info_open.click(function(){
        info_view.slideToggle(1000);
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
    })


});