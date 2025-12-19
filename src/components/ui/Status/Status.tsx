import type React from 'react';
import styles from './Status.module.css'

type StatusVariant = 'active' | 'pending' | 'completed' | 'accepted' | 'rejected';

type StatusSize = 'sm' | 'md' | 'lg';

type StatusProps = {
    variant: StatusVariant;
    size?: StatusSize;
    children: React.ReactNode;
    className?: string;
}

export function Status ({ variant, size = 'md', children, className }: StatusProps) {
    return (
        <span className={`${styles.base} ${styles[variant]} ${styles[size]} ${className ?? ''}`}>
            {children}
        </span>
    );
}