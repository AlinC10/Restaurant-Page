import pandaImg from "../assets/img/panda-eating.png";
import stopIcon from "../assets/img/stop-svgrepo-com.svg";
import silentIcon from "../assets/img/mute-svgrepo-com.svg";
import sleepIcon from "../assets/img/sleep-svgrepo-com.svg";

export const home = (function () {
    function togglePage() {
        const contentDiv = document.getElementById("content");
        contentDiv.innerHTML = "";

        const heroSection = document.createElement("section");
        heroSection.classList.add("hero");

        heroSection.innerHTML = `
        <div class="hero-text-container">
            <h1><span>Welcome to</span>The Chubby Panda</h1>
            <h2>Fine dining? No. Fine bamboo? Absolutely.</h2>
            <p class="hero-text">Join us for the ultimate slow-food experience. We believe chewing should take all day and napping at the table is highly encouraged.</p>
            <button data-page="menu">Go To Menu</button>
        </div>
        `;

        const img = document.createElement("img");
        img.src = pandaImg;
        heroSection.append(img);

        const aboutUs = document.createElement("section");
        aboutUs.classList.add("about-us");
        aboutUs.innerHTML = `
            <h3>Our Philosophy: Eat, Sleep, Repeat.</h3>
            <p>Here at Bamboo & Chill, we don’t do fast food. We do very slow food. Our executive chefs (who are mostly just rolling around on the kitchen floor) have curated a highly exclusive menu consisting of bamboo shoots, bamboo leaves, and for dessert... slightly sweeter bamboo.</p>
            <p><strong>Dress code: </strong>Fuzzy, mostly black and white, and wearing pants with an elastic waistband.</p>
        `;

        const houseRules = document.createElement("section");
        houseRules.classList.add("about-us");
        houseRules.innerHTML = `
            <h3>Our House Rules</h3>
            <p>We like to keep things simple and extremely low energy. Please respect the following:</p>
            <ul>
                <li><img src="${stopIcon}"><strong>No Sudden Movements: </strong>Fast walking startles the chef and he might drop your bamboo.</li>
                <li><img src="${silentIcon}"><strong>Whisper Your Order: </strong>If you wake up the table next to you, you have to pay for their meal.</li>
                <li><img src="${sleepIcon}"><strong>BYOP (Bring Your Own Pillow): </strong>We provide the floor, you provide the comfort. Napping between courses is mandatory.</li>
            </ul>
        `

        contentDiv.append(heroSection, aboutUs, houseRules);
    }

    return {togglePage};
})();