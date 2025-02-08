import{c as W,B as oe,r as z,o as ne,w as he,d as F,z as D,e as a,_ as se,u as ae,y as ge,i as pe,b as ye,p as ve,f as M,n as f,g as i,t as U,h as Q,l as E,k as N,j as J,v as X,x as K,C as be,F as Y,q as Z,m as V,X as xe,T as me,A as ee}from"./index-BIfJi_O-.js";import{g as we,u as _e,S as Ce,C as Ae,E as Me,a as Se,Q as Be}from"./_commonjsHelpers-CljsJuVy.js";import{F as te}from"./file-AHrKtGwY.js";import{T as Ie,H as Te}from"./trash-wtxrZ93m.js";/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=W("ClipboardCopyIcon",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",key:"4jdomd"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4",key:"3hqy98"}],["path",{d:"M21 14H11",key:"1bme5i"}],["path",{d:"m15 10-4 4 4 4",key:"5dvupr"}]]);/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=W("ClockIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=W("CloudUploadIcon",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]]);/**
 * @license lucide-vue-next v0.445.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=W("SendIcon",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]),Pe=oe({__name:"BorderProgressBar",props:{progress:{}},setup(S){const k=S,T=z(null),u=z(null);let d=null;const C=()=>{if(!d||!u.value||!T.value)return;const v=T.value.clientWidth,x=T.value.clientHeight;u.value.width=v,u.value.height=x;const p=4,c=8;d.lineWidth=p;const A=d.createLinearGradient(0,0,v,x);A.addColorStop(0,"#4f46e5"),A.addColorStop(.5,"#7c3aed"),A.addColorStop(1,"#db2777"),d.strokeStyle="rgba(229, 231, 235, 0.2)",w(d,p/2,p/2,v-p,x-p,c),d.stroke();const I=((v+x)*2-8*c+2*Math.PI*c)*k.progress/100;d.strokeStyle=A,d.lineCap="round",d.lineJoin="round",d.beginPath();let y=I;const m=p/2,h=v-p,s=x-p;if(y>0){const n=Math.min(h-2*c,y);d.moveTo(c+m,m),d.lineTo(n+c+m,m),y-=n}if(y>0){const n=Math.min(Math.PI/2,y/c);d.arc(h-c+m,c+m,c,-Math.PI/2,n-Math.PI/2,!1),y-=n*c}if(y>0){const n=Math.min(s-2*c,y);d.lineTo(h+m,n+c+m),y-=n}if(y>0){const n=Math.min(Math.PI/2,y/c);d.arc(h-c+m,s-c+m,c,0,n,!1),y-=n*c}if(y>0){const n=Math.min(h-2*c,y);d.lineTo(h-n-c+m,s+m),y-=n}if(y>0){const n=Math.min(Math.PI/2,y/c);d.arc(c+m,s-c+m,c,Math.PI/2,Math.PI/2+n,!1),y-=n*c}if(y>0){const n=Math.min(s-2*c,y);d.lineTo(m,s-n-c+m),y-=n}if(y>0){const n=Math.min(Math.PI/2,y/c);d.arc(c+m,c+m,c,Math.PI,Math.PI+n,!1)}d.stroke()};function w(v,x,p,c,A,_){v.beginPath(),v.moveTo(x+_,p),v.lineTo(x+c-_,p),v.arcTo(x+c,p,x+c,p+_,_),v.lineTo(x+c,p+A-_),v.arcTo(x+c,p+A,x+c-_,p+A,_),v.lineTo(x+_,p+A),v.arcTo(x,p+A,x,p+A-_,_),v.lineTo(x,p+_),v.arcTo(x,p,x+_,p,_),v.closePath()}return ne(()=>{u.value&&(d=u.value.getContext("2d"),C())}),he(()=>k.progress,C),(v,x)=>(D(),F("div",{class:"border-progress-container",ref_key:"container",ref:T},[a("canvas",{ref_key:"canvas",ref:u,class:"border-progress-canvas"},null,512)],512))}}),ke=se(Pe,[["__scopeId","data-v-2fbf5085"]]);var ie={exports:{}};(function(S,k){(function(T){S.exports=T()})(function(T){var u=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];function d(s,n){var t=s[0],e=s[1],o=s[2],r=s[3];t+=(e&o|~e&r)+n[0]-680876936|0,t=(t<<7|t>>>25)+e|0,r+=(t&e|~t&o)+n[1]-389564586|0,r=(r<<12|r>>>20)+t|0,o+=(r&t|~r&e)+n[2]+606105819|0,o=(o<<17|o>>>15)+r|0,e+=(o&r|~o&t)+n[3]-1044525330|0,e=(e<<22|e>>>10)+o|0,t+=(e&o|~e&r)+n[4]-176418897|0,t=(t<<7|t>>>25)+e|0,r+=(t&e|~t&o)+n[5]+1200080426|0,r=(r<<12|r>>>20)+t|0,o+=(r&t|~r&e)+n[6]-1473231341|0,o=(o<<17|o>>>15)+r|0,e+=(o&r|~o&t)+n[7]-45705983|0,e=(e<<22|e>>>10)+o|0,t+=(e&o|~e&r)+n[8]+1770035416|0,t=(t<<7|t>>>25)+e|0,r+=(t&e|~t&o)+n[9]-1958414417|0,r=(r<<12|r>>>20)+t|0,o+=(r&t|~r&e)+n[10]-42063|0,o=(o<<17|o>>>15)+r|0,e+=(o&r|~o&t)+n[11]-1990404162|0,e=(e<<22|e>>>10)+o|0,t+=(e&o|~e&r)+n[12]+1804603682|0,t=(t<<7|t>>>25)+e|0,r+=(t&e|~t&o)+n[13]-40341101|0,r=(r<<12|r>>>20)+t|0,o+=(r&t|~r&e)+n[14]-1502002290|0,o=(o<<17|o>>>15)+r|0,e+=(o&r|~o&t)+n[15]+1236535329|0,e=(e<<22|e>>>10)+o|0,t+=(e&r|o&~r)+n[1]-165796510|0,t=(t<<5|t>>>27)+e|0,r+=(t&o|e&~o)+n[6]-1069501632|0,r=(r<<9|r>>>23)+t|0,o+=(r&e|t&~e)+n[11]+643717713|0,o=(o<<14|o>>>18)+r|0,e+=(o&t|r&~t)+n[0]-373897302|0,e=(e<<20|e>>>12)+o|0,t+=(e&r|o&~r)+n[5]-701558691|0,t=(t<<5|t>>>27)+e|0,r+=(t&o|e&~o)+n[10]+38016083|0,r=(r<<9|r>>>23)+t|0,o+=(r&e|t&~e)+n[15]-660478335|0,o=(o<<14|o>>>18)+r|0,e+=(o&t|r&~t)+n[4]-405537848|0,e=(e<<20|e>>>12)+o|0,t+=(e&r|o&~r)+n[9]+568446438|0,t=(t<<5|t>>>27)+e|0,r+=(t&o|e&~o)+n[14]-1019803690|0,r=(r<<9|r>>>23)+t|0,o+=(r&e|t&~e)+n[3]-187363961|0,o=(o<<14|o>>>18)+r|0,e+=(o&t|r&~t)+n[8]+1163531501|0,e=(e<<20|e>>>12)+o|0,t+=(e&r|o&~r)+n[13]-1444681467|0,t=(t<<5|t>>>27)+e|0,r+=(t&o|e&~o)+n[2]-51403784|0,r=(r<<9|r>>>23)+t|0,o+=(r&e|t&~e)+n[7]+1735328473|0,o=(o<<14|o>>>18)+r|0,e+=(o&t|r&~t)+n[12]-1926607734|0,e=(e<<20|e>>>12)+o|0,t+=(e^o^r)+n[5]-378558|0,t=(t<<4|t>>>28)+e|0,r+=(t^e^o)+n[8]-2022574463|0,r=(r<<11|r>>>21)+t|0,o+=(r^t^e)+n[11]+1839030562|0,o=(o<<16|o>>>16)+r|0,e+=(o^r^t)+n[14]-35309556|0,e=(e<<23|e>>>9)+o|0,t+=(e^o^r)+n[1]-1530992060|0,t=(t<<4|t>>>28)+e|0,r+=(t^e^o)+n[4]+1272893353|0,r=(r<<11|r>>>21)+t|0,o+=(r^t^e)+n[7]-155497632|0,o=(o<<16|o>>>16)+r|0,e+=(o^r^t)+n[10]-1094730640|0,e=(e<<23|e>>>9)+o|0,t+=(e^o^r)+n[13]+681279174|0,t=(t<<4|t>>>28)+e|0,r+=(t^e^o)+n[0]-358537222|0,r=(r<<11|r>>>21)+t|0,o+=(r^t^e)+n[3]-722521979|0,o=(o<<16|o>>>16)+r|0,e+=(o^r^t)+n[6]+76029189|0,e=(e<<23|e>>>9)+o|0,t+=(e^o^r)+n[9]-640364487|0,t=(t<<4|t>>>28)+e|0,r+=(t^e^o)+n[12]-421815835|0,r=(r<<11|r>>>21)+t|0,o+=(r^t^e)+n[15]+530742520|0,o=(o<<16|o>>>16)+r|0,e+=(o^r^t)+n[2]-995338651|0,e=(e<<23|e>>>9)+o|0,t+=(o^(e|~r))+n[0]-198630844|0,t=(t<<6|t>>>26)+e|0,r+=(e^(t|~o))+n[7]+1126891415|0,r=(r<<10|r>>>22)+t|0,o+=(t^(r|~e))+n[14]-1416354905|0,o=(o<<15|o>>>17)+r|0,e+=(r^(o|~t))+n[5]-57434055|0,e=(e<<21|e>>>11)+o|0,t+=(o^(e|~r))+n[12]+1700485571|0,t=(t<<6|t>>>26)+e|0,r+=(e^(t|~o))+n[3]-1894986606|0,r=(r<<10|r>>>22)+t|0,o+=(t^(r|~e))+n[10]-1051523|0,o=(o<<15|o>>>17)+r|0,e+=(r^(o|~t))+n[1]-2054922799|0,e=(e<<21|e>>>11)+o|0,t+=(o^(e|~r))+n[8]+1873313359|0,t=(t<<6|t>>>26)+e|0,r+=(e^(t|~o))+n[15]-30611744|0,r=(r<<10|r>>>22)+t|0,o+=(t^(r|~e))+n[6]-1560198380|0,o=(o<<15|o>>>17)+r|0,e+=(r^(o|~t))+n[13]+1309151649|0,e=(e<<21|e>>>11)+o|0,t+=(o^(e|~r))+n[4]-145523070|0,t=(t<<6|t>>>26)+e|0,r+=(e^(t|~o))+n[11]-1120210379|0,r=(r<<10|r>>>22)+t|0,o+=(t^(r|~e))+n[2]+718787259|0,o=(o<<15|o>>>17)+r|0,e+=(r^(o|~t))+n[9]-343485551|0,e=(e<<21|e>>>11)+o|0,s[0]=t+s[0]|0,s[1]=e+s[1]|0,s[2]=o+s[2]|0,s[3]=r+s[3]|0}function C(s){var n=[],t;for(t=0;t<64;t+=4)n[t>>2]=s.charCodeAt(t)+(s.charCodeAt(t+1)<<8)+(s.charCodeAt(t+2)<<16)+(s.charCodeAt(t+3)<<24);return n}function w(s){var n=[],t;for(t=0;t<64;t+=4)n[t>>2]=s[t]+(s[t+1]<<8)+(s[t+2]<<16)+(s[t+3]<<24);return n}function v(s){var n=s.length,t=[1732584193,-271733879,-1732584194,271733878],e,o,r,B,$,L;for(e=64;e<=n;e+=64)d(t,C(s.substring(e-64,e)));for(s=s.substring(e-64),o=s.length,r=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e=0;e<o;e+=1)r[e>>2]|=s.charCodeAt(e)<<(e%4<<3);if(r[e>>2]|=128<<(e%4<<3),e>55)for(d(t,r),e=0;e<16;e+=1)r[e]=0;return B=n*8,B=B.toString(16).match(/(.*?)(.{0,8})$/),$=parseInt(B[2],16),L=parseInt(B[1],16)||0,r[14]=$,r[15]=L,d(t,r),t}function x(s){var n=s.length,t=[1732584193,-271733879,-1732584194,271733878],e,o,r,B,$,L;for(e=64;e<=n;e+=64)d(t,w(s.subarray(e-64,e)));for(s=e-64<n?s.subarray(e-64):new Uint8Array(0),o=s.length,r=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e=0;e<o;e+=1)r[e>>2]|=s[e]<<(e%4<<3);if(r[e>>2]|=128<<(e%4<<3),e>55)for(d(t,r),e=0;e<16;e+=1)r[e]=0;return B=n*8,B=B.toString(16).match(/(.*?)(.{0,8})$/),$=parseInt(B[2],16),L=parseInt(B[1],16)||0,r[14]=$,r[15]=L,d(t,r),t}function p(s){var n="",t;for(t=0;t<4;t+=1)n+=u[s>>t*8+4&15]+u[s>>t*8&15];return n}function c(s){var n;for(n=0;n<s.length;n+=1)s[n]=p(s[n]);return s.join("")}c(v("hello")),typeof ArrayBuffer<"u"&&!ArrayBuffer.prototype.slice&&function(){function s(n,t){return n=n|0||0,n<0?Math.max(n+t,0):Math.min(n,t)}ArrayBuffer.prototype.slice=function(n,t){var e=this.byteLength,o=s(n,e),r=e,B,$,L,q;return t!==T&&(r=s(t,e)),o>r?new ArrayBuffer(0):(B=r-o,$=new ArrayBuffer(B),L=new Uint8Array($),q=new Uint8Array(this,o,B),L.set(q),$)}}();function A(s){return/[\u0080-\uFFFF]/.test(s)&&(s=unescape(encodeURIComponent(s))),s}function _(s,n){var t=s.length,e=new ArrayBuffer(t),o=new Uint8Array(e),r;for(r=0;r<t;r+=1)o[r]=s.charCodeAt(r);return n?o:e}function I(s){return String.fromCharCode.apply(null,new Uint8Array(s))}function y(s,n,t){var e=new Uint8Array(s.byteLength+n.byteLength);return e.set(new Uint8Array(s)),e.set(new Uint8Array(n),s.byteLength),e}function m(s){var n=[],t=s.length,e;for(e=0;e<t-1;e+=2)n.push(parseInt(s.substr(e,2),16));return String.fromCharCode.apply(String,n)}function h(){this.reset()}return h.prototype.append=function(s){return this.appendBinary(A(s)),this},h.prototype.appendBinary=function(s){this._buff+=s,this._length+=s.length;var n=this._buff.length,t;for(t=64;t<=n;t+=64)d(this._hash,C(this._buff.substring(t-64,t)));return this._buff=this._buff.substring(t-64),this},h.prototype.end=function(s){var n=this._buff,t=n.length,e,o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],r;for(e=0;e<t;e+=1)o[e>>2]|=n.charCodeAt(e)<<(e%4<<3);return this._finish(o,t),r=c(this._hash),s&&(r=m(r)),this.reset(),r},h.prototype.reset=function(){return this._buff="",this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},h.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash.slice()}},h.prototype.setState=function(s){return this._buff=s.buff,this._length=s.length,this._hash=s.hash,this},h.prototype.destroy=function(){delete this._hash,delete this._buff,delete this._length},h.prototype._finish=function(s,n){var t=n,e,o,r;if(s[t>>2]|=128<<(t%4<<3),t>55)for(d(this._hash,s),t=0;t<16;t+=1)s[t]=0;e=this._length*8,e=e.toString(16).match(/(.*?)(.{0,8})$/),o=parseInt(e[2],16),r=parseInt(e[1],16)||0,s[14]=o,s[15]=r,d(this._hash,s)},h.hash=function(s,n){return h.hashBinary(A(s),n)},h.hashBinary=function(s,n){var t=v(s),e=c(t);return n?m(e):e},h.ArrayBuffer=function(){this.reset()},h.ArrayBuffer.prototype.append=function(s){var n=y(this._buff.buffer,s),t=n.length,e;for(this._length+=s.byteLength,e=64;e<=t;e+=64)d(this._hash,w(n.subarray(e-64,e)));return this._buff=e-64<t?new Uint8Array(n.buffer.slice(e-64)):new Uint8Array(0),this},h.ArrayBuffer.prototype.end=function(s){var n=this._buff,t=n.length,e=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],o,r;for(o=0;o<t;o+=1)e[o>>2]|=n[o]<<(o%4<<3);return this._finish(e,t),r=c(this._hash),s&&(r=m(r)),this.reset(),r},h.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},h.ArrayBuffer.prototype.getState=function(){var s=h.prototype.getState.call(this);return s.buff=I(s.buff),s},h.ArrayBuffer.prototype.setState=function(s){return s.buff=_(s.buff,!0),h.prototype.setState.call(this,s)},h.ArrayBuffer.prototype.destroy=h.prototype.destroy,h.ArrayBuffer.prototype._finish=h.prototype._finish,h.ArrayBuffer.hash=function(s,n){var t=x(new Uint8Array(s)),e=c(t);return n?m(e):e},h})})(ie);var $e=ie.exports;const Le=we($e),le=async(S,k={})=>{const{successMsg:T="复制成功",errorMsg:u="复制失败，请手动复制",showMsg:d=!0}=k,C=ae();try{if(navigator.clipboard&&navigator.clipboard.writeText)return await navigator.clipboard.writeText(S),d&&C.showAlert(T,"success"),!0;const w=document.createElement("textarea");w.value=S,w.style.position="fixed",w.style.opacity="0",document.body.appendChild(w),w.select();const v=document.execCommand("copy");if(document.body.removeChild(w),v)return d&&C.showAlert(T,"success"),!0;throw new Error("execCommand copy failed")}catch(w){return console.error("复制失败:",w),d&&C.showAlert(u,"error"),!1}},re=async S=>{const k=`${window.location.origin}/#/?code=${S}`;return le(k,{successMsg:"取件链接已复制到剪贴板",errorMsg:"复制失败，请手动复制取件链接"})},je=async S=>le(S,{successMsg:"取件码已复制到剪贴板",errorMsg:"复制失败，请手动复制取件码"}),Re=S=>S>=1024*1024*1024?Math.round(S/(1024*1024*1024))+"GB":S>=1024*1024?Math.round(S/(1024*1024))+"MB":Math.round(S/1024)+"KB",Ve={class:"min-h-screen flex items-center justify-center p-4 overflow-hidden transition-colors duration-300"},He={class:"p-8"},Ee={class:"flex justify-center space-x-4 mb-6"},Ne={key:"file",class:"grid grid-cols-1 gap-8"},qe={key:0,class:"absolute inset-0 w-full h-full"},We={class:"block truncate"},Ge={key:"text",class:"grid grid-cols-1 gap-8"},Qe={key:0,class:"flex flex-col"},Je={class:"flex flex-col space-y-4"},Ke=["value"],Oe={key:0,class:"flex items-center space-x-2"},Xe={class:"relative flex-grow"},Ye=["placeholder"],Ze={type:"submit",class:"w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-4 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden group"},et={class:"relative z-10 flex items-center justify-center text-lg"},tt={class:"mt-6 text-center"},rt={class:"flex-grow overflow-y-auto p-6"},ot={class:"flex-shrink-0 mr-4"},nt={class:"flex-grow min-w-0 mr-4"},st={class:"flex-shrink-0 flex space-x-2"},at=["onClick"],it=["onClick"],lt=["onClick"],ut={key:0,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"},ct={class:"space-y-4"},dt={class:"flex items-center"},ft={class:"flex items-center"},ht={class:"flex items-center"},gt={class:"flex items-center"},pt={class:"mt-6 flex justify-between items-center"},yt={class:"flex flex-col items-center w-1/2 pr-2"},vt={class:"text-2xl font-bold text-indigo-600"},bt={class:"flex flex-col items-center w-1/2 pl-2"},xt={class:"bg-white p-2 rounded-lg shadow-md"},mt=oe({__name:"SendFileView",setup(S){const k=JSON.parse(localStorage.getItem("config")||"{}"),T=ge(),u=pe("isDarkMode"),d=_e(),C=z("file"),w=z(null),v=z(""),x=z(null),p=z("day"),c=z("1"),A=z(0),_=z(!1),I=z(null),y=ae(),m=ye(()=>d.shareData),h=z("");z(new Set);const s=()=>{var g;(g=x.value)==null||g.click()},n=async g=>{const l=g.target;l.files&&l.files.length>0&&(w.value=l.files[0],h.value=await e(w.value))},t=async g=>{var l;(l=g.dataTransfer)!=null&&l.files&&g.dataTransfer.files.length>0&&(w.value=g.dataTransfer.files[0],h.value=await e(w.value))},e=async g=>new Promise(l=>{const b=new Le.ArrayBuffer,P=new FileReader;let R=0;const G=Math.ceil(g.size/2097152);P.onload=H=>{b.append(H.target.result),R++,R<G?O():l(b.end())};const O=()=>{const H=R*2097152,fe=H+2097152>=g.size?g.size:H+2097152;P.readAsArrayBuffer(g.slice(H,fe))};O()}),o=(g=p.value)=>{switch(g){case"day":return"输入天数";case"hour":return"输入小时数";case"minute":return"输入分钟数";case"count":return"输入查看次数";case"forever":return"永久";default:return"输入值"}},r=(g=p.value)=>{switch(g){case"day":return"天";case"hour":return"小时";case"minute":return"分钟";case"count":return"次";case"forever":return"永久";default:return""}},B=async()=>{if(C.value==="file"&&!w.value){y.showAlert("请选择要上传的文件","error");return}if(C.value==="text"&&!v.value.trim()){y.showAlert("请输入要发送的文本","error");return}if(p.value!=="forever"&&!c.value){y.showAlert("请输入过期值","error");return}try{let g;const l=new FormData,j=C.value==="file";j?l.append("file",w.value):l.append("text",v.value),p.value!=="forever"&&l.append("expire_value",c.value),l.append("expire_style",p.value);const b={headers:{"Content-Type":"multipart/form-data"},onUploadProgress:P=>{const R=Math.round(P.loaded*100/P.total);A.value=R}};if(j?g=await ee.post("/share/file/",l,b):g=await ee.post("/share/text/",l,b),g&&g.code===200){const P=g.detail.code,R=g.detail.name,G={id:Date.now(),filename:R,date:new Date().toISOString().split("T")[0],size:C.value==="text"?`${(v.value.length/1024).toFixed(2)} KB`:`${(w.value.size/(1024*1024)).toFixed(1)} MB`,expiration:p.value==="forever"?"永久":`${c.value}${r()}后过期`,retrieveCode:P};d.addShareData(G),y.showAlert(`文件发送成功！取件码：${P}`,"success"),w.value=null,v.value="",c.value="",A.value=0,_.value=!0,await re(P)}else throw new Error("服务器响应异常")}catch(g){console.error("发送失败:",g),g.response.data.detail?y.showAlert(g.response.data.detail,"error"):y.showAlert("发送失败,请稍后重试","error")}finally{A.value=0}},$=()=>{T.push("/")},L=()=>{_.value=!_.value},q=g=>{I.value=g},ue=g=>{const l=d.shareData.findIndex(j=>j.id===g);l!==-1&&d.deleteShareData(l)},ce=window.location.origin+"/#/",de=g=>`${ce}?code=${g.retrieveCode}`;return ne(()=>{console.log("SendFileView mounted")}),(g,l)=>{const j=ve("router-link");return D(),F("div",Ve,[a("div",{class:f(["rounded-3xl shadow-2xl overflow-hidden border w-full max-w-md transition-colors duration-300",[i(u)?"bg-white bg-opacity-10 backdrop-filter backdrop-blur-xl border-gray-700":"bg-white border-gray-200"]])},[a("div",He,[a("h2",{class:f(["text-3xl font-extrabold text-center mb-8 cursor-pointer transition-colors duration-300",[i(u)?"text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300":"text-indigo-600"]]),onClick:$},U(i(k).name),3),a("form",{onSubmit:Q(B,["prevent"]),class:"space-y-8"},[a("div",Ee,[a("button",{type:"button",onClick:l[0]||(l[0]=b=>C.value="file"),class:f(["px-4 py-2 rounded-lg",C.value==="file"?"bg-indigo-600 text-white":"bg-gray-700 text-gray-300"])}," 发送文件 ",2),a("button",{type:"button",onClick:l[1]||(l[1]=b=>C.value="text"),class:f(["px-4 py-2 rounded-lg",C.value==="text"?"bg-indigo-600 text-white":"bg-gray-700 text-gray-300"])}," 发送文本 ",2)]),M(K,{name:"fade",mode:"out-in"},{default:E(()=>[C.value==="file"?(D(),F("div",Ne,[a("div",{class:f(["rounded-xl p-8 flex flex-col items-center justify-center border-2 border-dashed transition-all duration-300 group cursor-pointer relative",[i(u)?"bg-gray-800 bg-opacity-50 border-gray-600 hover:border-indigo-500":"bg-gray-100 border-gray-300 hover:border-indigo-500"]]),onClick:s,onDragover:l[2]||(l[2]=Q(()=>{},["prevent"])),onDrop:Q(t,["prevent"])},[a("input",{id:"file-upload",type:"file",class:"hidden",onChange:n,ref_key:"fileInput",ref:x},null,544),A.value>0?(D(),F("div",qe,[M(ke,{progress:A.value},null,8,["progress"])])):N("",!0),M(i(De),{class:f(["w-16 h-16 transition-colors duration-300",i(u)?"text-gray-400 group-hover:text-indigo-400":"text-gray-600 group-hover:text-indigo-600"])},null,8,["class"]),a("p",{class:f(["mt-4 text-sm transition-colors duration-300 w-full text-center",i(u)?"text-gray-400 group-hover:text-indigo-400":"text-gray-600 group-hover:text-indigo-600"])},[a("span",We,U(w.value?w.value.name:"点击或拖放文件到此处上传"),1)],2),a("p",{class:f(["mt-2 text-xs",i(u)?"text-gray-500":"text-gray-400"])}," 支持各种常见格式，最大"+U(i(Re)(i(k).uploadSize)),3)],34)])):(D(),F("div",Ge,[C.value==="text"?(D(),F("div",Qe,[J(a("textarea",{id:"text-content","onUpdate:modelValue":l[3]||(l[3]=b=>v.value=b),rows:"7",class:f(["flex-grow px-4 py-3 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 resize-none",i(u)?"bg-gray-800 bg-opacity-50 text-white":"bg-white text-gray-900 border border-gray-300"]),placeholder:"在此输入要发送的文本..."},null,2),[[X,v.value]])])):N("",!0)]))]),_:1}),a("div",Je,[a("label",{class:f(["text-sm font-medium",i(u)?"text-gray-300":"text-gray-700"])}," 过期方式 ",2),J(a("select",{"onUpdate:modelValue":l[4]||(l[4]=b=>p.value=b),class:f(["px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500",i(u)?"bg-gray-800 bg-opacity-50 text-white":"bg-white text-gray-900 border border-gray-300"])},[(D(!0),F(Y,null,Z(i(k).expireStyle,b=>(D(),F("option",{value:b,key:b},U(r(b)),9,Ke))),128))],2),[[be,p.value]]),p.value!=="forever"?(D(),F("div",Oe,[a("div",Xe,[J(a("input",{"onUpdate:modelValue":l[5]||(l[5]=b=>c.value=b),type:"number",placeholder:o(),class:f(["w-full px-4 py-2 pr-16 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500",i(u)?"bg-gray-800 bg-opacity-50 text-white":"bg-white text-gray-900 border border-gray-300"])},null,10,Ye),[[X,c.value]]),a("span",{class:f(["absolute right-3 top-1/2 transform -translate-y-1/2",i(u)?"text-gray-300":"text-gray-700"])},U(r()),3)])])):N("",!0)]),a("button",Ze,[l[9]||(l[9]=a("span",{class:"absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"},null,-1)),a("span",et,[M(i(ze),{class:"w-6 h-6 mr-2"}),l[8]||(l[8]=a("span",null,"安全寄送",-1))])])],32),a("div",tt,[M(j,{to:"/",class:"text-indigo-400 hover:text-indigo-300 transition duration-300"},{default:E(()=>l[10]||(l[10]=[V(" 需要取件？点击这里 ")])),_:1})])]),a("div",{class:f(["px-8 py-4 bg-opacity-50 flex justify-between items-center",[i(u)?"bg-gray-800":"bg-gray-100"]])},[a("span",{class:f(["text-sm flex items-center",[i(u)?"text-gray-300":"text-gray-800"]])},[M(i(Ce),{class:"w-4 h-4 mr-1 text-green-400"}),l[11]||(l[11]=V(" 安全加密 "))],2),a("button",{onClick:L,class:f(["text-sm hover:text-indigo-300 transition duration-300 flex items-center",[i(u)?"text-indigo-400":"text-indigo-600"]])},[l[12]||(l[12]=V(" 发件记录 ")),M(i(Ae),{class:"w-4 h-4 ml-1"})],2)],2)],2),M(K,{name:"drawer"},{default:E(()=>[_.value?(D(),F("div",{key:0,class:f(["fixed inset-y-0 right-0 w-full sm:w-120 bg-opacity-70 backdrop-filter backdrop-blur-xl shadow-2xl z-50 overflow-hidden flex flex-col",[i(u)?"bg-gray-900":"bg-white"]])},[a("div",{class:f(["flex justify-between items-center p-6 border-b",[i(u)?"border-gray-700":"border-gray-200"]])},[a("h3",{class:f(["text-2xl font-bold",[i(u)?"text-white":"text-gray-800"]])}," 发件记录 ",2),a("button",{onClick:L,class:f(["hover:text-white transition duration-300",[i(u)?"text-gray-400":"text-gray-800"]])},[M(i(xe),{class:"w-6 h-6"})],2)],2),a("div",rt,[M(me,{name:"list",tag:"div",class:"space-y-4"},{default:E(()=>[(D(!0),F(Y,null,Z(m.value,b=>(D(),F("div",{key:b.id,class:f(["bg-opacity-50 rounded-lg p-4 flex items-center shadow-md hover:shadow-lg transition duration-300 transform hover:scale-102",[i(u)?"bg-gray-800 hover:bg-gray-700":"bg-gray-100 hover:bg-white"]])},[a("div",ot,[M(i(te),{class:f(["w-10 h-10",[i(u)?"text-indigo-400":"text-indigo-600"]])},null,8,["class"])]),a("div",nt,[a("p",{class:f(["font-medium text-lg truncate",[i(u)?"text-white":"text-gray-800"]])},U(b.filename?b.filename:"Text"),3),a("p",{class:f(["text-sm truncate",[i(u)?"text-gray-400":"text-gray-600"]])},U(b.date)+" · "+U(b.size),3)]),a("div",st,[a("button",{onClick:P=>i(re)(b.retrieveCode),class:f(["p-2 rounded-full hover:bg-opacity-20 transition duration-300",[i(u)?"hover:bg-blue-400 text-blue-400":"hover:bg-blue-100 text-blue-600"]])},[M(i(Ue),{class:"w-5 h-5"})],10,at),a("button",{onClick:P=>q(b),class:f(["p-2 rounded-full hover:bg-opacity-20 transition duration-300",[i(u)?"hover:bg-green-400 text-green-400":"hover:bg-green-100 text-green-600"]])},[M(i(Me),{class:"w-5 h-5"})],10,it),a("button",{onClick:P=>ue(b.id),class:f(["p-2 rounded-full hover:bg-opacity-20 transition duration-300",[i(u)?"hover:bg-red-400 text-red-400":"hover:bg-red-100 text-red-600"]])},[M(i(Ie),{class:"w-5 h-5"})],10,lt)])],2))),128))]),_:1})])],2)):N("",!0)]),_:1}),M(K,{name:"fade"},{default:E(()=>[I.value?(D(),F("div",ut,[a("div",{class:f(["p-8 rounded-2xl max-w-md w-full mx-4 shadow-2xl transform transition-all duration-300 ease-out backdrop-filter backdrop-blur-lg bg-opacity-70",[i(u)?"bg-gray-800":"bg-white"]])},[a("h3",{class:f(["text-2xl font-bold mb-6",[i(u)?"text-white":"text-gray-800"]])}," 文件详情 ",2),a("div",ct,[a("div",dt,[M(i(te),{class:f(["w-6 h-6 mr-3",[i(u)?"text-indigo-400":"text-indigo-600"]])},null,8,["class"]),a("p",{class:f([i(u)?"text-gray-300":"text-gray-800"])},[l[13]||(l[13]=a("span",{class:"font-medium"},"文件名：",-1)),V(U(I.value.filename),1)],2)]),a("div",ft,[M(i(Se),{class:f(["w-6 h-6 mr-3",[i(u)?"text-indigo-400":"text-indigo-600"]])},null,8,["class"]),a("p",{class:f([i(u)?"text-gray-300":"text-gray-800"])},[l[14]||(l[14]=a("span",{class:"font-medium"},"发送日期：",-1)),V(U(I.value.date),1)],2)]),a("div",ht,[M(i(Te),{class:f(["w-6 h-6 mr-3",[i(u)?"text-indigo-400":"text-indigo-600"]])},null,8,["class"]),a("p",{class:f([i(u)?"text-gray-300":"text-gray-800"])},[l[15]||(l[15]=a("span",{class:"font-medium"},"文件大小：",-1)),V(U(I.value.size),1)],2)]),a("div",gt,[M(i(Fe),{class:f(["w-6 h-6 mr-3",[i(u)?"text-indigo-400":"text-indigo-600"]])},null,8,["class"]),a("p",{class:f([i(u)?"text-gray-300":"text-gray-800"])},[l[16]||(l[16]=a("span",{class:"font-medium"},"过期时间：",-1)),V(U(I.value.expiration),1)],2)])]),a("div",pt,[a("div",yt,[a("h4",{class:f(["text-lg font-semibold mb-3",[i(u)?"text-white":"text-gray-800"]])}," 取件码 ",2),a("div",{class:"bg-gray-100 p-3 rounded-lg shadow-md cursor-pointer hover:bg-gray-200 transition-colors duration-300 w-full text-center",onClick:l[6]||(l[6]=b=>i(je)(I.value.retrieveCode))},[a("p",vt,U(I.value.retrieveCode),1)]),a("p",{class:f(["mt-2 text-sm",[i(u)?"text-gray-400":"text-gray-600"]])}," 点击复制取件码 ",2)]),a("div",bt,[a("h4",{class:f(["text-lg font-semibold mb-3",[i(u)?"text-white":"text-gray-800"]])}," 二维码 ",2),a("div",xt,[M(Be,{value:de(I.value),size:128,level:"M"},null,8,["value"])]),a("p",{class:f(["mt-2 text-sm",[i(u)?"text-gray-400":"text-gray-600"]])}," 扫描二维码快速取件 ",2)])]),a("button",{onClick:l[7]||(l[7]=b=>I.value=null),class:"mt-8 w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-300 transform hover:scale-105"}," 关闭 ")],2)])):N("",!0)]),_:1})])}}}),Mt=se(mt,[["__scopeId","data-v-a1508baa"]]);export{Mt as default};
