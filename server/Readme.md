Useful console commands to run:

```bash
# Run the server
dotnet run --launch-profile https
```

To make a new controller run the following command, plugging in the correct information:

`dotnet aspnet-codegenerator controller -name [NAME OF CONTROLLER] -async -api -m [MODEL] -dc [CONTEXT] -outDir Controllers`

```bash
# Example:
dotnet aspnet-codegenerator controller -name ProjectItemsController -async -api -m ProjectItem -dc PortfolioContext -outDir Controllers
```