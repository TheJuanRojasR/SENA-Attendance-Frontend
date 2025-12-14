import { Outlet } from 'react-router-dom';

export function AuthLayout () {
    return (
        <main className='min-h-screen flex items-center justify-center bg-sena-gray'>
            <section className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
                {/* Aquí se renderiza la página específica (Login, Register, etc.) */}
                <Outlet/>
            </section>
        </main>
    );
}