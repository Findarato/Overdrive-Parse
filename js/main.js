/* Author: Joseph Harry
 * Started: April 18, 2012
 */


function getStatus(isbn){
  
  $("div.briefcitActions a:first-child")
    .each(function(i,item){
      me = $(item);
      me.before(
        $("<iframe/>",{"src":"http://labs.lapcat.org/overdrive/proxy.php?isbn="+item.href})
          .css({"height":"3.5em","width":"100%","border":"none","scrolling":"none","background":"transparent"})
      )
      me.remove();
  })
  
  
	
}


$(document).ready(function() {
   getStatus();
});