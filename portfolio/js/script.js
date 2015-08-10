$('.box-wrapper').each(function(index, element) {
    
    setTimeout(function(){
        element.classList.remove('loading');
    }, index * 500);

});