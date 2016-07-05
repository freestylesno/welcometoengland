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
		
			function check_visitor(){
				var visitorname = getCookie('name');
				if (visitorname != null){
					/*// uncomment to have prompt appear of cookie user
					alert("Welcome back to our website " + visitorname);
					*/
					//output message to document.
					var Welcome_message = ("<h3 style = 'text-align:center'> Welcome back to our website, " +visitorname +"</h3>");
					document.getElementById('welcome').innerHTML=Welcome_message;
				}
				else{
					visitorname = prompt("please enter your name");
					if(visitorname !=null && visitorname!=""){
						addCookie("name", visitorname);
					}
				}
			}
			