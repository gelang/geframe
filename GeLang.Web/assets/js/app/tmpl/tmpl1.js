$(document).ready(function () {
    var widget = new GeLang.Widget("#pnlControl", {
        title: "Template 001",
        items: [
            { text: "First Name", cls: "span3" },
            { text: "Middle Name", cls: "span2" },
            { text: "Last Name", cls: "span3" },
            { text: "Birth Place", cls: "span5" },
            { text: "Birth Date", cls: "span3", type: "datepicker" },
            { text: "Contact Name", cls: "span5" },
            { text: "Email", cls: "span3" },
            { text: "Product Code", cls: "span3" },
            { text: "Product Name", cls: "span5" },
            { text: "Address" },
            { text: "" },
            { text: "" },
            { text: "" },
            { text: "Message", type: "textarea" },
        ]
    });
    widget.render();
});