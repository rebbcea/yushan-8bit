// 獲取item圖片 / 視窗圖片跟box
const gallery = document.querySelectorAll('.portfolio__item--img'),
  previewImg = document.querySelector('.portfolio__box-img'),
  previewBox = document.querySelector('.portfolio-box');

// 按鈕設定
const closeBtn = document.querySelector('.btn__close'),
  prevBtn = document.querySelector('.btn__prev'),
  nextBtn = document.querySelector('.btn__next');

// 內文設定
const prevTitle = document.querySelector('.portfolio__box-details--title'),
  prevSmall = document.querySelector('.portfolio__box-details--small'),
  totalText = document.querySelector('.portfolio__box-details--total'),
  curText = document.querySelector('.portfolio__box-details--current');

// =========================================================

window.addEventListener('load', event => {
  for (let i = 0; i < gallery.length; i++) {
    // 將所有portfolio__item--img增加 data-index的編號
    let dataIndex = (gallery[i].dataset.index = i);
    // 最後一張圖的index = 總張數 - 1
    let maxIndex = gallery.length - 1;
    // 總張數
    totalText.textContent = gallery.length;

    gallery[dataIndex].addEventListener('click', function (e) {
      // 獲取點擊目標的data-index
      let curIndex = e.target.dataset.index;

      // 更新圖片
      function UploadPreview() {
        //當前的頁數
        curText.textContent = Number(curIndex) + 1;

        // 獲取gallery"子層img"的src/alt ,丟入portfolio__box-img裡的img/alt
        // 達到box"獲取圖片"的效果
        let imageURL = gallery[curIndex].querySelector('img').src;
        let imageAlt = gallery[curIndex].querySelector('img').alt;
        previewImg.querySelector('img').src = imageURL;
        previewImg.querySelector('img').alt = imageAlt;

        // 獲取data標題內文等
        curTitle = gallery[curIndex].querySelector('img').dataset.title;
        curDepiction = gallery[curIndex].querySelector('img').dataset.depiction;
        curSoftware = gallery[curIndex].querySelector('img').dataset.software;
        curHref = gallery[curIndex].querySelector('img').dataset.href;
        console.log(curHref);

        prevTitle.querySelector('h1').textContent = curTitle;
        prevTitle.querySelector('p').textContent = curDepiction;
        prevSmall.querySelector('mark').textContent = curSoftware;

        // 獲取內文要放入href的div
        let newHerf = document.getElementById('newHref');
        console.log(newHerf);

        // 設定連結部分 連結是undefined不顯示 否則補連結+顯示按鈕
        if (curHref === undefined) {
          newHref.style.display = 'none';
        } else {
          newHref.style.display = 'flex';

          // 將a連結插入到裡面
          newHerf.innerHTML =
            "<a href = ' " + curHref + " ' target='_blank'>查看網站</a>";

          // prevSmall.innerHTML = "<a href = ' " + curHref + "'>";
          // prevSmall.querySelector('a').style.display = 'flex';
        }
      }
      UploadPreview();

      // 當展開box卷軸無法scroll
      document.querySelector('body').style.overflow = 'hidden';

      // box active
      previewBox.classList.add('portfolio-box--active');

      // 按下按鈕 =========
      previewImg.addEventListener('click', function (e) {
        const clickedBtn = e.target.closest('.btn');
        if (!clickedBtn) return;

        // 點擊按鈕是prevBtn index-1 否則(netxBtn) 就index+1
        clickedBtn == prevBtn ? curIndex-- : curIndex++;
        // index<0(第一張往前繼續prevBtn)就index到最後一張(maxIndex) ;
        // index >maxIndex(最後一張往後繼續nextBtn)則index=0(第一張), 是正常進行就直接preview(更新)
        if (curIndex < 0) {
          curIndex = maxIndex;
          UploadPreview();
        } else if (curIndex > maxIndex) {
          curIndex = 0;
          UploadPreview();
        } else {
          UploadPreview();
        }
      });

      // 關掉box ================
      function closeBox() {
        previewBox.classList.remove('portfolio-box--active');
        document.querySelector('body').style.overflow = 'scroll';
      }

      closeBtn.addEventListener('click', closeBox);
      // 觸碰到除了視窗本身以外的地方也會關掉
      document.addEventListener('click', function (e) {
        if (e.target == previewBox) closeBox();
      });
    });
  }
});
