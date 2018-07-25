
function changeSubtitleSize(precentage){
		var executed = "document.getElementsByTagName('head')[0].innerHTML+='<style> video::-webkit-media-text-track-display {font-size: "+ precentage +"%;}</style>'";
		chrome.tabs.executeScript(null,
			{code:executed},
			function(){}
		);
}

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('subtitle-size');
    // onClick's logic below:
    link.addEventListener('change', function() {
        changeSubtitleSize(link.options[link.selectedIndex].value);
    });
});
