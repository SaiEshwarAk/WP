var counter = 0;
function change(){
    // if(counter%2==0){
    //     document.getElementById("welcome-text").innerHTML = "Welcome to Demacia";
    //     document.getElementById("theme-img").src = "/images/s25.png";
    //     document.getElementsByClassName("navdiv")[0].style.backgroundColor = "white";
    //     document.getElementsByClassName("inner-nav")[0].style.color = "black";
    //     var explore = document.getElementsByClassName("btb")[1]
    //     explore.style.backgroundColor = "#DFCEA2";
    //     explore.style.color = "black";
    //     loaded();


    //     counter += 1;
    // }
    // else{
    //     document.getElementById("welcome-text").innerHTML = "Welcome to Freljord";
    //     document.getElementById("theme-img").src = "/images/s24.png"
    //     document.getElementsByClassName("navdiv")[0].style.backgroundColor = "black";
    //     document.getElementsByClassName("inner-nav")[0].style.color = "white";
    //     var explore = document.getElementsByClassName("btb")[1]
    //     explore.style.backgroundColor = "#204DEC";
    //     loaded();


    //     counter -= 1;
    // }

    

    
}

function social(network){
    if(confirm("You are being redirected to"+` ${network}`)){
        window.open(`https://${network}.com/`)
    }
}


function loaded(){
    let text = document.getElementById("welcome-text");
    text.innerHTML = text.innerText.split("").map(function(char){
        if(char == " "){
            char = "&nbsp;"
        }
        return "<span>"+char+"</span>";
    }).join("");

    anime.timeline({loop: true})
        .add({
            targets: '#welcome-text span',
            rotateY: [-90, 0],
            duration: 1300,
            delay: (el, i) => 45 * i
        }).add({
            targets: '#welcome-text',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });


}

setTimeout(function() {
var loader = document.getElementsByClassName("loader-wrapper")[0];
loader.style.transition = '.5s';
loader.style.opacity = '0';
loader.style.visibility = 'hidden';
}, 1250);