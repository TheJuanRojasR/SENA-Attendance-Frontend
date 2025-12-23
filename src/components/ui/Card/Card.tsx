// import styles from './Card.module.css'
import { Title, Status, Text, Button } from '@/components';
import type React from 'react';

const CARD_SCHEDULE = {
    dayTime: 'L-V 06:00 a.m. – 06:00 p.m.',
    morning: 'L-V 06:00 a.m. – 01:00 p.m.',
    afternoon: 'L-V 12:00 p.m. – 06:00 p.m.',
    evening: 'L-V 06:00 p.m. – 10:00 p.m.',
    overnight: 'L-V 10:00 p.m. – 06:00 a.m.',
    mixed: 'L-V 06:00 p.m. – 10:00 p.m. S-D 06:00 a.m. – 06:00 p.m.',
    weekend: 'S-D 06:00 a.m. y 06:00 p.m.',
} as const;

type CardShift = keyof typeof CARD_SCHEDULE;

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

type CardStatus = keyof typeof CARD_STATUS;

type CardProps = {
    id: string;
    title: string
    status: CardStatus;
    code: string | number;
    schedule: CardShift;
    onActionClick: React.ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
    actionLabel: string;
    isActionDisabled?: boolean;
    className?: string;
}

export function Card ({ id, title, status, code, schedule, onActionClick, actionLabel, isActionDisabled = false, className }: CardProps) {
    const statusConfig = CARD_STATUS[status]; 
    const scheduleConfig = CARD_SCHEDULE[schedule];

    return (
        <article aria-labelledby={`card-title-${id}`} className={`${className ?? ''}`}>
            <header>
                <Title as='h3' id={`card-title-${id}`} size='sm'>{title}</Title>
                <Status variant={statusConfig.variant}>
                    {statusConfig.label}
                </Status>
            </header>
            <div>
                <Text as='p'>
                    Código: {code}
                </Text>
                <Text as='p'>
                    Horario: {scheduleConfig}
                </Text>
            </div>
            <footer>
                <Button onClick={onActionClick} isDisabled={isActionDisabled} variant={isActionDisabled ? 'offline' : 'secondary'} size='sm'>
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