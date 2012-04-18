/* Author: Joseph Harry
 * Started: April 18, 2012
 */


function getStatus(isbn){
	var form =   $('<form method="post" action="proxy.php" target="postingIframe"></form>').css("display","none");
	$('<input type="hidden" />').attr({name: 'FullTextCriteria', value: isbn}).appendTo(form);
	$('<input type="hidden" />').attr({name: 'FullTextField', value: 'All'}).appendTo(form);
	$('<input type="submit" id="gobutton" title="Go" alt="Go" value="Go">').appendTo(form);
	var iframe = $("<iframe/>",{"src":"","id":"postingIframe"}).css({"width":"400px","height":"400px"}).attr("name","postingIframe")
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