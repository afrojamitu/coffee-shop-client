import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Header from './Shared/Header';
import Swal from 'sweetalert2'
import Footer from './Shared/Footer';

const AddCoffee = () => {

    const handleAddCoffee = event =>{
        event.preventDefault();

        const form = event.target;
        const coffeeName = form.coffeeName.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const chefName = form.chefName.value;
        const taste = form.taste.value;
        const price = form.price.value;
        const photoURL = form.photoURL.value;

        const newCoffee = {coffeeName, supplier, category, chefName, taste, price, photoURL};
        console.log(newCoffee);

        fetch('https://coffee-shop-server-psi.vercel.app/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'Coffee Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
                  form.reset()
            }
        })

    }
    return (
        <div>
            <Header></Header>
            <div className='md:w-9/12 mx-auto mb-12 rounded'>
                <Link to='/' className='flex items-center gap-2 italic my-8'> <FaArrowLeft className='text-xl' /> Back to Home</Link>
                <div className='bg-[#F4F3F0] p-10'>
                    <h1 className='text-center font-bold text-5xl' style={{ fontFamily: 'Rancho' }}>Add New Coffee</h1>
                    <p className='text-center text-slate-600'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

                    <form onSubmit={handleAddCoffee}>
                        <div className='grid md:grid-cols-2 md:gap-10 my-8'>
                            <div>
                                <label className='text-lg font-semibold text-slate-500'>Name:</label>
                                <input className='px-3 py-2 my-3 w-full border-2 rounded-lg' type="text" name="coffeeName" id="" placeholder='Enter Coffee Name' />

                                <label className='text-lg font-semibold text-slate-500'>Supplier:</label>
                                <input className='px-3 py-2 my-3 w-full border-2 rounded-lg' type="text" name="supplier" id="" placeholder='Enter coffee Supplier' />

                                <label className='text-lg font-semibold text-slate-500'>Category:</label>
                                <input className='px-3 py-2 my-3 w-full border-2 rounded-lg' type="text" name="category" id="" placeholder='Enter coffee  Category' />
                            </div>

                            <div>
                                <label className='text-lg font-semibold text-slate-500'>Chef:</label>
                                <input className='px-3 py-2 my-3 w-full border-2 rounded-lg' type="text" name="chefName" id="" placeholder='Enter Chef Name' />

                                <label className='text-lg font-semibold text-slate-500'>Taste:</label>
                                <input className='px-3 py-2 my-3 w-full border-2 rounded-lg' type="text" name="taste" id="" placeholder='Enter Coffee Taste' />

                                <label className='text-lg font-semibold text-slate-500'>Price:</label>
                                <input className='px-3 py-2 my-3 w-full border-2 rounded-lg' type="text" name="price" id="" placeholder='Enter coffee price' />
                            </div>
                        </div>

                        <label className='text-lg font-semibold text-slate-500'>Photo URL:</label>
                        <input className='px-3 py-2 my-3 w-full border-2 rounded-lg' type="text" name="photoURL" id="" placeholder='Enter Photo URL' />


                        <input className='px-3 py-2 my-3 w-full border rounded-lg bg-orange-800 hover:bg-orange-900 border-black text-white font-bold' type="submit" value="Add Coffee" />
                    </form>
                </div>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default AddCoffee;