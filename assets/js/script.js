
// Alterar Tema
const chk = document.getElementById('chk')

chk.addEventListener('change', () =>  {
    document.body.classList.toggle('dark')
})


// Tela de carregamento
window.addEventListener('load', () => {
    document.getElementById('loader').style.display = 'none';
});

// Filtro Projetos
const webFilter = document.getElementById('webFilter');
const designFilter = document.getElementById('designFilter');
const projects = document.querySelectorAll('.project');

webFilter.addEventListener('click', () => {
    projects.forEach(project => {
        if (project.classList.contains('web')) {
            project.classList.add('show');
        } else {
            project.classList.remove('show');
        }
    });
});

designFilter.addEventListener('click', () => {
    projects.forEach(project => {
        if (project.classList.contains('design')) {
            project.classList.add('show');
        } else {
            project.classList.remove('show');
        }
    });
});
