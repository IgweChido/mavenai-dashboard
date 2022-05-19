import React, {useState} from "react";

const LoginStates ={
    openLogin : true,
   
    

}

export const Lcontext = React.createContext();

const LoginContext =({children})=>{
    const[state, setState] = useState(LoginStates);

    return(
        <Lcontext.Provider value={[state,setState]}>
            {children}
        </Lcontext.Provider>
    );
};

export default LoginContext;