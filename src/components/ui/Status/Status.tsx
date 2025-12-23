import type React from 'react';
import styles from './Status.module.css'

/**
 * Available visual variants for the Status component.
 * Each variant represents a different state with its own color scheme.
 */
type StatusVariant = 'active' | 'pending' | 'completed' | 'accepted' | 'rejected';

/**
 * Available sizes for the Status badge.
 */
type StatusSize = 'sm' | 'md' | 'lg';

/**
 * Props for the Status component.
 */
type StatusProps = {
    /**
     * Visual style variant of the status badge.
     * - `active`: Green badge for active/enabled states
     * - `accepted`: Green badge for approved items
     * - `pending`: Yellow/amber badge for waiting states
     * - `completed`: Blue badge for finished items
     * - `rejected`: Red badge for denied/error states
     */
    variant: StatusVariant;
    /**
     * Controls the size of the status badge.
     * - `sm`: Small (padding 2px 8px, extra small font)
     * - `md`: Medium (padding 4px 12px, small font)
     * - `lg`: Large (padding 6px 16px, base font)
     *
     * @default 'md'
     */
    size?: StatusSize;
    /**
     * Content to be rendered inside the badge.
     * Typically a short text label describing the status.
     */
    children: React.ReactNode;
    /**
     * Allows passing custom class names for styling overrides or extensions.
     */
    className?: string;
}

/**
 * Badge component for displaying status labels with semantic colors.
 *
 * @example
 * // Basic usage
 * <Status variant="active">Activo</Status>
 *
 * @example
 * // With custom size
 * <Status variant="pending" size="sm">Pendiente</Status>
 *
 * @example
 * // With custom className
 * <Status variant="rejected" size="lg" className="my-custom-class">Rechazado</Status>
 */
export function Status ({ variant, size = 'sm', children, className }: StatusProps) {
    return (
        <span className={`${styles.base} ${styles[variant]} ${styles[size]} ${className ?? ''}`}>
            {children}
        </span>
    );
}