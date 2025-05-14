const { checkHealth, JsonResponseToText } = require( "../utils/healthCheck"); 
 const healthCheckAPI = async (req, res) => {
  try {
    // Define the current service and its dependencies
    const currentService = {
      name: "PROTOCOL_SERVER_ENGINE"
    };

    const dependencyServices = [
      {
        name: "SELLER_MOCK_ENGINE",
        url:
          process.env.BACKEND_SERVER_URL + "/health-self" ||
          "http://localhost:7202/health-self",
      },
      {
        name: "MOCK_SERVER_UTILITY",
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