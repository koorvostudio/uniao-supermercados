import Categories from "./categories.js";
import Header, { ChangeHeaderBehavior } from "./header.js";
import ChangeMapLocation from "./map.js";

Header();
Categories();
ChangeMapLocation();

window.addEventListener('scroll', () => {
    ChangeHeaderBehavior();
});