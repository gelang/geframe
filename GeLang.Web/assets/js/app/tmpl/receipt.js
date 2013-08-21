$(document).ready(function () {
    var widget = new GeLang.Widget("#pnlControl", {
        title: "Kwitansi",
        items: [
            { text: "Tipe", type: "select", cls: "span4 full" },
            { text: "No Kwitansi", cls: "span4", readonly: true },
            { text: "Tgl Kwitansi", cls: "span4" },
            { text: "Profit Center", type: "select", cls: "span4 full" },
            { text: "Tgl GL", cls: "span4" },
            { text: "Tgl Jatuh Tempo", cls: "span4" },
            { text: "Pelanggan", type: "controls", items: [{ name: "CustCode", cls: "span2" }, { name: "CustName", cls: "span6", readonly: true }] },
            { text: "Alamat" },
            { text: "", readonly: true },
            { text: "", readonly: true },
            { text: "Keterangan", type: "textarea", readonly: true },
            { text: "No Refferensi", cls: "span4" },
            { text: "Tgl Refferensi", cls: "span4" },
            { text: "Nilai Kwitansi", cls: "span4" },
            //{ text: "Field 04" },
            //{ text: "Field 05", type: "textarea" },
            //{ text: "Field 04" },
            //{ text: "Field 04" },
            //{ text: "Field 04", cls: "span4" },
            //{ text: "Field 04", cls: "span4" },
            //{ text: "Field 04" },
            //{ text: "Field 04" },
        ]
    });
    widget.render();
});