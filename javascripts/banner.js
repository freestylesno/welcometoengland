var englandBanner =  new Array(
	"images/view_from_stpauls.png",
	"images/london_banner_1.png",
	"images/london_night.png");
var i = 0;
//cycle though banner one image at a time repeatidly. with 3 second wait.
function changePictures(){
	if (i == englandBanner.length){
		i = 0
	}

	document.Banner.src =  englandBanner[i];
	i++;
	//set time out befor rerunning to 3 seconds... not really sure 100% what this is doing :/
	setTimeout("changePictures()",3000);
	}