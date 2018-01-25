console.log('Nuo FE')

let Dom = {
  inout: function (e) {
    return (e *= 2) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
  },
  height: function () {
    return ("innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight) -80
  },
  scrolling: true,
  scrollTop:function (top,callback) {
    this.scrolling = false;
    $("html,body").animate({ scrollTop: top }, 1000);
  }
};
// Dom.scrollTop(0);
$(document).on("scroll", function () { 
  var winTop = $(window).scrollTop();
  if (winTop <= 0.1 * Dom.height()) {
    $(".nfe-nav").removeClass("scrolled");
  } else{
    $(".nfe-nav").addClass("scrolled");
  }
});
$(".chervon").on("click", function() {
  Dom.scrollTop(Dom.height());
});
$(".qrcode").on("mouseenter mouseleave", function(e) {
     var n = $(".qrcode-popover");
     return "" === n.css("display") || "none" === n.css("display") ? n.css("display", "block") : n.css("display", "none"), !1;
   });