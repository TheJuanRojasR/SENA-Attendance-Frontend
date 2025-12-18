import type React from "react";
import styles from './Button.module.css'

// Pendiente: Posiblemente creacion de prop para insertar un icono en el boton
// Pendiente: Posiblemente creacion de prop para tamaño del boton

/**
 * Available visual variants for the Button component.
 * Each variant represents a different purpose or emphasis level.
 */
type ButtonVariant = 'primary' | 'secondary' | 'offline' | 'ghost' | 'danger' | 'warning';

/**
 * Native HTML button types.
 * Controls form behavior when the button is clicked.
 */
type ButtonType = "button" | "submit" | "reset";

/**
 * Props for the Button component.
 */
type ButtonProps = {
    /**
     * Visual style variant of the button.
     * - `primary`: Main action (green background, white text)
     * - `secondary`: Secondary action (light green background, green text)
     * - `offline`: Disabled appearance (gray background, gray text)
     * - `ghost`: Subtle action (white background, shadow)
     * - `warning`: Caution action (yellow background, white text)
     * - `danger`: Destructive action (red background, white text)
     *
     * @default 'primary'
     */
    variant?: ButtonVariant;
    /**
     * Click event handler.
     * Called when the button is clicked.
     */
    onClick: React.ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
    /**
     * Whether the button is disabled.
     * When true, the button cannot be clicked and appears faded.
     *
     * @default false
     */
    disabled?: boolean;
    /**
     * Content to be rendered inside the button.
     * Can be text, icons, or any valid React node.
     */
    children?: React.ReactNode;
    /**
     * HTML button type attribute.
     * - `button`: No default behavior
     * - `submit`: Submits the parent form
     * - `reset`: Resets the parent form
     *
     * @default 'button'
     */
    type?: ButtonType;
};

const variantClasses = {
    primary: styles.primary,
    secondary: styles.secondary,
    offline: styles.offline,
    ghost: styles.ghost,
    warning: styles.warning,
    danger: styles.danger,
}

/**
 * Button component for user interactions.
 * Supports multiple visual variants for different contexts and actions.
 *
 * @example
 * ```tsx
 * <Button variant="primary" onClick={() => console.log('clicked')}>
 *   Iniciar sesión
 * </Button>
 * ```
 *
 * @example
 * ```tsx
 * <Button variant="danger" onClick={handleDelete}>
 *   Eliminar cuenta
 * </Button>
 * ```
 */
export function Button ({ variant = 'primary', onClick, disabled = false, children, type = 'button' }: ButtonProps) {
    return (
        <button className={`${styles.base} ${variantClasses[variant]}`} onClick={onClick} disabled={disabled} type={type}>
            {children}
        </button>
    );
}