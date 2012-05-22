/* Author: Joseph Harry
 * Started: April 18, 2012
 */


function getStatus(isbn){
	$.getJSON("http://labs.lapcat.org/overdrive/proxy.php",{"isbn":isbn},function(data){
		$("body").append(JSON.stringify(data))
	})
}


$(document).ready(function() {

	//getStatus("9781781102534");

   //getStatus("http://incolsa.lib.overdrive.com/ContentDetails.htm?ID=A747D620-96F9-42BC-B4E1-4830EC9D3C9E");
   getStatus();
});