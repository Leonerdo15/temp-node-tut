const http = require("http")

const server = http.createServer((req, res) => {
  if (req.url === '/'){
    res.end('Home page')
  } else if (req.url === '/about'){

    for (let i = 0; i < 500; i++) {
      for (let j = 0; j < 500; j++) {
        console.log(`${j} - ${i}`)
      }
    }
    res.end('About')
  } else {
    res.end('Error page')
  }
})

server.listen(5000, () =>{
  console.log('Server is listening on port 5000...')
})