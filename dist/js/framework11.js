Function Framework11() {
    var F11 = this;
    F11.loader;


    F11.loadPage = function(func, url) {
        if (!func && func !== 0) {
            throw "Function Required: 0 loads page, 1 dismisses page.";
        }
        if (!url && func !== 1) {
            throw "URL Required";
        }
        if (func == 0) {
            if (url !== F11.loader) {
                $("#page").load(url);
                F11.loader = url;
            }
            document.getElementById("page").className = "page-open";
        } else if (func == 1) {
            document.getElementById("page").className = "page-closed";
        } else {
            throw "Invalid Function";
        }
    } 
    F11.linkToPageLink = function() {
        for (var acount = 0; document.getElementsByTagName("a").length >= acount; acount++) {
            try {
                if (!document.getElementsByTagName("a")[acount].classList.contains("external") && document.getElementsByTagName("a")[acount].href.search("#") == -1 && document.getElementsByTagName("a")[acount].href.search("javascript:") == -1) {
                    document.getElementsByTagName("a")[acount].href = "javascript:loadPage(0,'" + document.getElementsByTagName("a")[acount].href + "');";
                }
            } catch (err) {}
        }
    }
    F11.linkToPageLink();


}