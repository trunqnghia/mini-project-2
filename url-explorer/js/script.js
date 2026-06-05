document.addEventListener('DOMContentLoaded', () => {
    
    const configureUrlInteractive = (urlBoxId) => {
        const urlBox = document.getElementById(urlBoxId);
        if (!urlBox) return;

        const parts = urlBox.querySelectorAll('.part');
        const placeholder = urlBox.querySelector('.placeholder-text');
        const details = urlBox.querySelectorAll('.detail-text');

        parts.forEach(part => {
            part.addEventListener('click', () => {
                // Reset style viền của các phần tử khác cùng hàng về mặc định
                parts.forEach(p => {
                    p.style.outline = "none";
                    p.style.fontWeight = "normal";
                });
                
                // Thêm viền nổi bật cho phần tử đang click
                part.style.outline = "2px dashed #fff";
                part.style.fontWeight = "bold";
                
                // Ẩn dòng chữ gợi ý ban đầu
                if(placeholder) placeholder.style.display = "none";
                
                // Ẩn tất cả các văn bản giải thích chi tiết trước đó
                details.forEach(detail => detail.style.display = "none");
                
                // Lấy class mục tiêu và hiển thị nội dung khớp với thuộc tính data-target
                const targetClass = part.getAttribute('data-target');
                const activeDetail = urlBox.querySelector(`.${targetClass}`);
                if (activeDetail) {
                    activeDetail.style.display = "block";
                }
            });
        });
    };

    // Kích hoạt tính năng cho cả 2 khối URL mẫu
    configureUrlInteractive('url1');
    configureUrlInteractive('url2');
});
