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

function openNav() {
    document.getElementById("sidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
  }

  function test(){
	alert("testing");
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

function toggleOn1(){
    document.getElementById("arrow_1").style.display = "inline";
    document.getElementById("desc_1").style.display = "inline-block";
}

function toggleOff1(){
    document.getElementById("arrow_1").style.display = "none";
    document.getElementById("desc_1").style.display = "none";
}

function toggleOn2(){
    document.getElementById("arrow_2").style.display = "inline";
    document.getElementById("desc_2").style.display = "inline-block";
}

function toggleOff2(){
    document.getElementById("arrow_2").style.display = "none";
    document.getElementById("desc_2").style.display = "none";
}

function toggleOn3(){
    document.getElementById("arrow_3").style.display = "inline";
    document.getElementById("desc_3").style.display = "inline-block";
}

function toggleOff3(){
    document.getElementById("arrow_3").style.display = "none";
    document.getElementById("desc_3").style.display = "none";
}