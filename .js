document.addEventListener('DOMContentLoaded', function() {
    const itemList = document.getElementById('item-list');
    const items = ['项目1', '项目2', '项目3', '项目4'];

    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        itemList.appendChild(li);
    });
});
