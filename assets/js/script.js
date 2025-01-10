
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


// Imagem 3D
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.project-buttons button');
    
    buttons.forEach(button => {
        button.addEventListener('mousemove', function(e) {
            const width = button.offsetWidth;
            const height = button.offsetHeight;
            const offsetX = e.offsetX;
            const offsetY = e.offsetY;
            
            const moveX = (offsetX / width) * 30 - 15; 
            const moveY = (offsetY / height) * 30 - 15; 
            
            button.style.transform = `perspective(1000px) rotateX(${moveY}deg) rotateY(${moveX}deg)`;
        });

        button.addEventListener('mouseleave', function() {
            button.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
});


// Imagem Certificado
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('certificateModal');
    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.modal .close');
    const certificates = document.querySelectorAll('.certificate img');

    certificates.forEach(certificate => {
        certificate.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImage.src = certificate.src;
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
