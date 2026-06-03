const bouquetCards = document.querySelectorAll(".product-card");

bouquetCards.forEach((card) => {
    const button = card.querySelector("button");

    button.addEventListener("click", () => {
        bouquetCards.forEach((item) => item.classList.remove("selected"));
        card.classList.add("selected");
        button.textContent = "Selected";

        bouquetCards.forEach((item) => {
            if (item !== card) {
                item.querySelector("button").textContent = "Select";
            }
        });
    });
});
