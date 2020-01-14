const data = {
  lists: {
    best: [
      {
        name: '2020 일력. 오늘이 전설이 될 것이다',
        price: 19800,
        image: './data/goods/225.png',
        badge: 'BEST',
      },
      {
        name: '돈봉투 골드에디션. 용돈',
        price: 3500,
        image: './data/goods/95.png',
        badge: 'BEST',
      },
      {
        name: '돈봉투. 사랑',
        price: 2500,
        image: './data/goods/195.png',
        badge: 'BEST',
      },
      {
        name: '돈봉투. 용돈',
        price: 2500,
        image: './data/goods/193.png',
        badge: 'BEST',
      },
    ],
    new: [
      {
        name: '메모잇. 진짜 까먹지 말자',
        price: 1500,
        image: './data/goods/246.png',
        badge: 'NEW',
      },
      {
        name: '빗 있어?',
        price: 1500,
        image: './data/goods/239.png',
        badge: 'NEW',
      },
      {
        name: '헤어롤 있어?',
        price: 1500,
        image: './data/goods/238.png',
        badge: 'NEW',
      },
      {
        name: '거울 있어?',
        price: 1500,
        image: './data/goods/240.png',
        badge: 'NEW',
      },
    ],
  },
};

const renderGoodsList = () => {
  Object.keys(data.lists).forEach((key, _) => {
    const listElement = document.getElementById(`goods-list-${key}`);

    data.lists[key].forEach((goods, _) => {
      listElement.appendChild(
        renderGoods(goods),
      );
    });
  });
};

window.onload = () => {
  renderMenu();
  renderGoodsList();
};
