import React, { useEffect, useState } from 'react';
import { useGetRankingsQuery } from '../../redux-rtk/features/challenges/challengesApi';
import { useSelector } from 'react-redux';

const Rankings = () => {

    const { data, isLoading, isSuccess, isError, error, refetch } = useGetRankingsQuery();
    const currentUser = useSelector((state) => state.auth.user);
    if (isLoading) {
        return <div className='flex justify-center items-center h-full'><h1>Loading...</h1></div>
    }

    return (
        <div>

            {/* create a rankings tables of top 20 users list */}
            <div className="p-4">
                <h1 className="text-xl font-bold">Rankings</h1>
                <table className='w-full my-8'>
                    <thead>
                        <tr className='font-medium border p-4'>
                            <th className='border-2 border-red-400 py-1 bg-black text-white'>Rank</th>

                            <th className='border-2 border-red-400 py-1 bg-black text-white'>Email</th>
                            <th className='border-2 border-red-400 py-1 bg-black text-white'>Solved</th>
                            <th className='border-2 border-red-400 py-1 bg-black text-white'>Points</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            data && data?.data?.map((user, index) => (
                                <tr key={user?._id} className={`border p-4 ${currentUser?._id === user?.user?._id && 'border-2 border-green-500 text-green-800'}`}>
                                    <td className='border border-gray-400 p-2 text-center'>{index+1}</td>

                                    <td className='border border-gray-400 p-2 text-center'> {user?.user?.email} </td>
                                    <td className='border border-gray-400 p-2 text-center'>{user?.totalCorrectAttempts}</td>
                                    <td className='border border-gray-400 p-2 text-center'>{user?.points}</td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default Rankings;