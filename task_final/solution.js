// Исправьте функцию sendRequest
// Аргументы функции:
// name - имя клиента
// phone - телефон клиента
// address - объект с адресом доставки: {street, house, entrance, floor, flat}
// goods - список товаров в заказе
// sum - стоимость заказа с учетом скидок и доставки

// Как результат функции требуется вернуть JSON,
// cформированный в соответствии с правилами:
// Объект data содержит все данные
// В объекте data есть свойства:
// - client - строка, имя клиента + телефон клиента;
// - order - объект, содержащий данные о заказе:
//     - address - строка с адресом доставки, записанным человекопонятным языком (как в примере)
//     - sum - стоимость заказа с учетом скидок и доставки
// - goods: массив объектов с информацией о позициях заказа:
//     - title - название позиции
//     - count - количество в заказе
// например:
// {
//    "data": {
//      "client": "Иван +7(987)65-43-210",
//      "order": {
//        "address": "ул. Ленина, дом 2, 4 подъезд, 5 этаж, кв 53",
//        "sum": 900
//       },
//       "goods": [
//         {
//           "title": "Пицца",
//           "count": 2
//         }
//      ]
//    }
// }


function sendRequest(name, phone, address, goods, sum) {
    let retval = {
        data: { 
            order: {}, 
            goods: []}
        };

    let countOfGoods = goods.length;

    for (let i = 0; i < countOfGoods; i++) {
        good = {
            title:goods[i].title,
            count:goods[i].count
        }
        retval.data.goods.push(good);
    }

    retval.data.client = name+" "+phone;
    retval.data.order.address = "ул. "+address.street+", дом "+address.house+", "+address.entrance+" подъезд, "+address.floor+" этаж, кв "+address.flat;
    retval.data.order.sum = sum;

    let jsonData = JSON.stringify(retval);

    return jsonData;
}