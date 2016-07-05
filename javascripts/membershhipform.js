function valivateForm(){
	//regular expression for DOB
	var re = /^\d{2}-\d{2}-\d{4}$/;
	//check fname
	if(document.Mform.Fname.value == ''){
		alert("You must enter your first name");
		//focus on fname
		document.Mform.Fname.focus();
		return false;
	}
	else if(document.Mform.Lname.value == ''){
		alert("You must enter your last name");
		//focus on fname
		document.Mform.Lname.focus();
		return false;
	}
	else if (document.Mform.Email.value == ""){
		alert("You must enter an email Address");
		document.Mform.Email.focus();
		return false;
	}
	else if (document.Mform.bday.value == ""|| !document.Mform.bday.value.match(re)){
		alert("Please enter your birthday in format mm-dd-yyy")
		document.Mform.bday.focus();
		return false;
	}
	else if((document.Mform.age[0].checked == false) &&
			(document.Mform.age[1].checked == false) &&
			(document.Mform.age[2].checked == false) &&
			(document.Mform.age[3].checked == false) &&
			(document.Mform.age[4].checked == false) &&
			(document.Mform.age[5].checked == false) &&
			(document.Mform.age[6].checked == false) ){
		alert("You must select an age range");
		document.Mform.age.value = "";
		return false;
	}
	else if((document.Mform.England.checked == false) &&
			(document.Mform.Ireland.checked == false) &&
			(document.Mform.Scotland.checked == false) &&
			(document.Mform.Norway.checked == false) &&
			(document.Mform.Sweden.checked == false) &&
			(document.Mform.Finland.checked == false) &&
			(document.Mform.Germany.checked == false) &&
			(document.Mform.Netherlands.checked == false) &&
			(document.Mform.Belgium.checked == false) &&
			(document.Mform.Spain.checked == false) &&
			(document.Mform.Switzerland.checked == false) &&
			(document.Mform.Itayl.checked == false) &&
			(document.Mform.Austria.checked == false)){
		alert("You must select at lease one country");
		return false;
	}
	else{
		return true;
	}

}
