const linksSocialMedias = {
  github: "marimontefusco",
  youtube: "#",
  instagram: "marimontefusco",
  facebook: "mariana.montefusco",
  twitter: "#"
}

function changeSocialMediaLinks() {
  const socialLinks = document.getElementById("socialLinks");

  for (const li of socialLinks.children) {
    const social = li.getAttribute("class");
    console.log(social);

    /*console.log(li.children[0].href);*/

    li.children[0].href = `https://${social}.com/${linksSocialMedias[social]}`;
  }
};

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedias.github}`;
  const userName = document.getElementById("userName");
  const userBio = document.getElementById("userBio");
  const userProfile = document.getElementById("userProfile");
  const userAvatar = document.getElementById("userAvatar");
  const userLogin = document.getElementById("userLogin");

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name;
      userBio.textContent = data.bio;
      userProfile.href = data.html_url;
      userAvatar.src = data.avatar_url;
      userLogin.textContent = data.login;
    })
};

changeSocialMediaLinks();
getGitHubProfileInfos();

/* 
function changePersonalName() {
    document.getElementById("userName").textContent = "Mariana Montefusco"

    userName.textContent = "Mariana Montefusco"
  };

changePersonalName();
*/
