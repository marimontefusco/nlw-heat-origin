const linksSocialMedias = {
  github: "marimontefusco",
  youtube: "UCqMcP-4pDs3_h4YpAAKh1gg",
  instagram: "marimontefusco",
  facebook: "mariana.montefusco",
  twitter: "#"
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    /*console.log(li.children[0].href);*/

    const social = li.getAttribute("class")
    console.log(social)

    li.children[0].href = `https://${social}.com/${linksSocialMedias[social]}`

    /*console.log(li.children[0].href)*/
  }
}

function changePersonalName() {
  document.getElementById("userName").textContent = "Mariana Montefusco"
  /* userName.textContent = "Mariana Montefusco"*/
}

/* To do: change to my github at div.github-container 
function changeGithub() {
    const github = document.getElementsByClassName("github-container");
    console.log(github);
    
    github.children[0].href.textContent = `https://github.com/${linksSocialMedias[0]}`
}

changeGithub()

*/

changeSocialMediaLinks()
changePersonalName()

