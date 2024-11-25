import { Button } from '@mui/material';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';


interface Data {
  nombre: string;
  apellido: string;
  rut: string;
  correo: string;
  comentario: string;
}

const App: React.FC = () => {
 
  const iniciopagina: Data = {
    nombre: '',
    apellido: '',
    rut: '',
    correo: '',
    comentario: '',
  };

  const [Data, setFormData] = useState<Data>(iniciopagina);

  
  const datawea = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 
  const completo = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Datos del formulario:', Data);

    setFormData(iniciopagina);
    
  };

  return (
    <div className="container">
      <h1>Formulario genérico</h1>
      <form onSubmit={completo}>
        <div>
        <TextField id="outlined-basic" label="nombre" variant="outlined" 
            type="text"
            name="nombre"
            value={Data.nombre}
            onChange={datawea}
            required
          />
        </div>

        <div>
        <TextField id="outlined-basic" label="apellido" variant="outlined" 
            type="text"
            name="apellido"
            value={Data.apellido}
            onChange={datawea}
            required
          />
        </div>

        <div>
        <TextField id="outlined-basic" label="rut" variant="outlined" 
            type="text"
            name="rut"
            value={Data.rut}
            onChange={datawea}
            required
          />
        </div>

        <div>
          <TextField id="outlined-basic" label="correo electronico" variant="outlined" 
            type="email"
            name="correo"
            value={Data.correo}
            onChange={datawea}
            required
          />
        </div>

        <div>
          <label htmlFor="comentario">Comentario</label>
          <textarea id="comentario"
            name="comentario"
            value={Data.comentario}
            onChange={datawea}
            required
          ></textarea>
        </div>

        <div>
          <Button type="submit" variant="contained">Guardar</Button>  
        
        
        </div>
      </form>
    </div>
  );
};

export default App;
