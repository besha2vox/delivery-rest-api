const mailTemplate = (data) => {
    const { order, totalPrice, user } = data;

    return `<!DOCTYPE html>
<html>
<head>
  <title>Лист замовлення</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
      margin: 0;
      padding: 0;
    }
    
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .logo {
      text-align: center;
      margin-bottom: 20px;
    }
    
    .logo img {
      max-width: 150px;
    }
    
    .order-details {
      margin-bottom: 20px;
    }
    
    .order-details h2 {
      font-size: 18px;
      margin-bottom: 10px;
    }
    
    .order-details table {
      width: 100%;
      border-collapse: collapse;
    }
    
    .order-details th,
    .order-details td {
      padding: 8px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
    
    .order-details th {
      background-color: #f5f5f5;
    }
    
    .order-total {
      text-align: right;
    }
    
    .order-total h3 {
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <div class="container">
  <h1>Вітаю, ${user.name}</h1>
    <div class="order-details">
      <h2>Список товарів</h2>
      <table>
        <thead>
          <tr>
            <th>Назва товару</th>
            <th>Кількість</th>
            <th>Ціна</th>
          </tr>
        </thead>
        <tbody>
         ${order
             .map(({ name, price, orderedQuantity }) => {
                 return `<tr>
            <td>${name}</td>
            <td>${orderedQuantity}</td>
            <td>${price * orderedQuantity}₴</td>
          </tr>`;
             })
             .join('')}
        </tbody>
      </table>
    </div>
    
    <div class="order-total">
      <h3>Загальна ціна: ${totalPrice}₴</h3>
      <h3>Зазначена адреса доставки: ${user.address}</h3>
    </div>
  </div>
</body>
</html>`;
};

module.exports = mailTemplate;
