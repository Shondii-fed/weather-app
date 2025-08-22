import type { Handler } from "@netlify/functions";

const handler: Handler = async (event) => {
  try {
    const location = event.queryStringParameters?.location || "New York";
    const apiKey = process.env.VITE_WEATHER_API_KEY; // stored in Netlify env vars

    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${apiKey}&contentType=json`;

    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error: unknown) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error instanceof Error ? error.message : String(error) }),
    };
  }
};

export { handler };
