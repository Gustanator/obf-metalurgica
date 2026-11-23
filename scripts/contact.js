const contatoEmail = document.querySelector("#contato-email")

contatoEmail.addEventListener("submit", event => {
    event.preventDefault();

    emailjs.init({
        publicKey: "B8jBarFkBUNOnFPU9",
    })

    emailjs.sendForm("service_vendas", "template_contact", contatoEmail)
        .then((response) => { alert("Mensagem enviada com sucesso!"); })
        .catch((error) => {
            alert("Ocorreu um erro com o envio do seu e-mail");
        });
})