/**
 * @typedef {Object} Goods
 * @property {string} name
 * @property {number} price
 * @property {string} image
 * @property {number} [sale=0]
 * @property {string} [badge='']
 */

/**
 * @param {string} badge
 */
const renderBadge = (badge) => {
  if (!badge)
    return '';
  const badgeElement = document.createElement('span');
  badgeElement.className = 'badge';
  badgeElement.style.backgroundColor = {
    'BEST': '#333',
    'NEW': '#29C1BC',
    'SALE': '#ff6350',
  }[badge];
  badgeElement.innerText = badge;

  return badgeElement.outerHTML;
};

/**
 * @param {number} sale
 */
const renderSale = (sale) => {
  return `
    <span class="sale">
      ${sale}%
    </span>
  `;
};

/**
 * @param {number} discount
 */
const renderDiscount = (discount) => {
  return `
    <span class="discount">
      ${discount.toLocaleString('ko')}원
    </span>
  `;
};

/**
 * @param {Goods} goods - Goods object to render
 */
const renderGoods = ({
  name,
  price,
  image,
  badge = '',
  sale = 0,
}) => {
  const goods = document.createElement('div');

  const discountAmount = price * (sale / 100);
  const currentPrice = sale ? price - discountAmount : price;

  goods.className = 'goods';
  goods.innerHTML = `
    <div class="goods">
    ${renderBadge(badge)}
    <img
      src="${image}"
    />
    <div class="info">
      ${sale ? renderSale(sale) : ''}
      <span class="name">
        ${name}
      </span>
      ${sale ? renderDiscount(discountAmount) : ''}
      <span class="price">
        ${currentPrice.toLocaleString('ko')}원
      </span>
    </div>
  `;

  return goods;
};
