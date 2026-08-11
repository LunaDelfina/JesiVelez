# Jesi Velez — Coronadas

Aplicación web desarrollada para Jesi Velez, profesional dedicada a tocados, accesorios y servicios para eventos.

Este proyecto es la reconstrucción de una web que desarrollé originalmente en 2023. Tres años después, decidí rehacerla desde cero para adaptar la experiencia a la evolución de la marca y aplicar todo lo que había aprendido desde la primera versión.

## 🎯 Sobre el proyecto

El objetivo fue transformar una página originalmente creada como uno de mis primeros proyectos web en una aplicación moderna, responsive y conectada a datos reales.

La primera versión estaba desarrollada con HTML, CSS, JavaScript, PHP y MySQL. Para esta nueva versión replanteé tanto la arquitectura como la experiencia de usuario y el diseño visual.

La nueva aplicación utiliza React en el frontend y Supabase para la gestión de datos, autenticación y almacenamiento de imágenes.

## ✨ Características

- Catálogo de productos conectado a una base de datos.
- Gestión dinámica de productos y categorías.
- Autenticación mediante Supabase.
- Carga y gestión de imágenes.
- Navegación entre diferentes secciones de la aplicación.
- Diseño responsive.
- Componentes reutilizables en React.
- Animaciones y transiciones para mejorar la experiencia de usuario.
- Interfaz diseñada específicamente alrededor de la identidad visual de la marca.

## 🏗️ Arquitectura

La aplicación utiliza una arquitectura basada en un frontend React conectado a los servicios backend de Supabase.

```text
┌─────────────────────────────┐
│          React UI           │
│                             │
│ Components / Pages / Routes │
└──────────────┬──────────────┘
               │
               │ Supabase Client
               ▼
┌─────────────────────────────┐
│          Supabase           │
│                             │
│ PostgreSQL │ Auth │ Storage │
└─────────────────────────────┘
