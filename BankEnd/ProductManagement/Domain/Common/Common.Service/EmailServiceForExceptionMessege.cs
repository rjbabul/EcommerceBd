

using Domain.Common.Common.Service.Abstraction;
using Domain.Models.Common;
using MailKit.Net.Smtp;
using Microsoft.Extensions.Configuration;
using MimeKit;
using MimeKit.Text;

namespace Domain.Common.Common.Service
{
    public class EmailServiceForExceptionMessege : IEmailServiceForExceptionMessege
    {
        private readonly IConfiguration _config;

        public EmailServiceForExceptionMessege(IConfiguration config)
        {
            _config = config;
        }

        public async Task SendEmailAsync(EmailServiceHandlingModel emailServiceHandlingModel)
        {
            using var smtp = new SmtpClient();

            try
            {
                var email = new MimeMessage();
                string[] senderMailList = emailServiceHandlingModel.From.Split(",");
                foreach (string senderMail in senderMailList)
                {
                    email.From.Add(MailboxAddress.Parse(senderMail));
                }
                string[] receiverMailList = emailServiceHandlingModel.To.Split(",");
                foreach (string emailAddress in receiverMailList)
                {
                    email.To.Add(MailboxAddress.Parse(emailAddress));
                }
                email.Subject = emailServiceHandlingModel.Subject;
                email.Body = new TextPart(TextFormat.Text) { Text = emailServiceHandlingModel.Body };
                
                smtp.Connect(_config.GetSection("EmailHost").Value, 587, MailKit.Security.SecureSocketOptions.StartTls);
                smtp.Authenticate(_config.GetSection("EmailUsername").Value, _config.GetSection("EmailPassword").Value);
                 
                await smtp.SendAsync(email);
            }
            catch
            {
                throw ;
            }
            finally
            {
                smtp.Dispose();
            }
        }
        
        public void SendErrorMessage(string strError)
        {
            try
            {
                string[] message = strError.Split(",");
                using var smtpMail = new SmtpClient();
                 
                string strMailSentBody = "statusCode : "  + message[0]+
                                         "\nMessage : "+ message[1] + 
                                        "\nTime: " + DateTime.Now;

                if (strMailSentBody != "" || strMailSentBody != null)
                {
                    string Subject = "Error Occurse";
 
                    EmailServiceHandlingModel MyMail = new EmailServiceHandlingModel()
                    {
                        From = "Babul<babul.pust@gmail.com>",
                        To = "Babul<babul@bdjobs.com>, Babul2<rjbabul420@gmail.com>",
                        Subject = Subject,
                        Body = strMailSentBody,
                        Bcc = ""
                    };
                     
                    SendEmailAsync(MyMail).Wait();
                }
            }
            catch
            {
                throw new Exception("2,Database Error.");
            }
        }
    }

}
