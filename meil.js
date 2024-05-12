document.querySelector("#emailForm").addEventListener("submit", async function (e) {
    e.preventDefault()
    const email = document.querySelector("#email").value
    const name = document.querySelector("#nimi").value
    const content = document.querySelector("#sisu").value
    const payload = {
      email, name, content
    }
    
  
    const result = await fetch('https://mailer-rust.vercel.app/mail', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    })
    document.querySelector("#email").value = ""
    document.querySelector("#nimi").value = ""
    document.querySelector("#sisu").value = ""
  
    console.log('result', result)
    console-alert('Kiri saadetud!')
  });
  
  
 