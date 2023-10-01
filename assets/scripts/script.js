const output = document.getElementById('output')
const form = document.querySelector('.input-field')
const img = document.createElement('img')
const h3 = document.createElement('h3')
const a = document.createElement('a')
output.append(h3)
output.append(img)
output.append(a)

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const enter = document.getElementById('enter-name').value
  const netvalue = enter
  const secondEnter = netvalue
  console.log(secondEnter)
  const url = 'https://api.github.com/users/' + secondEnter

  // fetching API from github

  fetch(url)
    .then((res) => {
      return res.json()
    })

    .then((data) => {
      if (data.message) {
        console.log('user not found')
        output.innerHTML = '<P>Profile is not Valid</P>'
      } else {
        // viewing github profile
        output.innerHTML = `<div class="picture"><img src="${data.avatar_url}"><h4>Profile-Name: ${data.login}</p><a href = '${data.html_url}' target='_blank'>View-Profile</a> <p>Bio:${data.bio}</p>
        </div>
        <div class="flexingfeatures"> 
        <strong>Following:${data.following}</strong>,  <strong>Followers:${data.followers}</strong> <strong>Repositories:${data.public_repos}</strong>
        </div>`
      }
      console.log(data)
    })
    .catch((error) => {
      console.log(error)
    })
})
