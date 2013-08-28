$(document).ready(function () {
    var widget = new GeLang.Widget("#pnlControl", {
        title: "Template 002",
        xtype: "panel",
        items: [
            { name: "field01", text: "Field 01" },
            { name: "field02", text: "Field 02", type: "textarea" },
            { name: "field03", text: "Field 03" },
            { name: "field04", text: "Field 04" },
            { name: "field05", text: "Field 05", type: "textarea" },
            { name: "field06", text: "Field 06" },
        ]
    });
    widget.render();
});