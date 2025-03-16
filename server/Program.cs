using Microsoft.EntityFrameworkCore;
using server.Models;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// IMPORTANT: We need to set up CORS based on the environment AFTER we have the app variable
builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();
builder.Services.AddDbContext<PortfolioContext>(opt => {
  opt.UseNpgsql(builder.Configuration.GetConnectionString(("DefaultConnection")));
});

var app = builder.Build();

// Configure CORS based on environment - AFTER we have the app variable
if (app.Environment.IsDevelopment())
{
    // Development policy - more permissive
    app.UseCors(policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
}
else
{
    // Production policy - more restrictive
    app.UseCors(policy =>
    {
        // Put the hosted frontend domain here!
        policy.WithOrigins("https://yourdomain.com")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
}

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