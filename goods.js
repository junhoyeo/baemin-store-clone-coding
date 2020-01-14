/**
 * @typedef {Object} Goods
 * @property {string} name
 * @property {number} price
 * @property {string} image
 * @property {number} [sale=0]
 * @property {string} [badge='']
 */

/**
 * @param {string} [badge='']
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
  goods.className = 'goods';
  goods.innerHTML = `
    <div class="goods">
    ${renderBadge(badge)}
    <img
      src="${image}"
    />
    <div class="info">
      <span class="name">
        ${name}
      </span>
      <span class="price">
        ${price.toLocaleString('ko')}원
      </span>
    </div>
  `;

  return goods;
};
