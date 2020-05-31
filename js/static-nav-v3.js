const navDiv = document.getElementById('nav-top');
const navDeactivate = document.getElementById('div-nav-deactivate');
const navBtn = document.getElementById('img-btn-nav');

const navToggle = () => {
	if (navDiv.style.animationName === 'navSlideOut' || !(navDiv.style.animationName)) {
		navDiv.style.animationName = 'navSlideIn';
	} else if (navDiv.style.animationName === 'navSlideIn')
	{
		navDiv.style.animationName = 'navSlideOut';
	}
}

const navToggleSpecial = () => {
	if (window.innerWidth >= 768 && window.innerHeight >= 421) {
		navDiv.style.animationName = 'navSlideOut';
	}
}

/*
const navBgToggle = () => {
	if (window.scrollY > (window.innerHeight / 4) && (navDiv.style.animationName === 'navOff' || !(navDiv.style.animationName))){
		navDiv.style.animationName = 'navOn';
	} else if (window.scrollY <= (window.innerHeight / 4) && navDiv.style.animationName === 'navOn') {
		navDiv.style.animationName = 'navOff';
	}
}
*/

window.addEventListener('scroll',()=>{navBgToggle();});
/*window.addEventListener('load',()=>{navBgToggle();});*/
window.addEventListener('resize',()=>{navBgToggle();});
navBtn.addEventListener('click',()=>{navToggle();});
navDeactivate.addEventListener('click',()=>{navToggle();});
window.addEventListener('resize',()=>{navToggleSpecial();});
