const Navbar = () => {
  return (
    <nav aria-label="Principal" className="flex justify-between items-center px-6 py-4 shadow">
      <h1 className="font-title text-xl text-primary">
        RGF Autorepuestos
      </h1>

      <ul className="flex gap-6">
        <li><a href="#about">Nosotros</a></li>
        
        {/* Botón oculto */}
        <li className="hidden">
          <a href="#catalog">Catálogo</a>
        </li>

        <li>
          <a href="#contact" className="text-secondary font-semibold">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;