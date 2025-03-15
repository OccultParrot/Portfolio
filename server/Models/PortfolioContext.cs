using Microsoft.EntityFrameworkCore;

namespace server.Models;

public class PortfolioContext: DbContext {
  public PortfolioContext(DbContextOptions<PortfolioContext> options) : base(options) {
    
  }

  public DbSet<ContactItem> ContactItems { get; set; } = null!;
  public DbSet<ProjectItem> ProjectItems { get; set; } = null!;
}