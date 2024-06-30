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

## Instructions

1. **Setup:**

   - Clone this repository.
   - Install dependencies for both the React and Vith app and Node.js backend (excluding node modules).

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

4. **Contact:**
   - For any issues or questions, please contact yonatantaub36@gmail.com.
