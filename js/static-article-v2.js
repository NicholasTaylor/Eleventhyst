const fadeFrom = document.getElementsByClassName('bg-fade-from');

const changeAnimEl = (el,val) => {
	el.style.animationName = val;
}

const changeLoop = (coll,val) => {
	for (let i = 0; i < coll.length; i++){
		changeAnimEl(coll[i],val);
	}
}

const initFadeIn = () => {
	changeLoop(fadeFrom,'fadeOutAndInactive');
}

window.addEventListener('load',()=>{initFadeIn();});
