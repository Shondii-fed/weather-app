import type { Handler } from '@netlify/functions';

const handler: Handler = async (event) => {
  const location = event.queryStringParameters?.location;

  if (!location) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Location is required" }),
    };
  }

  try {
    const API_KEY = process.env.WEATHER_API_KEY; // 👈 Secure from Netlify
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${API_KEY}&include=days`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }

    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error: unknown) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: typeof error === "object" && error !== null && "message" in error ? (error as { message: string }).message : String(error) }),
    };
  }
};

export { handler };
