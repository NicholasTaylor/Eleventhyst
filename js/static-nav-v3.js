const navDiv = document.getElementById('nav-top');
const navDeactivate = document.getElementById('div-nav-deactivate');
const navBtn = document.getElementById('img-btn-nav');
const logoDiv = document.getElementById('div-logo-bg');

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

const navBgToggle = () => {
	if (window.scrollY > (window.innerHeight / 4) && (logoDiv.style.animationName === 'navOff' || !(logoDiv.style.animationName))){
		console.log('Animation turning on.\nScrollY: ' +window.scrollY +'\nInner Height: ' +window.innerHeight +'\nAnimation Name: ' +logoDiv.style.animationName);
		logoDiv.style.animationName = 'navOn';
	} else if (window.scrollY <= (window.innerHeight / 4) && logoDiv.style.animationName === 'navOn') {
		console.log('Animation turning off.');
		logoDiv.style.animationName = 'navOff';
	}
}

window.addEventListener('scroll',()=>{navBgToggle();});
window.addEventListener('load',()=>{navBgToggle();});
window.addEventListener('resize',()=>{navBgToggle();});
navBtn.addEventListener('click',()=>{navToggle();});
navDeactivate.addEventListener('click',()=>{navToggle();});
window.addEventListener('resize',()=>{navToggleSpecial();});
