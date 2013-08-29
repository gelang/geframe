using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GeLang.Web.Controllers
{
    public class TemplateController : BaseController
    {
        public string Tmpl1()
        {
            return HtmlRender("pnlControl", "tmpl/tmpl1.js");
        }

        public string Tmpl2()
        {
            return HtmlRender("pnlControl", "tmpl/tmpl2.js");
        }

        public string Tmpl3()
        {
            return HtmlRender("pnlControl", "tmpl/tmpl3.js");
        }

        public string Tmpl4()
        {
            return HtmlRender("pnlControl", "tmpl/tmpl4.js");
        }

        public string Tmpl5()
        {
            return HtmlRender("pnlControl", "tmpl/tmpl5.js");
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
