import * as React from 'react';

import {about,  container, sectionTitle, description, highlights, card } from "./about.module.css";

export default function About() {
  return (
    <section className={about} id="about">
      <div className={container}>
        
        <h2 className={sectionTitle}>Sobre mí</h2>

        <p className={description}>
          Soy estudiante avanzado de Ingeniería en Software enfocado en el
          desarrollo backend utilizando tecnologías .NET. Me interesa construir
          aplicaciones escalables, APIs empresariales y soluciones basadas en
          arquitectura limpia.
        </p>

        <div className={highlights}>
          
          <div className={card}>
            <h3>Backend Development</h3>
            <p>
              Desarrollo APIs REST, lógica de negocio y arquitectura multicapa
              utilizando ASP.NET Core y Entity Framework.
            </p>
          </div>

          <div className={card}>
            <h3>Database Design</h3>
            <p>
              Diseño e implementación de bases de datos relacionales optimizadas
              utilizando SQL Server y MySQL.
            </p>
          </div>

          <div className={card}>
            <h3>Buenas Prácticas</h3>
            <p>
              Implementación de validaciones, manejo de errores, seguridad y
              organización de código orientado a mantenibilidad.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
