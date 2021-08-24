// searchButton
const checkBox = document.querySelector('input[name=checkbox]');
checkBox.addEventListener('change' , function(){
    if (this.checked) {
       let checkedSearch = document.getElementById('search-box').style.display = 'block' ;
       
        
    }else{
        document.getElementById('search-box').style.display = 'none' ;
    }
});

//portfolio gallery

$('.gallery').isotope({
    // options
    itemSelector: '.g-item',
    layoutMode: 'fitRows'
    });

    $('.g-menu ul li').click(function(){
        $('.g-menu ul li').removeClass('active');
        $(this).addClass('active');

        let selector = $(this).attr('data-filter');

        $('.gallery').isotope({
            filter:selector
        });
        return false;

    });