function lpsTabs(t){void 0===t.buttonShowAllTabs&&(t.buttonShowAllTabs=!1);const s=document.querySelector("."+t.tabsButtonsParentElementClass).children;let e;tabsItems=document.getElementsByClassName(t.tabsItemsClass);for(let a=0;a<s.length;a++)s[a].addEventListener("click",function(){for(let e of s)e.classList.remove(t.tabsButtonActiveClass);for(let s of tabsItems)s.classList.remove(t.tabsItemActiveClass);if((e=t.buttonShowAllTabs?a-1:a)<0){s[0].classList.add(t.tabsButtonActiveClass);for(let s of tabsItems)s.classList.add(t.tabsItemActiveClass)}else s[a].classList.add(t.tabsButtonActiveClass),tabsItems[e].classList.add(t.tabsItemActiveClass)})}