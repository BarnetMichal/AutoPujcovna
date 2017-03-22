using AutoPujcovna.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AutoPujcovna.Code.Repository
{
    public class CarRentRepository
    {
        private List<CarRent> _carsRent;
        private int _iDcount;

        public CarRentRepository()
        {
            _carsRent = new List<CarRent>();
        }

        public List<CarRent> GetAll()
        {
            return _carsRent;
        }

        public void Save(CarRent carRent)
        {
            if (carRent != null)
            {
                _carsRent.Add(carRent);
            }

        }
        public void Delete(int idUser , int idCar)
        {
            if (idUser > 0 && idCar > 0)
            {
                var carrent =_carsRent.Where(x => x.car.ID == idCar && x.user.ID == idUser).FirstOrDefault();
                if (carrent != null)
                    _carsRent.Remove(carrent);
            }

        }

    }
}
