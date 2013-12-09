 // JavaScript Document

		
function onLoad() {
	document.addEventListener("deviceready", onDeviceReady, false);
}
function onDeviceReady() {
// Register the event listener
	document.addEventListener("backbutton", onBackKeyDown, false);
}

// Handle the back button
//
function onBackKeyDown() {
	//alert("Back Pressed");
	go_back();
}

// process the confirmation dialog result
function onConfirm(buttonIndex) {
    //alert('You selected button ' + buttonIndex);
	if (buttonIndex == 2) {
		setTimeout( function() {navigator.app.exitApp();}, 100 );
	}
}

// Show a custom confirmation dialog
//
function showConfirm() {
    navigator.notification.confirm(
        'Do you realy want to close application?',  // message
        onConfirm,              // callback to invoke with index of button pressed
        'Archimedes Mobile',            // title
        'No,Yes'          // buttonLabels
    );
}


//
function resizeimage() {
	
	$("#tablemenu img").each(function () {
		/* Max width for the image */
		var maxWidth = scrsize.winW - 30;
		/* Max hieght for the image */
		var maxHeight = 60;
		/*Used for aspect ratio*/
		var ratio = 0;
		/*Current image width*/
		var width = $(this).width();
		/*Current image height */
		var height = $(this).height();
	
		/*Check if the current width is larger than the max*/
		if (width > maxWidth) {
			/*get ratio for scaling image*/
			ratio = (maxWidth / width);
			/* Set New hieght and width of Image*/
			$(this).attr({
					width : maxWidth,
					height : (height * ratio),
					alt : ""
				});
			/* Reset height to match scaled image */
			height = (height * ratio);
			/* Reset width to match scaled image */
			width = (width * ratio);
			/*Check if current height is larger than max*/
			if (height > maxHeight) {
				/*get ratio for scaling image*/
				ratio = (maxHeight / height);
				/*Set new height and width*/
				$(this).attr({
						height : maxHeight,
						width : (width * ratio),
						alt : ""
					});
	
			}
		}
	});
	
	}

function getscreensize() {
	
	var winW = 630, winH = 460;
	if (document.body && document.body.offsetWidth) {
	 winW = document.body.offsetWidth;
	 winH = document.body.offsetHeight;
	}
	if (document.compatMode=='CSS1Compat' &&
		document.documentElement &&
		document.documentElement.offsetWidth ) {
	 winW = document.documentElement.offsetWidth;
	 winH = document.documentElement.offsetHeight;
	}
	if (window.innerWidth && window.innerHeight) {
	 winW = window.innerWidth;
	 winH = window.innerHeight;
	}
	
	//alert('Window width = '+winW);
	//alert('Window height = '+winH);
	
	return{winW : winW, winH : winH};
	
	}
	


function setlogo(logo_id) {
	var logos = getlogolist();
	$("#headerimage").attr("height", logos.h[logo_id]);
	$("#headerimage").attr("width", logos.w[logo_id]);
	$("#headerimage").attr("src", logos.logo[logo_id]);
		
	}
function go_back() {
	if (sessionStorage.getItem("current_page") > 1) {
		var pages = getpagelist();		
		load_page(pages.parent[sessionStorage.getItem("current_page")]);
	} else {
		// Close application
		showConfirm();
	}
	
}
function load_toolbars(logo_id) {
	var logos = getlogolist();
	$.get("inc_header.html",function(data){
		data = data.replace('img/Logos/1.png', logos.logo[logo_id]);
		data = data.replace('300', logos.w[logo_id]);
		data = data.replace('60', logos.h[logo_id]);
	   $("[data-role=header]").html(data).trigger('create');
    },'html');

	$.get("inc_footer.html",function(data){
	    $("[data-role=footer]").html(data).trigger('create');
    },'html');
	
	
	
}
function load_page(page_id) {
	var pages = getpagelist();
		$.get(pages.inc[page_id],function(data){
    		if (pages.resize[page_id]==true) {
				var scrsize = getscreensize();
				data = data.replace('height="px"', 'height="'+(scrsize.winH-148)+'px"');
			} 
	    $("[data-role=content]").html(data).trigger('create');
    },'html');
	
	//setlogo(pages.logo[page_id]);
	sessionStorage.current_page=page_id;
	$("[data-role=header]").fixedtoolbar({ tapToggle: false });
	$("[data-role=header]").fixedtoolbar({ updatePagePadding: false });
	load_toolbars(pages.logo[page_id]);
	$( "[data-role=page]" ).page( "destroy" ).page();
	}
function show_menu() {
	document.getElementById('link_menu').style.visibility = "visible";
    document.getElementById('link_menu').style.display = "block";
	}
function hide_menu() {
    document.getElementById('link_menu').style.visibility = "hidden";
    document.getElementById('link_menu').style.display = "none";
	}
	
	
// Auth and Info
function TryAuth() {
	
	var userid;
	var password;

	userid = document.getElementById('userid').value;
	password = document.getElementById('password').value;
	
	alert(userid);
	$.ajax({
		type: "GET",
		url: "http://app.naskidashvili.com/ArchimedesService/serv.asmx/auth?user="+userid+"&pass="+password,
		dataType: "xml",
		success: parselogondata
		});

}
	
function parselogondata(xml) {
	// Add ages
	
	var resp = $(xml).find("int").text();
	alert(resp);
	if (resp==-1) {alert("Error occured")}
	if (resp==0) {alert("Wrong Password")}
	if (resp==2) {
		var userid;
		userid=document.getElementById('userid').value;
		load_page(22);
		if(sessionStorage == null) {alert("Storage not supported by the browser");}
		sessionStorage.policeid = userid;
	}
	if (resp==1) {
		alert("Authozed");
//		sessionStorage.authorized = 'true';
		GetPolicyInfo(document.getElementById('userid').value);	
	}
}
	
function CreateLogin() {
	var userid;
	var password;
	var repeatpassword;
	
	alert(sessionStorage.policeid);
	userid = document.getElementById('userid').value;
	password = document.getElementById('password').value;
	repeatpassword = document.getElementById('repeatpassword').value;
	if (password == repeatpassword) {
			alert("Fine");
		} else {
			alert("Check Passwords.");
			document.getElementById('password').value = '';
			document.getElementById('repeatpassword').value = '';
	}
}
function GetPolicyInfo(policyid) {
		alert(policyid);
		$.ajax({
		type: "GET",
		url: "http://app.naskidashvili.com/archimedesservice/serv.asmx/GetPolicyInfo?user="+policyid,
		dataType: "xml",
		success: parsepolicyinfodata
		});
	
		$.ajax({
		type: "GET",
		url: "http://app.naskidashvili.com/archimedesservice/serv.asmx/GetPolicyData?user="+policyid,
		dataType: "xml",
		success: parsepolicydetailsdata
		});
	
	}
function parsepolicyinfodata(xml) {

	$("#scountry", "#Search").empty();
	$(xml).find("DocumentElement").find("PolicyInfo").each(function() {
											
		$("#policyid").html($(this).find("policyp").text());
		$("#insurer").html($(this).find("insurer").text());
		$("#pack").html($(this).find("pack").text());
		$("#datetill").html($(this).find("date").text());
		$("#insured").html($(this).find("insured").text());
		
		   });

	
	}
	
	
function parsepolicydetailsdata(xml) {
	$("#detail_data").html('').trigger('create');
	
	var resultset = "";
	
	resultset = '<div data-role="collapsible-set">';
	
	$(xml).find("DocumentElement").find("PolicyData").each(function() {
		
		resultset = resultset + '<div data-role="collapsible"><h3>' + $(this).find("terms").text() + '</h3><table style="margin:5px;">';
		
		resultset = resultset + '<tr><td style="font-weight:bold;">Therms</td><td style="font-style:italic;padding-left:10px;" >' + $(this).find("terms").text() + '</td></tr>';
		resultset = resultset + '<tr><td style="font-weight:bold;">Limit GEL</td><td style="font-style:italic;padding-left:10px;" >' + $(this).find("limitgel").text() + '</td></tr>';
		resultset = resultset + '<tr><td style="font-weight:bold;">Limit</td><td style="font-style:italic;padding-left:10px;" >' + $(this).find("limit").text() + '</td></tr>';
		resultset = resultset + '<tr><td style="font-weight:bold;">Required</td><td style="font-style:italic;padding-left:10px;" >' + $(this).find("Required").text() + '</td></tr>';
		resultset = resultset + '<tr><td style="font-weight:bold;">Approved</td><td style="font-style:italic;padding-left:10px;" >' + $(this).find("approved").text() + '</td></tr>';
		resultset = resultset + '<tr><td style="font-weight:bold;">Claims</td><td style="font-style:italic;padding-left:10px;" >' + $(this).find("Claims").text() + '</td></tr>';
		resultset = resultset + '<tr><td style="font-weight:bold;">Remaining</td><td style="font-style:italic;padding-left:10px;" >' + $(this).find("Remaining").text() + '</td></tr>';
		   });
	
	
	resultset = resultset + '</table></div>'
	alert(resultset);
	$("#detail_data").html(resultset).trigger('create');
	
	
	}
// -------------