var scrollBtn = document.getElementsByClassName("s-top-btn")[0],
  header = document.getElementsByClassName("list-hd")[0];

addEvent(window, "scroll", function () {
  var scrollTop = getScrollOffset().top;
  scrollTop
    ? (scrollBtn.style.display = "block")
    : (scrollBtn.style.display = "none");
});

addEvent(scrollBtn, "click", function () {
  window.scrollTo(0, 0);
});

addEvent(header, "click", function () {
  window.scrollTo(0, 0);
});
