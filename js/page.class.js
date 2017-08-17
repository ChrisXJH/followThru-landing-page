function Page(elem, components) {
  this.elem = elem;
  this.id = elem.attr("id");
  this.bind_events();
}


Page.prototype.bind_events = function () {
  var self = this;
  $(window).scroll(function() {
    if(isScrolledIntoView(self.elem)) {
      self.elem.addClass("show-components");
    }
  });
};
