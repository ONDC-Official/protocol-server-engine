const { checkHealth, JsonResponseToText } = require( "../utils/healthCheck"); 
 const healthCheckAPI = async (req, res) => {
  try {
    // Define the current service and its dependencies
    const currentService = {
      name: "Protocol Server Engine"
    };

    const dependencyServices = [
      {
        name: "Seller Mock Engine",
        url:
          process.env.BACKEND_SERVER_URL + "/health-self" ||
          "http://localhost:7202/health-self",
      },
      {
        name: "Mock Server Utility",
        url: process.env.MOCK_SERVER_UTILITY+"/health-self" || "http://localhost:3000",
      },
    ];

    const healthStatus = await checkHealth(currentService, dependencyServices);
    const textResponse = JsonResponseToText(healthStatus);
    res.status(healthStatus.statusCode).send(textResponse);
  } catch (error) {
    console.error("Error in healthCheckAPI:", error);
    res.status(500).send({
      message: "An error occurred while processing the health check.",
      error: error,
    });
  }
};


module.exports = {healthCheckAPI}