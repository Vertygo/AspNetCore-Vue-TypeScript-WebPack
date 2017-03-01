using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Controllers
{
   [Route("api")]
   public class ApiController : Controller
   {
	  [Route("hello")]
	  [HttpGet]
	  public IActionResult Hello()
	  {
		 var msg = new { Message = "Test Hello World" };
		 return this.Ok(msg);
	  }
   }
}
