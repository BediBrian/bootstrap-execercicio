$(document).ready(function(){
    $('#mycarousel').carousel({interval: 2000});

    $('#carouselButton').click(function() {
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if ($('#carouselButton').children('span').hasClass('fa-play')){
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause')
        }
    });

    //Eu que fiz *--*

    $('.abrirModal').click(function(e){
        e.preventDefault(); //cancela o comportamento padrão do link
        let ide = $(this).attr('href'); //armazena o atributo href do link (id)
        $(ide).modal('show');
    });
    $('.fecharModal').click(function(e){
        e.preventDefault(); //cancela o comportamento padrão do link
        let ide = $(this).attr('href'); //armazena o atributo href do link (id)
        $(ide).modal('hide');
    });
});
