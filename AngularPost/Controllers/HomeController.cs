using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace AngularPost.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            return View();
        }

        [ValidateAntiForgeryToken]
        public ActionResult Save1(CustomerVm customer)
        {
            //TODO: Do some stuffs...

            return new HttpStatusCodeResult(HttpStatusCode.OK);
        }

        public ActionResult Save2(FormCollection customer)
        {
            //TODO: Do some stuffs...

            return new HttpStatusCodeResult(HttpStatusCode.OK);
        }

    }

    public class CustomerVm
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
