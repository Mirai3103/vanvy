const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const mainContent = document.querySelector('main');

// Khi trang tải, đảm bảo menu không mở (khởi tạo trạng thái đóng)
document.addEventListener("DOMContentLoaded", () => {
    // Kiểm tra trạng thái lưu trong localStorage
    if (localStorage.getItem('menuOpen') === 'true') {
        // Nếu trước đó menu đã mở, thì giữ menu mở khi tải lại
        mainNav.classList.add('active');
        mainContent.classList.add('shift');
    } else {
        // Đảm bảo menu đóng khi tải lại trang
        mainNav.classList.remove('active');
        mainContent.classList.remove('shift');
    }
});

// Lắng nghe sự kiện click trên nút menu-toggle
menuToggle.addEventListener('click', () => {
    const isMenuOpen = mainNav.classList.contains('active');

    // Nếu menu chưa mở, mở menu và lưu trạng thái mở trong localStorage
    if (!isMenuOpen) {
        mainNav.classList.add('active');
        mainContent.classList.add('shift');
        localStorage.setItem('menuOpen', 'true'); // Lưu trạng thái mở
    } else {
        // Nếu menu đã mở, đóng menu và lưu trạng thái đóng trong localStorage
        mainNav.classList.remove('active');
        mainContent.classList.remove('shift');
        localStorage.setItem('menuOpen', 'false'); // Lưu trạng thái đóng
    }
});
// các element của các mục 

document.addEventListener("DOMContentLoaded", function() {
    const toggleIntro = document.querySelector('.toggle-intro');
    const togglePrinciple = document.querySelector('.toggle-principle');
    const togglePan = document.querySelector('.toggle-pan');
    const introItems = document.querySelector('.intro-sub-items');
    const principleItems = document.querySelector('.principle-sub-items');
    const panItems = document.querySelector('.pan-sub-items');


    toggleIntro.addEventListener('click', function() {
        const isOpen = this.getAttribute('aria-expanded') === 'true';

        // Đóng các mục khác
        principleItems.style.maxHeight = 0;
        principleItems.style.display = 'none';
        togglePrinciple.setAttribute('aria-expanded', 'false');
        panItems.style.maxHeight = 0;
        panItems.style.display = 'none';
        togglePan.setAttribute('aria-expanded', 'false');

        // Đổi trạng thái cho GIỚI THIỆU CHUNG
        this.setAttribute('aria-expanded', !isOpen);
        introItems.style.display = !isOpen ? 'block' : 'none';
        introItems.style.maxHeight = !isOpen ? introItems.scrollHeight + 'px' : 0;
    });

    togglePrinciple.addEventListener('click', function() {
        const isOpen = this.getAttribute('aria-expanded') === 'true';

        // Đóng các mục khác
        introItems.style.maxHeight = 0;
        introItems.style.display = 'none';
        toggleIntro.setAttribute('aria-expanded', 'false');
        panItems.style.maxHeight = 0;
        panItems.style.display = 'none';
        togglePan.setAttribute('aria-expanded', 'false');

        // Đổi trạng thái cho NGUYÊN LÝ HOẠT ĐỘNG
        this.setAttribute('aria-expanded', !isOpen);
        principleItems.style.display = !isOpen ? 'block' : 'none';
        principleItems.style.maxHeight = !isOpen ? principleItems.scrollHeight + 'px' : 0;
    });

    togglePan.addEventListener('click', function() {
        const isOpen = this.getAttribute('aria-expanded') === 'true';

        // Đóng các mục khác
        introItems.style.maxHeight = 0;
        introItems.style.display = 'none';
        toggleIntro.setAttribute('aria-expanded', 'false');
        principleItems.style.maxHeight = 0;
        principleItems.style.display = 'none';
        togglePrinciple.setAttribute('aria-expanded', 'false');

        // Đổi trạng thái cho PAN
        this.setAttribute('aria-expanded', !isOpen);
        panItems.style.display = !isOpen ? 'block' : 'none';
        panItems.style.maxHeight = !isOpen ? panItems.scrollHeight + 'px' : 0;
    });
});


        // Đổi trạng thái khi ấn vào mục Low của nguyên lý

        document.addEventListener("DOMContentLoaded", function() {
    const principleItems = document.querySelector('.principle-sub-items');

    // Đối tượng chứa nội dung cho từng mục
    const contentMap = {
        'BẬT CÔNG TẮC DÀN LẠNH CHẾ ĐỘ LOW': `
        <div class="LOW-container">
            <div class="LOW-image">
                <img src="image/LOW.png" alt="Chế độ LOW" id="image">
                <div id="wire1" class="doan-day-doc"></div>
                <div id="wire2" class="doan-day-doc-1"></div>
                <div id="wire3" class="doan-day-doc-2"></div>
                <div id="wire4" class="doan-day-doc-3"></div>
                <div id="wire5" class="doan-day-doc-4"></div>
                <div id="wire6" class="doan-day-doc-5"></div>
                <div id="wire7" class="doan-day-doc-6"></div>
                <div id="wire8" class="doan-day-doc-7"></div>
                <div id="wire9" class="doan-day-doc-8"></div>
                <div id="wire10" class="doan-day-doc-9"></div>
                <div id="wire11" class="doan-day-doc-10"></div>
                <div id="wire12" class="doan-day-doc-11"></div>
                <div id="wire13" class="doan-day-doc-12"></div>
                <div id="wire14" class="doan-day-doc-13"></div>
                <div id="wire15" class="doan-day-doc-14"></div>
                <div id="wire16" class="doan-day-doc-15"></div>

                <div id="wire17" class="doan-day-doc-16"></div>
                <div id="wire18" class="doan-day-doc-17"></div>
                <div id="wire19" class="doan-day-doc-18"></div>
                <div id="wire20" class="doan-day-doc-19"></div>
                <div id="wire21" class="doan-day-doc-20"></div>
                <div id="wire22" class="doan-day-doc-21"></div>
                <div id="wire23" class="doan-day-doc-22"></div>
                <div id="wire24" class="doan-day-doc-23"></div>
                <div id="wire25" class="doan-day-doc-24"></div>
                <div id="wire26" class="doan-day-doc-25"></div>
                <div id="wire27" class="doan-day-doc-26"></div>
                <div id="wire28" class="doan-day-doc-27"></div>
                <div id="wire29" class="doan-day-doc-28"></div>
                <div id="wire30" class="doan-day-doc-29"></div>

            </div>
            <div class="button-container">
                <button  onclick="toggleFlashing()">CÔNG TẮC LOW ON/OFF</button>
            </div>
            <div class="LOW-text">
        
            <p>BẬT CÔNG TẮC DÀN LẠNH CHẾ ĐỘ LOW<br>
                Dòng đi từ: IG ⇒ Khoá điện ⇒ Cầu chì 10A GAUGE ⇒ Cuộn dây HTR Relay ⇒ 9 (E1) ⇒ Mass. ⇒ HTR Relay đóng. <br>
                Cho dòng từ: Accu ⇒ Cầu chì 40A HTR ⇒ Tiếp điểm HTR Relay ⇒ E4 ⇒ E3 ⇒ Mass. ⇒ Quạt dàn lạnh quay với tốc độ thấp.
            </p>
        </div>
        </div>
        `,
        'BẬT CÔNG TẮC DÀN LẠNH CHẾ ĐỘ M1': `
            <div class="LOW-container">
            <div class="LOW-image">
                <img src="image/M1.png" alt="Chế độ LOW" id="image">
                <div id="wire1" class="doan-day-doc"></div>
                <div id="wire2" class="doan-day-doc-1"></div>
                <div id="wire3" class="doan-day-doc-2"></div>
                <div id="wire4" class="doan-day-doc-3"></div>
                <div id="wire5" class="doan-day-doc-4"></div>
                <div id="wire6" class="doan-day-doc-5"></div>
                <div id="wire7" class="doan-day-doc-6"></div>
                <div id="wire8" class="doan-day-doc-7"></div>
                <div id="wire9" class="doan-day-doc-8"></div>
                <div id="wire10" class="doan-day-doc-9"></div>
                <div id="wire11" class="doan-day-doc-10"></div>
                <div id="wire12" class="doan-day-doc-11"></div>
                <div id="wire13" class="doan-day-doc-12"></div>
                <div id="wire14" class="doan-day-doc-13"></div>
                <div id="wire15" class="doan-day-doc-14"></div>
                <div id="wire16" class="doan-day-doc-15"></div>

                <div id="wire17" class="doan-day-doc-16"></div>
                <div id="wire18" class="doan-day-doc-17"></div>
                <div id="wire19" class="doan-day-doc-18"></div>
                <div id="wire20" class="doan-day-doc-19"></div>
                <div id="wire21" class="doan-day-doc-20"></div>
                <div id="wire22" class="doan-day-doc-21"></div>
                <div id="wire23" class="doan-day-doc-22"></div>
                <div id="wire24" class="doan-day-doc-23"></div>
                <div id="wire25" class="doan-day-doc-24"></div>
                <div id="wire26" class="doan-day-doc-25"></div>
                <div id="wire27" class="doan-day-doc-26"></div>
                <div id="wire28" class="doan-day-doc-27"></div>
                <div id="wire31" class="doan-day-doc-30"></div>
                <div id="wire30" class="doan-day-doc-29"></div>
                <div id="wire32" class="doan-day-doc-31"></div>
                <div id="wire33" class="doan-day-doc-32"></div>
                <div id="wire34" class="doan-day-doc-33"></div>
                <div id="wire35" class="doan-day-doc-34"></div>
                <div id="wire36" class="doan-day-doc-35"></div>

            </div>
            <div class="button-container">
                <button onclick="toggleFlashing()">CÔNG TẮC M1 ON/OFF</button>
            </div>
            <div class="LOW-text">
        
            <p>BẬT CÔNG TẮC DÀN LẠNH CHẾ ĐỘ M1<br>
                Dòng đi từ: IG ⇒ Khoá điện ⇒ Cầu chì 10A GAUGE ⇒ Cuộn dây HTR Relay ⇒ 9 (E1) ⇒ Mass. ⇒ HTR Relay đóng. <br>
                Cho dòng từ: Accu ⇒ Cầu chì 40A HTR ⇒ Tiếp điểm HTR Relay ⇒ E4 ⇒ E3 ⇒ 7 (E1) ⇒ Mass. ⇒ Quạt dàn lạnh quay với tốc độ M1.
            </p>
        </div>
        </div>
        `,
        'BẬT CÔNG TẮC DÀN LẠNH CHẾ ĐỘ M2': `
           <div class="LOW-container">
            <div class="LOW-image">
                <img src="image/M2.png" alt="Chế độ LOW" id="image">
                <div id="wire1" class="doan-day-doc"></div>
                <div id="wire2" class="doan-day-doc-1"></div>
                <div id="wire3" class="doan-day-doc-2"></div>
                <div id="wire4" class="doan-day-doc-3"></div>
                <div id="wire5" class="doan-day-doc-4"></div>
                <div id="wire6" class="doan-day-doc-5"></div>
                <div id="wire7" class="doan-day-doc-6"></div>
                <div id="wire8" class="doan-day-doc-7"></div>
                <div id="wire9" class="doan-day-doc-8"></div>
                <div id="wire10" class="doan-day-doc-9"></div>
                <div id="wire11" class="doan-day-doc-10"></div>
                <div id="wire12" class="doan-day-doc-11"></div>
                <div id="wire13" class="doan-day-doc-12"></div>
                <div id="wire14" class="doan-day-doc-13"></div>
                <div id="wire15" class="doan-day-doc-14"></div>
                <div id="wire16" class="doan-day-doc-15"></div>

                <div id="wire17" class="doan-day-doc-16"></div>
                <div id="wire18" class="doan-day-doc-17"></div>
                <div id="wire19" class="doan-day-doc-18"></div>
                <div id="wire20" class="doan-day-doc-19"></div>
                <div id="wire21" class="doan-day-doc-20"></div>
                <div id="wire22" class="doan-day-doc-21"></div>
                <div id="wire23" class="doan-day-doc-22"></div>
                <div id="wire24" class="doan-day-doc-23"></div>
                <div id="wire25" class="doan-day-doc-24"></div>
                <div id="wire26" class="doan-day-doc-25"></div>
                <div id="wire27" class="doan-day-doc-26"></div>
                <div id="wire28" class="doan-day-doc-27"></div>
                <div id="wire37" class="doan-day-doc-36"></div>
                <div id="wire30" class="doan-day-doc-29"></div>
                <div id="wire38" class="doan-day-doc-37"></div>
                <div id="wire39" class="doan-day-doc-38"></div>
                <div id="wire40" class="doan-day-doc-39"></div>
                <div id="wire41" class="doan-day-doc-40"></div>
                <div id="wire36" class="doan-day-doc-35"></div>


            </div>
            <div class="button-container">
                <button onclick="toggleFlashing()">CÔNG TẮC M2 ON/OFF</button>
            </div>
            <div class="LOW-text">
        
            <p>BẬT CÔNG TẮC DÀN LẠNH CHẾ ĐỘ M2<br>
                 Dòng đi từ: IG ⇒ Khoá điện ⇒ Cầu chì 10A GAUGE ⇒ Cuộn dây HTR Relay ⇒ 9 (E1) ⇒ Mass. ⇒ HTR Relay đóng. <br>
                Cho dòng từ: Accu ⇒ Cầu chì 40A HTR ⇒ Tiếp điểm HTR Relay ⇒ E4 ⇒ E3 ⇒ 6 (E1) ⇒ Mass. ⇒ Quạt dàn lạnh quay với tốc độ M2.
            </p>
        </div>
        </div>
        `,
        'BẬT CÔNG TẮC DÀN LẠNH CHẾ ĐỘ HI': `
            <div class="LOW-container">
            <div class="LOW-image">
                <img src="image/HIGH.png" alt="Chế độ LOW" id="image">
                <div id="wire1" class="doan-day-doc"></div>
                <div id="wire2" class="doan-day-doc-1"></div>
                <div id="wire3" class="doan-day-doc-2"></div>
                <div id="wire4" class="doan-day-doc-3"></div>
                <div id="wire5" class="doan-day-doc-4"></div>
                <div id="wire6" class="doan-day-doc-5"></div>
                <div id="wire7" class="doan-day-doc-6"></div>
                <div id="wire8" class="doan-day-doc-7"></div>
                <div id="wire9" class="doan-day-doc-8"></div>
                <div id="wire10" class="doan-day-doc-9"></div>
                <div id="wire11" class="doan-day-doc-10"></div>
                <div id="wire12" class="doan-day-doc-11"></div>
                <div id="wire13" class="doan-day-doc-12"></div>
                <div id="wire14" class="doan-day-doc-13"></div>
                <div id="wire15" class="doan-day-doc-14"></div>
                <div id="wire16" class="doan-day-doc-15"></div>

                <div id="wire17" class="doan-day-doc-16"></div>
                <div id="wire18" class="doan-day-doc-17"></div>
                <div id="wire19" class="doan-day-doc-18"></div>
                <div id="wire20" class="doan-day-doc-19"></div>
                <div id="wire21" class="doan-day-doc-20"></div>
                <div id="wire22" class="doan-day-doc-21"></div>
                <div id="wire23" class="doan-day-doc-22"></div>
                <div id="wire24" class="doan-day-doc-23"></div>
                <div id="wire25" class="doan-day-doc-24"></div>
                <div id="wire26" class="doan-day-doc-25"></div>
                <div id="wire27" class="doan-day-doc-26"></div>
                <div id="wire47" class="doan-day-doc-46"></div>
                <div id="wire42" class="doan-day-doc-41"></div>
                <div id="wire30" class="doan-day-doc-29"></div>
                <div id="wire43" class="doan-day-doc-42"></div>
                <div id="wire44" class="doan-day-doc-43"></div>
                <div id="wire45" class="doan-day-doc-44"></div>
                <div id="wire46" class="doan-day-doc-45"></div>
                <div id="wire36" class="doan-day-doc-35"></div>

            </div>
            <div class="button-container">
                <button onclick="toggleFlashing()">CÔNG TẮC HI ON/OFF</button>
            </div>
            <div class="LOW-text">
        
            <p>BẬT CÔNG TẮC DÀN LẠNH CHẾ ĐỘ HI<br>
                Dòng đi từ: IG ⇒ Khoá điện ⇒ Cầu chì 10A GAUGE ⇒ Cuộn dây HTR Relay ⇒ 9 (E1) ⇒ Mass. ⇒ HTR Relay đóng. <br>
                Cho dòng từ: Accu ⇒ Cầu chì 40A HTR ⇒ Tiếp điểm HTR Relay ⇒ E4 ⇒ 10 (E1) ⇒ Mass. ⇒ Quạt dàn lạnh quay với tốc độ cao.
            </p>
        </div>
        </div>
        `,
        'BẬT CÔNG TẮC A/C': `
        <div class="LHT-container">
        <div class="tablee-container">
                <table >
                    <thead>
                        <tr>
                            <th>Tín Hiệu</th>
                            <th>Ly hợp từ ON</th>
                            <th>Ly hợp từ OFF</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr contenteditable="true">
                            <td class="info-cell" data-info="IG (Chân 14): Chân IG trên bộ khuếch đại nhiệm vụ cấp nguồn cho bộ khuếch đại Amplifier hoạt động và nhận biết tín hiệu khi khoá IG bật ON.">IG ( 14 )</td>
                            <td>11-14 V</td>
                            <td>11-14 V</td>
                        </tr>
                        <tr contenteditable="true">
                            <td class="info-cell" data-info="MGC (Chân 15): Chân MGC trên bộ khuếch đại được dùng để cấp mass để làm đóng ly hợp từ, giúp cho máy nén hoạt động.">MGC ( 15 )</td>
                            <td>0V</td>
                            <td>11-14V</td>
                        </tr>
                        <tr contenteditable="true">
                            <td class="info-cell" data-info="A/C (Chân 27): Chân tín hiệu A/C giúp cho bộ khuếch đại nhận biết tín hiệu công tắc A/C trên bộ điều khiển dàn lạnh đã bật để giúp ly hợp từ hoạt động.">A/C ( 27 )</td>
                            <td>2V</td>
                            <td>0V</td>
                        </tr>
                        <tr contenteditable="true">
                            <td class="info-cell" data-info="SBLW (Chân 21): Nhận tín hiệu từ bộ điều khiển quạt dàn lạnh để bộ khuếch đại xác định công tắc đã bật để điều khiển ly hợp từ hoạt động.">SBLW ( 21 )</td>
                            <td>0V</td>
                            <td>11-14V</td>
                        </tr>
                        <tr contenteditable="true">
                            <td class="info-cell" data-info="GND (Chân 24): ): Chân mass của bộ khuếch đại Amplifier, giúp nối mass cho các tín hiệu và giúp bộ khuếch đại hoạt động.">GND ( 24 )</td>
                            <td>0V</td>
                            <td>0V</td>
                        </tr>
                        <tr contenteditable="true">
                            <td class="info-cell" data-info="SG-2 (Chân 23): Chân nối mass cho cảm biến nhiệt độ dàn lạnh.">SG-2 ( 23 )</td>
                            <td>0V</td>
                            <td>0V</td>
                        </tr>
                        <tr contenteditable="true">
                            <td class="info-cell" data-info="TE (Chân 22): Chân tín hiệu cảm biến nhiệt độ dàn lạnh, giúp ngắt ly hợp từ khi nhiệt độ đạt mức tránh gây đóng tuyết ở dàn lạnh.">TE ( 22 )</td>
                            <td>> 1.0 – 1.3 V</td>
                            <td>1.0 – 1.3 V</td>
                        </tr>
                        <tr contenteditable="true">
                            <td class="info-cell" data-info="ACT (Chân 19): Là chân tín hiệu nhận biết động cơ chạy không tải. Khi động cơ từ chế độ chạy không tải sang chế độ tăng tốc (tín hiệu cảm biến tốc độ động cơ được gửi từ bộ điều khiển ECM khi nhấn nhanh bàn đạp ga, tải tăng nhanh), bộ khuếch đại sẽ ngắt rơle ly hợp từ để giúp động cơ không bị tắt máy khi tăng tốc.">ACT ( 19 )</td>
                            <td>11-14V</td>
                            <td>0V</td>
                        </tr>
                        <tr contenteditable="true">
                            <td class="info-cell" data-info="PSW (Chân 12): Chân tín hiệu hoạt động của công tắc áp suất kép. Tín hiệu từ công tắc giúp ngắt rơle ly hợp từ khi áp suất môi chất lên quá cao (> 3,140 kPa ) hoặc quá thấp (< 196 kPa).">PSW ( 12 )</td>
                            <td>0V</td>
                            <td>11-14V</td>
                        </tr>
                    </tbody>
                </table>
                    <!-- Vùng chứa thông tin khi rê chuột -->
                    <div id="tooltip" class="tooltip"></div>
            </div>
            <div class="LHT-image">
                <img src="image/AC SWITCH.png" alt="Chế độ LOW" id="image">
                <div id="wire48" class="doan-day-doc-47"></div>
                <div id="wire49" class="doan-day-doc-48"></div>
                <div id="wire50" class="doan-day-doc-49"></div>
                <div id="wire51" class="doan-day-doc-50"></div>
                <div id="wire52" class="doan-day-doc-51"></div>
                <div id="wire53" class="doan-day-doc-52"></div>
                <div id="wire54" class="doan-day-doc-53"></div>
                <div id="wire55" class="doan-day-doc-54"></div>
                <div id="wire56" class="doan-day-doc-55"></div>
                <div id="wire57" class="doan-day-doc-56"></div>
                <div id="wire58" class="doan-day-doc-57"></div>
                <div id="wire59" class="doan-day-doc-58"></div>
                <div id="wire60" class="doan-day-doc-59"></div>
                <div id="wire61" class="doan-day-doc-60"></div>
                <div id="wire62" class="doan-day-doc-61"></div>
                <div id="wire63" class="doan-day-doc-62"></div>
                <div id="wire64" class="doan-day-doc-63"></div>
                <div id="wire65" class="doan-day-doc-64"></div>
                <div id="wire66" class="doan-day-doc-65"></div>
                <div id="wire67" class="doan-day-doc-66"></div>
                <div id="wire68" class="doan-day-doc-67"></div>
                <div id="wire69" class="doan-day-doc-68"></div>
                <div id="wire70" class="doan-day-doc-69"></div>
                <div id="wire71" class="doan-day-doc-70"></div>
                <div id="wire72" class="doan-day-doc-71"></div>
                <div id="wire73" class="doan-day-doc-72"></div>
                <div id="wire74" class="doan-day-doc-73"></div>
                <div id="wire75" class="doan-day-doc-74"></div>
                <div id="wire76" class="doan-day-doc-75"></div>
                <div id="wire77" class="doan-day-doc-76"></div>
                <div id="wire78" class="doan-day-doc-77"></div>
                <div id="wire79" class="doan-day-doc-78"></div>
                <div id="wire80" class="doan-day-doc-79"></div>
                <div id="wire81" class="doan-day-doc-80"></div>
                <div id="wire82" class="doan-day-doc-81"></div>
                <div id="wire83" class="doan-day-doc-82"></div>
                <div id="wire84" class="doan-day-doc-83"></div>
                <div id="wire85" class="doan-day-doc-84"></div>
                <div id="wire86" class="doan-day-doc-85"></div>
                <div id="wire87" class="doan-day-doc-86"></div>


                <div id="wire88" class="doan-day-doc-87"></div>
                <div id="wire89" class="doan-day-doc-88"></div>
                <div id="wire90" class="doan-day-doc-89"></div>
                <div id="wire91" class="doan-day-doc-90"></div>


            </div>
            <div class="button-containerr">
                <button onclick="toggleFlashing()">CÔNG TẮC AC ON/OFF</button>
            </div>
        </div>
        `


        ,
        'QUẠT DÀN NÓNG TỐC ĐỘ THẤP': `
        <div class="QDN-container">
        <div class="QDNn-container">
                <p class="QDNn-container1">
                Tốc độ thấp: <br>
                        Dòng đi từ: IG ⇒ Khoá điện ⇒ Cầu chì 10A ECU-IG ⇒ Cuộn dây FAN NO.1 Relay ⇒ 1 (E7). ⇒ FAN NO.1 Relay đóng. <br>
                        Cho dòng từ: Accu ⇒ Cầu chì 30A RDI ⇒ Tiếp điểm FAN NO.1 Relay ⇒ A7 ⇒ Tiếp điểm FAN NO.2 Relay ⇒ A13 ⇒ Mass. ⇒ Quạt dàn nóng quay tốc độ thấp.

                </p>
            </div>
            <div class="QDN-image1">
                <img src="image/Toc do thap.png" alt="Chế độ LOW" id="fanImage">
            </div>
            
        </div>
        `
        ,
        'QUẠT DÀN NÓNG TỐC ĐỘ CAO': `
        <div class="QDN-container">
        <div class="QDNn-container">
                <p class="QDNn-container2">
                Tốc độ cao: <br>
                        Khi có tín hiệu từ công tắc áp suất trung bình, nhiệt độ dàn nóng cao hoặc nhiệt độ nước làm mát cao: <br>
                        Dòng đi từ: IG ⇒ Khoá điện ⇒ Cầu chì 10A ECU-IG ⇒ Cuộn dây FAN NO.2 Relay ⇒ Chân tín hiệu [gồm: 2 (E7); 2 (A3); 22 (ECM)] ⇒ Mass. ⇒ FAN NO.2 Relay đóng. <br>
                        Cho dòng từ: Accu ⇒ Cầu chì 30A RDI ⇒ Tiếp điểm FAN NO.1 Relay ⇒ A7 ⇒ Tiếp điểm FAN NO.2 Relay ⇒ Mass. ⇒ Quạt dàn nóng quay tốc độ cao.


                </p>
            </div>
            <div class="QDN-image2">
                <img src="image/Toc do cao (1).png" alt="Chế độ LOW" id="fanImage">
            </div>
            
        </div>
        `

    };

    principleItems.querySelectorAll('li a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Ngăn chặn hành động mặc định

            // Lấy tên mục
            const itemName = this.textContent.trim();
            if (itemName === 'CÔNG TẮC ÁP SUẤT') {
                window.location.href = 'demo.html'; // Thay đổi đường dẫn đến trang mới
            } 
            if (itemName === 'LY HỢP TỪ') {
                window.location.href = 'demo1.html'; // Thay đổi đường dẫn đến trang mới
            }else {
                const contentArea = document.getElementById('content-area');

            // Thay đổi nội dung của #content-area
            contentArea.innerHTML = `
                
                <div class="text-and-links">
                    ${contentMap[itemName]}
                </div>
            `;
            }
        });
    });
    
});

















        

// Đổi trạng thái khi ấn vào mục lỗi của pan*****************************************************************************************
//***********************************************************************************************************************************

document.addEventListener("DOMContentLoaded", function() {

    // Đối tượng chứa nội dung cho từng mục
    const contentMap = {
        'Các Lỗi Thường Gặp': `
        `,
        'Đo Kiểm Trực Tiếp': ` `
    };
    // Kiểm tra nếu panItems tồn tại
    if (panItems) {
        panItems.querySelectorAll('li a').forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault(); // Ngăn chặn hành động mặc định

                const itemName = this.textContent.trim();
                const contentArea = document.getElementById('content-area');

                if (contentArea) {
                    contentArea.innerHTML = `
                        <div class="text-and-links">
                            ${contentMap[itemName] || "Nội dung không có sẵn."}
                        </div>
                    `;
                    
                    // Gán sự kiện cho các nút trong nội dung mới được thêm vào
                    addToggleEventListeners();
                } else {
                    console.error("Không tìm thấy phần tử #content-area.");
                }
            });
        });
    } else {
        console.error("Không tìm thấy phần tử .pan-sub-items.");
    }

    // Hàm để gán sự kiện cho các nút toggle
    function addToggleEventListeners() {
        document.querySelectorAll('.toggle-button').forEach(button => {
            button.addEventListener('click', () => {
                const targetId = button.getAttribute('data-target');
                // Kiểm tra nếu button là "Đo kiểm", chuyển hướng sang trang mới
     if (targetId === "content4*") {
        // Chuyển đến một trang mới (thay đổi URL này theo nhu cầu)
        window.location.href = 'pan.html';  // Đổi URL ở đây
        return; // Ngừng thực thi phần còn lại của mã
    }
                const targetContent = document.getElementById(targetId);
                const isContentVisible = targetContent.style.display === 'block';
    
                // Ẩn tất cả nội dung trước khi hiển thị mục được chọn
                document.querySelectorAll('.content').forEach(content => {
                    if (content.classList.contains('fade-in')) {
                        if (!isContentVisible) {
                            content.classList.remove('fade-in');
                            content.classList.add('fade-out');
    
                            setTimeout(() => {
                                content.style.display = 'none'; // Ẩn nội dung
                            }, 100); // Thời gian trùng khớp với hiệu ứng CSS
                        }
                    }
                });
    
                // Nếu nội dung không đang mở, hiển thị nó
                if (!isContentVisible) {
                    targetContent.style.display = 'block';
                    setTimeout(() => {
                        targetContent.classList.remove('fade-out');
                        targetContent.classList.add('fade-in');
                    }, 10); // Thêm chút độ trễ để hiệu ứng hoạt động
                } else {
                    // Nếu nội dung đang mở, đóng nó lại
                    targetContent.classList.remove('fade-in');
                    targetContent.classList.add('fade-out');
    
                    setTimeout(() => {
                        targetContent.style.display = 'none'; // Ẩn nội dung
                    }, 200); // Thời gian trùng khớp với hiệu ứng CSS
                }
            });
        });
    }
    
    
});



let flashing = false;

function toggleFlashing() {
    const wires = document.querySelectorAll('.doan-day-doc, .doan-day-doc-3, .doan-day-doc-1, .doan-day-doc-2, .doan-day-doc-4, .doan-day-doc-5, .doan-day-doc-6, .doan-day-doc-7, .doan-day-doc-8, .doan-day-doc-9, .doan-day-doc-10, .doan-day-doc-11, .doan-day-doc-12, .doan-day-doc-13, .doan-day-doc-14, .doan-day-doc-15, .doan-day-doc-16, .doan-day-doc-17, .doan-day-doc-18, .doan-day-doc-19, .doan-day-doc-20, .doan-day-doc-21, .doan-day-doc-22, .doan-day-doc-23, .doan-day-doc-24, .doan-day-doc-25, .doan-day-doc-26, .doan-day-doc-27, .doan-day-doc-28, .doan-day-doc-29, .doan-day-doc-30, .doan-day-doc-31, .doan-day-doc-32, .doan-day-doc-33, .doan-day-doc-34, .doan-day-doc-35, .doan-day-doc-36, .doan-day-doc-37, .doan-day-doc-38, .doan-day-doc-39, .doan-day-doc-40, .doan-day-doc-41, .doan-day-doc-42, .doan-day-doc-43, .doan-day-doc-44, .doan-day-doc-45, .doan-day-doc-46, .doan-day-doc-47, .doan-day-doc-48, .doan-day-doc-49, .doan-day-doc-50, .doan-day-doc-51, .doan-day-doc-52, .doan-day-doc-53, .doan-day-doc-54, .doan-day-doc-55, .doan-day-doc-56, .doan-day-doc-57, .doan-day-doc-58, .doan-day-doc-59, .doan-day-doc-60, .doan-day-doc-61, .doan-day-doc-62, .doan-day-doc-63, .doan-day-doc-64, .doan-day-doc-65, .doan-day-doc-66, .doan-day-doc-67, .doan-day-doc-68, .doan-day-doc-69, .doan-day-doc-70, .doan-day-doc-71, .doan-day-doc-72, .doan-day-doc-73, .doan-day-doc-74, .doan-day-doc-75');

    if (flashing) {
        flashing = false;
        wires.forEach(wire => wire.classList.remove('nhapnhay')); // Tắt nhấp nháy cho tất cả
    } else {
        flashing = true;

        function flashWires() {
            if (!flashing) return; // Thoát nếu không còn nhấp nháy

            // Tắt tất cả các dây trước khi bắt đầu nhấp nháy
            wires.forEach(wire => wire.classList.remove('nhapnhay'));

            // Nhấp nháy nhóm đầu tiên (bao gồm các dây trong group1)
            const group1 = [
                'doan-day-doc', 'doan-day-doc-1', 'doan-day-doc-2', 'doan-day-doc-3', 'doan-day-doc-4', 
                'doan-day-doc-5', 'doan-day-doc-6', 'doan-day-doc-7', 'doan-day-doc-8', 'doan-day-doc-9', 
                'doan-day-doc-10', 'doan-day-doc-11', 'doan-day-doc-12', 'doan-day-doc-13', 'doan-day-doc-14', 
                'doan-day-doc-15', 'doan-day-doc-29', 'doan-day-doc-47', 'doan-day-doc-48', 'doan-day-doc-49', 
                'doan-day-doc-50', 'doan-day-doc-51', 'doan-day-doc-52', 'doan-day-doc-53', 'doan-day-doc-54', 
                'doan-day-doc-55', 'doan-day-doc-56', 'doan-day-doc-57', 'doan-day-doc-58', 'doan-day-doc-59', 
                'doan-day-doc-60', 'doan-day-doc-61', 'doan-day-doc-62', 'doan-day-doc-63', 'doan-day-doc-64', 'doan-day-doc-65'
                , 'doan-day-doc-66', 'doan-day-doc-67', 'doan-day-doc-68', 'doan-day-doc-69', 'doan-day-doc-70', 'doan-day-doc-87'
                , 'doan-day-doc-88', 'doan-day-doc-89', 'doan-day-doc-90'
            ];
            group1.forEach(wireClass => {
                const wire = document.querySelector(`.${wireClass}`);
                wire?.classList.add('nhapnhay');
            });

            setTimeout(() => {
                // Tắt nhóm đầu tiên
                group1.forEach(wireClass => {
                    const wire = document.querySelector(`.${wireClass}`);
                    wire?.classList.remove('nhapnhay');
                });

                if (!flashing) return; // Thoát nếu không còn nhấp nháy

                // Nhấp nháy nhóm thứ hai (không bao gồm dây từ 60 đến 64)
                const group2 = [
                    'doan-day-doc-13', 'doan-day-doc-14', 'doan-day-doc-15', 'doan-day-doc-16', 'doan-day-doc-17',
                    'doan-day-doc-18', 'doan-day-doc-19', 'doan-day-doc-20', 'doan-day-doc-21', 'doan-day-doc-22',
                    'doan-day-doc-23', 'doan-day-doc-24', 'doan-day-doc-25', 'doan-day-doc-26', 'doan-day-doc-27',
                    'doan-day-doc-28', 'doan-day-doc-30', 'doan-day-doc-31', 'doan-day-doc-32', 'doan-day-doc-33',
                    'doan-day-doc-34', 'doan-day-doc-35', 'doan-day-doc-36', 'doan-day-doc-37', 'doan-day-doc-38',
                    'doan-day-doc-39', 'doan-day-doc-40', 'doan-day-doc-41', 'doan-day-doc-42', 'doan-day-doc-43',
                    'doan-day-doc-44', 'doan-day-doc-45', 'doan-day-doc-46', 'doan-day-doc-71', 'doan-day-doc-72', 'doan-day-doc-73'
                    , 'doan-day-doc-74', 'doan-day-doc-75', 'doan-day-doc-76', 'doan-day-doc-77', 'doan-day-doc-78', 'doan-day-doc-79', 'doan-day-doc-80'
                    , 'doan-day-doc-81', 'doan-day-doc-82', 'doan-day-doc-83', 'doan-day-doc-84', 'doan-day-doc-85', 'doan-day-doc-86'
                ];

                group2.forEach(wireClass => {
                    const wire = document.querySelector(`.${wireClass}`);
                    wire?.classList.add('nhapnhay');
                });

                setTimeout(() => {
                    // Tắt nhóm thứ hai
                    group2.forEach(wireClass => {
                        const wire = document.querySelector(`.${wireClass}`);
                        wire?.classList.remove('nhapnhay');
                    });

                    if (flashing) {
                        flashWires(); // Lặp lại sau khi nhóm thứ 2 tắt
                    }
                }, 4000); // Thời gian nhấp nháy cho nhóm 2
            }, 4000); // Thời gian nhấp nháy cho nhóm 1
        }

        flashWires(); // Bắt đầu nhấp nháy
    }
}


            
            
            window.addEventListener('load', function() {
                const footer = document.getElementById('footer');  // Lấy phần tử footer
                const menuItems = document.querySelectorAll('.main-nav a');  // Lấy tất cả các liên kết trong menu
            
                // Hiển thị footer khi tải trang
                footer.style.display = 'block';
            
                // Thêm sự kiện click cho các menu item để ẩn footer
                menuItems.forEach(item => {
                    item.addEventListener('click', function() {
                        footer.style.display = 'none';  // Ẩn footer khi nhấp vào mục menu
                    });
                });
            });
            



            document.querySelectorAll("[id^='wire']").forEach(el => {
                el.classList.add('shared-style');
            });