namespace server.Models;

public class ContactMessage {
  public long Id { get; set; }
  public string Name { get; set; } = null!;
  public string Email { get; set; } = null!;
  public string Message { get; set; } = null!;
}