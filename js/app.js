/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

// adding Functions that are going to be used in the website using addEventListener
document.addEventListener('DOMContentLoaded',NavigationBar , false);
document.addEventListener('DOMContentLoaded', ActiveS , false);
document.addEventListener('DOMContentLoaded',ActiveBar , false);
document.addEventListener('DOMContentLoaded',SMenu , false);



// Function of the Navigation Bar at the top of the website
function NavigationBar (){
	const section = document.querySelectorAll('section');
	for (let i = 0; i < section.length; i++) {	
		const li = document.createElement('li');
		const tag = document.createElement('a');	
		const sectionName = section[i].getAttribute('data-nav');
		const sectionNamePart = sectionName.replace(/\s/g, '').toLowerCase();
		tag.setAttribute('href',"#"+sectionNamePart);
		tag.setAttribute('id',"linkNumber" +[i+1]);
		tag.innerText=sectionName;
		li.appendChild(tag);
        document.getElementById("navbar__list").appendChild(li);
		document.getElementById("linkNumber" +[i+1]).addEventListener("click", function(){
			Scrolling(i+1)
		});
	};
	
}

// // Function of the active section in the website
function ActiveS (){
    window.addEventListener('scroll', function() {
		const element = document.getElementsByClassName('landing__container');		
		for (let i = 0; i < element.length; i++) {
			const position = element[i].getBoundingClientRect();
			const posit = position.top;
				if (posit <= window.innerHeight/2){
					const activeClass = document.getElementsByClassName("your-active-class");
					activeClass[0].className = activeClass[0].className.replace (" your-active-class", "");
					element[i].className += " your-active-class";
			
					const current = document.getElementsByClassName("active");  
						if (current.length > 0) {
							current[0].className = current[0].className.replace(" active", "");
						}
			
					const links = document.getElementById("navbar__list").querySelectorAll('li');
					links[i].className += " active";
				};
		};
	}); 
}

// Function of the active bar being selected from the Navigation Bar in the website
function ActiveBar (){
	const linksContainer = document.getElementById("navbar__list");
	const links = linksContainer.querySelectorAll('li');
	for (let i = 0; i < links.length; i++) {
  		links[i].addEventListener("click", function() {
			const current = document.getElementsByClassName("active");  
    		if (current.length > 0) {
      			current[0].className = current[0].className.replace(" active", "");
    		}
    	this.className += " active";
 		});
	};
}

// Function that help to scroll to the section selected and cakked in the NavigationBar() Function
function Scrolling (sectionI) {
	const section = document.getElementById('section'+sectionI);
	const pos = section.offsetTop;
	event.preventDefault();
	window.scrollTo({
		left: 0, 
		top: pos,
		behavior: 'smooth'
	});
	SMenu();
}

// Function that make navigation bar menu responsive
function SMenu() {
	const x = document.getElementById("navbar__list");
 	if (x.className === "navbar__menu") {
    	x.className += " responsive";
  	} else {
    	x.className = "navbar__menu";
  	}

	  
}

// Function of Scroll to top button to move to the top of the website's page
 function upp(){

const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click",function(){
	window.scrollTo({
         top :0 ,
         left : 0 ,
        behavior : "smooth"

	});
});
 }



