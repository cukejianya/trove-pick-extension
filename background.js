

var pickArticle = function(tab) {
  var action_url = "javascript:(function(d,id){var js,fjs=d.getElementsByTagName('head')[0];js=d.createElement('script');js.id=id;js.async=true;js['data-env']='//trove.com';js.src='//d2pe20ur0h0p8p.cloudfront.net/fbt/vendor/editorial/curation_init.js?cb='+new Date().getTime();fjs.parentNode.insertBefore(js,fjs);})(document,'trove_pick_js');";
  chrome.tabs.update(tab.id, {url: action_url});
};

chrome.browserAction.onClicked.addListener(pickArticle(tab));

chrome.contextMenus.create({
  "title" : "Get image info",
  "type" : "normal",
  "contexts" : ["page"],
  "onclick" : pickArticle(tab)
});
