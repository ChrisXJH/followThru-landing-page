function isScrolledIntoView(elem)
{
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var elemTop = $(elem).offset().top;
  var margin = elemTop + $(elem).height() / 2;
  return docViewBottom >= margin  && docViewTop < margin;
}
