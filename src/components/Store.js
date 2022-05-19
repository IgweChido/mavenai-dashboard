import React, {useState} from "react";

const MultipleStates ={
    username : 'Igwe Chidera',
    openNav: false,
    closeNav: true,
    GetStarted: true

}

export const Context = React.createContext();

const Store =({children})=>{
    const[state, setState] = useState(MultipleStates);

    return(
        <Context.Provider value={[state,setState]}>
            {children}
        </Context.Provider>
    );
};

export default Store;