import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CogIcon, XCircleIcon } from '@heroicons/react/outline';
import { ToastContainer } from 'react-toastify';

interface IcrudList {
  deleteUser: any;
  accountId: any;
  reponseUpdate: any;
  handleOpen: any;
  setOpen: any;
  data: {
    map?: any;
    id?: any;
    attributes?: {
      createdAt?: any;
      document_number?: string;
      email?: string;
      name?: string;
    };
  };
}

export default function CrudList({
  setOpen,
  data,
  handleOpen,
  reponseUpdate,
  deleteUser,
  accountId
}: IcrudList) {
  const deleteId = async (id: any) => {
    window.location.reload();
    await axios.delete(`https://sleepy-waters-97406.herokuapp.com/api/associados/${id}`);
  };
  const [responseId, setResponseId] = useState(data);
  console.log(responseId, 'id');
  useEffect(() => {
    data.map(
      (itemData: any) => accountId === itemData.id && setResponseId(reponseUpdate)
    );
  }, [responseId]);

  return (
    <div className='px-4 sm:px-6 lg:px-8'>
      <ToastContainer />
      <div className='sm:flex sm:items-center'>
        <div className='sm:flex-auto'>
          <h1 className='text-xl font-semibold text-gray-900'>associados</h1>
          <p className='mt-2 text-sm text-gray-700'>lista de clientes</p>
        </div>
        <div className='mt-4 sm:mt-0 sm:ml-16 sm:flex-none'>
          <button
            onClick={() => setOpen(true)}
            type='button'
            className='inline-flex items-center justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto'
          >
            adicionar
          </button>
        </div>
      </div>
      <div className='mt-8 flex flex-col'>
        <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
            <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-300'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'
                    >
                      Nome
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                    >
                      Email
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                    >
                      Documento
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                    >
                      Data de Criação
                    </th>
                    <th scope='col' className='relative py-3.5 pl-3 pr-4 sm:pr-6'>
                      <span className='sr-only'>Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 bg-white'>
                  {data.map((itemData: any) => (
                    <tr key={itemData.id}>
                      <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                        {itemData.attributes.name}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                        {itemData.attributes.email}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                        {itemData.attributes.document_number}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                        {format(new Date(itemData.attributes.createdAt), 'dd/MM/yyyy')}
                      </td>
                      <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'>
                        <button
                          type='button'
                          onClick={() => handleOpen(itemData.id)}
                          className='text-red-500 hover:text-red-700'
                        >
                          <div className='pr-6'>
                            <CogIcon width={20} height={20} />
                          </div>
                          <span className='sr-only'>
                            {reponseUpdate?.attributes?.name || itemData.attributes.name}
                          </span>
                        </button>
                        <button
                          onClick={() => deleteId(itemData.id)}
                          type='button'
                          className='text-red-500 hover:text-red-700'
                        >
                          <XCircleIcon width={20} height={20} />
                          <span className='sr-only'>{deleteUser.itemData?.id}</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
