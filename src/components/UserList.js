import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GoPerson, GoLocation,GoLink,GoMail, GoMegaphone,GoMention } from "react-icons/go";

const UserList = () => {

    const [listOfUser, setListOfUser] = useState([])


    useEffect(() => {


        const getData = async () => {
            const resutlt = await axios({
                method: "GET",
                url : "https://jsonplaceholder.typicode.com/users",
            });
            

            setListOfUser(resutlt.data);            
        };

        getData();


    }, [])
    console.log(listOfUser)


    return (
        <div>
            <nav className="navbar navbar-dark bg-dark p-4">
                <div className="container--fluid">
                    <div className="title">
                        <h1 className="h4">List of Users</h1>
                    </div>
                </div>
            </nav>

                <div className="displaytodos">
                <ul>

                        <AnimatePresence>
                    {listOfUser.map((user) => (
                        <div 
                            key={user.id} 
                            className="card gap-2 col-12 col-md-5 p-4" 
                            data-aos="fade-down-left"
                        >
                            <h2 
                                className="text-center text-primary">
                               <GoPerson/>
                                  {user.name}
                            </h2>
                            <p>
                                <GoMention/>
                                Username: {""}
                                <strong>
                                    {user.username}
                                </strong> 
                            </p>
                            <p>
                                <GoMail/>
                                Email: {""} 
                                <strong>
                                    {user.email}
                                </strong>
                            </p>
                            <p>
                                <GoMegaphone/>
                                Numero: {""} 
                                <strong>
                                    {user.phone}
                                </strong>
                            </p>
                            <p>
                                <GoLocation/>
                                Addresse: {""} 
                                <strong>
                                    {user.address.street}
                                </strong>
                            </p>
                            <p>
                                <GoLink/>
                                Site internet: {""} 
                                <strong>
                                    {user.website}
                                </strong>
                            </p>
                        </div>
                    ))}
                        </AnimatePresence>

                </ul>

            </div> 
        </div>
    )
}
export default UserList
