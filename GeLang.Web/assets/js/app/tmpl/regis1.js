$(document).ready(function () {
    var widget = new GeLang.Widget("#pnlControl", {
        title: "Registration 001",
        items: [
            { name: "field01", text: "Field 01" },
            { name: "field02", text: "Field 02" },
            { name: "field03", text: "Field 03" },
        ]
    });
    widget.render();
});