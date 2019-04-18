var contextMenuItem = {
	"id" : "lookup",
	"title" : "look up",
	"contexts":["selection"]
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener( function(clickData) {
	if( clickData.menuItemId == "lookup" && clickData.selectionText ){
			chrome.tabs.create({url: "https://www.collinsdictionary.com/dictionary/english/"+clickData.selectionText});
	}
}
)