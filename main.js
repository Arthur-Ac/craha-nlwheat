const LinksSocialMedias = {
  github: 'Arthur-Ac',
  youtube: 'ChrisRamsay52',
  facebook: 'maykbrito',
  instagram: 'chrisramsay52',
  twitter: 'jakelinytec'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedias[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedias.github}`

  fetch(url) //pega dados da url
    .then(response => response.json()) //promisses - promessa - pega a resposta e transforma em json gera nova resposta em json agr
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    }) // armazena a resposta em json
}

getGitHubProfileInfos()
