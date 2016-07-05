function displayImages(){
				var images =  new Array(
					"slideshow/placeholder.jpg",
					"slideshow/londonZoobutterfly.jpg",
					"slideshow/stPaulsgarden.jpg",
					"slideshow/towerofLondongate.jpg",
					"slideshow/britishMuseumegypt.jpg",
					"slideshow/londonEyepod",
					"slideshow/londonAquariumfish.jpg",
					"slideshow/westminsterAbbey.jpg",
					"slideshow/themeCruseshakesphere.jpg",
					"slideshow/allHallowsroman.jpg"
					)
			
				var desc =  new Array(
					"When you make a selection from the list, a complete description and the price will display in this window.",
					"The London Zoo - Tube Station: Regent's Park; Price:£20-23.00; Open times: 10-17:30",
					"St. Paul's Cathedral - Tube Station: St. PaulsPrice:£15.00 Open times:8:30-16:00",
					"Tower of London - Tube Station: Price:£ Open times:",
					"British Museum - Tube Station: Price:£ Open times:",
					"London Eye - Tube Station: Price:£ Open times:",
					"London Aquarium - Tube Station: Price:£ Open times:",
					"Westminster Abbey - Tube Station: Price:£ Open times:",
					"Temes River Cruise - Tube Station: Price:£ Open times:",
					"All Hallows Church - Tube Station: Price:£ Open times:"
					);
				//get selected and assign to image and description 
				var selected = document.Attractions.attractionList.selectedIndex;
				document.Attractions.attractionPicture.src = images[selected];
				document.Attractions.attractionDescription.value = desc[selected];
			}