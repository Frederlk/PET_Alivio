// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

if (document.querySelector(".player-video")) {
    const videoThumb = document.querySelector(".player-video");
    const videoFile = document.getElementById("video-file");

    document.addEventListener("click", function (e) {
        if (e.target.closest(".player-video")) {
            if (videoThumb.classList.contains("_playing")) {
                videoFile.pause();
                videoThumb.classList.remove("_playing");
            } else {
                videoFile.play();
                videoThumb.classList.add("_playing");
            }
        }
    });
}
