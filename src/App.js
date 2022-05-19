
import 'bootstrap/dist/css/bootstrap.min.css';




import './components/team.scss'
import Store from './components/Store';
import MainPage from './components/MainPage';

import UserContext from './components/UserContext';
import LoginContext from './components/LoginContext';
function App() {



  

  
  return (
    
    <Store>
     <UserContext>
       <LoginContext>
         <div class=' bg-light'  >

           <MainPage/>
      
         </div>
       </LoginContext>
       
     </UserContext>      
    </Store>
    
  );
}

export default App;
