// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

if (document.querySelector(".player-video")) {
    const videoThumb = document.querySelector(".player-video");
    const videoFile = document.getElementById("video-file");

    videoThumb.addEventListener("click", function (e) {
        if (videoThumb.classList.contains("_playing") && videoFile.paused) {
            videoFile.play();
            videoThumb.classList.add("_playing");
        } else {
            videoThumb.classList.remove("_playing");
            videoFile.pause();
        }
    });
}
