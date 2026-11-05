const contatoEmail = document.querySelector("#contato-email")

contatoEmail.addEventListener("submit", event => {
    event.preventDefault();

    emailjs.init({
        publicKey: "B8jBarFkBUNOnFPU9",
    })

    emailjs.sendForm("service_gmail", "template_contact", contatoEmail)
        .then((response) => { alert("Mensagem enviada com sucesso!"); })
        .catch((error) => {
            console.log(error);
            alert("Ocorreu um erro com o envio do seu e-mail");
        });
})