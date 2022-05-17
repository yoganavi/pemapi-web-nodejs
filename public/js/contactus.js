let secA = document.querySelector('.seca'),
navbrand=document.querySelector('.navBrand'),
navbar=document.querySelector('.navbar'),
navimg=document.querySelector('.navImg');

navbar.classList.add('contactus');

ScrollOut({
	threshold : .3,
	onShown: function(el) {
		let aa=el.classList[0];

		// remove the class
		el.classList.remove('animate__'+aa , 'animate__animated');

		// force reflow
		void el.offsetWidth;

		// re-add the animated cl
		el.classList.add('animate__'+aa , 'animate__animated');
	},	
});

secA.classList.add('mTop');
navbrand.innerHTML='pemapi';
navimg.classList.add('show');
window.addEventListener('scroll',()=>{
	if(window.scrollY > 50){
		document.querySelector('.navbar').classList.add('scroll');
		secA.classList.remove('mTop');
		navbrand.classList.add('scroll');
		navimg.classList.add('scroll3');
	}else{
		document.querySelector('.navbar').classList.remove('scroll');
		secA.classList.remove('mTop');
		secA.classList.add('mTop');
		navbrand.classList.remove('scroll');
		navimg.classList.remove('scroll3');
	};
});
