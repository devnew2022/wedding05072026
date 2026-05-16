
  const envelope = document.getElementById('envelope');
  const overlay = document.getElementById('intro-overlay');

  // div đầu tiên sau overlay
  const firstSection = document.querySelector("section");

  envelope.addEventListener('click', () => {

    // mở thư
    envelope.classList.add('open');

    // sau khi mở xong
    setTimeout(() => {

      // ẩn overlay
      overlay.classList.add('overlay-hide');

      // mở scroll
      document.body.style.overflow = "auto";

      // cuộn xuống nội dung
      setTimeout(() => {

        firstSection.scrollIntoView({
          behavior:'smooth'
        });

      }, 300);

    }, 1800);

  });

// start thẻ div 2 bên vào giữa
const animationSection = document.querySelector(".animation-section1");

// Reset về trạng thái ban đầu khi load lại
window.addEventListener("load", () => {
  animationSection.classList.remove("active");
  checkScroll();
});

// Kiểm tra vị trí scroll
function checkScroll() {
  const sectionTop = animationSection.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight * 0.8;

  // Khi kéo tới section => chạy hiệu ứng
  if (sectionTop < triggerPoint) {
    animationSection.classList.add("active");
  } else {
    // Kéo lên lại => trả về vị trí ban đầu
    animationSection.classList.remove("active");
  }
}

// Lắng nghe scroll
window.addEventListener("scroll", checkScroll);



// thẻ div click vào hiện khung quà
const openGift =
document.getElementById("openGift");

const popupGift =
document.getElementById("popupGift");

const closeGift =
document.getElementById("closeGift");

// mở popup
openGift.addEventListener(
  "click",
  () => {
    popupGift.classList.add("show");
  }
);

// đóng popup
closeGift.addEventListener(
  "click",
  () => {
    popupGift.classList.remove("show");
  }
);

// click nền để đóng
popupGift.addEventListener(
  "click",
  (e) => {
    if(e.target === popupGift){
      popupGift.classList.remove("show");
    }
  }
);

// lưu ảnh ổn định mobile + pc
document
.querySelectorAll(".save-btn")
.forEach(button => {

  button.addEventListener(
    "click",
    function(e){

      e.preventDefault();

      const imageUrl =
      this.getAttribute("href");

      const fileName =
      this.getAttribute("download");

      const link =
      document.createElement("a");

      link.href = imageUrl;
      link.download = fileName;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  );
});
