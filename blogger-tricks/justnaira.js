/*
 *	Advanced Recent Posts Scroller Version 3 For Blogger
 *	Widget By Just Naira
 *	Url: http://www.justnaira.com/
 *	Copyright © 2011, by Just Naira 
 */

function jnAdvRecentPostsScrollerv3(json) {
	var jnrecentposts;
	var jnpostlink;
	var jnobj;
	var jnmarqueehtml;
	var jnmarqueehtml2;
	var byjustnaira;
	var jnlinkgap;
	var jnposttargetlink;
	var jnBullet;
	try {
		jnmarqueehtml = "\<marquee behavior=\"scroll\" onmouseover=\"this.stop();\" onmouseout=\"this.start();\" ";

		if (jnScrollAmount) {
			jnmarqueehtml = jnmarqueehtml + " scrollamount = \"" + jnScrollAmount + "%\"";
		} 
		if (jnWidth) {
			jnmarqueehtml = jnmarqueehtml + " width = \"" + jnWidth + "%\"";
		} else {
			jnmarqueehtml = jnmarqueehtml + " width = \"100%\"";
		}
		if (jnScrollDelay) {
			jnmarqueehtml = jnmarqueehtml + " scrolldelay = \"" + jnScrollDelay + "\"";
		}
		if (jnDirection) {
			jnmarqueehtml = jnmarqueehtml + " direction = \"" + jnDirection + "\"\>";
			if (jnDirection == "left" || jnDirection == "right") {
				jnlinkgap = "&nbsp;&nbsp;&nbsp;";
			} else {
				jnlinkgap = "\<br/\>";
			}
		}
		if (jntargetlink == "yes") {
			jnposttargetlink = " target= \"_blank\" ";
		} else {
			jnposttargetlink = " ";
		}
		if (jnimagebullet == "yes") {
			jnBullet = " \<img class=\"jnbulletbimg\" src=\"" + jnimgurl + "\" />";
		} else {
			jnBullet = jnBulletchar;
		}
		jnmarqueehtml2 = "\</marquee\>"
		jnrecentposts = "";
		for (var jnrp = 0; jnrp < jnnumPosts; jnrp++) {
			var jnobj = json.feed.entry[jnrp];
			if (jnrp == json.feed.entry.length) break;
			for (var jncc = 0; jncc < jnobj.link.length; jncc++) {
				if (jnobj.link[jncc].rel == 'alternate') {
					jnpostlink = jnobj.link[jncc].href;
					break;
				}
			}
			jnrecentposts = jnrecentposts + jnBullet + " \<a " + jnposttargetlink + " href=\"" + jnpostlink + "\">" + jnobj.title.$t + "\</a\>" + jnlinkgap;
		}
		byjustnaira = "\<a tareget =\"_blank\" href=\"http://www.justnaira.com/2012/06/auto-scrolling-recent-post-widget-for.html\"\>+  Grab this Widget\</a\> on \<a tareget =\"_blank\" href=\"http://www.justnaira.com/\"\>Just Naira\</a\>";
		if (jnDirection == "left") {
			jnrecentposts = jnrecentposts + "&nbsp;&nbsp;&nbsp;" + byjustnaira;
		} else if (jnDirection == "right") {
			jnrecentposts = byjustnaira + "&nbsp;&nbsp;&nbsp;" + jnrecentposts;
		} else if (jnDirection == "up") {
			jnrecentposts = jnrecentposts + "\<br/\>" + byJustnaira;
		} else {
			jnrecentposts = byjustnaira + "\<br/\>" + jnrecentposts;
		}
		document.write("\<style style=\"text/css\"\>.justnaira-srp{font-size:" + jnfontsize + "px;background:#" + jnbgcolor + ";font-weight:bold;}.justnaira-srp a{color:#" + jnlinkcolor + ";text-decoration:none;}.justnaira-srp a:hover{color:#" + jnlinkhovercolor + ";}img.jnbulletbimg{vertical-align:middle;border:none;}\</style\>")
		document.write("\<div class=\"justnaira-srp\"\>" + jnmarqueehtml + jnrecentposts + jnmarqueehtml2 + "\</div\>")
	} catch (exception) {
		alert(exception);
	}
}