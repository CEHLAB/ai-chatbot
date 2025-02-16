
AI Chatbot Application

This project is a simple AI chatbot application that allows users to chat with an AI assistant. The backend server is built using Node.js, Express, and communicates with a chatbot API to generate responses. The frontend is a React app with Bootstrap styling for a responsive interface.

Features:

- AI chatbot that responds to user messages.
- User-friendly interface built with React and Bootstrap.
- Backend server in Node.js handling API requests.

Technologies Used:

- Frontend:
  - React.js
  - React-Bootstrap
  - Axios (for making API requests)
  - React hooks (useState, useEffect, useRef)
  
- Backend:
  - Node.js
  - Express.js
  - dotenv (for environment variables)

Setup Instructions:

1. Clone the repository

git clone https://github.com/CEHLAB/ai-chatbot.git
cd ai-chatbot

2. Install Backend Dependencies

Navigate to the 'server' folder and install the necessary dependencies:

cd server
npm i

3. Configure Environment Variables

Create a .env file in the 'server' directory and add your API key for the chatbot service.

DEEPSEEK_API_KEY='your-api-key-here'
PORT='choose a port'
SERVER_URL="http://localhost: PORT "

4. Start the Backend Server

In the 'server' folder, run the following command to start the server:

npm run dev

The server will run on http://localhost:5500.

5. Install Frontend Dependencies

Navigate to the 'client' folder and install the necessary dependencies:

cd client
npm i

6. Start the Frontend Application

In the 'client' folder, run the following command to start the React app:

npm run dev

The React app will run on http://localhost:5173.

7. Access the Application

- Open your browser and go to http://localhost:5173.
- Chat with the AI assistant via the chat interface.

Usage:

- Type your message into the input field and click the send button.
- The bot will process the message and respond accordingly.
- The conversation will be displayed in the chat window.

API:

- POST /api/v1/chat: Sends a message to the backend and gets a response from the chatbot API.

Example request body:

{
  "message": "Hello, chatbot!"
}


