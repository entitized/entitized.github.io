function switchLightdark() {
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		document.body.style.backgroundColor = "#000";
	
	}else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
		document.body.style.backgroundColor = "#FFF";
	}
}



if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
	// dark mode
}