function sendEmail(){
       let body = `
       <div>
           <h1>Hi, New Client </h1>
           <p>Full Name: ${document.querySelector('#f-name').value} ${document.querySelector('#l-name').value} </p>
           <p>Email: ${document.querySelector('#email').value}</p>
           <p>Phone: ${document.querySelector('#phone').value}</p>
       <div>`
       
       Email.send({
              SecureToken : "1b2d6471-399f-4583-99ac-55858fc7ade9",
              Host : "smtp.elasticemail.com",
              Username : "mahmoudelsawaf26@gmail.com",
              Password : "5CAAD8CD5FC4BE8C3BAC86FC8EA13436F3EB",
              To : 'mahmoudelsawaf26@gmail.com',
              From : "mahmoudelsawaf26@gmail.com",
              Subject : "New Client",
              Body : body,
       }).then(document.querySelector('.alert').classList.add('d-block'))
       .catch(console.log('error'))
};