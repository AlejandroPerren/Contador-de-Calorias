import { categories } from "../data/categories";

export const Form = () => {
  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg">
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-bold">Categoria:</label>
        <select
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          id="category"
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="activity" className="font-bold">Actividad</label>
        <input
        className="border border-slate-300 p-2 rounded-lg w-full bg-white"
        id="activity"
        type="text"
        placeholder="Ej. Comida, Jugo de naranja, Ensalada, ejercicio, pesas"
        />

      </div>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-bold">Calorias</label>
        <input
        className="border border-slate-300 p-2 rounded-lg w-full bg-white"
        id="calories"
        type="text"
        placeholder="Calorias. Ej. 300 o 500"
        />
      </div>
      <input
      type="submit"
      className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold text-white uppercase"
      value= 'Guardar Comida o Ejercicio'
      />
    </form>
  );
};
