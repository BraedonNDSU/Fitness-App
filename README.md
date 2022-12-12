# Fitness-App

This Project was created for CSCI 488, Human Computer Interaction, by Braedon Mittelstaedt

Project Requirements:

  1. This project is being ran on Expo, an open-source platform for making native apps. Make sure you have some sort of Expo installed, whether it is an app on your phone or
  a emulator on your computer.
  
  2. This project also uses node.js version 14.18.1, any version of npm should work fine.
  
  3. React Navigation is being used in this project, so make sure to have all the dependencies installed properly before running this application.
  
  4. MaterialCommunity Icons is a package being used in this project, so make sure to have this package installed.
  
  5. This project uses my Firebase credentials. If you want your own credentials, change the firebase.js file, located in the method labeled "firebaseConfig".
  
Running the project

  1. Run the project by using "npx expo start". Do not use "npm expo start", as it will not run the program.
  2. Make sure that your device is connected to expo, whether it is an app or an emulator.
  3. When you run the command in step 1, it gives you different options and steps on how to run the program.
  
Format of the Project

  - All javascript files being used are in the Screens folder except for App.js
  - The App.js file uses a Navigation container, which holds a stack. The stack is used to switch from different screens based on the navigation.
  - All images being used in the project are in the Images folder.
  - SignUpScreen.js and LoginScreen.js are used for the account and authentication
  - Workout.js is used for choosing an exercise. When selected, bring you to a new file based on your input (Strength.js, Running.js, Yoga.js, Nutrition.js)
  - Goals.js is used for keeping track of your goals, AddaGoal.js is used for adding a goal to a database.
  - Profile.js is used to keep track of your account, as well as offer help through FAQ, or a Navigation tutorial.
  - NavigatePage 1 - 7.js is used for the Navigation tutorial, the number represents what page is being represented.
  
  
