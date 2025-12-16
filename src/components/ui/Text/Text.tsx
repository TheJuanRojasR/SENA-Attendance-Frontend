import type React from 'react';
import styles from './Text.module.css'

/**
 * HTML elements supported by the Text component.
 * Used to control the semantic meaning of the rendered text.
 */
type As = 'p' | 'span' | 'small'

/**
 * Available font sizes for the Text component.
 */
type Size = 'sm' | 'md' | 'lg'

/**
 * Color variants for the Text component.
 */
type Variant = 'default' | 'black' | 'success'

/**
 * Props for the Text component.
 */
type TextProps = {
    /**
     * HTML element to render.
     * Controls the semantic meaning of the text.
     *
     * @default 'p'
     * @example
     * <Text as="span">Inline text</Text>
     */
    as?: As;
    /**
     * Controls the font size of the text.
     *
     * @default 'sm'
     * @example
     * <Text size="lg">Large text</Text>
     */
    size?: Size;
    /**
     * Visual color variant of the text.
     *
     * @default 'default'
     * @example
     * <Text variant="success">Success message</Text>
     */
    variant?: Variant;
    /**
     * Allows passing custom class names for styling overrides or extensions.
     */ 
    className?: string;
    /**
     * Makes the text bold when set to true.
     *
     * @default false
     */
    isBold?: boolean;
    /**
     * Content of the Text component.
     * Can receive plain text or JSX.
     *
     * @example
     * <Text><strong>Hello</strong> world</Text>
     */
    children: React.ReactNode;
}

/**
 * Text component used to render typographic content with
 * consistent styles, sizes and semantic control.
 *
 * @example
 * <Text size="md" variant="black" isBold>
 *   Hello world
 * </Text>
 */
export function Text ({ as = 'p', size = 'sm', variant = 'default', className, isBold = false, children }: TextProps) {
    const Element = as;
    const bold = isBold ? styles.bold : '';
    
    return (
        <Element className={`${styles.base} ${styles[size]} ${styles[variant]} ${bold} ${className}`}>{children}</Element>
    );
}