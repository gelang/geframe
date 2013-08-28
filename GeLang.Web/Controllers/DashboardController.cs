using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GeLang.Web.Controllers
{
    public class DashboardController : BaseController
    {
        public string Dashboard1()
        {
            return HtmlRender("pnlControl");
        }
    }
}
