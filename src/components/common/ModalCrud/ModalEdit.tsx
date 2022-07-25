import { Fragment, useCallback, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import FormEdit from '../Form/FormEdit';

interface IModalEdit {
  open: boolean;
  setOpen: any;
  itemData: any;
  accountId: any;
  updateUser: any;
}

export default function ModalCrud({
  open,
  setOpen,
  accountId,
  itemData,
  updateUser
}: IModalEdit) {
  
  const onSubmit = useCallback(async (FormData: any) => {
    const id = accountId;
    const name = FormData.name;
    const email = FormData.email;
    const document_number = FormData.document_number;
    const response = await updateUser({
      name,
      email,
      document_number,
      id
    });
  }, []);
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed z-10 inset-0 overflow-y-auto'>
          <div className='flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6'>
                <div className='shadow overflow-hidden sm:rounded-md'>
                  <div className='px-4 py-5 bg-white sm:p-6'>
                    <FormEdit
                      onSubmit={onSubmit}
                      accountId={accountId}
                      itemData={itemData}
                    />
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
