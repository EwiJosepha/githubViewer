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
        output.innerHTML = `<img src="${data.avatar_url}">

          <P>Profile-Name: ${data.login}</p>
          <a href = '${data.html_url}' target='_blank'>View-Profile</a>`

      }
      console.log(data)
    })
    .catch((error) => {
      console.log(error)
    })
})
        // `<img src='${data.avatar_url}'>`
