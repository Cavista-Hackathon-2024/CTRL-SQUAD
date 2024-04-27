'use client'
import React, { useState, useEffect } from 'react';


const Table = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch('http://192.168.0.100:8000/api/#/Appointment/appointments_list')
      .then(response => response.json())
      .then(data => {
     
        const sortedData = data.sort((a, b) => new Date(b.appointmentTime) - new Date(a.appointmentTime));
        setPatients(sortedData.slice(0, 7));
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div className="container mx-auto rounded overflow-x-auto shadow">
      <div className="w-full flex items-center justify-between py-4">
        <div className="text-xl text-[#44AC21] font-bold">Recent Patients</div>
        <div className="flex items-center">
          <div className="mr-4 text-gray-600">Search for items.</div>
          <input
            className="rounded border border-gray-400 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search..."
          />
        </div>
      </div>

      <table className="w-full text-left table-auto border-collapse">
        <thead>
          <tr className="bg-sky-100 text-gray-600 text-sm font-medium">
            <th className="px-4 py-2">FIRST NAME</th>
            <th className="px-8 py-2">LAST NAME</th>
            <th className="px-4 py-2">ADDRESS</th>
            <th className="px-4 py-2">EMAIL ADDRESS</th>
            <th className="px-4 py-2">GENDER</th>
            <th className="px-4 py-2">APPOINTMENT TIME</th>
          </tr>
        </thead><tbody>
          {patients.map((patient, index) => (
            <tr key={index} className="border-b hover:bg-gray-100">
              <td className="px-4 border-r border py-2">{patient.first_Name}</td>
              <td className="px-8 border-r border py-2">{patient.last_Name}</td>
              <td className="px-4 border-r border py-2">{patient.street_addresss}</td>
              <td className="px-4 border-r border py-2">{patient.patient_email}</td>
              <td className="px-4 border-r border py-2">{patient.gender}</td>
              <td className="px-4 border-r border py-2">{new Date(patient.time_of_appointment).toLocaleTimeString()}</td>
            </tr>
          ))}
        </tbody>

      </table>

      <div className="flex items-center  px-4 py-4 text-sm">
        {/* <div>Showing 1 to 10 of 100 Entries</div> */}
        <div className="flex justify-end items-center space-x-2">
          {/* <button className="rounded border font-bold border-blue-500 text-blue-500 px-2 py-1 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Previous
          </button>
          <button className="rounded border font-bold border-blue-500 text-blue-500 px-4 py-1 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Next
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Table;
