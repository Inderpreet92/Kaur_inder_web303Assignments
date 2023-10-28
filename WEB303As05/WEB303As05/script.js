// Assignment-5
class ContentItem {
    constructor(id, name, description, category) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category;
    }

    updateContentItem(id, name, description, category) {
        if (this.id === id) {
            if (name !== null) this.name = name;
            if (description !== null) this.description = description;
            if (category !== null) this.category = category;
        }
    }

    toString() {
        return `
            <div class="content-item-wrapper" id="content-item-${this.id}">
                <h4>${this.name}</h4>
                <p>${this.description}</p>
                <div>${this.category}</div>
            </div>
        `;
    }
}

// Create an array of content items
const contentItems = [
    new ContentItem(0, "Item 1", "Description 1", "Category 1"),
    new ContentItem(1, "Item 2", "Description 2", "Category 2"),
    new ContentItem(2, "Item 3", "Description 3", "Category 3"),
    new ContentItem(3, "Item 4", "Description 4", "Category 4"),
    new ContentItem(4, "Item 5", "Description 5", "Category 5")
];

// Update the theme title
$(document).ready(function () {
    const themeTitle = $('#content h2');
    themeTitle.text("Superheroes Theme"); // Change this to your desired theme title
});

// Add content items to the page using jQuery
$(document).ready(function () {
    const contentList = $('#content-item-list');
    contentItems.forEach(item => {
        contentList.append(item.toString());
    });
});
