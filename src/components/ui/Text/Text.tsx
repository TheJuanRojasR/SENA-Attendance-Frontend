import type React from 'react';
import styles from './Text.module.css'

type As = 'p' | 'span' | 'small'

type Size = 'sm' | 'md' | 'lg'

type Variant = 'default' | 'black' | 'success'

type TextProps = {
    as?: As;
    size?: Size;
    variant?: Variant; 
    className?: string;
    isBold?: boolean;
    children: React.ReactNode;
}

export function Text ({ as = 'p', size = 'sm', variant = 'default', className, isBold = false, children }: TextProps) {
    const Element = as;
    const bold = isBold ? styles.bold : '';
    
    return (
        <Element className={`${styles.base} ${styles[size]} ${styles[variant]} ${bold} ${className}`}>{children}</Element>
    );
}