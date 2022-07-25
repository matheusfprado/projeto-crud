import Header from '@/components/common/Header/Header';
import CrudList from '@/components/common/CrudList/CrudList';
import { useContext, useEffect, useState } from 'react';
import ModalCrud from '@/components/common/ModalCrud/ModalCrud';
import { AuhtContext } from '@/context/AuthContex';
import ModalEdit from '@/components/common/ModalCrud/ModalEdit';
import axios from 'axios';

export default function Home({ data }: any) {
  const [openEdit, setOpenEdit] = useState(false);
  const [accountId, setAccountId] = useState(null);
  const [open, setOpen] = useState(false);
  const { createUser, updateUser, reponseUpdate, deleteUser }: any =
    useContext(AuhtContext);
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
        {data.map(
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
        <CrudList
          setOpen={setOpen}
          handleOpen={handleOpen}
          data={data}
          reponseUpdate={reponseUpdate}
          accountId={accountId}
          deleteUser={deleteUser}
        />
      </main>
    </div>
  );
}
export async function getServerSideProps() {
  const response = await axios({
    method: 'get',
    url: 'http://localhost:1337/api/associados'
  });
  return { props: { data: response.data.data } };
}
