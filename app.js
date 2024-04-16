document.addEventListener("DOMContentLoaded", function() {
    var accItems = document.querySelectorAll('.accordion input[type="radio"]');
    accItems.forEach(function(item) {
        item.addEventListener('change', function() {
            var itemContent = this.parentElement.querySelector('.content');
            if (this.checked) {
                closeAllItems();
                itemContent.style.maxHeight = itemContent.scrollHeight + "px";
            } else {
                itemContent.style.maxHeight = null;
            }
        });
    });

    function closeAllItems() {
        var contents = document.querySelectorAll('.accordion .content');
        contents.forEach(function(content) {
            content.style.maxHeight = null;
        });
    }
});
