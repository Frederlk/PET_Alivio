if (document.querySelector('.column-video')) {
   let videoThumb = document.querySelector('.column-video__thumbnail');
   videoThumb.addEventListener("click", function (e) {
      videoThumb.classList.toggle("_active");
   });
}