import{S as p,N as I,K as q,M as B,A as v,i as M}from"./assets/vendor-6ddb0015.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=i(s);fetch(s.href,n)}})();const O=document.querySelector(".HeaderMenuButton"),m=document.querySelector(".HeaderMenuList");let w=1;O.addEventListener("click",e=>{e.preventDefault(),w+=1,w%2===0?m.classList.add("MenuIsVisible"):m.classList.remove("MenuIsVisible")});m.addEventListener("click",e=>{w+=1,m.classList.remove("MenuIsVisible")});const T=new p(".about-swiper-container",{loop:!0,slidesPerGroup:1,setWrapperSize:!0,modules:[I,q,B],simulateTouch:!0,grabCursor:!0,slideActiveClass:"active",navigation:{nextEl:".about-swiper-button"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:2,spaceBetween:10},375:{slidesPerView:2,spaceBetween:15},768:{slidesPerView:3,spaceBetween:35},1440:{slidesPerView:6,spaceBetween:10}}});document.querySelector(".about-swiper-button").addEventListener("click",()=>{T.slideNext()});document.querySelector(".ac-trigger");new v(".accordion-container",{duration:600,collapse:!0,openOnInit:[0],showMultiple:!0});new p(".swiper",{cssMode:!1,spaceBetween:30,navigation:{nextEl:".SwButtonNext",prevEl:".SwButtonPrev"},mousewheel:!1,keyboard:!0,touch:!0});new v(".faq-list",{duration:400,showOne:!0,showMultiple:!0,onToggle:function(e){const t=e.target.closest(".qwestions");t&&t.classList.toggle("is-active")}});const f=document.querySelectorAll(".CoversImgContainer"),N=document.querySelector(".CoverBgContainer");window.addEventListener("scroll",R);function R(){P(N)?f.forEach(e=>e.classList.add("AnimationOn")):f.forEach(e=>e.classList.remove("AnimationOn"))}function P(e){const t=e.getBoundingClientRect();return t.bottom>0&&t.right>0&&t.top<(window.innerHeight||document.documentElement.clientHeight)&&t.left<(window.innerWidth||document.documentElement.clientWidth)}async function A(e,t){const s="https://portfolio-js.b.goit.study/api"+"/requests",n={method:"POST",body:JSON.stringify({email:e,comment:t}),headers:{"Content-Type":"application/json",Accept:"application/json"}};return await fetch(s,n).then(a=>{if(!a.ok)throw new Error(a.status);return a.json()})}function V(e,t){const i=document.getElementById("reviewsList");fetch("https://portfolio-js.b.goit.study/api/reviews").then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{const s=r.map(n=>t(n)).join("");i.innerHTML=s,e()}).catch(r=>{console.error(r),M.error({title:"Помилка",message:"Не вдалося завантажити список відгуків"}),i.innerHTML="Not found"})}const u=window.innerWidth;let d;u>=1440?d=4:u>=768&&u<1440?d=2:u<768&&(d=1);function F(){new p(".reviews-swiper",{cssMode:!0,slidesPerView:d,slidesPerGroup:1,navigation:{disabledClass:"BtnOff",nextEl:".ButtonNext",prevEl:".ButtonPrev"},keyboard:!0,touch:!0})}function _(e){return`
        <div class="Review swiper-slide">
        <img class="UserIcon" src="${e.avatar_url}" alt="Avatar">
          <h4 class="Name">${e.author}</h4>
          <p class="ReviewText">${e.review}</p>
        </div>
      `}V(F,_);const g=36,o={wtCoopForm:document.querySelector("#WtForm"),wtModal:document.querySelector(".WorkTogetherModalWrapper"),wtResultMsg:document.querySelector(".CoopResultMsg"),wtModalRespTitle:document.querySelector("#WtModalRespTitle"),wtModalRespMessage:document.querySelector("#WtModalRespMessage"),wtModalClose:document.querySelector(".WorkTogetherModalClose"),wtModalBox:document.querySelector(".WorkTogetherModal")};o.wtCoopForm.addEventListener("submit",W);o.wtCoopForm.elements.email.addEventListener("input",h);o.wtCoopForm.elements.email.addEventListener("blur",k);o.wtCoopForm.elements.email.addEventListener("blur",S);o.wtCoopForm.elements.email.addEventListener("focus",y);o.wtCoopForm.elements.comment.addEventListener("focus",y);o.wtCoopForm.elements.comment.addEventListener("blur",S);o.wtModal.addEventListener("click",L);window.addEventListener("keydown",L);async function W(e){e.preventDefault();try{const{email:t,comment:i}=o.wtCoopForm.elements,r=await A(t.value,i.value);x(r),o.wtCoopForm.reset(),t.classList.remove("Invalid"),t.classList.remove("Success"),o.wtResultMsg.textContent=""}catch{M.error({message:"Something went wrong! Please, try again.",position:"bottomCenter"})}}function x({title:e,message:t}){o.wtModalRespTitle.textContent=e,o.wtModalRespMessage.textContent=t,o.wtModal.classList.add("IsOpen")}function L(e){(!o.wtModalBox.contains(e.target)||o.wtModalClose.contains(e.target)||e.code==="Escape")&&(o.wtModal.classList.remove("IsOpen"),o.wtResultMsg.textContent="")}function k(e){e.target.value=e.target.value.trim();const t=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;if(!e.target.value){h(e);return}e.target.value.match(t)?j():U()}function j(){const{email:e}=o.wtCoopForm.elements;e.classList.remove("Invalid"),e.classList.add("Success"),o.wtResultMsg.textContent="Success!",o.wtResultMsg.classList.add("Success")}function U(){const{email:e}=o.wtCoopForm.elements;e.classList.remove("Success"),e.classList.add("Invalid"),o.wtResultMsg.textContent="Invalid email, try again",o.wtResultMsg.classList.remove("Success")}function h(e){e.target.name==="email"&&(o.wtResultMsg.textContent="",o.wtResultMsg.classList.remove("Success"));const{email:t}=o.wtCoopForm.elements;t.classList.remove("Invalid"),t.classList.remove("Success")}function S(e){console.log(e.target.value.length),e.target.setAttribute("data-value",e.target.value.trim()),e.target.value.length>g&&(e.target.value=e.target.value.slice(0,g-3).concat("..."))}function y(e){e.target.value&&(e.target.value=e.target.getAttribute("data-value"))}const E=document.querySelector(".ModalMenu"),D=document.querySelector("#openModal"),b=document.querySelector(".CloseModalBtn"),C=document.querySelector("body"),H=document.querySelector(".Menu"),c={aboutMe:document.querySelector("#about-me"),benefits:document.querySelector("#Benefits"),projects:document.querySelector(".SectionProject"),faq:document.querySelector("#FAQ"),order:document.querySelector("#WorkTogether")};D.addEventListener("pointerdown",G);b.addEventListener("pointerdown",l);H.addEventListener("pointerdown",z);function G(){E.classList.add("Open"),C.classList.add("ModalBodyLock")}function l(){E.classList.remove("Open"),C.classList.remove("ModalBodyLock")}function z(e){e.target===e.currentTarget||e.target===b||(e.target.classList.contains("AboutMe")?(l(),c.aboutMe.scrollIntoView({behavior:"smooth"})):e.target.classList.contains("Benefits")?(l(),c.benefits.scrollIntoView({behavior:"smooth"})):e.target.classList.contains("Projects")?(l(),c.projects.scrollIntoView({behavior:"smooth"})):e.target.classList.contains("FAQ")?(l(),c.faq.scrollIntoView({behavior:"smooth"})):e.target.classList.contains("OrderButton")&&(l(),c.order.scrollIntoView({behavior:"smooth"})))}
//# sourceMappingURL=commonHelpers.js.map