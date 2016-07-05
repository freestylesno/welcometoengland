//check for valid data
			function valivateForm(){
				//check fname
				if(document.Cform.Fname.value == ''){
					alert("You must enter your first name");
					//focus on fname
					document.Cform.Fname.focus();
					return false;
				}
				else if(document.Cform.Lname.value == ''){
					alert("You must enter your last name");
					//focus on fname
					document.Cform.Lname.focus();
					return false;
				}
				else if (document.Cform.Email.value == ""){
					alert("you must enter an email Address");
					document.Cform.Email.focus();
					return false;
				}
				else if (document.Cform.Qbox.value == ""){
					alert("you must enter a question or comment")
					document.Cform.Qbox.focus();
					return false;
				}
				else{
					return true;
				}
			
			}