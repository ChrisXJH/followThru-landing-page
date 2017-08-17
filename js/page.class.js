function Page(elem, components) {
  this.elem = elem;
  this.id = elem.attr("id");
  // this.elem.height(this.elem.height());
  this.components = [];
  this.initComponents();
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

Page.prototype.initComponents = function () {
  var components = this.elem.find(".component");
  for (var i = 0; i < components.length; i++) {
    var cpn = new Component(components.eq(i));
    this.components.push(cpn);
  }
};
