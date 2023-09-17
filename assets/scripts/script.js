const check = document.getElementById("check")
const output = document.getElementById("output")
const form = document.querySelector(".input-field")
let img = document.createElement("img")
let h3 = document.createElement("h3")
let p = document.createElement("p")
let a = document.createElement("a")
// output.append(h2)
output.append(h3)
output.append(img)
output.append(a)
// h2.append(ul)

// let p= document.createElement('p')
// output.append(p)

// function preventde () {

// }

form.addEventListener("submit", (event) => {
  event.preventDefault()
  let enter = document.getElementById("enter-name").value
  let netvalue = enter
  let secondEnter = netvalue
  console.log(secondEnter)
  let url = "https://api.github.com/users/" + secondEnter
  fetch(url)
    .then((res) => {
      return res.json()
      // console.log(res)
    })

    .then((data) => {
      if (data.message) {
        console.log("user not found")
        output.innerHTML = `<P>Profile is not Valid</P>`
      } else {
        // console.log(data)
        //viewing github profile
        `<img src="${data.avatar_url}">
        <p> ${data.name}  ${data.login}</P>`
        output.innerHTML = `<img src="${data.avatar_url}">
        
        <a href = "${data.html_url}" target="_blank">View-Profile</a>`
      }
    })
    .catch((error) => {
      console.log(error)
    })
})
