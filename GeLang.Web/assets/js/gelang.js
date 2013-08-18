var GeLang = {
    version: "1.0.0",
    baseUrl: "/"
}

GeLang.Layout = function (options) {
    "use strict";

    var _this = this;
    var rendered = false;
    var configured = false;
    var menuMap = {};
    var module = "";
    var menu = "";

    this.render = function (selector) {
        if (rendered) {
            console.log("already rendered...!");
            return;
        }

        selector = selector || "body";

        this.configure(selector);
        this.renderModules(selector, options.modules || []);

        var moduleChanged = [];
        var menuChanged = [];

        this.onModuleChanged = function (callback) { moduleChanged.push(callback); };
        this.onMenuChanged = function (callback) { menuChanged.push(callback); };

        this.onHashChanged(function (e, data) {
            var hashs = data.split("/");
            if (hashs.length > 0) {
                if (hashs[0] === "lnk") {
                    if (hashs.length > 1) {
                        if (module != hashs[1]) {
                            for (var i = 0; i < moduleChanged.length; i++) {
                                moduleChanged[i](e, hashs[1], menuMap[hashs[1]]);
                            }
                            module = hashs[1];
                        }

                        if (menu !== (hashs[2] || "")) {
                            for (var i = 0; i < menuChanged.length; i++) {
                                menuChanged[i](e, (hashs[2] || ""));
                            }
                            menu = hashs[2];
                        }
                    }
                }
            }
        });
        this.onModuleChanged(function (e, data, menus) {
            var menus = menuMap[data];
            _this.renderMenus(selector, menus || []);

            var selected = $(selector + ".gelang .modules li[data-id=\"" + data + "\"]");
            selected.parent().children().removeClass("selected");
            selected.addClass("selected");
        });
        this.onMenuChanged(function (e, data) {
            var selected = $(selector + ".gelang .body .leftmenu li[data-id=\"" + data + "\"]");
            selected.parent().children().removeClass("selected");
            selected.addClass("selected");
        });

        // fixed screen height
        //this.fixedLayout();
        //$(window).resize(function () { _this.fixedLayout(); });

        // update status rendered
        rendered = true;
    }

    this.configure = function (selector) {
        if (configured) {
            console.log("already configured...!");
            return;
        }

        this.onSave = options.onSave;
        this.onDelete = options.onDelete;

        var html = "<div class=\"header\">" +
                     "<div class=\"module\"></div>" +
                     "<div class=\"toolbar\"></div>" +
                   "</div>" +
                   "<div class=\"body\">" +
                     "<div class=\"leftpanel\"><div class=\"leftmenu\"></div></div>" +
                     "<div class=\"mainpanel\">" +
                       "<div class=\"breadcrumbs\"></div><div class=\"pageheader\"></div><div class=\"maincontent\"></div>" +
                     "</div>" +
                   "</div>" +
                   "<div class=\"modules\"></div>" +
                   "<div class=\"footer\"></div>"

        $(selector).empty();
        $(selector).addClass("gelang");
        $(selector).html(html);

        // tracking on changing hash
        var hashChanged = [];
        var hash = "";
        var parse = function (val) {
            if (!val) {
                val = "";
            } else {
                if (val.substring(0, 1) == "#") {
                    val = val.substring(1);
                }
            }
            return val;
        };

        setInterval(function () {
            var newHash = parse(window.location.hash);
            if (hash != newHash) {
                for (var i = 0; i < hashChanged.length; i++) {
                    hashChanged[i](this, newHash);
                }
                hash = newHash;
            }
        }, 100);

        this.onHashChanged = function (callback) { hashChanged.push(callback); };


        // update status configured
        configured = true;
    }

    this.fixedLayout = function () {
        var screenHeight = $(window).height();
        var bodyHeight = (screenHeight - $(".gelang .header").height());
        //$(".gelang .body").css({
        //    height: bodyHeight + "px"
        //});
        console.log($(".gelang .header").height());
        console.log(bodyHeight);
    }

    this.renderModules = function (selector, data) {
        var html = "";
        $.each(data, function (idx, val) {
            html += "<li data-id=\"" + val.name + "\">" + val.text + "</li>";
            menuMap[val.name] = val.menus;
        });
        $(selector + ".gelang .modules").html("<ul>" + html + "</ul>");

        $(selector + ".gelang .modules li").on("click", function () {
            window.location.href = "#lnk/" + ($(this).data("id") || "");
        });
    };

    this.renderMenus = function (selector, data) {
        var html = "";
        $.each(data, function (idx, val) {
            html += "<li data-id=\"" + val.name + "\">" + val.text + "</li>";
        });
        $(selector + ".gelang .body .leftmenu").html("<ul>" + html + "</ul>");

        $(selector + ".gelang .body .leftmenu li").on("click", function () {
            window.location.href = "#lnk/" + (module || "") + "/" + ($(this).data("id") || "");
        });
    };
}
