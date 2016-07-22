$(document).ready(function(){
var olderLink = $("a.blog-pager-older-link").attr("href");
$("a.blog-pager-older-link").load(olderLink+" .post-title:first", function() {
var olderLinkTitle = $("a.blog-pager-older-link").text();
$("a.blog-pager-older-link").text(olderLinkTitle + "›");//rgt
});
var newerLink = $("a.blog-pager-newer-link").attr("href");
$("a.blog-pager-newer-link").load(newerLink+" .post-title:first", function() {
var newerLinkTitle = $("a.blog-pager-newer-link:first").text();
$("a.blog-pager-newer-link").text("‹" + newerLinkTitle);
});
});

