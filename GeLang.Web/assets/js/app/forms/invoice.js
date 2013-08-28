$(document).ready(function () {
    var widget = new GeLang.Widget("#pnlControl", {
        title: "Invoice Form",
        xtype: "panels",
        panels: [
            {
                //title: "Invoice Information",
                items: [
                    { text: "Document No", cls: "span3" },
                    { text: "Document Date", cls: "span3", type: "datepicker" },
                    { text: "Order No", cls: "span3" },
                    { text: "Order Date", cls: "span3", type: "datepicker" },
                    { text: "Transaction Type", cls: "span6 full", type: "select" },
                    { text: "Payment Type", cls: "span6 full", type: "select" },
                    { text: "Due Date", cls: "span3", placeHolder: "Due Date Code" },
                    { type: "text", text: "", cls: "span5", span: true, readonly: true, placeHolder: "Due Date Description" },
                    { text: "Customer Bill", cls: "span3", placeHolder: "Customer Code" },
                    { type: "text", text: "", cls: "span5", span: true, readonly: true, placeHolder: "Customer Name" },
                    { text: "Address", readonly: true, placeHolder: "Address1" },
                    { readonly: true, placeHolder: "Address2" },
                    { readonly: true, placeHolder: "Address3" },
                    { text: "Customer Ship", cls: "span3", placeHolder: "Customer Code" },
                    { type: "text", text: "", cls: "span5", span: true, readonly: true, placeHolder: "Customer Name" },
                    { text: "Address", readonly: true, placeHolder: "Address1" },
                    { readonly: true, placeHolder: "Address2" },
                    { readonly: true, placeHolder: "Address3" },
                ]
            },
            {
                title: "Detail Invoice",
                items: [
                    { text: "Name" },
                    { text: "Email Address" },
                    { text: "Phone No" },
                    { text: "Subject" },
                    { text: "Comments", type: "textarea" },
                ]
            }
        ]
    });
    widget.render();
    widget.showToolbars(["add-new", "upload"]);
});