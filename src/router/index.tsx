// Configuracion principal de rutas
import { createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "@/layouts";
import { ComponentTest, LoginPage } from "@/pages";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'test',
                element: <ComponentTest/>
            }
        ]
    }
]);