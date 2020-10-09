import React, { useState } from 'react';
import './App.css';
import GoogleLogin from 'react-google-login';

function App() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [profilePic, setProfilePic] = useState();
  const [isLoguedIn, setIsLoguedIn] = useState(false);


  const responseGoogle = (response) => {
    console.log(response);
    const {
      profileObj: { name, email, imageUrl },
    } = response;
    setName(name);
    setEmail(email);
    setProfilePic(imageUrl);
    setIsLoguedIn(true)
  };

  return (
    <div className="container">
      <GoogleLogin
        clientId="573865740494-v8jjhutdt9s76lq9qmgjtiel89pocoh4.apps.googleusercontent.com"
        buttonText="container com o login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}

      />
      {isLoguedIn ? (
        <div>
          <h1>User Information</h1>
          <img src={profilePic} alt="Profile" />
          <p>name: {name}</p>
          <p>Email: {email}</p>
          </div>
      ): (
        ""
      )}

        </div>
      );
}

export default App;
