'use client'
import { useUsersApi } from "./hooks/apiUsers";
import { Person } from './types/http/person';
import { useState } from 'react';


export default function Home() {
  const { currentUser, userHistory, error, loading, fetchUserData } = useUsersApi()
  
  if (error) {
    return <div>Error loading data</div>; 
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <button onClick={fetchUserData} className="px-4 py-2 text-white bg-blue-500 rounded-md">
        Generar
      </button>
      <div className="font-bold text-gray-700">
        {loading && <p>Loading...</p>}
        <pre>{JSON.stringify(currentUser, null, 2)}</pre>
        <h1>User history</h1>
        <pre>{JSON.stringify(userHistory, null, 2)}</pre>
      </div>
    </div>
  );
}
