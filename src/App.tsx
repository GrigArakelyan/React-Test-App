import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import Layuot from './Layout/Layout';
import Home from './Pages/Home/Home';
import User from './Pages/User/User';
import { HOME, NOT_FOUND, USER } from './Constant/route';

const App:FC = () => {

  
  return (
    <>
      <Routes>
        <Route path={HOME} element={<Layuot />}>
          <Route index element={<Home />}/>
          <Route path={USER} element={<User />} />
        </Route>
        <Route path={NOT_FOUND} element={<Navigate to={HOME} />}/>
      </Routes>
    </>
  );
}

export default App;
