import React, { useEffect, useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { userLogin } from '../../types/userTypes'
import { stringify, stringLength } from '@firebase/util';

const UseLogin = ({ email, password }: userLogin) => {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    type userCredentialss = string;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setLogin(user: userCredentialss);
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
  }, [])

  return (
    <div>UseLogin</div>
  )
}

export default UseLogin
