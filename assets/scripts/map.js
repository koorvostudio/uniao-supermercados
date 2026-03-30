const mapElement = document.querySelector('.j_map');
const buttons = document.querySelectorAll('.j_map_locator');

const maps = {
    "morro-azul": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.1480527972144!2d-47.7822223317641!3d-15.898221197361298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a21c80d83f0f3%3A0xf36aee98c0036e1e!2sUni%C3%A3o%20Supermecados!5e0!3m2!1spt-BR!2sbr!4v1774892390608!5m2!1spt-BR!2sbr",
    "vila-nova": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3836.940738725759!2d-47.759578999999995!3d-15.909085999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a1f861424fbbb%3A0x1c75059af5015145!2sUni%C3%A3o%20Supermercados!5e0!3m2!1spt-BR!2sbr!4v1774877115774!5m2!1spt-BR!2sbr",
    "mangueiral": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.280320378259!2d-47.807209215022105!3d-15.891285608949135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2185d6c3e311%3A0xe49b18a767d4e062!2sUni%C3%A3o%20Supermercados!5e0!3m2!1spt-BR!2sbr!4v1774892143433!5m2!1spt-BR!2sbr"
};

export default function ChangeMapLocation() {
    buttons.forEach((element, i, arr) => {
        element.addEventListener("click", () => {
            const location = element.dataset.location
            arr.forEach(btn => btn.classList.remove('active'));
            element.classList.add('active');
            mapElement.src = maps[location];
        })
    });
}