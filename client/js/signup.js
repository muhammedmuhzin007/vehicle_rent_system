const form=document.getElementById('Register');

form.addEventListener('submit',(e)=>{
   e.preventDefault();

   let name=document.getElementById('name').value;
   let email=document.getElementById('email').value;
  let password=document.getElementById('password').value;
  
  let data={name,email,password};

  let xhr=new XMLHttpRequest();

  xhr.open('post','/submit',true);

  xhr.setRequestHeader('content-type','application/json');

  xhr.send(JSON.stringify(data));

  xhr.onload=function(){
    if (xhr.status===200){
      console.log(xhr.responseText);
    }
    else{
      console.error(xhr.statusText);
    }
  };

});