using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace GeLang.Web.Models
{
    [Table("Menu")]
    public class Menu
    {
        [Key]
        public string MenuId { get; set; }
        public string MenuName { get; set; }
        public string MenuHeader { get; set; }
        public int MenuIndex { get; set; }
        public string MenuIcon { get; set; }
        public string MenuUrl { get; set; }
    }
}