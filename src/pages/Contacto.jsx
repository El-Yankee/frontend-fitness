export default function Contacto() {
  return (
    <div className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Contacto</h2>
      <p className="mb-4">
        ¿Querés sumarte a una clase o tenés alguna consulta? Escribinos:
      </p>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Tu nombre"
          className="w-full p-3 border rounded"
        />
        <input
          type="email"
          placeholder="Tu email"
          className="w-full p-3 border rounded"
        />
        <textarea
          placeholder="Tu mensaje"
          className="w-full p-3 border rounded h-32"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
