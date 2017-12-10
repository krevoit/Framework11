function Framework11() {
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
    $("[loadpage]").click(function(){
        var url = $(this).attr("loadpage");
        F11.loadPage(0, url);
    });

    $("#back").click(function(){
        F11.loadPage(1, F11.loader);
    });

}