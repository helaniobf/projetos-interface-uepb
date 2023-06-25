import React from 'react';

function Portfolio() {
  return (
    <div>
      {/* Seção de boas-vindas */}
      <section id="welcome-section" className="d-flex align-items-center">
        <div className="container text-center">
          <h1 className="display-4">Portifólio</h1>
        </div>
      </section>

      {/* Seção de projetos */}
      <section id="projects" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="project-tile p-3">
                <h2>Formulário de Pesquisa</h2>
                <p>Formulário</p>
                <a href="https://helaniobf.github.io/projetos-interface-uepb/Formulário de Pesquisa/" className="btn btn-primary" target="_blank">Visualizar</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="project-tile p-3">
                <h2>Página de Tributo</h2>
                <p>Tributo</p>
                <a href="https://helaniobf.github.io/projetos-interface-uepb/Página de Tributo/" className="btn btn-primary" target="_blank">Visualizar</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="project-tile p-3">
                <h2>Portfólio HTML</h2>
                <p>Portifólio</p>
                <a href="https://helaniobf.github.io/projetos-interface-uepb/Portif%C3%B3lio/" className="btn btn-primary" target="_blank">Visualizar</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Barra de navegação */}
      <nav id="navbar">
        <a href="#welcome-section">Início</a>
        <a href="#projects">Projetos</a>
        <a href="https://github.com/helaniobf/projetos-interface-uepb/blob/main/Grupo.txt" target="_blank">Perfis</a>
      </nav>

      {/* Link para o perfil */}
      <a href="https://github.com/helaniobf/projetos-interface-uepb/blob/main/Grupo.txt" id="profile-link" className="btn btn-primary" target="_blank">Nossos perfis no GitHub</a>
    </div>
  );
}

export default Portfolio;
