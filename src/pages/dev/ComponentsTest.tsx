import { Card } from '@/components';

export function ComponentTest () {
    return (
        <Card
            id='1'
            title='Analisis de Requisitos'
            status="finalized"
            code={220501092}
            schedule='overnight'
            actionLabel='Ingresar'
            onActionClick={() => {}}
        />
    );
}