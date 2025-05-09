# React-native-bookrec-app

The files is divided into two parts the backend and the frontend

### Backend
dependencies used include

- **Express**
-  **Mongoose**- using mongoDb for the database 
- **dotenv** - Allow all variables to be accessed from a .env file
- **jsonwebtoken** - used for authentication
- **cloudinary** - for uploading images
- **bcryptjs** - for password hashing
- **cors** - to get rid of cors errors
- **nodemon** 


- **Dicebear.com** - for user avatars
- **Zustand** - Library to create global state 
```
npm install zustand
```

- **Async Storage** - This is like a small cabinet for storing app data, like localstorage
more info : [https://www.npmjs.com/package/@react-native-async-storage/async-storage][link]
```
npm i @react-native-async-storage/async-storage
```

- **Cron Jobs** - Use to automate tasks
```
npm i cron
```

### Frontend
For the front end we would be using react native with expo as the framework
Expo: A set of many tools which goals is to facilitate the work of developers using react native

to install
```
npx create-expo@latest

to run expo
npx expo || npx expo start

to use the simulator, you download xcode for ios.
press i after running the command above

```
to install from expo you use
```
npx expo install <package-name>
```