import type React from 'react';
import styles from './Select.module.css'
import ErrorIcon from '@/assets/icons/error.svg?react'

/**
 * Represents a single option within the Select component.
 */
interface SelectOption {
    /**
     * The text displayed to the user in the dropdown.
     */
    label: string;
    /**
     * The actual value submitted or stored when this option is selected.
     */
    value: string;
}

/**
 * Props for the Select component.
 */
type SelectProps = {
    /**
     * Unique identifier for the select element.
     * Used to associate the label with the select for accessibility.
     */
    id: string;
    /**
     * Name attribute for form submission.
     * Identifies the select field in form data.
     */
    name: string;
    /**
     * The currently selected value.
     * Should match one of the option values.
     */
    value: string;
    /**
     * Callback function triggered when the selection changes.
     * Receives the native change event from the select element.
     * 
     * @param event - The change event from the select element
     */
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    /**
     * Array of options to display in the dropdown.
     * Each option must have a label (displayed) and value (submitted).
     */
    options: SelectOption[];
    /**
     * Optional label text displayed above the select.
     * When provided, creates an accessible label association.
     */
    label?: string;
    /**
     * Optional placeholder text shown when no option is selected.
     * Rendered as a disabled option at the top of the list.
     */
    placeholder?: string;
    /**
     * Whether the select field is required for form submission.
     * 
     * @default true
     */
    isRequired?: boolean;
    /**
     * Whether the select field is disabled.
     * When true, prevents user interaction.
     * 
     * @default false
     */
    isDisabled?: boolean;
    /**
     * Error message to display below the select.
     * When provided, applies error styling and shows the message.
     */
    errorMessage?: string;
    /**
     * Optional additional CSS class names.
     * Useful for layout or one-off styling needs.
     */
    className?: string;
}

/**
 * Select component for rendering accessible dropdown menus
 * with consistent styles across the application.
 * 
 * Features:
 * - Accessible label association
 * - Error and success states with visual feedback
 * - Custom arrow icon
 * - Placeholder support
 * - ARIA attributes for screen readers
 *
 * @example
 * ```tsx
 * const [city, setCity] = useState('');
 * 
 * const cities = [
 *   { label: 'Bogotá', value: 'bog' },
 *   { label: 'Medellín', value: 'med' },
 *   { label: 'Cali', value: 'cal' },
 * ];
 * 
 * <Select
 *   id="city"
 *   name="city"
 *   label="Ciudad"
 *   placeholder="Selecciona una ciudad"
 *   options={cities}
 *   value={city}
 *   onChange={(e) => setCity(e.target.value)}
 *   errorMessage={!city ? 'Este campo es requerido' : undefined}
 * />
 * ```
 */
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