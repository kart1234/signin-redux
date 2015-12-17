var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

(function() {
    var gads = document.createElement('script');
    gads.async = true;
    gads.type = 'text/javascript';
    var useSSL = 'https:' == document.location.protocol;
    gads.src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
    var node = document.getElementsByTagName('script')[0];
    node.parentNode.insertBefore(gads, node);
})();

function getSamsVisitorCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}


var oGoogleDFP = {
    'path': "",
    'page': null,
    'search': null,
    'newpage': 'chalet'
};
if (location.pathname.indexOf('login.jsp') > -1) {
    oGoogleDFP.path = '/signin';
} else if (location.pathname.indexOf('cart.jsp') > -1) {
    oGoogleDFP.path = '/cart';
} else if (location.pathname.indexOf('homepage.jsp') > -1 || location.href == 'http://www.samsclub.com/sams/') {
    oGoogleDFP.path = '/Homepage';
    oGoogleDFP.page = 'main';
} else if (location.pathname.indexOf('searchResults.jsp') > -1) {
    oGoogleDFP.page = 'searchresults';
} else if (location.pathname.indexOf('.ip') > -1 || location.pathname.indexOf('.cp') > -1) {
	if (googleAddBreadCrumbLinkText != null) {
        oGoogleDFP.path = googleAddBreadCrumbLinkText;
    }
    oGoogleDFP.path = oGoogleDFP.path.split('/').slice(1); //remove All_Products
    if (location.pathname.indexOf('.ip') > -1 && oGoogleDFP.path.length>1) oGoogleDFP.path.pop(); //remove product
    oGoogleDFP.path = (oGoogleDFP.path.length > 4) ? '/' + oGoogleDFP.path.slice(0, 4).join('/') : '/' + oGoogleDFP.path.join('/');
    oGoogleDFP.page = (location.pathname.indexOf('.ip') > -1) ? 'product' : 'main';
} else if (location.pathname.indexOf('content.jsp') > -1) {
    if (location.search.indexOf('pageName=') > -1) oGoogleDFP.path = '/Seasonal/' + location.search.split('pageName=')[1].split('&')[0];
    oGoogleDFP.page = 'seasonal';
}
if (location.search.indexOf('searchTerm=') > -1) oGoogleDFP.search = location.search.split('searchTerm=')[1].split('&')[0];
googletag.cmd.push(function() {
	var mappingSizes = googletag.sizeMapping().
	    addSize([1140, 0], [1140, 50]).
	    addSize([1024, 0], [1024, 50]). 
	    addSize([768, 0], [768, 50]). 
	    addSize([0, 0], [768, 50]).
	    build();
    googletag.defineSlot('/41919049/SamsClub-US' + oGoogleDFP.path, [
        [1140, 50]
    ], 'expandableAd').defineSizeMapping(mappingSizes).addService(googletag.pubads()).setTargeting('page', oGoogleDFP.page).setTargeting('search', oGoogleDFP.search);
    googletag.defineSlot('/41919049/SamsClub-US' + oGoogleDFP.path, [
        [728, 90]
    ], 'leaderboardTopAd').addService(googletag.pubads()).setTargeting('page', oGoogleDFP.page).setTargeting('pos', 'Top').setTargeting('search', oGoogleDFP.search);
    googletag.defineSlot('/41919049/SamsClub-US' + oGoogleDFP.path, [
        [728, 90]
    ], 'leaderboardBottomAd').addService(googletag.pubads()).setTargeting('page', oGoogleDFP.page).setTargeting('pos', 'Bottom').setTargeting('search', oGoogleDFP.search);
    googletag.defineSlot('/41919049/SamsClub-US' + oGoogleDFP.path, [
	    [728, 90]
	], 'leaderboardBottomAd1').addService(googletag.pubads()).setTargeting('page', oGoogleDFP.page).setTargeting('pos', 'Bottom').setTargeting('search', oGoogleDFP.search);
    googletag.defineSlot('/41919049/SamsClub-US' + oGoogleDFP.path, [
 	    [728, 90]
 	], 'leaderboardTopAd1').addService(googletag.pubads()).setTargeting('page', oGoogleDFP.page).setTargeting('pos', 'Top').setTargeting('search', oGoogleDFP.search);
    googletag.defineSlot('/41919049/SamsClub-US' + oGoogleDFP.path, [
        [160, 600]
    ], 'skyscraperAd').addService(googletag.pubads()).setTargeting('page', oGoogleDFP.page).setTargeting('search', oGoogleDFP.search);
    googletag.defineSlot('/41919049/SamsClub-US' + oGoogleDFP.path, [
        [300, 250]
    ], 'rectangleAd').addService(googletag.pubads()).setTargeting('page', oGoogleDFP.page).setTargeting('search', oGoogleDFP.search);
    googletag.pubads().enableAsyncRendering();
    googletag.pubads().setTargeting("samsVisitor", getSamsVisitorCookie("samsVisitor"));
    googletag.enableServices();
});
