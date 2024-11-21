import React, { useState } from 'react';

// Definir el tipo de datos para los campos del formulario
interface FormData {
  nombre: string;
  apellido: string;
  rut: string;
  correo: string;
  comentario: string;
}

const App: React.FC = () => {
  // Estado inicial para el formulario
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    apellido: '',
    rut: '',
    correo: '',
    comentario: ''
  });

  // Función para manejar el cambio de los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
    console.log('Datos del formulario:', formData);
  };

  return (
    <div className="container">
      <h1>Formulario generico</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="rut">RUT</label>
          <input
            type="text"
            id="rut"
            name="rut"
            value={formData.rut}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="correo">Correo electrónico</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="comentario">Comentario</label>
          <textarea
            id="comentario"
            name="comentario"
            value={formData.comentario}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div>
          <button type="submit">Guardar</button>
        </div>
      </form>
    </div>
  );
};

export default App;
