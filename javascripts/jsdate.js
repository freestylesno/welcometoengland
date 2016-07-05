function displayDate(){
				var today = new Date();

				var weekday = today.getDay();

		//	get day of week string with switch statement

				switch(weekday) {

				case 0:

					weekday = "Sunday";

					break;

				case 1:

					weekday = "Monday";

					break;

				case 2:

					weekday = "Tuesday";

					break;

				case 3:

					weekday = "Wednesday";

					break;

				case 4:

					weekday = "Thursday";

					break;

				case 5:

					weekday = "Friday";

					break;

				case 6:

					weekday = "Saturday";

					break;

			}

			

			// assign  the numericc value of the month to month var

			var month = today.getMonth();

			//accout for index of 0 so incement by one?  rather then assume 0 = january

			month++;

			//get the day of month

			var date = today.getDate();

			//get the year

			var year =  today.getFullYear();

			
			//document.write(today);  this prints entire date obj in dayof week month date year time daylight saving time?
			document.write("<h2 style = 'text-align: center'>Today is " + weekday + ", " + month + "/" + date + "/" + year + "</h2>");

			} 

			
