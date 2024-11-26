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

const Formulariowea: React.FC = () => {

  const [Data, setFormData] = useState<Data>({
 nombre: "",
    apellido: "",
    rut: "",
    correo: "",
    comentario: ""
  });
   
  
  const datawea = (eventou: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = eventou.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 
  const completo = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Datos del kongpare', Data);

    setFormData(Data);
    
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



const App: React.FC = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "20px" }}>
      <h1>Formulario con Componentes</h1>
      <Formulariowea />
    </div>
  );
};

export default App;
