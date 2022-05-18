var cureventno = 1;


fetch("/json/main.json").then(response => response.json()).then(data => {jsonObj = data;
for(i=0;i<jsonObj["content"]["mainEvent"].length;i++){
    document.getElementById(`news${i+1}`).innerHTML = jsonObj["content"]["news"][i]["title"];
    document.getElementById(`news${i+1}img`).src = jsonObj["content"]["news"][i]["logoPath"];
}

document.getElementById("currEvent").innerHTML = jsonObj["content"]["mainEvent"][0]["name"] + " Event: " + jsonObj["content"]["mainEvent"][0]["start"] + " - " + jsonObj["content"]["mainEvent"][0]["end"];
document.getElementById("currEventImg").src = jsonObj["content"]["mainEvent"][0]["imagePath"];


document.getElementById("upevent").src = jsonObj["content"]["shortEvent"]["imagePath"];
document.getElementById("upcoming").innerHTML = "Upcoming: " + jsonObj["content"]["shortEvent"]["name"];




})

function changeEvent(number){
    fetch("/json/main.json").then(response=>response.json()).then(data => {jsonObj = data;            
    
    if(number != cureventno){
        if(jsonObj["content"]["mainEvent"][number-1]["status"] == "Running"){
        document.getElementById("currEvent").innerHTML = jsonObj["content"]["mainEvent"][number-1]["name"] + " Event: " + jsonObj["content"]["mainEvent"][number-1]["start"] + " - " + jsonObj["content"]["mainEvent"][number-1]["end"];
        document.getElementById("currEventImg").src = jsonObj["content"]["mainEvent"][number-1]["imagePath"];
        }
        else{                
            document.getElementById("currEvent").innerHTML = jsonObj["content"]["mainEvent"][number-1]["name"] + " Event: Ended"  
            document.getElementById("currEventImg").src = jsonObj["content"]["mainEvent"][number-1]["imagePath"];
        }

        for(i=0;i<document.getElementsByClassName("cureventno").length;i++){
            document.getElementsByClassName("cureventno")[i].classList.add("notcureventno");
            document.getElementsByClassName("cureventno")[i].classList.remove("cureventno");
        }

        if(document.getElementById(`event${number}`).classList.contains("notcureventno")){
            document.getElementById(`event${number}`).classList.remove("notcureventno");
            document.getElementById(`event${number}`).classList.add("cureventno");



        }
        else{
            document.getElementById(`event${number}`).classList.remove("cureventno");
            document.getElementById(`event${number}`).classList.add("notcureventno");
        }

        cureventno = number;
    }
    
    })


}

function redirect(contentType, contentNo){
    fetch("/json/main.json").then(response=>response.json()).then(data => {jsonObj = data;
        if(contentType=="event"){
            if(jsonObj["content"]["mainEvent"][contentNo-1]["article"] == "notWritten"){
                if(confirm("You are being redirected to news!")){
                    var url = jsonObj["content"]["mainEvent"][contentNo-1]["link"];
                    window.open(url);
                }
            }
        }
        else{
            if(jsonObj["content"]["news"][contentNo-1]["article"] == "notWritten"){
                if(confirm("You are being redirected to news!")){
                    var url = jsonObj["content"]["news"][contentNo-1]["link"];
                    window.open(url);
                }
            }
        }
    })

}

setTimeout(function() {
var loader = document.getElementsByClassName("loader-wrapper")[0];
loader.style.transition = '.5s';
loader.style.opacity = '0';
loader.style.visibility = 'hidden';
}, 1250);

