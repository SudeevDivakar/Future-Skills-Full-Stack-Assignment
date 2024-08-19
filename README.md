# Help Center API Assignment (Setting Up)

## Instructions to run the Project

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/SudeevDivakar/Future-Skills-Full-Stack-Assignment.git
   cd Future-Skills-Full-Stack-Assignment
   ```

2. **Setting Up the Backend:**

   - Change the Current Working Directory into the `backend` folder and download necessary dependencies

   ```
   cd backend
   npm install
   ```

   - Create a .env file in the `backend` directory

   ```
   touch .env
   ```

   - Open the .env file and enter these values

   ```
   PORT=3000
   NODE_ENV=development
   FRONTEND_HOST=http://localhost:5173
   DB_URL=mongodb://127.0.0.1:27017/FutureSkills
   ```

   - To run the backend server, run the following command:

   ```
   npm run dev
   ```

   - NOTE: You will need MongoDBCompass, NodeJS already downloaded to run the `backend` directory

   - Read `backend.md` for details about the backend server

3. **Setting Up the Frontend:**

   - Open a new terminal (Keep the Backend Server Running on the Previous Terminal) and change the current working directory to the `frontend` folder and download the necessary dependencies

   ```
   cd frontend
   npm install
   ```

   - Create a .env file in the `frontend` directory

   ```
   touch .env
   ```

   - Open the .env file and enter these values

   ```
   VITE_BACKEND_HOST=http://localhost:3000
   ```

   - To run the frontend server, run the following command:

   ```
   npm run dev
   ```

   - Read `frontend.md` for details and images of the frontend

4. **Accessing the Project:**

   - Keep both the frontend & backend terminals running and open up a browser of your choice.

   - Open up the following link on the browser to open the project:

   ```
   http://localhost:5173
   ```
