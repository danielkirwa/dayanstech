
togglebuttonweb = document.querySelector('.control-web');
togglebuttonandroid = document.querySelector('.control-android');
webProduct = document.querySelector('.web-product-card');
androidProduct = document.querySelector('.android-product-card');

togglebuttonweb.addEventListener('click' , () =>{
	let webviewCode = localStorage.getItem('viewWebProducts');
	if (webviewCode == undefined) {
		webProduct.style.display = "none";
		localStorage.setItem('viewWebProducts', 0);
	}else if(webviewCode == 1){
		webProduct.style.display = "none";
		localStorage.setItem('viewWebProducts', 0);
	}else{
		webProduct.style.display = "block";
		localStorage.setItem('viewWebProducts', 1);
	}
	
})

togglebuttonandroid.addEventListener('click' , () =>{
	let androidviewCode = localStorage.getItem('viewAndroidProducts');
	if (androidviewCode == undefined) {
		androidProduct.style.display = "none";
		localStorage.setItem('viewAndroidProducts', 0);
	}else if(androidviewCode == 1){
		androidProduct.style.display = "none";
		localStorage.setItem('viewAndroidProducts', 0);
	}else{
		androidProduct.style.display = "block";
		localStorage.setItem('viewAndroidProducts', 1);
	}
	
})