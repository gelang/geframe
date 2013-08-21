GeLang.Widget = function (selector, options) {

    this.render = function () {
        var xtype = options.xtype || "form";
        var content = $(selector);
        var html = "";

        switch (xtype) {
            case "form":
                html = this.generateForm(options.items);
                break;
            case "panel":
                html = this.generatePanel(options.items);
                break;
            case "panels":
                html = this.generatePanels(options.panels);
                break;
            default:
                break;
        }

        var html_title = "<div class='title'>" +
                         ((options.title === undefined) ? "" : "<h3>" + options.title + "</h3>") +
                         ((options.subtitle === undefined) ? "" : "<h5>" + options.subtitle + "</h5>") +
                         "</div>";
        var html_widget = "<div class=\"gl-widget\">" + html_title + html + "</div>";

        content.html(html_widget);
    };

    this.generateForm = function (items) {
        var html = "";
        var self = this;

        $.each(items || [], function (idx, item) {
            var cls = ((item.cls === undefined) ? "" : " class='" + item.cls + "'");
            html += "<div" + cls + ">" + self.generateLabel(item) + self.generateInput(item) + "</div>";
        });

        return "<form class=\"form\">" + html + "</form>";
    };

    this.generatePanel = function (items) {
        var html = "";
        var self = this;

        $.each(items || [], function (idx, item) {
            var cls = ((item.cls === undefined) ? "" : " class='" + item.cls + "'");
            html += "<div" + cls + ">" + self.generateLabel(item) + self.generateInput(item) + "</div>";
        });

        return "<div class=\"panel\">" + html + "</div>";
    };

    this.generatePanels = function (panels) {
        var html = "";
        var self = this;

        $.each(panels || [], function (idx, item) {
            html += ((idx > 0) ? "<div class=\"divider\"></div>" : "") + self.generatePanel(item.items);
        });

        return html;
    };

    this.generateLabel = function (item) {
        var required = item.required || false;
        var html = "<label for='" + (item.name || "") + "'>" + (item.text || "&nbsp;") + ((required) ? " *" : "") + "</label>";

        return html;
    };

    this.generateInput = function (item) {
        var required = ((item.required || false) ? " required='required'" : "");
        var readonly = ((item.readonly || false) ? " readonly='readonly'" : "");
        var type = item.type || "text";
        var html = "";

        switch (type) {
            case "textarea":
                html = "<textarea name='" + item.name + "' id='" + item.name + "' " + required + readonly + "></textarea>";
                break;
            case "buttons":
                var items = item.items || [];
                $.each(items, function (idx, val) {
                    var cls = ((val.cls === undefined) ? "" : " " + val.cls);
                    html += "<input class='button small" + cls + "' type='" + (val.type || "button") +
                            "' name='" + val.name + "' id='" + val.name + "' value='" + val.text + "'/>"
                });
                break;
            case "select":
                html = "<select name='" + item.name + "' id='" + item.name + "' " + required + ">" +
                       "<option>" + item.opt_text + "</option>" + this.generateOption(item) +
                       "</select>";
            case "dropdown":
                html = "<select name='" + item.name + "' id='" + item.name + "' " + required + ">" +
                       "<option>" + item.opt_text + "</option>" + this.generateOption(item) +
                       "</select>";
                break;
            case "controls":
                var items = item.items || [];
                $.each(items, function (idx, val) {
                    var item_readonly = ((val.readonly || false) ? " readonly='readonly'" : "");
                    html += "<div class=\"" + (val.cls || "") + "\"><input type=\"text\"" + item_readonly + "/></div>";
                });
                html = "<div class=\"controls-wrapper\">" + html + "</div>";
                break;
            case "panel":
                html = "<div class=\"panel\"></div>";
                break;
            default:
                html = "<input type='" + type + "' name='" + item.name + "' id='" + item.name + "'" + required + readonly + "/>";
                break;
        }

        return "<div>" + html + "</div>";
    };

    this.generateOption = function (item) {
        var items = item.items || [];
        var html = "";

        $.each(items, function (idx, val) {
            html += "<option val='" + (val.name || "") + "'>" + (val.text || "") + "</option>"
        });

        return html;
    }
};


