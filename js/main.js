/* Author: Joseph Harry
 * Started: April 18, 2012
 */


function getStatus(isbn){
	var form =   $('<form method="post" action="proxy.php" target="postingIframe"></form>').css("display","none");
	//var form =   $('<form method="post" action="http://incolsa.lib.overdrive.com/BANGSearch.dll?Type=FullText" target="postingIframe"></form>').css("display","none");
	$('<input type="hidden" />').attr({name: 'FullTextCriteria', value: isbn}).appendTo(form);
	$('<input type="hidden" />').attr({name: 'FullTextField', value: 'ISBN'}).appendTo(form);
	
	$('<input type="submit" id="gobutton" title="Go" alt="Go" value="Go">').appendTo(form);
	var iframe = $("<iframe/>",{"src":"","id":"postingIframe"}).css({"width":"800px","height":"800px"}).attr("name","postingIframe")
	iframe.load(function(){
		me = $(this);
		
				
		
	})
	iframe.appendTo(document.body);
	
	form.appendTo(document.body);
	form.find("#gobutton").trigger("click")
	
	
}


$(document).ready(function() {

	getStatus("9781101552292");
	
	

	
});