document.addEventListener('DOMContentLoaded', () => {
    
    // Thuật toán xử lý việc click vào các thành phần URL để hiện giải thích tương ứng
    const configureUrlInteractive = (urlBoxId) => {
        const urlBox = document.getElementById(urlBoxId);
        if (!urlBox) return;

        const parts = urlBox.querySelectorAll('.part');
        const placeholder = urlBox.querySelector('.placeholder-text');
        const details = urlBox.querySelectorAll('.detail-text');

        parts.forEach(part => {
            part.addEventListener('click', () => {
                // Xóa trạng thái active cũ của các thẻ cùng cụm URL
                parts.forEach(p => p.classList.remove('active'));
                
                // Kích hoạt thẻ hiện tại
                part.classList.add('active');
                
                // Ẩn dòng chữ gợi ý ban đầu
                if(placeholder) placeholder.classList.add('hidden');
                
                // Ẩn tất cả các văn bản chi tiết trước đó
                details.forEach(detail => detail.classList.add('hidden'));
                
                // Lấy class mục tiêu và hiển thị nội dung khớp với thuộc tính data-target
                const targetClass = part.getAttribute('data-target');
                const activeDetail = urlBox.querySelector(`.${targetClass}`);
                if (activeDetail) {
                    activeDetail.classList.remove('hidden');
                }
            });
        });
    };

    // Áp dụng tính năng tương tác cho cả 2 khối URL mẫu
    configureUrlInteractive('url1');
    configureUrlInteractive('url2');
});
