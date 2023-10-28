using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Common.Common.Service.Abstraction
{
    public interface IEmailServiceForExceptionMessege
    {
        public void SendErrorMessage(string strError);
    }
}
