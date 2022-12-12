import './App.css'
import Cars from './components/cars/cars';
import Form from './components/form/form';
import LoginForm from './components/form/loginForm';
import AppRouters from './routers/appRouters';

function App(){
    return(
        <div>
          <AppRouters/>
          {/* <LoginForm/>
          <Form/> */}
          {/* <Cars/> */}
        </div>
    );
}

export default App;
