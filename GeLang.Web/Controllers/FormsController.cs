using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GeLang.Web.Controllers
{
    public class FormsController : BaseController
    {
        public string Contact()
        {
            return HtmlRender("pnlControl", "forms/contact.js");
        }

        public string Feedback()
        {
            return HtmlRender("pnlControl", "forms/feedback.js");
        }

        public string Register()
        {
            return HtmlRender("pnlControl", "forms/register.js");
        }

        public string Invoice()
        {
            return HtmlRender("pnlControl", "forms/invoice.js");
        }
    }
}
