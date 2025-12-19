// Barrel
// Este archivo funciona como "barrel" (barril): un único punto para re-exportar
// tus componentes y evitar imports largos tipo: ../../components/algo/Algo
//
// 1) Agrega aquí una exportación por cada componente que quieras exponer.
// 2) Ajusta las rutas según tus nombres reales de archivos/carpetas.
// 3) Luego podrás importar desde: import { X } from "@/components";
//
// Ejemplos (elige un estilo y sé consistente):
// export * from "./Button/Button";
// export * from "./Input/Input";
//
// Si el componente es default export:
// export { default as Button } from "./Button/Button";
// export { default as Input } from "./Input/Input";

export * from '@/components/ui/Button/Button';
export * from '@/components/ui/Input/Input';
export * from '@/components/ui/Select/Select'
export * from '@/components/ui/Text/Text'
export * from '@/components/ui/Title/Title'
export * from '@/components/ui/Status/Status'