
document.querySelector('.main-service').addEventListener('mouseover',()=>{
	var x = window.matchMedia("(max-width: 991px)")
	var y = window.matchMedia("(max-width: 1076px)")
	
	 if (x.matches) {
		document.querySelector('#services-section').style.display='none'
		document.querySelector('.serviceD').style.display='none'
		document.querySelector('.serviceM').style.display='block'
	}
	else{
		document.querySelector('.serviceM').style.display='none'
		document.querySelector('#services-section').style.display='block'
		document.querySelector('#services-section').style.left='55%';
		document.querySelector('#services-section').style.transition='left 1s'
	}

	})
		document.querySelector('.main-service').addEventListener('mouseout',()=>{
		document.querySelector('#services-section').style.display='none'
	})

	document.querySelector('#services-section').addEventListener('mouseover',()=>{
	document.querySelector('#services-section').style.display='block'
	})
	document.querySelector('#services-section').addEventListener('mouseleave',()=>{
	document.querySelector('#services-section').style.display='none'
})




var count = 0; 
			function myFun() {
				if (count == 0) {
					
					var x = window.matchMedia("(max-width: 500px)")
					if (x.matches) {
						// document.querySelector('welcome-text span').style.marginTop = '50px'
						document.querySelector('.divToShow').classList.add('openDiv')
						document.querySelector('.divToShow').style.width = '250px'
						document.querySelector('.divToShow').style.animation = 'grow1 0.5s forwards'
						document.querySelector('.outer-show').style.left = '250px'
						document.querySelector('.outer-show').style.transition = 'left 1s'
						document.querySelector('.outer-show').style.zindex = 2;
						document.querySelector('.divToShow').style.display = 'block'
						setTimeout(() => {
							document.querySelector('.btn-3').style.display='block';						
							document.querySelector('.close-icon').style.display='block';
						}, 500);
						count = count + 1;
						
					} else {
						document.querySelector('.divToShow').classList.add('openDiv')
						document.querySelector('.divToShow').style.width = '400px';
						document.querySelector('.divToShow').style.animation = 'grow0 0.3s forwards'
						document.querySelector('.outer-show').style.left = '400px';
						document.querySelector('.outer-show').style.transition = 'left 1s';
						document.querySelector('.outer-show').style.zindex = 2;
						document.querySelector('.divToShow').style.display = 'block'
						setTimeout(() => {
							document.querySelector('.btn-3').style.display='block';
							document.querySelector('.msg-btn').style.display='block';
							document.querySelector('.close-icon').style.display='block';
						}, 500);
						count = count + 1;
						
					}
				}
				else{
					count=0
					document.querySelector('.divToShow').style.display = 'none'
					document.querySelector('.outer-show').style.left = '0px'
					document.querySelector('.outer-show').style.transition = 'left 1s'
					
					document.querySelector('.btn-3').style.display='none'
					document.querySelector('.close-icon').style.display='none';

				}
			}
			function closeForm() {
				if (count==1) {
					document.querySelector('.divToShow').style.display = 'none';
					document.querySelector('.outer-show').style.left = '0px'
					document.querySelector('.outer-show').style.transition = 'left 1s';
					document.querySelector('.close-icon').style.display='none';
					document.querySelector('.btn-3').style.display='none'
					count=0
			}

		}
	