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
    error?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;  // Por el momento no se para que funcionan
}

export function Input ({ id,
    type, 
    name, 
    placeholder,
    label, 
    isRequired = true, 
    isDisabled = false, 
    value, 
    error, 
    onChange }: InputProps)
    
    {
    const hasError = Boolean(error);
    const inputClassName = hasError ? styles.error : styles.success ;

    return (
        <div className={styles.container}>
            {/* condicion && <Algo /> */}
            {label && (<label className={styles.label} htmlFor={id}>{label}</label>)}

            <input className={`${styles.base} ${inputClassName}`} type={type} id={id} name={name} placeholder={placeholder} required={isRequired} disabled={isDisabled} value={value} onChange={onChange}/>

            {hasError && (
                <div className={styles.errorContainer}>
                    <ErrorIcon />
                    <p className={styles.errorLabel}>{error}</p>
                </div>
            )}
        </div>
    );
} 