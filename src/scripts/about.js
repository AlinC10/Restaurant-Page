import L from "leaflet";
import "leaflet/dist/leaflet.css";
import pandaIcon from "../assets/img/panda-svgrepo-com.svg"

import scheduleIcon from "../assets/img/clock-svgrepo-com.svg";
import contactIcon from "../assets/img/contact-24hr-svgrepo-com.svg";
import gpsIcon from "../assets/img/location-pin-svgrepo-com.svg";

export const about = (function () {
    function togglePage() {
        const contentDiv = document.getElementById("content");
        contentDiv.innerHTML = '<h2 class="page-title">About<h2>';

        const div = document.createElement("div");
        div.classList.add("about-us-content");

        function createSection(sectionTitle, sectionContent) {
            const h3 = document.createElement("h3");
            h3.innerHTML = sectionTitle;

            const section = document.createElement("section");
            section.append(h3);
            section.innerHTML += sectionContent;
            section.classList.add("item-cards");

            div.append(section);
        }

        createSection(
            `<img src="${scheduleIcon}">When Are We Open? (Barely)`,
            `<p>We strictly prioritize our beauty sleep. Please plan your visit accordingly.</p>
             <ul>
                <li><strong>Monday - Wednesday: </strong>12:00 PM – 1:30 PM (Open for lunch and light stretching)</li>
                <li><strong>Thursday: </strong>Closed (Too tired from Wednesday)</li>
                <li><strong>Friday: </strong>2:00 PM – 3:00 PM (Pre-weekend snacking)</li>
                <li><strong>Saturday & Sunday: </strong>Closed for intense digesting and rolling down hills.</li>
             </ul>
            `,
        );

        createSection(
            `<img src="${contactIcon}">Get in Touch`,
            `<ul>
            <li><strong>Phone: </strong>+1-800-CHUBBY (<strong>Please note:</strong> we rarely answer because our paws are too big for the buttons on the phone).</li>
            <li><strong>Email: </strong>naps@chubbypanda.com (Expect a reply within 3 to 5 business months).</li>
            <li><strong>Social Media: </strong>Follow us on Pawsagram to watch live streams of us doing absolutely nothing.</li>
            </ul>
            `,
        );

        createSection(
            `<img src="${gpsIcon}">Location`,
            `<i>123 Deep Bamboo Forest, Third giant rock on the left.</i>
             <p>If you reach the snow-capped mountains, you’ve gone too far. If you hear loud snoring, you’re exactly in the right place. (<strong>Note:</strong> We do not offer valet parking. You have four paws, use them.)</p>
             <div id="map-container">
                <div id="map"></div>
             </div>
            `,
        );
        contentDiv.append(div);

        addMap();
    }

    function addMap() {
        const map = L.map("map").setView(
            [35.01709744653414, 135.67134739192335],
            15,
        );

        const layer = L.tileLayer(
            "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
            {
                maxZoom: 19,
                attribution:
                    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            },
        ).addTo(map);

        const pandaMarker = L.icon({
            iconUrl: pandaIcon,
            iconSize: [40, 40],
            iconAnchor: [20, 40],
            popupAnchor: [0, -40],
        })

        const marker = L.marker([35.016586588810846, 135.67119882368164], {icon: pandaMarker}).addTo(
            map,
        );
        marker.bindPopup("<div style=\"font-size: 1.3rem\"><strong>The Chubby Panda</strong><br>Zzz... We are here.</div>");
    }

    return { togglePage };
})();
