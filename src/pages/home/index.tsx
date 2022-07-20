import Header from '@/components/common/Header/Header';
import CrudList from '@/components/common/CrudList/CrudList';
import { useContext, useState } from 'react';
import ModalCrud from '@/components/common/ModalCrud/ModalCrud';
import { AuhtContext } from '@/context/AuthContetx';
import ModalEdit from '@/components/common/ModalCrud/ModalEdit';

// const people = [
//   {
//     name: 'Lindsay Walton',
//     email: 'lindsay.walton@example.com',
//     document: '547.745.987-01'
//   },
//   {
//     name: 'Matheus Felipe do Prado',
//     email: 'matheus.gmail@example.com',
//     document: '444.854.854-00'
//   }
// ];

export default function Home() {
  const [openEdit, setOpenEdit] = useState(false);
  const [accountId, setAccountId] = useState(null);
  const [open, setOpen] = useState(false);
  const { getUser, createUser, updateUser }: any = useContext(AuhtContext);
  const handleOpen = (userId: any) => {
    setOpenEdit(!openEdit);
    setAccountId(userId);
  };
  return (
    <div>
      <div>
        <Header />
      </div>
      <main className='max-w-7xl mx-auto pt-32'>
        <ModalCrud open={open} setOpen={setOpen} createUser={createUser} />
        {getUser.map(
          (itemData: any) =>
            itemData.id === accountId && (
              <ModalEdit
              updateUser={updateUser}
                open={openEdit}
                setOpen={setOpenEdit}
                itemData={itemData}
                accountId={accountId}
              />
            )
        )}
        <CrudList setOpen={setOpen} getUser={getUser} handleOpen={handleOpen} />
      </main>
    </div>
  );
}
