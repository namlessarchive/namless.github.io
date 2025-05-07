$("#container").mousemove(function(e) {
    parallaxIt(e, ".cradle", -80);
	parallaxIt(e, ".cres", -74);
  parallaxIt(e, ".slide", -100);
  parallaxIt(e, "img", -30);
  parallaxIt(e, ".stars1", -50);
});

function parallaxIt(e, target, movement) {
  var $this = $("#container");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}