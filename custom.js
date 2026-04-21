document.addEventListener("DOMContentLoaded", function() {
    const cleanUpForm = () => {
        // 1. Bypass địa chỉ và ẩn các dòng trống hoàn toàn
        const fieldRows = ['.addressLine1Field', '.addressLine2Field', '.cityField', '.stateField'];
        fieldRows.forEach(sel => {
            const row = document.querySelector(sel);
            if (row) {
                const input = row.querySelector('input');
                if (input) input.value = "---";
                row.style.setProperty('display', 'none', 'important');
            }
        });

        // 2. Ép phần Credit Card luôn mở và cố định vị trí
        const cc = document.getElementById('creditCardFormOption');
        if (cc) cc.style.setProperty('display', 'block', 'important');

        // 3. Sửa lại text cho nút bấm chuyên nghiệp
        const btn = document.querySelector('.button');
        if (btn) btn.innerText = "Complete Order";
    };

    // Chạy ngay và chạy lại sau 1s để đảm bảo Keap load xong
    cleanUpForm();
    setTimeout(cleanUpForm, 1000);
});
