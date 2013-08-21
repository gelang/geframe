var GeLang = {
    version: "1.0.0",
    baseUrl: "/",
    themes: "gelang"
}

GeLang.Layout = function (options) {
    "use strict";

    var _this = this;
    var isRendered = false;
    var configured = false;
    var menuMap = {};
    var module = "";
    var menu = "";
    var template = "<div class=\"page\">" +
                   "<div class=\"header\">" +
                   "<div class=\"brand\">" +
                   "<div class=\"title\"></div><div class=\"separator\"></div><div class=\"navigation\"></div>" +
                   "</div>" +
                   "<div class=\"module\"></div>" +
                   "<div class=\"toolbar\"></div>" +
                   "<div class=\"profile\"></div>" +
                   "</div>" +
                   "<div class=\"body\">" +
                   "<div class=\"leftpanel\"><div class=\"leftmenu\"></div></div>" +
                   "<div class=\"mainpanel\">" +
                   "<div class=\"breadcrumbs\"></div><div class=\"pageheader\"></div><div class=\"maincontent\"></div>" +
                   "</div></div>" +
                   "<div class=\"modules\"></div>" +
                   "<div class=\"footer\"></div>" +
                   "</div>";

    this.render = function (selector) {
        if (isRendered) {
            console.log("already rendered...!");
            return;
        }

        selector = selector || "body";

        this.configure(selector);
        this.renderModules(selector, options.modules || []);

        var moduleChanged = [];
        var menuChanged = [];
        var rendered = [];

        this.onModuleChanged = function (callback) { moduleChanged.push(callback); };
        this.onMenuChanged = function (callback) { menuChanged.push(callback); };
        this.onRendered = function (callback) { menuChanged.push(callback); };

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
                                menuChanged[i](e, { module: (hashs[1] || ""), menu: (hashs[2] || "") });
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

            var selected = $(selector + " .page .modules li[data-id=\"" + data + "\"]");
            selected.parent().children().removeClass("selected");
            selected.addClass("selected");

            $(selector + " .page .header .brand .title").text(selected.text());
        });
        this.onMenuChanged(function (e, data) {
            if (_this.loadMenu != undefined) {
                var selected = $(selector + " .page .body .leftmenu li[data-id=\"" + data.menu + "\"]");
                _this.loadMenu(selected, data);
            }
        });

        // fixed screen height
        this.fixedLayout();
        $(window).resize(function () { _this.fixedLayout(); });

        // update status rendered
        isRendered = true;
        for (var i = 0; i < rendered.length; i++) {
            rendered[i]();
        }
    }

    this.configure = function (selector) {
        if (configured) {
            console.log("already configured...!");
            return;
        }

        this.onSave = options.onSave;
        this.onDelete = options.onDelete;

        var html = template;

        $(selector).empty();
        $(selector).addClass(GeLang.themes);
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
        var bodyHeight = (screenHeight - $(".page .header").height());

        $(".page .body").css({
            height: bodyHeight + "px"
        });
    }

    this.renderModules = function (selector, data) {
        var html = "";
        $.each(data, function (idx, val) {
            html += "<li class=\"menu\" data-id=\"" + val.name + "\"><label>" + val.text + "</label></li>";
            menuMap[val.name] = val.menus;
        });
        $(selector + " .page .modules").html("<ul>" + html + "</ul>");

        $(selector + " .page .modules li").on("click", function () {
            window.location.href = "#lnk/" + ($(this).data("id") || "");
        });

        $(".page .header .brand .navigation").on("click", function () {
            $(".page .modules").slideDown("fast");
        });

        $(".page .body").on("click", function () {
            $(".page .modules").slideUp("fast");
            $(".page .header .panel.panel-userinfo").slideUp("fast");
        });
        $(".page .modules .menu").on("click", function () {
            $(".page .modules").slideUp("fast");
            var self = $(this);
            setTimeout(function () {
                //window.location.href = "#lnk/" + ($(this).data("id") || "");
            }, 250);
        });
    };

    this.renderMenus = function (selector, data) {
        var html = "";
        $.each(data, function (idx, val) {
            html += "<li data-id=\"" + val.name + "\"><label>" + val.text + "</label></li>";
        });
        $(selector + " .page .body .leftmenu").html("<ul>" + html + "</ul>");

        $(selector + " .page .body .leftmenu li").on("click", function () {
            window.location.href = "#lnk/" + (module || "") + "/" + ($(this).data("id") || "");
        });
    };
}

GeLang.Layout.prototype.loadMenu = function (selected, data) {
    var content = $(".page .body .mainpanel .maincontent");
    var url = GeLang.baseUrl + data.module + "/" + data.menu;
    content.load(url, function (response, status, xhr) {
        if (status === "success") {
            selected.parent().children().removeClass("selected");
            selected.addClass("selected");
        }
    });
}