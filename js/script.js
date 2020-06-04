const modalLeft = document.querySelector('.modal-left');
		const modalRight = document.querySelector('.modal-right');
		const power = document.querySelector('.power');
		const powerHidd = document.querySelector('.power-hidd');
		const modal = document.querySelector('.modal');

	document.addEventListener('DOMContentLoaded', function() {
    power.addEventListener('click', addClasse);
    powerHidd.addEventListener('click', removeClasse);
  });

function addClasse(){
	if(modalLeft.classList == 'modal-left animation-right'){
		modalLeft.classList.remove("animation-right");
		modalRight.classList.remove("animation-right");
	}
		

		modalLeft.classList.toggle("animation-left");
		modalRight.classList.toggle("animation-left");
	
		
	if(power.classList == 'power power-green') {

		power.classList.remove("power-green");
		
		setTimeout("powerHidd.classList.toggle('power-red')", 1000);
		
		setTimeout("modal.style.visibility = 'hidden'", 1000);
		
	}
		
}

function removeClasse(){
		modal.style.visibility = 'visible';


		if(modalLeft.classList == 'modal-left animation-left'){
		modalLeft.classList.remove("animation-left");
			modalLeft.classList.toggle("animation-right");
	}
	if(modalRight.classList == 'modal-right animation-left'){
			modalRight.classList.toggle("animation-right");
		modalRight.classList.remove("animation-left");
	}
			
	
	if(powerHidd.classList == 'power-hidd power-red') {	
		
		powerHidd.classList.remove("power-red");
		setTimeout("power.classList.toggle('power-green')", 1000);
		
		
	}

}