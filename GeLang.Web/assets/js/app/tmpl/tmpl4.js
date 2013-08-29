$(document).ready(function () {
    var widget = new GeLang.Widget("#pnlControl", {
        title: "Template 004",
        xtype: "panel",
        items: [
            { text: "Menu Id", cls: "span2" },
            { text: "Menu Text", cls: "span6" },
            { text: "Menu Description", type: "textarea" },
            { text: "Menu Header", type: "text" },
            { text: "Menu Level", type: "spinner" },
            { text: "Menu Index", type: "spinner" },
            { name: "date01", text: "Date 001", type: "datepicker", cls: "fixed" },
            { text: "Menu Url" },
            { text: "Is Active", type: "checkbox" },
        ]
    });
    widget.render();
});