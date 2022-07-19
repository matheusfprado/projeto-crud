import Header from '@/components/common/Header/Header';
import CrudList from '@/components/common/CrudList/CrudList';
import { useContext, useState } from 'react';
import ModalCrud from '@/components/common/ModalCrud/ModalCrud';
import { AuhtContext } from '@/context/AuthContetx';

const people = [
  {
    name: 'Lindsay Walton',
    email: 'lindsay.walton@example.com',
    document: '547.745.987-01'
  },
  {
    name: 'Matheus Felipe do Prado',
    email: 'matheus.gmail@example.com',
    document: '444.854.854-00'
  }
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const { getUser }: any = useContext(AuhtContext);
  console.log(getUser, 'getUser');

  return (
    <div>
      <div>
        <Header />
      </div>
      <main className='max-w-7xl mx-auto pt-32'>
        <ModalCrud open={open} setOpen={setOpen} />
        <CrudList people={people} setOpen={setOpen} getUser={getUser}/>
      </main>
    </div>
  );
}
