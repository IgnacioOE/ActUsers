'use client'
import React from 'react';
import { Person } from '../types/http/person';

interface UserCardChange {
    user: Person;
    onClick: () => void;
}

export default function UserInfoSmall ({user, onClick}: UserCardChange) {
    
    return (
    <div onClick={onClick} className="max-w-md rounded bg-white px-2 py-4 cursor-pointer">                
        <div className="font-bold text-md text-gray-700">{user.name}</div>
        <div className="text-xs text-gray-500">
            <p>Email: {user.email}</p>
            <p>Birthday: {new Date(user.dob).toLocaleDateString()}</p>
            <p>Address: {user.location}</p>
            <p>Phone: {user.phone}</p>
            <p>Password: {user.password}</p>
        </div>
    </div>
    );
}