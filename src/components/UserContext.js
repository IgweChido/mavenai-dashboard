import React, {useState} from "react";

const UserStates ={
    username : 'User',
    

}

export const Ucontext = React.createContext();

const UserContext =({children})=>{
    const[state, setState] = useState(UserStates);

    return(
        <Ucontext.Provider value={[state,setState]}>
            {children}
        </Ucontext.Provider>
    );
};

export default UserContext;