export default function Home() {
  return (
    <section className="bg-blue-50 py-20 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-4">
          Entrenamientos personalizados para vos
        </h2>
        <p className="text-lg mb-6">
          Clases online y presenciales adaptadas a tu nivel y objetivos.
        </p>
        <a
          href="/clases"
          className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700"
        >
          Ver Clases
        </a>
      </div>
    </section>
  );
}
