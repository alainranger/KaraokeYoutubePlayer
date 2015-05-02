/// </// <reference path="/scripts/jquery-1.11.2.min.js" />
var win = null;
$(document).ready(function () {	
	$('#btnLoadVideo').click(function(){
		
		if(!win)
		{
			win = window.open("player.html");
		}
		
		
		//var win = window.open();		
		
//		$(win.document.body).ready(function(){
//			var html = "<div id=\"player\"></div>";
//			html += "<script>";
//			html += "var tag = document.createElement(\'script\');";
//			html += 'tag.src = "https://www.youtube.com/iframe_api";';
//	      	html += 'var firstScriptTag = document.getElementsByTagName(\'script\')[0];';
//	      	html += 'firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);';
//			html += 'var player;';
//			html += 'function onYouTubeIframeAPIReady() {';
//	        html += 'player = new YT.Player(\'player\', {';
//	        html += 'height: \'390\',';
//	        html += 'width: \'640\',';
//	        html += 'videoId: \'M7lc1UVf-VE\'';
//	        html += 'events: {';
//	        html += '\'onReady\': onPlayerReady,';
//	        html += '\'onStateChange\': onPlayerStateChange';
//	        html += '}';
//	        html += '});';
//	      	html += '}';
//			  
//			$(win.document.body).html(html);
//		});	
	});
});