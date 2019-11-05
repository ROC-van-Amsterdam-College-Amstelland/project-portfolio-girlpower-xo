function verander1(plaatje) {

    if(plaatje == 1){
        document.getElementById("imgIris").style.display ="none";
        document.getElementById("imgIris2").style.display="block";
    }else{
        document.getElementById("imgIris").style.display ="block";
        document.getElementById("imgIris2").style.display="none";
    }
}

function verander2(plaatje) {

    if(plaatje == 1){
        document.getElementById("imgmondriaan").style.display ="none";
        document.getElementById("imgduitsland").style.display="block";

    }else if (plaatje==2){
        document.getElementById("imgnederland").style.display ="block";
        document.getElementById("imgduitsland").style.display="none";
    } else {
        document.getElementById("imgmondriaan").style.display ="block";
        document.getElementById("imgnederland").style.display="none";
        
    }

}