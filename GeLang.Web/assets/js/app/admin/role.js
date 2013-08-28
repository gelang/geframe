$(document).ready(function () {
    var widget = new GeLang.Widget("#pnlControl", {
        title: "Role",
        items: [
            { text: "First Name", cls: "span3" },
            { text: "Middle Name", cls: "span2" },
            { text: "Last Name", cls: "span3" },
            { text: "Contact Name" },
            { text: "Email Address" },
            { text: "Phone No" },
            { text: "Product Name" },
            { text: "Comments", type: "textarea" },
        ]
    });
    widget.render();
});