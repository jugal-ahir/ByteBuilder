function loadProject(projectName) {
    const iframe = document.getElementById('project-frame');
    iframe.src = `projects/${projectName}/index.html`;
}
