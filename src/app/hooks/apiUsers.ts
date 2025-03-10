'use client'
import {useEffect, useState} from "react";
import {Person} from "../types/http/person";
import {PeopleResponse} from "../types/http/people.response";
import axios from "axios";

export const useUsersApi =()=>{
    const [currentUser, setUser] = useState<Person | null>(null);
    const [userHistory, setUserHistory] = useState<Person[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchUserData= async () => {
        setError(null);
        setLoading(true);
        try {
            const response = await axios.get<PeopleResponse>('https://randomuser.me/api/');
            const data = response.data.results[0]
            const user: Person = {
                name: data.name.first + " " + data.name.last,
                email: data.email,
                dob: data.dob.date,
                phone: data.phone,
                location: data.location.street.number + " " + data.location.street.name,
                password: data.login.password,
                picture: data.picture.thumbnail
            }
            setUser(user);
            setUserHistory((userList) => [...userList, user]);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally{
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchUserData();
    }, []);
    return {currentUser, userHistory, error, loading, fetchUserData};
}