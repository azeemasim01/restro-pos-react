import React from 'react'
import BackButton from '../components/shared/BackButton';
import TableCard from '../components/tables/TableCard';
import { tables } from '../constants/';

const Tables = () => {
  return (
    <section className=" overflow-hidden ">
      <div className="flex justify-between items-center p-4 bg-[#1a1a1a]">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-2xl">Tables</h1>
        </div>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 p-3'>
        {
          tables.map((table) => (
            <TableCard key={table.id} name={table.name} initial={table.initial} status={table.status} seats={table.seats} /> 
          ))
        }
        
      </div>
    </section>
  );
}

export default Tables