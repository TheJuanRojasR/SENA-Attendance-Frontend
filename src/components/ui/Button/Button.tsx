// Que debe tener este boton
// 1. Tienen distintos estilos: 1. bg-verde/text-white 2. bg-green/text-green  3. bg-white/text-black/border-black 4. bg-gray/text-gray 5. bg-red/text-white 6. bg-yellow/text-white 
// 2. onClick donde el padre envie la funcion a ejecutar
// 3. propiedad para poder desactivar una propiedad 'disabled'
// 4. label o children para modificar lo que este dentro de la etiqueta
// 5. types ya que los botones pueden ser para distintas funciones
// 6. opcional: posiblemente se necesite distintos tama;os de botones

import type React from "react";

type ButtonVariant = 'primary' | 'secondary' | 'offline' | 'ghost' | 'danger' | 'warning';

type ButtonType = "button" | "submit" | "reset";

// Las propiedades estan opcionales para poderlos probar
type ButtonProps = {
    variant? : ButtonVariant;
    onClick : React.ButtonHTMLAttributes<HTMLButtonElement>['onClick']
    disabled? : boolean;
    children? : React.ReactNode;
    type? : ButtonType;
};

const variantClasses = {
    primary: "text-white bg-sena-green font-bold w-full max-w-md rounded-md h-12 " + "cursor-pointer hover:brightness-110 active:brightness-90 transition-all",
    secondary: "text-sena-green bg-green-100 font-bold w-full max-w-md rounded-md h-12 " + "cursor-pointer hover:brightness-90 active:brightness-75 transition-all",
    offline: "text-gray-600 bg-gray-100 font-bold w-full max-w-md rounded-md h-12 " + "cursor-pointer hover:brightness-95 active:brightness-80 transition-all",
    ghost: "text-black bg-white font-bold w-full max-w-md rounded-md h-12 shadow-sm " + "cursor-pointer hover:shadow-md active:shadow-sm transition-all",
    warning: "text-white bg-yellow-400 font-bold w-full max-w-md rounded-md h-12 " + "cursor-pointer hover:brightness-90 active:brightness-100 transition-all",
    danger: "text-white bg-red-500 font-bold w-full max-w-md rounded-md h-12 " + "cursor-pointer hover:brightness-110 active:brightness-90 transition-all"
}

export function Button ({ variant = 'primary', onClick, disabled = false, children, type = 'button' }: ButtonProps) {
    return (
        <button className={variantClasses[variant]} onClick={onClick} disabled={disabled} type={type}>
            {children}
        </button>
    );
}