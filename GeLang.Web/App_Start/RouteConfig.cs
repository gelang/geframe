using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace GeLang.Web
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(name: "template", url: "tmpl/{action}/{id}", defaults: new { controller = "Template", id = UrlParameter.Optional });
            routes.MapRoute(name: "secure", url: "secure/{id}", defaults: new { controller = "home", action = "secure", id = UrlParameter.Optional });
            routes.MapRoute(name: "Default", url: "{controller}/{action}/{id}", defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional });
        }
    }
}