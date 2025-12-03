document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.main-nav a');
    const dynamicContent = document.getElementById('dynamic-content');
  
    // Hiện nội dung khi nhấp vào liên kết
    navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
  
        // Lấy id của nội dung cần hiển thị
        const contentId = link.getAttribute('data-content');
        showContent(contentId);
      });
    });
  
    function showContent(contentId) {
      // Hiển thị #dynamic-content
      dynamicContent.style.display = 'block';
  
      // Ẩn tất cả các nội dung trước
      const contents = document.querySelectorAll('#dynamic-content > div');
      contents.forEach(content => {
        content.classList.add('hidden');
      });
  
      // Hiển thị nội dung tương ứng
      const contentToShow = document.getElementById(contentId);
      if (contentToShow) {
        contentToShow.classList.remove('hidden');
      } else {
        dynamicContent.innerHTML = '<p>Không có nội dung cho mục này.</p>';
      }
    }
  });


  document.addEventListener('DOMContentLoaded', function() {
    // Lấy tất cả hình ảnh trong các phần .image-sketch-1 và .image-sketch-2
    const images = document.querySelectorAll('.image-sketch-1 img, .image-sketch-2 img');

    // Thay đổi kích thước khi rê chuột vào
    images.forEach(image => {
        image.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.2)'; // Phóng to hình ảnh lên 20%
        });

        // Trở lại kích thước bình thường khi di chuột ra ngoài
        image.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)'; // Trở lại kích thước gốc
        });
    });
});


  
  