### Backend Details:

**Title:** Build a Help Center API

**Objective:**  
The objective of this assignment is to create a RESTful API that allows users to manage "Help Center" cards. These cards represent different sections of a help center, such as "Branches," "Manage Your Account," "Manage Billing," etc. The API should allow users to create, retrieve these cards.

1. **Created a Card Model:**

   - Designed a model for a card. Each card has the following fields (Used MongoDB as the database and Mongoose as the ODM):
     - `_id` (string): A unique identifier for the card automatically set when a card is created in the database.
     - `title` (string): The title of the card (e.g., "Branches").
     - `description` (string): A brief description of what the card represents (e.g., "Abstract Branches lets you manage, version, and document your designs in one place.").

2. **API Endpoints Created:**

   - **Health Check:** Endpoint to check if the server is running
     - `GET /ping`: Returns a response with `status: true` if the server is running
   - **Create a card:** Endpoint to add a new card to the help center.
     - `POST /cards`: This accepts the card details (title, description) in the request body and creates a new card.
   - **Get all cards:** Endpoint to retrieve all the cards.
     - `GET /cards`: This returns a list of all cards in the help center.
   - **Get a specific card:** Create an endpoint to retrieve the details of a single card by its title.
     - `GET /cards/:title`: This should return the details of a specific card.

3. **Error Handling:**
   - **Non-existing card:** Implemented error handling for the `GET /cards/:title` endpoint if no such card exists in the database.
   - **Validation Errors:** Implemented validation errors for the `POST /cards` endpoint.
   - **Server Errors:** Implemented Server Errors for all API endpoints.
