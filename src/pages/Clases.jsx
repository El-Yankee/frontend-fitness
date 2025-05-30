export default function Clases() {
  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Nuestras Clases</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Funcional</h3>
          <p>Entrenamientos dinámicos para ganar fuerza y resistencia.</p>
        </div>
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Cardio</h3>
          <p>Mejorá tu capacidad aeróbica y quemá calorías.</p>
        </div>
        <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Personalizadas</h3>
          <p>Planes 100% adaptados a tus objetivos.</p>
        </div>
      </div>
    </div>
  );
}
