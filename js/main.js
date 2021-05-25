$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.nav-links');

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('nav-links');
    })
    
    
    // owl-carousel for blog
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:5000,

    });

});


<script>
        var navLinks=document.getElementById("navLinks");
        function showMenu(){
            navLinks.style.right="0";
        }
        function hideMenu(){
            navLinks.style.right="-200px";  
        }

    </script>