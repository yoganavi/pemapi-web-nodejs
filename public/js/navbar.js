let navLinks = document.querySelector('.navLinks'),
hambmenu = document.querySelector('.hambmenu');		

hambmenu.addEventListener('click',()=>{
	navLinks.classList.toggle('show');
});