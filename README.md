Phân tích lỗi :
lỗi 1: pop() lấy xe cuối hàng đợi nên xe đến sau lại được sạc trước
sửa lại : dùng shift() để lấy xe đầu hàng đợi đúng thứ tự FIFO

lỗi 2: i <= completedSessionsKwh.length làm vòng lặp chạy dư 1 lần
Mảng có 4 phần tử thì chỉ số từ 0 đến 3, phần tử ở chỉ số 4 là undefined
Cộng số với undefined ra NaN nên tổng điện và doanh thu đều sai
sửa lại : dùng i < completedSessionsKwh.length

Test case:
TH1: đầu vào là ['29A-112.33', '30E-889.12', '51K-678.99']
Kết quả sai : xe 51K-678.99 vào trước. Kết quả đúng : xe 29A-112.33 vào trước
TH2: đầu vào là [45.2, 30.5, 62.8, 28.0], giá 4500 VNĐ/kWh
Kết quả sai : tổng điện và doanh thu là NaN. Kết quả đúng : 166.5 kWh và 749250 VNĐ
