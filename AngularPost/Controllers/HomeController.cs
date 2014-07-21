using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;

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

        public ActionResult Save1(CustomerVm customer)
        {
            //TODO: Do some stuffs...

            return new HttpStatusCodeResult(HttpStatusCode.OK);
        }

        [HttpGet]
        public ActionResult Save2()
        {
            return View();
        }


        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Save2(FormCollection inputRequest)
        {
            //TODO: Do some stuffs...
            var outputRequest = Convert.ToString(inputRequest["jsonRequest"]);
            var model = JsonConvert.DeserializeObject<CustomerVm>(outputRequest);

            return new HttpStatusCodeResult(HttpStatusCode.OK);
        }

    }

    public class CustomerVm
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
