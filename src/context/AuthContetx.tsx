import api from '@/services/axios';
import axios from 'axios';
import { Children, createContext, useEffect, useState } from 'react';

export const AuhtContext = createContext({});

export default function AuthProvider({ children }: any) {
  const [getUser, setGetUser] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      await axios({
        method: 'get',
        url: 'http://localhost:1337/api/associados'
      }).then(function (response) {
        console.log(response);
        setGetUser(response);
      });
    };
    fetchData().catch();
  }, [getUser]);
  //   async function getUsers() {
  //     await axios({
  //       method: 'get',
  //       url: 'http://localhost:1337/api/associados'
  //     }).then(function (response) {
  //       console.log(response);
  //       setGetUser(response);
  //     });
  //   }

  return <AuhtContext.Provider value={{ getUser }}>{children}</AuhtContext.Provider>;
}
