// profile menu toggle
    //User Profile Expanding
	let subMenu = document.getElementById("subMenu");
    
	function toggleMenu(){
		subMenu.classList.toggle("open-menu");
	}
   //User Update Button
	const updateButton = document.querySelector('#update-button');
  
	updateButton.addEventListener('click', () => {
	  alert('Successfully updated');
	});