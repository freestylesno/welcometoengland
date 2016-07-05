function displayForm(){
	var frm_element =  document.getElementById('Mform');
	var show_link_element = document.getElementById('show');
	var noshow_link_element = document.getElementById('noshow');
	var show = frm_element.style;
	//determin current state of form and act accordingly,\
	//show or hide
	if (show.display == '' || show.display == 'none'){
		show.display = 'block';
		show_link_element.style.display = 'none';
		noshow_link_element.style.display = '';

	}
	else{
		show.display = 'none';
		show_link_element.style.display = 'block';
		noshow_link_element.style.display = 'none';

	}
}