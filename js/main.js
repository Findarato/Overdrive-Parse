/* Author: Joseph Harry
 * Started: April 18, 2012
 */


function getStatus(isbn){
	$.get("http://labs.lapcat.org/overdrive/python/test.psp",{"isbn":isbn},function(data){
		document.write(data)
		//alert("test")
	})
}


$(document).ready(function() {

	getStatus("9781101552292");
});