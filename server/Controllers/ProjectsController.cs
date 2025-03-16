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
    public class ProjectsController(PortfolioContext context) : ControllerBase {
        // GET: api/ProjectItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Project>>> GetProjectItems()
        {
            return await context.ProjectItems.ToListAsync();
        }

        // GET: api/ProjectItems/5
        [HttpGet("{id:long}")]
        public async Task<ActionResult<Project>> GetProjectItem(long id)
        {
            var projectItem = await context.ProjectItems.FindAsync(id);

            if (projectItem == null)
            {
                return NotFound();
            }

            return projectItem;
        }

        // PUT: api/ProjectItems/5
        // To protect from over-posting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id:long}")]
        public async Task<IActionResult> PutProjectItem(long id, Project project)
        {
            if (id != project.Id)
            {
                return BadRequest();
            }

            context.Entry(project).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProjectItemExists(id))
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

        // POST: api/ProjectItems
        // To protect from over-posting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Project>> PostProjectItem(Project project)
        {
            context.ProjectItems.Add(project);
            await context.SaveChangesAsync();

            return CreatedAtAction("GetProjectItem", new { id = project.Id }, project);
        }

        // DELETE: api/ProjectItems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProjectItem(long id)
        {
            var projectItem = await context.ProjectItems.FindAsync(id);
            if (projectItem == null)
            {
                return NotFound();
            }

            context.ProjectItems.Remove(projectItem);
            await context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProjectItemExists(long id)
        {
            return context.ProjectItems.Any(e => e.Id == id);
        }
    }
}
