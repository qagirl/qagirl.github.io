!
function(e, t, a) {
    function n() {
        c(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"),
        o(),
        r()
    }
    function r() {
        for (var e = 0; e < d.length; e++) try {
            d[e].alpha <= 0="" ?="" (t.body.removechild(d[e].el),="" d.splice(e,="" 1))="" :="" (d[e].y--,="" d[e].scale="" +=".004," d[e].alpha="" -=".013," d[e].el.style.csstext="left:" d[e].x="" "px;top:"="" d[e].y="" "px;opacity:"="" ";transform:scale("="" ","="" ")="" rotate(45deg);background:"="" d[e].color="" ";z-index:99999");="" }="" catch(e)="" {}="" requestanimationframe(r)="" function="" o()="" {="" var="" t="function" =="typeof" e.onclick="" &&="" e.onclick;="" t(),="" i(e)="" lastpost="false;" lasturl="window.location.pathname;" is_post(){="" 根据自己实际需要来判断="" url="window.location.pathname;" if(lastpost){="" if(lasturl="=" url){="" return="" lastpost;="" urlarray="url.split(" ");"="" if(urlarray.length=""> 2){
        var id = $(".article").eq(0).attr("id");
        var resultUrl = "post-" + urlArray[urlArray.length - 2];
        if(resultUrl == id){
          lastPost = true;
          return lastPost;
        }
      }
      lastPost = false;
      return lastPost;
    }

    function i(e) {
      if(is_post()){
        return;
      }
        var a = t.createElement("div");
        a.className = "heart",
        d.push({
            el: a,
            x: e.clientX - 5,
            y: e.clientY - 5,
            scale: 1,
            alpha: 1,
            color: s()
        }),
        t.body.appendChild(a)
    }
    function c(e) {
        var a = t.createElement("style");
        a.type = "text/css";
        try {
            a.appendChild(t.createTextNode(e))
        } catch(t) {
            a.styleSheet.cssText = e
        }
        t.getElementsByTagName("head")[0].appendChild(a)
    }
    function s() {
        return "rgb(" + ~~ (255 * Math.random()) + "," + ~~ (255 * Math.random()) + "," + ~~ (255 * Math.random()) + ")"
    }
    var d = [];
    e.requestAnimationFrame = function() {
        return e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame ||
        function(e) {
            setTimeout(e, 1e3 / 60)
        }
    } (),
    n()
} (window, document);
</=>