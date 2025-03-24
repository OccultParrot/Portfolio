using System;

using MailKit.Net.Smtp;
using MailKit;
using MimeKit;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactsController(PortfolioContext context) : ControllerBase {
        // POST: api/Contacts
        // To protect from over-posting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        // When the user posts a message, we send an automated email to the admin (me) with the message, along with the name and email of the user.
        [HttpPost]
        public async Task<ActionResult<ContactMessage>> PostContactItem(ContactMessage contactMessage) {
            try {
                var message = new MimeMessage();
                message.From.Add(new MailboxAddress("Portfolio Contact Attempt", "no.reply.stemlerportfolio@gmail.com"));
                message.To.Add(new MailboxAddress("Admin", "stemlertho@gmail.com"));
                message.Subject = $"Contact Attempt | {contactMessage.Name}";

                message.Body = new TextPart("plain") {
                    Text = $"Name: {contactMessage.Name}\nEmail: {contactMessage.Email}\nMessage: {contactMessage.Message}\n\n\nSent at: {DateTime.Now}\nThis is an automated email. Do not reply."
                };

                using (var client = new SmtpClient()) {
                    await client.ConnectAsync("smtp.gmail.com", 587, false);
                    await client.AuthenticateAsync("no.reply.stemlerportfolio@gmail.com", "bppc vccf dfyk nmbx");
                
                    await client.SendAsync(message);
                    await client.DisconnectAsync(true);
                }

                return Ok();
            }
            catch (Exception e) {
                Console.BackgroundColor = ConsoleColor.Red;
                Console.ForegroundColor = ConsoleColor.White;
                Console.WriteLine("Error has occurred!");
                Console.WriteLine(e.Message);
                
                return BadRequest();
            }
        }
    }
}
