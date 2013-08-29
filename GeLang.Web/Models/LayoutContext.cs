using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace GeLang.Web.Models
{
    public class LayoutContext : DbContext
    {
        public IDbSet<Menu> Menus { get; set; }
    }
}