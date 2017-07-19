$(document).ready(function() {
  
    var cutCount = 1	;
    var cut=5 ;
  
    $("#testID p").each(function (i) {
        i++;
        if(i == cutCount) {
            $(this).append(' <a href="javascript:void(1)" onclick="$(\'#testID p\').show(); $(this).hide()">Read more</b>')   
        }
	        if(i > cutCount) {
	           $(this).hide()
	        }  

        if(i==cut) {
        	$(this).append(' <a href="javascript:void(1)" onclick="$(\'.first p\').hide(); $(this).show()">Read less</b>')
        }
        
        

    });
    
});