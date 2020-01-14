/**
 * @typedef {Object} Goods
 * @property {string} name
 * @property {number} price
 * @property {string} image
 * @property {number} [sale=0]
 * @property {string} [badge='']
 */

/**
 * @param {Goods} goods - Goods object to render
 */
function renderGoods({
  name,
  price,
  image,
  badge = '',
  sale = 0,
}) {
  const goods = document.createElement('div');
  goods.className = 'goods';
  goods.innerHTML = `
    <div class="goods">
    <span class="badge">
      BEST
    </span>
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
}
