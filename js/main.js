/* Author: Joseph Harry
 * Started: April 18, 2012
 */


function getStatus(isbn){
	$.getJSON("http://labs.lapcat.org/overdrive/python/proxy.psp",{"isbn":isbn},function(data){
		//document.write(data)
		alert(JSON.stringify(data))
	})
}


$(document).ready(function() {

	getStatus("9781101552292");
});