$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
const element = document.querySelector('#my-element');

element.addEventListener('touchmove', function(event) {
  // Xử lý sự kiện cảm ứng di chuyển ở đây
});
