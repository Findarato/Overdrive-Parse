/* Author: Joseph Harry
 * Started: April 18, 2012
 */


function getStatus(isbn){
  $(".briefcitItems,.briefcitItemsHeader")
    .css("width","100%")
  
  $("div.briefcitActions a:first-child")
    .each(function(i,item){
      me = $(item);
      if(item.href.indexOf("overdrive")>1){ // This will work ONLY with overdrive.
        var iFrame = $("<iframe/>",{"src":"http://labs.lapcat.org/overdrive/proxy.php?isbn="+item.href})
            .css({"height":"3.5em","width":"100%","border":"none","scrolling":"none","background":"transparent"})
        me.replaceWith(iFrame)
        $(".briefcitItemsHeader h2").replaceWith("")
        //me.remove();        
      }

  })
  
  
	
}


$(document).ready(function() {
   getStatus();
});