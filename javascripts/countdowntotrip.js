function countdownTrip(){
	//create date objs for today and day of trip
	var today = new Date();
	var trip = new Date("july 30, 2014");
	var diffmillisec = trip - today.getTime();
	var days = diffmillisec / (60*1000*60*24);
	//remove decimals
	days = Math.round(days);
		if (days > 0 )
		{
			document.write("There are " + days + " days untill your Trip!");
		}
		else
		{
			document.write("Today is the day of the trip!");
		}
}
