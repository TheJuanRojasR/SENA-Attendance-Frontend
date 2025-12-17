// Por el momento falta la accesibilidad

import type React from 'react';
import styles from './Input.module.css'
import ErrorIcon from '@/assets/icons/error.svg?react'

type InputType = 'text' | 'password' | 'email' | 'number' | 'file' | 'date' | 'search';

type InputProps = {
    id: string;
    type: InputType;
    name: string;
    placeholder: string;
    label?: string;
    isRequired?: boolean;
    isDisabled?: boolean;
    value: string;
    errorMessage?: string;
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;  // Por el momento no se para que funcionan
}

export function Input ({ 
    id,
    type, 
    name, 
    placeholder,
    label, 
    isRequired = true, 
    isDisabled = false, 
    value, 
    errorMessage,
    className,
    onChange }: InputProps){
        
    const hasError = Boolean(errorMessage);
    const hasSuccess = !hasError && value !=='';

    return (
        <div className={styles.container}>
            {/* condicion && <Algo /> */}
            {label && (<label className={styles.label} htmlFor={id}>{label}</label>)}

            <input className={`${styles.base} ${hasError ? styles.isError : ''} ${hasSuccess ? styles.isSuccess : ''} ${className ?? ''}`} type={type} id={id} name={name} placeholder={placeholder} required={isRequired} disabled={isDisabled} value={value} onChange={onChange}/>

            {hasError && (
                <div className={styles.errorContainer}>
                    <ErrorIcon />
                    <p className={styles.errorLabel}>{errorMessage}</p>
                </div>
            )}
        </div>
    );
} 