let day = parseInt(prompt("Nhập vào ngày: "));
        let month = parseInt(prompt("Nhập vào tháng: "));
        let year = parseInt(prompt("Nhập vào năm: "));

        // Tạo một đối tượng Date với ngày 1 của tháng đã nhập
        let firstDay = new Date(year, month - 1, 1);

        // Tính số ngày chênh lệch giữa ngày nhập vào và ngày 1
        let differenceInDays = day - 1;

        // Xác định thứ trong tuần cho ngày nhập vào
        let weekDay = (differenceInDays + 2) % 7; // Cộng thêm 2 vì ngày 1 là thứ Ba (2 là chỉ số của thứ Ba)

        let dayOfWeek = '';

        switch (weekDay) {
            case 0:
                dayOfWeek = "Chủ nhật";
                break;
            case 1:
                dayOfWeek = "Thứ hai";
                break;
            case 2:
                dayOfWeek = "Thứ ba";
                break;
            case 3:
                dayOfWeek = "Thứ tư";
                break;
            case 4:
                dayOfWeek = "Thứ năm";
                break;
            case 5:
                dayOfWeek = "Thứ sáu";
                break;
            case 6:
                dayOfWeek = "Thứ bảy";
                break;
        }