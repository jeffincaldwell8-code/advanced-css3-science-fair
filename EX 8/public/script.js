// Fetch project details from the Node.js JSON API and display them.
const projectGrid = document.getElementById('project-grid');
const projectCount = document.getElementById('project-count');

async function loadProjects() {
  try {
    const response = await fetch('/api/projects');
    if (!response.ok) throw new Error('Could not load projects');

    const result = await response.json();
    projectCount.textContent = `${result.count} featured projects`;

    projectGrid.innerHTML = result.data.map(project => `
      <article class="project-card">
        <div class="project-icon">${project.icon}</div>
        <span class="category">${project.category}</span>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      </article>
    `).join('');
  } catch (error) {
    projectGrid.innerHTML = '<p class="loading">Projects could not be loaded. Please refresh the page.</p>';
    projectCount.textContent = 'Please try again';
    console.error(error);
  }
}

loadProjects();
