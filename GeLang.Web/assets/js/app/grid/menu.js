$(document).ready(function () {
    var widget = new GeLang.Widget("#pnlControl", {
        title: "Menu",
        xtype: "grid",
        urlList: "layout/menulist",
        //urlSave: "mst/branch/save",
        //urlDelete: "mst/branch/delete",
        columns: [
            { mData: "MenuId", sTitle: "Menu Id" },
            { mData: "MenuName", sTitle: "Menu Name" },
            { mData: "MenuHeader", sTitle: "Menu Header", bVisible: false },
            { mData: "MenuIndex", sTitle: "Menu Index" },
            { mData: "MenuIcon", sTitle: "Menu Icon", bSortable: false },
            { mData: "MenuUrl", sTitle: "Menu Url" },
        ],
        items: [
            { text: "Menu Id", cls: "span2" },
            { text: "Menu Text", cls: "span6" },
            { text: "Menu Description", type: "textarea" },
            { text: "Menu Header", type: "text" },
            { text: "Menu Level", type: "spinner" },
            { text: "Menu Index", type: "spinner" },
            { text: "Menu Url" },
            { text: "Is Active", type: "checkbox" },
        ]
    });
    widget.render();
});