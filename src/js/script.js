const linksSocialMedias = {
  github: "marimontefusco",
  youtube: "#",
  instagram: "marimontefusco",
  facebook: "mariana.montefusco",
  twitter: "#"
};

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    /*console.log(li.children[0].href);*/

    const social = li.getAttribute("class")
    console.log(social)

    li.children[0].href = `https://${social}.com/${linksSocialMedias[social]}`
  }
};

function changePersonalName() {
  document.getElementById("userName").textContent = "Mariana Montefusco"
  /* userName.textContent = "Mariana Montefusco"*/
};

changeSocialMediaLinks();
changePersonalName();


/* To do: change to my github at div.github-container:    
function changeGithub() {
    const github = document.getElementsByClassName("github-container")
    github.children[0].href.textContent = `https://github.com/marimontefusco`

    const githubimg = document.getElementsByClassName("github-item")
    githubimg.getAttribute("href").textContent = `https://github.com/marimontefusco`

    console.log(github)
}

changeGithub()
*/




