import styles from './Card.module.css'
import { Title, Status, Text, Button } from '@/components';
import type React from 'react';

/**
 * Mapping between schedule identifiers and display labels.
 * Used to keep schedule definitions centralized and consistent.
 */
const CARD_SCHEDULE = {
    dayTime: 'L-V 06:00 a.m. – 06:00 p.m.',
    morning: 'L-V 06:00 a.m. – 01:00 p.m.',
    afternoon: 'L-V 12:00 p.m. – 06:00 p.m.',
    evening: 'L-V 06:00 p.m. – 10:00 p.m.',
    overnight: 'L-V 10:00 p.m. – 06:00 a.m.',
    mixed: 'L-V 06:00 p.m. – 10:00 p.m. S-D 06:00 a.m. – 06:00 p.m.',
    weekend: 'S-D 06:00 a.m. - 06:00 p.m.',
} as const;

/**
 * Available schedule types for a Card.
 * Each value maps to a human-readable schedule string.
 */
type CardShift = keyof typeof CARD_SCHEDULE;

/**
 * Configuration object that maps card statuses
 * to their visual representation and label.
 */
const CARD_STATUS = {
    active: {
        variant: 'active',
        label: 'Activo',
    },
    pending: {
        variant: 'pending',
        label: 'Próximo',
    },
    finalized: {
        variant: 'rejected',
        label: 'Finalizado',
    },
} as const;

/**
 * Supported status values for the Card component.
 * Each status maps to a visual variant and label.
 */
type CardStatus = keyof typeof CARD_STATUS;

/**
 * Props for the Card component
 */
type CardProps = {
    /**
     * Unique identifier for the card.
     * Used to link accessibility attributes (aria-labelledby / aria-describedby).
     */
    id: string;
    /**
     * Main title of the card.
     * Usually represents the course or competency name.
     */
    title: string
    /**
     * Current status of the card.
     * Controls the visual appearance of the Status component.
     */
    status: CardStatus;
    /**
     * Code associated with the course or competency.
     */
    code: string | number;
    /**
     * Schedule key used to resolve the display label.
     */
    schedule: CardShift;
    /**
     * Callback executed when the action button is clicked.
     */
    onActionClick: React.ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
    /**
     * Label displayed inside the action button.
     */
    actionLabel: string;
    /**
     * Disables the action button when true.
     * @default false
     */
    isActionDisabled?: boolean;
    /**
     * Optional additional CSS class for custom styling.
     */
    className?: string;
}

/**
 * Card component for displaying course or competency information in a structured, accessible card format.
 *
 * Muestra título, estado, código, horario y un botón de acción.
 *
 * @param {CardProps} props - Props del componente Card.
 * @returns {JSX.Element} Tarjeta visual con información y acción.
 *
 * @example
 * // Ejemplo de uso básico:
 * <Card
 *   id="card-1"
 *   title="Competencia: Programación Web"
 *   status="active"
 *   code="12345"
 *   schedule="morning"
 *   actionLabel="Ver Detalles"
 *   onActionClick={() => alert('Ver detalles')}
 * />
 */
export function Card ({ id, title, status, code, schedule, onActionClick, actionLabel, isActionDisabled = false, className }: CardProps) {
    const statusConfig = CARD_STATUS[status]; 
    const scheduleConfig = CARD_SCHEDULE[schedule];

    const titleId = `card-title-${id}`;
    const descriptionId = `card-desc-${id}`;

    return (
        <article aria-labelledby={titleId} aria-describedby={descriptionId} className={`${styles.card} ${className ?? ''}`}>
            <header className={styles.header}>
                <Title as='h3' id={titleId} size='sm' className={styles.title}>{title}</Title>
                <Status variant={statusConfig.variant}>
                    {statusConfig.label}
                </Status>
            </header>
            <div id={descriptionId}>
                <Text as='p'>
                    Código: {code}
                </Text>
                <Text as='p'>
                    Horario: {scheduleConfig}
                </Text>
            </div>
            <footer>
                <Button onClick={onActionClick} isDisabled={isActionDisabled} variant={isActionDisabled ? 'offline' : 'secondary'} size='md'>
                    {actionLabel}
                </Button>
            </footer>
        </article>
    );
}

// Jornada Diurna     = dayTime
// Jornada Manañana   = morning
// Jornada Tarde      = afternoon
// Jornada Noche      = night
// Jornada Madrugada  = overnight
// Jornada Mixta      = mixed
// Jornada Weekend    = fin de semana