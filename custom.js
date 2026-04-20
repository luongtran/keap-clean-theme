<script>
document.addEventListener("DOMContentLoaded", function() {
    // 1. Bypass validation: Điền giá trị giả và ẨN HOÀN TOÀN các hàng thừa
    const fieldsToKill = ['.addressLine1Field', '.addressLine2Field', '.cityField', '.stateField'];
    fieldsToKill.forEach(selector => {
        const row = document.querySelector(selector);
        if(row) {
            const input = row.querySelector('input');
            if(input) input.value = "---";
            row.style.setProperty('display', 'none', 'important');
        }
    });

    // 2. Ép hiển thị khu vực nhập thẻ ngay lập tức
    const cc = document.getElementById('creditCardFormOption');
    if(cc) cc.style.setProperty('display', 'block', 'important');

    // 3. Chỉnh sửa Text nút thanh toán giống trang GMTC
    const btn = document.querySelector('.button');
    if(btn) btn.innerText = "Complete Your Order";
});
</script>
