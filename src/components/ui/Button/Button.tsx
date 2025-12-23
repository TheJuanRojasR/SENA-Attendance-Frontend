import type React from "react";
import styles from './Button.module.css'

// Pendiente: Posiblemente creacion de prop para insertar un icono en el boton

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
 * Available sizes for the Button component.
 * Controls the height, padding, and font size of the button.
 */
type ButtonSize = 'sm' | 'md' | 'lg';

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
    isDisabled?: boolean;
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
    /**
     * Size of the button.
     * - `sm`: Small (height 32px, small font)
     * - `md`: Medium (height 40px, base font)
     * - `lg`: Large (height 48px, large font)
     *
     * @default 'lg'
     */
    size?: ButtonSize;
    /**
     * Custom class name(s) for additional styling or overrides.
     * Allows you to extend or override the default styles.
     */
    className?: string;
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
export function Button ({ variant = 'primary', onClick, isDisabled = false, children, type = 'button', size = 'lg', className }: ButtonProps) {
    return (
        <button className={`${styles.base} ${variantClasses[variant]} ${styles[size]} ${className ?? ''}`} onClick={onClick} disabled={isDisabled} type={type}>
            {children}
        </button>
    );
}