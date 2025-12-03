function troubleshootingGuide() {
  return {
    isDropdownOpen: true,
    selectedCaseId: null,
    selectedStep: null,

    // --- COMPUTED PROPERTY ---
    get selectedCase() {
      if (!this.selectedCaseId) return null;
      return this.cases.find((c) => c.id === this.selectedCaseId);
    },

    // --- METHODS ---
    selectCase(id) {
      this.selectedCaseId = id;
      this.selectedStep = 1;
      this.isDropdownOpen = false;
    },

    // --- DATA ---
    cases: [
      // CASE 1
      {
        id: "TH1",
        title: "TH1: Quạt dàn lạnh quay chậm khi bật chế độ quạt HI",
        steps: [
          "Bước 1: Chuẩn bị",
          "Bước 2: Triệu chứng",
          "Bước 3: Khu vực nghi ngờ",
          "Bước 4: Đo kiểm",
          "Bước 5: Xác định hư hỏng",
          "Bước 6: Khắc phục",
        ],
        contents: [
          /*html*/ `
<section class="p-4 bg-gray-50 rounded-lg shadow">
<h2 class="text-2xl font-semibold text-gray-800 mb-4">Chuẩn bị dụng cụ</h2>
<ul class="list-disc list-inside text-gray-700 space-y-1 mb-6">
<li>Đồng hồ VOM.</li>
<li>Sơ đồ mạch điện hệ thống điều hoà không khí Toyota Vios 2007.</li>
<li>Phần mềm tra cứu về sơ đồ mạch điện điều hoà không khí Toyota Vios 2007.</li>
<li>Chì hàn, ống co nhiệt, băng keo đen, dây điện,...</li>
</ul>

<div class="grid grid-cols-2 md:grid-cols-8 gap-4  justify-center">
<div class="flex flex-col items-center lg:col-span-2">
  <img src="NG/hinhVOM.jpg" alt="VOM" class="rounded-lg  shadow-md w-full object-cover">
  <p class="mt-2 text-sm text-gray-600">Đồng hồ VOM</p>
</div>
<div class="flex flex-col items-center lg:col-span-2">
  <img src="NG/ongco.jpg" alt="Ống co nhiệt" class="rounded-lg shadow-md w-full object-cover">
  <p class="mt-2 text-sm text-gray-600">Ống co nhiệt</p>
</div>
<div class="flex flex-col items-center col-span-full lg:col-span-4 md:col-span-1">
  <img src="NG/HIGH.png" alt="Sơ đồ HI" class="rounded-lg shadow-md w-full object-contain">
  <p class="mt-2 text-sm text-gray-600">Sơ đồ mạch điện</p>
</div>
</div>
</section>
`,

          /*html*/ `
<section class="p-4 bg-gray-50 rounded-lg shadow">
<h2 class="text-2xl font-semibold text-gray-800 mb-4">Xác định triệu chứng</h2>
<ul class="list-disc list-inside text-gray-700 space-y-2">
<li>
  <span class="font-medium text-gray-800">Quạt dàn lạnh:</span>
  <ul class="list-disc list-inside ml-6 space-y-1">
    <li>Chế độ LO: Hoạt động bình thường.</li>
    <li>Chế độ M1: Hoạt động bình thường.</li>
    <li>Chế độ M2: Hoạt động bình thường.</li>
    <li>Chế độ HI: Quay chậm giống như LO.</li>
  </ul>
</li>
<li><span class="font-medium text-gray-800">Quạt dàn nóng:</span> Hoạt động bình thường.</li>
<li><span class="font-medium text-gray-800">Bật công tắc A/C:</span> Ly hợp từ hoạt động bình thường.</li>
<li><span class="font-medium text-gray-800">HTR Relay:</span> Hoạt động bình thường (có tiếng click).</li>
</ul>
</section>
`,
          /*html*/ `<h2>Xác định khu vực nghi ngờ</h2><p>(KV1) - Đứt dây dẫn từ chân 1 (E4) đến chân 10 (E1).<br>(KV2) - Hư công tắc dàn lạnh ở vị trí HI.</p><img class="KVNN" src="NG/KVNN1.png" alt="Khu vực nghi ngờ 1">`,
          /*html*/ `<h2>Quy trình đo kiểm bằng VOM</h2>
<p>Bật công tắc quạt dàn lạnh vị trí HI.</p>
<div class="DOKIEMM">
  <div class="scrollable relative flex">
  <div class="relative">

        <img class="DOKIEM1" src="NG/H33.jpg" alt="Đo kiểm HI">
        <div class="box" data-image="image1" class="absolute bg-blue-500" style="top: 10px; right: 10px; width: 136px; height: 65px;">Đứt dây dẫn 1 (E4) → 10 (E1)</div>
        <div class="box" data-image="image2" class="absolute bg-blue-500" style="top: 226px; left:10px; max-width: 136px; height: 65px; font-size: 20px;">Hư công tắc vị trí HI</div>
  </div>
  </div>
</div>
<div class="image-popup">
  <img id="image1" src="pan từng vị trí/0V HI.png">
  <img id="image2" src="pan từng vị trí/12V HI.png">
</div>`,
          /*html*/ `<h2>Xác định vị trí hư hỏng</h2><table class="my-table1"><tr><td>TRƯỜNG HỢP</td><td>VỊ TRÍ HƯ HỎNG</td></tr><tr><td>1</td><td>Dây dẫn từ chân 1 (E4) đến chân 10 (E1).</td></tr><tr><td>2</td><td>Công tắc dàn lạnh vị trí HI.</td></tr></table>`,
          `<h2>Khắc phục hư hỏng</h2><table class="my-table1"><tr><td>TRƯỜNG HỢP</td><td>HƯỚNG KHẮC PHỤC</td></tr><tr><td>1</td><td>Dùng hàn chì và ống co nhiệt nối lại dây dẫn.</td></tr><tr><td>2</td><td>Thay công tắc dàn lạnh mới.</td></tr></table>`,
        ],
      },
      // CASE 2
      {
        id: "TH2",
        title: "TH2: Quạt dàn lạnh quay chậm khi bật chế độ quạt M2",
        steps: [
          "Bước 1: Chuẩn bị",
          "Bước 2: Triệu chứng",
          "Bước 3: Khu vực nghi ngờ",
          "Bước 4: Đo kiểm",
          "Bước 5: Xác định hư hỏng",
          "Bước 6: Khắc phục",
        ],
        contents: [
          /*html*/ `<h2>Chuẩn bị dụng cụ</h2><p>- Đồng hồ VOM, sơ đồ mạch điện, phần mềm tra cứu, dụng cụ sửa chữa điện.</p><div class="hinhmota"><img src="NG/hinhVOM.jpg" alt="VOM"><img src="NG/ongco.jpg" alt="Ống co nhiệt"></div><img class="HIGH" src="NG/M2.jpg" alt="Sơ đồ M2">`,
          /*html*/ `<h2>Xác định triệu chứng</h2><p>- Quạt dàn lạnh:<br>&nbsp;&nbsp;+ Chế độ LO, M1, HI: Hoạt động bình thường.<br>&nbsp;&nbsp;+ Chế độ M2: Quay chậm giống như LO.<br>- Các bộ phận khác hoạt động bình thường.</p>`,
          /*html*/ `<h2>Xác định khu vực nghi ngờ</h2><p>(KV1) - Đứt dây dẫn từ chân 2 (E3) đến chân 6 (E1).<br>(KV2) - Hư công tắc dàn lạnh ở vị trí M2.</p><img class="KVNN" src="NG/2.png" alt="Khu vực nghi ngờ 2">`,
          /*html*/ `<h2>Quy trình đo kiểm</h2>
<p>Bật công tắc quạt dàn lạnh vị trí M2.</p>
<div class="DOKIEMM">
  <div class="scrollable relative flex">
  <div class="relative">
    <img class="DOKIEM1" src="NG/H34.jpg" alt="Đo kiểm M2">
   
        <div class="box" class="absolute bg-blue-500" data-image="image3" style="top: 10px; right:10px; width: 136px; height: 65px;">Đứt dây dẫn 2 (E3) → 6 (E1)</div>
        <div class="box" class="absolute bg-blue-500" data-image="image4" style="top: 227px; left: 10px; max-width: 136px; height: 65px; font-size: 20px;">Hư công tắc vị trí M2</div>
    </div>
  </div>
</div>
<div class="image-popup">
  <img id="image3" src="pan từng vị trí/0V M2 (1).png">
  <img id="image4" src="pan từng vị trí/4.2V M2 (1).png">
</div>`,
          /*html*/ `<h2>Xác định vị trí hư hỏng</h2><table class="my-table1"><tr><td>TRƯỜNG HỢP</td><td>VỊ TRÍ HƯ HỎNG</td></tr><tr><td>1</td><td>Dây dẫn từ chân 2 (E3) đến chân 6 (E1).</td></tr><tr><td>2</td><td>Công tắc dàn lạnh vị trí M2.</td></tr></table>`,
          /*html*/ `<h2>Khắc phục hư hỏng</h2><table class="my-table1"><tr><td>TRƯỜNG HỢP</td><td>HƯỚNG KHẮC PHỤC</td></tr><tr><td>1</td><td>Dùng hàn chì và ống co nhiệt nối lại dây dẫn.</td></tr><tr><td>2</td><td>Thay công tắc dàn lạnh mới.</td></tr></table>`,
        ],
      },
      // CASE 3
      {
        id: "TH3",
        title: "TH3: Quạt dàn lạnh quay chậm khi bật chế độ quạt M1",
        steps: [
          "Bước 1: Chuẩn bị",
          "Bước 2: Triệu chứng",
          "Bước 3: Khu vực nghi ngờ",
          "Bước 4: Đo kiểm",
          "Bước 5: Xác định hư hỏng",
          "Bước 6: Khắc phục",
        ],
        contents: [
          /*html*/ `<h2>Chuẩn bị dụng cụ</h2><p>- Đồng hồ VOM, sơ đồ mạch điện, phần mềm tra cứu, dụng cụ sửa chữa điện.</p><div class="hinhmota"><img src="NG/hinhVOM.jpg" alt="VOM"><img src="NG/ongco.jpg" alt="Ống co nhiệt"></div><img class="HIGH" src="NG/M1.jpg" alt="Sơ đồ M1">`,
          /*html*/ `<h2>Xác định triệu chứng</h2><p>- Quạt dàn lạnh:<br>&nbsp;&nbsp;+ Chế độ LO, M2, HI: Hoạt động bình thường.<br>&nbsp;&nbsp;+ Chế độ M1: Quay chậm giống như LO.<br>- Các bộ phận khác hoạt động bình thường.</p>`,
          /*html*/ `<h2>Xác định khu vực nghi ngờ</h2><p>(KV1) - Đứt dây dẫn từ chân 3 (E3) đến chân 7 (E1).<br>(KV2) - Hư công tắc dàn lạnh ở vị trí M1.</p><img class="KVNN" src="NG/3.png" alt="Khu vực nghi ngờ 3">`,
          /*html*/ `<h2>Quy trình đo kiểm</h2>
<p>Bật công tắc quạt dàn lạnh vị trí M1.</p>
<div class="DOKIEMM">
  <div class="scrollable relative flex">
  <div class="relative">

    <img class="DOKIEM1" src="NG/H35.jpg" alt="Đo kiểm M1">

        <div class="box" class="absolute bg-blue-500" data-image="image5" style="top: 10px; right:10px;width: 137px; height: 65px;">Đứt dây dẫn 3 (E3) → 7 (E1)</div>
        <div class="box" class="absolute bg-blue-500" data-image="image6" style=" top: 227px; left: 10px; max-width: 136px; height: 65px; font-size: 20px;">Hư công tắc vị trí M1</div>
  </div>
  </div>
</div>
<div class="image-popup">
  <img id="image5" src="pan từng vị trí/0V M1.png">
  <img id="image6" src="pan từng vị trí/4.2V M1.png">
</div>`,
          /*html*/ `<h2>Xác định vị trí hư hỏng</h2><table class="my-table1"><tr><td>TRƯỜNG HỢP</td><td>VỊ TRÍ HƯ HỎNG</td></tr><tr><td>1</td><td>Dây dẫn từ chân 3 (E3) đến chân 7 (E1).</td></tr><tr><td>2</td><td>Công tắc dàn lạnh vị trí M1.</td></tr></table>`,
          /*html*/ `<h2>Khắc phục hư hỏng</h2><table class="my-table1"><tr><td>TRƯỜNG HỢP</td><td>HƯỚNG KHẮC PHỤC</td></tr><tr><td>1</td><td>Dùng hàn chì và ống co nhiệt nối lại dây dẫn.</td></tr><tr><td>2</td><td>Thay công tắc dàn lạnh mới.</td></tr></table>`,
        ],
      },
      // CASE 4
      {
        id: "TH4",
        title: "TH4: Quạt dàn lạnh không quay, HTR relay không hoạt động",
        steps: [
          "Bước 1: Chuẩn bị",
          "Bước 2: Triệu chứng",
          "Bước 3: Khu vực nghi ngờ",
          "Bước 4: Đo kiểm",
          "Bước 5: Xác định hư hỏng",
          "Bước 6: Khắc phục",
        ],
        contents: [
          /*html*/ `<h2>Chuẩn bị dụng cụ</h2><p>- Đồng hồ VOM, sơ đồ mạch điện, phần mềm tra cứu, dụng cụ sửa chữa điện.</p>`,
          /*html*/ `<h2>Xác định triệu chứng</h2><p>- Quạt dàn lạnh: Không hoạt động ở mọi chế độ.<br>- Bật công tắc A/C: Ly hợp từ không hoạt động.<br>- HTR Relay: Không hoạt động (không có tiếng click).</p>`,
          /*html*/ `<h2>Xác định khu vực nghi ngờ</h2><p>(KV1) Mất nguồn IG. (KV2) Hư cầu chì 10A GAUGE. (KV3) Hư HTR Relay. (KV4) Đứt dây 1 (HTR Relay) → 9 (E1). (KV5) Hư công tắc quạt (E1). (KV6) Đứt dây 5 (E1) → Mass (D1). (KV7) Mất mass (D1).</p><img class="KVNN" src="NG/4.jpg" alt="Khu vực nghi ngờ 4">`,
          /*html*/ `<div id="contentD-M3" class="hidden-content block">
  <p>Bật công tắc quạt dàn lạnh sang vị trí LO (hoặc M1, M2, HI).</p>
  <div class="DOKIEM">
    <div class="scrollable flex flex-col gap-2">
      <!-- Hình 1 -->
      <div class="relative">
        <img class="DOKIEM1" src="NG/H12.jpg" alt="KPHH" />
        <div
          class="box absolute top-[3px] left-[245px]"
          data-image="image7"
          style="width: 136px; height: 65px; font-size: 18px;"
        >
          Mất nguồn IG
        </div>
        <div
          class="box absolute top-[180px] left-[245px]"
          data-image="image8"
          style="width: 136px; height: 65px;"
        >
          Đứt cầu chì 10A GAUGE
        </div>
        <div
          class="box absolute top-[358px] left-[245px]"
          data-image="image9"
          style="width: 136px; height: 65px;"
        >
          Hư HTR Relay
        </div>
      </div>

      <!-- Hình 2 -->
      <div class="relative">
        <img class="DOKIEM2" src="NG/H13.jpg" alt="KPHH" />
        <div
          class="box absolute top-[130px] left-[300px]"
          data-image="image10"
          style="width: 136px; height: 66px;"
        >
          Đứt dây dẫn: 1 (HTR Relay) → 9 (E1)
        </div>
        <div
          class="box absolute top-[345px] left-[300px]"
          data-image="image11"
          style="width: 138px; height: 65px; font-size: 20px;"
        >
          Hư E1
        </div>
      </div>

      <!-- Hình 3 -->
      <div class="relative">
        <img class="DOKIEM3" src="NG/H14.jpg" alt="KPHH" />
        <div
          class="box absolute top-2 left-[350px]"
          data-image="image12"
          style="width: 175px; height: 65px;"
        >
          Đứt dây dẫn: 5 (E1) → Mass (D1)
        </div>
        <div
          class="box absolute bottom-2 left-[10px] max-w-[136px]"
          data-image="image100"
          style="height: 65px;"
        >
          (KT7) Mất mass (D1)
        </div>
      </div>
    </div>
  </div>

  <!-- Phần ND -->
  <div class="ND">
    <div class="image-popup">
      <img id="image7" src="pan từng vị trí/KT1.png" class="hidden" />
      <img id="image8" src="pan từng vị trí/KT2.png" />
      <img id="image9" src="pan từng vị trí/KT3.png" />
      <img id="image10" src="pan từng vị trí/KT4.png" />
      <img id="image11" src="pan từng vị trí/KT5.png" />
      <img id="image12" src="pan từng vị trí/KT6.png" />
      <img id="image100" src="pan từng vị trí/KT7.png" />
    </div>
  </div>
</div>
`,
          /*html*/ `<h2>Xác định vị trí hư hỏng</h2><table class="my-table1"><tr><td>TH</td><td>VỊ TRÍ HƯ HỎNG</td></tr><tr><td>1</td><td>Mất nguồn IG.</td></tr><tr><td>2</td><td>Đứt cầu chì 10A GAUGE.</td></tr><tr><td>3</td><td>Hư HTR Relay.</td></tr><tr><td>4-7</td><td>Đứt dây hoặc mất mass.</td></tr></table>`,
          /*html*/ `<h2>Khắc phục hư hỏng</h2><table class="my-table1"><tr><td>TH</td><td>HƯỚNG KHẮC PHỤC</td></tr><tr><td>1</td><td>Kiểm tra nguồn IG, thay công tắc IG.</td></tr><tr><td>2</td><td>Thay cầu chì 10A mới.</td></tr><tr><td>3</td><td>Thay relay 5 chân mới.</td></tr><tr><td>4-7</td><td>Nối lại dây hoặc làm lại điểm mass.</td></tr></table>`,
        ],
      },
      // CASE 5
      {
        id: "TH5",
        title: "TH5: Quạt dàn lạnh không quay, HTR relay hoạt động",
        steps: [
          "Bước 1: Chuẩn bị",
          "Bước 2: Triệu chứng",
          "Bước 3: Khu vực nghi ngờ",
          "Bước 4: Đo kiểm",
          "Bước 5: Xác định hư hỏng",
          "Bước 6: Khắc phục",
        ],
        contents: [
          /*html*/ `<h2>Chuẩn bị dụng cụ</h2><p>- Đồng hồ VOM, sơ đồ mạch điện, phần mềm tra cứu, dụng cụ sửa chữa điện.</p>`,
          /*html*/ `<h2>Xác định triệu chứng</h2><p>- Quạt dàn lạnh: Không hoạt động ở mọi chế độ.<br>- Bật công tắc A/C: Ly hợp từ hoạt động bình thường.<br>- HTR Relay: Hoạt động bình thường (có tiếng click).</p>`,
          /*html*/ `<h2>Xác định khu vực nghi ngờ</h2><p>(KV1) Mất nguồn ắc quy. (KV2) Hư cầu chì 40A HTR. (KV3) Đứt dây từ cầu chì → relay. (KV4) Đứt dây từ relay → mô tơ. (KV5) Hư mô tơ quạt (E4). (KV6) Đứt dây từ mô tơ → điện trở.</p><img class="KVNN" src="NG/5.jpg" alt="Khu vực nghi ngờ 5">`,
          /*html*/ `<div id="contentD-M4" class="hidden-content" style="display: block;">
  <p>Bật công tắc quạt dàn lạnh sang 1 trong 4 vị trí LO, M1, M2, HI.</p>
  <div class="DOKIEM">
    <div class="scrollable flex flex-col gap-2">
      <div class="relative">
        <img class="DOKIEM1" src="NG/H16.jpg" alt="KPHH" />
        <div class="box absolute top-1 left-[250px]" data-image="image13" style=" width: 136px; height: 65px;">Mất nguồn accu</div>
    <div class="box absolute top-[185px] left-[250px]" data-image="image14" style="width: 136px; height: 65px;">Đứt cầu chì 40A HTR</div>
    <div class="box absolute bottom-[15px] left-[250px]" data-image="image15" style=" width: 135px; height: 64.5px;">Đứt dây dẫn: 2 (40A HTR) → 5 (HTR Relay)</div>
      </div>
      <div class="relative">
        <div class="box absolute top-[115px] left-[295px]" data-image="image16" style="width: 136px; height: 65px;">Đứt dây dẫn: 3 (HTR Relay) → 2 (E4)</div>
        <div class="box absolute top-[335px] left-[295px]" data-image="image17" style=" width: 136px; height: 65px; font-size: 18px;">Hư E4</div>

        <img class="DOKIEM2" src="NG/H17.jpg" alt="KPHH" />
      </div>
      <div class="relative">
        <img class="DOKIEM3" src="NG/H18.jpg" alt="KPHH" />
        <div class="box absolute top-[10px] left-[10px]" data-image="image101" style="max-width: 136px; height: 65px; font-size: 17px;">(KT6) Đứt dây dẫn 1 (E4) → 4 (E3)</div>
      </div>
    </div>
  </div>
  <div class="ND1">
    <div class="image-popup">
      <img id="image13" src="pan từng vị trí/Pan số 5/KT1.png" />
      <img id="image14" src="pan từng vị trí/Pan số 5/KT2.png" />
      <img id="image15" src="pan từng vị trí/Pan số 5/KT3.png" />
      <img id="image16" src="pan từng vị trí/Pan số 5/KT4.png" />
      <img id="image17" src="pan từng vị trí/Pan số 5/KT5.png" />
      <img id="image101" src="pan từng vị trí/Pan số 5/KT6.png" />
    </div>
  </div>
</div>
`,
          /*html*/ `<h2>Xác định vị trí hư hỏng</h2><p>Dựa vào kết quả đo kiểm để xác định lỗi từ KV1 đến KV6.</p>`,
          /*html*/ `<h2>Khắc phục hư hỏng</h2><p>Kiểm tra/thay ắc quy, thay cầu chì, nối lại dây dẫn, thay mô tơ quạt.</p>`,
        ],
      },
      // CASE 6
      {
        id: "TH6",
        title: "TH6: Bật A/C nhưng relay và ly hợp từ không hoạt động",
        steps: [
          "Bước 1: Chuẩn bị",
          "Bước 2: Triệu chứng",
          "Bước 3: Khu vực nghi ngờ",
          "Bước 4: Đo kiểm",
          "Bước 5: Xác định hư hỏng",
          "Bước 6: Khắc phục",
        ],
        contents: [
          /*html*/ `<h2>Chuẩn bị dụng cụ</h2><p>- Đồng hồ VOM, sơ đồ mạch điện, sơ đồ chân Amplifier.</p><img class="AC" src="NG/AC SWITCH.png" alt="AC Switch">`,
          /*html*/ `<h2>Xác định triệu chứng</h2><p>- Quạt dàn lạnh, dàn nóng: Hoạt động bình thường.<br>- Bật A/C: Ly hợp từ và HTR SUB1/AC MG Relay không hoạt động.</p>`,
          /*html*/ `<h2>Xác định khu vực nghi ngờ</h2><p>Rất nhiều khả năng: Hư cầu chì 7.5A A/C, hư relay, đứt dây, hư công tắc A/C, lỗi bộ khuếch đại (Amplifier), hư công tắc áp suất kép, mất mass.</p><img class="KVNN" src="NG/6.png" alt="Khu vực nghi ngờ 6">`,
          /*html*/ `<div id="contentD-M5" class="hidden-content" style="display: block;">
            <p style="">Bật công tắc quạt dàn lạnh sang vị trí LO (hoặc M1, M2, HI). <br>
            Bật công tắc A/C.
            </p>
            <div class="DOKIEM">
                <div class="scrollable flex flex-col gap-2">
                  <div class="relative">
                    <img class="DOKIEM7" src="NG/H19.jpg" alt="KPHH" style="">
                    <div class="box absolute" data-image="image19" style="top: 71px; left: 288px;  width: 136px; height: 65px;">Đứt cầu chì 7.5A A/C</div>
                    <div class="box absolute" data-image="image20" style="top: 292px; left: 272px; width: 154.134px; height: 65px; will-change: top, left; transform: translate(40.2734px, 0px);">Đứt dây dẫn: 7.5A A/C → 1 (MG Relay)</div>
                    <div class="box absolute" data-image="image21" style="top: 490px; left: 313px; width: 136px; height: 65px;">Hư HTR SUB1/AC MG Relay </div>
        
                  </div>
                  <div class="relative">
                    <img class="DOKIEM8" src="NG/H20.jpg" alt="KPHH" style="">
                    <div class="box absolute" data-image="image22" style="top: 128px; left: 306px; width: 136px; height: 65px;">Đứt dây dẫn: 2 (MG Relay) → 15 (E7)</div>
                    <div class="box absolute" data-image="image23" style="top: 329px; left: 307px; width: 136px; height: 65px;">Đứt dây dẫn: 7.5A A/C → 2 (E5)</div>
          
                  </div>
                  <div class="relative">
                    <img class="DOKIEM9" src="NG/H21.jpg" alt="KPHH" style="">
                    <div class="box absolute" data-image="image24" style="top: 12px; left: 307px; width: 136px; height: 65px; font-size: 20px;">Hư E5 </div>
                    <div class="box absolute" data-image="image25" style="top: 236px; left: 324px; width: 157.025px; height: 65px; transform: translate(-21.0352px, 0px); transition: none;">Đứt dây dẫn: 4 (E5) → 27 (E7)</div>
                    <div class="box absolute" data-image="image26" style="top: 430px; left: 316px; width: 136px; height: 65px; will-change: top, left;">Đứt dây dẫn: 7.5A A/C → 14 (E7)</div>
                
                  </div>
                  <div class="relative">
                    <img class="DOKIEM10" src="NG/H22.jpg" alt="KPHH" style="cursor: zoom-in;">
                    <div class="box absolute" data-image="image27" style="top: 129px; left: 335px; width: 136px; height: 65px;">Đứt dây dẫn: 21 (E7) </div>
                    <div class="box absolute" data-image="image28" style="top: 324px; left: 323px; width: 136px; height: 65px; will-change: top, left;">Đứt dây dẫn: 24 (E7) </div>
                  
                  </div>
                  <div class="relative">
                    <img class="DOKIEM11" src="NG/H23.jpg" alt="KPHH" style="cursor: zoom-in;">
                    <div class="box absolute" data-image="image29" style="top: 18px; left: 306px; width: 136px; height: 65px;">Đứt dây dẫn: 22 (E7) → 23 (E7)</div>
                    <div class="box absolute" data-image="image30" style="top: 229px; left: 307px; width: 136px; height: 65px;">Đứt dây dẫn: 12 (E7) → 4 (A3)</div>
                    <div class="box absolute" data-image="image31" style="top: 438px; left: 311px; width: 136px; height: 65px; font-size: 18px;">Hư A3</div>
                    <div class="box absolute" data-image="image102" style="top: 636px; left: 9px; max-width: 136px; height: 78.8516px; font-size: 16px; width: 161.724px; transition: none;">(KT14) Đứt dây dẫn: 1 (A3) → mass (A1) </div>
                    </div>
                </div>
            </div>
        <div class="ND2">
            <div class="image-popup">
                <img id="image19" src="pan từng vị trí/Pan số 6/KT1.png" style="display: none;">
                <img id="image20" src="pan từng vị trí/Pan số 6/KT2.png" style="cursor: zoom-in; display: none;">
                <img id="image21" src="pan từng vị trí/Pan số 6/KT3.png" style="display: none;">
                <img id="image22" src="pan từng vị trí/Pan số 6/KT4.png" style="display: none; position: relative;">
                <img id="image23" src="pan từng vị trí/Pan số 6/KT5.png" style="display: none; position: relative;">
                <img id="image24" src="pan từng vị trí/Pan số 6/KT6.png" style="display: none;">
                <img id="image25" src="pan từng vị trí/Pan số 6/KT7.png" style="display: none; position: relative;" data-selected="true" data-label-id="0">
                <img id="image26" src="pan từng vị trí/Pan số 6/KT8.png" style="cursor: zoom-in; display: none;">
                <img id="image27" src="pan từng vị trí/Pan số 6/KT9.png" style="display: none;">
                <img id="image28" src="pan từng vị trí/Pan số 6/KT10.png" style="display: none;">
                <img id="image29" src="pan từng vị trí/Pan số 6/KT11.png" style="display: none;">
                <img id="image30" src="pan từng vị trí/Pan số 6/KT12.png" style="display: none;">
                <img id="image31" src="pan từng vị trí/Pan số 6/KT13.png" style="display: none;">
                <img id="image102" src="pan từng vị trí/Pan số 6/KT14.png" style="cursor: zoom-in; display: none;">
            </div>
        </div>
    </div>`,
          /*html*/ `<h2>Xác định vị trí hư hỏng</h2><p>Bao gồm 14 trường hợp hư hỏng có thể xảy ra từ cầu chì, dây dẫn, relay, công tắc đến bộ khuếch đại.</p>`,
          /*html*/ `<h2>Khắc phục hư hỏng</h2><p>Thay thế linh kiện hỏng (cầu chì, relay, công tắc) hoặc nối lại các đường dây bị đứt.</p>`,
        ],
      },
      // CASE 7
      {
        id: "TH7",
        title: "TH7: Bật A/C, relay hoạt động nhưng ly hợp từ không",
        steps: [
          "Bước 1: Chuẩn bị",
          "Bước 2: Triệu chứng",
          "Bước 3: Khu vực nghi ngờ",
          "Bước 4: Đo kiểm",
          "Bước 5: Xác định hư hỏng",
          "Bước 6: Khắc phục",
        ],
        contents: [
          /*html*/ `<h2>Chuẩn bị dụng cụ</h2><p>- Đồng hồ VOM, sơ đồ mạch điện, dụng cụ sửa chữa điện.</p>`,
          /*html*/ `<h2>Xác định triệu chứng</h2><p>- Quạt dàn lạnh, dàn nóng: Hoạt động bình thường.<br>- HTR SUB1/AC MG Relay: Hoạt động (có tiếng click).<br>- Ly hợp từ: Không hoạt động.</p>`,
          /*html*/ `<h2>Xác định khu vực nghi ngờ</h2><p>(KV1) - Đứt dây dẫn từ chân 3 (Relay) đến chân 1 (C8).<br>(KV2) - Hư ly hợp từ (C8).<br>(KV3) - Mất mass ly hợp từ (C8).</p><img class="KVNN" src="NG/7.png" alt="Khu vực nghi ngờ 7">`,
          /*html*/ `<div id="contentD-M6" class="hidden-content" style="display: block;">
                <h2>Trình tự đo kiểm</h2>
                <p>	Bật công tắc quạt dàn lạnh sang vị trí LO (hoặc M1, M2, HI). <br>
                    Bật công tắc A/C.          
                </p>
                    <div class="scrollable flex flex-col gap-2">
                     <div class="relative" style="">
                        <img class="DOKIEMM" src="NG/H24.jpg" alt="KPHH" style="cursor: zoom-in;">
                        <div class="box absolute" data-image="image32" style="top: 28px; left: 296px; width: 169.615px; height: 80.3502px;">Đứt dây dẫn: 3 (MG Relay) → 1 (C8)</div>
                        <div class="box absolute" data-image="image33" style="top: 242px; left: 338px; width: 136px; height: 65px; font-size: 24px;">Hư C8</div>
                        <div class="box absolute" data-image="image103" style="top: 488px; left: 20px; width: 135px; height: 65px; font-size: 19px;"> Mất mass C8</div>
                     </div>
                    </div>
                    <div class="image-popup">
                        <img id="image32" src="pan từng vị trí/Pan số 7/KT1.png" style="cursor: zoom-in;">
                        <img id="image33" src="pan từng vị trí/Pan số 7/KT2.png" style="cursor: zoom-in;">
                        <img id="image103" src="pan từng vị trí/Pan số 7/KT3.png" style="cursor: zoom-in;">
                    </div>
            </div>`,
          /*html*/ `<h2>Xác định vị trí hư hỏng</h2><table class="my-table1"><tr><td>TH</td><td>VỊ TRÍ HƯ HỎNG</td></tr><tr><td>1</td><td>Đứt dây dẫn từ Relay đến ly hợp từ.</td></tr><tr><td>2</td><td>Hư ly hợp từ (C8).</td></tr><tr><td>3</td><td>Mất mass ly hợp từ.</td></tr></table>`,
          /*html*/ `<h2>Khắc phục hư hỏng</h2><table class="my-table1"><tr><td>TH</td><td>HƯỚNG KHẮC PHỤC</td></tr><tr><td>1</td><td>Nối lại dây dẫn.</td></tr><tr><td>2</td><td>Thay ly hợp từ mới.</td></tr><tr><td>3</td><td>Nối lại dây mass.</td></tr></table>`,
        ],
      },
      // CASE 8
      {
        id: "TH8",
        title:
          "TH8: Bật A/C, rơle FAN NO.1 không hoạt động, quạt dàn nóng không quay",
        steps: [
          "Bước 1: Chuẩn bị",
          "Bước 2: Triệu chứng",
          "Bước 3: Khu vực nghi ngờ",
          "Bước 4: Đo kiểm",
          "Bước 5: Xác định hư hỏng",
          "Bước 6: Khắc phục",
        ],
        contents: [
          `<h2>Chuẩn bị dụng cụ</h2><p>- Đồng hồ VOM, sơ đồ mạch điện, phần mềm tra cứu.</p>`,
          `<h2>Xác định triệu chứng</h2><p>- Quạt dàn nóng: Không hoạt động.<br>- FAN NO.1 Relay: Không hoạt động.<br>- Ly hợp từ: Hoạt động bình thường.</p>`,
          `<h2>Xác định khu vực nghi ngờ</h2><p>(KV1) Hư cầu chì 10A ECU-IG. (KV2) Đứt dây từ cầu chì đến relay. (KV3) Hư FAN NO.1 Relay. (KV4) Đứt dây từ relay đến bộ khuếch đại (E7).</p><img class="KVNN" src="NG/8.png" alt="Khu vực nghi ngờ 8">`,
        /*html*/ `<div id="contentD-M7" class="hidden-content" style="display: block;">
            <p>	Bật công tắc quạt dàn lạnh sang vị trí LO (hoặc M1, M2, HI). <br>
            Bật công tắc A/C.                
            </p>
            <div class="DOKIEM">
                <div class="scrollable">
                  <div class="relative">
                    <img class="DOKIEM1" src="NG/H25.jpg" alt="KPHH" style="cursor: zoom-in;">
                    <div class="box" data-image="image34" style="top: 59px; left: 243px; max-width: 136px; height: 65px;">Đứt cầu chì 10A ECU-IG </div>
                    <div class="box" data-image="image35" style="top: 237px; left: 279px; max-width: 136px; height: 69.4218px; width: 192.47px; transform: translate(-32.7578px, -4.42184px); transition: none;">Đứt dây dẫn: 10A ECU → 6 (F1 Relay)</div>
                  </div>
                  <div class="relative" style="">
                    <img class="DOKIEM2" src="NG/H26.jpg" alt="KPHH" style="cursor: zoom-in;">
                     
                    <div class="box" data-image="image36" style="top: 125px; left: 344px; width: 136px; height: 65px;">Hư FAN NO.1 Relay</div>
                    <div class="box" data-image="image104" style="top: 370px; left: 2px; max-width: 137px; height: 78.0469px; width: 260.719px; transform: translate(0px, -13.0469px);">Đứt dây dẫn: 7 (F1 Relay) → 1 (E7)</div>
                  </div>
                  
                </div>
            </div>
        <div class="ND4">
            <div class="image-popup">
                <img id="image34" src="pan từng vị trí/Pan số 8/KT1.png" style="cursor: zoom-in;">
                <img id="image35" src="pan từng vị trí/Pan số 8/KT2.png" style="display: none; cursor: zoom-in;">
                <img id="image36" src="pan từng vị trí/Pan số 8/KT3.png" style="cursor: zoom-in;">
                <img id="image104" src="pan từng vị trí/Pan số 8/KT4.png" style="cursor: zoom-in;">
            </div>
        </div>
    </div>`,
          `<h2>Xác định vị trí hư hỏng</h2><p>Xác định lỗi ở 1 trong 4 khu vực nghi ngờ.</p>`,
          `<h2>Khắc phục hư hỏng</h2><p>Thay cầu chì, nối lại dây hoặc thay relay mới.</p>`,
        ],
      },
      // CASE 9
      {
        id: "TH9",
        title:
          "TH9: Bật A/C, rơle FAN NO.1 hoạt động nhưng quạt dàn nóng không quay",
        steps: [
          "Bước 1: Chuẩn bị",
          "Bước 2: Triệu chứng",
          "Bước 3: Khu vực nghi ngờ",
          "Bước 4: Đo kiểm",
          "Bước 5: Xác định hư hỏng",
          "Bước 6: Khắc phục",
        ],
        contents: [
          `<h2>Chuẩn bị dụng cụ</h2><p>- Đồng hồ VOM, sơ đồ mạch điện, phần mềm tra cứu.</p>`,
          `<h2>Xác định triệu chứng</h2><p>- Quạt dàn nóng: Không hoạt động.<br>- FAN NO.1 Relay: Hoạt động (có tiếng click).<br>- Ly hợp từ: Hoạt động bình thường.</p>`,
          `<h2>Xác định khu vực nghi ngờ</h2><p>Hư cầu chì 30A RDI, đứt dây, hư mô tơ quạt, hư điện trở quạt, mất mass.</p><img class="KVNN" src="NG/9.png" alt="Khu vực nghi ngờ 9">`,
           /*html*/ `<div id="contentD-M8" class="hidden-content" style="display: block;">
            <p>Bật công tắc quạt dàn lạnh sang vị trí LO (hoặc M1, M2, HI). <br>
            Bật công tắc A/C.                
            </p>
            <div class="DOKIEM">
                <div class="scrollable">
                  <div class="relative">
                    <img class="DOKIEM1" src="NG/H27.jpg" alt="KPHH" style="cursor: zoom-in;">
                    <div class="box" data-image="image37" style="top: 46px; left: 243px; max-width: 136px; height: 65px;">Đứt cầu chì 30A RDI</div>
                    <div class="box" data-image="image38" style="top: 231px; left: 243px; max-width: 136px; height: 65px; width: 164.607px; transition: none;">Đứt dây dẫn: 30A RDI → 5 (F1 Relay) </div>
                    <div class="box" data-image="image39" style="top: 402px; left: 247px; max-width: 135px; height: 65px;">Đứt dây dẫn: 8 (F1 Relay) → 2 (A7)</div>
              
                  </div>
                  <div class="relative">
                    <img class="DOKIEM2" src="NG/H28.jpg" alt="KPHH" style="cursor: zoom-in;">
                    <div class="box" data-image="image40" style="top: 127px; left: 348px; width: 135px; height: 65px; font-size: 25px;">Hư A7 </div>
                    <div class="box" data-image="image41" style="top: 340px; left: 307px; max-width: 135px; height: 83.6328px; width: 162.855px; transition: none;">Đứt dây dẫn: 1 (A7) → 3 (F2 Relay)</div>
              
                  </div>
                  <div class="relative" style="transition: none; cursor: move;" data-selected="true" data-label-id="0">
                    <img class="DOKIEM2" src="NG/H29.jpg" alt="KPHH" style="">
                    <div class="box" data-image="image42" style="top: 557px; left: 17px; max-width: 136px; height: 82.0859px; width: 161.853px; transition: none;">Đứt dây dẫn: 4 (F2 Relay) → 2 (A13)</div>
                    <div class="box" data-image="image43" style="top: 348px; left: 337px; width: 136px; height: 65px; font-size: 23px;">Hư A13</div>          
                    <div class="box" data-image="image105" style="top: 127px; left: 292px; max-width: 136px; height: 87.7448px; font-size: 16px; width: 167.701px; transform: translate(0px, -2.29688px); transition: none;">Đứt dây dẫn: 1(A13) → mass(A1)</div>          

                    </div>
                  
                </div>
            </div>
        <div class="ND5">
            <div class="image-popup">
                <img id="image37" src="pan từng vị trí/Pan số 9/KT1.png" style="display: none; cursor: zoom-in;">
                <img id="image38" src="pan từng vị trí/Pan số 9/KT2.png" style="cursor: zoom-in;">
                <img id="image39" src="pan từng vị trí/Pan số 9/KT3.png" style="cursor: zoom-in;">
                <img id="image40" src="pan từng vị trí/Pan số 9/KT4.png" style="cursor: zoom-in;">
                <img id="image41" src="pan từng vị trí/Pan số 9/KT5.png" style="cursor: zoom-in;">
                <img id="image42" src="pan từng vị trí/Pan số 9/KT6.png" style="cursor: zoom-in;">
                <img id="image43" src="pan từng vị trí/Pan số 9/KT7.png" style="cursor: zoom-in;">
                <img id="image105" src="pan từng vị trí/Pan số 9/KT8.png" style="cursor: zoom-in;">
            </div>
        </div>
    </div>`,
          `<h2>Xác định vị trí hư hỏng</h2><p>Bao gồm 8 trường hợp từ cầu chì, dây dẫn, mô tơ, điện trở đến điểm mass.</p>`,
          `<h2>Khắc phục hư hỏng</h2><p>Thay thế linh kiện hỏng hoặc nối lại dây.</p>`,
        ],
      },
      // CASE 10
      {
        id: "TH10",
        title:
          "TH10: Bật công tắc áp suất nhưng FAN NO.2 Relay không hoạt động",
        steps: [
          "Bước 1: Chuẩn bị",
          "Bước 2: Triệu chứng",
          "Bước 3: Khu vực nghi ngờ",
          "Bước 4: Đo kiểm",
          "Bước 5: Xác định hư hỏng",
          "Bước 6: Khắc phục",
        ],
        contents: [
          `<h2>Chuẩn bị dụng cụ</h2><p>- Đồng hồ VOM, sơ đồ mạch điện, phần mềm tra cứu.</p>`,
          `<h2>Xác định triệu chứng</h2><p>- Quạt dàn nóng: Luôn quay ở tốc độ thấp.<br>- FAN NO.2 Relay: Không hoạt động khi bật công tắc giả lập áp suất.</p>`,
          `<h2>Xác định khu vực nghi ngờ</h2><p>Đứt dây, hư FAN NO.2 Relay, hư công tắc áp suất, mất mass.</p><img class="KVNN" src="NG/10.png" alt="Khu vực nghi ngờ 10">`,
          /*html*/ `<div id="contentD-M9" class="hidden-content" style="display: block;">
            <p>	Bật công tắc quạt dàn lạnh sang vị trí LO (hoặc M1, M2, HI). <br>
            Bật công tắc A/C và công tắc giả lập áp suất trung bình cao.          
            </p>
            <div class="DOKIEM">
                <div class="scrollable">
                  <div class="relative">
                  <div class="box" data-image="image44" style="top: 3px; left: 5px; max-width: 136px; height: 83.6354px; padding-top: 4px; width: 162.487px; transform: translate(296.289px, 0px);">Đứt dây dẫn: 10A ECU → 2 (F2 Relay)</div>
                  <div class="box" data-image="image45" style="top: 220px; left: 335px; max-width: 136px; height: 66px; font-size: 17px;">Hư FAN NO.2 Relay</div>
                  <div class="box" data-image="image46" style="top: 440px; left: 293px; max-width: 136px; height: 73.8867px; width: 165.564px; transition: none;">Đứt dây dẫn: 1 (F2 Relay) → 2 (A3)</div>
               
                    <img class="DOKIEM1" src="NG/H30.jpg" alt="KPHH" style="cursor: zoom-in;">
                  </div>
                  <div class="relative" style="">
                    <img class="DOKIEM2" src="NG/H31.jpg" alt="KPHH" style="">
                    <div class="box" data-image="image47" style="top: 119px; left: 340px; width: 146.523px; height: 79.6602px; font-size: 23px; transition: none;">Hư A3 </div>                      
                    <div class="box" data-image="image106" style="top: 354px; left: 14px; max-width: 136px; height: 69.9649px; font-size: 16px; width: 149.396px; transition: none;">Đứt dây dẫn 3 (A3) → mass (A1) </div>
          
                  </div>
                  
                </div>
            </div>
        <div class="ND6">
        <div class="image-popup">
            <img id="image44" src="pan từng vị trí/Pan số 10/KT1.png" style="cursor: zoom-in;">
            <img id="image45" src="pan từng vị trí/Pan số 10/KT2.png" style="cursor: zoom-in;">
            <img id="image46" src="pan từng vị trí/Pan số 10/KT3.png" style="cursor: zoom-in;">
            <img id="image47" src="pan từng vị trí/Pan số 10/KT4.png" style="cursor: zoom-in;">
            <img id="image106" src="pan từng vị trí/Pan số 10/KT5.png" style="cursor: zoom-in;">
        </div>
        </div>
    </div>`,
          `<h2>Xác định vị trí hư hỏng</h2><p>Xác định lỗi ở 1 trong 5 khu vực nghi ngờ.</p>`,
          `<h2>Khắc phục hư hỏng</h2><p>Nối lại dây, thay relay hoặc thay công tắc áp suất.</p>`,
        ],
      },
      // CASE 11
      {
        id: "TH11",
        title:
          "TH11: FAN NO.2 Relay hoạt động nhưng dàn nóng không quay tốc độ cao",
        steps: [
          "Bước 1: Chuẩn bị",
          "Bước 2: Triệu chứng",
          "Bước 3: Khu vực nghi ngờ",
          "Bước 4: Đo kiểm",
          "Bước 5: Xác định hư hỏng",
          "Bước 6: Khắc phục",
        ],
        contents: [
          `<h2>Chuẩn bị dụng cụ</h2><p>- Đồng hồ VOM, sơ đồ mạch điện, phần mềm tra cứu.</p>`,
          `<h2>Xác định triệu chứng</h2><p>- Quạt dàn nóng: Không quay tốc độ cao.<br>- FAN NO.2 Relay: Hoạt động (có tiếng click).</p>`,
          `<h2>Xác định khu vực nghi ngờ</h2><p>(KV1) - Đứt dây dẫn từ chân 5 (FAN NO.2 Relay) đến chân mass (A1).<br>(KV2) - Mất mass (A1).</p><img class="KVNN" src="NG/11.png" alt="Khu vực nghi ngờ 11">`,
           /*html*/`<h2>Quy trình đo kiểm</h2><p>Bật A/C và công tắc giả lập áp suất.</p><div class="DOKIEMM"><div class="scrollable"><img class="DOKIEM1" src="NG/H32.jpg" alt="Đo kiểm TH11"><div class="ND"><div class="layout"><div class="box" data-image="image48" style="top: 15px; left: 335px; width: 135px; height: 65px;">Đứt dây dẫn: 5 (F2 Relay) → mass (A1)</div><div class="box" data-image="image49" style="top: 225px; left: 10px; max-width: 136px; height: 65px; font-size: 23px;">Mất mass (A1)</div></div></div></div></div><div class="image-popup"><img id="image48" src="pan từng vị trí/Pan số 11/N57-75 12V.png"><img id="image49" src="pan từng vị trí/Pan số 11/N57-75 0V.png"></div>`,
          `<h2>Xác định vị trí hư hỏng</h2><table class="my-table1"><tr><td>TH</td><td>VỊ TRÍ HƯ HỎNG</td></tr><tr><td>1</td><td>Đứt dây dẫn từ chân 5 (Relay) đến mass (A1).</td></tr><tr><td>2</td><td>Mất mass (A1).</td></tr></table>`,
          `<h2>Khắc phục hư hỏng</h2><table class="my-table1"><tr><td>TH</td><td>HƯỚNG KHẮC PHỤC</td></tr><tr><td>1</td><td>Dùng hàn chì và ống co nhiệt nối lại dây dẫn.</td></tr><tr><td>2</td><td>Dùng hàn chì và ống co nhiệt nối lại điểm mass.</td></tr></table>`,
        ],
      },
    ],
  };
}

// Logic hover cho các box hình ảnh (giữ nguyên vì nó hiệu quả)
document.body.addEventListener("mouseover", function (e) {
  if (e.target.matches(".box")) {
    // nếu có class .spotlight, thêm vào
    
    const imageId = e.target.dataset.image;
    const image = document.getElementById(imageId);
    if (image) image.style.display = "block";
    if (!e.target.classList.contains("spotlight")) {
      e.target.classList.add("spotlight");
      e.target.dataset.src = image.src;
    }
  }
});

document.body.addEventListener("mouseout", function (e) {
  if (e.target.matches(".box")) {
    const imageId = e.target.dataset.image;
    const image = document.getElementById(imageId);
    if (image) image.style.display = "none";
  }
});
