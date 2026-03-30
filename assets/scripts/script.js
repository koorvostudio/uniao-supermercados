import Header, { ChangeHeaderBehavior } from "./header.js";

Header();

window.addEventListener('scroll', () => {
    ChangeHeaderBehavior();
});