document.addEventListener("DOMContentLoaded", function () {
    // Load project data from JSON file
    fetch("projects.json")
      .then((response) => response.json())
      .then((data) => {
        // Loop through each project and create a project page
        data.forEach((project, index) => {
          createProjectPage(project, index);
        });
      })
      .catch((error) => {
        console.error("Error loading project data: ", error);
      });
  });
  
  function createProjectPage(project, index) {
    // Create a new project page section
    const projectPage = document.createElement("section");
    projectPage.id = "project" + index;
    projectPage.classList.add("project-page");
  
    // Populate the project page with data
    projectPage.innerHTML = `
      <h2>${project.title}</h2>
      <img src="${project.image}" alt="${project.title} Image">
      <p>${project.description}</p>
      <h3>Code Snippet</h3>
      <pre><code>${project.codeSnippet}</code></pre>
      <h3>Results</h3>
      <p>${project.results}</p>
    `;
  
    // Append the project page to the body
    document.body.appendChild(projectPage);
  }
  