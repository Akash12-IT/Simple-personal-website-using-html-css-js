$(document).ready(function() {
    //add smoothscrolling to all links
    $(*.smooth).on(click,function(event){
            //make sure this.hash has a value before overriding default behavior
            if(this.hash !==""){
                //present default anchor click behavior
                Event,preventDefault();

                //store hash
                var hash = this.hash;

                //using jQuery's animate() method to add smooth page scroll
                //the optional number(800) specifies the number of milliseconds it takes to scrool to the specific area
                $('html,body').animate({
                    scrollTop: $(hash).offset().top
                },800,function(){

                        //add hash (#) to URL when done scrolling (default click behavior)
                        window.location.hash = hash;
                });
                
            } //End if
    });
});