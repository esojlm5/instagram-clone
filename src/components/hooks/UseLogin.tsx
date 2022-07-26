import React, { useEffect, useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { userLogin } from '../../types/userTypes'
import { stringify, stringLength } from '@firebase/util';

const UseLogin = ({ email, password }: userLogin) => {
  const [login, setLogin] = useState(false);

  useEffect(() => {
  }, [])

  return (
    <div>UseLogin</div>
  )
}

export default UseLogin
