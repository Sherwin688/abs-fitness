let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function setCarousel(){
	{
		const COMPONENT_SELECTOR = '.carousel__wrapper';
		const CONTROLS_SELECTOR = '.carousel__controls';
	  const CONTENT_SELECTOR = '.carousel__content';
	
		const components = document.querySelectorAll( COMPONENT_SELECTOR );
	
		for ( let i = 0; i < components.length; i++ ) {
			const component = components[ i ];
			const content = component.querySelector( CONTENT_SELECTOR );
			let x = 0;
			let mx = 0;
			const maxScrollWidth = content.scrollWidth - content.clientWidth / 2 - content.clientWidth / 2;
			const nextButton = component.querySelector( '.arrow-next' );
			const prevButton = component.querySelector( '.arrow-prev' );
	
			if ( maxScrollWidth !== 0 ) {
				component.classList.add( 'has-arrows' );
			}
	
			if ( nextButton ) {
				nextButton.addEventListener( 'click', function ( event ) {
					event.preventDefault();
					x = content.clientWidth / 2 + content.scrollLeft + 0;
					content.scroll( {
						left: x,
						behavior: 'smooth',
					} );
				} );
			}
	
			if ( prevButton ) {
				prevButton.addEventListener( 'click', function ( event ) {
					event.preventDefault();
					x = content.clientWidth / 2 - content.scrollLeft + 0;
					content.scroll( {
						left: -x,
						behavior: 'smooth',
					} );
				} );
			}
	
			/**
			 * Mouse move handler.
			 *
			 * @param {object} e event object.
			 */
			const mousemoveHandler = ( e ) => {
				const mx2 = e.pageX - content.offsetLeft;
				if ( mx ) {
					content.scrollLeft = content.sx + mx - mx2;
				}
			};
	
			/**
			 * Mouse down handler.
			 *
			 * @param {object} e event object.
			 */
			const mousedownHandler = ( e ) => {
				content.sx = content.scrollLeft;
				mx = e.pageX - content.offsetLeft;
				content.classList.add( 'dragging' );
			};
	
			/**
			 * Scroll handler.
			 */
			const scrollHandler = () => {
				toggleArrows();
			};
	
			/**
			 * Toggle arrow handler.
			 */
			const toggleArrows = () => {
				if ( content.scrollLeft > maxScrollWidth - 10 ) {
					nextButton.classList.add( 'disabled' );
				} else if ( content.scrollLeft < 10 ) {
					prevButton.classList.add( 'disabled' );
				} else {
					nextButton.classList.remove( 'disabled' );
					prevButton.classList.remove( 'disabled' );
				}
			};
	
			/**
			 * Mouse up handler.
			 */
			const mouseupHandler = () => {
				mx = 0;
				content.classList.remove( 'dragging' );
			};
	
			content.addEventListener( 'mousemove', mousemoveHandler );
			content.addEventListener( 'mousedown', mousedownHandler );
			if ( component.querySelector( CONTROLS_SELECTOR ) !== undefined ) {
				content.addEventListener( 'scroll', scrollHandler );
			}
			content.addEventListener( 'mouseup', mouseupHandler );
			content.addEventListener( 'mouseleave', mouseupHandler );
		}
	}
}
window.addEventListener("resize", function(){
	setCarousel();
  });

window.addEventListener( 'load', () => setCarousel() );

function highlightToday() {
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const today = new Date().getDay();
	const todayCell = document.getElementById(days[today].toLowerCase());
	todayCell.classList.add('today');
	const cell1 = document.querySelector('.today:first-child')
	const cell2 = cell1.nextElementSibling;
	cell2.classList.add('today');

}

highlightToday();

var instaHandle = document.getElementById("insta-handle");
var facebookHandle = document.getElementById("facebook-handle");
var facebookOpen = document.getElementById("facebook-open");
var instaOpen = document.getElementById("insta-open");
function handleInsta(){

	facebookOpen.style.display="none";
	instaOpen.style.display="flex";
	
	facebookHandle.classList.remove("active-social");

	 instaHandle.classList.add("active-social-i");
	 console.log("insta");
console.log(facebookOpen);
console.log(instaOpen);


}

function handleFacebook(){

	instaOpen.style.display="none";
	facebookOpen.style.display="flex";
	instaHandle.classList.remove("active-social-i");
	facebookHandle.classList.add("active-social");
	console.log(facebookOpen);
	console.log(instaOpen);

}

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

const yearDate = new Date();
const currentYear = yearDate.getFullYear();

document.getElementById("year").innerText = currentYear;






function myFunction(x) {
	var mobileNavs = document.getElementById("mobile-navs");
	x.classList.toggle("change");

	if(mobileNavs.style.display==="block"){
		mobileNavs.style.display="none"
	}
	else{
		mobileNavs.style.display="block"

	}
	
  }