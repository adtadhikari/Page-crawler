/*chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.sendMessage(tab.id, { text: "report_back" },
                                doStuffWithDOM);
});


function doStuffWithDOM(element) {
    console.log("I received the following DOM content:\n" + element);
}*/
 //code: 'localStorage.setItem("key",'+ test+');'




chrome.browserAction.onClicked.addListener(function(tabs) {
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, { text: "report_back" }, function(response) {


	//alert(tabs[0].url);
	var domain = tabs[0].url.match(/^[\w-]+:\/{2,}\[?([\w\.:-]+)\]?(?::[0-9]*)?/)[1];
	//alert(domain);
    if (domain=="www.linkedin.com"){
	    crawllinkedin(response,function(data_returned){
	    	alert(JSON.stringify(data_returned));
	    	data_returned=JSON.stringify(data_returned);
	    	//alert(JSON.stringify(data_returned));
			var tcode='localStorage.setItem("key", '.concat(JSON.stringify(data_returned)).concat(');');
	    //console.log(JSON.stringify(response));
	     chrome.tabs.create({
	            active: false,
	            url: 'http://localhost:8080/Profile-Builder'
	        }, function(tab) {
	            chrome.tabs.executeScript(tab.id, {
	                //code: 'localStorage.setItem("key","ashishsharma");'
	                code: tcode
	            }, function() {
	                chrome.tabs.remove(tab.id);
	            });
	        });
	     alert("Got your data");
		},function(err){
		console.log("Error");
		});
	}
	else if(domain=="scholar.google.com"){
		googlescholar(response,function(data_returned){		
			if(data_returned.length==0){
				alert("No data found on Google Scholar");
			}
			else{
				data_returned=JSON.stringify(data_returned);
	    		//alert(JSON.stringify(data_returned));
				var tcode='localStorage.setItem("googlescholar", '.concat(JSON.stringify(data_returned)).concat(');');
		     	chrome.tabs.create({
		            active: false,
		            url: 'http://localhost:8080/Profile-Builder'
		        }, function(tab) {
		            chrome.tabs.executeScript(tab.id, {
		                code: tcode
		            }, function() {
		                chrome.tabs.remove(tab.id);
		            });
		        });
		     	alert("Got your data");
				alert(data_returned);
			}

		});
	}

  

    
 
  });
});
});