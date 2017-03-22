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
    public class CarRentController : ApiController
    {
        private CarRentRepository _carRenRepository;
        public CarRentController(CarRentRepository carRenRepository)
        {
            if (_carRenRepository == null)
            {
                this._carRenRepository = carRenRepository;
            }

        }

        [HttpGet]
        public ResponseMessage<CarRent> Get()
        {
            ResponseMessage<CarRent> response = new ResponseMessage<CarRent>();
            try
            {
                response.Items = this._carRenRepository.GetAll();
                response.Status = HttpStatusCode.OK;
            }
            catch (Exception ex)
            {
                //_loggingRepository.Add(new Error() { Message = ex.Message, StackTrace = ex.StackTrace, DateCreated = DateTime.Now });
                response.Status = HttpStatusCode.InternalServerError;
            }

            return response;
        }
        [HttpPost("rentCar")]
        public ResponseMessage<CarRent> SaveCarRent([FromBody]CarRent carRent)
        {
            ResponseMessage<CarRent> response = new ResponseMessage<CarRent>();
            try
            {
                this._carRenRepository.Save(carRent);
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
        [HttpDelete("{idUser:int}/{idCar:int}")]
        public ResponseMessage<CarRent> Delete(int idUser, int idCar)
        {
            ResponseMessage<CarRent> response = new ResponseMessage<CarRent>();
            try
            {
                this._carRenRepository.Delete(idUser, idCar);
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
