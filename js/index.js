
function validateForm() {
	var name =	document.getElementById("name").value;
	var email =	document.getElementById("email").value;
	var phone =	document.getElementById("phone").value;
	var errorMessage = document.querySelector('#errorMessage');
	
	



	document.querySelector(".errorBtn").addEventListener("click",() => {
		errorMessage.style.display = "none";
	});
	

	if(name =="" && email =="" && phone=="" ) {
		
		document.getElementById("name").style.border = "1px solid red"
		document.getElementById("email").style.border = "1px solid red"
		document.getElementById("phone").style.border = "1px solid red"
		errorMessage.style.display = "block"
	}
	else{
		if(name != "") {
			document.getElementById("name").style.border = "1px solid #CCC";
				if(email != "") {
					document.getElementById("email").style.border = "1px solid #CCC";
					if(phone != "" && phone == NaN) {
						document.getElementById("phone").style.border = "1px solid red";
					}
				}
		}
			if(name !="" && email ==""&& phone =="") {
				document.getElementById("name").style.border = "1px solid #CCC"
				document.getElementById("email").style.border = "1px solid red"
				document.getElementById("phone").style.border = "1px solid red"
				errorMessage.style.display = "block"
			}
			if(name !="" && email !="" && phone =="") {
				document.getElementById("name").style.border = "1px solid #CCC"
				document.getElementById("email").style.border = "1px solid #CCC"
				document.getElementById("phone").style.border = "1px solid red"
				errorMessage.style.display = "block"
			}
			if(email !="" && name =="" && phone =="") {
				document.getElementById("email").style.border = "1px solid #CCC"
				document.getElementById("name").style.border = "1px solid red"
				document.getElementById("phone").style.border = "1px solid red"
				errorMessage.style.display = "block"
			}
			if(email !="" && name =="" && phone !="") {
				document.getElementById("email").style.border = "1px solid #CCC"
				document.getElementById("name").style.border = "1px solid red"
				document.getElementById("phone").style.border = "1px solid #CCC"
				errorMessage.style.display = "block"
			}
			if(phone !="" && email =="" && name =="") {
				document.getElementById("email").style.border = "1px solid red"
				document.getElementById("name").style.border = "1px solid red"
				errorMessage.style.display = "block"
				if(phone == NaN) {
						document.getElementById("phone").style.border = "1px solid red"
				}
			 }
			if(phone !="" && email =="" && name =="") {
				document.getElementById("phone").style.border = "1px solid #CCC"
				document.getElementById("email").style.border = "1px solid red"
				document.getElementById("name").style.border = "1px solid red"
				errorMessage.style.display = "block"
			}
			if(phone !="" && email =="" && name !="") {
				document.getElementById("phone").style.border = "1px solid #CCC"
				document.getElementById("email").style.border = "1px solid red"
				document.getElementById("name").style.border = "1px solid #CCC"
				errorMessage.style.display = "block"
			}
			

			if(name !="" && email !="" && phone!="" ) {
				errorMessage.style.display = "none";
				
					$("form").trigger("reset");
				}	
	}
	
}



// obsersation intersection

var imgs = document.querySelectorAll("img");
observerFunc = entries => {
	entries.forEach(entry => {
		if(!entry.isIntersecting) {
			return;
		}
		console.log(entry.target)
	})
}
 


const nav = document.querySelector("nav");

const faders = document.querySelectorAll(".fade-in");

const sliders = document.querySelectorAll(".slide-in")

const mt = document.querySelector(".mt");
mtOptions = { 
	rootMargin:"-600px 0px 0px 0px"
};
const mtObserver = new IntersectionObserver(function(entries, mtObserver) {
	entries.forEach(entry => {
		if(!entry.isIntersecting) {
			nav.classList.add("scrolled")
		}
		else if (entry.isIntersecting) {
			nav.classList.remove("scrolled")
		}
	})
},mtOptions)
mtObserver.observe(mt)

const appearOptions = { 
	threshold:0.5,
	rootMargin: "0px 0px -100px 0px"
}

const appearOnScroll = new IntersectionObserver(function(entries,appearOnScroll) {
	entries.forEach(entry => {
		if(!entry.isIntersecting) {
			return;
		}else{
			entry.target.classList.add("appear");
			appearOnScroll.unobserve(entry.target)
		}
	})
},appearOptions)
sliders.forEach(slider => {
	appearOnScroll.observe(slider)
})
faders.forEach(fader => {
	appearOnScroll.observe(fader)
})

