namespace server.Models;

public class Project {
  public long Id { get; set; }
  public string Title { get; set; } = null!;
  public string Description { get; set; } = null!;
  public bool IsFeatured { get; set; }
  public string Image { get; set; } = null!;
  public ProjectLink[] Links { get; set; } = null!;
}

public class ProjectLink {
  public long Id { get; set; }
  public string Title { get; set; } = null!;
  public string Link { get; set; } = null!;
}