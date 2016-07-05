function displayLondonTime(){
	var lontime = new Date();
	//take easter time and add 5 hours to set it to london time 
	lontime.setHours(lontime.getHours()+5);
	//set time to the text box
	document.Lclock.Ltime.value= lontime.toLocaleString();
	
}
