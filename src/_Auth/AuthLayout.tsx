import { Outlet, Navigate } from 'react-router-dom';


const AuthLayout = () => {
    const isAuthenticated = false;

    return (
        <>
            {isAuthenticated ? (
                <Navigate to="/" />
            ) : (
                <div className="flex h-screen">
                    <section className="flex flex-auto justify-center items-center flex-col-2 py-10">
                        <Outlet />
                    </section>

                    <img
                        src="/assets/images/side-img.svg"
                        alt="logo"
                        className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
                    />

                </div>

            )}
        </>
    );
}

export default AuthLayout