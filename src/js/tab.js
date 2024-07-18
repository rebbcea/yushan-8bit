// tab ==============================================================
const tabs = document.querySelectorAll('.skill__tab');
const tabsContainer = document.querySelector('.skill__tab-container');
const tabsContent = document.querySelectorAll('.skill__content');

// 使用此方法會跑"所有tab"佔容量使運行速度下降
// tabs.forEach(t => t.addEventListener('click', () => console.log('tab')));

// 運用bubbling原理 先尋找父層 再往下觸及
tabsContainer.addEventListener('click', function (e) {
  // 找尋離父曾最接近的.skill_tab
  const clicked = e.target.closest('.skill__tab');
  // console.log(clicked);

  // 是false時(null)時直接回傳
  if (!clicked) return;

  // active tab
  tabs.forEach(t => t.classList.remove('skill__tab--active'));
  clicked.classList.add('skill__tab--active');

  // active content
  //   console.log(clicked.dataset.tab);
  tabsContent.forEach(c => c.classList.remove('skill__content--active'));
  document
    .querySelector(`.skill__content--${clicked.dataset.tab}`)
    .classList.add('skill__content--active');
});

// portolio ==============================================================
const port_tabs = document.querySelectorAll('.portfolio__tab');
const port_tabsContainer = document.querySelector('.portfolio__tab-container');
const port_tabsContent = document.querySelectorAll('.portfolio__content');

// 使用此方法會跑"所有tab"佔容量使運行速度下降
// tabs.forEach(t => t.addEventListener('click', () => console.log('tab')));

port_tabsContainer.addEventListener('click', function (e) {
  // 找尋父層中最接近的.skill_tab
  const clicked = e.target.closest('.portfolio__tab');
  // console.log(clicked);

  // 是false時(null)時直接回傳
  if (!clicked) return;

  // active tab
  port_tabs.forEach(t => t.classList.remove('portfolio__tab--active'));
  clicked.classList.add('portfolio__tab--active');

  // active content
  //   console.log(clicked.dataset.tab);
  port_tabsContent.forEach(c =>
    c.classList.remove('portfolio__content--active')
  );
  document
    .querySelector(`.portfolio__content--${clicked.dataset.tab}`)
    .classList.add('portfolio__content--active');
});
