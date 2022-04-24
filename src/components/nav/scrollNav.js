import $ from "jquery"

const navScroll= () =>{
    $(window).scroll(function(){
        var windowHeight = $(window).scrollTop();
        var contenido2 = $(".container1").offset();
        contenido2 = contenido2.top;
        if(windowHeight >= (contenido2 /1.5)  ){
            $(".logoOculto").show(10);
            $(".logoOculto").css("opacity", "1");
        }else{
            $(".logoOculto").hide(0)
            $(".logoOculto").css("opacity", "0");
        }
});

}

export default navScroll

