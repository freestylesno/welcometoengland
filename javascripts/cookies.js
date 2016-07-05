//add cookie
function addCookie(tag, value){
	var expireDate =  new Date();
	var expireString = "";
	expireDate.setTime(expireDate.getTime() + (1000*60*60*24*365));
	expireString = "expires=" +expireDate.toGMTString();
	document.cookie = tag + "=" + escape(value) + ";" + expireString + ";";
	}
//get cookie
function getCookie(tag){
	var value = null;
	var myCookie = document.cookie +";";
	var findTag = tag + "=";
	var endPos;

	if (myCookie.length > 0){
		var beginPos = myCookie.indexOf(findTag);
		if (beginPos != -1){
			beginPos += findTag.length;
			endPos = myCookie.indexOf(";",beginPos);
				if(endPos == -1)
				endPos = myCookie.length;
			value = unescape(myCookie.substring(beginPos,endPos));

			
		}
	}
return value;
}
			
function deleteCookie() {
	var time_in_past = 24*60*60*1000;
	var expireDate = new Date();
	expireDate.setTime(expireDate.getTime()-time_in_past);
	document.cookie = "travellerName = nothing; expires=" + expireDate.toGMTString();
	document.getElementById("TravellerrName").value = "";
	 var i;
	 for (i=1; i<=Attractions.length; i++){
	 	document.cookie = "Attraction" + i.toString() + "= nothing; expires=" + expireDate.toGMTString();
	 }
}