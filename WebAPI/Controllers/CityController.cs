using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Data;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        private readonly DataContext dataContext;

        public CityController(DataContext dataContext)
        {
            this.dataContext = dataContext;

        }

        // GET /api/city
        [HttpGet("")]
        public async Task<IActionResult> GetCities()
        {
            var cities = await Task.FromResult(dataContext.Cities.ToList());
            return Ok(cities);
        }

        // POST /api/city/add?cityName=<city>
        [HttpPost("add")]
        public async Task<IActionResult> AddCity(string cityName)
        {
            City city = new Models.City();
            city.Name = cityName;
            await dataContext.Cities.AddAsync(city);
            await dataContext.SaveChangesAsync();
            return Ok(city);
        }

    }

}