import { Outlet } from 'react-router-dom';

export function AuthLayout() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-sena-gray px-4 max-[600px]:px-3">
            <section className="bg-white rounded-xl shadow-lg w-full max-w-md p-8 max-[600px]:max-w-sm max-[600px]:p-4 max-[600px]:rounded-lg">
                <Outlet />
            </section>
        </main>
    );
}
