$(document).ready(function () {
    var widget = new GeLang.Widget("#pnlControl", {
        title: "User",
        items: [
            { text: "First Name", cls: "span4" },
            { text: "Last Name", cls: "span4" },
            { text: "Contact Name" },
            { text: "Email Address" },
            { text: "Phone No" },
            { text: "Product Name" },
        ]
    });
    widget.render();
});