using GeLang.Grid;
using GeLang.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GeLang.Web.Controllers
{
    public class LayoutController : BaseController
    {
        public JsonResult MenuList()
        {
            var list = ctx.Menus;
            var data = GridControl<Menu>.Parse(list, Request);
            return Json(data);
        }
    }
}
