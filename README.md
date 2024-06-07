# Setup Instructions

# 1. Clone the Repository:
git clone repository-url

# 2. Install Dependencies:
cd frontend
npm install

# 3. Set Up Environment Variables:
If you're using an API to fetch weather data, ensure you have an API key.
Create a .env file in the frontend directory.
Add the following variables:
REACT_APP_WEATHER_API_KEY=<your-weather-api-key>

# 4. Start the Development Server:
 npm start



# 5. Technological Choices

Frontend: React.js

React.js was chosen for its component-based architecture, which allows for modular development and easy management of state.
Additional libraries and tools such as React Router and Axios are used for routing and HTTP requests, respectively.


# Weather API:

The application utilizes a weather API (e.g., OpenWeatherMap) to fetch real-time weather data for various locations.
The chosen API is integrated into the frontend to provide users with accurate and up-to-date weather information.
Deployment Process
Frontend Deployment
The frontend is deployed using Vercel, a cloud platform for static sites and serverless functions. The deployment process involves:

# Configuration:

Set up a Vercel account and create a new project.
Link the project to your GitHub repository for automatic deployments.


# Environment Variables:

Configure environment variables such as REACT_APP_WEATHER_API_KEY in the Vercel dashboard.


# Deployment:

Trigger automatic deployments whenever changes are pushed to the main branch.
Vercel automatically builds and deploys the frontend application whenever changes are detected in the repository.
Monitoring and Maintenance:
