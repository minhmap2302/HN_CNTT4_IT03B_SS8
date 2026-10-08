const fastChargingRate = 4500;
const waitingQueue = ['29A-112.33', '30E-889.12', '51K-678.99'];

// lay xe dau hang doi
const nextVehicle = waitingQueue.shift();
console.log('Xe được điều phối vào sạc:', nextVehicle);

const completedSessionsKwh = [45.2, 30.5, 62.8, 28.0];
let totalKwh = 0;

// cong dien nang
for (let i = 0; i < completedSessionsKwh.length; i++) {
  totalKwh += completedSessionsKwh[i];
}

const totalRevenue = totalKwh * fastChargingRate;
console.log('Tổng sản lượng:', totalKwh, 'kWh');
console.log('Tổng doanh thu:', totalRevenue, 'VNĐ');
