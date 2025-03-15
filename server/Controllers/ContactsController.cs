using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactsController : ControllerBase
    {
        private readonly PortfolioContext _context;

        public ContactsController(PortfolioContext context)
        {
            _context = context;
        }

        // GET: api/Contacts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ContactItem>>> GetContactItems()
        {
            return await _context.ContactItems.ToListAsync();
        }

        // GET: api/Contacts/5
        [HttpGet("{id:long}")]
        public async Task<ActionResult<ContactItem>> GetContactItem(long id)
        {
            var contactItem = await _context.ContactItems.FindAsync(id);

            if (contactItem == null)
            {
                return NotFound();
            }

            return contactItem;
        }

        // PUT: api/Contacts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id:long}")]
        public async Task<IActionResult> PutContactItem(long id, ContactItem contactItem)
        {
            if (id != contactItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(contactItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
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
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ContactItem>> PostContactItem(ContactItem contactItem)
        {
            _context.ContactItems.Add(contactItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetContactItem), new { id = contactItem.Id }, contactItem);
        }

        // DELETE: api/Contacts/5
        [HttpDelete("{id:long}")]
        public async Task<IActionResult> DeleteContactItem(long id)
        {
            var contactItem = await _context.ContactItems.FindAsync(id);
            if (contactItem == null)
            {
                return NotFound();
            }

            _context.ContactItems.Remove(contactItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ContactItemExists(long id)
        {
            return _context.ContactItems.Any(e => e.Id == id);
        }
    }
}
