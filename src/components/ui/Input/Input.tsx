import type React from 'react';
import styles from './Input.module.css'
import ErrorIcon from '@/assets/icons/error.svg?react'

/**
 * Supported HTML input types for the Input component.
 * Restricts to commonly used and styled input types.
 */
type InputType = 'text' | 'password' | 'email' | 'number' | 'file' | 'date' | 'search';

/**
 * Props for the Input component.
 */
type InputProps = {
    /**
     * Unique identifier for the input element.
     * Used for label association and accessibility.
     */
    id: string;
    /**
     * HTML input type attribute.
     * Controls the input behavior and keyboard on mobile devices.
     */
    type: InputType;
    /**
     * Name attribute for form submission.
     * Identifies the input data when the form is submitted.
     */
    name: string;
    /**
     * Placeholder text shown when the input is empty.
     * Provides a hint about the expected value.
     */
    placeholder: string;
    /**
     * Optional label text displayed above the input.
     * When provided, creates an accessible label element.
     */
    label?: string;
    /**
     * Whether the input is required for form submission.
     * Adds HTML5 validation.
     *
     * @default true
     */
    isRequired?: boolean;
    /**
     * Whether the input is disabled.
     * When true, the input cannot be edited and appears faded.
     *
     * @default false
     */
    isDisabled?: boolean;
    /**
     * Current value of the input.
     * Controlled component - must be updated via onChange.
     */
    value: string;
    /**
     * Error message to display below the input.
     * When provided, the input shows error styling.
     */
    errorMessage?: string;
    /**
     * Optional additional CSS class names.
     * Useful for layout or one-off styling needs.
     */
    className?: string;
    /**
     * Change event handler.
     * Called when the input value changes.
     * Use `event.target.value` to get the new value.
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Input component for user text entry.
 * Supports validation states (error/success) and optional labels.
 *
 * @example
 * ```tsx
 * <Input
 *   id="email"
 *   type="email"
 *   name="email"
 *   placeholder="correo@ejemplo.com"
 *   label="Correo electrónico"
 *   value={email}
 *   onChange={(e) => setEmail(e.target.value)}
 * />
 * ```
 *
 * @example
 * ```tsx
 * <Input
 *   id="password"
 *   type="password"
 *   name="password"
 *   placeholder="Contraseña"
 *   value={password}
 *   errorMessage="La contraseña es requerida"
 *   onChange={(e) => setPassword(e.target.value)}
 * />
 * ```
 */
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