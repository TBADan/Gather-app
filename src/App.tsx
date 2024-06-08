import { Routes, Route } from 'react-router-dom';


import SigninForm from './_Auth/froms/SigninForm';
import SignupForm from './_Auth/froms/SignupForm';
import { Home } from './_Root/Pages';

import './globals.css';
import RootLayout from './_Root/RootLayout';
import AuthLayout from './_Auth/AuthLayout';


const App = () => {
    return (
        <main>
            <Routes>
                {/* Public Routes */}
                <Route element={<AuthLayout />}>
                    <Route path="/sign-in" element={<SigninForm />} />
                    <Route path="/sign-up" element={<SignupForm />} />
                </Route>

                {/*Private Routes */}
                <Route element={<RootLayout />}>
                    <Route index element={<Home />} />

                </Route>

            </Routes>
        </main>

    )
}

export default App