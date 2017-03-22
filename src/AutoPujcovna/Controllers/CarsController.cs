using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AutoPujcovna.Code.Core;
using AutoPujcovna.Models;
using AutoPujcovna.Code.Repository;

using System.Text;
using System.Net.Http;
using System.Net;
using System.Web.Http;
using Newtonsoft.Json.Linq;

namespace AutoPujcovna.Controllers
{
    [Route("api/[controller]")]
    public class CarsController : ApiController
    {
        private CarRepository _carRepository;
        public CarsController(CarRepository carRepository)
        {
            if(_carRepository == null)
            {
                this._carRepository = carRepository;
            }
           
        }

        [HttpGet]
        public ResponseMessage<Car> Get()
        {
            ResponseMessage<Car> response = new ResponseMessage<Car>();
            try
            {
                response.Items = this._carRepository.GetAll();
                response.Status = HttpStatusCode.OK;
            }
            catch (Exception ex)
            {
                //_loggingRepository.Add(new Error() { Message = ex.Message, StackTrace = ex.StackTrace, DateCreated = DateTime.Now });
                response.Status = HttpStatusCode.InternalServerError;
            }

            return response;
        }
        [HttpPost("saveCar")]
        public ResponseMessage<Car> SaveCar([FromBody]Car car)
        {
            ResponseMessage<Car> response = new ResponseMessage<Car>();
            try
            {
                this._carRepository.Save(car);
                response.Status = HttpStatusCode.OK;
                return response;
            }
            catch (Exception ex)
            {
                response.Status = HttpStatusCode.InternalServerError;
                //_loggingRepository.Add(new Error() { Message = ex.Message, StackTrace = ex.StackTrace, DateCreated = DateTime.Now });
            }
            return response;
        }
    }
}
