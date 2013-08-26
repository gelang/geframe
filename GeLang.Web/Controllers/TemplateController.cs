using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GeLang.Web.Controllers
{
    public class TemplateController : BaseController
    {
        public string Demo()
        {
            return HtmlRender("pnlControl", "tmpl/demo1.js");
        }

        public string Regis1()
        {
            return HtmlRender("pnlControl", "tmpl/regis1.js");
        }

        public string Regis2()
        {
            return HtmlRender("pnlControl", "tmpl/regis2.js");
        }

        public string Receipt()
        {
            return HtmlRender("pnlControl", "tmpl/receipt.js");
        }

        public string ArBkt()
        {
            return HtmlRender("pnlControl", "tmpl/arbkt.js");
        }
    }
}
