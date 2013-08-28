$(document).ready(function () {
    var widget = new GeLang.Widget("#pnlControl", {
        title: "Feedback Form",
        items: [
            { text: "Name" },
            { text: "Email Address" },
            { text: "Phone No" },
            { text: "Subject" },
            { text: "Comments", type: "textarea" },
        ]
    });
    widget.render();
    widget.showToolbars(["save"]);
});