var messageText = "Welcome to England!! ...Become a member Today!! --";
			var messageLength = messageText.length-1;
			function scrollMessage(){
				tempMessage = messageText.substring(1,messageLength)+ messageText.substring(0,1);
				document.messageForm.myMessage.value = messageText;
				messageText = tempMessage;
				
				setTimeout("scrollMessage()",250);
			}