import type React from 'react';
import styles from './Select.module.css'
import ErrorIcon from '@/assets/icons/error.svg?react'

// En el futuro puedo utilizar aria-required={isRequired}

interface SelectOption {
    label: string;
    value: string;
}

type SelectProps = {
    id: string;
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void; // Por el momento para probarlo
    options: SelectOption[];
    label?: string;
    placeholder?: string;
    isRequired?: boolean;
    isDisabled?: boolean;
    errorMessage?: string;
    className?: string;
}

export function Select ({
    id,
    name,
    value,
    onChange,
    options,
    label,
    placeholder,
    isRequired = true,
    isDisabled = false,
    errorMessage,
    className,
    }: SelectProps) {
    
    const hasError = Boolean(errorMessage);
    const hasSuccess = !hasError && value !== '';
    const errorId = hasError ? `${id}-error` : undefined;

    return (
        <div className={styles.container}>
            {label && (<label htmlFor={id} className={styles.label}>{label}</label>)}

            <select className={`${styles.base} ${hasError ? styles.isError : ''} ${hasSuccess ? styles.isSuccess : ''} ${className ?? ''}`} name={name} id={id} value={value} required={isRequired} disabled={isDisabled} onChange={onChange} aria-invalid={hasError} aria-describedby={errorId}>

                {placeholder && (<option value="" disabled>{placeholder}</option>)}
                
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            {hasError && (
                <div className={styles.errorContainer}>
                    {/* Ícono decorativo → aria-hidden */}
                    <ErrorIcon aria-hidden="true" focusable="false"/>
                    <p id={errorId} role='alert' className={`${styles.errorLabel}`}>{errorMessage}</p>
                </div>
            )}
        </div>
    );
}