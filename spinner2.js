const anamation = ['\r|   ', '\r/   ', '\r-   ', '\r\\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\\   ']
let time = 200;
anamation.forEach((pic) => {
  setTimeout(() => {
    process.stdout.write(pic)
  }, time += 200)
})



