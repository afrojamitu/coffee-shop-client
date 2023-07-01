import React, { useState } from 'react';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Coffee = ({ coffee, coffees, setCoffees}) => {
    const { _id, coffeeName, chefName, photoURL, price } = coffee;

    const handleDelete = _id => {
        // console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffee-shop-server-psi.vercel.app/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                              Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                              );
                              const remaining = coffees.filter(cof => cof._id !== _id);
                              setCoffees(remaining)
                        }
                    })
            }
        })
    }

    return (
        <div className='bg-[#F5F4F1] p-5 flex justify-between items-center rounded-lg'>
            <div>
                <img src={photoURL} alt="" />
            </div>
            <div>
                <h3><span className='font-bold'>Name:</span> {coffeeName}</h3>
                <h3><span className='font-bold'>Chef:</span> {chefName}</h3>
                <h3><span className='font-bold'>Price:</span> {price}</h3>
            </div>
            <div className='flex flex-col gap-3 pr-5'>
                <Link><FaEye className='bg-[#D2B48C] w-6 h-6 p-1 text-white rounded' /></Link>
                <Link to={`updateCoffee/${_id}`}><FaEdit className='bg-[#3C393B] w-6 h-6 p-1 text-white rounded' /></Link>
                <button onClick={() => handleDelete(_id)}><FaTrash className='bg-[#EA4744] w-6 h-6 p-1 text-white rounded' /></button>
            </div>
        </div>
    );
};

export default Coffee;