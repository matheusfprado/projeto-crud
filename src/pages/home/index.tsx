import Header from '@/components/common/Header/Header';
import CrudList from '@/components/common/CrudList/CrudList';
import { useState } from 'react';
import ModalCrud from '@/components/common/ModalCrud/ModalCrud';

const people = [
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    role: 'Member'
  },
  {
    name: 'Matheus Felipe do Prado',
    title: 'Front-end Developer',
    email: 'matheus.gmail@example.com',
    role: 'Member'
  }
];

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div>
        <Header />
      </div>
      <main className='max-w-7xl mx-auto pt-32'>
        <ModalCrud open={open} setOpen={setOpen} />
        <CrudList people={people} setOpen={setOpen} />
      </main>
    </div>
  );
}
