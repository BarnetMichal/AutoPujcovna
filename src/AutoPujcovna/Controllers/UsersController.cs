using AutoPujcovna.Code.Core;
using AutoPujcovna.Code.Repository;
using AutoPujcovna.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;

namespace AutoPujcovna.Controllers
{
    [Route("api/[controller]")]
    public class UsersController : ApiController
    {
        private UserRepository _UserRepository;
        public UsersController(UserRepository UserRepository)
        {
            if (_UserRepository == null)
            {
                this._UserRepository = UserRepository;
            }

        }

        [HttpGet]
        public ResponseMessage<User> Get()
        {
            ResponseMessage<User> response = new ResponseMessage<User>();
            try
            {
                response.Items = this._UserRepository.GetAll();
                response.Status = HttpStatusCode.OK;
            }
            catch (Exception ex)
            {
                //_loggingRepository.Add(new Error() { Message = ex.Message, StackTrace = ex.StackTrace, DateCreated = DateTime.Now });
                response.Status = HttpStatusCode.InternalServerError;
            }

            return response;
        }
        [HttpPost("saveUser")]
        public ResponseMessage<User> SaveUser([FromBody]User User)
        {
            ResponseMessage<User> response = new ResponseMessage<User>();
            try
            {
                this._UserRepository.Save(User);
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
