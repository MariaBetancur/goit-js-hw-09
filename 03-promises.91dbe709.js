function e(e,t){return new Promise(((o,n)=>{Math.random()>.3?setTimeout((()=>{o({position:e,delay:t})}),t):setTimeout((()=>{n({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const o=t.target,n=parseInt(o.delay.value),i=parseInt(o.step.value),s=parseInt(o.amount.value);for(let t=0;t<s;t++){e(t+1,n+t*i).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}}));
//# sourceMappingURL=03-promises.91dbe709.js.map