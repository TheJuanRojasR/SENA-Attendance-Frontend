import styles from './Title.module.css'

/**
 * Allowed HTML heading elements that the Title component can render.
 * This prop controls the semantic meaning of the title.
 */
type As = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

/**
 * Available visual sizes for the Title component.
 * This prop affects only styling, not semantic meaning.
 */
type Size = 'sm' | 'md' | 'lg'

/**
 * Props for the Title component.
 */
type TitleProps = {
    /**
     * Defines which HTML heading element will be rendered.
     * Controls semantics and accessibility.
     *
     * @default 'h1'
     */
    as?: As;
    /**
     * Controls the visual size of the title.
     * Does not affect the rendered HTML element.
     *
     * @default 'lg'
     */
    size?: Size;
    /**
     * Optional additional CSS class names.
     * Useful for layout or one-off styling needs.
     */
    className?: string;
    /**
     * Content to be rendered inside the title.
     * Can be text, JSX, or any valid React node.
     */
    children: React.ReactNode;
}

/**
 * Title component used for rendering semantic headings
 * with consistent styles across the application.
 *
 * @example
 * ```tsx
 * <Title as="h2" size="md">
 *   User Profile
 * </Title>
 * ```
 */
export function Title ({ as = 'h1', size = 'lg', className ,children }: TitleProps) {
    const Element = as;

    return (
        <Element className={`${styles.base} ${styles[size]} ${className}`}>{children}</Element>
    );
}