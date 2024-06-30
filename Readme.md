# Product Management Interface

This project is a web application developed with React and Node.js, designed for managing store products.

## Features

1. **Product Management:**

   - Add, edit, and delete products.
   - Each product is characterized by:
     - Number (read-only, auto-generated).
     - Product Name (text field limited to 50 characters, required).
     - Product Code (positive number or 0, required).
     - Product Description (multi-line text).
     - Product Type (choice between Vegetable, Fruit, or Field Crop).
     - Product Launch Date (date field, defaults to one week before today).

2. **Dynamic Row Operations:**

   - Ability to add and edit rows dynamically at any time.

3. **Data Persistence:**

   - Save data to MongoDB using the following connection string:
     ```
     mongodb+srv://tester:DfMiMaTKofg5kGHZ@cluster0.umpjqhm.mongodb.net/deeplan?retryWrites=true&w=majority&appName=Cluster0
     ```
   - User receives feedback upon successful data save.

4. **Cancel Confirmation:**

   - Includes a cancel button to confirm if the user wants to exit the interface (choice between Yes/No).

5. **Search Mechanism:**

   - Implements a search mechanism to filter items in the list by product name.

6. **Customizable Libraries:**
   - Utilizes any useful libraries for the exercise.

## Instructions

1. **Setup:**

   - Clone this repository.
   - Install dependencies for both the React app and Node.js backend (excluding node modules).

     ```
     # Install server dependencies
     cd server
     npm install

     # Install client dependencies
     cd ../client
     npm install
     ```

2. **Configuration:**

   - Configure database connection details in the Node.js backend using the provided MongoDB connection string.
   - Ensure the environment is set up to run both the React frontend and Node.js backend.

3. **Execution:**

   - Start the Node.js server.
     ```
     # Start server
     cd server
     node index.js
     ```
   - Start the React app.
     ```
     # Start client
     cd client
     npm run dev
     ```
   - Ensure the application runs smoothly on your local environment.

4. **Additional Notes:**

   - Provide database connection details for validation purposes.
   - Ensure the project can be run on different machines for compatibility testing.

5. **Contact:**
   - For any issues or questions, please contact [Your Contact Information].
