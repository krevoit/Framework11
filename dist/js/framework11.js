var Framework11 = this;
Framework11.loader;
function loadPage(func, url) {
  if (!func && func !== 0) {
    throw "Function Required: 0 loads page, 1 dismisses page."
  }
  if (!url && func !== 1) {
    throw "URL Required"
  }
  if (func == 0) {
    if (url !== Framework11.loader) {
    	$("#page").load(url);
      Framework11.loader = url;
    }
    document.getElementById("page").className = "page-open"
  } else if (func == 1) {
    document.getElementById("page").className = "page-closed"
  } else {
    throw "Invalid Function"
  }
}
function linkToPageLink() {
for(var acount = 0; document.getElementsByTagName("a").length >= acount; acount++) {
try {
 if(!document.getElementsByTagName("a")[acount].classList.contains("external") && document.getElementsByTagName("a")[acount].href.search("#") == -1 && document.getElementsByTagName("a")[acount].href.search("javascript:") == -1) {
   document.getElementsByTagName("a")[acount].href = "javascript:loadPage(0, '" + document.getElementsByTagName("a")[acount].href + "');";
 }
} catch(err) { }
}
}
