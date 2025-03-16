// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;
// using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactsController(PortfolioContext context) : ControllerBase {
        // GET: api/Contacts
        /**
         * [HttpGet] states that this is the GET method, for the controllers root path.
         * It's a public async method. The return typing reflects the following information
         * It returns the result of the get action, which will be an enumerable list of ContactMessage objects.
         */
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ContactMessage>>> GetContactItems()
        {
            return await context.ContactItems.ToListAsync();
        }

        // GET: api/Contacts/5
        [HttpGet("{id:long}")]
        public async Task<ActionResult<ContactMessage>> GetContactItem(long id)
        {
            var contactItem = await context.ContactItems.FindAsync(id);

            if (contactItem == null)
            {
                return NotFound();
            }

            return contactItem;
        }

        // PUT: api/Contacts/5
        // To protect from over-posting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id:long}")]
        public async Task<IActionResult> PutContactItem(long id, ContactMessage contactMessage)
        {
            if (id != contactMessage.Id)
            {
                return BadRequest();
            }

            context.Entry(contactMessage).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContactItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Contacts
        // To protect from over-posting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ContactMessage>> PostContactItem(ContactMessage contactMessage)
        {
            context.ContactItems.Add(contactMessage);
            await context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetContactItem), new { id = contactMessage.Id }, contactMessage);
        }

        // DELETE: api/Contacts/5
        [HttpDelete("{id:long}")]
        public async Task<IActionResult> DeleteContactItem(long id)
        {
            var contactItem = await context.ContactItems.FindAsync(id);
            if (contactItem == null)
            {
                return NotFound();
            }

            context.ContactItems.Remove(contactItem);
            await context.SaveChangesAsync();

            return NoContent();
        }

        private bool ContactItemExists(long id)
        {
            return context.ContactItems.Any(e => e.Id == id);
        }
    }
}
