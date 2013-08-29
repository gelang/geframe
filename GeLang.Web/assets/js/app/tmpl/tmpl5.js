$(document).ready(function () {
    var widget = new GeLang.Widget("#pnlControl", {
        title: "Template 005",
        xtype: "panels",
        panels: [
            {
                title: "Section 001",
                items: [
                    { name: "Field01", text: "Field 01" },
                    { name: "Field02", text: "Field 02" },
                    { name: "Field03", text: "Field 03" },
                    { name: "Field04", text: "Field 04" },
                ]
            },
            {
                name: "pnlSection02",
                title: "Section 002",
                items: [
                        { text: "Field 01" },
                        { text: "Field 01" },
                        { text: "Field 01" },
                        { text: "Field 01" },
                ]
            },
            {
                name: "pnlSection03",
                title: "Section 003",
                items: [
                    { text: "Field 01" },
                    { text: "Field 01" },
                    { text: "Field 01" },
                    { text: "Field 01" },
                ]
            },
        ]
    });
    widget.render();
});