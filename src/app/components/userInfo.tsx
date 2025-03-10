'use client'
import React from 'react';
import { Person } from '../types/http/person';

interface UserData {
    user: Person;
}
export default function UserInfo ({user}: UserData) {
    
    return (
    <div className="max-w-xl grid grid-cols-1 justify-items-center items-center rounded p-8 bg-white">
        <img className="" src={user.picture} alt={user.name} />
        <div className="px-6 py-4">                
            <div className="font-bold text-xl mb-2 text-gray-700">{user.name}</div>
            <div className="text-gray-500">
                <p>Email: {user.email}</p>
                <p>Birthday: {new Date(user.dob).toLocaleDateString()}</p>
                <p>Address: {user.location}</p>
                <p>Phone: {user.phone}</p>
                <p>Password: {user.password}</p>
            </div>
        </div>
    </div>
    );
}