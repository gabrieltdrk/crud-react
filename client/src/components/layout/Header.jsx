import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Navbar from './Navbar'

import Create from '../pages/Create';
import Update from '../pages/Update';
import Users from '../pages/Users';

export default function Header() {
    return(
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Navigate to='/users' />} />
                <Route path='/users' element={<Users />} />
                <Route path='/create' element={<Create />} />
                <Route path='/update/:id' element={<Update />} />
            </Routes>
        </Router>
    )
}