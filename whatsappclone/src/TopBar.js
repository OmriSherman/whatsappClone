import React, { useState } from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import Chats from './Chats';
import Contacts from './ContactsPage';


const TopBar = ({handleLogout}) => {
     const [panel, setPanel] = useState(0);

    return (
        <div>
        <section className="topbar">
        <nav>
         <h3 onClick={()=>setPanel(0)}>Chats</h3>
         <h3 onClick={()=>setPanel(1)}>Contacts</h3>
         <button onClick={handleLogout}>Log Out</button>  
         </nav> 
        </section>
        <div>
        <LeftPanel panel={panel}/>
        <RightPanel/>
        </div>
        </div>
    );
};

export default TopBar;