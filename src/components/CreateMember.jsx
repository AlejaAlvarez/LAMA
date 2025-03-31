import { useState } from "react";

const CreateMember = () => {
  const [formData, setFormData] = useState({
    rider: "",
    nombre: "",
    apellido: "",
    celular: "",
    correo: "",
    fechaIngreso: "",
    direccion: "",
    member: "",
    cargo: "",
    rango: "",
    estatus: "",
    fechaNacimiento: "",
    cedula: "",
    rh: "",
    eps: "",
    padrino: "",
    foto: "",
    contactoEmergencia: "",
    ciudad: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4" style={{ color: "#181b32" }}>
        Crear Miembro
      </h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        {Object.keys(formData).map((field) => (
          <div key={field} className="flex flex-col">
            <label className="text-sm font-semibold capitalize" style={{ color: "#181b32" }}>
              {field.replace(/([A-Z])/g, " $1")}
            </label>
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="border rounded p-1"
            />
          </div>
        ))}
        <button
          type="submit"
          className="col-span-2 text-white p-2 rounded"
          style={{ backgroundColor: "#181b32" }}
        >
          Guardar
        </button>
      </form>
    </div>
  );
};

export default CreateMember;
