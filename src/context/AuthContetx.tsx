import api from '@/services/axios';
import axios from 'axios';
import { Children, createContext, useEffect, useState } from 'react';

export const AuhtContext = createContext({});

export default function AuthProvider({ children }: any) {
  const [getUser, setGetUser] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      await axios({
        method: 'get',
        url: 'http://localhost:1337/api/associados'
      }).then(function (response) {
        setGetUser(response.data.data);
      });
    };
    fetchData().catch();
  }, [getUser]);

  async function createUser({ name, email, document_number }: any) {
    try {
      await axios({
        method: 'post',
        url: 'http://localhost:1337/api/associados',
        data: {
          data: {
            name: name,
            email: email,
            document_number: document_number
          }
        }
      });
      console.log('successo');
    } catch (error) {
      console.log(error);
      console.log('falha');
    }
  }
  async function updateUser({ name, email, document_number, id }: any) {
    try {
      await axios({
        method: 'put',
        url: `http://localhost:1337/api/associados/${id}`,
        data: {
          data: {
            name: name,
            email: email,
            document_number: document_number
          }
        }
      });
      console.log('successo');
    } catch (error) {
      console.log(error);
      console.log('falha');
    }
  }
  return (
    <AuhtContext.Provider value={{ getUser, createUser, updateUser }}>
      {children}
    </AuhtContext.Provider>
  );
}
