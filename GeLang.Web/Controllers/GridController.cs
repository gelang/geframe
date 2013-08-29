using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GeLang.Web.Controllers
{
    public class GridController : BaseController
    {
        public string User()
        {
            return HtmlRender("pnlControl", "grid/user.js");
        }

        public string Role()
        {
            return HtmlRender("pnlControl", "grid/role.js");
        }

        public string Menu()
        {
            return HtmlRender("pnlControl", "grid/menu.js");
        }
    }
}
