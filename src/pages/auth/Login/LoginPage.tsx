import styles from '@/pages/auth/Login/LoginPage.module.css'

import { Title } from "@/components";
import { Text } from "@/components";
import { Select } from "@/components";
import { Input } from "@/components";
import { Button } from "@/components";
import { useState } from "react";

export function LoginPage () {
    const [ documentType, setDocumentType ] = useState('');
    const [ documentNumber, setDocumentNumber ] = useState('');
    const [ password, setPassword ] = useState('');

    return (
        <section aria-labelledby="login-title" className={styles.loginPage}>
            <header className={styles.loginHeader}>
                <Title id="login-title">Iniciar sesión</Title>
                <Text>Gestiona tu asistencia de forma digital</Text>
            </header>

            <form onSubmit={(event) => event.preventDefault()} className={styles.loginForm}>
                <fieldset className={styles.documentFields}>
                    {/* `sr-only` (screen-reader only) es una clase CSS común que oculta visualmente el texto, pero lo mantiene disponible para lectores de pantalla. */}
                    <legend className="sr-only">Formulario de inicio de sesión</legend>

                    <Select
                        id="documentType"
                        name="documentType"
                        value={documentType}
                        onChange={(event) => setDocumentType(event.target.value)}
                        options={[
                            { label: "Cédula de ciudadanía", value: "cc" },
                            { label: "Tarjeta de identidad", value: "ti" },
                            { label: "Cédula de Extranjería", value: "ce" },
                            { label: "Pasaporte", value: "pa" },
                            { label: "Permiso por Protección Temporal", value: "ppt" },
                            { label: "Número de Identificación Tributaria", value: "nit" },
                        ]}
                        placeholder='Tipo'
                    />

                    <Input
                        id="documentNumber"
                        type="number"
                        name="documentNumber"
                        placeholder="Número de documento"
                        value={documentNumber}
                        onChange={(event) => setDocumentNumber(event.target.value)}
                    />
                </fieldset>

                <Input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />

                <Text variant='success' isBold className={styles.prueba}>
                    <a href="/forgot-password">¿Olvidaste tu contraseña?</a>
                </Text>
                
                {/* Falta onClick */}
                <Button onClick={() => {}}>Iniciar sesión</Button>
            </form>

            <nav aria-label="Registro">
                <Text>
                    ¿No tienes una cuenta? <a href="/register" className={styles.registerLink}>Crear perfil</a>
                </Text>
            </nav>
        </section>
    );
}