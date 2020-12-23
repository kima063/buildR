using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BuildR.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BuildR.Controllers
{
    [Route("api/[controller]")]
    public class PeriodController : Controller
    {
        readonly AddDBContext Context;
        public PeriodController(AddDBContext context)
            => Context = context;

        // GET: api/<controller>
        [HttpGet]

        public IActionResult GetPeriod()
        {
            var period = Context.period.ToList();
            return Ok(period);
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
