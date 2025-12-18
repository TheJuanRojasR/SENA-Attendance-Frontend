// opcional: posiblemente se necesite distintos tama;os de botones

import type React from "react";
import styles from '@/components/ui/Button/Button.module.css'

type ButtonVariant = 'primary' | 'secondary' | 'offline' | 'ghost' | 'danger' | 'warning';

type ButtonType = "button" | "submit" | "reset";

type ButtonProps = {
    variant? : ButtonVariant;
    onClick : React.ButtonHTMLAttributes<HTMLButtonElement>['onClick']
    disabled? : boolean;
    children? : React.ReactNode;
    type? : ButtonType;
};

const variantClasses = {
    primary: styles.primary,
    secondary: styles.secondary,
    offline: styles.offline,
    ghost: styles.ghost,
    warning: styles.warning,
    danger: styles.danger,
}

export function Button ({ variant = 'primary', onClick, disabled = false, children, type = 'button' }: ButtonProps) {
    return (
        <button className={`${styles.base} ${variantClasses[variant]}`} onClick={onClick} disabled={disabled} type={type}>
            {children}
        </button>
    );
}