var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in i){var o=i[e];delete i[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){i[e]=t},e.parcelRequired7c6=o);var r=o("iQIUW");function n(e,t){const i=Math.random()>.3;return new Promise(((o,r)=>{setTimeout((()=>{i?o({position:e,delay:t}):r({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(e=>{e.preventDefault();const t=Number(e.target.amount.value),i=Number(e.target.delay.value),o=Number(e.target.step.value);if(i<0||o<0||t<0)return r.Notify.failure("The values in the fields must be positive numbers");for(let e=0;e<t;e++){n(e+1,i+o*e).then((({position:e,delay:t})=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{r.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)}))}}));
//# sourceMappingURL=03-promises.56a93ea0.js.map
