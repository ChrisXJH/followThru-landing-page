function Component(elem) {
  this.elem = elem;
}

Component.prototype.hide = function () {

};

Component.prototype.show = function () {
  this.elem.addClass("show");
};
