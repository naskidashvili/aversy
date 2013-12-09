// JavaScript Document
function getlogolist() {
	var pagecount = 5;
	var logo = new Array(pagecount+1);
	var h = new Array(pagecount+1);
	var w = new Array(pagecount+1);
	
	logo[1] = "img/Logos/1.png";
	w[1] = 300;
	h[1] = 60;
	
	logo[2] = "img/Logos/2.png";
	w[2] = 250;
	h[2] = 60;
	
	logo[3] = "img/Logos/3.png";
	w[3] = 250;
	h[3] = 60;

	logo[4] = "img/Logos/4.png";
	w[4] = 250;
	h[4] = 60;
	
	return{logo : logo, w : w, h : h};
	}
function getpagelist() {
	var pagecount = 22;
	var inc = new Array(pagecount+1);
	var logo = new Array(pagecount+1);
	var resize = new Array(pagecount+1);
	var parent = new Array(pagecount+1);
	
	// Main Menu
	inc[1] = "inc_mainmenu.html";
	logo[1] = 1;
	resize[1] = true;
	parent[1] = 0
	// AGG Main Menu
	inc[2] = "inc_agg_menu.html";
	logo[2] = 2;
	resize[2] = true;
	parent[2] = 1;
	
	// AC Main Menu
	inc[3] = "inc_ac_menu.html";
	logo[3] = 3;
	resize[3] = true;
	parent[3] = 1;
	
	// AA Main Menu
	inc[4] = "inc_aa_menu.html";
	logo[4] = 4;
	resize[4] = true;
	parent[4] = 1;
	
	// Login Menu AG
	inc[5] = "inc_members.html";
	logo[5] = 1;
	resize[5] = false;
	parent[5] = 1;
	
	// Login Menu AGG
	inc[6] = "inc_login.html";
	logo[6] = 2;
	resize[6] = false;
	parent[6] = 2;
	
	// Login Menu AC
	inc[7] = "inc_login.html";
	logo[7] = 3;
	resize[7] = false;
	parent[7] = 3;
	
	// Login Menu AA
	inc[8] = "inc_login.html";
	logo[8] = 4;
	resize[8] = false;
	parent[8] = 4;
	
	// Contact AG
	inc[9] = "inc_contact_ag.html";
	logo[9] = 1;
	resize[9] = false;
	parent[9] = 1;

	// Contact AGG
	inc[10] = "inc_contact_agg.html";
	logo[10] = 2;
	resize[10] = false;
	parent[10] = 2;

	// Contact AC
	inc[11] = "inc_contact_ac.html";
	logo[11] = 3;
	resize[11] = false;
	parent[11] = 3;
	
	// Contact AA
	inc[12] = "inc_contact_aa.html";
	logo[12] = 4;
	resize[12] = false;
	parent[12] = 4;
	
	// About AG
	inc[13] = "inc_about_ag.html";
	logo[13] = 1;
	resize[13] = false;
	parent[13] = 1;
	
	// About AGG
	inc[14] = "inc_about_agg.html";
	logo[14] = 2;
	resize[14] = false;
	parent[14] = 2;
	
	// About AC
	inc[15] = "inc_about_ac.html";
	logo[15] = 3;
	resize[15] = false;
	parent[15] = 3;
	
	// About AGG
	inc[16] = "inc_about_aa.html";
	logo[16] = 4;
	resize[16] = false;
	parent[16] = 4;
	
	// Login Menu AA
	inc[17] = "inc_newpolice.html";
	logo[17] = 2;
	resize[17] = false;
	parent[17] = 2;
	
	
	// Urgent Care AGG
	inc[18] = "inc_ucare_agg.html";
	logo[18] = 2;
	resize[18] = false;
	parent[18] = 2;
	
	// Urgent Care AC
	inc[19] = "inc_ucare_ac.html";
	logo[19] = 3;
	resize[19] = false;
	parent[19] = 3;
	
	// Urgent Care AA
	inc[20] = "inc_ucare_aa.html";
	logo[20] = 4;
	resize[20] = false;
	parent[20] = 4;
	
	// Providers AGG
	// Urgent Care AA
	inc[21] = "inc_provider_agg.html";
	logo[21] = 2;
	resize[21] = false;
	parent[21] = 2;
	
	// Create Login
	inc[22] = "inc_createpassword.html";
	logo[22] = 2;
	resize[22] = false;
	parent[22] = 2;
	
	
	return{inc : inc, logo : logo, resize : resize, parent : parent};
	}