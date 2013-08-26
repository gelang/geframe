using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GeLang.Web.Controllers
{
    public class AdminController : BaseController
    {
        public string User()
        {
            return HtmlRender("pnlControl", "admin/user.js");
        }

        public string Role()
        {
            return HtmlRender("pnlControl", "admin/role.js");
        }
    }
}
