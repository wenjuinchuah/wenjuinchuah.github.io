var picshow = [
    "src/slide1.jpeg", "src/slide2.png", "src/slide3.jpeg", "src/slide4.jpeg"];

var index = 0;

function next(){
    let a = document.getElementById("image");

    if(index == picshow.length-1){
        index=0;
    }else{
        index++;
    }

    a.src = picshow[index];
}

function prev(){
    let a = document.getElementById("image");

    if(index == 0){
        index = picshow.length-1;
    }else{
        index--;
    }

    a.src = picshow[index];
}

function show(){
	
	let a = document.getElementById("showmore");
	let b = document.getElementById("button");
	let c = document.getElementsByClassName("Achievement");
	
	b.style.display = "none";
	a.style.display = "block";
    a.style.animation = "opachange 1s ease-in 0s 1 normal";
	c[0].style.height = "1500px";
}

function hide(){
	
	let a = document.getElementById("showmore");
	let b = document.getElementById("button");
	let c = document.getElementsByClassName("Achievement");

	
	b.style.display = "block";
	a.style.display = "none";
	c[0].style.height = "700px";
}
