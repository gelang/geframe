$(document).ready(function () {
    var widget = new GeLang.Widget("#pnlControl", {
        title: "Bank Kas Terima",
        xtype: "panels",
        panels: [
            {
                items: [
                    { text: "Tipe", type: "select", cls: "span4" },
                    { text: "Profit Center", type: "select", cls: "span4" },
                    { text: "No Kwitansi", cls: "span4", readonly: true },
                    { text: "Tgl Kwitansi", cls: "span4" },
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
                ]
            },
            {
                items: [
                    { name: "field01", text: "Field 01" },
                    { name: "field02", text: "Field 02", cls: "span4" },
                    { name: "field03", text: "Field 03", cls: "span4" },
                ]
            },
        ]
    });
    widget.render();
});