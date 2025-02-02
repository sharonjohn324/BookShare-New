# BookShare

## Basic Details

### Team Name: Orion

### Team Members

- Sharon Rachel John - Amal Jyothi College of Engineering

### Hosted Project Link

[BookShare](https://book-share-new.vercel.app/)

### Project Description

BookShare is a website that provides a platform for buying and selling used books at affordable prices. The app connects students, book lovers, and budget-conscious readers, allowing them to find and purchase second-hand books easily while also encouraging reusability.

### Problem Statement

Many students and book lovers struggle to find affordable books, while others have used books that go to waste due to a lack of a proper resale platform. Traditional marketplaces are often cluttered, expensive, or unreliable for book transactions. There is a need for a dedicated, user-friendly mobile application that connects buyers and sellers of second-hand books, making books more accessible, affordable, and sustainable.

### Solution

To address the challenges of affordability and accessibility in book purchasing, BookShare provides a dedicated mobile marketplace for buying and selling second-hand books. The app offers a seamless and user-friendly experience where sellers can list books with details and images, and buyers can search, filter, and directly communicate with sellers. The platform promotes cost-effective book exchanges, reduces waste, and encourages a culture of reuse, making books more accessible to students and book lovers.

## Technical Details

### Technologies/Components Used

**Software:**

- HTML, CSS, JavaScript
- Tailwind CSS
- VS Code, GitHub

### Implementation

**Frontend (React.js Setup)**

1. Create the React project:

   ```sh
   npx create-react-app bookshare
   cd bookshare
   ```
2. Install Tailwind CSS:

   ```sh
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init
   ```
3. Create `postcss.config.js`:

   ```js
   module.exports = {
     plugins: {
       tailwindcss: {},
       autoprefixer: {},
     },
   }
   ```
4. Set up Tailwind in `src/index.css`: Add the following Tailwind directives to the `src/index.css` file:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
5. Install Firebase SDK for Authentication and Firestore:

   ```sh
   npm install firebase
   ```

Start the React development server:

npm start
Your React app will now be accessible at http://localhost:3000.

Backend (Node.js Setup)
Initialize the Node.js project: Create a new directory for the backend and initialize a Node.js project:

mkdir bookshare-backend
cd bookshare-backend
npm init -y
Install required dependencies: Install Express.js for handling API requests and Firebase Admin SDK for interacting with Firebase from the server:

npm install express firebase-admin
Create a backend server (index.js): In the bookshare-backend directory, create a new file index.js with the following content:

const express = require('express');
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
admin.initializeApp({
credential: admin.credential.applicationDefault(),
});

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
res.send('BookShare API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
Set up Firebase Admin SDK: Follow the official Firebase Admin SDK setup to configure your Firebase project for backend interactions.

Start the backend server:

node index.js
Your backend server will now be running at http://localhost:5000.

Connecting Frontend with Firebase
Configure Firebase in the Frontend: Create a new file src/firebase.js in your React app and add your Firebase configuration:

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
apiKey: "your-api-key",
authDomain: "your-auth-domain",
projectId: "your-project-id",
storageBucket: "your-storage-bucket",
messagingSenderId: "your-messaging-sender-id",
appId: "your-app-id"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
Use Firebase Authentication and Firestore in your React components to manage users and book listings.

# Run

Frontend (React):
In the bookshare directory, run:

npm start
Your React app will be available at http://localhost:3000.

Backend (Node.js):
In the bookshare-backend directory, run:

node index.js
Your backend server will be available at http://localhost:5000

### Project Documentation

For Software:

# Screenshots

![Screenshot1](./dist/assets/2.png)
*Homepage of BookShare showing the main interface and navigation options*

![Screenshot2](./dist/assets/1.png)
*Book listing page displaying available second-hand books with details*

# Build Photos

![Team](Add photo of your team here)

![Components](Add photo of your components here)
*List out all components shown*

![Build](Add photos of build process here)
*Explain the build steps*

![Final](Add photo of final product here)
*Explain the final build*

### Project Demo

# Video

https://youtu.be/A6-lgRHbY6U
*Explain what the video demonstrates*

## Team Contributions

Sharon Rachel John
------------------

Made with ❤️ at TinkerHub
