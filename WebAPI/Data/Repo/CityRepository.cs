using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Data.Repo
{
    public class CityRepository : ICityRepository
    {
        private readonly DataContext dataContext;
        public CityRepository(DataContext dataContext)
        {
           this.dataContext = dataContext; 
        }

        public void AddCity(City city)
        {
            dataContext.Cities.AddAsync(city);
        }

        public void DeleteCity(int id)
        {
            var city = dataContext.Cities.Find(id);
            dataContext.Cities.Remove(city);
        }

        public async Task<IEnumerable<City>> GetCitiesAsync()
        {
            return await dataContext.Cities.ToListAsync();
        }
    }
}