
function sleep ( valor ) {
  return new Promise ( (res, rej) => { 
     setTimeout( res,3000,valor )
  }).then((resposta) => {
    console.log(resposta)
  })
}

  console.log(sleep('teste'))