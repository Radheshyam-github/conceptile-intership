

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStudent } from '../Reducers/StudentReducers';
import { Link, useParams } from 'react-router-dom';


const ProfileDetailsPage = () => {
    const { id } = useParams()
    const dispatch = useDispatch();
    const { student, status, error } = useSelector((state) => state.student);
    console.log(student)
    useEffect(() => {
        if (status === 'idle') {
            dispatch(getStudent());
        }
    }, [dispatch, status]);


    if (status === 'loading') {
        return <div className=' text-center w-[30%] mx-auto mt-40'>
            <div
                aria-label="Loading..."
                role="status"
                className="flex items-center space-x-2"
            >
                <svg className="h-20 w-20 animate-spin stroke-gray-500" viewBox="0 0 256 256">
                    <line
                        x1={128}
                        y1={32}
                        x2={128}
                        y2={64}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={24}
                    />
                    <line
                        x1="195.9"
                        y1="60.1"
                        x2="173.3"
                        y2="82.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={24}
                    />
                    <line
                        x1={224}
                        y1={128}
                        x2={192}
                        y2={128}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={24}
                    ></line>
                    <line
                        x1="195.9"
                        y1="195.9"
                        x2="173.3"
                        y2="173.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={24}
                    />
                    <line
                        x1={128}
                        y1={224}
                        x2={128}
                        y2={192}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={24}
                    ></line>
                    <line
                        x1="60.1"
                        y1="195.9"
                        x2="82.7"
                        y2="173.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={24}
                    />
                    <line
                        x1={32}
                        y1={128}
                        x2={64}
                        y2={128}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={24}
                    />
                    <line
                        x1="60.1"
                        y1="60.1"
                        x2="82.7"
                        y2="82.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={24}
                    ></line>
                </svg>
                <span className="text-4xl font-medium text-gray-500">Loading...</span>
            </div>
        </div>


    }

    if (status === 'failed') {
        return <h4>Error: {error}
       
        </h4>;
    }

    return (
        <div>
            <section className="py-10 my-auto dark:bg-gray-900">
                <div className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
                    <div className="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center dark:bg-gray-800/40">
                        <div>
                            <h1 className="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2 dark:text-white">
                                Profile
                            </h1>
                            <h2 className="text-grey text-sm mb-4 dark:text-gray-400">
                                View Profile
                            </h2>
                            <form>
                                <div className="w-full rounded-sm bg-[url('D:\Intership\INTERSHIP\frontend\public\image\profilephoto.png')] bg-cover bg-center bg-no-repeat items-center">
                                    <div className="mx-auto flex justify-center w-[141px] h-[141px] bg-blue-300/20 bg-[url('D:\Intership\INTERSHIP\frontend\public\image\profilephoto1.png')] rounded-full bg-cover bg-center bg-no-repeat"></div>
                                </div>
                                <h2 className="text-center mt-1 font-semibold dark:text-gray-300">
                                    Student's Personal Information
                                </h2>
                                {
                                    student.map(
                                        (items,index) => {
                                            return (
                                                < >
                                                    <div key={index} className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                                                        <div className="w-full mb-4 mt-6">
                                                            <label htmlFor="name" className="mb-2 dark:text-gray-300">
                                                                Name
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="name"
                                                                className="mt-2 px-4 py-3 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 focus:outline-none  dark:bg-gray-800"
                                                                placeholder="First Name"
                                                                value={items.name}
                                                                readOnly
                                                            />
                                                        </div>
                                                        <div className="w-full mb-4 mt-6">
                                                            <label htmlFor="email" className="dark:text-gray-300">
                                                                Email
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="email"
                                                                className="mt-2  px-4 py-3 w-full border-2 rounded-lg dark:text-gray-200 focus:outline-none  dark:border-gray-600 dark:bg-gray-800"
                                                                placeholder="email@example.com"
                                                                value={items.email}
                                                                readOnly
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                                                        <div className="w-full">
                                                            <label htmlFor="contact" className="dark:text-gray-300">
                                                                Contact
                                                            </label>
                                                            <input
                                                                type="number"
                                                                name="contact"
                                                                className="mt-2  px-4 py-3 w-full border-2 rounded-lg dark:text-gray-200 focus:outline-none dark:border-gray-600 dark:bg-gray-800"
                                                                value={items.contact}
                                                                readOnly
                                                            />
                                                        </div>
                                                        <div className="w-full">
                                                            <h3 className="dark:text-gray-300 mb-2">Age</h3>
                                                            <input
                                                                type="text"
                                                                name="age"
                                                                className="text-grey px-4 py-3 w-full border-2 rounded-lg dark:text-gray-200 focus:outline-none  dark:border-gray-600 dark:bg-gray-800"
                                                                value={items.age}
                                                                readOnly
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className='w-full font-bold mt-4'>
                                                        <h2 className="  font-semibold dark:text-gray-300">                                         Educational History                                    </h2>
                                                    </div>
                                                    <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                                                        <div className="w-full mb-4 mt-6">
                                                            <label htmlFor="name" className="mb-2 dark:text-gray-300">                            Institutions Name                                                 </label>
                                                            <input
                                                                type="text"
                                                                name="name"
                                                                className="mt-2 px-4  py-3 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 focus:outline-none  dark:bg-gray-800"
                                                                placeholder=" Name"
                                                                value={items.institutions}
                                                                readOnly
                                                            />
                                                        </div>
                                                        <div className="w-full mb-4 mt-6">
                                                            <label htmlFor="email" className="dark:text-gray-300">
                                                                Degrees Earned
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="degrees"
                                                                className="mt-2 px-4  py-3 w-full border-2 rounded-lg dark:text-gray-200 focus:outline-none   dark:border-gray-600 dark:bg-gray-800"
                                                                placeholder="email@example.com"
                                                                value={items.degrees}
                                                                readOnly
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                                                        <div className="w-full">
                                                            <label htmlFor="contact" className="dark:text-gray-300">
                                                                Years of Attendance
                                                            </label>
                                                            <input
                                                                type="number"
                                                                name="contact"
                                                                className="mt-2 px-4  py-3 w-full border-2 rounded-lg dark:text-gray-200 focus:outline-none  dark:border-gray-600 dark:bg-gray-800"
                                                                value={items.years}
                                                                readOnly
                                                            />
                                                        </div>

                                                    </div>
                                                    <div className='w-full font-bold mt-4'>
                                                        <h2 className="  font-semibold dark:text-gray-300">                                         Student's Enrolled Courses                                     </h2>
                                                    </div>
                                                    <div>


                                                        <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">                                             <div className="w-full mb-4 mt-6">                                                 <label htmlFor="name" className="mb-2 dark:text-gray-300">                                                     Course Name                                                 </label>                                                 <input
                                                            type="text"
                                                            name="name"
                                                            className="mt-2 px-4  py-3 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 focus:outline-none  dark:bg-gray-800"
                                                            placeholder=" Name"
                                                            value={items.coursename}
                                                            readOnly
                                                        />
                                                        </div>
                                                            <div className="w-full mb-4 mt-6">
                                                                <label htmlFor="email" className="dark:text-gray-300">
                                                                    Instructor
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="degrees"
                                                                    className="mt-2 px-4  py-3 w-full border-2 rounded-lg dark:text-gray-200 focus:outline-none   dark:border-gray-600 dark:bg-gray-800"
                                                                    placeholder="email@example.com"
                                                                    value={items.instructor}
                                                                    readOnly
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                                                            <div className="w-full">
                                                                <label htmlFor="contact" className="dark:text-gray-300">
                                                                    Duration
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="contact"
                                                                    className="mt-2 px-4  py-3 w-full border-2 rounded-lg dark:text-gray-200 focus:outline-none  dark:border-gray-600 dark:bg-gray-800"
                                                                    value={items.duration}
                                                                    readOnly
                                                                />
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="mt-4 float-end me-4 text-white text-lg font-semibold">
                                                        <Link to={"./editprofile/" + items._id}>
                                                            <button className="rounded-lg bg-[#007D88] py-2 px-4" >
                                                                Edit
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </>
                                            )
                                        }
                                    )
                                }


                            </form >


                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProfileDetailsPage;

