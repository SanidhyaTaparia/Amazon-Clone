import UserContext from './userContext';
import {  useState} from 'react';

const UserState = (props) => {
    
    const s1={
        user: null,
    }
    

    const [state, setState] = useState(s1);

    const changeUser = (user) => {
        console.log("change user mine");
        setState({
            user: user
        })
    }


    return (
        <UserContext.Provider value={{state,changeUser}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;