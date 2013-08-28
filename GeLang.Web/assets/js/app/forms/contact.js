$(document).ready(function () {
    var widget = new GeLang.Widget("#pnlControl", {
        title: "Contact Form",
        items: [
            { text: "First Name", cls: "span4" },
            { text: "Last Name", cls: "span4" },
            { text: "Contact Name" },
            { text: "Email Address" },
            { text: "Phone No" },
            { text: "Comments", type: "textarea" },
        ]
    });
    widget.render();
    widget.showToolbars(["save"]);
});