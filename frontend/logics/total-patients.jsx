
export const TotalAppointmentsDisplay = ({ total }) => {
  return (
    <div className='text-red-500 font-extrabold text-lg'>
      {total}
    </div>
  );
};

export const TotalStaffsDisplay = ({ total }) => {
    return (
      <div className='text-[#44AC21] font-extrabold text-lg'>
        {total}
      </div>
    );
  };
  
  

  export const TotalAmbulancesDisplay = ({ total }) => {
    return (
      <div className='text-[#44AC21] font-extrabold text-lg'>
        {total}
      </div>
    );
  };
