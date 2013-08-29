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

        // render generic behaviour
        if (!Modernizr.inputtypes.date) {
            $("input[type='date']").addClass("datepicker");
        }
        $(".spinner").spinner();
        $(".select2").select2();
        $(".datepicker").removeClass('hasDatepicker').removeAttr('id').datepicker({
            dateFormat: "dd-MM-yy",
            showOtherMonths: true,
            selectOtherMonths: true,
            changeMonth: true,
            changeYear: true,
            //showOn: "button",
            //buttonImageOnly: true
        });
        //$(".datepicker:not(.hasDatepicker)").datepicker();
        //$(".datepicker").removeClass('hasDatepicker').removeAttr('id').datepicker();
    };

    this.generateForm = function (items, prefix, name) {
        var html = "";
        var self = this;
        var name = ((name == undefined) ? "" : " name=\"" + name + "\" id=\"" + name + "\"");

        $.each(items || [], function (idx, item) {
            var cls = ((item.cls === undefined) ? "" : " class='" + item.cls + "'");
            html += "<div" + cls + ">" + self.generateLabel(item) + self.generateInput(item) + "</div>";
        });

        return "<form class=\"form\"" + name + ">" + (prefix || "") + html + "</form>";
    };

    this.generatePanel = function (items, prefix) {
        var html = "";
        var self = this;

        $.each(items || [], function (idx, item) {
            var cls = ((item.cls === undefined) ? "" : " class='" + item.cls + "'");
            html += "<div" + cls + ">" + self.generateLabel(item) + self.generateInput(item) + "</div>";
        });

        return "<div class=\"panel\">" + (prefix || "") + html + "</div>";
    };

    this.generatePanels = function (panels) {
        var html = "";
        var self = this;

        $.each(panels || [], function (idx, item) {
            var prefix = "";
            if (item.title !== undefined) {
                prefix += "<div class=\"subtitle\">" + item.title + "</div>"
            }
            else if (idx > 0) {
                prefix += "<div class=\"divider\"></div>"
            }

            if ((item.xtype || "form") === "form") {
                var name = item.name;
                html += self.generateForm(item.items, prefix, name);
            }
            else {
                html += self.generatePanel(item.items, prefix);
            }
        });

        return html;
    };

    this.generateLabel = function (item) {
        var required = item.required || false;
        var html = "<label for='" + (item.name || "") + "'>" + (item.text || "&nbsp;") + ((required) ? " *" : "") + "</label>";

        return html;
    };

    this.generateInput = function (item) {
        var idname = ((item.name == undefined) ? "" : " \" name=\"" + item.name + "\" id=\"" + item.name + "\"");
        var placeHolder = " placeHolder=\"" + ((item.placeHolder || item.text) || "") + "\"";
        var required = ((item.required || false) ? " required=\"required\"" : "");
        var readonly = ((item.readonly || false) ? " readonly=\"readonly\"" : "");
        var attribut = idname + placeHolder + required + readonly;
        var type = item.type || "text";
        var html = "";

        switch (type) {
            case "text":
                html = "<input type=\"text\"" + attribut + "/>";
                break;
            case "textarea":
                html = "<textarea" + attribut + "></textarea>";
                break;
            case "datepickers":
                html = "<div class=\"datepicker-wrapper\"><input type=\"date\" placeholder=\"dd-MMM-yyyy\"" + attribut + "/></div>";
                break;
            case "datepicker":
                html = "<div class=\"datepicker-wrapper\"><input type=\"text\" class=\"datepicker\" placeholder=\"dd-MMM-yyyy\"" + attribut + "/></div>";
                break;
            case "spinner":
                html = "<div class=\"spinner-wrapper\"><input type=\"text\" class=\"spinner\"" + attribut + "/></div>";
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
                html = "<select" + attribut + ">" +
                       "<option>" + (item.opt_text || "[Select One]") + "</option>" + this.generateOption(item) +
                       "</select>";
            case "dropdown":
                html = "<select" + attribut + ">" +
                       "<option>" + (item.opt_text || "[Select One]") + "</option>" + this.generateOption(item) +
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
                html = "<input type=\"" + type + "\"" + idname + placeHolder + required + readonly + "/>";
                break;
        }

        var span = (item.span || false) ? " class=\"span\"" : "";
        return "<div" + span + ">" + html + "</div>";
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

GeLang.Widget.prototype.showToolbars = function (items) {
    $(".page .header .toolbar > div").hide();
    $.each(items, function (idv, val) {
        $(".page .header .toolbar > div." + val).show();
    });
}
