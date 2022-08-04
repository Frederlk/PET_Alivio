// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

if (document.querySelector(".column-video")) {
    let videoThumb = document.querySelector(".column-video__thumbnail");
    videoThumb.addEventListener("click", function (e) {
        videoThumb.classList.toggle("_active");
    });
}
