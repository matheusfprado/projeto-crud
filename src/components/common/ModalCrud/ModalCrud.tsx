import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface IModalCrud {
  open: boolean;
  setOpen: any;
}

export default function ModalCrud({ open, setOpen }: IModalCrud) {
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
                <form action='#' method='POST'>
                  <div className='shadow overflow-hidden sm:rounded-md'>
                    <div className='px-4 py-5 bg-white sm:p-6'>
                      <div className='grid grid-cols-6 gap-6'>
                        <div className='col-span-6 sm:col-span-3'>
                          <label
                            htmlFor='first-name'
                            className='block text-sm font-medium text-gray-700'
                          >
                            Name
                          </label>
                          <input
                            type='text'
                            name='first-name'
                            id='first-name'
                            autoComplete='given-name'
                            className='mt-1 w-52 h-10 focus:ring-indigo-500 focus:border-indigo-500 block  shadow-sm sm:text-sm border border-gray-400 rounded-md'
                          />
                        </div>

                        <div className='col-span-6 sm:col-span-3'>
                          <label
                            htmlFor='last-name'
                            className='block text-sm font-medium text-gray-700'
                          >
                            Title
                          </label>
                          <input
                            type='text'
                            name='last-name'
                            id='last-name'
                            autoComplete='family-name'
                            className='mt-1 w-40 h-10 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border border-gray-400 rounded-md'
                          />
                        </div>
                        <div className='col-span-6 sm:col-span-4'>
                          <label
                            htmlFor='email-address'
                            className='block text-sm font-medium text-gray-700'
                          >
                            Email
                          </label>
                          <input
                            type='text'
                            name='email-address'
                            id='email-address'
                            autoComplete='email'
                            className='mt-1 w-96 h-10 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border border-gray-400 rounded-md'
                          />
                        </div>
                        <div className='col-span-6 sm:col-span-3'>
                          <label
                            htmlFor='last-name'
                            className='block text-sm font-medium text-gray-700'
                          >
                            Role
                          </label>
                          <input
                            type='text'
                            name='last-name'
                            id='last-name'
                            autoComplete='family-name'
                            className='mt-1 w-52 h-10 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border border-gray-400 rounded-md'
                          />
                        </div>
                      </div>
                    </div>
                    <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
                      <button
                        type='submit'
                        className='w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
