using Microsoft.EntityFrameworkCore;
using server.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();
builder.Services.AddDbContext<PortfolioContext>(opt => {
  opt.UseInMemoryDatabase("ContactList");
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment()) {
  app.MapOpenApi();
  app.UseSwaggerUi(options => { options.DocumentPath = "/openapi/v1.json"; });
  
  Console.BackgroundColor = ConsoleColor.Yellow;
  Console.ForegroundColor = ConsoleColor.Black;
  Console.WriteLine("Go to /swagger to see the Swagger UI for testing the API.");
  Console.ResetColor();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
