import axios from 'axios';
import { createContext, useState } from 'react';

export const AuhtContext = createContext({});

export default function AuthProvider({ children }: any) {
  const [reponseUpdate, setResponseUpdate] = useState({});
  async function createUser({ name, email, document_number }: any) {
    try {
      await axios({
        method: 'post',
        url: 'https://sleepy-waters-97406.herokuapp.com/api/associados',
        data: {
          data: {
            name: name,
            email: email,
            document_number: document_number
          }
        }
      });
      console.log('successo');
      window.location.reload();
    } catch (error) {
      console.log(error);
      console.log('falha');
    }
  }
  async function updateUser({ name, email, document_number, id }: any) {
    try {
      await axios({
        method: 'put',
        url: `https://sleepy-waters-97406.herokuapp.com/api/associados/${id}`,
        data: {
          data: {
            name: name,
            email: email,
            document_number: document_number
          }
        }
      }).then(function (response) {
        console.log(response, 'Auth');
        setResponseUpdate(response?.data?.data);
        window.location.reload();
      });
      console.log('successo');
    } catch (error) {
      console.log(error);
      console.log('falha');
    }
  }
  async function deleteUser({ id }: any) {
    console.log(deleteUser, 'delete');
    try {
      await axios({
        method: 'delete',
        url: `https://sleepy-waters-97406.herokuapp.com/api/associados/${id}`
      });

      console.log('successo');
    } catch (error) {
      console.log(error);
      console.log('falha');
    }
  }
  return (
    <AuhtContext.Provider value={{ createUser, updateUser, reponseUpdate, deleteUser }}>
      {children}
    </AuhtContext.Provider>
  );
}
