import React, { useEffect, useState } from 'react';
import db from './firebase.config'
import axios from 'axios'
import Contact from './Contact';

const Contacts = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=> {
        axios.get("http://localhost:8002/users")
        .then((data)=>setUsers(data.data));
    },[])

    const allContacts = users.map((user,index) => {
        return <tr className="contacts-tr" key={index}><Contact userId={user._id}/></tr>
    })
    return (
        <div>
            <div><table><tbody>{allContacts}</tbody></table></div>

        </div>
    );
};

export default Contacts;