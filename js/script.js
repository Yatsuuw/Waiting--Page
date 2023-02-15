const discordLink = document.querySelector(".p3");
const textContainer = document.createElement("div");
const middleContact = document.querySelector(".middle-contact");

textContainer.classList.add("discord-text");

discordLink.addEventListener("click", () => {
    if (textContainer.innerHTML === "") {
        textContainer.innerHTML = "<p>Rejoignez moi sur Discord : <span class='discord-username'>Yatsuu#5094</span><br><a>Cliquez sur l'ID pour copier.</a></p>";
        middleContact.after(textContainer);
        const discordUsername = document.querySelector(".discord-username");
        discordUsername.addEventListener("click", () => {
            navigator.clipboard.writeText(discordUsername.innerHTML);
        })
    } else {
        textContainer.innerHTML = "";
    }
});