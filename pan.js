function toggleMenu() {
  const menu = document.querySelector(".menu");
  const menuIcon = document.querySelector(".menu-icon");

  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    menuIcon.style.left = "10px";
  } else {
    menu.classList.add("active");
    menuIcon.style.left = "210px";
  }
}

function toggleDropdown(button) {
  const dropdown = button.nextElementSibling;
  if (dropdown && dropdown.classList.contains("dropdown")) {
    dropdown.style.display =
      dropdown.style.display === "block" ? "none" : "block";
  }
}

function showImage(imageId) {
  // Hiển thị hình ảnh lớn
  const images = document.querySelectorAll(".image-display img");
  images.forEach((img) => img.classList.remove("active"));

  const selectedImage = document.getElementById(imageId);
  if (selectedImage) {
    selectedImage.classList.add("active");
  }

  // Hiển thị các điểm tương ứng
  const pointsContainers = document.querySelectorAll(".points-container");
  pointsContainers.forEach((container) => container.classList.remove("active"));

  const selectedPoints = document.getElementById(`points-${imageId}`);
  if (selectedPoints) {
    selectedPoints.classList.add("active");
  }

  // === ẨN / HIỆN small-image ===
  const smallImage = document.getElementById("small-image");
  const drag = document.getElementById("draggable");

  if (imageId === "img1") {
    smallImage.style.display = "none";
    drag.style.display = "none";
    drag.style.visibility = "hidden";
  } else {
    smallImage.style.display = "block";
    drag.style.display = "block";
    drag.style.visibility = "visible";
  }

  // Hiển thị hình ảnh nhỏ (logic cũ có thể giữ)
  if (imageId) {
    smallImage.classList.add("show");
  } else {
    smallImage.classList.remove("show");
  }

  // Hiển thị nút kéo (cũ)
  const draggableElements = document.querySelectorAll(".draggable");
  draggableElements.forEach((element) => (element.style.display = "block"));
  draggable.style.left = "";
  draggable.style.top = "";
  draggable.style.right = "";

  // Ẩn menu
  const menu = document.querySelector(".menu");
  const menuIcon = document.querySelector(".menu-icon");
  menu.classList.remove("active");
  menuIcon.style.left = "10px";
}

// Kiểm tra khi nút kéo gần điểm
// function checkPosition() {
//   const draggableRect = draggable.getBoundingClientRect();
//   const activePoints = document.querySelectorAll('.points-container.active .point');
//   let imageChanged = false;

//   if (activePoints) {
//     activePoints.forEach(point => {
//       const pointRect = point.getBoundingClientRect();
//       if (
//         draggableRect.left < pointRect.right &&
//         draggableRect.right > pointRect.left &&
//         draggableRect.top < pointRect.bottom &&
//         draggableRect.bottom > pointRect.top
//       ) {
//         const smallImage = document.getElementById('small-image');
//         const newImageSrc = point.getAttribute('data-small-image');
//         if (smallImage.src !== newImageSrc) {
//           smallImage.src = newImageSrc;
//         }
//         smallImage.classList.add('show');
//         imageChanged = true;
//       }
//     });
//   }

//   // Khôi phục hình ảnh gốc nếu không có điểm nào gần
//   if (!imageChanged) {
//     const smallImage = document.getElementById('small-image');
//     smallImage.src = 'NG/0V.png';
//   }
// }

// // Kiểm tra vị trí khi di chuyển
// setInterval(checkPosition, 10);

// Thêm biến trạng thái để xác định nếu nút kéo đã được chọn
let isDragging = false; // Trạng thái chọn
let offsetX = 0,
  offsetY = 0; // Khoảng cách giữa chuột và vị trí phần tử

// Khi nhấn chuột vào nút kéo
draggable.addEventListener("mousedown", (event) => {
  // Nếu không phải đang di chuyển, ta sẽ bắt đầu chọn và di chuyển
  if (!isDragging) {
    isDragging = true; // Đánh dấu nút kéo đang được chọn

    // Tính toán khoảng cách giữa chuột và phần tử
    offsetX = event.clientX - draggable.getBoundingClientRect().left;
    offsetY = event.clientY - draggable.getBoundingClientRect().top;

    // Lắng nghe sự kiện chuột di chuyển để di chuyển nút kéo
    const onMouseMove = (moveEvent) => {
      if (isDragging) {
        // Di chuyển nút kéo theo chuột
        draggable.style.left = moveEvent.clientX - offsetX + "px";
        draggable.style.top = moveEvent.clientY - offsetY + "px";
      }
    };

    // Lắng nghe sự kiện chuột di chuyển
    document.addEventListener("mousemove", onMouseMove);

    // Lắng nghe sự kiện khi nhả chuột (thả)
    const onMouseUp = () => {
      // Khi nhả chuột, kết thúc việc di chuyển
      isDragging = false; // Đánh dấu kết thúc di chuyển
      document.removeEventListener("mousemove", onMouseMove); // Hủy sự kiện di chuyển
      document.removeEventListener("mouseup", onMouseUp); // Hủy sự kiện nhả chuột
    };

    // Bắt sự kiện nhả chuột
    document.addEventListener("mouseup", onMouseUp);
  }
});

// Đảm bảo menu mở sẵn khi trang tải
window.addEventListener("load", () => {
  const menu = document.querySelector(".menu");
  const menuIcon = document.querySelector(".menu-icon");

  // Mở menu sẵn khi trang được tải
  menu.classList.add("active");
  menuIcon.style.left = "210px"; // Hoặc giá trị phù hợp với yêu cầu của bạn
});
