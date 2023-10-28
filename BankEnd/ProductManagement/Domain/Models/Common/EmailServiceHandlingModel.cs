using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models.Common
{
    public class EmailServiceHandlingModel
    {
        public string From { get; set; } = string.Empty;
        public string To { get; set; } = string.Empty;
        public string Bcc { get; set; } = string.Empty;
        public string Subject { get; set; } = string.Empty;
        public string Body { get; set; } = string.Empty;
    }
}
