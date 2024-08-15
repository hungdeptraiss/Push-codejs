let input;

while (true) {
    input = prompt("Nhập vào một ký tự bất kì: ");
    
    // Kiểm tra nếu input là số và không phải là chuỗi rỗng
    if (!isNaN(input) && input.trim() !== '') {
        document.write(`${input} là một số.`);
        break; // Thoát khỏi vòng lặp nếu input hợp lệ
    } else {
        alert("Giá trị không hợp lệ. Vui lòng nhập lại."); // Thông báo lỗi và yêu cầu nhập lại
    }
}