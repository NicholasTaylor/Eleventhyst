const navDiv = document.getElementById('nav-top');
const navSide = document.getElementById('container-div-nav-side');
const navInactive = document.getElementById('div-nav-inactive');
const navBtn = document.getElementById('img-btn-nav');

const navToggle = () => {
	if (navSide.style.animationName === 'navSlideOut' || !(navSide.style.animationName)) {
		navSide.style.animationName = 'navSlideIn';
	} else if (navSide.style.animationName === 'navSlideIn') 
	{
		navSide.style.animationName = 'navSlideOut';
	}
}

const navBgToggle = () => {
	if (window.scrollY > 0 && (navDiv.style.animationName === 'navOff' || !(navDiv.style.animationName))){
		navDiv.style.animationName = 'navOn';
	} else if (window.scrollY ==- 0 && navDiv.style.animationName === 'navOn') {
		navDiv.style.animationName = 'navOff';
	}
}

window.addEventListener('scroll',()=>{navBgToggle();});
window.addEventListener('load',()=>{navBgToggle();});
window.addEventListener('resize',()=>{navBgToggle();});
navBtn.addEventListener('click',()=>{navToggle();});
navInactive.addEventListener('click',()=>{navToggle();});