
import Chats from './Chats';
import Contacts from './ContactsPage';

const LeftPanel = (props) => {
    
    return (
        <div className="leftside">
          {props.panel ? 
          <Contacts/> : <Chats/>}  
        </div>
    );
};

export default LeftPanel;