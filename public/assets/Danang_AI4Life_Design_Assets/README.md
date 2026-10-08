# Danang AI4Life — bộ tư liệu thiết kế tham chiếu

Chuẩn bị ngày 07/10/2026. Gồm **8 ảnh/ấn phẩm cuộc thi và 1 logo VKU**. Các tệp ảnh được giữ nguyên byte từ nguồn đã tải, không đổi năm, không sửa nội dung, không tạo thêm tư liệu giả.

## Cách dùng

1. Giải nén rồi mở **INDEX.html** để xem toàn bộ tư liệu trong trình duyệt, không cần Internet để xem ảnh.
2. Xem **asset-manifest.csv** hoặc **asset-manifest.json** để biết kích thước, loại tư liệu, nguồn, năm, ghi chú sử dụng và SHA-256 của từng tệp.
3. Đọc prompt `Prompt_Danang_AI4Life_2026_FE.txt` được bàn giao riêng để biết bố cục, nội dung 2026 và vị trí sử dụng asset.
4. Khi dựng frontend, sao chép thư mục 2024/2025/brand vào public/assets/ai4life và dùng đường dẫn local. Dẫn nguồn từ metadata khi hiển thị gallery.

## Những điều cần phân biệt

- Tư liệu cuộc thi trong gói thuộc mùa **2024–2025**, không phải bộ ấn phẩm chính thức 2026.
- Banner/poster 2025 dùng làm tham chiếu nhận diện hoặc gallery lịch sử có nhãn mùa. Không sửa số 2025 thành 2026; không dùng ngày, tiền thưởng hoặc tên nhà tài trợ trên ảnh như thông tin mùa mới.
- Poster dọc 2025 **chưa được xác minh là standee**. Không có tệp standee độc lập hoặc thông số in đã kiểm chứng trong gói.
- Ảnh backdrop/trao giải là **ảnh chụp sự kiện**, không phải file thiết kế in gốc PSD/AI/PDF.
- Logo lấy từ website VKU: container SVG có PNG nhúng. Giữ nguyên tệp và tỉ lệ, ưu tiên logo sẵn có trong repository do người dùng cung cấp khi triển khai.
- Các tài liệu 2026 của người dùng là căn cứ nội dung trong prompt, không nằm trong ZIP này vì ZIP được dành cho ảnh và tư liệu thiết kế.
- Facebook VKU gặp đăng nhập/hạn chế trong phiên nghiên cứu; không khẳng định đã thu thập toàn bộ bài đăng, album hoặc ấn phẩm trên Internet.
- Tư liệu có nguồn công khai, nhưng chưa xác minh giấy phép tái sử dụng riêng; gói này không chuyển nhượng quyền sở hữu của bên tạo ảnh/ấn phẩm.

## Nhận diện quan sát được

V/K/U đỏ/vàng/xanh; dải logo sáng; thân banner xanh/cyan; chữ tiêu đề vàng; nhãn navy cắt góc; nét não, mạch AI và kiến trúc Đà Nẵng. Khi chuyển lên web, ưu tiên snapshot của người dùng: Inter, nền sáng, navy, CTA xanh #064fc4, header 64px, H1 28/32px, card 12–14px. Chỉ chuyển tinh thần thị giác của ấn phẩm thành trang trí tiết chế; nội dung website phải là HTML đọc được.

## Danh mục

| Tệp | Loại | Kích thước | Năm tư liệu |
|---|---|---:|---|
| 2024/ai4life-poster-2024.jpg | Poster vuông | 1024 × 1024 | 2024 |
| 2024/ai4life-rules-event-photo-2024.jpg | Ảnh chụp màn hình thể lệ | 2000 × 1328 | 2024 |
| 2025/ai4life-banner-2025.png | Banner ngang | 3201 × 1800 | 2025 |
| 2025/ai4life-notice-poster-2025.png | Poster dọc | 4001 × 5001 | 2025 |
| 2025/ai4life-prizes-2025.png | Ấn phẩm giải thưởng | 3840 × 1487 | 2025 |
| 2025/ai4life-award-backdrop-photo-2025.jpg | Ảnh sự kiện | 1715 × 1072 | 2025 |
| 2025/ai4life-challenge-award-photo-2025.jpg | Ảnh sự kiện | 1577 × 979 | 2025 |
| 2025/ai4life-students-photo-2025.jpg | Ảnh hoạt động | 2048 × 1365 | 2025 |
| brand/vku-logo-original.svg | Logo trong container SVG | 76 × 50 | 2023 |

## Nguồn từng tệp

- **Poster giới thiệu mùa 2024**: https://vku.udn.vn/wp-content/uploads/2024/10/DanangAIforLife1-1024x1024.jpg
- **Thể lệ trình chiếu tại sự kiện 2024**: https://tapchidongnama.vn/wp-content/uploads/2024/12/DSC_0054.jpg
- **Banner Danang AI4Life 2025**: https://vku.udn.vn/wp-content/uploads/2025/09/BG-VKU-AI-2025.png
- **Poster thông báo mùa 2025**: https://vku.udn.vn/wp-content/uploads/2025/09/VKU-AI-TB-So-1.png
- **Bảng giải thưởng mùa 2025**: https://vku.udn.vn/wp-content/uploads/2025/09/Presentation1.png
- **Backdrop tại lễ trao giải 2025**: https://bqn.1cdn.vn/2025/12/27/27-12-giai-nhat-2%281%29.jpg
- **Trao giải AI Challenge 2025**: https://bqn.1cdn.vn/2025/12/27/27-12-trao-giai-1%281%29.jpg
- **Sinh viên tham gia cuộc thi 2025**: https://bqn.1cdn.vn/2025/12/27/_mg_8056.jpg
- **Logo VKU từ website trường**: https://vku.udn.vn/wp-content/uploads/2023/06/logo_intro.svg
