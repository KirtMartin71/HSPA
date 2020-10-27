using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {

        private readonly IUnitOfWork unitOfWork;

        public CityController(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;

        }

        // GET /api/city
        [HttpGet("")]
        public async Task<IActionResult> GetCities()
        {
            var cities = await unitOfWork.CityRepository.GetCitiesAsync();
            return Ok(cities);
        }

        // Add City with JSON
        [HttpPost("post")]
        public async Task<IActionResult> AddCity(City city)
        {
            unitOfWork.CityRepository.AddCity(city);
            await unitOfWork.SaveAsync();
            return StatusCode(201);
        }

        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteCity(int id)
        {
            unitOfWork.CityRepository.DeleteCity(id);
            await unitOfWork.SaveAsync();
            return StatusCode(201);
        }

    }

}