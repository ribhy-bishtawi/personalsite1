alert("welcome in  website")
var headerHeight = $('header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > headerHeight) {
    $('nav').addClass('fixed-nav');
  } else {
    $('nav').removeClass('fixed-nav');
  }
});


$( "div.dl" ).click(function() {
  $( "div.vidforimg" ).replaceWith( "<div class=\"vidforimg\">" + "<iframe  width=\"100%\" height=\"50%\" src=\"https://www.youtube.com/embed/s8XIgR5OGJc\" frameborder=\"0\" allowfullscreen></iframe>"+"</div>" );
});

$( "div.hl" ).click(function() {
  $( "div.vidforimg" ).replaceWith( "<div class=\"vidforimg\">" + "<iframe  width=\"100%\" height=\"50%\" src=\"https://www.youtube.com/embed/9h0Arg_-380\" frameborder=\"0\" allowfullscreen></iframe>"+"</div>" );
});
$( "div.dn" ).click(function() {
  $( "div.vidforimg" ).replaceWith( "<div class=\"vidforimg\">" + "<iframe  width=\"100%\" height=\"50%\" src=\"https://www.youtube.com/embed/a6Rrngddg-Y\" frameborder=\"0\" allowfullscreen></iframe>"+"</div>" );
});
$( "div.yo" ).click(function() {
  $( "div.vidforimg" ).replaceWith( "<div class=\"vidforimg\">" + "<iframe  width=\"100%\" height=\"50%\" src=\"https://www.youtube.com/embed/cT3S78DLCk0\" frameborder=\"0\" allowfullscreen></iframe>"+"</div>" );
});
$( "div.lm" ).click(function() {
  $( "div.vidforimg" ).replaceWith( "<div class=\"vidforimg\">" + "<iframe  width=\"100%\" height=\"50%\" src=\"https://www.youtube.com/embed/TMSIR210mRg\" frameborder=\"0\" allowfullscreen></iframe>"+"</div>" );
});
$( "div.ly" ).click(function() {
  $( "div.vidforimg" ).replaceWith( "<div class=\"vidforimg\">" + "<iframe  width=\"100%\" height=\"50%\" src=\"https://www.youtube.com/embed/TMSIR210mRg\" frameborder=\"0\" allowfullscreen></iframe>"+"</div>" );
});
$( "div.at" ).click(function() {
  $( "div.vidforimg" ).replaceWith( "<div class=\"vidforimg\">" + "<iframe  width=\"100%\" height=\"50%\" src=\"https://www.youtube.com/embed/hzn67zTCgGc\" frameborder=\"0\" allowfullscreen></iframe>"+"</div>" );
});

$( "div.s" ).click(function() {
  $( "div.s" ).replaceWith( " <div class=\"col four snapchat-qr \"></div>" );
});
 
$( "div.i" ).click(function() {
  $( "div.i" ).replaceWith( " <div class=\"col four insta1 \"></div>");
});
$( "div.f" ).click(function() {
  $( "div.f" ).replaceWith( " <div class=\"col four face1 \"></div>");
});

$( "div.w" ).click(function() {
  $( "div.w" ).replaceWith( " <div class=\"col four whatsapp1\"></div>");
});
$( "div.sk" ).click(function() {
  $( "div.sk" ).replaceWith( " <div class=\"col four skype1\"></div>");
});
$( "div.G" ).click(function() {
  $( "div.G" ).replaceWith( " <div class=\"col four g1\"></div>");
});

$( "div.feedbu" ).click(function() {  
  $( ".feedbu" ).replaceWith( "");
  $( ".text" ).replaceWith( " <h3 style =\"width:300px;float:right;\"><span style=\"color:#EEE;\">Thank you for your subscription</span></h3>");
});
$( "div.s" ).click(function() {
  $( "div.s" ).replaceWith( " <div class=\"col four snapchat sdsd\"></div>" );
});
 
function Function(inputtxt)
{ 
var letters = /^[0 - 9 a - z A - Z]+$/;
if(inputtxt.value.match(letters))
{
alert('Thank you for your feed, try again');
X.focus();
return true;
}
else
{
alert('please enter a vaild feed. ');
return false;
}
}