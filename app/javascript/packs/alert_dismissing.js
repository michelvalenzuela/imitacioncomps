$(function(){
    console.log("alert dimissing file")
    $('.alert-close').click(function(){
        $('.alert').fadeOut('slow', function(){
            $(this).remove();
        })
    })
})