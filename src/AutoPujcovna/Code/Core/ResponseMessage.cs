using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace AutoPujcovna.Code.Core
{
    public class ResponseMessage<T>
    {
        public IEnumerable<T> Items { get; set; }
        public HttpStatusCode Status { get; set; }
    }
}
