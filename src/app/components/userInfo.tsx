'use client'
import React from 'react';
import { useUsersApi } from '../hooks/apiUsers';
import { Person } from '../types/http/person';
import { useState } from 'react';

interface UserData {
    user: Person;
}
export default function UserInfo ({user}: UserData) {
    
    return (
        <div>
            <img className="w-full" src={user.picture} alt={user.name} />
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.dob}</p>
            <p>{user.location}</p>
            <p>{user.phone}</p>
            <p>{user.password}</p>
        </div>
    );
}