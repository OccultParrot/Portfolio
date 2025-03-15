using Microsoft.EntityFrameworkCore;

namespace server.Models;

public class PortfolioContext: DbContext {
  public PortfolioContext(DbContextOptions<PortfolioContext> options) : base(options) {
    
  }

  public DbSet<ContactMessage> ContactItems { get; set; } = null!;
  public DbSet<Project> ProjectItems { get; set; } = null!;
}