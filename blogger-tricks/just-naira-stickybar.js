jQuery(document).ready(function() {
function justnaira_stickybar()  {
var jnwh = jQuery(window).height();
var jnpph = jQuery("#jn-stickybar").height();
var jnfromTop = jQuery(window).scrollTop()+0;
 jQuery("#jn-stickybar").css({"top":jnfromTop});
}jQuery(window)
.scroll(justnaira_stickybar)
.resize(justnaira_stickybar)
//alert(jQuery.cookie('sreqshown'));
//var jnww = jQuery(window).width();
//var jnppw = jQuery("#jn-stickybar").width();
//var jnleftm = (jnww-jnppw)/2;
var jnleftm = 0;
//var jnwh = jQuery(window).height();
//var jnpph = jQuery("#jn-stickybar").height();
//var jnfromTop = (jQuery(window).scrollTop()+jnwh-jnpph) / 2; 
jQuery("#jn-stickybar").animate({opacity: "1", left: "0" , left: jnleftm}, 0).show();        
jQuery("#jnclose").click(function() {
jQuery("#jn-stickybar").animate({opacity: "0", left: "-1500"}, 1500).show(); });});