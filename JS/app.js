
let btnRight = document.querySelector (".btnRight");

let slides = document.getElementsByClassName ("img");

let i = 1;

btnRight.addEventListener ("click", function(){
	++i

	if (i >= slides.length) {
		slides[i-1].classList.remove("block");
		i = 0;
		slides[i].classList.add("block");
	}
	else {
		slides[i-1].classList.remove("block");
		slides[i].classList.add("block");
	}
})

