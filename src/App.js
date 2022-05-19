
import 'bootstrap/dist/css/bootstrap.min.css';



import './components/styles.scss'
import './components/team.scss'
import Store from './components/Store';
import MainPage from './components/MainPage';
import Login from './components/Login';

import UserContext from './components/UserContext';
import LoginContext from './components/LoginContext';
function App() {



  

  
  return (
    
    <Store>
     <UserContext>
       <LoginContext>
         <div class=' bg-light'>

           <MainPage/>
      
         </div>
       </LoginContext>
       
     </UserContext>      
    </Store>
    
  );
}

export default App;
