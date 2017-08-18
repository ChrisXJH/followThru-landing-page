function Component(elem) {
  this.elem = elem;
  this.bind_events();
}

Component.prototype.bind_events = function () {
  var self = this;
  $(window).scroll(function() {
    if(isScrolledIntoView(self.elem)) {
      self.elem.addClass("show");
    }
  });
};
