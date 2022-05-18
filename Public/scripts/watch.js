setTimeout(function() {
    var loader = document.getElementsByClassName("loader-wrapper")[0];
    loader.style.transition = '.5s';
    loader.style.opacity = '0';
    loader.style.visibility = 'hidden';
    }, 1250);

    for(i=0;i<document.getElementsByClassName("servimg").length;i++){
        video = document.getElementsByClassName("servimg")[i];
        video.addEventListener("pause",function(){
            video.load();
        });
    }

    function redirect(url){
        if(confirm("You are being redircted!")){
            window.open("https://"+url+".com");
        }
    }