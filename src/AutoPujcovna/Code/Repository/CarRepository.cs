using AutoPujcovna.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AutoPujcovna.Code.Repository
{
    public class CarRepository
    {
        private List<Car> _cars;
        private int _iDcount;

        public CarRepository()
        {
            _cars = new List<Car>();
            _iDcount = 1;
            _cars.Add(new Car { ID = 1, Name = "skoda", LicencePlate = "5E5-2222" });
        }

        public List<Car> GetAll()
        {
            return _cars;
        }

        public void Save(Car car)
        {
            if (car != null)
            {
                car.ID = ++_iDcount; // generate by DB
                _cars.Add(car);
            }
                
        }

        public Car Get(int id)
        {
            return _cars.Find(x => x.ID == id);
        }

    }
}
