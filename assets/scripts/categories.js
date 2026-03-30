const categoryButtons = document.querySelectorAll('.j_category');

export default function Categories() {
    categoryButtons.forEach((button, i, arr) => {
        button.addEventListener("click", () => {
            arr.forEach(btn => btn.classList.remove("selected"));
            button.classList.add("selected");
        });
    });
}