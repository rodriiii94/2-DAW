const items = document.querySelectorAll('.item');
let draggedItem = null;

items.forEach((item) => {
  item.addEventListener('dragstart', function () {
    draggedItem = item;
    setTimeout(() => (item.style.display = 'none'), 0);
  });

  item.addEventListener('dragend', function () {
    setTimeout(() => {
      draggedItem.style.display = 'flex';
      draggedItem = null;
    }, 0);
  });

  item.addEventListener('dragover', function (e) {
    e.preventDefault();
  });

  item.addEventListener('dragenter', function (e) {
    e.preventDefault();
    this.style.border = '2px dashed #ccc';
  });

  item.addEventListener('dragleave', function () {
    this.style.border = '1px solid #ddd';
  });

  item.addEventListener('drop', function () {
    this.style.border = '1px solid #ddd';
    if (draggedItem !== this) {
      this.parentNode.insertBefore(draggedItem, this.nextSibling);
    }
  });
});