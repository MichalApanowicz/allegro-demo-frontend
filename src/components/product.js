// {
//   "id": "product-id-4",
//   "name": "Drzewo",
//   "price": {
//     "amount": "544.89",
//     "currency": "PLN" // "EUR", "USD"
//   },
//   "description": {,
//     "text": "Na całym świecie rośnie obecnie około 3 bilionów 40 miliardów drzew."
//   },
//   "image": {
//     "url": "https://images.unsplash.com/photo-1458966480358-a0ac42de0a7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
//   }
// }

// 123,12 zł
// $ 123.12
// € 123.12
const DISPLAY_CURRENCY = {
  PLN: { prefix: '',   suffix: ' zł', separator: ',' },
  EUR: { prefix: '€ ', suffix: '',    separator: '.' },
  USD: { prefix: '$ ', suffix: '',    separator: '.' }
}

function formatPrice(price) {
  const currencySettings = DISPLAY_CURRENCY[price.currency];
  const formattedAmount = price.amount.replace('.', currencySettings.separator);

  return `${currencySettings.prefix}${formattedAmount}${currencySettings.suffix}`;
}

function renderProduct(product) {
  return `
  <div class="product">
    <img class="product__image" src="${product.image.url}">
    <div class="product__info">
      <h2 class="product__title">
        ${product.name}
      </h2>
      <div>${formatPrice(product.price)}</div>
      <div class="product__description">
        ${product.description.text}
      </div>
    </div>
  </div>
  `;
}
