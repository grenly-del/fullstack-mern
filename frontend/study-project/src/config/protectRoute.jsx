import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom'
import { cekToken, cekUserId } from './cekToken'
import ImagePage from '../pages/imagepage'


let PrivateRoutes = () => {

  let token = cekToken()
  let userId = cekUserId()
  let navigate  = useNavigate()

  return (
      token && userId  ? <ImagePage /> : <Navigate to="/auth/login" />
  );
};

export default PrivateRoutes;