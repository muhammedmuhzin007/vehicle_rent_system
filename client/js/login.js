


const lform=document.getElementById('login');

lform.addEventListener('login',(login)=>{
  login.preventDefault();

  const lemail=document.getElementById('log-email').value;
  const lpassword=document.getElementById('log-pass').value;
  console.log(lemail);
  console.log(lpassword);
})