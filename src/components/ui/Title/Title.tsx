import styles from './Title.module.css'

type As = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type Size = 'sm' | 'md' | 'lg'

type TitleProps = {
    as?: As;                     
    size?: Size;                  
    className?: string;
    children: React.ReactNode;
}

export function Title ({ as = 'h1', size = 'lg', className ,children }: TitleProps) {
    const Element = as;

    return (
        <Element className={`${styles.base} ${styles[size]} ${className}`}>{children}</Element>
    );
}