using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GeLang.Web.Controllers
{
    public class BaseController : Controller
    {
        protected string HtmlRender(string id, string jsname)
        {
            return string.Format(@"<div id=""{0}"" ></div>", id) +
                   string.Format(@"<script src=""{0}{1}"" type=""text/javascript""><script>", Url.Content("~/assets/js/app/"), jsname);
        }
    }
}
