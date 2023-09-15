const enter= document.getElementById('enter-name')
const check= document.getElementById('check')
const output= document.getElementById('output')

check.addEventListener('click', getFunction)

function getFunction () {
  fetch( "https://api.github.com/ewiJosepha" )

  .then((res)=>{
    return res.json()
  })
  .then((data)=>{
    console.log(data)
  })
  output.innerHTML= data
}