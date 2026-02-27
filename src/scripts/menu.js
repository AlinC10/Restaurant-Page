import item1Img from "../assets/img/bamboo-svgrepo-com.svg";
import item2Img from "../assets/img/bamboo-leaf.svg";
import item3Img from "../assets/img/soup.svg";
import item4Img from "../assets/img/sugar-cane.svg";
import item5Img from "../assets/img/milk.svg";

export const menu = (function () {
    function togglePage() {
        const contentDiv = document.getElementById("content");
        contentDiv.innerHTML = '<h2 class="page-title">Menu</h2>';

        const section = document.createElement("section");
        section.classList.add("menu-items");

        function menuItem(name, description, itemPrice, imageSrc) {
            const div = document.createElement("div");
            div.classList.add("item-cards");

            const h3 = document.createElement("h3");
            h3.textContent = name;
            h3.classList.add("item-name");

            const p = document.createElement("p");
            p.innerHTML = `<i>Description:</i> ${description}`;
            p.classList.add("item-description");

            const price = document.createElement("p");
            price.innerHTML = `<strong>Price:</strong> ${itemPrice}`;
            price.classList.add("item-price");

            const img = document.createElement("img");
            img.src = imageSrc;

            div.append(h3, p, price, img);
            section.append(div);
        }

        menuItem(
            "The Classic Crunchy Stick (Chef's Signature)",
            "A single, premium, artisanal bamboo shoot. Locally sourced, thoroughly sniffed, and guaranteed to take at least two hours to chew.",
            "3 yawns",
            item1Img,
        );

        menuItem(
            'The "I\'m on a Diet" Leaf Platter',
            "A massive pile of green bamboo leaves. Zero calories! (Disclaimer: You will need to eat about 40 lbs of this to feel full. Good luck.)",
            "2 stretches",
            item2Img,
        );

        menuItem(
            "Room-Temperature Twig Soup",
            "We gathered some nice twigs, put them in a bowl of fresh river water, and then took a nap. It’s served exactly as we left it. Refreshing!",
            "1 gentle roll on the floor",
            item3Img,
        );

        menuItem(
            "The Sugar Cane Surprise (Dessert)",
            'A sweet, crunchy stick of raw sugar cane. The "surprise" is that you have to peel it yourself while we watch and judge your technique.',
            "4 happy grunts",
            item4Img,
        );

        menuItem(
            "The Anti-Espresso (Beverage)",
            "Warm bamboo milk designed to completely drain any remaining energy you have. Warning: Do not operate heavy machinery (or climb trees) after drinking.",
            "Free, if you can stay awake to order it.",
            item5Img,
        );

        contentDiv.appendChild(section);
    }

    return { togglePage };
})();
