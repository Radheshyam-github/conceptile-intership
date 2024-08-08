import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get, getStudent  } from '../Reducers/StudentReducers';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';

const EditProfileDetails = () => {
    const dispatch = useDispatch();
    const { student, status, error } = useSelector((state) => state.student);
    const { id } = useParams();
    const [formData, setFormData] = useState({});

    useEffect(() => {
        if (status === 'idle') {
            dispatch(getStudent());
        } else if (student) {
            setFormData({ ...student });
        }
    }, [dispatch, status, student]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const submitHandler = (event) => {
        event.preventDefault();
        axios.patch("http://localhost:5005/student/edit/" + id, formData)
            .then((response) => {
                if (response.data.status === 1) {

                    toast.success(response.data.msg);
                    event.target.reset();
                    // Optionally, reset form or redirect
                } else {
                    toast.error(response.data.msg);
                }
            })
            .catch((error) => {
                console.error(error);
                toast.error('Failed to update student data');
            });
    };

    if (status === 'loading') {
        return <div className=' text-center w-[30%] mx-auto mt-40'>
            <div
                aria-label="Loading..."
                role="status"
                className="flex items-center space-x-2"
            >
                <svg className="h-20 w-20 animate-spin stroke-gray-500" viewBox="0 0 256 256">
                    <line x1={128} y1={32} x2={128} y2={64} strokeLinecap="round" strokeLinejoin="round" strokeWidth={24}
                    />
                    <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={24}
                    />
                    <line x1={224} y1={128} x2={192} y2={128} strokeLinecap="round" strokeLinejoin="round" strokeWidth={24}
                    ></line>
                    <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={24}
                    />
                    <line x1={128} y1={224} x2={128} y2={192} strokeLinecap="round" strokeLinejoin="round" strokeWidth={24}
                    ></line>
                    <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={24}
                    />
                    <line x1={32} y1={128} x2={64} y2={128} strokeLinecap="round" strokeLinejoin="round" strokeWidth={24}
                    />
                    <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={24}
                    ></line>
                </svg>
                <span className="text-4xl font-medium text-gray-500">Loading...</span>
            </div>
        </div>
    }

    if (status === 'failed') {
        return <h4>Error: {error}</h4>;
    }

    return (
        <div>
            <div className="bg-white w-full max-w-[1000px] mx-auto mt-6 overflow-hidden shadow rounded-lg border">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        User Update Profile
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        This is some information about the user.
                    </p>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200">
                        <form onSubmit={submitHandler}>
                            <div className='px-8'>
                                <h2 className="mt-1 font-semibold text-dark">
                                    Student's Personal Information
                                </h2>
                                <div className="flex flex-col lg:flex-row gap-2 justify-center w-full">
                                    <div className="w-full mb-4 mt-6">
                                        <label htmlFor="name" className="mb-2 dark:text-gray-300">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="mt-2 font-bold px-4 py-3 w-full border-2 rounded-lg dark:text-dark dark:border-[#007D88]  focus:outline-none"
                                            placeholder="First Name"
                                            value={formData.name || ''}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="w-full mb-4 mt-6">
                                        <label htmlFor="email" className="dark:text-gray-300">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="mt-2 px-4 py-3 w-full border-2 rounded-lg dark:text-dark font-bold focus:outline-none dark:border-[#007D88]"
                                            placeholder="email@example.com"
                                            value={formData.email || ''}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col lg:flex-row gap-2 justify-center w-full">
                                    <div className="w-full">
                                        <label htmlFor="contact" className="dark:text-gray-300">
                                            Contact
                                        </label>
                                        <input
                                            type="number"
                                            name="contact"
                                            className="mt-2 px-4 py-3 w-full border-2 rounded-lg dark:text-dark font-bold focus:outline-none dark:border-[#007D88]"
                                            value={formData.contact || ''}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="w-full">
                                        <h3 className="dark:text-gray-300 mb-2">Age</h3>
                                        <input
                                            type="text"
                                            name="age"
                                            className="text-grey px-4 py-3 w-full border-2 rounded-lg dark:text-dark font-bold focus:outline-none dark:border-[#007D88]"
                                            value={formData.age || ''}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='px-8'>
                                <h2 className="mt-1 font-semibold text-dark">
                                    Student's Educational History
                                </h2>
                                <div className="flex flex-col lg:flex-row gap-2 justify-center w-full">
                                    <div className="w-full mb-4 mt-6">
                                        <label htmlFor="institutions" className="mb-2 dark:text-gray-300">
                                            Institutions Name
                                        </label>
                                        <input
                                            type="text"
                                            name="institutions"
                                            className="mt-2 font-bold px-4 py-3 w-full border-2 rounded-lg dark:text-dark dark:border-[#007D88]  focus:outline-none"
                                            placeholder="Institution Name"
                                            value={formData.institutions || ''}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="w-full mb-4 mt-6">
                                        <label htmlFor="degrees" className="dark:text-gray-300">
                                            Degrees
                                        </label>
                                        <input
                                            type="text"
                                            name="degrees"
                                            className="mt-2 px-4 py-3 w-full border-2 rounded-lg dark:text-dark font-bold focus:outline-none dark:border-[#007D88]"
                                            placeholder="Degrees"
                                            value={formData.degrees || ''}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col lg:flex-row gap-2 justify-center w-full">
                                    <div className="w-full">
                                        <label htmlFor="years" className="dark:text-gray-300">
                                            Years
                                        </label>
                                        <input
                                            type="text"
                                            name="years"
                                            className="mt-2 px-4 py-3 w-full border-2 rounded-lg dark:text-dark font-bold focus:outline-none dark:border-[#007D88]"
                                            value={formData.years || ''}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='px-8'>
                                <h2 className="mt-1 font-semibold text-dark">
                                    Student's Enrolled Courses
                                </h2>
                                <div className="flex flex-col lg:flex-row gap-2 justify-center w-full">
                                    <div className="w-full mb-4 mt-6">
                                        <label htmlFor="coursename" className="mb-2 dark:text-gray-300">
                                            Course Name
                                        </label>
                                        <input
                                            type="text"
                                            name="coursename"
                                            className="mt-2 font-bold px-4 py-3 w-full border-2 rounded-lg dark:text-dark dark:border-[#007D88]  focus:outline-none"
                                            placeholder="Course Name"
                                            value={formData.coursename || ''}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="w-full mb-4 mt-6">
                                        <label htmlFor="instructor" className="dark:text-gray-300">
                                            Instructor
                                        </label>
                                        <input
                                            type="text"
                                            name="instructor"
                                            className="mt-2 px-4 py-3 w-full border-2 rounded-lg dark:text-dark font-bold focus:outline-none dark:border-[#007D88]"
                                            placeholder="Instructor"
                                            value={formData.instructor || ''}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col lg:flex-row gap-2 justify-center w-full">
                                    <div className="w-full">
                                        <label htmlFor="duration" className="dark:text-gray-300">
                                            Duration
                                        </label>
                                        <input
                                            type="text"
                                            name="duration"
                                            className="mt-2 px-4 py-3 w-full border-2 rounded-lg dark:text-dark font-bold focus:outline-none dark:border-[#007D88]"
                                            value={formData.duration || ''}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 float-end me-4 text-white text-lg font-semibold">
                                <button type='submit' className="rounded-lg bg-[#007D88] py-2 px-4">
                                    Save
                                </button>
                            </div>
                        </form>
                    </dl>
                </div>
            </div>

        </div>
    );
}

export default EditProfileDetails;
