"use strict";



// place your code below

fetch('https://api.github.com/users/dkasyan/repos?sort=updated&direction=desc')
  .then(resp => resp.json())
  .then(resp => {
    const repos = resp;
    for (const repo of repos){
      const {description, homepage, html_url, name} = repo;
      console.log(repo.name)
      console.log(repo.html_url)
      list.innerHTML += `
      <li class="projects_list_item">
      <div class="projects_list_item_Container">
        <img src="assets/img/GithubIcon.svg">
        <h3 class="project_list_title">${name}</h3>
        ${
          description ? `<p class="project_list_description">${description}</p>` : 'No description'
        }        
      </div>
      <div class="projects_list_footer">
          <a class="projects_list_footer_link" href="#" title="Demo:Pierwsze">Demo</a>
          <a class="projects_list_footer_link" href="#" title="Source code: Pierwszerepo">Github</a>
      </div>
      </li>
      `;

    }
  })

console.log(`Hello world!`);


