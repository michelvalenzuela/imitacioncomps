$(function(){
    console.log("accordion file")
    $('.collection-acordion-btn').click(function(){
        var div_id = $(this).data('target');
        var div_acordion = $('#'+div_id);

        if (div_acordion.is(":visible")){
            div_acordion.hide("slow");
        }else{
            $('.div-accordion').hide('slow');
            div_acordion.show("slow");
        }
    })
})