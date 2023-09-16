const enter= document.getElementById('enter-name')
const check= document.getElementById('check')
const output= document.getElementById('output')
let p= document.createElement('p')
output.append(p)

check.addEventListener('click', getFunction)

function getFunction () {
  const url="https://api.github.com/search/repositories?q=stars:>100000"
  fetch( url)
 .then((res)=>{
    return res.json()
    // console.log(res)
  })

  .then ( (data)=>{
    data.items.forEach(i => {
      output.appendChild(document.createTextNode(i.full_name))
      output.appendChild(document.createElement('br'))
    });

  })

  
  // .then((data)=>{
  //   console.log(data)
  // })
}