import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { app } from "../../firebase/firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);

  const auth = getAuth(app);
  const googleProdiver = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProdiver)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleGitLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        console.log("log out success");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      {!user ? (
        <div>
          <h1 style={{ textAlign: "center" }}>Login</h1>
          <div>
            <button onClick={handleGoogleLogin}>Google Login</button>
            <button onClick={handleGitLogin}>Github Login</button>
          </div>
        </div>
      ) : (
        <button onClick={handleLogOut}>Sign Out</button>
      )}
      {user && (
        <div>
          <h1>Welcome {user.displayName}</h1>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
