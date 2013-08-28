$(document).ready(function () {
    var widget = new GeLang.Widget("#pnlControl", {
        title: "Registration Form",
        items: [
            { text: "First Name", cls: "span5" },
            { text: "Last Name", cls: "span5" },
            { text: "Contact Name", cls: "span5" },
            { text: "Email Address", cls: "span5" },
            { text: "Birth Place", cls: "span5" },
            { text: "Birth Date", cls: "span3", type: "datepicker" },
            { text: "Address", placeHolder: "Address1" },
            { text: "", placeHolder: "Address2" },
            { text: "", placeHolder: "Address3" },
            { text: "Message", type: "textarea" },
        ]
    });
    widget.render();
    widget.showToolbars(["save"]);
});