
				var slidePics = new Array(
					"slideshow/ben.jpg",
					"slideshow/city.jpg",
					"slideshow/beatle.jpg",
					"slideshow/eye.jpg",
					"slideshow/bridge.jpg",
					"slideshow/hpstudio.jpg",
					"slideshow/guard.jpg",
					"slideshow/holmes.jpg",
					"slideshow/phone.jpg",
					"slideshow/view.jpg"
					);
				var i = 0;
			

				function movePrevious(){
					if(document.slideshow && i > 0){
						i--;
						document.display.src = slidePics[i];
					}
					else{
							last();
					}

				}
				function moveNext() {
					if(document.slideshow && i < slidePics.length-1){
						i++;
						document.display.src = slidePics[i];
					}
					else{
							first();
					}
			

				}
				function last () {
					i = slidePics.length-1;
					document.display.src = slidePics[i];
				}
				function first(){
					//reset counter to 0 & set image
					i = 0;
					document.display.src = slidePics[i];
				}
