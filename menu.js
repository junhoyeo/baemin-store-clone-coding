categories = [
  '전체',
  '문구',
  '리빙',
  '패션',
  '여행',
  '책',
  'ㅋㅋ에디션',
  '선물세트',
  '콜라보레이션',
];

const renderMenu = () => {
  const menuElement = document.getElementById('menu');

  categories.forEach((category, _) => {
    const categoryElement = document.createElement('a');
    categoryElement.className = 'category';
    categoryElement.innerText = category;

    menuElement.appendChild(categoryElement);
  });
};
