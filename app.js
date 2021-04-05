var listElm = document.querySelector('#infinityScroll');
let fruits = ["img/gallery/1.jpg", "img/gallery/2.jpg", "img/gallery/3.jpg", "img/gallery/4.jpg", "img/gallery/5.jpg", "img/gallery/6.jpg"];
// Add 20 items.
var nextItem = 1;
var loadMore = function() {
  for (var i = 0; i < 6; i++) {
    var item = document.createElement('div');
    item.innerText = 'Item ' + nextItem++;
    listElm.appendChild(item);
  }
}

// Detect when scrolled to bottom.
listElm.addEventListener('scroll', function() {
  if (listElm.scrollLeft + listElm.clientWidth >= listElm.scrollWidth) {
    loadMore();
  }
});

// Initially load some items.
loadMore();
