const button = document.getElementById('button');
const address = document.getElementById('address');
  const iName = document.getElementById('name');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const form = document.getElementById('myform');

// function onSumbitProduct(e) {
// e.preventDefault(); // prevent refresh after submit
  
 
 

//   fetch('http://localhost:3000/order', {
//     body: {
//       email: email.value,
//       name: name.value,
//       phone: phone.value,
//       address: address.value,
//     },
//     method: "POST",
//     headers: {
//       'Content-Type': 'application/json',
//     }
//   })
//   .then((res)=>{
//     return res.json();
//   })
//   .then((res)=>{
//     console.log('res', res);
//   })
//   .catch((err)=>{
//     console.log("err", err);
//   });
// }
form.addEventListener('submit', (ev)=>{
ev.preventDefault();
});



 button.onclick =() =>{
  

  fetch('http://localhost:3000/order', {
    body: JSON.stringify({
      email: email.value,
      name: iName.value,
      phone: phone.value,
      address: address.value
    }),
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then((res)=>{
    return res.json();
  })
  .then((res)=>{
    console.log('res', res);
  })
  .catch((err)=>{
    console.log("err", err);
  });
}