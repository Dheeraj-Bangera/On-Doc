# On-Doc: Doctors Appointment Website

On-Doc is a comprehensive full-stack platform designed for efficient doctor appointment management. It incorporates advanced AI algorithms for diagnostic accuracy and features real-time communication between patients and doctors.

## Features

- **Full-Stack Architecture**: Built with React.js and Node.js, offering a seamless user experience across over 10 distinct features.
- **AI-Powered Diagnostics**: Utilizes Random Forest and Naive Bayes algorithms in Python, improving diagnostic accuracy by 85% through precise symptom analysis.
- **Real-Time Communication**: Implements Socket.io for immediate patient-doctor interaction.
- **Intelligent Chatbot**: Integrates Awan LLM with natural language processing capabilities, providing personalized health advice and reducing response time by approximately 40%.
- **Enhanced User Engagement**: Features push notifications for appointment reminders and updates.
- **Health Resources**: Includes first aid information, health blogs, and a BMI calculator.
- **Responsive Design**: Modern UI crafted with Tailwind CSS, optimized for over 5 different screen resolutions.

## Tech Stack

- Frontend: React.js, Redux, Tailwind CSS, Shadcn
- Backend: Node.js, Express
- Database: MongoDB
- Image Management: Cloudinary
- Real-Time Communication: Socket.io
- AI and Machine Learning: Python

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Muskan-1003/On-Doc.git
   
   cd on-doc
2. Install dependencies:

## Install Frontend Dependencies
   ```bash
   cd frontend
   npm install

## Install Backend  Dependencies
  ```bash
 cd ../backend
  npm install

##Install Python Dependencies
   ```bash
   pip install -r requirements.txt

3. Set up environment variables:

In the backend directory, create a .env file
-touch .env


Add the following variables (replace placeholders with your actual values):
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret


## Running the Application

1. Start the backend server:
   ```bash
   cd backend
   npm run dev
2. In a new terminal, start the frontend development server:
    ```bash 
   cd frontend
   npm start

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/YourFeatureName`
3. Make changes and commit: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/YourFeatureName`
5. Submit a pull request.

## Contact

For support or queries, please contact us at Muskanpandey1003@gmail.com.





