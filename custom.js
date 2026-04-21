document.addEventListener("DOMContentLoaded", function() {
    const forceShowCheckout = () => {
        // 1. Luôn mở phần Credit Card (Payment Info)
        const paymentSection = document.getElementById('creditCardFormOption');
        if (paymentSection) {
            paymentSection.style.setProperty('display', 'block', 'important');
        }

        // 2. Tự điền và ẩn các trường địa chỉ dư thừa
        const hiddenFields = ['.addressLine1Field', '.addressLine2Field', '.cityField', '.stateField'];
        hiddenFields.forEach(selector => {
            const row = document.querySelector(selector);
            if (row) {
                const input = row.querySelector('input');
                if (input) input.value = "---";
                row.style.setProperty('display', 'none', 'important');
            }
        });

        // 3. Đổi tên tiêu đề nếu cần để giống ảnh mẫu
        const paymentHeader = document.querySelector('.paymentOptionsTitle');
        if (paymentHeader) paymentHeader.innerText = "PAYMENT INFO";
    };

    forceShowCheckout();
    // Chạy lại sau 800ms để ghi đè các script mặc định của Keap
    setTimeout(forceShowCheckout, 800);
});
