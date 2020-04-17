function myfunciton(){
      

	var y=document.getElementById('year').value;
	var Y=Number.parseInt(y);
	var m=document.getElementById('month').value;
	var M=Number.parseInt(m);
	var d=document.getElementById('date').value;
	var D=Number.parseInt(d);



	if (Y <= 40 && Y >=99 ) {
		 var cen=0;
		 
	} else {
		var cen=6;
	}



	var ly=y/4;
	var Ly=ly.toLocaleString().split('.')[0]
	var Lyr=Number.parseInt(Ly,10);

	


	var total=Y+Lyr+M+D+cen;


		var day=total % 7;
	

	



if (day==0) {
	alert("Saturday(শনিবার)")
}
else if (day==1) {
	alert("Sunday(রবিবার)")
}
	 

else if (day==2) {
	alert("Monday(সোমবার)")

}
else if (day==3) {
	alert("Tuesday(মঙ্গলবার)")
	
}

else if (day==4) {
	alert("Wednesday(বুধবার)")
	
}


else if (day==5) {
	alert("Thursday(বৃহস্পতিবার)")
	
}

else if (day==6) {
	alert("Friday(শুক্রবার)")
	
}
}

