(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ma="155",jn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Zn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$l=0,ka=1,eu=2,sl=1,tu=2,ln=3,mn=0,St=1,Ot=2,bn=0,vi=1,Va=2,Wa=3,Xa=4,nu=5,di=100,iu=101,ru=102,qa=103,Ya=104,su=200,au=201,ou=202,cu=203,al=204,ol=205,lu=206,uu=207,hu=208,fu=209,du=210,pu=0,mu=1,xu=2,ca=3,gu=4,vu=5,_u=6,Su=7,cl=0,Mu=1,yu=2,Tn=0,Eu=1,bu=2,Tu=3,Au=4,wu=5,ll=300,Mi=301,yi=302,la=303,ua=304,Fr=306,qi=1e3,Tt=1001,ha=1002,_t=1003,ja=1004,Xr=1005,ht=1006,Ru=1007,Yi=1008,An=1009,Cu=1010,Pu=1011,ya=1012,ul=1013,yn=1014,En=1015,ji=1016,hl=1017,fl=1018,zn=1020,Lu=1021,Wt=1023,Du=1024,Uu=1025,Hn=1026,Ei=1027,Iu=1028,dl=1029,Nu=1030,pl=1031,ml=1033,qr=33776,Yr=33777,jr=33778,Zr=33779,Za=35840,Ka=35841,Ja=35842,Qa=35843,Fu=36196,$a=37492,eo=37496,to=37808,no=37809,io=37810,ro=37811,so=37812,ao=37813,oo=37814,co=37815,lo=37816,uo=37817,ho=37818,fo=37819,po=37820,mo=37821,Kr=36492,Ou=36283,xo=36284,go=36285,vo=36286,xl=3e3,Gn=3001,Bu=3200,zu=3201,gl=0,Hu=1,kn="",Ne="srgb",Qt="srgb-linear",vl="display-p3",Jr=7680,Gu=519,ku=512,Vu=513,Wu=514,Xu=515,qu=516,Yu=517,ju=518,Zu=519,_o=35044,So="300 es",fa=1035,fn=2e3,Dr=2001;class Xn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Mo=1234567;const Hi=Math.PI/180,Zi=180/Math.PI;function qn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gt[i&255]+gt[i>>8&255]+gt[i>>16&255]+gt[i>>24&255]+"-"+gt[e&255]+gt[e>>8&255]+"-"+gt[e>>16&15|64]+gt[e>>24&255]+"-"+gt[t&63|128]+gt[t>>8&255]+"-"+gt[t>>16&255]+gt[t>>24&255]+gt[n&255]+gt[n>>8&255]+gt[n>>16&255]+gt[n>>24&255]).toLowerCase()}function ft(i,e,t){return Math.max(e,Math.min(t,i))}function Ea(i,e){return(i%e+e)%e}function Ku(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Ju(i,e,t){return i!==e?(t-i)/(e-i):0}function Gi(i,e,t){return(1-t)*i+t*e}function Qu(i,e,t,n){return Gi(i,e,1-Math.exp(-t*n))}function $u(i,e=1){return e-Math.abs(Ea(i,e*2)-e)}function eh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function th(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function nh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ih(i,e){return i+Math.random()*(e-i)}function rh(i){return i*(.5-Math.random())}function sh(i){i!==void 0&&(Mo=i);let e=Mo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ah(i){return i*Hi}function oh(i){return i*Zi}function da(i){return(i&i-1)===0&&i!==0}function ch(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ur(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function lh(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),f=s((e-n)/2),h=o((e-n)/2),p=s((n-e)/2),x=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*f,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*x,l*p,a*c);break;case"YXY":i.set(l*p,a*u,l*x,a*c);break;case"ZYZ":i.set(l*x,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function pi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Et(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const uh={DEG2RAD:Hi,RAD2DEG:Zi,generateUUID:qn,clamp:ft,euclideanModulo:Ea,mapLinear:Ku,inverseLerp:Ju,lerp:Gi,damp:Qu,pingpong:$u,smoothstep:eh,smootherstep:th,randInt:nh,randFloat:ih,randFloatSpread:rh,seededRandom:sh,degToRad:ah,radToDeg:oh,isPowerOfTwo:da,ceilPowerOfTwo:ch,floorPowerOfTwo:Ur,setQuaternionFromProperEuler:lh,normalize:Et,denormalize:pi};class de{constructor(e=0,t=0){de.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,n,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],p=n[5],x=n[8],v=r[0],m=r[3],d=r[6],_=r[1],g=r[4],S=r[7],b=r[2],T=r[5],E=r[8];return s[0]=o*v+a*_+l*b,s[3]=o*m+a*g+l*T,s[6]=o*d+a*S+l*E,s[1]=c*v+u*_+f*b,s[4]=c*m+u*g+f*T,s[7]=c*d+u*S+f*E,s[2]=h*v+p*_+x*b,s[5]=h*m+p*g+x*T,s[8]=h*d+p*S+x*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,x=t*f+n*h+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=f*v,e[1]=(r*c-u*n)*v,e[2]=(a*n-r*o)*v,e[3]=h*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Qr.makeScale(e,t)),this}rotate(e){return this.premultiply(Qr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qr=new Ge;function _l(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ki(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const yo={};function ki(i){i in yo||(yo[i]=!0,console.warn(i))}function _i(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $r(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const hh=new Ge().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),fh=new Ge().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function dh(i){return i.convertSRGBToLinear().applyMatrix3(fh)}function ph(i){return i.applyMatrix3(hh).convertLinearToSRGB()}const mh={[Qt]:i=>i,[Ne]:i=>i.convertSRGBToLinear(),[vl]:dh},xh={[Qt]:i=>i,[Ne]:i=>i.convertLinearToSRGB(),[vl]:ph},zt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return Qt},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=mh[e],r=xh[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let Kn;class Sl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Kn===void 0&&(Kn=Ki("canvas")),Kn.width=e.width,Kn.height=e.height;const n=Kn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Kn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ki("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=_i(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_i(t[n]/255)*255):t[n]=_i(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gh=0;class Ml{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=qn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(es(r[o].image)):s.push(es(r[o]))}else s=es(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function es(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Sl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vh=0;class Ct extends Xn{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,n=Tt,r=Tt,s=ht,o=Yi,a=Wt,l=An,c=Ct.DEFAULT_ANISOTROPY,u=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=qn(),this.name="",this.source=new Ml(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Gn?Ne:kn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ll)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qi:e.x=e.x-Math.floor(e.x);break;case Tt:e.x=e.x<0?0:1;break;case ha:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qi:e.y=e.y-Math.floor(e.y);break;case Tt:e.y=e.y<0?0:1;break;case ha:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ne?Gn:xl}set encoding(e){ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Gn?Ne:kn}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=ll;Ct.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,t=0,n=0,r=1){$e.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],x=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(c+1)/2,S=(p+1)/2,b=(d+1)/2,T=(u+h)/4,E=(f+v)/4,P=(x+m)/4;return g>S&&g>b?g<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(g),r=T/n,s=E/n):S>b?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=T/r,s=P/r):b<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),n=E/s,r=P/s),this.set(n,r,s,t),this}let _=Math.sqrt((m-x)*(m-x)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(m-x)/_,this.y=(f-v)/_,this.z=(h-u)/_,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _h extends Xn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(ki("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Gn?Ne:kn),this.texture=new Ct(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ht,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ml(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xn extends _h{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class yl extends Ct{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_t,this.minFilter=_t,this.wrapR=Tt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sh extends Ct{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_t,this.minFilter=_t,this.wrapR=Tt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const h=s[o+0],p=s[o+1],x=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=x,e[t+3]=v;return}if(f!==v||l!==h||c!==p||u!==x){let m=1-a;const d=l*h+c*p+u*x+f*v,_=d>=0?1:-1,g=1-d*d;if(g>Number.EPSILON){const b=Math.sqrt(g),T=Math.atan2(b,d*_);m=Math.sin(m*T)/b,a=Math.sin(a*T)/b}const S=a*_;if(l=l*m+h*S,c=c*m+p*S,u=u*m+x*S,f=f*m+v*S,m===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[o],h=s[o+1],p=s[o+2],x=s[o+3];return e[t]=a*x+u*f+l*p-c*h,e[t+1]=l*x+u*h+c*f-a*p,e[t+2]=c*x+u*p+a*h-l*f,e[t+3]=u*x-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),f=a(s/2),h=l(n/2),p=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*x,this._y=c*p*f-h*u*x,this._z=c*u*x+h*p*f,this._w=c*u*f-h*p*x;break;case"YXZ":this._x=h*u*f+c*p*x,this._y=c*p*f-h*u*x,this._z=c*u*x-h*p*f,this._w=c*u*f+h*p*x;break;case"ZXY":this._x=h*u*f-c*p*x,this._y=c*p*f+h*u*x,this._z=c*u*x+h*p*f,this._w=c*u*f-h*p*x;break;case"ZYX":this._x=h*u*f-c*p*x,this._y=c*p*f+h*u*x,this._z=c*u*x-h*p*f,this._w=c*u*f+h*p*x;break;case"YZX":this._x=h*u*f+c*p*x,this._y=c*p*f+h*u*x,this._z=c*u*x-h*p*f,this._w=c*u*f-h*p*x;break;case"XZY":this._x=h*u*f-c*p*x,this._y=c*p*f-h*u*x,this._z=c*u*x+h*p*f,this._w=c*u*f+h*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>f){const p=2*Math.sqrt(1+n-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-n-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Eo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Eo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*n,u=l*n+a*t-s*r,f=l*r+s*n-o*t,h=-s*t-o*n-a*r;return this.x=c*l+h*-s+u*-a-f*-o,this.y=u*l+h*-o+f*-s-c*-a,this.z=f*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ts.copy(this).projectOnVector(e),this.sub(ts)}reflect(e){return this.sub(ts.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ts=new z,Eo=new Vn;class tr{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Jn.copy(e.boundingBox),Jn.applyMatrix4(e.matrixWorld),this.union(Jn);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)nn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(nn)}else r.boundingBox===null&&r.computeBoundingBox(),Jn.copy(r.boundingBox),Jn.applyMatrix4(e.matrixWorld),this.union(Jn)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ui),sr.subVectors(this.max,Ui),Qn.subVectors(e.a,Ui),$n.subVectors(e.b,Ui),ei.subVectors(e.c,Ui),gn.subVectors($n,Qn),vn.subVectors(ei,$n),Ln.subVectors(Qn,ei);let t=[0,-gn.z,gn.y,0,-vn.z,vn.y,0,-Ln.z,Ln.y,gn.z,0,-gn.x,vn.z,0,-vn.x,Ln.z,0,-Ln.x,-gn.y,gn.x,0,-vn.y,vn.x,0,-Ln.y,Ln.x,0];return!ns(t,Qn,$n,ei,sr)||(t=[1,0,0,0,1,0,0,0,1],!ns(t,Qn,$n,ei,sr))?!1:(ar.crossVectors(gn,vn),t=[ar.x,ar.y,ar.z],ns(t,Qn,$n,ei,sr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const tn=[new z,new z,new z,new z,new z,new z,new z,new z],nn=new z,Jn=new tr,Qn=new z,$n=new z,ei=new z,gn=new z,vn=new z,Ln=new z,Ui=new z,sr=new z,ar=new z,Dn=new z;function ns(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Dn.fromArray(i,s);const a=r.x*Math.abs(Dn.x)+r.y*Math.abs(Dn.y)+r.z*Math.abs(Dn.z),l=e.dot(Dn),c=t.dot(Dn),u=n.dot(Dn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Mh=new tr,Ii=new z,is=new z;class ba{constructor(e=new z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Mh.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ii.subVectors(e,this.center);const t=Ii.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ii,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(is.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ii.copy(e.center).add(is)),this.expandByPoint(Ii.copy(e.center).sub(is))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const rn=new z,rs=new z,or=new z,_n=new z,ss=new z,cr=new z,as=new z;class Ta{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rn.copy(this.origin).addScaledVector(this.direction,t),rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){rs.copy(e).add(t).multiplyScalar(.5),or.copy(t).sub(e).normalize(),_n.copy(this.origin).sub(rs);const s=e.distanceTo(t)*.5,o=-this.direction.dot(or),a=_n.dot(this.direction),l=-_n.dot(or),c=_n.lengthSq(),u=Math.abs(1-o*o);let f,h,p,x;if(u>0)if(f=o*l-a,h=o*a-l,x=s*u,f>=0)if(h>=-x)if(h<=x){const v=1/u;f*=v,h*=v,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-x?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=x?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(rs).addScaledVector(or,h),p}intersectSphere(e,t){rn.subVectors(e.center,this.origin);const n=rn.dot(this.direction),r=rn.dot(rn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,rn)!==null}intersectTriangle(e,t,n,r,s){ss.subVectors(t,e),cr.subVectors(n,e),as.crossVectors(ss,cr);let o=this.direction.dot(as),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_n.subVectors(this.origin,e);const l=a*this.direction.dot(cr.crossVectors(_n,cr));if(l<0)return null;const c=a*this.direction.dot(ss.cross(_n));if(c<0||l+c>o)return null;const u=-a*_n.dot(as);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,n,r,s,o,a,l,c,u,f,h,p,x,v,m){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,f,h,p,x,v,m)}set(e,t,n,r,s,o,a,l,c,u,f,h,p,x,v,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=x,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ti.setFromMatrixColumn(e,0).length(),s=1/ti.setFromMatrixColumn(e,1).length(),o=1/ti.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,x=a*u,v=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+x*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=x+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,x=c*u,v=c*f;t[0]=h+v*a,t[4]=x*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-x,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,x=c*u,v=c*f;t[0]=h-v*a,t[4]=-o*f,t[8]=x+p*a,t[1]=p+x*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,x=a*u,v=a*f;t[0]=l*u,t[4]=x*c-p,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=p*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,x=a*l,v=a*c;t[0]=l*u,t[4]=v-h*f,t[8]=x*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+x,t[10]=h-v*f}else if(e.order==="XZY"){const h=o*l,p=o*c,x=a*l,v=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=o*u,t[9]=p*f-x,t[2]=x*f-p,t[6]=a*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yh,e,Eh)}lookAt(e,t,n){const r=this.elements;return Dt.subVectors(e,t),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),Sn.crossVectors(n,Dt),Sn.lengthSq()===0&&(Math.abs(n.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),Sn.crossVectors(n,Dt)),Sn.normalize(),lr.crossVectors(Dt,Sn),r[0]=Sn.x,r[4]=lr.x,r[8]=Dt.x,r[1]=Sn.y,r[5]=lr.y,r[9]=Dt.y,r[2]=Sn.z,r[6]=lr.z,r[10]=Dt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],p=n[13],x=n[2],v=n[6],m=n[10],d=n[14],_=n[3],g=n[7],S=n[11],b=n[15],T=r[0],E=r[4],P=r[8],y=r[12],M=r[1],L=r[5],O=r[9],D=r[13],B=r[2],H=r[6],Z=r[10],X=r[14],K=r[3],te=r[7],J=r[11],C=r[15];return s[0]=o*T+a*M+l*B+c*K,s[4]=o*E+a*L+l*H+c*te,s[8]=o*P+a*O+l*Z+c*J,s[12]=o*y+a*D+l*X+c*C,s[1]=u*T+f*M+h*B+p*K,s[5]=u*E+f*L+h*H+p*te,s[9]=u*P+f*O+h*Z+p*J,s[13]=u*y+f*D+h*X+p*C,s[2]=x*T+v*M+m*B+d*K,s[6]=x*E+v*L+m*H+d*te,s[10]=x*P+v*O+m*Z+d*J,s[14]=x*y+v*D+m*X+d*C,s[3]=_*T+g*M+S*B+b*K,s[7]=_*E+g*L+S*H+b*te,s[11]=_*P+g*O+S*Z+b*J,s[15]=_*y+g*D+S*X+b*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],x=e[3],v=e[7],m=e[11],d=e[15];return x*(+s*l*f-r*c*f-s*a*h+n*c*h+r*a*p-n*l*p)+v*(+t*l*p-t*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+t*c*f-t*a*p-s*o*f+n*o*p+s*a*u-n*c*u)+d*(-r*a*u-t*l*f+t*a*h+r*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],x=e[12],v=e[13],m=e[14],d=e[15],_=f*m*c-v*h*c+v*l*p-a*m*p-f*l*d+a*h*d,g=x*h*c-u*m*c-x*l*p+o*m*p+u*l*d-o*h*d,S=u*v*c-x*f*c+x*a*p-o*v*p-u*a*d+o*f*d,b=x*f*l-u*v*l-x*a*h+o*v*h+u*a*m-o*f*m,T=t*_+n*g+r*S+s*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=_*E,e[1]=(v*h*s-f*m*s-v*r*p+n*m*p+f*r*d-n*h*d)*E,e[2]=(a*m*s-v*l*s+v*r*c-n*m*c-a*r*d+n*l*d)*E,e[3]=(f*l*s-a*h*s-f*r*c+n*h*c+a*r*p-n*l*p)*E,e[4]=g*E,e[5]=(u*m*s-x*h*s+x*r*p-t*m*p-u*r*d+t*h*d)*E,e[6]=(x*l*s-o*m*s-x*r*c+t*m*c+o*r*d-t*l*d)*E,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*p+t*l*p)*E,e[8]=S*E,e[9]=(x*f*s-u*v*s-x*n*p+t*v*p+u*n*d-t*f*d)*E,e[10]=(o*v*s-x*a*s+x*n*c-t*v*c-o*n*d+t*a*d)*E,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*p-t*a*p)*E,e[12]=b*E,e[13]=(u*v*r-x*f*r+x*n*h-t*v*h-u*n*m+t*f*m)*E,e[14]=(x*a*r-o*v*r-x*n*l+t*v*l+o*n*m-t*a*m)*E,e[15]=(o*f*r-u*a*r+u*n*l-t*f*l-o*n*h+t*a*h)*E,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,x=s*f,v=o*u,m=o*f,d=a*f,_=l*c,g=l*u,S=l*f,b=n.x,T=n.y,E=n.z;return r[0]=(1-(v+d))*b,r[1]=(p+S)*b,r[2]=(x-g)*b,r[3]=0,r[4]=(p-S)*T,r[5]=(1-(h+d))*T,r[6]=(m+_)*T,r[7]=0,r[8]=(x+g)*E,r[9]=(m-_)*E,r[10]=(1-(h+v))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=ti.set(r[0],r[1],r[2]).length();const o=ti.set(r[4],r[5],r[6]).length(),a=ti.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ht.copy(this);const c=1/s,u=1/o,f=1/a;return Ht.elements[0]*=c,Ht.elements[1]*=c,Ht.elements[2]*=c,Ht.elements[4]*=u,Ht.elements[5]*=u,Ht.elements[6]*=u,Ht.elements[8]*=f,Ht.elements[9]*=f,Ht.elements[10]*=f,t.setFromRotationMatrix(Ht),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=fn){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),f=(t+e)/(t-e),h=(n+r)/(n-r);let p,x;if(a===fn)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Dr)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=fn){const l=this.elements,c=1/(t-e),u=1/(n-r),f=1/(o-s),h=(t+e)*c,p=(n+r)*u;let x,v;if(a===fn)x=(o+s)*f,v=-2*f;else if(a===Dr)x=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ti=new z,Ht=new at,yh=new z(0,0,0),Eh=new z(1,1,1),Sn=new z,lr=new z,Dt=new z,bo=new at,To=new Vn;class Or{constructor(e=0,t=0,n=0,r=Or.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ft(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return To.setFromEuler(this),this.setFromQuaternion(To,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Or.DEFAULT_ORDER="XYZ";class Aa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bh=0;const Ao=new z,ni=new Vn,sn=new at,ur=new z,Ni=new z,Th=new z,Ah=new Vn,wo=new z(1,0,0),Ro=new z(0,1,0),Co=new z(0,0,1),wh={type:"added"},Po={type:"removed"};class Mt extends Xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new z,t=new Or,n=new Vn,r=new z(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new Ge}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Aa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ni.setFromAxisAngle(e,t),this.quaternion.multiply(ni),this}rotateOnWorldAxis(e,t){return ni.setFromAxisAngle(e,t),this.quaternion.premultiply(ni),this}rotateX(e){return this.rotateOnAxis(wo,e)}rotateY(e){return this.rotateOnAxis(Ro,e)}rotateZ(e){return this.rotateOnAxis(Co,e)}translateOnAxis(e,t){return Ao.copy(e).applyQuaternion(this.quaternion),this.position.add(Ao.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wo,e)}translateY(e){return this.translateOnAxis(Ro,e)}translateZ(e){return this.translateOnAxis(Co,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ur.copy(e):ur.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ni.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(Ni,ur,this.up):sn.lookAt(ur,Ni,this.up),this.quaternion.setFromRotationMatrix(sn),r&&(sn.extractRotation(r.matrixWorld),ni.setFromRotationMatrix(sn),this.quaternion.premultiply(ni.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(wh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Po)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Po)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(sn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,e,Th),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,Ah,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Mt.DEFAULT_UP=new z(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gt=new z,an=new z,os=new z,on=new z,ii=new z,ri=new z,Lo=new z,cs=new z,ls=new z,us=new z;let hr=!1;class Vt{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Gt.subVectors(e,t),r.cross(Gt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Gt.subVectors(r,t),an.subVectors(n,t),os.subVectors(e,t);const o=Gt.dot(Gt),a=Gt.dot(an),l=Gt.dot(os),c=an.dot(an),u=an.dot(os),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,p=(c*l-a*u)*h,x=(o*u-a*l)*h;return s.set(1-p-x,x,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,on),on.x>=0&&on.y>=0&&on.x+on.y<=1}static getUV(e,t,n,r,s,o,a,l){return hr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),hr=!0),this.getInterpolation(e,t,n,r,s,o,a,l)}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,on),l.setScalar(0),l.addScaledVector(s,on.x),l.addScaledVector(o,on.y),l.addScaledVector(a,on.z),l}static isFrontFacing(e,t,n,r){return Gt.subVectors(n,t),an.subVectors(e,t),Gt.cross(an).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),an.subVectors(this.a,this.b),Gt.cross(an).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return hr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),hr=!0),Vt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return Vt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Vt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;ii.subVectors(r,n),ri.subVectors(s,n),cs.subVectors(e,n);const l=ii.dot(cs),c=ri.dot(cs);if(l<=0&&c<=0)return t.copy(n);ls.subVectors(e,r);const u=ii.dot(ls),f=ri.dot(ls);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ii,o);us.subVectors(e,s);const p=ii.dot(us),x=ri.dot(us);if(x>=0&&p<=x)return t.copy(s);const v=p*c-l*x;if(v<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(n).addScaledVector(ri,a);const m=u*x-p*f;if(m<=0&&f-u>=0&&p-x>=0)return Lo.subVectors(s,r),a=(f-u)/(f-u+(p-x)),t.copy(r).addScaledVector(Lo,a);const d=1/(m+v+h);return o=v*d,a=h*d,t.copy(n).addScaledVector(ii,o).addScaledVector(ri,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Rh=0;class nr extends Xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=vi,this.side=mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=al,this.blendDst=ol,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vi&&(n.blending=this.blending),this.side!==mn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const El={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kt={h:0,s:0,l:0},fr={h:0,s:0,l:0};function hs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ne){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=zt.workingColorSpace){return this.r=e,this.g=t,this.b=n,zt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=zt.workingColorSpace){if(e=Ea(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=hs(o,s,e+1/3),this.g=hs(o,s,e),this.b=hs(o,s,e-1/3)}return zt.toWorkingColorSpace(this,r),this}setStyle(e,t=Ne){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ne){const n=El[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=$r(e.r),this.g=$r(e.g),this.b=$r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ne){return zt.fromWorkingColorSpace(vt.copy(this),e),Math.round(ft(vt.r*255,0,255))*65536+Math.round(ft(vt.g*255,0,255))*256+Math.round(ft(vt.b*255,0,255))}getHexString(e=Ne){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=zt.workingColorSpace){zt.fromWorkingColorSpace(vt.copy(this),t);const n=vt.r,r=vt.g,s=vt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=zt.workingColorSpace){return zt.fromWorkingColorSpace(vt.copy(this),t),e.r=vt.r,e.g=vt.g,e.b=vt.b,e}getStyle(e=Ne){zt.fromWorkingColorSpace(vt.copy(this),e);const t=vt.r,n=vt.g,r=vt.b;return e!==Ne?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(kt),kt.h+=e,kt.s+=t,kt.l+=n,this.setHSL(kt.h,kt.s,kt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(kt),e.getHSL(fr);const n=Gi(kt.h,fr.h,t),r=Gi(kt.s,fr.s,t),s=Gi(kt.l,fr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vt=new Ze;Ze.NAMES=El;class wa extends nr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const st=new z,dr=new de;class Jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_o,this.updateRange={offset:0,count:-1},this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyMatrix3(e),this.setXY(t,dr.x,dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=pi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),n=Et(n,this.array),r=Et(r,this.array),s=Et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_o&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class bl extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Tl extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class pn extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ch=0;const Ft=new at,fs=new Mt,si=new z,Ut=new tr,Fi=new tr,lt=new z;class wn extends Xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_l(e)?Tl:bl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ge().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ft.makeRotationFromQuaternion(e),this.applyMatrix4(Ft),this}rotateX(e){return Ft.makeRotationX(e),this.applyMatrix4(Ft),this}rotateY(e){return Ft.makeRotationY(e),this.applyMatrix4(Ft),this}rotateZ(e){return Ft.makeRotationZ(e),this.applyMatrix4(Ft),this}translate(e,t,n){return Ft.makeTranslation(e,t,n),this.applyMatrix4(Ft),this}scale(e,t,n){return Ft.makeScale(e,t,n),this.applyMatrix4(Ft),this}lookAt(e){return fs.lookAt(e),fs.updateMatrix(),this.applyMatrix4(fs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(si).negate(),this.translate(si.x,si.y,si.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new pn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Ut.setFromBufferAttribute(s),this.morphTargetsRelative?(lt.addVectors(this.boundingBox.min,Ut.min),this.boundingBox.expandByPoint(lt),lt.addVectors(this.boundingBox.max,Ut.max),this.boundingBox.expandByPoint(lt)):(this.boundingBox.expandByPoint(Ut.min),this.boundingBox.expandByPoint(Ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ba);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(Ut.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Fi.setFromBufferAttribute(a),this.morphTargetsRelative?(lt.addVectors(Ut.min,Fi.min),Ut.expandByPoint(lt),lt.addVectors(Ut.max,Fi.max),Ut.expandByPoint(lt)):(Ut.expandByPoint(Fi.min),Ut.expandByPoint(Fi.max))}Ut.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)lt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(lt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)lt.fromBufferAttribute(a,c),l&&(si.fromBufferAttribute(e,c),lt.add(si)),r=Math.max(r,n.distanceToSquared(lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let M=0;M<a;M++)c[M]=new z,u[M]=new z;const f=new z,h=new z,p=new z,x=new de,v=new de,m=new de,d=new z,_=new z;function g(M,L,O){f.fromArray(r,M*3),h.fromArray(r,L*3),p.fromArray(r,O*3),x.fromArray(o,M*2),v.fromArray(o,L*2),m.fromArray(o,O*2),h.sub(f),p.sub(f),v.sub(x),m.sub(x);const D=1/(v.x*m.y-m.x*v.y);isFinite(D)&&(d.copy(h).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(D),_.copy(p).multiplyScalar(v.x).addScaledVector(h,-m.x).multiplyScalar(D),c[M].add(d),c[L].add(d),c[O].add(d),u[M].add(_),u[L].add(_),u[O].add(_))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let M=0,L=S.length;M<L;++M){const O=S[M],D=O.start,B=O.count;for(let H=D,Z=D+B;H<Z;H+=3)g(n[H+0],n[H+1],n[H+2])}const b=new z,T=new z,E=new z,P=new z;function y(M){E.fromArray(s,M*3),P.copy(E);const L=c[M];b.copy(L),b.sub(E.multiplyScalar(E.dot(L))).normalize(),T.crossVectors(P,L);const D=T.dot(u[M])<0?-1:1;l[M*4]=b.x,l[M*4+1]=b.y,l[M*4+2]=b.z,l[M*4+3]=D}for(let M=0,L=S.length;M<L;++M){const O=S[M],D=O.start,B=O.count;for(let H=D,Z=D+B;H<Z;H+=3)y(n[H+0]),y(n[H+1]),y(n[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,u=new z,f=new z;if(e)for(let h=0,p=e.count;h<p;h+=3){const x=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)lt.fromBufferAttribute(e,t),lt.normalize(),e.setXYZ(t,lt.x,lt.y,lt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,x=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let d=0;d<u;d++)h[x++]=c[p++]}return new Jt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wn,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Do=new at,Un=new Ta,pr=new ba,Uo=new z,ai=new z,oi=new z,ci=new z,ds=new z,mr=new z,xr=new de,gr=new de,vr=new de,Io=new z,No=new z,Fo=new z,_r=new z,Sr=new z;class wt extends Mt{constructor(e=new wn,t=new wa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){mr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(ds.fromBufferAttribute(f,e),o?mr.addScaledVector(ds,u):mr.addScaledVector(ds.sub(t),u))}t.add(mr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(s),Un.copy(e.ray).recast(e.near),!(pr.containsPoint(Un.origin)===!1&&(Un.intersectSphere(pr,Uo)===null||Un.origin.distanceToSquared(Uo)>(e.far-e.near)**2))&&(Do.copy(s).invert(),Un.copy(e.ray).applyMatrix4(Do),!(n.boundingBox!==null&&Un.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Un)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,v=h.length;x<v;x++){const m=h[x],d=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=_,b=g;S<b;S+=3){const T=a.getX(S),E=a.getX(S+1),P=a.getX(S+2);r=Mr(this,d,e,n,c,u,f,T,E,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=x,d=v;m<d;m+=3){const _=a.getX(m),g=a.getX(m+1),S=a.getX(m+2);r=Mr(this,o,e,n,c,u,f,_,g,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,v=h.length;x<v;x++){const m=h[x],d=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=_,b=g;S<b;S+=3){const T=S,E=S+1,P=S+2;r=Mr(this,d,e,n,c,u,f,T,E,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=x,d=v;m<d;m+=3){const _=m,g=m+1,S=m+2;r=Mr(this,o,e,n,c,u,f,_,g,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Ph(i,e,t,n,r,s,o,a){let l;if(e.side===St?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===mn,a),l===null)return null;Sr.copy(a),Sr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Sr);return c<t.near||c>t.far?null:{distance:c,point:Sr.clone(),object:i}}function Mr(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,ai),i.getVertexPosition(l,oi),i.getVertexPosition(c,ci);const u=Ph(i,e,t,n,ai,oi,ci,_r);if(u){r&&(xr.fromBufferAttribute(r,a),gr.fromBufferAttribute(r,l),vr.fromBufferAttribute(r,c),u.uv=Vt.getInterpolation(_r,ai,oi,ci,xr,gr,vr,new de)),s&&(xr.fromBufferAttribute(s,a),gr.fromBufferAttribute(s,l),vr.fromBufferAttribute(s,c),u.uv1=Vt.getInterpolation(_r,ai,oi,ci,xr,gr,vr,new de),u.uv2=u.uv1),o&&(Io.fromBufferAttribute(o,a),No.fromBufferAttribute(o,l),Fo.fromBufferAttribute(o,c),u.normal=Vt.getInterpolation(_r,ai,oi,ci,Io,No,Fo,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new z,materialIndex:0};Vt.getNormal(ai,oi,ci,f.normal),u.face=f}return u}class dn extends wn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;x("z","y","x",-1,-1,n,t,e,o,s,0),x("z","y","x",1,-1,n,t,-e,o,s,1),x("x","z","y",1,1,e,n,t,r,o,2),x("x","z","y",1,-1,e,n,-t,r,o,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new pn(c,3)),this.setAttribute("normal",new pn(u,3)),this.setAttribute("uv",new pn(f,2));function x(v,m,d,_,g,S,b,T,E,P,y){const M=S/E,L=b/P,O=S/2,D=b/2,B=T/2,H=E+1,Z=P+1;let X=0,K=0;const te=new z;for(let J=0;J<Z;J++){const C=J*L-D;for(let U=0;U<H;U++){const k=U*M-O;te[v]=k*_,te[m]=C*g,te[d]=B,c.push(te.x,te.y,te.z),te[v]=0,te[m]=0,te[d]=T>0?1:-1,u.push(te.x,te.y,te.z),f.push(U/E),f.push(1-J/P),X+=1}}for(let J=0;J<P;J++)for(let C=0;C<E;C++){const U=h+C+H*J,k=h+C+H*(J+1),G=h+(C+1)+H*(J+1),oe=h+(C+1)+H*J;l.push(U,k,oe),l.push(k,G,oe),K+=6}a.addGroup(p,K,y),p+=K,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function bt(i){const e={};for(let t=0;t<i.length;t++){const n=bi(i[t]);for(const r in n)e[r]=n[r]}return e}function Lh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Al(i){return i.getRenderTarget()===null?i.outputColorSpace:Qt}const Dh={clone:bi,merge:bt};var Uh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ih=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bt extends nr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uh,this.fragmentShader=Ih,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bi(e.uniforms),this.uniformsGroups=Lh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class wl extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=fn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Rt extends wl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zi*2*Math.atan(Math.tan(Hi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hi*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const li=-90,ui=1;class Nh extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const r=new Rt(li,ui,e,t);r.layers=this.layers,this.add(r);const s=new Rt(li,ui,e,t);s.layers=this.layers,this.add(s);const o=new Rt(li,ui,e,t);o.layers=this.layers,this.add(o);const a=new Rt(li,ui,e,t);a.layers=this.layers,this.add(a);const l=new Rt(li,ui,e,t);l.layers=this.layers,this.add(l);const c=new Rt(li,ui,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===fn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.xr.enabled;e.xr.enabled=!1;const h=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=h,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Ra extends Ct{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Mi,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fh extends xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(ki("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Gn?Ne:kn),this.texture=new Ra(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new dn(5,5,5),s=new Bt({name:"CubemapFromEquirect",uniforms:bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:St,blending:bn});s.uniforms.tEquirect.value=t;const o=new wt(r,s),a=t.minFilter;return t.minFilter===Yi&&(t.minFilter=ht),new Nh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const ps=new z,Oh=new z,Bh=new Ge;class Mn{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ps.subVectors(n,t).cross(Oh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ps),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Bh.getNormalMatrix(e),r=this.coplanarPoint(ps).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const In=new ba,yr=new z;class Ca{constructor(e=new Mn,t=new Mn,n=new Mn,r=new Mn,s=new Mn,o=new Mn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=fn){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],x=r[9],v=r[10],m=r[11],d=r[12],_=r[13],g=r[14],S=r[15];if(n[0].setComponents(l-s,h-c,m-p,S-d).normalize(),n[1].setComponents(l+s,h+c,m+p,S+d).normalize(),n[2].setComponents(l+o,h+u,m+x,S+_).normalize(),n[3].setComponents(l-o,h-u,m-x,S-_).normalize(),n[4].setComponents(l-a,h-f,m-v,S-g).normalize(),t===fn)n[5].setComponents(l+a,h+f,m+v,S+g).normalize();else if(t===Dr)n[5].setComponents(a,f,v,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),In.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),In.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(In)}intersectsSprite(e){return In.center.set(0,0,0),In.radius=.7071067811865476,In.applyMatrix4(e.matrixWorld),this.intersectsSphere(In)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(yr.x=r.normal.x>0?e.max.x:e.min.x,yr.y=r.normal.y>0?e.max.y:e.min.y,yr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(yr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Rl(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function zh(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const f=c.array,h=c.usage,p=i.createBuffer();i.bindBuffer(u,p),i.bufferData(u,f,h),c.onUploadCallback();let x;if(f instanceof Float32Array)x=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=i.SHORT;else if(f instanceof Uint32Array)x=i.UNSIGNED_INT;else if(f instanceof Int32Array)x=i.INT;else if(f instanceof Int8Array)x=i.BYTE;else if(f instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,p=u.updateRange;i.bindBuffer(f,c),p.count===-1?i.bufferSubData(f,0,h):(t?i.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):i.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class Pa extends wn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,p=[],x=[],v=[],m=[];for(let d=0;d<u;d++){const _=d*h-o;for(let g=0;g<c;g++){const S=g*f-s;x.push(S,-_,0),v.push(0,0,1),m.push(g/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<a;_++){const g=_+c*d,S=_+c*(d+1),b=_+1+c*(d+1),T=_+1+c*d;p.push(g,S,T),p.push(S,b,T)}this.setIndex(p),this.setAttribute("position",new pn(x,3)),this.setAttribute("normal",new pn(v,3)),this.setAttribute("uv",new pn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pa(e.width,e.height,e.widthSegments,e.heightSegments)}}var Hh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Xh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Jh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$h=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,cf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,uf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ff=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,df=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mf="gl_FragColor = linearToOutputTexel( gl_FragColor );",xf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_f=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Sf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ef=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Af=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Rf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Df=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Uf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,If=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ff=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Of=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Bf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zf=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,kf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Xf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,qf=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Yf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$f=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ed=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,td=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,nd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,id=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ad=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,od=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ld=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ud=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,pd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,md=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_d=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Md=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ed=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Td=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Ad=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ld=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ud=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Fd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Od=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wd=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Xd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,qd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Yd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qd=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$d=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,i0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,s0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,a0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,l0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,d0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,p0=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,x0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,g0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:Hh,alphahash_pars_fragment:Gh,alphamap_fragment:kh,alphamap_pars_fragment:Vh,alphatest_fragment:Wh,alphatest_pars_fragment:Xh,aomap_fragment:qh,aomap_pars_fragment:Yh,begin_vertex:jh,beginnormal_vertex:Zh,bsdfs:Kh,iridescence_fragment:Jh,bumpmap_pars_fragment:Qh,clipping_planes_fragment:$h,clipping_planes_pars_fragment:ef,clipping_planes_pars_vertex:tf,clipping_planes_vertex:nf,color_fragment:rf,color_pars_fragment:sf,color_pars_vertex:af,color_vertex:of,common:cf,cube_uv_reflection_fragment:lf,defaultnormal_vertex:uf,displacementmap_pars_vertex:hf,displacementmap_vertex:ff,emissivemap_fragment:df,emissivemap_pars_fragment:pf,colorspace_fragment:mf,colorspace_pars_fragment:xf,envmap_fragment:gf,envmap_common_pars_fragment:vf,envmap_pars_fragment:_f,envmap_pars_vertex:Sf,envmap_physical_pars_fragment:Df,envmap_vertex:Mf,fog_vertex:yf,fog_pars_vertex:Ef,fog_fragment:bf,fog_pars_fragment:Tf,gradientmap_pars_fragment:Af,lightmap_fragment:wf,lightmap_pars_fragment:Rf,lights_lambert_fragment:Cf,lights_lambert_pars_fragment:Pf,lights_pars_begin:Lf,lights_toon_fragment:Uf,lights_toon_pars_fragment:If,lights_phong_fragment:Nf,lights_phong_pars_fragment:Ff,lights_physical_fragment:Of,lights_physical_pars_fragment:Bf,lights_fragment_begin:zf,lights_fragment_maps:Hf,lights_fragment_end:Gf,logdepthbuf_fragment:kf,logdepthbuf_pars_fragment:Vf,logdepthbuf_pars_vertex:Wf,logdepthbuf_vertex:Xf,map_fragment:qf,map_pars_fragment:Yf,map_particle_fragment:jf,map_particle_pars_fragment:Zf,metalnessmap_fragment:Kf,metalnessmap_pars_fragment:Jf,morphcolor_vertex:Qf,morphnormal_vertex:$f,morphtarget_pars_vertex:ed,morphtarget_vertex:td,normal_fragment_begin:nd,normal_fragment_maps:id,normal_pars_fragment:rd,normal_pars_vertex:sd,normal_vertex:ad,normalmap_pars_fragment:od,clearcoat_normal_fragment_begin:cd,clearcoat_normal_fragment_maps:ld,clearcoat_pars_fragment:ud,iridescence_pars_fragment:hd,opaque_fragment:fd,packing:dd,premultiplied_alpha_fragment:pd,project_vertex:md,dithering_fragment:xd,dithering_pars_fragment:gd,roughnessmap_fragment:vd,roughnessmap_pars_fragment:_d,shadowmap_pars_fragment:Sd,shadowmap_pars_vertex:Md,shadowmap_vertex:yd,shadowmask_pars_fragment:Ed,skinbase_vertex:bd,skinning_pars_vertex:Td,skinning_vertex:Ad,skinnormal_vertex:wd,specularmap_fragment:Rd,specularmap_pars_fragment:Cd,tonemapping_fragment:Pd,tonemapping_pars_fragment:Ld,transmission_fragment:Dd,transmission_pars_fragment:Ud,uv_pars_fragment:Id,uv_pars_vertex:Nd,uv_vertex:Fd,worldpos_vertex:Od,background_vert:Bd,background_frag:zd,backgroundCube_vert:Hd,backgroundCube_frag:Gd,cube_vert:kd,cube_frag:Vd,depth_vert:Wd,depth_frag:Xd,distanceRGBA_vert:qd,distanceRGBA_frag:Yd,equirect_vert:jd,equirect_frag:Zd,linedashed_vert:Kd,linedashed_frag:Jd,meshbasic_vert:Qd,meshbasic_frag:$d,meshlambert_vert:e0,meshlambert_frag:t0,meshmatcap_vert:n0,meshmatcap_frag:i0,meshnormal_vert:r0,meshnormal_frag:s0,meshphong_vert:a0,meshphong_frag:o0,meshphysical_vert:c0,meshphysical_frag:l0,meshtoon_vert:u0,meshtoon_frag:h0,points_vert:f0,points_frag:d0,shadow_vert:p0,shadow_frag:m0,sprite_vert:x0,sprite_frag:g0},ve={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Kt={basic:{uniforms:bt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:bt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:bt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:bt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:bt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:bt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:bt([ve.points,ve.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:bt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:bt([ve.common,ve.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:bt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:bt([ve.sprite,ve.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:bt([ve.common,ve.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:bt([ve.lights,ve.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Kt.physical={uniforms:bt([Kt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Er={r:0,b:0,g:0};function v0(i,e,t,n,r,s,o){const a=new Ze(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function x(m,d){let _=!1,g=d.isScene===!0?d.background:null;switch(g&&g.isTexture&&(g=(d.backgroundBlurriness>0?t:e).get(g)),g===null?v(a,l):g&&g.isColor&&(v(g,1),_=!0),i.xr.getEnvironmentBlendMode()){case"opaque":_=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),_=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),_=!0;break}(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Fr)?(u===void 0&&(u=new wt(new dn(1,1,1),new Bt({name:"BackgroundCubeMaterial",uniforms:bi(Kt.backgroundCube.uniforms),vertexShader:Kt.backgroundCube.vertexShader,fragmentShader:Kt.backgroundCube.fragmentShader,side:St,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,E,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=g.colorSpace!==Ne,(f!==g||h!==g.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,f=g,h=g.version,p=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new wt(new Pa(2,2),new Bt({name:"BackgroundMaterial",uniforms:bi(Kt.background.uniforms),vertexShader:Kt.background.vertexShader,fragmentShader:Kt.background.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=g.colorSpace!==Ne,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||h!==g.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=g,h=g.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,d){m.getRGB(Er,Al(i)),n.buffers.color.setClear(Er.r,Er.g,Er.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(a,l)},render:x}}function _0(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function f(B,H,Z,X,K){let te=!1;if(o){const J=v(X,Z,H);c!==J&&(c=J,p(c.object)),te=d(B,X,Z,K),te&&_(B,X,Z,K)}else{const J=H.wireframe===!0;(c.geometry!==X.id||c.program!==Z.id||c.wireframe!==J)&&(c.geometry=X.id,c.program=Z.id,c.wireframe=J,te=!0)}K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(te||u)&&(u=!1,P(B,H,Z,X),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function h(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function p(B){return n.isWebGL2?i.bindVertexArray(B):s.bindVertexArrayOES(B)}function x(B){return n.isWebGL2?i.deleteVertexArray(B):s.deleteVertexArrayOES(B)}function v(B,H,Z){const X=Z.wireframe===!0;let K=a[B.id];K===void 0&&(K={},a[B.id]=K);let te=K[H.id];te===void 0&&(te={},K[H.id]=te);let J=te[X];return J===void 0&&(J=m(h()),te[X]=J),J}function m(B){const H=[],Z=[],X=[];for(let K=0;K<r;K++)H[K]=0,Z[K]=0,X[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Z,attributeDivisors:X,object:B,attributes:{},index:null}}function d(B,H,Z,X){const K=c.attributes,te=H.attributes;let J=0;const C=Z.getAttributes();for(const U in C)if(C[U].location>=0){const G=K[U];let oe=te[U];if(oe===void 0&&(U==="instanceMatrix"&&B.instanceMatrix&&(oe=B.instanceMatrix),U==="instanceColor"&&B.instanceColor&&(oe=B.instanceColor)),G===void 0||G.attribute!==oe||oe&&G.data!==oe.data)return!0;J++}return c.attributesNum!==J||c.index!==X}function _(B,H,Z,X){const K={},te=H.attributes;let J=0;const C=Z.getAttributes();for(const U in C)if(C[U].location>=0){let G=te[U];G===void 0&&(U==="instanceMatrix"&&B.instanceMatrix&&(G=B.instanceMatrix),U==="instanceColor"&&B.instanceColor&&(G=B.instanceColor));const oe={};oe.attribute=G,G&&G.data&&(oe.data=G.data),K[U]=oe,J++}c.attributes=K,c.attributesNum=J,c.index=X}function g(){const B=c.newAttributes;for(let H=0,Z=B.length;H<Z;H++)B[H]=0}function S(B){b(B,0)}function b(B,H){const Z=c.newAttributes,X=c.enabledAttributes,K=c.attributeDivisors;Z[B]=1,X[B]===0&&(i.enableVertexAttribArray(B),X[B]=1),K[B]!==H&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,H),K[B]=H)}function T(){const B=c.newAttributes,H=c.enabledAttributes;for(let Z=0,X=H.length;Z<X;Z++)H[Z]!==B[Z]&&(i.disableVertexAttribArray(Z),H[Z]=0)}function E(B,H,Z,X,K,te,J){J===!0?i.vertexAttribIPointer(B,H,Z,K,te):i.vertexAttribPointer(B,H,Z,X,K,te)}function P(B,H,Z,X){if(n.isWebGL2===!1&&(B.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const K=X.attributes,te=Z.getAttributes(),J=H.defaultAttributeValues;for(const C in te){const U=te[C];if(U.location>=0){let k=K[C];if(k===void 0&&(C==="instanceMatrix"&&B.instanceMatrix&&(k=B.instanceMatrix),C==="instanceColor"&&B.instanceColor&&(k=B.instanceColor)),k!==void 0){const G=k.normalized,oe=k.itemSize,me=t.get(k);if(me===void 0)continue;const ye=me.buffer,ce=me.type,Fe=me.bytesPerElement,qe=n.isWebGL2===!0&&(ce===i.INT||ce===i.UNSIGNED_INT||k.gpuType===ul);if(k.isInterleavedBufferAttribute){const Re=k.data,I=Re.stride,se=k.offset;if(Re.isInstancedInterleavedBuffer){for(let Q=0;Q<U.locationSize;Q++)b(U.location+Q,Re.meshPerAttribute);B.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let Q=0;Q<U.locationSize;Q++)S(U.location+Q);i.bindBuffer(i.ARRAY_BUFFER,ye);for(let Q=0;Q<U.locationSize;Q++)E(U.location+Q,oe/U.locationSize,ce,G,I*Fe,(se+oe/U.locationSize*Q)*Fe,qe)}else{if(k.isInstancedBufferAttribute){for(let Re=0;Re<U.locationSize;Re++)b(U.location+Re,k.meshPerAttribute);B.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let Re=0;Re<U.locationSize;Re++)S(U.location+Re);i.bindBuffer(i.ARRAY_BUFFER,ye);for(let Re=0;Re<U.locationSize;Re++)E(U.location+Re,oe/U.locationSize,ce,G,oe*Fe,oe/U.locationSize*Re*Fe,qe)}}else if(J!==void 0){const G=J[C];if(G!==void 0)switch(G.length){case 2:i.vertexAttrib2fv(U.location,G);break;case 3:i.vertexAttrib3fv(U.location,G);break;case 4:i.vertexAttrib4fv(U.location,G);break;default:i.vertexAttrib1fv(U.location,G)}}}}T()}function y(){O();for(const B in a){const H=a[B];for(const Z in H){const X=H[Z];for(const K in X)x(X[K].object),delete X[K];delete H[Z]}delete a[B]}}function M(B){if(a[B.id]===void 0)return;const H=a[B.id];for(const Z in H){const X=H[Z];for(const K in X)x(X[K].object),delete X[K];delete H[Z]}delete a[B.id]}function L(B){for(const H in a){const Z=a[H];if(Z[B.id]===void 0)continue;const X=Z[B.id];for(const K in X)x(X[K].object),delete X[K];delete Z[B.id]}}function O(){D(),u=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:O,resetDefaultState:D,dispose:y,releaseStatesOfGeometry:M,releaseStatesOfProgram:L,initAttributes:g,enableAttribute:S,disableUnusedAttributes:T}}function S0(i,e,t,n){const r=n.isWebGL2;let s;function o(c){s=c}function a(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,p;if(r)h=i,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,c,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function M0(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,S=o||e.has("OES_texture_float"),b=g&&S,T=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:_,vertexTextures:g,floatFragmentTextures:S,floatVertexTextures:b,maxSamples:T}}function y0(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Mn,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||n!==0||r;return r=h,n=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const x=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,d=i.get(f);if(!r||x===null||x.length===0||s&&!m)s?u(null):c();else{const _=s?0:n,g=_*4;let S=d.clippingState||null;l.value=S,S=u(x,h,g,p);for(let b=0;b!==g;++b)S[b]=t[b];d.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,p,x){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,x!==!0||m===null){const d=p+v*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<d)&&(m=new Float32Array(d));for(let g=0,S=p;g!==v;++g,S+=4)o.copy(f[g]).applyMatrix4(_,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function E0(i){let e=new WeakMap;function t(o,a){return a===la?o.mapping=Mi:a===ua&&(o.mapping=yi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===la||a===ua)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Fh(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Cl extends wl{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const mi=4,Oo=[.125,.215,.35,.446,.526,.582],Fn=20,ms=new Cl,Bo=new Ze;let xs=null;const Nn=(1+Math.sqrt(5))/2,hi=1/Nn,zo=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,Nn,hi),new z(0,Nn,-hi),new z(hi,0,Nn),new z(-hi,0,Nn),new z(Nn,hi,0),new z(-Nn,hi,0)];class Ho{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){xs=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ko(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xs),e.scissorTest=!1,br(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mi||e.mapping===yi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xs=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ht,minFilter:ht,generateMipmaps:!1,type:ji,format:Wt,colorSpace:Qt,depthBuffer:!1},r=Go(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Go(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=b0(s)),this._blurMaterial=T0(s,e,t)}return r}_compileMaterial(e){const t=new wt(this._lodPlanes[0],e);this._renderer.compile(t,ms)}_sceneToCubeUV(e,t,n,r){const a=new Rt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Bo),u.toneMapping=Tn,u.autoClear=!1;const p=new wa({name:"PMREM.Background",side:St,depthWrite:!1,depthTest:!1}),x=new wt(new dn,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Bo),v=!0);for(let d=0;d<6;d++){const _=d%3;_===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):_===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const g=this._cubeSize;br(r,_*g,d>2?g:0,g,g),u.setRenderTarget(r),v&&u.render(x,a),u.render(e,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Mi||e.mapping===yi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ko());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new wt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;br(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ms)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=zo[(r-1)%zo.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new wt(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Fn-1),v=s/x,m=isFinite(s)?1+Math.floor(u*v):Fn;m>Fn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fn}`);const d=[];let _=0;for(let E=0;E<Fn;++E){const P=E/v,y=Math.exp(-P*P/2);d.push(y),E===0?_+=y:E<m&&(_+=2*y)}for(let E=0;E<d.length;E++)d[E]=d[E]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:g}=this;h.dTheta.value=x,h.mipInt.value=g-n;const S=this._sizeLods[r],b=3*S*(r>g-mi?r-g+mi:0),T=4*(this._cubeSize-S);br(t,b,T,3*S,2*S),l.setRenderTarget(t),l.render(f,ms)}}function b0(i){const e=[],t=[],n=[];let r=i;const s=i-mi+1+Oo.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-mi?l=Oo[o-i+mi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,x=6,v=3,m=2,d=1,_=new Float32Array(v*x*p),g=new Float32Array(m*x*p),S=new Float32Array(d*x*p);for(let T=0;T<p;T++){const E=T%3*2/3-1,P=T>2?0:-1,y=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];_.set(y,v*x*T),g.set(h,m*x*T);const M=[T,T,T,T,T,T];S.set(M,d*x*T)}const b=new wn;b.setAttribute("position",new Jt(_,v)),b.setAttribute("uv",new Jt(g,m)),b.setAttribute("faceIndex",new Jt(S,d)),e.push(b),r>mi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Go(i,e,t){const n=new xn(i,e,t);return n.texture.mapping=Fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function br(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function T0(i,e,t){const n=new Float32Array(Fn),r=new z(0,1,0);return new Bt({name:"SphericalGaussianBlur",defines:{n:Fn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:La(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function ko(){return new Bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:La(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Vo(){return new Bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:La(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function La(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function A0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===la||l===ua,u=l===Mi||l===yi;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Ho(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Ho(i));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function w0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function R0(i,e,t,n){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const v=h.morphAttributes[x];for(let m=0,d=v.length;m<d;m++)e.remove(v[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const x in h)e.update(h[x],i.ARRAY_BUFFER);const p=f.morphAttributes;for(const x in p){const v=p[x];for(let m=0,d=v.length;m<d;m++)e.update(v[m],i.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,x=f.attributes.position;let v=0;if(p!==null){const _=p.array;v=p.version;for(let g=0,S=_.length;g<S;g+=3){const b=_[g+0],T=_[g+1],E=_[g+2];h.push(b,T,T,E,E,b)}}else if(x!==void 0){const _=x.array;v=x.version;for(let g=0,S=_.length/3-1;g<S;g+=3){const b=g+0,T=g+1,E=g+2;h.push(b,T,T,E,E,b)}}else return;const m=new(_l(h)?Tl:bl)(h,1);m.version=v;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function C0(i,e,t,n){const r=n.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,p){i.drawElements(s,p,a,h*l),t.update(p,s,1)}function f(h,p,x){if(x===0)return;let v,m;if(r)v=i,m="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](s,p,a,h*l,x),t.update(p,s,x)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function P0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function L0(i,e){return i[0]-e[0]}function D0(i,e){return Math.abs(e[1])-Math.abs(i[1])}function U0(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new $e,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=x!==void 0?x.length:0;let m=s.get(u);if(m===void 0||m.count!==v){let H=function(){D.dispose(),s.delete(u),u.removeEventListener("dispose",H)};var p=H;m!==void 0&&m.texture.dispose();const g=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,T=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let y=0;g===!0&&(y=1),S===!0&&(y=2),b===!0&&(y=3);let M=u.attributes.position.count*y,L=1;M>e.maxTextureSize&&(L=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const O=new Float32Array(M*L*4*v),D=new yl(O,M,L,v);D.type=En,D.needsUpdate=!0;const B=y*4;for(let Z=0;Z<v;Z++){const X=T[Z],K=E[Z],te=P[Z],J=M*L*4*Z;for(let C=0;C<X.count;C++){const U=C*B;g===!0&&(o.fromBufferAttribute(X,C),O[J+U+0]=o.x,O[J+U+1]=o.y,O[J+U+2]=o.z,O[J+U+3]=0),S===!0&&(o.fromBufferAttribute(K,C),O[J+U+4]=o.x,O[J+U+5]=o.y,O[J+U+6]=o.z,O[J+U+7]=0),b===!0&&(o.fromBufferAttribute(te,C),O[J+U+8]=o.x,O[J+U+9]=o.y,O[J+U+10]=o.z,O[J+U+11]=te.itemSize===4?o.w:1)}}m={count:v,texture:D,size:new de(M,L)},s.set(u,m),u.addEventListener("dispose",H)}let d=0;for(let g=0;g<h.length;g++)d+=h[g];const _=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(i,"morphTargetBaseInfluence",_),f.getUniforms().setValue(i,"morphTargetInfluences",h),f.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const x=h===void 0?0:h.length;let v=n[u.id];if(v===void 0||v.length!==x){v=[];for(let S=0;S<x;S++)v[S]=[S,0];n[u.id]=v}for(let S=0;S<x;S++){const b=v[S];b[0]=S,b[1]=h[S]}v.sort(D0);for(let S=0;S<8;S++)S<x&&v[S][1]?(a[S][0]=v[S][0],a[S][1]=v[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(L0);const m=u.morphAttributes.position,d=u.morphAttributes.normal;let _=0;for(let S=0;S<8;S++){const b=a[S],T=b[0],E=b[1];T!==Number.MAX_SAFE_INTEGER&&E?(m&&u.getAttribute("morphTarget"+S)!==m[T]&&u.setAttribute("morphTarget"+S,m[T]),d&&u.getAttribute("morphNormal"+S)!==d[T]&&u.setAttribute("morphNormal"+S,d[T]),r[S]=E,_+=E):(m&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),d&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const g=u.morphTargetsRelative?1:1-_;f.getUniforms().setValue(i,"morphTargetBaseInfluence",g),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function I0(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Pl=new Ct,Ll=new yl,Dl=new Sh,Ul=new Ra,Wo=[],Xo=[],qo=new Float32Array(16),Yo=new Float32Array(9),jo=new Float32Array(4);function Ai(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Wo[r];if(s===void 0&&(s=new Float32Array(r),Wo[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function ot(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Br(i,e){let t=Xo[e];t===void 0&&(t=new Int32Array(e),Xo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function N0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function F0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2fv(this.addr,e),ct(t,e)}}function O0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ot(t,e))return;i.uniform3fv(this.addr,e),ct(t,e)}}function B0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4fv(this.addr,e),ct(t,e)}}function z0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ct(t,e)}else{if(ot(t,n))return;jo.set(n),i.uniformMatrix2fv(this.addr,!1,jo),ct(t,n)}}function H0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ct(t,e)}else{if(ot(t,n))return;Yo.set(n),i.uniformMatrix3fv(this.addr,!1,Yo),ct(t,n)}}function G0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ct(t,e)}else{if(ot(t,n))return;qo.set(n),i.uniformMatrix4fv(this.addr,!1,qo),ct(t,n)}}function k0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function V0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2iv(this.addr,e),ct(t,e)}}function W0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;i.uniform3iv(this.addr,e),ct(t,e)}}function X0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4iv(this.addr,e),ct(t,e)}}function q0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Y0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2uiv(this.addr,e),ct(t,e)}}function j0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;i.uniform3uiv(this.addr,e),ct(t,e)}}function Z0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4uiv(this.addr,e),ct(t,e)}}function K0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Pl,r)}function J0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Dl,r)}function Q0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Ul,r)}function $0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ll,r)}function ep(i){switch(i){case 5126:return N0;case 35664:return F0;case 35665:return O0;case 35666:return B0;case 35674:return z0;case 35675:return H0;case 35676:return G0;case 5124:case 35670:return k0;case 35667:case 35671:return V0;case 35668:case 35672:return W0;case 35669:case 35673:return X0;case 5125:return q0;case 36294:return Y0;case 36295:return j0;case 36296:return Z0;case 35678:case 36198:case 36298:case 36306:case 35682:return K0;case 35679:case 36299:case 36307:return J0;case 35680:case 36300:case 36308:case 36293:return Q0;case 36289:case 36303:case 36311:case 36292:return $0}}function tp(i,e){i.uniform1fv(this.addr,e)}function np(i,e){const t=Ai(e,this.size,2);i.uniform2fv(this.addr,t)}function ip(i,e){const t=Ai(e,this.size,3);i.uniform3fv(this.addr,t)}function rp(i,e){const t=Ai(e,this.size,4);i.uniform4fv(this.addr,t)}function sp(i,e){const t=Ai(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ap(i,e){const t=Ai(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function op(i,e){const t=Ai(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function cp(i,e){i.uniform1iv(this.addr,e)}function lp(i,e){i.uniform2iv(this.addr,e)}function up(i,e){i.uniform3iv(this.addr,e)}function hp(i,e){i.uniform4iv(this.addr,e)}function fp(i,e){i.uniform1uiv(this.addr,e)}function dp(i,e){i.uniform2uiv(this.addr,e)}function pp(i,e){i.uniform3uiv(this.addr,e)}function mp(i,e){i.uniform4uiv(this.addr,e)}function xp(i,e,t){const n=this.cache,r=e.length,s=Br(t,r);ot(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Pl,s[o])}function gp(i,e,t){const n=this.cache,r=e.length,s=Br(t,r);ot(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Dl,s[o])}function vp(i,e,t){const n=this.cache,r=e.length,s=Br(t,r);ot(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Ul,s[o])}function _p(i,e,t){const n=this.cache,r=e.length,s=Br(t,r);ot(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Ll,s[o])}function Sp(i){switch(i){case 5126:return tp;case 35664:return np;case 35665:return ip;case 35666:return rp;case 35674:return sp;case 35675:return ap;case 35676:return op;case 5124:case 35670:return cp;case 35667:case 35671:return lp;case 35668:case 35672:return up;case 35669:case 35673:return hp;case 5125:return fp;case 36294:return dp;case 36295:return pp;case 36296:return mp;case 35678:case 36198:case 36298:case 36306:case 35682:return xp;case 35679:case 36299:case 36307:return gp;case 35680:case 36300:case 36308:case 36293:return vp;case 36289:case 36303:case 36311:case 36292:return _p}}class Mp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=ep(t.type)}}class yp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Sp(t.type)}}class Ep{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const gs=/(\w+)(\])?(\[|\.)?/g;function Zo(i,e){i.seq.push(e),i.map[e.id]=e}function bp(i,e,t){const n=i.name,r=n.length;for(gs.lastIndex=0;;){const s=gs.exec(n),o=gs.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Zo(t,c===void 0?new Mp(a,i,e):new yp(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Ep(a),Zo(t,f)),t=f}}}class Pr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);bp(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Ko(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let Tp=0;function Ap(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function wp(i){switch(i){case Qt:return["Linear","( value )"];case Ne:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function Jo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Ap(i.getShaderSource(e),o)}else return r}function Rp(i,e){const t=wp(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Cp(i,e){let t;switch(e){case Eu:t="Linear";break;case bu:t="Reinhard";break;case Tu:t="OptimizedCineon";break;case Au:t="ACESFilmic";break;case wu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Pp(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Bi).join(`
`)}function Lp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Dp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Bi(i){return i!==""}function Qo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $o(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Up=/^[ \t]*#include +<([\w\d./]+)>/gm;function pa(i){return i.replace(Up,Np)}const Ip=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Np(i,e){let t=ze[e];if(t===void 0){const n=Ip.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return pa(t)}const Fp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ec(i){return i.replace(Fp,Op)}function Op(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function tc(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Bp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===sl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===tu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ln&&(e="SHADOWMAP_TYPE_VSM"),e}function zp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Mi:case yi:e="ENVMAP_TYPE_CUBE";break;case Fr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case yi:e="ENVMAP_MODE_REFRACTION";break}return e}function Gp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case cl:e="ENVMAP_BLENDING_MULTIPLY";break;case Mu:e="ENVMAP_BLENDING_MIX";break;case yu:e="ENVMAP_BLENDING_ADD";break}return e}function kp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Vp(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Bp(t),c=zp(t),u=Hp(t),f=Gp(t),h=kp(t),p=t.isWebGL2?"":Pp(t),x=Lp(s),v=r.createProgram();let m,d,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Bi).join(`
`),m.length>0&&(m+=`
`),d=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Bi).join(`
`),d.length>0&&(d+=`
`)):(m=[tc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bi).join(`
`),d=[p,tc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tn?"#define TONE_MAPPING":"",t.toneMapping!==Tn?ze.tonemapping_pars_fragment:"",t.toneMapping!==Tn?Cp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Rp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bi).join(`
`)),o=pa(o),o=Qo(o,t),o=$o(o,t),a=pa(a),a=Qo(a,t),a=$o(a,t),o=ec(o),a=ec(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===So?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===So?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const g=_+m+o,S=_+d+a,b=Ko(r,r.VERTEX_SHADER,g),T=Ko(r,r.FRAGMENT_SHADER,S);if(r.attachShader(v,b),r.attachShader(v,T),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),i.debug.checkShaderErrors){const y=r.getProgramInfoLog(v).trim(),M=r.getShaderInfoLog(b).trim(),L=r.getShaderInfoLog(T).trim();let O=!0,D=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,b,T);else{const B=Jo(r,b,"vertex"),H=Jo(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+y+`
`+B+`
`+H)}else y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",y):(M===""||L==="")&&(D=!1);D&&(this.diagnostics={runnable:O,programLog:y,vertexShader:{log:M,prefix:m},fragmentShader:{log:L,prefix:d}})}r.deleteShader(b),r.deleteShader(T);let E;this.getUniforms=function(){return E===void 0&&(E=new Pr(r,v)),E};let P;return this.getAttributes=function(){return P===void 0&&(P=Dp(r,v)),P},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Tp++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=T,this}let Wp=0;class Xp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new qp(e),t.set(e,n)),n}}class qp{constructor(e){this.id=Wp++,this.code=e,this.usedTimes=0}}function Yp(i,e,t,n,r,s,o){const a=new Aa,l=new Xp,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return y===0?"uv":`uv${y}`}function m(y,M,L,O,D){const B=O.fog,H=D.geometry,Z=y.isMeshStandardMaterial?O.environment:null,X=(y.isMeshStandardMaterial?t:e).get(y.envMap||Z),K=X&&X.mapping===Fr?X.image.height:null,te=x[y.type];y.precision!==null&&(p=r.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const J=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,C=J!==void 0?J.length:0;let U=0;H.morphAttributes.position!==void 0&&(U=1),H.morphAttributes.normal!==void 0&&(U=2),H.morphAttributes.color!==void 0&&(U=3);let k,G,oe,me;if(te){const Je=Kt[te];k=Je.vertexShader,G=Je.fragmentShader}else k=y.vertexShader,G=y.fragmentShader,l.update(y),oe=l.getVertexShaderID(y),me=l.getFragmentShaderID(y);const ye=i.getRenderTarget(),ce=D.isInstancedMesh===!0,Fe=!!y.map,qe=!!y.matcap,Re=!!X,I=!!y.aoMap,se=!!y.lightMap,Q=!!y.bumpMap,ue=!!y.normalMap,ne=!!y.displacementMap,Te=!!y.emissiveMap,Me=!!y.metalnessMap,Ee=!!y.roughnessMap,we=y.anisotropy>0,Pe=y.clearcoat>0,Ve=y.iridescence>0,R=y.sheen>0,A=y.transmission>0,q=we&&!!y.anisotropyMap,ae=Pe&&!!y.clearcoatMap,re=Pe&&!!y.clearcoatNormalMap,he=Pe&&!!y.clearcoatRoughnessMap,Ae=Ve&&!!y.iridescenceMap,fe=Ve&&!!y.iridescenceThicknessMap,Y=R&&!!y.sheenColorMap,N=R&&!!y.sheenRoughnessMap,ie=!!y.specularMap,_e=!!y.specularColorMap,pe=!!y.specularIntensityMap,Se=A&&!!y.transmissionMap,Le=A&&!!y.thicknessMap,He=!!y.gradientMap,F=!!y.alphaMap,xe=y.alphaTest>0,j=!!y.alphaHash,le=!!y.extensions,ge=!!H.attributes.uv1,Oe=!!H.attributes.uv2,je=!!H.attributes.uv3;let Ke=Tn;return y.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Ke=i.toneMapping),{isWebGL2:u,shaderID:te,shaderType:y.type,shaderName:y.name,vertexShader:k,fragmentShader:G,defines:y.defines,customVertexShaderID:oe,customFragmentShaderID:me,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,instancing:ce,instancingColor:ce&&D.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:ye===null?i.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Qt,map:Fe,matcap:qe,envMap:Re,envMapMode:Re&&X.mapping,envMapCubeUVHeight:K,aoMap:I,lightMap:se,bumpMap:Q,normalMap:ue,displacementMap:h&&ne,emissiveMap:Te,normalMapObjectSpace:ue&&y.normalMapType===Hu,normalMapTangentSpace:ue&&y.normalMapType===gl,metalnessMap:Me,roughnessMap:Ee,anisotropy:we,anisotropyMap:q,clearcoat:Pe,clearcoatMap:ae,clearcoatNormalMap:re,clearcoatRoughnessMap:he,iridescence:Ve,iridescenceMap:Ae,iridescenceThicknessMap:fe,sheen:R,sheenColorMap:Y,sheenRoughnessMap:N,specularMap:ie,specularColorMap:_e,specularIntensityMap:pe,transmission:A,transmissionMap:Se,thicknessMap:Le,gradientMap:He,opaque:y.transparent===!1&&y.blending===vi,alphaMap:F,alphaTest:xe,alphaHash:j,combine:y.combine,mapUv:Fe&&v(y.map.channel),aoMapUv:I&&v(y.aoMap.channel),lightMapUv:se&&v(y.lightMap.channel),bumpMapUv:Q&&v(y.bumpMap.channel),normalMapUv:ue&&v(y.normalMap.channel),displacementMapUv:ne&&v(y.displacementMap.channel),emissiveMapUv:Te&&v(y.emissiveMap.channel),metalnessMapUv:Me&&v(y.metalnessMap.channel),roughnessMapUv:Ee&&v(y.roughnessMap.channel),anisotropyMapUv:q&&v(y.anisotropyMap.channel),clearcoatMapUv:ae&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:re&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:Y&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:N&&v(y.sheenRoughnessMap.channel),specularMapUv:ie&&v(y.specularMap.channel),specularColorMapUv:_e&&v(y.specularColorMap.channel),specularIntensityMapUv:pe&&v(y.specularIntensityMap.channel),transmissionMapUv:Se&&v(y.transmissionMap.channel),thicknessMapUv:Le&&v(y.thicknessMap.channel),alphaMapUv:F&&v(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ue||we),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:ge,vertexUv2s:Oe,vertexUv3s:je,pointsUvs:D.isPoints===!0&&!!H.attributes.uv&&(Fe||F),fog:!!B,useFog:y.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:D.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:C,morphTextureStride:U,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ke,useLegacyLights:i._useLegacyLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ot,flipSided:y.side===St,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:le&&y.extensions.derivatives===!0,extensionFragDepth:le&&y.extensions.fragDepth===!0,extensionDrawBuffers:le&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function d(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)M.push(L),M.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(_(M,y),g(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function _(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function g(y,M){a.disableAll(),M.isWebGL2&&a.enable(0),M.supportsVertexTextures&&a.enable(1),M.instancing&&a.enable(2),M.instancingColor&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),y.push(a.mask)}function S(y){const M=x[y.type];let L;if(M){const O=Kt[M];L=Dh.clone(O.uniforms)}else L=y.uniforms;return L}function b(y,M){let L;for(let O=0,D=c.length;O<D;O++){const B=c[O];if(B.cacheKey===M){L=B,++L.usedTimes;break}}return L===void 0&&(L=new Vp(i,M,y,s),c.push(L)),L}function T(y){if(--y.usedTimes===0){const M=c.indexOf(y);c[M]=c[c.length-1],c.pop(),y.destroy()}}function E(y){l.remove(y)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:b,releaseProgram:T,releaseShaderCache:E,programs:c,dispose:P}}function jp(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Zp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function nc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ic(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,h,p,x,v,m){let d=i[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:x,renderOrder:f.renderOrder,z:v,group:m},i[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=x,d.renderOrder=f.renderOrder,d.z=v,d.group=m),e++,d}function a(f,h,p,x,v,m){const d=o(f,h,p,x,v,m);p.transmission>0?n.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,x,v,m){const d=o(f,h,p,x,v,m);p.transmission>0?n.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||Zp),n.length>1&&n.sort(h||nc),r.length>1&&r.sort(h||nc)}function u(){for(let f=e,h=i.length;f<h;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Kp(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new ic,i.set(n,[o])):r>=s.length?(o=new ic,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Jp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Ze};break;case"SpotLight":t={position:new z,direction:new z,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function Qp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let $p=0;function em(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function tm(i,e){const t=new Jp,n=Qp(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new z);const s=new z,o=new at,a=new at;function l(u,f){let h=0,p=0,x=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let v=0,m=0,d=0,_=0,g=0,S=0,b=0,T=0,E=0,P=0;u.sort(em);const y=f===!0?Math.PI:1;for(let L=0,O=u.length;L<O;L++){const D=u[L],B=D.color,H=D.intensity,Z=D.distance,X=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=B.r*H*y,p+=B.g*H*y,x+=B.b*H*y;else if(D.isLightProbe)for(let K=0;K<9;K++)r.probe[K].addScaledVector(D.sh.coefficients[K],H);else if(D.isDirectionalLight){const K=t.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity*y),D.castShadow){const te=D.shadow,J=n.get(D);J.shadowBias=te.bias,J.shadowNormalBias=te.normalBias,J.shadowRadius=te.radius,J.shadowMapSize=te.mapSize,r.directionalShadow[v]=J,r.directionalShadowMap[v]=X,r.directionalShadowMatrix[v]=D.shadow.matrix,S++}r.directional[v]=K,v++}else if(D.isSpotLight){const K=t.get(D);K.position.setFromMatrixPosition(D.matrixWorld),K.color.copy(B).multiplyScalar(H*y),K.distance=Z,K.coneCos=Math.cos(D.angle),K.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),K.decay=D.decay,r.spot[d]=K;const te=D.shadow;if(D.map&&(r.spotLightMap[E]=D.map,E++,te.updateMatrices(D),D.castShadow&&P++),r.spotLightMatrix[d]=te.matrix,D.castShadow){const J=n.get(D);J.shadowBias=te.bias,J.shadowNormalBias=te.normalBias,J.shadowRadius=te.radius,J.shadowMapSize=te.mapSize,r.spotShadow[d]=J,r.spotShadowMap[d]=X,T++}d++}else if(D.isRectAreaLight){const K=t.get(D);K.color.copy(B).multiplyScalar(H),K.halfWidth.set(D.width*.5,0,0),K.halfHeight.set(0,D.height*.5,0),r.rectArea[_]=K,_++}else if(D.isPointLight){const K=t.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity*y),K.distance=D.distance,K.decay=D.decay,D.castShadow){const te=D.shadow,J=n.get(D);J.shadowBias=te.bias,J.shadowNormalBias=te.normalBias,J.shadowRadius=te.radius,J.shadowMapSize=te.mapSize,J.shadowCameraNear=te.camera.near,J.shadowCameraFar=te.camera.far,r.pointShadow[m]=J,r.pointShadowMap[m]=X,r.pointShadowMatrix[m]=D.shadow.matrix,b++}r.point[m]=K,m++}else if(D.isHemisphereLight){const K=t.get(D);K.skyColor.copy(D.color).multiplyScalar(H*y),K.groundColor.copy(D.groundColor).multiplyScalar(H*y),r.hemi[g]=K,g++}}_>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=x;const M=r.hash;(M.directionalLength!==v||M.pointLength!==m||M.spotLength!==d||M.rectAreaLength!==_||M.hemiLength!==g||M.numDirectionalShadows!==S||M.numPointShadows!==b||M.numSpotShadows!==T||M.numSpotMaps!==E)&&(r.directional.length=v,r.spot.length=d,r.rectArea.length=_,r.point.length=m,r.hemi.length=g,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=T+E-P,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=P,M.directionalLength=v,M.pointLength=m,M.spotLength=d,M.rectAreaLength=_,M.hemiLength=g,M.numDirectionalShadows=S,M.numPointShadows=b,M.numSpotShadows=T,M.numSpotMaps=E,r.version=$p++)}function c(u,f){let h=0,p=0,x=0,v=0,m=0;const d=f.matrixWorldInverse;for(let _=0,g=u.length;_<g;_++){const S=u[_];if(S.isDirectionalLight){const b=r.directional[h];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),h++}else if(S.isSpotLight){const b=r.spot[x];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),x++}else if(S.isRectAreaLight){const b=r.rectArea[v];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(d),a.identity(),o.copy(S.matrixWorld),o.premultiply(d),a.extractRotation(o),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){const b=r.point[p];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(d),p++}else if(S.isHemisphereLight){const b=r.hemi[m];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:r}}function rc(i,e){const t=new tm(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(f){n.push(f)}function a(f){r.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function nm(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new rc(i,e),t.set(s,[l])):o>=a.length?(l=new rc(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class im extends nr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rm extends nr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,am=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function om(i,e,t){let n=new Ca;const r=new de,s=new de,o=new $e,a=new im({depthPacking:zu}),l=new rm,c={},u=t.maxTextureSize,f={[mn]:St,[St]:mn,[Ot]:Ot},h=new Bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:sm,fragmentShader:am}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const x=new wn;x.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new wt(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sl;let d=this.type;this.render=function(b,T,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const P=i.getRenderTarget(),y=i.getActiveCubeFace(),M=i.getActiveMipmapLevel(),L=i.state;L.setBlending(bn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const O=d!==ln&&this.type===ln,D=d===ln&&this.type!==ln;for(let B=0,H=b.length;B<H;B++){const Z=b[B],X=Z.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const K=X.getFrameExtents();if(r.multiply(K),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/K.x),r.x=s.x*K.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/K.y),r.y=s.y*K.y,X.mapSize.y=s.y)),X.map===null||O===!0||D===!0){const J=this.type!==ln?{minFilter:_t,magFilter:_t}:{};X.map!==null&&X.map.dispose(),X.map=new xn(r.x,r.y,J),X.map.texture.name=Z.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const te=X.getViewportCount();for(let J=0;J<te;J++){const C=X.getViewport(J);o.set(s.x*C.x,s.y*C.y,s.x*C.z,s.y*C.w),L.viewport(o),X.updateMatrices(Z,J),n=X.getFrustum(),S(T,E,X.camera,Z,this.type)}X.isPointLightShadow!==!0&&this.type===ln&&_(X,E),X.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(P,y,M)};function _(b,T){const E=e.update(v);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new xn(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(T,null,E,h,v,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(T,null,E,p,v,null)}function g(b,T,E,P){let y=null;const M=E.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(M!==void 0)y=M;else if(y=E.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const L=y.uuid,O=T.uuid;let D=c[L];D===void 0&&(D={},c[L]=D);let B=D[O];B===void 0&&(B=y.clone(),D[O]=B),y=B}if(y.visible=T.visible,y.wireframe=T.wireframe,P===ln?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:f[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,E.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const L=i.properties.get(y);L.light=E}return y}function S(b,T,E,P,y){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===ln)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,b.matrixWorld);const O=e.update(b),D=b.material;if(Array.isArray(D)){const B=O.groups;for(let H=0,Z=B.length;H<Z;H++){const X=B[H],K=D[X.materialIndex];if(K&&K.visible){const te=g(b,K,P,y);i.renderBufferDirect(E,null,O,te,b,X)}}}else if(D.visible){const B=g(b,D,P,y);i.renderBufferDirect(E,null,O,B,b,null)}}const L=b.children;for(let O=0,D=L.length;O<D;O++)S(L[O],T,E,P,y)}}function cm(i,e,t){const n=t.isWebGL2;function r(){let F=!1;const xe=new $e;let j=null;const le=new $e(0,0,0,0);return{setMask:function(ge){j!==ge&&!F&&(i.colorMask(ge,ge,ge,ge),j=ge)},setLocked:function(ge){F=ge},setClear:function(ge,Oe,je,Ke,qt){qt===!0&&(ge*=Ke,Oe*=Ke,je*=Ke),xe.set(ge,Oe,je,Ke),le.equals(xe)===!1&&(i.clearColor(ge,Oe,je,Ke),le.copy(xe))},reset:function(){F=!1,j=null,le.set(-1,0,0,0)}}}function s(){let F=!1,xe=null,j=null,le=null;return{setTest:function(ge){ge?ye(i.DEPTH_TEST):ce(i.DEPTH_TEST)},setMask:function(ge){xe!==ge&&!F&&(i.depthMask(ge),xe=ge)},setFunc:function(ge){if(j!==ge){switch(ge){case pu:i.depthFunc(i.NEVER);break;case mu:i.depthFunc(i.ALWAYS);break;case xu:i.depthFunc(i.LESS);break;case ca:i.depthFunc(i.LEQUAL);break;case gu:i.depthFunc(i.EQUAL);break;case vu:i.depthFunc(i.GEQUAL);break;case _u:i.depthFunc(i.GREATER);break;case Su:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=ge}},setLocked:function(ge){F=ge},setClear:function(ge){le!==ge&&(i.clearDepth(ge),le=ge)},reset:function(){F=!1,xe=null,j=null,le=null}}}function o(){let F=!1,xe=null,j=null,le=null,ge=null,Oe=null,je=null,Ke=null,qt=null;return{setTest:function(Je){F||(Je?ye(i.STENCIL_TEST):ce(i.STENCIL_TEST))},setMask:function(Je){xe!==Je&&!F&&(i.stencilMask(Je),xe=Je)},setFunc:function(Je,Pt,dt){(j!==Je||le!==Pt||ge!==dt)&&(i.stencilFunc(Je,Pt,dt),j=Je,le=Pt,ge=dt)},setOp:function(Je,Pt,dt){(Oe!==Je||je!==Pt||Ke!==dt)&&(i.stencilOp(Je,Pt,dt),Oe=Je,je=Pt,Ke=dt)},setLocked:function(Je){F=Je},setClear:function(Je){qt!==Je&&(i.clearStencil(Je),qt=Je)},reset:function(){F=!1,xe=null,j=null,le=null,ge=null,Oe=null,je=null,Ke=null,qt=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},p={},x=new WeakMap,v=[],m=null,d=!1,_=null,g=null,S=null,b=null,T=null,E=null,P=null,y=!1,M=null,L=null,O=null,D=null,B=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,X=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(K)[1]),Z=X>=1):K.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Z=X>=2);let te=null,J={};const C=i.getParameter(i.SCISSOR_BOX),U=i.getParameter(i.VIEWPORT),k=new $e().fromArray(C),G=new $e().fromArray(U);function oe(F,xe,j,le){const ge=new Uint8Array(4),Oe=i.createTexture();i.bindTexture(F,Oe),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let je=0;je<j;je++)n&&(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)?i.texImage3D(xe,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(xe+je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return Oe}const me={};me[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),me[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(me[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),me[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ye(i.DEPTH_TEST),l.setFunc(ca),ne(!1),Te(ka),ye(i.CULL_FACE),Q(bn);function ye(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function ce(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Fe(F,xe){return p[F]!==xe?(i.bindFramebuffer(F,xe),p[F]=xe,n&&(F===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=xe),F===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=xe)),!0):!1}function qe(F,xe){let j=v,le=!1;if(F)if(j=x.get(xe),j===void 0&&(j=[],x.set(xe,j)),F.isWebGLMultipleRenderTargets){const ge=F.texture;if(j.length!==ge.length||j[0]!==i.COLOR_ATTACHMENT0){for(let Oe=0,je=ge.length;Oe<je;Oe++)j[Oe]=i.COLOR_ATTACHMENT0+Oe;j.length=ge.length,le=!0}}else j[0]!==i.COLOR_ATTACHMENT0&&(j[0]=i.COLOR_ATTACHMENT0,le=!0);else j[0]!==i.BACK&&(j[0]=i.BACK,le=!0);le&&(t.isWebGL2?i.drawBuffers(j):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(j))}function Re(F){return m!==F?(i.useProgram(F),m=F,!0):!1}const I={[di]:i.FUNC_ADD,[iu]:i.FUNC_SUBTRACT,[ru]:i.FUNC_REVERSE_SUBTRACT};if(n)I[qa]=i.MIN,I[Ya]=i.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(I[qa]=F.MIN_EXT,I[Ya]=F.MAX_EXT)}const se={[su]:i.ZERO,[au]:i.ONE,[ou]:i.SRC_COLOR,[al]:i.SRC_ALPHA,[du]:i.SRC_ALPHA_SATURATE,[hu]:i.DST_COLOR,[lu]:i.DST_ALPHA,[cu]:i.ONE_MINUS_SRC_COLOR,[ol]:i.ONE_MINUS_SRC_ALPHA,[fu]:i.ONE_MINUS_DST_COLOR,[uu]:i.ONE_MINUS_DST_ALPHA};function Q(F,xe,j,le,ge,Oe,je,Ke){if(F===bn){d===!0&&(ce(i.BLEND),d=!1);return}if(d===!1&&(ye(i.BLEND),d=!0),F!==nu){if(F!==_||Ke!==y){if((g!==di||T!==di)&&(i.blendEquation(i.FUNC_ADD),g=di,T=di),Ke)switch(F){case vi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Va:i.blendFunc(i.ONE,i.ONE);break;case Wa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Va:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Wa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}S=null,b=null,E=null,P=null,_=F,y=Ke}return}ge=ge||xe,Oe=Oe||j,je=je||le,(xe!==g||ge!==T)&&(i.blendEquationSeparate(I[xe],I[ge]),g=xe,T=ge),(j!==S||le!==b||Oe!==E||je!==P)&&(i.blendFuncSeparate(se[j],se[le],se[Oe],se[je]),S=j,b=le,E=Oe,P=je),_=F,y=!1}function ue(F,xe){F.side===Ot?ce(i.CULL_FACE):ye(i.CULL_FACE);let j=F.side===St;xe&&(j=!j),ne(j),F.blending===vi&&F.transparent===!1?Q(bn):Q(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),a.setMask(F.colorWrite);const le=F.stencilWrite;c.setTest(le),le&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ee(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ye(i.SAMPLE_ALPHA_TO_COVERAGE):ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function ne(F){M!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),M=F)}function Te(F){F!==$l?(ye(i.CULL_FACE),F!==L&&(F===ka?i.cullFace(i.BACK):F===eu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ce(i.CULL_FACE),L=F}function Me(F){F!==O&&(Z&&i.lineWidth(F),O=F)}function Ee(F,xe,j){F?(ye(i.POLYGON_OFFSET_FILL),(D!==xe||B!==j)&&(i.polygonOffset(xe,j),D=xe,B=j)):ce(i.POLYGON_OFFSET_FILL)}function we(F){F?ye(i.SCISSOR_TEST):ce(i.SCISSOR_TEST)}function Pe(F){F===void 0&&(F=i.TEXTURE0+H-1),te!==F&&(i.activeTexture(F),te=F)}function Ve(F,xe,j){j===void 0&&(te===null?j=i.TEXTURE0+H-1:j=te);let le=J[j];le===void 0&&(le={type:void 0,texture:void 0},J[j]=le),(le.type!==F||le.texture!==xe)&&(te!==j&&(i.activeTexture(j),te=j),i.bindTexture(F,xe||me[F]),le.type=F,le.texture=xe)}function R(){const F=J[te];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function A(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function he(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ae(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Y(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function N(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(F){k.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),k.copy(F))}function pe(F){G.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),G.copy(F))}function Se(F,xe){let j=f.get(xe);j===void 0&&(j=new WeakMap,f.set(xe,j));let le=j.get(F);le===void 0&&(le=i.getUniformBlockIndex(xe,F.name),j.set(F,le))}function Le(F,xe){const le=f.get(xe).get(F);u.get(xe)!==le&&(i.uniformBlockBinding(xe,le,F.__bindingPointIndex),u.set(xe,le))}function He(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},te=null,J={},p={},x=new WeakMap,v=[],m=null,d=!1,_=null,g=null,S=null,b=null,T=null,E=null,P=null,y=!1,M=null,L=null,O=null,D=null,B=null,k.set(0,0,i.canvas.width,i.canvas.height),G.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ye,disable:ce,bindFramebuffer:Fe,drawBuffers:qe,useProgram:Re,setBlending:Q,setMaterial:ue,setFlipSided:ne,setCullFace:Te,setLineWidth:Me,setPolygonOffset:Ee,setScissorTest:we,activeTexture:Pe,bindTexture:Ve,unbindTexture:R,compressedTexImage2D:A,compressedTexImage3D:q,texImage2D:N,texImage3D:ie,updateUBOMapping:Se,uniformBlockBinding:Le,texStorage2D:fe,texStorage3D:Y,texSubImage2D:ae,texSubImage3D:re,compressedTexSubImage2D:he,compressedTexSubImage3D:Ae,scissor:_e,viewport:pe,reset:He}}function lm(i,e,t,n,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let v;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,A){return d?new OffscreenCanvas(R,A):Ki("canvas")}function g(R,A,q,ae){let re=1;if((R.width>ae||R.height>ae)&&(re=ae/Math.max(R.width,R.height)),re<1||A===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const he=A?Ur:Math.floor,Ae=he(re*R.width),fe=he(re*R.height);v===void 0&&(v=_(Ae,fe));const Y=q?_(Ae,fe):v;return Y.width=Ae,Y.height=fe,Y.getContext("2d").drawImage(R,0,0,Ae,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Ae+"x"+fe+")."),Y}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function S(R){return da(R.width)&&da(R.height)}function b(R){return a?!1:R.wrapS!==Tt||R.wrapT!==Tt||R.minFilter!==_t&&R.minFilter!==ht}function T(R,A){return R.generateMipmaps&&A&&R.minFilter!==_t&&R.minFilter!==ht}function E(R){i.generateMipmap(R)}function P(R,A,q,ae,re=!1){if(a===!1)return A;if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let he=A;return A===i.RED&&(q===i.FLOAT&&(he=i.R32F),q===i.HALF_FLOAT&&(he=i.R16F),q===i.UNSIGNED_BYTE&&(he=i.R8)),A===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(he=i.R8UI),q===i.UNSIGNED_SHORT&&(he=i.R16UI),q===i.UNSIGNED_INT&&(he=i.R32UI),q===i.BYTE&&(he=i.R8I),q===i.SHORT&&(he=i.R16I),q===i.INT&&(he=i.R32I)),A===i.RG&&(q===i.FLOAT&&(he=i.RG32F),q===i.HALF_FLOAT&&(he=i.RG16F),q===i.UNSIGNED_BYTE&&(he=i.RG8)),A===i.RGBA&&(q===i.FLOAT&&(he=i.RGBA32F),q===i.HALF_FLOAT&&(he=i.RGBA16F),q===i.UNSIGNED_BYTE&&(he=ae===Ne&&re===!1?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(he=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(he=i.RGB5_A1)),(he===i.R16F||he===i.R32F||he===i.RG16F||he===i.RG32F||he===i.RGBA16F||he===i.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function y(R,A,q){return T(R,q)===!0||R.isFramebufferTexture&&R.minFilter!==_t&&R.minFilter!==ht?Math.log2(Math.max(A.width,A.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?A.mipmaps.length:1}function M(R){return R===_t||R===ja||R===Xr?i.NEAREST:i.LINEAR}function L(R){const A=R.target;A.removeEventListener("dispose",L),D(A),A.isVideoTexture&&x.delete(A)}function O(R){const A=R.target;A.removeEventListener("dispose",O),H(A)}function D(R){const A=n.get(R);if(A.__webglInit===void 0)return;const q=R.source,ae=m.get(q);if(ae){const re=ae[A.__cacheKey];re.usedTimes--,re.usedTimes===0&&B(R),Object.keys(ae).length===0&&m.delete(q)}n.remove(R)}function B(R){const A=n.get(R);i.deleteTexture(A.__webglTexture);const q=R.source,ae=m.get(q);delete ae[A.__cacheKey],o.memory.textures--}function H(R){const A=R.texture,q=n.get(R),ae=n.get(A);if(ae.__webglTexture!==void 0&&(i.deleteTexture(ae.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(q.__webglFramebuffer[re]))for(let he=0;he<q.__webglFramebuffer[re].length;he++)i.deleteFramebuffer(q.__webglFramebuffer[re][he]);else i.deleteFramebuffer(q.__webglFramebuffer[re]);q.__webglDepthbuffer&&i.deleteRenderbuffer(q.__webglDepthbuffer[re])}else{if(Array.isArray(q.__webglFramebuffer))for(let re=0;re<q.__webglFramebuffer.length;re++)i.deleteFramebuffer(q.__webglFramebuffer[re]);else i.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&i.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&i.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let re=0;re<q.__webglColorRenderbuffer.length;re++)q.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(q.__webglColorRenderbuffer[re]);q.__webglDepthRenderbuffer&&i.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let re=0,he=A.length;re<he;re++){const Ae=n.get(A[re]);Ae.__webglTexture&&(i.deleteTexture(Ae.__webglTexture),o.memory.textures--),n.remove(A[re])}n.remove(A),n.remove(R)}let Z=0;function X(){Z=0}function K(){const R=Z;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),Z+=1,R}function te(R){const A=[];return A.push(R.wrapS),A.push(R.wrapT),A.push(R.wrapR||0),A.push(R.magFilter),A.push(R.minFilter),A.push(R.anisotropy),A.push(R.internalFormat),A.push(R.format),A.push(R.type),A.push(R.generateMipmaps),A.push(R.premultiplyAlpha),A.push(R.flipY),A.push(R.unpackAlignment),A.push(R.colorSpace),A.join()}function J(R,A){const q=n.get(R);if(R.isVideoTexture&&Pe(R),R.isRenderTargetTexture===!1&&R.version>0&&q.__version!==R.version){const ae=R.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(q,R,A);return}}t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+A)}function C(R,A){const q=n.get(R);if(R.version>0&&q.__version!==R.version){Fe(q,R,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+A)}function U(R,A){const q=n.get(R);if(R.version>0&&q.__version!==R.version){Fe(q,R,A);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+A)}function k(R,A){const q=n.get(R);if(R.version>0&&q.__version!==R.version){qe(q,R,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+A)}const G={[qi]:i.REPEAT,[Tt]:i.CLAMP_TO_EDGE,[ha]:i.MIRRORED_REPEAT},oe={[_t]:i.NEAREST,[ja]:i.NEAREST_MIPMAP_NEAREST,[Xr]:i.NEAREST_MIPMAP_LINEAR,[ht]:i.LINEAR,[Ru]:i.LINEAR_MIPMAP_NEAREST,[Yi]:i.LINEAR_MIPMAP_LINEAR},me={[ku]:i.NEVER,[Zu]:i.ALWAYS,[Vu]:i.LESS,[Xu]:i.LEQUAL,[Wu]:i.EQUAL,[ju]:i.GEQUAL,[qu]:i.GREATER,[Yu]:i.NOTEQUAL};function ye(R,A,q){if(q?(i.texParameteri(R,i.TEXTURE_WRAP_S,G[A.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,G[A.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,G[A.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,oe[A.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,oe[A.minFilter])):(i.texParameteri(R,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(R,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(A.wrapS!==Tt||A.wrapT!==Tt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(R,i.TEXTURE_MAG_FILTER,M(A.magFilter)),i.texParameteri(R,i.TEXTURE_MIN_FILTER,M(A.minFilter)),A.minFilter!==_t&&A.minFilter!==ht&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,me[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ae=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===_t||A.minFilter!==Xr&&A.minFilter!==Yi||A.type===En&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===ji&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(i.texParameterf(R,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function ce(R,A){let q=!1;R.__webglInit===void 0&&(R.__webglInit=!0,A.addEventListener("dispose",L));const ae=A.source;let re=m.get(ae);re===void 0&&(re={},m.set(ae,re));const he=te(A);if(he!==R.__cacheKey){re[he]===void 0&&(re[he]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),re[he].usedTimes++;const Ae=re[R.__cacheKey];Ae!==void 0&&(re[R.__cacheKey].usedTimes--,Ae.usedTimes===0&&B(A)),R.__cacheKey=he,R.__webglTexture=re[he].texture}return q}function Fe(R,A,q){let ae=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ae=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ae=i.TEXTURE_3D);const re=ce(R,A),he=A.source;t.bindTexture(ae,R.__webglTexture,i.TEXTURE0+q);const Ae=n.get(he);if(he.version!==Ae.__version||re===!0){t.activeTexture(i.TEXTURE0+q),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const fe=b(A)&&S(A.image)===!1;let Y=g(A.image,fe,!1,u);Y=Ve(A,Y);const N=S(Y)||a,ie=s.convert(A.format,A.colorSpace);let _e=s.convert(A.type),pe=P(A.internalFormat,ie,_e,A.colorSpace);ye(ae,A,N);let Se;const Le=A.mipmaps,He=a&&A.isVideoTexture!==!0,F=Ae.__version===void 0||re===!0,xe=y(A,Y,N);if(A.isDepthTexture)pe=i.DEPTH_COMPONENT,a?A.type===En?pe=i.DEPTH_COMPONENT32F:A.type===yn?pe=i.DEPTH_COMPONENT24:A.type===zn?pe=i.DEPTH24_STENCIL8:pe=i.DEPTH_COMPONENT16:A.type===En&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Hn&&pe===i.DEPTH_COMPONENT&&A.type!==ya&&A.type!==yn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=yn,_e=s.convert(A.type)),A.format===Ei&&pe===i.DEPTH_COMPONENT&&(pe=i.DEPTH_STENCIL,A.type!==zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=zn,_e=s.convert(A.type))),F&&(He?t.texStorage2D(i.TEXTURE_2D,1,pe,Y.width,Y.height):t.texImage2D(i.TEXTURE_2D,0,pe,Y.width,Y.height,0,ie,_e,null));else if(A.isDataTexture)if(Le.length>0&&N){He&&F&&t.texStorage2D(i.TEXTURE_2D,xe,pe,Le[0].width,Le[0].height);for(let j=0,le=Le.length;j<le;j++)Se=Le[j],He?t.texSubImage2D(i.TEXTURE_2D,j,0,0,Se.width,Se.height,ie,_e,Se.data):t.texImage2D(i.TEXTURE_2D,j,pe,Se.width,Se.height,0,ie,_e,Se.data);A.generateMipmaps=!1}else He?(F&&t.texStorage2D(i.TEXTURE_2D,xe,pe,Y.width,Y.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Y.width,Y.height,ie,_e,Y.data)):t.texImage2D(i.TEXTURE_2D,0,pe,Y.width,Y.height,0,ie,_e,Y.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){He&&F&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,pe,Le[0].width,Le[0].height,Y.depth);for(let j=0,le=Le.length;j<le;j++)Se=Le[j],A.format!==Wt?ie!==null?He?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Se.width,Se.height,Y.depth,ie,Se.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,pe,Se.width,Se.height,Y.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Se.width,Se.height,Y.depth,ie,_e,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,pe,Se.width,Se.height,Y.depth,0,ie,_e,Se.data)}else{He&&F&&t.texStorage2D(i.TEXTURE_2D,xe,pe,Le[0].width,Le[0].height);for(let j=0,le=Le.length;j<le;j++)Se=Le[j],A.format!==Wt?ie!==null?He?t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,Se.width,Se.height,ie,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,j,pe,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?t.texSubImage2D(i.TEXTURE_2D,j,0,0,Se.width,Se.height,ie,_e,Se.data):t.texImage2D(i.TEXTURE_2D,j,pe,Se.width,Se.height,0,ie,_e,Se.data)}else if(A.isDataArrayTexture)He?(F&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,pe,Y.width,Y.height,Y.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,ie,_e,Y.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,pe,Y.width,Y.height,Y.depth,0,ie,_e,Y.data);else if(A.isData3DTexture)He?(F&&t.texStorage3D(i.TEXTURE_3D,xe,pe,Y.width,Y.height,Y.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,ie,_e,Y.data)):t.texImage3D(i.TEXTURE_3D,0,pe,Y.width,Y.height,Y.depth,0,ie,_e,Y.data);else if(A.isFramebufferTexture){if(F)if(He)t.texStorage2D(i.TEXTURE_2D,xe,pe,Y.width,Y.height);else{let j=Y.width,le=Y.height;for(let ge=0;ge<xe;ge++)t.texImage2D(i.TEXTURE_2D,ge,pe,j,le,0,ie,_e,null),j>>=1,le>>=1}}else if(Le.length>0&&N){He&&F&&t.texStorage2D(i.TEXTURE_2D,xe,pe,Le[0].width,Le[0].height);for(let j=0,le=Le.length;j<le;j++)Se=Le[j],He?t.texSubImage2D(i.TEXTURE_2D,j,0,0,ie,_e,Se):t.texImage2D(i.TEXTURE_2D,j,pe,ie,_e,Se);A.generateMipmaps=!1}else He?(F&&t.texStorage2D(i.TEXTURE_2D,xe,pe,Y.width,Y.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie,_e,Y)):t.texImage2D(i.TEXTURE_2D,0,pe,ie,_e,Y);T(A,N)&&E(ae),Ae.__version=he.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function qe(R,A,q){if(A.image.length!==6)return;const ae=ce(R,A),re=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+q);const he=n.get(re);if(re.version!==he.__version||ae===!0){t.activeTexture(i.TEXTURE0+q),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const Ae=A.isCompressedTexture||A.image[0].isCompressedTexture,fe=A.image[0]&&A.image[0].isDataTexture,Y=[];for(let j=0;j<6;j++)!Ae&&!fe?Y[j]=g(A.image[j],!1,!0,c):Y[j]=fe?A.image[j].image:A.image[j],Y[j]=Ve(A,Y[j]);const N=Y[0],ie=S(N)||a,_e=s.convert(A.format,A.colorSpace),pe=s.convert(A.type),Se=P(A.internalFormat,_e,pe,A.colorSpace),Le=a&&A.isVideoTexture!==!0,He=he.__version===void 0||ae===!0;let F=y(A,N,ie);ye(i.TEXTURE_CUBE_MAP,A,ie);let xe;if(Ae){Le&&He&&t.texStorage2D(i.TEXTURE_CUBE_MAP,F,Se,N.width,N.height);for(let j=0;j<6;j++){xe=Y[j].mipmaps;for(let le=0;le<xe.length;le++){const ge=xe[le];A.format!==Wt?_e!==null?Le?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,le,0,0,ge.width,ge.height,_e,ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,le,Se,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,le,0,0,ge.width,ge.height,_e,pe,ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,le,Se,ge.width,ge.height,0,_e,pe,ge.data)}}}else{xe=A.mipmaps,Le&&He&&(xe.length>0&&F++,t.texStorage2D(i.TEXTURE_CUBE_MAP,F,Se,Y[0].width,Y[0].height));for(let j=0;j<6;j++)if(fe){Le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Y[j].width,Y[j].height,_e,pe,Y[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Se,Y[j].width,Y[j].height,0,_e,pe,Y[j].data);for(let le=0;le<xe.length;le++){const Oe=xe[le].image[j].image;Le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,le+1,0,0,Oe.width,Oe.height,_e,pe,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,le+1,Se,Oe.width,Oe.height,0,_e,pe,Oe.data)}}else{Le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,_e,pe,Y[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Se,_e,pe,Y[j]);for(let le=0;le<xe.length;le++){const ge=xe[le];Le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,le+1,0,0,_e,pe,ge.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,le+1,Se,_e,pe,ge.image[j])}}}T(A,ie)&&E(i.TEXTURE_CUBE_MAP),he.__version=re.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function Re(R,A,q,ae,re,he){const Ae=s.convert(q.format,q.colorSpace),fe=s.convert(q.type),Y=P(q.internalFormat,Ae,fe,q.colorSpace);if(!n.get(A).__hasExternalTextures){const ie=Math.max(1,A.width>>he),_e=Math.max(1,A.height>>he);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,he,Y,ie,_e,A.depth,0,Ae,fe,null):t.texImage2D(re,he,Y,ie,_e,0,Ae,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),we(A)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,re,n.get(q).__webglTexture,0,Ee(A)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ae,re,n.get(q).__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function I(R,A,q){if(i.bindRenderbuffer(i.RENDERBUFFER,R),A.depthBuffer&&!A.stencilBuffer){let ae=i.DEPTH_COMPONENT16;if(q||we(A)){const re=A.depthTexture;re&&re.isDepthTexture&&(re.type===En?ae=i.DEPTH_COMPONENT32F:re.type===yn&&(ae=i.DEPTH_COMPONENT24));const he=Ee(A);we(A)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,ae,A.width,A.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,he,ae,A.width,A.height)}else i.renderbufferStorage(i.RENDERBUFFER,ae,A.width,A.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,R)}else if(A.depthBuffer&&A.stencilBuffer){const ae=Ee(A);q&&we(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,i.DEPTH24_STENCIL8,A.width,A.height):we(A)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,i.DEPTH24_STENCIL8,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,R)}else{const ae=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let re=0;re<ae.length;re++){const he=ae[re],Ae=s.convert(he.format,he.colorSpace),fe=s.convert(he.type),Y=P(he.internalFormat,Ae,fe,he.colorSpace),N=Ee(A);q&&we(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,N,Y,A.width,A.height):we(A)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,N,Y,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Y,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function se(R,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),J(A.depthTexture,0);const ae=n.get(A.depthTexture).__webglTexture,re=Ee(A);if(A.depthTexture.format===Hn)we(A)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0);else if(A.depthTexture.format===Ei)we(A)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Q(R){const A=n.get(R),q=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!A.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");se(A.__webglFramebuffer,R)}else if(q){A.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[ae]),A.__webglDepthbuffer[ae]=i.createRenderbuffer(),I(A.__webglDepthbuffer[ae],R,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=i.createRenderbuffer(),I(A.__webglDepthbuffer,R,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(R,A,q){const ae=n.get(R);A!==void 0&&Re(ae.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Q(R)}function ne(R){const A=R.texture,q=n.get(R),ae=n.get(A);R.addEventListener("dispose",O),R.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture()),ae.__version=A.version,o.memory.textures++);const re=R.isWebGLCubeRenderTarget===!0,he=R.isWebGLMultipleRenderTargets===!0,Ae=S(R)||a;if(re){q.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(a&&A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer[fe]=[];for(let Y=0;Y<A.mipmaps.length;Y++)q.__webglFramebuffer[fe][Y]=i.createFramebuffer()}else q.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer=[];for(let fe=0;fe<A.mipmaps.length;fe++)q.__webglFramebuffer[fe]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(he)if(r.drawBuffers){const fe=R.texture;for(let Y=0,N=fe.length;Y<N;Y++){const ie=n.get(fe[Y]);ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&we(R)===!1){const fe=he?A:[A];q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Y=0;Y<fe.length;Y++){const N=fe[Y];q.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[Y]);const ie=s.convert(N.format,N.colorSpace),_e=s.convert(N.type),pe=P(N.internalFormat,ie,_e,N.colorSpace,R.isXRRenderTarget===!0),Se=Ee(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,pe,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,q.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),I(q.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture),ye(i.TEXTURE_CUBE_MAP,A,Ae);for(let fe=0;fe<6;fe++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let Y=0;Y<A.mipmaps.length;Y++)Re(q.__webglFramebuffer[fe][Y],R,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Y);else Re(q.__webglFramebuffer[fe],R,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);T(A,Ae)&&E(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){const fe=R.texture;for(let Y=0,N=fe.length;Y<N;Y++){const ie=fe[Y],_e=n.get(ie);t.bindTexture(i.TEXTURE_2D,_e.__webglTexture),ye(i.TEXTURE_2D,ie,Ae),Re(q.__webglFramebuffer,R,ie,i.COLOR_ATTACHMENT0+Y,i.TEXTURE_2D,0),T(ie,Ae)&&E(i.TEXTURE_2D)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?fe=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,ae.__webglTexture),ye(fe,A,Ae),a&&A.mipmaps&&A.mipmaps.length>0)for(let Y=0;Y<A.mipmaps.length;Y++)Re(q.__webglFramebuffer[Y],R,A,i.COLOR_ATTACHMENT0,fe,Y);else Re(q.__webglFramebuffer,R,A,i.COLOR_ATTACHMENT0,fe,0);T(A,Ae)&&E(fe),t.unbindTexture()}R.depthBuffer&&Q(R)}function Te(R){const A=S(R)||a,q=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ae=0,re=q.length;ae<re;ae++){const he=q[ae];if(T(he,A)){const Ae=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,fe=n.get(he).__webglTexture;t.bindTexture(Ae,fe),E(Ae),t.unbindTexture()}}}function Me(R){if(a&&R.samples>0&&we(R)===!1){const A=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],q=R.width,ae=R.height;let re=i.COLOR_BUFFER_BIT;const he=[],Ae=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(R),Y=R.isWebGLMultipleRenderTargets===!0;if(Y)for(let N=0;N<A.length;N++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let N=0;N<A.length;N++){he.push(i.COLOR_ATTACHMENT0+N),R.depthBuffer&&he.push(Ae);const ie=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(ie===!1&&(R.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),Y&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[N]),ie===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ae]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ae])),Y){const _e=n.get(A[N]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,_e,0)}i.blitFramebuffer(0,0,q,ae,0,0,q,ae,re,i.NEAREST),p&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let N=0;N<A.length;N++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.RENDERBUFFER,fe.__webglColorRenderbuffer[N]);const ie=n.get(A[N]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.TEXTURE_2D,ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function Ee(R){return Math.min(f,R.samples)}function we(R){const A=n.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Pe(R){const A=o.render.frame;x.get(R)!==A&&(x.set(R,A),R.update())}function Ve(R,A){const q=R.colorSpace,ae=R.format,re=R.type;return R.isCompressedTexture===!0||R.format===fa||q!==Qt&&q!==kn&&(q===Ne?a===!1?e.has("EXT_sRGB")===!0&&ae===Wt?(R.format=fa,R.minFilter=ht,R.generateMipmaps=!1):A=Sl.sRGBToLinear(A):(ae!==Wt||re!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),A}this.allocateTextureUnit=K,this.resetTextureUnits=X,this.setTexture2D=J,this.setTexture2DArray=C,this.setTexture3D=U,this.setTextureCube=k,this.rebindTextures=ue,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=we}function um(i,e,t){const n=t.isWebGL2;function r(s,o=kn){let a;if(s===An)return i.UNSIGNED_BYTE;if(s===hl)return i.UNSIGNED_SHORT_4_4_4_4;if(s===fl)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Cu)return i.BYTE;if(s===Pu)return i.SHORT;if(s===ya)return i.UNSIGNED_SHORT;if(s===ul)return i.INT;if(s===yn)return i.UNSIGNED_INT;if(s===En)return i.FLOAT;if(s===ji)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Lu)return i.ALPHA;if(s===Wt)return i.RGBA;if(s===Du)return i.LUMINANCE;if(s===Uu)return i.LUMINANCE_ALPHA;if(s===Hn)return i.DEPTH_COMPONENT;if(s===Ei)return i.DEPTH_STENCIL;if(s===fa)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Iu)return i.RED;if(s===dl)return i.RED_INTEGER;if(s===Nu)return i.RG;if(s===pl)return i.RG_INTEGER;if(s===ml)return i.RGBA_INTEGER;if(s===qr||s===Yr||s===jr||s===Zr)if(o===Ne)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===qr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Yr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===jr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Zr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===qr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Yr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===jr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Zr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Za||s===Ka||s===Ja||s===Qa)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Za)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ka)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ja)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Qa)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Fu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===$a||s===eo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===$a)return o===Ne?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===eo)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===to||s===no||s===io||s===ro||s===so||s===ao||s===oo||s===co||s===lo||s===uo||s===ho||s===fo||s===po||s===mo)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===to)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===no)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===io)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ro)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===so)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ao)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===oo)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===co)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===lo)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===uo)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ho)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===fo)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===po)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===mo)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Kr)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Kr)return o===Ne?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Ou||s===xo||s===go||s===vo)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Kr)return a.COMPRESSED_RED_RGTC1_EXT;if(s===xo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===go)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===vo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===zn?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class hm extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Tr extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fm={type:"move"};class vs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,x=.005;c.inputState.pinching&&h>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fm)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Tr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class dm extends Ct{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:Hn,u!==Hn&&u!==Ei)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Hn&&(n=yn),n===void 0&&u===Ei&&(n=zn),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:_t,this.minFilter=l!==void 0?l:_t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class pm extends Xn{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,x=null;const v=t.getContextAttributes();let m=null,d=null;const _=[],g=[],S=new Rt;S.layers.enable(1),S.viewport=new $e;const b=new Rt;b.layers.enable(2),b.viewport=new $e;const T=[S,b],E=new hm;E.layers.enable(1),E.layers.enable(2);let P=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(C){let U=_[C];return U===void 0&&(U=new vs,_[C]=U),U.getTargetRaySpace()},this.getControllerGrip=function(C){let U=_[C];return U===void 0&&(U=new vs,_[C]=U),U.getGripSpace()},this.getHand=function(C){let U=_[C];return U===void 0&&(U=new vs,_[C]=U),U.getHandSpace()};function M(C){const U=g.indexOf(C.inputSource);if(U===-1)return;const k=_[U];k!==void 0&&(k.update(C.inputSource,C.frame,c||o),k.dispatchEvent({type:C.type,data:C.inputSource}))}function L(){r.removeEventListener("select",M),r.removeEventListener("selectstart",M),r.removeEventListener("selectend",M),r.removeEventListener("squeeze",M),r.removeEventListener("squeezestart",M),r.removeEventListener("squeezeend",M),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",O);for(let C=0;C<_.length;C++){const U=g[C];U!==null&&(g[C]=null,_[C].disconnect(U))}P=null,y=null,e.setRenderTarget(m),p=null,h=null,f=null,r=null,d=null,J.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(C){s=C,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(C){a=C,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(C){c=C},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(C){if(r=C,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",M),r.addEventListener("selectstart",M),r.addEventListener("selectend",M),r.addEventListener("squeeze",M),r.addEventListener("squeezestart",M),r.addEventListener("squeezeend",M),r.addEventListener("end",L),r.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const U={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,U),r.updateRenderState({baseLayer:p}),d=new xn(p.framebufferWidth,p.framebufferHeight,{format:Wt,type:An,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let U=null,k=null,G=null;v.depth&&(G=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,U=v.stencil?Ei:Hn,k=v.stencil?zn:yn);const oe={colorFormat:t.RGBA8,depthFormat:G,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(oe),r.updateRenderState({layers:[h]}),d=new xn(h.textureWidth,h.textureHeight,{format:Wt,type:An,depthTexture:new dm(h.textureWidth,h.textureHeight,k,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const me=e.properties.get(d);me.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),J.setContext(r),J.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function O(C){for(let U=0;U<C.removed.length;U++){const k=C.removed[U],G=g.indexOf(k);G>=0&&(g[G]=null,_[G].disconnect(k))}for(let U=0;U<C.added.length;U++){const k=C.added[U];let G=g.indexOf(k);if(G===-1){for(let me=0;me<_.length;me++)if(me>=g.length){g.push(k),G=me;break}else if(g[me]===null){g[me]=k,G=me;break}if(G===-1)break}const oe=_[G];oe&&oe.connect(k)}}const D=new z,B=new z;function H(C,U,k){D.setFromMatrixPosition(U.matrixWorld),B.setFromMatrixPosition(k.matrixWorld);const G=D.distanceTo(B),oe=U.projectionMatrix.elements,me=k.projectionMatrix.elements,ye=oe[14]/(oe[10]-1),ce=oe[14]/(oe[10]+1),Fe=(oe[9]+1)/oe[5],qe=(oe[9]-1)/oe[5],Re=(oe[8]-1)/oe[0],I=(me[8]+1)/me[0],se=ye*Re,Q=ye*I,ue=G/(-Re+I),ne=ue*-Re;U.matrixWorld.decompose(C.position,C.quaternion,C.scale),C.translateX(ne),C.translateZ(ue),C.matrixWorld.compose(C.position,C.quaternion,C.scale),C.matrixWorldInverse.copy(C.matrixWorld).invert();const Te=ye+ue,Me=ce+ue,Ee=se-ne,we=Q+(G-ne),Pe=Fe*ce/Me*Te,Ve=qe*ce/Me*Te;C.projectionMatrix.makePerspective(Ee,we,Pe,Ve,Te,Me),C.projectionMatrixInverse.copy(C.projectionMatrix).invert()}function Z(C,U){U===null?C.matrixWorld.copy(C.matrix):C.matrixWorld.multiplyMatrices(U.matrixWorld,C.matrix),C.matrixWorldInverse.copy(C.matrixWorld).invert()}this.updateCamera=function(C){if(r===null)return;E.near=b.near=S.near=C.near,E.far=b.far=S.far=C.far,(P!==E.near||y!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),P=E.near,y=E.far);const U=C.parent,k=E.cameras;Z(E,U);for(let G=0;G<k.length;G++)Z(k[G],U);k.length===2?H(E,S,b):E.projectionMatrix.copy(S.projectionMatrix),X(C,E,U)};function X(C,U,k){k===null?C.matrix.copy(U.matrixWorld):(C.matrix.copy(k.matrixWorld),C.matrix.invert(),C.matrix.multiply(U.matrixWorld)),C.matrix.decompose(C.position,C.quaternion,C.scale),C.updateMatrixWorld(!0);const G=C.children;for(let oe=0,me=G.length;oe<me;oe++)G[oe].updateMatrixWorld(!0);C.projectionMatrix.copy(U.projectionMatrix),C.projectionMatrixInverse.copy(U.projectionMatrixInverse),C.isPerspectiveCamera&&(C.fov=Zi*2*Math.atan(1/C.projectionMatrix.elements[5]),C.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(C){l=C,h!==null&&(h.fixedFoveation=C),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=C)};let K=null;function te(C,U){if(u=U.getViewerPose(c||o),x=U,u!==null){const k=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let G=!1;k.length!==E.cameras.length&&(E.cameras.length=0,G=!0);for(let oe=0;oe<k.length;oe++){const me=k[oe];let ye=null;if(p!==null)ye=p.getViewport(me);else{const Fe=f.getViewSubImage(h,me);ye=Fe.viewport,oe===0&&(e.setRenderTargetTextures(d,Fe.colorTexture,h.ignoreDepthValues?void 0:Fe.depthStencilTexture),e.setRenderTarget(d))}let ce=T[oe];ce===void 0&&(ce=new Rt,ce.layers.enable(oe),ce.viewport=new $e,T[oe]=ce),ce.matrix.fromArray(me.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(me.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(ye.x,ye.y,ye.width,ye.height),oe===0&&(E.matrix.copy(ce.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),G===!0&&E.cameras.push(ce)}}for(let k=0;k<_.length;k++){const G=g[k],oe=_[k];G!==null&&oe!==void 0&&oe.update(G,U,c||o)}K&&K(C,U),U.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:U}),x=null}const J=new Rl;J.setAnimationLoop(te),this.setAnimationLoop=function(C){K=C},this.dispose=function(){}}}function mm(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Al(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,_,g,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(s(m,d),x(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),v(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,_,g):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===St&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===St&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=e.get(d).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const g=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*g,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,_,g){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=g*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===St&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const _=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function xm(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,g){const S=g.program;n.uniformBlockBinding(_,S)}function c(_,g){let S=r[_.id];S===void 0&&(x(_),S=u(_),r[_.id]=S,_.addEventListener("dispose",m));const b=g.program;n.updateUBOMapping(_,b);const T=e.render.frame;s[_.id]!==T&&(h(_),s[_.id]=T)}function u(_){const g=f();_.__bindingPointIndex=g;const S=i.createBuffer(),b=_.__size,T=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,b,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,g,S),S}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const g=r[_.id],S=_.uniforms,b=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,g);for(let T=0,E=S.length;T<E;T++){const P=S[T];if(p(P,T,b)===!0){const y=P.__offset,M=Array.isArray(P.value)?P.value:[P.value];let L=0;for(let O=0;O<M.length;O++){const D=M[O],B=v(D);typeof D=="number"?(P.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,y+L,P.__data)):D.isMatrix3?(P.__data[0]=D.elements[0],P.__data[1]=D.elements[1],P.__data[2]=D.elements[2],P.__data[3]=D.elements[0],P.__data[4]=D.elements[3],P.__data[5]=D.elements[4],P.__data[6]=D.elements[5],P.__data[7]=D.elements[0],P.__data[8]=D.elements[6],P.__data[9]=D.elements[7],P.__data[10]=D.elements[8],P.__data[11]=D.elements[0]):(D.toArray(P.__data,L),L+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,y,P.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,g,S){const b=_.value;if(S[g]===void 0){if(typeof b=="number")S[g]=b;else{const T=Array.isArray(b)?b:[b],E=[];for(let P=0;P<T.length;P++)E.push(T[P].clone());S[g]=E}return!0}else if(typeof b=="number"){if(S[g]!==b)return S[g]=b,!0}else{const T=Array.isArray(S[g])?S[g]:[S[g]],E=Array.isArray(b)?b:[b];for(let P=0;P<T.length;P++){const y=T[P];if(y.equals(E[P])===!1)return y.copy(E[P]),!0}}return!1}function x(_){const g=_.uniforms;let S=0;const b=16;let T=0;for(let E=0,P=g.length;E<P;E++){const y=g[E],M={boundary:0,storage:0},L=Array.isArray(y.value)?y.value:[y.value];for(let O=0,D=L.length;O<D;O++){const B=L[O],H=v(B);M.boundary+=H.boundary,M.storage+=H.storage}if(y.__data=new Float32Array(M.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=S,E>0){T=S%b;const O=b-T;T!==0&&O-M.boundary<0&&(S+=b-T,y.__offset=S)}S+=M.storage}return T=S%b,T>0&&(S+=b-T),_.__size=S,_.__cache={},this}function v(_){const g={boundary:0,storage:0};return typeof _=="number"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function m(_){const g=_.target;g.removeEventListener("dispose",m);const S=o.indexOf(g.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function d(){for(const _ in r)i.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}function gm(){const i=Ki("canvas");return i.style.display="block",i}class Il{constructor(e={}){const{canvas:t=gm(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),x=new Int32Array(4);let v=null,m=null;const d=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ne,this._useLegacyLights=!1,this.toneMapping=Tn,this.toneMappingExposure=1;const g=this;let S=!1,b=0,T=0,E=null,P=-1,y=null;const M=new $e,L=new $e;let O=null;const D=new Ze(0);let B=0,H=t.width,Z=t.height,X=1,K=null,te=null;const J=new $e(0,0,H,Z),C=new $e(0,0,H,Z);let U=!1;const k=new Ca;let G=!1,oe=!1,me=null;const ye=new at,ce=new de,Fe=new z,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Re(){return E===null?X:1}let I=n;function se(w,W){for(let ee=0;ee<w.length;ee++){const V=w[ee],$=t.getContext(V,W);if($!==null)return $}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ma}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",j,!1),t.addEventListener("webglcontextcreationerror",le,!1),I===null){const W=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&W.shift(),I=se(W,w),I===null)throw se(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Q,ue,ne,Te,Me,Ee,we,Pe,Ve,R,A,q,ae,re,he,Ae,fe,Y,N,ie,_e,pe,Se,Le;function He(){Q=new w0(I),ue=new M0(I,Q,e),Q.init(ue),pe=new um(I,Q,ue),ne=new cm(I,Q,ue),Te=new P0(I),Me=new jp,Ee=new lm(I,Q,ne,Me,ue,pe,Te),we=new E0(g),Pe=new A0(g),Ve=new zh(I,ue),Se=new _0(I,Q,Ve,ue),R=new R0(I,Ve,Te,Se),A=new I0(I,R,Ve,Te),N=new U0(I,ue,Ee),Ae=new y0(Me),q=new Yp(g,we,Pe,Q,ue,Se,Ae),ae=new mm(g,Me),re=new Kp,he=new nm(Q,ue),Y=new v0(g,we,Pe,ne,A,h,l),fe=new om(g,A,ue),Le=new xm(I,Te,ue,ne),ie=new S0(I,Q,Te,ue),_e=new C0(I,Q,Te,ue),Te.programs=q.programs,g.capabilities=ue,g.extensions=Q,g.properties=Me,g.renderLists=re,g.shadowMap=fe,g.state=ne,g.info=Te}He();const F=new pm(g,I);this.xr=F,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=Q.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Q.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(w){w!==void 0&&(X=w,this.setSize(H,Z,!1))},this.getSize=function(w){return w.set(H,Z)},this.setSize=function(w,W,ee=!0){if(F.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=w,Z=W,t.width=Math.floor(w*X),t.height=Math.floor(W*X),ee===!0&&(t.style.width=w+"px",t.style.height=W+"px"),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(H*X,Z*X).floor()},this.setDrawingBufferSize=function(w,W,ee){H=w,Z=W,X=ee,t.width=Math.floor(w*ee),t.height=Math.floor(W*ee),this.setViewport(0,0,w,W)},this.getCurrentViewport=function(w){return w.copy(M)},this.getViewport=function(w){return w.copy(J)},this.setViewport=function(w,W,ee,V){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,W,ee,V),ne.viewport(M.copy(J).multiplyScalar(X).floor())},this.getScissor=function(w){return w.copy(C)},this.setScissor=function(w,W,ee,V){w.isVector4?C.set(w.x,w.y,w.z,w.w):C.set(w,W,ee,V),ne.scissor(L.copy(C).multiplyScalar(X).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(w){ne.setScissorTest(U=w)},this.setOpaqueSort=function(w){K=w},this.setTransparentSort=function(w){te=w},this.getClearColor=function(w){return w.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor.apply(Y,arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha.apply(Y,arguments)},this.clear=function(w=!0,W=!0,ee=!0){let V=0;if(w){let $=!1;if(E!==null){const be=E.texture.format;$=be===ml||be===pl||be===dl}if($){const be=E.texture.type,Ce=be===An||be===yn||be===ya||be===zn||be===hl||be===fl,Ue=Y.getClearColor(),Ie=Y.getClearAlpha(),We=Ue.r,De=Ue.g,Be=Ue.b;Ce?(p[0]=We,p[1]=De,p[2]=Be,p[3]=Ie,I.clearBufferuiv(I.COLOR,0,p)):(x[0]=We,x[1]=De,x[2]=Be,x[3]=Ie,I.clearBufferiv(I.COLOR,0,x))}else V|=I.COLOR_BUFFER_BIT}W&&(V|=I.DEPTH_BUFFER_BIT),ee&&(V|=I.STENCIL_BUFFER_BIT),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",j,!1),t.removeEventListener("webglcontextcreationerror",le,!1),re.dispose(),he.dispose(),Me.dispose(),we.dispose(),Pe.dispose(),A.dispose(),Se.dispose(),Le.dispose(),q.dispose(),F.dispose(),F.removeEventListener("sessionstart",Je),F.removeEventListener("sessionend",Pt),me&&(me.dispose(),me=null),dt.stop()};function xe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=Te.autoReset,W=fe.enabled,ee=fe.autoUpdate,V=fe.needsUpdate,$=fe.type;He(),Te.autoReset=w,fe.enabled=W,fe.autoUpdate=ee,fe.needsUpdate=V,fe.type=$}function le(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ge(w){const W=w.target;W.removeEventListener("dispose",ge),Oe(W)}function Oe(w){je(w),Me.remove(w)}function je(w){const W=Me.get(w).programs;W!==void 0&&(W.forEach(function(ee){q.releaseProgram(ee)}),w.isShaderMaterial&&q.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,ee,V,$,be){W===null&&(W=qe);const Ce=$.isMesh&&$.matrixWorld.determinant()<0,Ue=Zl(w,W,ee,V,$);ne.setMaterial(V,Ce);let Ie=ee.index,We=1;if(V.wireframe===!0){if(Ie=R.getWireframeAttribute(ee),Ie===void 0)return;We=2}const De=ee.drawRange,Be=ee.attributes.position;let et=De.start*We,tt=(De.start+De.count)*We;be!==null&&(et=Math.max(et,be.start*We),tt=Math.min(tt,(be.start+be.count)*We)),Ie!==null?(et=Math.max(et,0),tt=Math.min(tt,Ie.count)):Be!=null&&(et=Math.max(et,0),tt=Math.min(tt,Be.count));const Nt=tt-et;if(Nt<0||Nt===1/0)return;Se.setup($,V,Ue,ee,Ie);let en,it=ie;if(Ie!==null&&(en=Ve.get(Ie),it=_e,it.setIndex(en)),$.isMesh)V.wireframe===!0?(ne.setLineWidth(V.wireframeLinewidth*Re()),it.setMode(I.LINES)):it.setMode(I.TRIANGLES);else if($.isLine){let Xe=V.linewidth;Xe===void 0&&(Xe=1),ne.setLineWidth(Xe*Re()),$.isLineSegments?it.setMode(I.LINES):$.isLineLoop?it.setMode(I.LINE_LOOP):it.setMode(I.LINE_STRIP)}else $.isPoints?it.setMode(I.POINTS):$.isSprite&&it.setMode(I.TRIANGLES);if($.isInstancedMesh)it.renderInstances(et,Nt,$.count);else if(ee.isInstancedBufferGeometry){const Xe=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Gr=Math.min(ee.instanceCount,Xe);it.renderInstances(et,Nt,Gr)}else it.render(et,Nt)},this.compile=function(w,W){function ee(V,$,be){V.transparent===!0&&V.side===Ot&&V.forceSinglePass===!1?(V.side=St,V.needsUpdate=!0,rr(V,$,be),V.side=mn,V.needsUpdate=!0,rr(V,$,be),V.side=Ot):rr(V,$,be)}m=he.get(w),m.init(),_.push(m),w.traverseVisible(function(V){V.isLight&&V.layers.test(W.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(g._useLegacyLights),w.traverse(function(V){const $=V.material;if($)if(Array.isArray($))for(let be=0;be<$.length;be++){const Ce=$[be];ee(Ce,w,V)}else ee($,w,V)}),_.pop(),m=null};let Ke=null;function qt(w){Ke&&Ke(w)}function Je(){dt.stop()}function Pt(){dt.start()}const dt=new Rl;dt.setAnimationLoop(qt),typeof self<"u"&&dt.setContext(self),this.setAnimationLoop=function(w){Ke=w,F.setAnimationLoop(w),w===null?dt.stop():dt.start()},F.addEventListener("sessionstart",Je),F.addEventListener("sessionend",Pt),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),F.enabled===!0&&F.isPresenting===!0&&(F.cameraAutoUpdate===!0&&F.updateCamera(W),W=F.getCamera()),w.isScene===!0&&w.onBeforeRender(g,w,W,E),m=he.get(w,_.length),m.init(),_.push(m),ye.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),k.setFromProjectionMatrix(ye),oe=this.localClippingEnabled,G=Ae.init(this.clippingPlanes,oe),v=re.get(w,d.length),v.init(),d.push(v),Li(w,W,0,g.sortObjects),v.finish(),g.sortObjects===!0&&v.sort(K,te),this.info.render.frame++,G===!0&&Ae.beginShadows();const ee=m.state.shadowsArray;if(fe.render(ee,w,W),G===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),Y.render(v,w),m.setupLights(g._useLegacyLights),W.isArrayCamera){const V=W.cameras;for(let $=0,be=V.length;$<be;$++){const Ce=V[$];xt(v,w,Ce,Ce.viewport)}}else xt(v,w,W);E!==null&&(Ee.updateMultisampleRenderTarget(E),Ee.updateRenderTargetMipmap(E)),w.isScene===!0&&w.onAfterRender(g,w,W),Se.resetDefaultState(),P=-1,y=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function Li(w,W,ee,V){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)ee=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||k.intersectsSprite(w)){V&&Fe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ye);const Ce=A.update(w),Ue=w.material;Ue.visible&&v.push(w,Ce,Ue,ee,Fe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||k.intersectsObject(w))){const Ce=A.update(w),Ue=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Fe.copy(w.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Fe.copy(Ce.boundingSphere.center)),Fe.applyMatrix4(w.matrixWorld).applyMatrix4(ye)),Array.isArray(Ue)){const Ie=Ce.groups;for(let We=0,De=Ie.length;We<De;We++){const Be=Ie[We],et=Ue[Be.materialIndex];et&&et.visible&&v.push(w,Ce,et,ee,Fe.z,Be)}}else Ue.visible&&v.push(w,Ce,Ue,ee,Fe.z,null)}}const be=w.children;for(let Ce=0,Ue=be.length;Ce<Ue;Ce++)Li(be[Ce],W,ee,V)}function xt(w,W,ee,V){const $=w.opaque,be=w.transmissive,Ce=w.transparent;m.setupLightsView(ee),G===!0&&Ae.setGlobalState(g.clippingPlanes,ee),be.length>0&&Yt($,be,W,ee),V&&ne.viewport(M.copy(V)),$.length>0&&Rn($,W,ee),be.length>0&&Rn(be,W,ee),Ce.length>0&&Rn(Ce,W,ee),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function Yt(w,W,ee,V){const $=ue.isWebGL2;me===null&&(me=new xn(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")?ji:An,minFilter:Yi,samples:$?4:0})),g.getDrawingBufferSize(ce),$?me.setSize(ce.x,ce.y):me.setSize(Ur(ce.x),Ur(ce.y));const be=g.getRenderTarget();g.setRenderTarget(me),g.getClearColor(D),B=g.getClearAlpha(),B<1&&g.setClearColor(16777215,.5),g.clear();const Ce=g.toneMapping;g.toneMapping=Tn,Rn(w,ee,V),Ee.updateMultisampleRenderTarget(me),Ee.updateRenderTargetMipmap(me);let Ue=!1;for(let Ie=0,We=W.length;Ie<We;Ie++){const De=W[Ie],Be=De.object,et=De.geometry,tt=De.material,Nt=De.group;if(tt.side===Ot&&Be.layers.test(V.layers)){const en=tt.side;tt.side=St,tt.needsUpdate=!0,ir(Be,ee,V,et,tt,Nt),tt.side=en,tt.needsUpdate=!0,Ue=!0}}Ue===!0&&(Ee.updateMultisampleRenderTarget(me),Ee.updateRenderTargetMipmap(me)),g.setRenderTarget(be),g.setClearColor(D,B),g.toneMapping=Ce}function Rn(w,W,ee){const V=W.isScene===!0?W.overrideMaterial:null;for(let $=0,be=w.length;$<be;$++){const Ce=w[$],Ue=Ce.object,Ie=Ce.geometry,We=V===null?Ce.material:V,De=Ce.group;Ue.layers.test(ee.layers)&&ir(Ue,W,ee,Ie,We,De)}}function ir(w,W,ee,V,$,be){w.onBeforeRender(g,W,ee,V,$,be),w.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),$.onBeforeRender(g,W,ee,V,w,be),$.transparent===!0&&$.side===Ot&&$.forceSinglePass===!1?($.side=St,$.needsUpdate=!0,g.renderBufferDirect(ee,W,V,$,w,be),$.side=mn,$.needsUpdate=!0,g.renderBufferDirect(ee,W,V,$,w,be),$.side=Ot):g.renderBufferDirect(ee,W,V,$,w,be),w.onAfterRender(g,W,ee,V,$,be)}function rr(w,W,ee){W.isScene!==!0&&(W=qe);const V=Me.get(w),$=m.state.lights,be=m.state.shadowsArray,Ce=$.state.version,Ue=q.getParameters(w,$.state,be,W,ee),Ie=q.getProgramCacheKey(Ue);let We=V.programs;V.environment=w.isMeshStandardMaterial?W.environment:null,V.fog=W.fog,V.envMap=(w.isMeshStandardMaterial?Pe:we).get(w.envMap||V.environment),We===void 0&&(w.addEventListener("dispose",ge),We=new Map,V.programs=We);let De=We.get(Ie);if(De!==void 0){if(V.currentProgram===De&&V.lightsStateVersion===Ce)return za(w,Ue),De}else Ue.uniforms=q.getUniforms(w),w.onBuild(ee,Ue,g),w.onBeforeCompile(Ue,g),De=q.acquireProgram(Ue,Ie),We.set(Ie,De),V.uniforms=Ue.uniforms;const Be=V.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Be.clippingPlanes=Ae.uniform),za(w,Ue),V.needsLights=Jl(w),V.lightsStateVersion=Ce,V.needsLights&&(Be.ambientLightColor.value=$.state.ambient,Be.lightProbe.value=$.state.probe,Be.directionalLights.value=$.state.directional,Be.directionalLightShadows.value=$.state.directionalShadow,Be.spotLights.value=$.state.spot,Be.spotLightShadows.value=$.state.spotShadow,Be.rectAreaLights.value=$.state.rectArea,Be.ltc_1.value=$.state.rectAreaLTC1,Be.ltc_2.value=$.state.rectAreaLTC2,Be.pointLights.value=$.state.point,Be.pointLightShadows.value=$.state.pointShadow,Be.hemisphereLights.value=$.state.hemi,Be.directionalShadowMap.value=$.state.directionalShadowMap,Be.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Be.spotShadowMap.value=$.state.spotShadowMap,Be.spotLightMatrix.value=$.state.spotLightMatrix,Be.spotLightMap.value=$.state.spotLightMap,Be.pointShadowMap.value=$.state.pointShadowMap,Be.pointShadowMatrix.value=$.state.pointShadowMatrix);const et=De.getUniforms(),tt=Pr.seqWithValue(et.seq,Be);return V.currentProgram=De,V.uniformsList=tt,De}function za(w,W){const ee=Me.get(w);ee.outputColorSpace=W.outputColorSpace,ee.instancing=W.instancing,ee.instancingColor=W.instancingColor,ee.skinning=W.skinning,ee.morphTargets=W.morphTargets,ee.morphNormals=W.morphNormals,ee.morphColors=W.morphColors,ee.morphTargetsCount=W.morphTargetsCount,ee.numClippingPlanes=W.numClippingPlanes,ee.numIntersection=W.numClipIntersection,ee.vertexAlphas=W.vertexAlphas,ee.vertexTangents=W.vertexTangents,ee.toneMapping=W.toneMapping}function Zl(w,W,ee,V,$){W.isScene!==!0&&(W=qe),Ee.resetTextureUnits();const be=W.fog,Ce=V.isMeshStandardMaterial?W.environment:null,Ue=E===null?g.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Qt,Ie=(V.isMeshStandardMaterial?Pe:we).get(V.envMap||Ce),We=V.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,De=!!ee.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Be=!!ee.morphAttributes.position,et=!!ee.morphAttributes.normal,tt=!!ee.morphAttributes.color;let Nt=Tn;V.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Nt=g.toneMapping);const en=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,it=en!==void 0?en.length:0,Xe=Me.get(V),Gr=m.state.lights;if(G===!0&&(oe===!0||w!==y)){const Lt=w===y&&V.id===P;Ae.setState(V,w,Lt)}let rt=!1;V.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Gr.state.version||Xe.outputColorSpace!==Ue||$.isInstancedMesh&&Xe.instancing===!1||!$.isInstancedMesh&&Xe.instancing===!0||$.isSkinnedMesh&&Xe.skinning===!1||!$.isSkinnedMesh&&Xe.skinning===!0||$.isInstancedMesh&&Xe.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Xe.instancingColor===!1&&$.instanceColor!==null||Xe.envMap!==Ie||V.fog===!0&&Xe.fog!==be||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Ae.numPlanes||Xe.numIntersection!==Ae.numIntersection)||Xe.vertexAlphas!==We||Xe.vertexTangents!==De||Xe.morphTargets!==Be||Xe.morphNormals!==et||Xe.morphColors!==tt||Xe.toneMapping!==Nt||ue.isWebGL2===!0&&Xe.morphTargetsCount!==it)&&(rt=!0):(rt=!0,Xe.__version=V.version);let Cn=Xe.currentProgram;rt===!0&&(Cn=rr(V,W,$));let Ha=!1,Di=!1,kr=!1;const yt=Cn.getUniforms(),Pn=Xe.uniforms;if(ne.useProgram(Cn.program)&&(Ha=!0,Di=!0,kr=!0),V.id!==P&&(P=V.id,Di=!0),Ha||y!==w){if(yt.setValue(I,"projectionMatrix",w.projectionMatrix),ue.logarithmicDepthBuffer&&yt.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),y!==w&&(y=w,Di=!0,kr=!0),V.isShaderMaterial||V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshStandardMaterial||V.envMap){const Lt=yt.map.cameraPosition;Lt!==void 0&&Lt.setValue(I,Fe.setFromMatrixPosition(w.matrixWorld))}(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&yt.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial||V.isShadowMaterial||$.isSkinnedMesh)&&yt.setValue(I,"viewMatrix",w.matrixWorldInverse)}if($.isSkinnedMesh){yt.setOptional(I,$,"bindMatrix"),yt.setOptional(I,$,"bindMatrixInverse");const Lt=$.skeleton;Lt&&(ue.floatVertexTextures?(Lt.boneTexture===null&&Lt.computeBoneTexture(),yt.setValue(I,"boneTexture",Lt.boneTexture,Ee),yt.setValue(I,"boneTextureSize",Lt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Vr=ee.morphAttributes;if((Vr.position!==void 0||Vr.normal!==void 0||Vr.color!==void 0&&ue.isWebGL2===!0)&&N.update($,ee,Cn),(Di||Xe.receiveShadow!==$.receiveShadow)&&(Xe.receiveShadow=$.receiveShadow,yt.setValue(I,"receiveShadow",$.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Pn.envMap.value=Ie,Pn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),Di&&(yt.setValue(I,"toneMappingExposure",g.toneMappingExposure),Xe.needsLights&&Kl(Pn,kr),be&&V.fog===!0&&ae.refreshFogUniforms(Pn,be),ae.refreshMaterialUniforms(Pn,V,X,Z,me),Pr.upload(I,Xe.uniformsList,Pn,Ee)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Pr.upload(I,Xe.uniformsList,Pn,Ee),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&yt.setValue(I,"center",$.center),yt.setValue(I,"modelViewMatrix",$.modelViewMatrix),yt.setValue(I,"normalMatrix",$.normalMatrix),yt.setValue(I,"modelMatrix",$.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Lt=V.uniformsGroups;for(let Wr=0,Ql=Lt.length;Wr<Ql;Wr++)if(ue.isWebGL2){const Ga=Lt[Wr];Le.update(Ga,Cn),Le.bind(Ga,Cn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Cn}function Kl(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function Jl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(w,W,ee){Me.get(w.texture).__webglTexture=W,Me.get(w.depthTexture).__webglTexture=ee;const V=Me.get(w);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=ee===void 0,V.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,W){const ee=Me.get(w);ee.__webglFramebuffer=W,ee.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(w,W=0,ee=0){E=w,b=W,T=ee;let V=!0,$=null,be=!1,Ce=!1;if(w){const Ie=Me.get(w);Ie.__useDefaultFramebuffer!==void 0?(ne.bindFramebuffer(I.FRAMEBUFFER,null),V=!1):Ie.__webglFramebuffer===void 0?Ee.setupRenderTarget(w):Ie.__hasExternalTextures&&Ee.rebindTextures(w,Me.get(w.texture).__webglTexture,Me.get(w.depthTexture).__webglTexture);const We=w.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ce=!0);const De=Me.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(De[W])?$=De[W][ee]:$=De[W],be=!0):ue.isWebGL2&&w.samples>0&&Ee.useMultisampledRTT(w)===!1?$=Me.get(w).__webglMultisampledFramebuffer:Array.isArray(De)?$=De[ee]:$=De,M.copy(w.viewport),L.copy(w.scissor),O=w.scissorTest}else M.copy(J).multiplyScalar(X).floor(),L.copy(C).multiplyScalar(X).floor(),O=U;if(ne.bindFramebuffer(I.FRAMEBUFFER,$)&&ue.drawBuffers&&V&&ne.drawBuffers(w,$),ne.viewport(M),ne.scissor(L),ne.setScissorTest(O),be){const Ie=Me.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ie.__webglTexture,ee)}else if(Ce){const Ie=Me.get(w.texture),We=W||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ie.__webglTexture,ee||0,We)}P=-1},this.readRenderTargetPixels=function(w,W,ee,V,$,be,Ce){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Me.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ue=Ue[Ce]),Ue){ne.bindFramebuffer(I.FRAMEBUFFER,Ue);try{const Ie=w.texture,We=Ie.format,De=Ie.type;if(We!==Wt&&pe.convert(We)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=De===ji&&(Q.has("EXT_color_buffer_half_float")||ue.isWebGL2&&Q.has("EXT_color_buffer_float"));if(De!==An&&pe.convert(De)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(De===En&&(ue.isWebGL2||Q.has("OES_texture_float")||Q.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-V&&ee>=0&&ee<=w.height-$&&I.readPixels(W,ee,V,$,pe.convert(We),pe.convert(De),be)}finally{const Ie=E!==null?Me.get(E).__webglFramebuffer:null;ne.bindFramebuffer(I.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(w,W,ee=0){const V=Math.pow(2,-ee),$=Math.floor(W.image.width*V),be=Math.floor(W.image.height*V);Ee.setTexture2D(W,0),I.copyTexSubImage2D(I.TEXTURE_2D,ee,0,0,w.x,w.y,$,be),ne.unbindTexture()},this.copyTextureToTexture=function(w,W,ee,V=0){const $=W.image.width,be=W.image.height,Ce=pe.convert(ee.format),Ue=pe.convert(ee.type);Ee.setTexture2D(ee,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,ee.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,ee.unpackAlignment),W.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,V,w.x,w.y,$,be,Ce,Ue,W.image.data):W.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,V,w.x,w.y,W.mipmaps[0].width,W.mipmaps[0].height,Ce,W.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,V,w.x,w.y,Ce,Ue,W.image),V===0&&ee.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),ne.unbindTexture()},this.copyTextureToTexture3D=function(w,W,ee,V,$=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=w.max.x-w.min.x+1,Ce=w.max.y-w.min.y+1,Ue=w.max.z-w.min.z+1,Ie=pe.convert(V.format),We=pe.convert(V.type);let De;if(V.isData3DTexture)Ee.setTexture3D(V,0),De=I.TEXTURE_3D;else if(V.isDataArrayTexture)Ee.setTexture2DArray(V,0),De=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,V.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,V.unpackAlignment);const Be=I.getParameter(I.UNPACK_ROW_LENGTH),et=I.getParameter(I.UNPACK_IMAGE_HEIGHT),tt=I.getParameter(I.UNPACK_SKIP_PIXELS),Nt=I.getParameter(I.UNPACK_SKIP_ROWS),en=I.getParameter(I.UNPACK_SKIP_IMAGES),it=ee.isCompressedTexture?ee.mipmaps[0]:ee.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,it.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,it.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,w.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,w.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,w.min.z),ee.isDataTexture||ee.isData3DTexture?I.texSubImage3D(De,$,W.x,W.y,W.z,be,Ce,Ue,Ie,We,it.data):ee.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(De,$,W.x,W.y,W.z,be,Ce,Ue,Ie,it.data)):I.texSubImage3D(De,$,W.x,W.y,W.z,be,Ce,Ue,Ie,We,it),I.pixelStorei(I.UNPACK_ROW_LENGTH,Be),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,et),I.pixelStorei(I.UNPACK_SKIP_PIXELS,tt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Nt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,en),$===0&&V.generateMipmaps&&I.generateMipmap(De),ne.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Ee.setTextureCube(w,0):w.isData3DTexture?Ee.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ee.setTexture2DArray(w,0):Ee.setTexture2D(w,0),ne.unbindTexture()},this.resetState=function(){b=0,T=0,E=null,ne.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ne?Gn:xl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Gn?Ne:Qt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class vm extends Il{}vm.prototype.isWebGL1Renderer=!0;class _s extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class $t{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const u=n[r],h=n[r+1]-u,p=(o-u)/h;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new de:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new z,r=[],s=[],o=[],a=new z,l=new at;for(let p=0;p<=e;p++){const x=p/e;r[p]=this.getTangentAt(x,new z)}s[0]=new z,o[0]=new z;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(ft(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,x))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(ft(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let x=1;x<=e;x++)s[x].applyMatrix4(l.makeRotationAxis(r[x],p*x)),o[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Da extends $t{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new de,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*f+this.aX,c=h*f+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class _m extends Da{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ua(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,p*=u,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const Ar=new z,Ss=new Ua,Ms=new Ua,ys=new Ua;class Sm extends $t{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new z){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Ar.subVectors(r[0],r[1]).add(r[0]),c=Ar);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Ar.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Ar),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let x=Math.pow(c.distanceToSquared(f),p),v=Math.pow(f.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);v<1e-4&&(v=1),x<1e-4&&(x=v),m<1e-4&&(m=v),Ss.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,x,v,m),Ms.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,x,v,m),ys.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,x,v,m)}else this.curveType==="catmullrom"&&(Ss.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),Ms.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),ys.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(Ss.calc(l),Ms.calc(l),ys.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new z().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function sc(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function Mm(i,e){const t=1-i;return t*t*e}function ym(i,e){return 2*(1-i)*i*e}function Em(i,e){return i*i*e}function Vi(i,e,t,n){return Mm(i,e)+ym(i,t)+Em(i,n)}function bm(i,e){const t=1-i;return t*t*t*e}function Tm(i,e){const t=1-i;return 3*t*t*i*e}function Am(i,e){return 3*(1-i)*i*i*e}function wm(i,e){return i*i*i*e}function Wi(i,e,t,n,r){return bm(i,e)+Tm(i,t)+Am(i,n)+wm(i,r)}class Nl extends $t{constructor(e=new de,t=new de,n=new de,r=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new de){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Wi(e,r.x,s.x,o.x,a.x),Wi(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Rm extends $t{constructor(e=new z,t=new z,n=new z,r=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new z){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Wi(e,r.x,s.x,o.x,a.x),Wi(e,r.y,s.y,o.y,a.y),Wi(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ia extends $t{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cm extends $t{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fl extends $t{constructor(e=new de,t=new de,n=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new de){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Vi(e,r.x,s.x,o.x),Vi(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pm extends $t{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Vi(e,r.x,s.x,o.x),Vi(e,r.y,s.y,o.y),Vi(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ol extends $t{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return n.set(sc(a,l.x,c.x,u.x,f.x),sc(a,l.y,c.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new de().fromArray(r))}return this}}var Bl=Object.freeze({__proto__:null,ArcCurve:_m,CatmullRomCurve3:Sm,CubicBezierCurve:Nl,CubicBezierCurve3:Rm,EllipseCurve:Da,LineCurve:Ia,LineCurve3:Cm,QuadraticBezierCurve:Fl,QuadraticBezierCurve3:Pm,SplineCurve:Ol});class Lm extends $t{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Ia(t,e))}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new Bl[r.type]().fromJSON(r))}return this}}class ma extends Lm{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Ia(this.currentPoint.clone(),new de(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new Fl(this.currentPoint.clone(),new de(e,t),new de(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){const a=new Nl(this.currentPoint.clone(),new de(e,t),new de(n,r),new de(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Ol(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){const c=new Da(e,t,n,r,s,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Lr extends ma{constructor(e){super(e),this.uuid=qn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new ma().fromJSON(r))}return this}}const Dm={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=zl(i,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,f,h,p;if(n&&(s=Om(i,e,s,t)),i.length>80*t){a=c=i[0],l=u=i[1];for(let x=t;x<r;x+=t)f=i[x],h=i[x+1],f<a&&(a=f),h<l&&(l=h),f>c&&(c=f),h>u&&(u=h);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return Ji(s,o,t,a,l,p,0),o}};function zl(i,e,t,n,r){let s,o;if(r===jm(i,e,t,n)>0)for(s=e;s<t;s+=n)o=ac(s,i[s],i[s+1],o);else for(s=t-n;s>=e;s-=n)o=ac(s,i[s],i[s+1],o);return o&&zr(o,o.next)&&($i(o),o=o.next),o}function Wn(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(zr(t,t.next)||Qe(t.prev,t,t.next)===0)){if($i(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ji(i,e,t,n,r,s,o){if(!i)return;!o&&s&&km(i,n,r,s);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?Im(i,n,r,s):Um(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),$i(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Nm(Wn(i),e,t),Ji(i,e,t,n,r,s,2)):o===2&&Fm(i,e,t,n,r,s):Ji(Wn(i),e,t,n,r,s,1);break}}}function Um(i){const e=i.prev,t=i,n=i.next;if(Qe(e,t,n)>=0)return!1;const r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=r<s?r<o?r:o:s<o?s:o,f=a<l?a<c?a:c:l<c?l:c,h=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let x=n.next;for(;x!==e;){if(x.x>=u&&x.x<=h&&x.y>=f&&x.y<=p&&xi(r,a,s,l,o,c,x.x,x.y)&&Qe(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Im(i,e,t,n){const r=i.prev,s=i,o=i.next;if(Qe(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,f=s.y,h=o.y,p=a<l?a<c?a:c:l<c?l:c,x=u<f?u<h?u:h:f<h?f:h,v=a>l?a>c?a:c:l>c?l:c,m=u>f?u>h?u:h:f>h?f:h,d=xa(p,x,e,t,n),_=xa(v,m,e,t,n);let g=i.prevZ,S=i.nextZ;for(;g&&g.z>=d&&S&&S.z<=_;){if(g.x>=p&&g.x<=v&&g.y>=x&&g.y<=m&&g!==r&&g!==o&&xi(a,u,l,f,c,h,g.x,g.y)&&Qe(g.prev,g,g.next)>=0||(g=g.prevZ,S.x>=p&&S.x<=v&&S.y>=x&&S.y<=m&&S!==r&&S!==o&&xi(a,u,l,f,c,h,S.x,S.y)&&Qe(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;g&&g.z>=d;){if(g.x>=p&&g.x<=v&&g.y>=x&&g.y<=m&&g!==r&&g!==o&&xi(a,u,l,f,c,h,g.x,g.y)&&Qe(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;S&&S.z<=_;){if(S.x>=p&&S.x<=v&&S.y>=x&&S.y<=m&&S!==r&&S!==o&&xi(a,u,l,f,c,h,S.x,S.y)&&Qe(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Nm(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!zr(r,s)&&Hl(r,n,n.next,s)&&Qi(r,s)&&Qi(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),$i(n),$i(n.next),n=i=s),n=n.next}while(n!==i);return Wn(n)}function Fm(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Xm(o,a)){let l=Gl(o,a);o=Wn(o,o.next),l=Wn(l,l.next),Ji(o,e,t,n,r,s,0),Ji(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Om(i,e,t,n){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=zl(i,a,l,n,!1),c===c.next&&(c.steiner=!0),r.push(Wm(c));for(r.sort(Bm),s=0;s<r.length;s++)t=zm(r[s],t);return t}function Bm(i,e){return i.x-e.x}function zm(i,e){const t=Hm(i,e);if(!t)return e;const n=Gl(t,i);return Wn(n,n.next),Wn(t,t.next)}function Hm(i,e){let t=e,n=-1/0,r;const s=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const h=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=s&&h>n&&(n=h,r=t.x<t.next.x?t:t.next,h===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,f;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&xi(o<c?s:n,o,l,c,o<c?n:s,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(s-t.x),Qi(t,i)&&(f<u||f===u&&(t.x>r.x||t.x===r.x&&Gm(r,t)))&&(r=t,u=f)),t=t.next;while(t!==a);return r}function Gm(i,e){return Qe(i.prev,i,e.prev)<0&&Qe(e.next,i,i.next)<0}function km(i,e,t,n){let r=i;do r.z===0&&(r.z=xa(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Vm(r)}function Vm(i){let e,t,n,r,s,o,a,l,c=1;do{for(t=i,i=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,a--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,c*=2}while(o>1);return i}function xa(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Wm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function xi(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function Xm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!qm(i,e)&&(Qi(i,e)&&Qi(e,i)&&Ym(i,e)&&(Qe(i.prev,i,e.prev)||Qe(i,e.prev,e))||zr(i,e)&&Qe(i.prev,i,i.next)>0&&Qe(e.prev,e,e.next)>0)}function Qe(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function zr(i,e){return i.x===e.x&&i.y===e.y}function Hl(i,e,t,n){const r=Rr(Qe(i,e,t)),s=Rr(Qe(i,e,n)),o=Rr(Qe(t,n,i)),a=Rr(Qe(t,n,e));return!!(r!==s&&o!==a||r===0&&wr(i,t,e)||s===0&&wr(i,n,e)||o===0&&wr(t,i,n)||a===0&&wr(t,e,n))}function wr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Rr(i){return i>0?1:i<0?-1:0}function qm(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Hl(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Qi(i,e){return Qe(i.prev,i,i.next)<0?Qe(i,e,i.next)>=0&&Qe(i,i.prev,e)>=0:Qe(i,e,i.prev)<0||Qe(i,i.next,e)<0}function Ym(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Gl(i,e){const t=new ga(i.i,i.x,i.y),n=new ga(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function ac(i,e,t,n){const r=new ga(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function $i(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ga(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function jm(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class Si{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return Si.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];oc(e),cc(n,e);let o=e.length;t.forEach(oc);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,cc(n,t[l]);const a=Dm.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function oc(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function cc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Na extends wn{constructor(e=new Lr([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new pn(r,3)),this.setAttribute("uv",new pn(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Zm;let g,S=!1,b,T,E,P;d&&(g=d.getSpacedPoints(u),S=!0,h=!1,b=d.computeFrenetFrames(u,!1),T=new z,E=new z,P=new z),h||(m=0,p=0,x=0,v=0);const y=a.extractPoints(c);let M=y.shape;const L=y.holes;if(!Si.isClockWise(M)){M=M.reverse();for(let I=0,se=L.length;I<se;I++){const Q=L[I];Si.isClockWise(Q)&&(L[I]=Q.reverse())}}const D=Si.triangulateShape(M,L),B=M;for(let I=0,se=L.length;I<se;I++){const Q=L[I];M=M.concat(Q)}function H(I,se,Q){return se||console.error("THREE.ExtrudeGeometry: vec does not exist"),I.clone().addScaledVector(se,Q)}const Z=M.length,X=D.length;function K(I,se,Q){let ue,ne,Te;const Me=I.x-se.x,Ee=I.y-se.y,we=Q.x-I.x,Pe=Q.y-I.y,Ve=Me*Me+Ee*Ee,R=Me*Pe-Ee*we;if(Math.abs(R)>Number.EPSILON){const A=Math.sqrt(Ve),q=Math.sqrt(we*we+Pe*Pe),ae=se.x-Ee/A,re=se.y+Me/A,he=Q.x-Pe/q,Ae=Q.y+we/q,fe=((he-ae)*Pe-(Ae-re)*we)/(Me*Pe-Ee*we);ue=ae+Me*fe-I.x,ne=re+Ee*fe-I.y;const Y=ue*ue+ne*ne;if(Y<=2)return new de(ue,ne);Te=Math.sqrt(Y/2)}else{let A=!1;Me>Number.EPSILON?we>Number.EPSILON&&(A=!0):Me<-Number.EPSILON?we<-Number.EPSILON&&(A=!0):Math.sign(Ee)===Math.sign(Pe)&&(A=!0),A?(ue=-Ee,ne=Me,Te=Math.sqrt(Ve)):(ue=Me,ne=Ee,Te=Math.sqrt(Ve/2))}return new de(ue/Te,ne/Te)}const te=[];for(let I=0,se=B.length,Q=se-1,ue=I+1;I<se;I++,Q++,ue++)Q===se&&(Q=0),ue===se&&(ue=0),te[I]=K(B[I],B[Q],B[ue]);const J=[];let C,U=te.concat();for(let I=0,se=L.length;I<se;I++){const Q=L[I];C=[];for(let ue=0,ne=Q.length,Te=ne-1,Me=ue+1;ue<ne;ue++,Te++,Me++)Te===ne&&(Te=0),Me===ne&&(Me=0),C[ue]=K(Q[ue],Q[Te],Q[Me]);J.push(C),U=U.concat(C)}for(let I=0;I<m;I++){const se=I/m,Q=p*Math.cos(se*Math.PI/2),ue=x*Math.sin(se*Math.PI/2)+v;for(let ne=0,Te=B.length;ne<Te;ne++){const Me=H(B[ne],te[ne],ue);ye(Me.x,Me.y,-Q)}for(let ne=0,Te=L.length;ne<Te;ne++){const Me=L[ne];C=J[ne];for(let Ee=0,we=Me.length;Ee<we;Ee++){const Pe=H(Me[Ee],C[Ee],ue);ye(Pe.x,Pe.y,-Q)}}}const k=x+v;for(let I=0;I<Z;I++){const se=h?H(M[I],U[I],k):M[I];S?(E.copy(b.normals[0]).multiplyScalar(se.x),T.copy(b.binormals[0]).multiplyScalar(se.y),P.copy(g[0]).add(E).add(T),ye(P.x,P.y,P.z)):ye(se.x,se.y,0)}for(let I=1;I<=u;I++)for(let se=0;se<Z;se++){const Q=h?H(M[se],U[se],k):M[se];S?(E.copy(b.normals[I]).multiplyScalar(Q.x),T.copy(b.binormals[I]).multiplyScalar(Q.y),P.copy(g[I]).add(E).add(T),ye(P.x,P.y,P.z)):ye(Q.x,Q.y,f/u*I)}for(let I=m-1;I>=0;I--){const se=I/m,Q=p*Math.cos(se*Math.PI/2),ue=x*Math.sin(se*Math.PI/2)+v;for(let ne=0,Te=B.length;ne<Te;ne++){const Me=H(B[ne],te[ne],ue);ye(Me.x,Me.y,f+Q)}for(let ne=0,Te=L.length;ne<Te;ne++){const Me=L[ne];C=J[ne];for(let Ee=0,we=Me.length;Ee<we;Ee++){const Pe=H(Me[Ee],C[Ee],ue);S?ye(Pe.x,Pe.y+g[u-1].y,g[u-1].x+Q):ye(Pe.x,Pe.y,f+Q)}}}G(),oe();function G(){const I=r.length/3;if(h){let se=0,Q=Z*se;for(let ue=0;ue<X;ue++){const ne=D[ue];ce(ne[2]+Q,ne[1]+Q,ne[0]+Q)}se=u+m*2,Q=Z*se;for(let ue=0;ue<X;ue++){const ne=D[ue];ce(ne[0]+Q,ne[1]+Q,ne[2]+Q)}}else{for(let se=0;se<X;se++){const Q=D[se];ce(Q[2],Q[1],Q[0])}for(let se=0;se<X;se++){const Q=D[se];ce(Q[0]+Z*u,Q[1]+Z*u,Q[2]+Z*u)}}n.addGroup(I,r.length/3-I,0)}function oe(){const I=r.length/3;let se=0;me(B,se),se+=B.length;for(let Q=0,ue=L.length;Q<ue;Q++){const ne=L[Q];me(ne,se),se+=ne.length}n.addGroup(I,r.length/3-I,1)}function me(I,se){let Q=I.length;for(;--Q>=0;){const ue=Q;let ne=Q-1;ne<0&&(ne=I.length-1);for(let Te=0,Me=u+m*2;Te<Me;Te++){const Ee=Z*Te,we=Z*(Te+1),Pe=se+ue+Ee,Ve=se+ne+Ee,R=se+ne+we,A=se+ue+we;Fe(Pe,Ve,R,A)}}}function ye(I,se,Q){l.push(I),l.push(se),l.push(Q)}function ce(I,se,Q){qe(I),qe(se),qe(Q);const ue=r.length/3,ne=_.generateTopUV(n,r,ue-3,ue-2,ue-1);Re(ne[0]),Re(ne[1]),Re(ne[2])}function Fe(I,se,Q,ue){qe(I),qe(se),qe(ue),qe(se),qe(Q),qe(ue);const ne=r.length/3,Te=_.generateSideWallUV(n,r,ne-6,ne-3,ne-2,ne-1);Re(Te[0]),Re(Te[1]),Re(Te[3]),Re(Te[1]),Re(Te[2]),Re(Te[3])}function qe(I){r.push(l[I*3+0]),r.push(l[I*3+1]),r.push(l[I*3+2])}function Re(I){s.push(I.x),s.push(I.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Km(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Bl[r.type]().fromJSON(r)),new Na(n,e.options)}}const Zm={generateTopUV:function(i,e,t,n,r){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],u=e[r*3+1];return[new de(s,o),new de(a,l),new de(c,u)]},generateSideWallUV:function(i,e,t,n,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],f=e[n*3+2],h=e[r*3],p=e[r*3+1],x=e[r*3+2],v=e[s*3],m=e[s*3+1],d=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new de(o,1-l),new de(c,1-f),new de(h,1-x),new de(v,1-d)]:[new de(a,1-l),new de(u,1-f),new de(p,1-x),new de(m,1-d)]}};function Km(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Jm extends nr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gl,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Ir={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Qm{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],x=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return x}return null}}}const $m=new Qm;class wi{constructor(e){this.manager=e!==void 0?e:$m,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}wi.DEFAULT_MATERIAL_NAME="__DEFAULT";const cn={};class ex extends Error{constructor(e,t){super(e),this.response=t}}class tx extends wi{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ir.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(cn[e]!==void 0){cn[e].push({onLoad:t,onProgress:n,onError:r});return}cn[e]=[],cn[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=cn[e],f=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=h?parseInt(h):0,x=p!==0;let v=0;const m=new ReadableStream({start(d){_();function _(){f.read().then(({done:g,value:S})=>{if(g)d.close();else{v+=S.byteLength;const b=new ProgressEvent("progress",{lengthComputable:x,loaded:v,total:p});for(let T=0,E=u.length;T<E;T++){const P=u[T];P.onProgress&&P.onProgress(b)}d.enqueue(S),_()}})}}});return new Response(m)}else throw new ex(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(x=>p.decode(x))}}}).then(c=>{Ir.add(e,c);const u=cn[e];delete cn[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=cn[e];if(u===void 0)throw this.manager.itemError(e),c;delete cn[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class kl extends wi{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ir.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ki("img");function l(){u(),Ir.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class nx extends wi{constructor(e){super(e)}load(e,t,n,r){const s=new Ra;s.colorSpace=Ne;const o=new kl(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(u){s.images[c]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let c=0;c<e.length;++c)l(c);return s}}class ix extends wi{constructor(e){super(e)}load(e,t,n,r){const s=new Ct,o=new kl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class rx extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Es=new at,lc=new z,uc=new z;class sx{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ca,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;lc.setFromMatrixPosition(e.matrixWorld),t.position.copy(lc),uc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(uc),t.updateMatrixWorld(),Es.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Es),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Es)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ax extends sx{constructor(){super(new Cl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ox extends rx{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new ax}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class cx{constructor(e,t,n=0,r=1/0){this.ray=new Ta(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Aa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return va(e,this,n,t),n.sort(hc),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)va(e[r],this,n,t);return n.sort(hc),n}}function hc(i,e){return i.distance-e.distance}function va(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)va(r[s],e,t,!0)}}class fc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ft(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class lx{constructor(){this.type="ShapePath",this.color=new Ze,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new ma,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,r){return this.currentPath.quadraticCurveTo(e,t,n,r),this}bezierCurveTo(e,t,n,r,s,o){return this.currentPath.bezierCurveTo(e,t,n,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(d){const _=[];for(let g=0,S=d.length;g<S;g++){const b=d[g],T=new Lr;T.curves=b.curves,_.push(T)}return _}function n(d,_){const g=_.length;let S=!1;for(let b=g-1,T=0;T<g;b=T++){let E=_[b],P=_[T],y=P.x-E.x,M=P.y-E.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(E=_[T],y=-y,P=_[b],M=-M),d.y<E.y||d.y>P.y)continue;if(d.y===E.y){if(d.x===E.x)return!0}else{const L=M*(d.x-E.x)-y*(d.y-E.y);if(L===0)return!0;if(L<0)continue;S=!S}}else{if(d.y!==E.y)continue;if(P.x<=d.x&&d.x<=E.x||E.x<=d.x&&d.x<=P.x)return!0}}return S}const r=Si.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new Lr,l.curves=a.curves,c.push(l),c;let u=!r(s[0].getPoints());u=e?!u:u;const f=[],h=[];let p=[],x=0,v;h[x]=void 0,p[x]=[];for(let d=0,_=s.length;d<_;d++)a=s[d],v=a.getPoints(),o=r(v),o=e?!o:o,o?(!u&&h[x]&&x++,h[x]={s:new Lr,p:v},h[x].s.curves=a.curves,u&&x++,p[x]=[]):p[x].push({h:a,p:v[0]});if(!h[0])return t(s);if(h.length>1){let d=!1,_=0;for(let g=0,S=h.length;g<S;g++)f[g]=[];for(let g=0,S=h.length;g<S;g++){const b=p[g];for(let T=0;T<b.length;T++){const E=b[T];let P=!0;for(let y=0;y<h.length;y++)n(E.p,h[y].p)&&(g!==y&&_++,P?(P=!1,f[y].push(E)):d=!0);P&&f[g].push(E)}}_>0&&d===!1&&(p=f)}let m;for(let d=0,_=h.length;d<_;d++){l=h[d].s,c.push(l),m=p[d];for(let g=0,S=m.length;g<S;g++)l.holes.push(m[g].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ma}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ma);const dc={type:"change"},bs={type:"start"},pc={type:"end"},Cr=new Ta,mc=new Mn,ux=Math.cos(70*uh.DEG2RAD);class hx extends Xn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:jn.ROTATE,MIDDLE:jn.DOLLY,RIGHT:jn.PAN},this.touches={ONE:Zn.ROTATE,TWO:Zn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(N){N.addEventListener("keydown",A),this._domElementKeyEvents=N},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",A),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(dc),n.update(),s=r.NONE},this.update=function(){const N=new z,ie=new Vn().setFromUnitVectors(e.up,new z(0,1,0)),_e=ie.clone().invert(),pe=new z,Se=new Vn,Le=new z,He=2*Math.PI;return function(){const xe=n.object.position;N.copy(xe).sub(n.target),N.applyQuaternion(ie),a.setFromVector3(N),n.autoRotate&&s===r.NONE&&L(y()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let j=n.minAzimuthAngle,le=n.maxAzimuthAngle;isFinite(j)&&isFinite(le)&&(j<-Math.PI?j+=He:j>Math.PI&&(j-=He),le<-Math.PI?le+=He:le>Math.PI&&(le-=He),j<=le?a.theta=Math.max(j,Math.min(le,a.theta)):a.theta=a.theta>(j+le)/2?Math.max(j,a.theta):Math.min(le,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.zoomToCursor&&T||n.object.isOrthographicCamera?a.radius=te(a.radius):a.radius=te(a.radius*c),N.setFromSpherical(a),N.applyQuaternion(_e),xe.copy(n.target).add(N),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let ge=!1;if(n.zoomToCursor&&T){let Oe=null;if(n.object.isPerspectiveCamera){const je=N.length();Oe=te(je*c);const Ke=je-Oe;n.object.position.addScaledVector(S,Ke),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const je=new z(b.x,b.y,0);je.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ge=!0;const Ke=new z(b.x,b.y,0);Ke.unproject(n.object),n.object.position.sub(Ke).add(je),n.object.updateMatrixWorld(),Oe=N.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Oe!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Oe).add(n.object.position):(Cr.origin.copy(n.object.position),Cr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Cr.direction))<ux?e.lookAt(n.target):(mc.setFromNormalAndCoplanarPoint(n.object.up,n.target),Cr.intersectPlane(mc,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ge=!0);return c=1,T=!1,ge||pe.distanceToSquared(n.object.position)>o||8*(1-Se.dot(n.object.quaternion))>o||Le.distanceToSquared(n.target)>0?(n.dispatchEvent(dc),pe.copy(n.object.position),Se.copy(n.object.quaternion),Le.copy(n.target),ge=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",re),n.domElement.removeEventListener("pointerdown",Me),n.domElement.removeEventListener("pointercancel",we),n.domElement.removeEventListener("wheel",R),n.domElement.removeEventListener("pointermove",Ee),n.domElement.removeEventListener("pointerup",we),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",A),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new fc,l=new fc;let c=1;const u=new z,f=new de,h=new de,p=new de,x=new de,v=new de,m=new de,d=new de,_=new de,g=new de,S=new z,b=new de;let T=!1;const E=[],P={};function y(){return 2*Math.PI/60/60*n.autoRotateSpeed}function M(){return Math.pow(.95,n.zoomSpeed)}function L(N){l.theta-=N}function O(N){l.phi-=N}const D=function(){const N=new z;return function(_e,pe){N.setFromMatrixColumn(pe,0),N.multiplyScalar(-_e),u.add(N)}}(),B=function(){const N=new z;return function(_e,pe){n.screenSpacePanning===!0?N.setFromMatrixColumn(pe,1):(N.setFromMatrixColumn(pe,0),N.crossVectors(n.object.up,N)),N.multiplyScalar(_e),u.add(N)}}(),H=function(){const N=new z;return function(_e,pe){const Se=n.domElement;if(n.object.isPerspectiveCamera){const Le=n.object.position;N.copy(Le).sub(n.target);let He=N.length();He*=Math.tan(n.object.fov/2*Math.PI/180),D(2*_e*He/Se.clientHeight,n.object.matrix),B(2*pe*He/Se.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(D(_e*(n.object.right-n.object.left)/n.object.zoom/Se.clientWidth,n.object.matrix),B(pe*(n.object.top-n.object.bottom)/n.object.zoom/Se.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Z(N){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(N){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(N){if(!n.zoomToCursor)return;T=!0;const ie=n.domElement.getBoundingClientRect(),_e=N.clientX-ie.left,pe=N.clientY-ie.top,Se=ie.width,Le=ie.height;b.x=_e/Se*2-1,b.y=-(pe/Le)*2+1,S.set(b.x,b.y,1).unproject(e).sub(e.position).normalize()}function te(N){return Math.max(n.minDistance,Math.min(n.maxDistance,N))}function J(N){f.set(N.clientX,N.clientY)}function C(N){K(N),d.set(N.clientX,N.clientY)}function U(N){x.set(N.clientX,N.clientY)}function k(N){h.set(N.clientX,N.clientY),p.subVectors(h,f).multiplyScalar(n.rotateSpeed);const ie=n.domElement;L(2*Math.PI*p.x/ie.clientHeight),O(2*Math.PI*p.y/ie.clientHeight),f.copy(h),n.update()}function G(N){_.set(N.clientX,N.clientY),g.subVectors(_,d),g.y>0?Z(M()):g.y<0&&X(M()),d.copy(_),n.update()}function oe(N){v.set(N.clientX,N.clientY),m.subVectors(v,x).multiplyScalar(n.panSpeed),H(m.x,m.y),x.copy(v),n.update()}function me(N){K(N),N.deltaY<0?X(M()):N.deltaY>0&&Z(M()),n.update()}function ye(N){let ie=!1;switch(N.code){case n.keys.UP:N.ctrlKey||N.metaKey||N.shiftKey?O(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,n.keyPanSpeed),ie=!0;break;case n.keys.BOTTOM:N.ctrlKey||N.metaKey||N.shiftKey?O(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,-n.keyPanSpeed),ie=!0;break;case n.keys.LEFT:N.ctrlKey||N.metaKey||N.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(n.keyPanSpeed,0),ie=!0;break;case n.keys.RIGHT:N.ctrlKey||N.metaKey||N.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(-n.keyPanSpeed,0),ie=!0;break}ie&&(N.preventDefault(),n.update())}function ce(){if(E.length===1)f.set(E[0].pageX,E[0].pageY);else{const N=.5*(E[0].pageX+E[1].pageX),ie=.5*(E[0].pageY+E[1].pageY);f.set(N,ie)}}function Fe(){if(E.length===1)x.set(E[0].pageX,E[0].pageY);else{const N=.5*(E[0].pageX+E[1].pageX),ie=.5*(E[0].pageY+E[1].pageY);x.set(N,ie)}}function qe(){const N=E[0].pageX-E[1].pageX,ie=E[0].pageY-E[1].pageY,_e=Math.sqrt(N*N+ie*ie);d.set(0,_e)}function Re(){n.enableZoom&&qe(),n.enablePan&&Fe()}function I(){n.enableZoom&&qe(),n.enableRotate&&ce()}function se(N){if(E.length==1)h.set(N.pageX,N.pageY);else{const _e=Y(N),pe=.5*(N.pageX+_e.x),Se=.5*(N.pageY+_e.y);h.set(pe,Se)}p.subVectors(h,f).multiplyScalar(n.rotateSpeed);const ie=n.domElement;L(2*Math.PI*p.x/ie.clientHeight),O(2*Math.PI*p.y/ie.clientHeight),f.copy(h)}function Q(N){if(E.length===1)v.set(N.pageX,N.pageY);else{const ie=Y(N),_e=.5*(N.pageX+ie.x),pe=.5*(N.pageY+ie.y);v.set(_e,pe)}m.subVectors(v,x).multiplyScalar(n.panSpeed),H(m.x,m.y),x.copy(v)}function ue(N){const ie=Y(N),_e=N.pageX-ie.x,pe=N.pageY-ie.y,Se=Math.sqrt(_e*_e+pe*pe);_.set(0,Se),g.set(0,Math.pow(_.y/d.y,n.zoomSpeed)),Z(g.y),d.copy(_)}function ne(N){n.enableZoom&&ue(N),n.enablePan&&Q(N)}function Te(N){n.enableZoom&&ue(N),n.enableRotate&&se(N)}function Me(N){n.enabled!==!1&&(E.length===0&&(n.domElement.setPointerCapture(N.pointerId),n.domElement.addEventListener("pointermove",Ee),n.domElement.addEventListener("pointerup",we)),he(N),N.pointerType==="touch"?q(N):Pe(N))}function Ee(N){n.enabled!==!1&&(N.pointerType==="touch"?ae(N):Ve(N))}function we(N){Ae(N),E.length===0&&(n.domElement.releasePointerCapture(N.pointerId),n.domElement.removeEventListener("pointermove",Ee),n.domElement.removeEventListener("pointerup",we)),n.dispatchEvent(pc),s=r.NONE}function Pe(N){let ie;switch(N.button){case 0:ie=n.mouseButtons.LEFT;break;case 1:ie=n.mouseButtons.MIDDLE;break;case 2:ie=n.mouseButtons.RIGHT;break;default:ie=-1}switch(ie){case jn.DOLLY:if(n.enableZoom===!1)return;C(N),s=r.DOLLY;break;case jn.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enablePan===!1)return;U(N),s=r.PAN}else{if(n.enableRotate===!1)return;J(N),s=r.ROTATE}break;case jn.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enableRotate===!1)return;J(N),s=r.ROTATE}else{if(n.enablePan===!1)return;U(N),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(bs)}function Ve(N){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;k(N);break;case r.DOLLY:if(n.enableZoom===!1)return;G(N);break;case r.PAN:if(n.enablePan===!1)return;oe(N);break}}function R(N){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(N.preventDefault(),n.dispatchEvent(bs),me(N),n.dispatchEvent(pc))}function A(N){n.enabled===!1||n.enablePan===!1||ye(N)}function q(N){switch(fe(N),E.length){case 1:switch(n.touches.ONE){case Zn.ROTATE:if(n.enableRotate===!1)return;ce(),s=r.TOUCH_ROTATE;break;case Zn.PAN:if(n.enablePan===!1)return;Fe(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case Zn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Re(),s=r.TOUCH_DOLLY_PAN;break;case Zn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;I(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(bs)}function ae(N){switch(fe(N),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;se(N),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Q(N),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ne(N),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Te(N),n.update();break;default:s=r.NONE}}function re(N){n.enabled!==!1&&N.preventDefault()}function he(N){E.push(N)}function Ae(N){delete P[N.pointerId];for(let ie=0;ie<E.length;ie++)if(E[ie].pointerId==N.pointerId){E.splice(ie,1);return}}function fe(N){let ie=P[N.pointerId];ie===void 0&&(ie=new de,P[N.pointerId]=ie),ie.set(N.pageX,N.pageY)}function Y(N){const ie=N.pointerId===E[0].pointerId?E[1]:E[0];return P[ie.pointerId]}n.domElement.addEventListener("contextmenu",re),n.domElement.addEventListener("pointerdown",Me),n.domElement.addEventListener("pointercancel",we),n.domElement.addEventListener("wheel",R,{passive:!1}),this.update()}}class fx extends wi{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new tx(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=s.parse(JSON.parse(a));t&&t(l)},n,r)}parse(e){return new dx(e)}}class dx{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],r=px(e,t,this.data);for(let s=0,o=r.length;s<o;s++)n.push(...r[s].toShapes());return n}}function px(i,e,t){const n=Array.from(i),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const u=n[c];if(u===`
`)a=0,l-=s;else{const f=mx(u,r,a,l,t);a+=f.offsetX,o.push(f.path)}}return o}function mx(i,e,t,n,r){const s=r.glyphs[i]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+i+'" does not exists in font family '+r.familyName+".");return}const o=new lx;let a,l,c,u,f,h,p,x;if(s.o){const v=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,d=v.length;m<d;)switch(v[m++]){case"m":a=v[m++]*e+t,l=v[m++]*e+n,o.moveTo(a,l);break;case"l":a=v[m++]*e+t,l=v[m++]*e+n,o.lineTo(a,l);break;case"q":c=v[m++]*e+t,u=v[m++]*e+n,f=v[m++]*e+t,h=v[m++]*e+n,o.quadraticCurveTo(f,h,c,u);break;case"b":c=v[m++]*e+t,u=v[m++]*e+n,f=v[m++]*e+t,h=v[m++]*e+n,p=v[m++]*e+t,x=v[m++]*e+n,o.bezierCurveTo(f,h,p,x,c,u);break}}return{offsetX:s.ha*e,path:o}}class xc extends Na{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const r=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type="TextGeometry"}}const gc="U2FsdGVkX18yxKE8A1jISeG3KWP6+FxS5vhkqY9Zc5ccZnZmfbunyNlXQbU9a03DR3GWJFMIPHsYVvpQfSeM4UyU43+kD9ZtjSQl4BABr104Nvknt/xeyC7duu01+dNi//QFvLh6LTiaSMJzQ4uonnNKjDh2Uumlvmupmxht26Ct+fI3LJ/D8b2HUj43GSEA8is0Y4SjUpMp8JISKi9MyZBxE1ZYnUPg26yaej3A+eMbbon3/bgHMOaltWym7FYNQG74dGIIuXBNIRbEC3JnirN8InNIjWa6a2hRfPMQTj4Jkeoz0L0MRVwyT3AY7MQVVOgC1FhA8OFysy/dQarSeHy5+7S3tPRAoCwynLWTQlHopCPhT/GBaRkRukpxIjIke3uwdodNjYJcAW13OnVxFhHK222S7M3oKo58I+x3/JJ6UKg7k9RpyDm39sldKTJj6AaRmHa6TBsUYGYosU6Hyw==",vc="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",_c="U2FsdGVkX19qK/Vgy1oWEF9FrvmjijsbE1Vf+LbwmgJAGnqIn40Od4pNk4iT518ekxnj2UxCy12sPBiAc2Ck4O2AoXmqi+5nDumn2TQLj6tayoo+5+hulsLrwkxnpILir3bnhbbP67INKIWRILn4AL4CGiwGOJbSaLIY2YYefnTjBWrtpW3Q7gywM3NOiIKOIGu4HiDMCLs/fcvljCeZXFVoEynOgYYbBnF9eb3JveF5/xE6lw5X8uk9GTJj/Gho2v8eG1nTLLDmG9t9IhLI6L7i4l4o/UcmwanAzMmKXJgxeHsr8IkuJ3q3p6+s/2SApXcbhf7vkn+oV/7BHmfBCSxysz8mCFxV6+d9i+VUduXDZAbBNsbTpgJ1jdRGlHRxMSLYGcs2+cQ34emlq8FzpqlW0e1jlLEz1be1A77P/uNLxHlUDp/wYqQeKLCA7o6zVFNJQN7H3paO/sPoAKY/4Q==",Sc="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",xx="U2FsdGVkX1/I56ZW0qhANtO1HvObgH3NVOUbZ0lY1oJR6cG/I63xKekSccYodWjyT8PiucxHPTnbqInsfkibqjT5J7AlR36W2l0RaBjZE1a3Vz7gikdTqmYcHFJrtdpj8Wije3Ravpa4JI3tKClAbzA53QiXmaiGv5/mE3UZzbfS3M0dT2DXGFQ7/fk6gMOrY2CiM436r8I+4rYT7siIW9tlIJvKMR80Nh3KrbxY0SXxQxIKtWcsIDjChznU9XUyfXhh7/bv86mJwe1lZxNuwoYulUmhnKrxvF1ylscmEHaZGIxozfBh+6cDBOfvteMm0K+OovmsHivFPNRUCFf9PqNuR13IUdHm+XwgdP11jrP9/ix03F7lL+mDTpmA9TyB+/67mQuKaKmh1n23CxJWcOzTvqnc9r3/OeYbrTGUYbc=",gx="U2FsdGVkX1+6TOrUq/TvJNPWesTOiNtFPlwmwo6ObEzb6u5TqFdAXjuGIJpKlqzDpmNaeocHCW6abJJl87rMnu+0WhH3kZrndCzxzoKpFdJP1biFoKPgauGz3qhWynVz3wMX5bJIErkSeBg3lNSb6vrOEgqE4YNECJBt9PDk/ln1j2+yu6MjSGlS1qporo+812f4b5zjL++kknNzRFSqy1w8k3cjmp0Zbczio4pdUKfWkMa0LLhPVTpYK8V9nUscBJR9M47dNS/IsaZvHf3DxwOQvXTMpzHz5RC84BgEGnEFhJ2XkW+uSrP7p25iOngO7bzU/HYIdIqhxy1GJLLmYauHXGKI1Qp9jMsaUQqxFLn/CKx9hVU8pHRQG08jdLm36li+t2ANbWle3daHz5eeN7LA5EkRwaJqRd/c0ZAc5M9TR9Nn9YoDi/ALv5IZ8ejn5rDjmG3yf5iymQ+WOERrFF8bjy/+Rx+0HeG31lPRm2MD0s4TGS8lOCIiFBGM+iQpr7ys5stR9iSiEBBOtDlsq4pcDEcgcWiJ7atYjTdKEzlOOZLzFW/bOK1/UpJcpbznvgedc8q5l/nEyqkP0jmYM0ksTQA1JY6btAHqoFi1b5VQ1S7Wp/vPPzOyvetD7IVgXM7t2aThgANCuWfhEoEEa6PFGtglXSDo9CB9v3T6ANqgOLd8Prb0X0cKKSRU9EbSa6tX1Kuf4F18bcz8DPU3hkjJh/0jk7K+atj2p0DN/vk=";var ke=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Vl(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function vx(i){if(i.__esModule)return i;var e=i.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(i).forEach(function(n){var r=Object.getOwnPropertyDescriptor(i,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return i[n]}})}),t}var Ts={exports:{}};function _x(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var As={exports:{}};const Sx={},Mx=Object.freeze(Object.defineProperty({__proto__:null,default:Sx},Symbol.toStringTag,{value:"Module"})),yx=vx(Mx);var Mc;function Ye(){return Mc||(Mc=1,function(i,e){(function(t,n){i.exports=n()})(ke,function(){var t=t||function(n,r){var s;if(typeof window<"u"&&window.crypto&&(s=window.crypto),typeof self<"u"&&self.crypto&&(s=self.crypto),typeof globalThis<"u"&&globalThis.crypto&&(s=globalThis.crypto),!s&&typeof window<"u"&&window.msCrypto&&(s=window.msCrypto),!s&&typeof ke<"u"&&ke.crypto&&(s=ke.crypto),!s&&typeof _x=="function")try{s=yx}catch{}var o=function(){if(s){if(typeof s.getRandomValues=="function")try{return s.getRandomValues(new Uint32Array(1))[0]}catch{}if(typeof s.randomBytes=="function")try{return s.randomBytes(4).readInt32LE()}catch{}}throw new Error("Native crypto module could not be used to get secure random number.")},a=Object.create||function(){function _(){}return function(g){var S;return _.prototype=g,S=new _,_.prototype=null,S}}(),l={},c=l.lib={},u=c.Base=function(){return{extend:function(_){var g=a(this);return _&&g.mixIn(_),(!g.hasOwnProperty("init")||this.init===g.init)&&(g.init=function(){g.$super.init.apply(this,arguments)}),g.init.prototype=g,g.$super=this,g},create:function(){var _=this.extend();return _.init.apply(_,arguments),_},init:function(){},mixIn:function(_){for(var g in _)_.hasOwnProperty(g)&&(this[g]=_[g]);_.hasOwnProperty("toString")&&(this.toString=_.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),f=c.WordArray=u.extend({init:function(_,g){_=this.words=_||[],g!=r?this.sigBytes=g:this.sigBytes=_.length*4},toString:function(_){return(_||p).stringify(this)},concat:function(_){var g=this.words,S=_.words,b=this.sigBytes,T=_.sigBytes;if(this.clamp(),b%4)for(var E=0;E<T;E++){var P=S[E>>>2]>>>24-E%4*8&255;g[b+E>>>2]|=P<<24-(b+E)%4*8}else for(var y=0;y<T;y+=4)g[b+y>>>2]=S[y>>>2];return this.sigBytes+=T,this},clamp:function(){var _=this.words,g=this.sigBytes;_[g>>>2]&=4294967295<<32-g%4*8,_.length=n.ceil(g/4)},clone:function(){var _=u.clone.call(this);return _.words=this.words.slice(0),_},random:function(_){for(var g=[],S=0;S<_;S+=4)g.push(o());return new f.init(g,_)}}),h=l.enc={},p=h.Hex={stringify:function(_){for(var g=_.words,S=_.sigBytes,b=[],T=0;T<S;T++){var E=g[T>>>2]>>>24-T%4*8&255;b.push((E>>>4).toString(16)),b.push((E&15).toString(16))}return b.join("")},parse:function(_){for(var g=_.length,S=[],b=0;b<g;b+=2)S[b>>>3]|=parseInt(_.substr(b,2),16)<<24-b%8*4;return new f.init(S,g/2)}},x=h.Latin1={stringify:function(_){for(var g=_.words,S=_.sigBytes,b=[],T=0;T<S;T++){var E=g[T>>>2]>>>24-T%4*8&255;b.push(String.fromCharCode(E))}return b.join("")},parse:function(_){for(var g=_.length,S=[],b=0;b<g;b++)S[b>>>2]|=(_.charCodeAt(b)&255)<<24-b%4*8;return new f.init(S,g)}},v=h.Utf8={stringify:function(_){try{return decodeURIComponent(escape(x.stringify(_)))}catch{throw new Error("Malformed UTF-8 data")}},parse:function(_){return x.parse(unescape(encodeURIComponent(_)))}},m=c.BufferedBlockAlgorithm=u.extend({reset:function(){this._data=new f.init,this._nDataBytes=0},_append:function(_){typeof _=="string"&&(_=v.parse(_)),this._data.concat(_),this._nDataBytes+=_.sigBytes},_process:function(_){var g,S=this._data,b=S.words,T=S.sigBytes,E=this.blockSize,P=E*4,y=T/P;_?y=n.ceil(y):y=n.max((y|0)-this._minBufferSize,0);var M=y*E,L=n.min(M*4,T);if(M){for(var O=0;O<M;O+=E)this._doProcessBlock(b,O);g=b.splice(0,M),S.sigBytes-=L}return new f.init(g,L)},clone:function(){var _=u.clone.call(this);return _._data=this._data.clone(),_},_minBufferSize:0});c.Hasher=m.extend({cfg:u.extend(),init:function(_){this.cfg=this.cfg.extend(_),this.reset()},reset:function(){m.reset.call(this),this._doReset()},update:function(_){return this._append(_),this._process(),this},finalize:function(_){_&&this._append(_);var g=this._doFinalize();return g},blockSize:16,_createHelper:function(_){return function(g,S){return new _.init(S).finalize(g)}},_createHmacHelper:function(_){return function(g,S){return new d.HMAC.init(_,S).finalize(g)}}});var d=l.algo={};return l}(Math);return t})}(As)),As.exports}var ws={exports:{}},yc;function Ri(){return yc||(yc=1,function(i,e){(function(t,n){i.exports=n(Ye())})(ke,function(t){return function(){var n=t,r=n.lib,s=r.WordArray,o=n.enc;o.Base64={stringify:function(l){var c=l.words,u=l.sigBytes,f=this._map;l.clamp();for(var h=[],p=0;p<u;p+=3)for(var x=c[p>>>2]>>>24-p%4*8&255,v=c[p+1>>>2]>>>24-(p+1)%4*8&255,m=c[p+2>>>2]>>>24-(p+2)%4*8&255,d=x<<16|v<<8|m,_=0;_<4&&p+_*.75<u;_++)h.push(f.charAt(d>>>6*(3-_)&63));var g=f.charAt(64);if(g)for(;h.length%4;)h.push(g);return h.join("")},parse:function(l){var c=l.length,u=this._map,f=this._reverseMap;if(!f){f=this._reverseMap=[];for(var h=0;h<u.length;h++)f[u.charCodeAt(h)]=h}var p=u.charAt(64);if(p){var x=l.indexOf(p);x!==-1&&(c=x)}return a(l,c,f)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="};function a(l,c,u){for(var f=[],h=0,p=0;p<c;p++)if(p%4){var x=u[l.charCodeAt(p-1)]<<p%4*2,v=u[l.charCodeAt(p)]>>>6-p%4*2,m=x|v;f[h>>>2]|=m<<24-h%4*8,h++}return s.create(f,h)}}(),t.enc.Base64})}(ws)),ws.exports}var Rs={exports:{}},Ec;function Ci(){return Ec||(Ec=1,function(i,e){(function(t,n){i.exports=n(Ye())})(ke,function(t){return function(n){var r=t,s=r.lib,o=s.WordArray,a=s.Hasher,l=r.algo,c=[];(function(){for(var v=0;v<64;v++)c[v]=n.abs(n.sin(v+1))*4294967296|0})();var u=l.MD5=a.extend({_doReset:function(){this._hash=new o.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(v,m){for(var d=0;d<16;d++){var _=m+d,g=v[_];v[_]=(g<<8|g>>>24)&16711935|(g<<24|g>>>8)&4278255360}var S=this._hash.words,b=v[m+0],T=v[m+1],E=v[m+2],P=v[m+3],y=v[m+4],M=v[m+5],L=v[m+6],O=v[m+7],D=v[m+8],B=v[m+9],H=v[m+10],Z=v[m+11],X=v[m+12],K=v[m+13],te=v[m+14],J=v[m+15],C=S[0],U=S[1],k=S[2],G=S[3];C=f(C,U,k,G,b,7,c[0]),G=f(G,C,U,k,T,12,c[1]),k=f(k,G,C,U,E,17,c[2]),U=f(U,k,G,C,P,22,c[3]),C=f(C,U,k,G,y,7,c[4]),G=f(G,C,U,k,M,12,c[5]),k=f(k,G,C,U,L,17,c[6]),U=f(U,k,G,C,O,22,c[7]),C=f(C,U,k,G,D,7,c[8]),G=f(G,C,U,k,B,12,c[9]),k=f(k,G,C,U,H,17,c[10]),U=f(U,k,G,C,Z,22,c[11]),C=f(C,U,k,G,X,7,c[12]),G=f(G,C,U,k,K,12,c[13]),k=f(k,G,C,U,te,17,c[14]),U=f(U,k,G,C,J,22,c[15]),C=h(C,U,k,G,T,5,c[16]),G=h(G,C,U,k,L,9,c[17]),k=h(k,G,C,U,Z,14,c[18]),U=h(U,k,G,C,b,20,c[19]),C=h(C,U,k,G,M,5,c[20]),G=h(G,C,U,k,H,9,c[21]),k=h(k,G,C,U,J,14,c[22]),U=h(U,k,G,C,y,20,c[23]),C=h(C,U,k,G,B,5,c[24]),G=h(G,C,U,k,te,9,c[25]),k=h(k,G,C,U,P,14,c[26]),U=h(U,k,G,C,D,20,c[27]),C=h(C,U,k,G,K,5,c[28]),G=h(G,C,U,k,E,9,c[29]),k=h(k,G,C,U,O,14,c[30]),U=h(U,k,G,C,X,20,c[31]),C=p(C,U,k,G,M,4,c[32]),G=p(G,C,U,k,D,11,c[33]),k=p(k,G,C,U,Z,16,c[34]),U=p(U,k,G,C,te,23,c[35]),C=p(C,U,k,G,T,4,c[36]),G=p(G,C,U,k,y,11,c[37]),k=p(k,G,C,U,O,16,c[38]),U=p(U,k,G,C,H,23,c[39]),C=p(C,U,k,G,K,4,c[40]),G=p(G,C,U,k,b,11,c[41]),k=p(k,G,C,U,P,16,c[42]),U=p(U,k,G,C,L,23,c[43]),C=p(C,U,k,G,B,4,c[44]),G=p(G,C,U,k,X,11,c[45]),k=p(k,G,C,U,J,16,c[46]),U=p(U,k,G,C,E,23,c[47]),C=x(C,U,k,G,b,6,c[48]),G=x(G,C,U,k,O,10,c[49]),k=x(k,G,C,U,te,15,c[50]),U=x(U,k,G,C,M,21,c[51]),C=x(C,U,k,G,X,6,c[52]),G=x(G,C,U,k,P,10,c[53]),k=x(k,G,C,U,H,15,c[54]),U=x(U,k,G,C,T,21,c[55]),C=x(C,U,k,G,D,6,c[56]),G=x(G,C,U,k,J,10,c[57]),k=x(k,G,C,U,L,15,c[58]),U=x(U,k,G,C,K,21,c[59]),C=x(C,U,k,G,y,6,c[60]),G=x(G,C,U,k,Z,10,c[61]),k=x(k,G,C,U,E,15,c[62]),U=x(U,k,G,C,B,21,c[63]),S[0]=S[0]+C|0,S[1]=S[1]+U|0,S[2]=S[2]+k|0,S[3]=S[3]+G|0},_doFinalize:function(){var v=this._data,m=v.words,d=this._nDataBytes*8,_=v.sigBytes*8;m[_>>>5]|=128<<24-_%32;var g=n.floor(d/4294967296),S=d;m[(_+64>>>9<<4)+15]=(g<<8|g>>>24)&16711935|(g<<24|g>>>8)&4278255360,m[(_+64>>>9<<4)+14]=(S<<8|S>>>24)&16711935|(S<<24|S>>>8)&4278255360,v.sigBytes=(m.length+1)*4,this._process();for(var b=this._hash,T=b.words,E=0;E<4;E++){var P=T[E];T[E]=(P<<8|P>>>24)&16711935|(P<<24|P>>>8)&4278255360}return b},clone:function(){var v=a.clone.call(this);return v._hash=this._hash.clone(),v}});function f(v,m,d,_,g,S,b){var T=v+(m&d|~m&_)+g+b;return(T<<S|T>>>32-S)+m}function h(v,m,d,_,g,S,b){var T=v+(m&_|d&~_)+g+b;return(T<<S|T>>>32-S)+m}function p(v,m,d,_,g,S,b){var T=v+(m^d^_)+g+b;return(T<<S|T>>>32-S)+m}function x(v,m,d,_,g,S,b){var T=v+(d^(m|~_))+g+b;return(T<<S|T>>>32-S)+m}r.MD5=a._createHelper(u),r.HmacMD5=a._createHmacHelper(u)}(Math),t.MD5})}(Rs)),Rs.exports}var Cs={exports:{}},Ps={exports:{}},bc;function Fa(){return bc||(bc=1,function(i,e){(function(t,n){i.exports=n(Ye())})(ke,function(t){return function(){var n=t,r=n.lib,s=r.WordArray,o=r.Hasher,a=n.algo,l=[],c=a.SHA1=o.extend({_doReset:function(){this._hash=new s.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(u,f){for(var h=this._hash.words,p=h[0],x=h[1],v=h[2],m=h[3],d=h[4],_=0;_<80;_++){if(_<16)l[_]=u[f+_]|0;else{var g=l[_-3]^l[_-8]^l[_-14]^l[_-16];l[_]=g<<1|g>>>31}var S=(p<<5|p>>>27)+d+l[_];_<20?S+=(x&v|~x&m)+1518500249:_<40?S+=(x^v^m)+1859775393:_<60?S+=(x&v|x&m|v&m)-1894007588:S+=(x^v^m)-899497514,d=m,m=v,v=x<<30|x>>>2,x=p,p=S}h[0]=h[0]+p|0,h[1]=h[1]+x|0,h[2]=h[2]+v|0,h[3]=h[3]+m|0,h[4]=h[4]+d|0},_doFinalize:function(){var u=this._data,f=u.words,h=this._nDataBytes*8,p=u.sigBytes*8;return f[p>>>5]|=128<<24-p%32,f[(p+64>>>9<<4)+14]=Math.floor(h/4294967296),f[(p+64>>>9<<4)+15]=h,u.sigBytes=f.length*4,this._process(),this._hash},clone:function(){var u=o.clone.call(this);return u._hash=this._hash.clone(),u}});n.SHA1=o._createHelper(c),n.HmacSHA1=o._createHmacHelper(c)}(),t.SHA1})}(Ps)),Ps.exports}var Ls={exports:{}},Tc;function Oa(){return Tc||(Tc=1,function(i,e){(function(t,n){i.exports=n(Ye())})(ke,function(t){(function(){var n=t,r=n.lib,s=r.Base,o=n.enc,a=o.Utf8,l=n.algo;l.HMAC=s.extend({init:function(c,u){c=this._hasher=new c.init,typeof u=="string"&&(u=a.parse(u));var f=c.blockSize,h=f*4;u.sigBytes>h&&(u=c.finalize(u)),u.clamp();for(var p=this._oKey=u.clone(),x=this._iKey=u.clone(),v=p.words,m=x.words,d=0;d<f;d++)v[d]^=1549556828,m[d]^=909522486;p.sigBytes=x.sigBytes=h,this.reset()},reset:function(){var c=this._hasher;c.reset(),c.update(this._iKey)},update:function(c){return this._hasher.update(c),this},finalize:function(c){var u=this._hasher,f=u.finalize(c);u.reset();var h=u.finalize(this._oKey.clone().concat(f));return h}})})()})}(Ls)),Ls.exports}var Ac;function Yn(){return Ac||(Ac=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),Fa(),Oa())})(ke,function(t){return function(){var n=t,r=n.lib,s=r.Base,o=r.WordArray,a=n.algo,l=a.MD5,c=a.EvpKDF=s.extend({cfg:s.extend({keySize:128/32,hasher:l,iterations:1}),init:function(u){this.cfg=this.cfg.extend(u)},compute:function(u,f){for(var h,p=this.cfg,x=p.hasher.create(),v=o.create(),m=v.words,d=p.keySize,_=p.iterations;m.length<d;){h&&x.update(h),h=x.update(u).finalize(f),x.reset();for(var g=1;g<_;g++)h=x.finalize(h),x.reset();v.concat(h)}return v.sigBytes=d*4,v}});n.EvpKDF=function(u,f,h){return c.create(h).compute(u,f)}}(),t.EvpKDF})}(Cs)),Cs.exports}var Ds={exports:{}},wc;function mt(){return wc||(wc=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),Yn())})(ke,function(t){t.lib.Cipher||function(n){var r=t,s=r.lib,o=s.Base,a=s.WordArray,l=s.BufferedBlockAlgorithm,c=r.enc;c.Utf8;var u=c.Base64,f=r.algo,h=f.EvpKDF,p=s.Cipher=l.extend({cfg:o.extend(),createEncryptor:function(M,L){return this.create(this._ENC_XFORM_MODE,M,L)},createDecryptor:function(M,L){return this.create(this._DEC_XFORM_MODE,M,L)},init:function(M,L,O){this.cfg=this.cfg.extend(O),this._xformMode=M,this._key=L,this.reset()},reset:function(){l.reset.call(this),this._doReset()},process:function(M){return this._append(M),this._process()},finalize:function(M){M&&this._append(M);var L=this._doFinalize();return L},keySize:128/32,ivSize:128/32,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function M(L){return typeof L=="string"?y:T}return function(L){return{encrypt:function(O,D,B){return M(D).encrypt(L,O,D,B)},decrypt:function(O,D,B){return M(D).decrypt(L,O,D,B)}}}}()});s.StreamCipher=p.extend({_doFinalize:function(){var M=this._process(!0);return M},blockSize:1});var x=r.mode={},v=s.BlockCipherMode=o.extend({createEncryptor:function(M,L){return this.Encryptor.create(M,L)},createDecryptor:function(M,L){return this.Decryptor.create(M,L)},init:function(M,L){this._cipher=M,this._iv=L}}),m=x.CBC=function(){var M=v.extend();M.Encryptor=M.extend({processBlock:function(O,D){var B=this._cipher,H=B.blockSize;L.call(this,O,D,H),B.encryptBlock(O,D),this._prevBlock=O.slice(D,D+H)}}),M.Decryptor=M.extend({processBlock:function(O,D){var B=this._cipher,H=B.blockSize,Z=O.slice(D,D+H);B.decryptBlock(O,D),L.call(this,O,D,H),this._prevBlock=Z}});function L(O,D,B){var H,Z=this._iv;Z?(H=Z,this._iv=n):H=this._prevBlock;for(var X=0;X<B;X++)O[D+X]^=H[X]}return M}(),d=r.pad={},_=d.Pkcs7={pad:function(M,L){for(var O=L*4,D=O-M.sigBytes%O,B=D<<24|D<<16|D<<8|D,H=[],Z=0;Z<D;Z+=4)H.push(B);var X=a.create(H,D);M.concat(X)},unpad:function(M){var L=M.words[M.sigBytes-1>>>2]&255;M.sigBytes-=L}};s.BlockCipher=p.extend({cfg:p.cfg.extend({mode:m,padding:_}),reset:function(){var M;p.reset.call(this);var L=this.cfg,O=L.iv,D=L.mode;this._xformMode==this._ENC_XFORM_MODE?M=D.createEncryptor:(M=D.createDecryptor,this._minBufferSize=1),this._mode&&this._mode.__creator==M?this._mode.init(this,O&&O.words):(this._mode=M.call(D,this,O&&O.words),this._mode.__creator=M)},_doProcessBlock:function(M,L){this._mode.processBlock(M,L)},_doFinalize:function(){var M,L=this.cfg.padding;return this._xformMode==this._ENC_XFORM_MODE?(L.pad(this._data,this.blockSize),M=this._process(!0)):(M=this._process(!0),L.unpad(M)),M},blockSize:128/32});var g=s.CipherParams=o.extend({init:function(M){this.mixIn(M)},toString:function(M){return(M||this.formatter).stringify(this)}}),S=r.format={},b=S.OpenSSL={stringify:function(M){var L,O=M.ciphertext,D=M.salt;return D?L=a.create([1398893684,1701076831]).concat(D).concat(O):L=O,L.toString(u)},parse:function(M){var L,O=u.parse(M),D=O.words;return D[0]==1398893684&&D[1]==1701076831&&(L=a.create(D.slice(2,4)),D.splice(0,4),O.sigBytes-=16),g.create({ciphertext:O,salt:L})}},T=s.SerializableCipher=o.extend({cfg:o.extend({format:b}),encrypt:function(M,L,O,D){D=this.cfg.extend(D);var B=M.createEncryptor(O,D),H=B.finalize(L),Z=B.cfg;return g.create({ciphertext:H,key:O,iv:Z.iv,algorithm:M,mode:Z.mode,padding:Z.padding,blockSize:M.blockSize,formatter:D.format})},decrypt:function(M,L,O,D){D=this.cfg.extend(D),L=this._parse(L,D.format);var B=M.createDecryptor(O,D).finalize(L.ciphertext);return B},_parse:function(M,L){return typeof M=="string"?L.parse(M,this):M}}),E=r.kdf={},P=E.OpenSSL={execute:function(M,L,O,D){D||(D=a.random(64/8));var B=h.create({keySize:L+O}).compute(M,D),H=a.create(B.words.slice(L),O*4);return B.sigBytes=L*4,g.create({key:B,iv:H,salt:D})}},y=s.PasswordBasedCipher=T.extend({cfg:T.cfg.extend({kdf:P}),encrypt:function(M,L,O,D){D=this.cfg.extend(D);var B=D.kdf.execute(O,M.keySize,M.ivSize);D.iv=B.iv;var H=T.encrypt.call(this,M,L,B.key,D);return H.mixIn(B),H},decrypt:function(M,L,O,D){D=this.cfg.extend(D),L=this._parse(L,D.format);var B=D.kdf.execute(O,M.keySize,M.ivSize,L.salt);D.iv=B.iv;var H=T.decrypt.call(this,M,L,B.key,D);return H}})}()})}(Ds)),Ds.exports}var Rc;function Wl(){return Rc||(Rc=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),Ri(),Ci(),Yn(),mt())})(ke,function(t){return function(){var n=t,r=n.lib,s=r.BlockCipher,o=n.algo,a=[],l=[],c=[],u=[],f=[],h=[],p=[],x=[],v=[],m=[];(function(){for(var g=[],S=0;S<256;S++)S<128?g[S]=S<<1:g[S]=S<<1^283;for(var b=0,T=0,S=0;S<256;S++){var E=T^T<<1^T<<2^T<<3^T<<4;E=E>>>8^E&255^99,a[b]=E,l[E]=b;var P=g[b],y=g[P],M=g[y],L=g[E]*257^E*16843008;c[b]=L<<24|L>>>8,u[b]=L<<16|L>>>16,f[b]=L<<8|L>>>24,h[b]=L;var L=M*16843009^y*65537^P*257^b*16843008;p[E]=L<<24|L>>>8,x[E]=L<<16|L>>>16,v[E]=L<<8|L>>>24,m[E]=L,b?(b=P^g[g[g[M^P]]],T^=g[g[T]]):b=T=1}})();var d=[0,1,2,4,8,16,32,64,128,27,54],_=o.AES=s.extend({_doReset:function(){var g;if(!(this._nRounds&&this._keyPriorReset===this._key)){for(var S=this._keyPriorReset=this._key,b=S.words,T=S.sigBytes/4,E=this._nRounds=T+6,P=(E+1)*4,y=this._keySchedule=[],M=0;M<P;M++)M<T?y[M]=b[M]:(g=y[M-1],M%T?T>6&&M%T==4&&(g=a[g>>>24]<<24|a[g>>>16&255]<<16|a[g>>>8&255]<<8|a[g&255]):(g=g<<8|g>>>24,g=a[g>>>24]<<24|a[g>>>16&255]<<16|a[g>>>8&255]<<8|a[g&255],g^=d[M/T|0]<<24),y[M]=y[M-T]^g);for(var L=this._invKeySchedule=[],O=0;O<P;O++){var M=P-O;if(O%4)var g=y[M];else var g=y[M-4];O<4||M<=4?L[O]=g:L[O]=p[a[g>>>24]]^x[a[g>>>16&255]]^v[a[g>>>8&255]]^m[a[g&255]]}}},encryptBlock:function(g,S){this._doCryptBlock(g,S,this._keySchedule,c,u,f,h,a)},decryptBlock:function(g,S){var b=g[S+1];g[S+1]=g[S+3],g[S+3]=b,this._doCryptBlock(g,S,this._invKeySchedule,p,x,v,m,l);var b=g[S+1];g[S+1]=g[S+3],g[S+3]=b},_doCryptBlock:function(g,S,b,T,E,P,y,M){for(var L=this._nRounds,O=g[S]^b[0],D=g[S+1]^b[1],B=g[S+2]^b[2],H=g[S+3]^b[3],Z=4,X=1;X<L;X++){var K=T[O>>>24]^E[D>>>16&255]^P[B>>>8&255]^y[H&255]^b[Z++],te=T[D>>>24]^E[B>>>16&255]^P[H>>>8&255]^y[O&255]^b[Z++],J=T[B>>>24]^E[H>>>16&255]^P[O>>>8&255]^y[D&255]^b[Z++],C=T[H>>>24]^E[O>>>16&255]^P[D>>>8&255]^y[B&255]^b[Z++];O=K,D=te,B=J,H=C}var K=(M[O>>>24]<<24|M[D>>>16&255]<<16|M[B>>>8&255]<<8|M[H&255])^b[Z++],te=(M[D>>>24]<<24|M[B>>>16&255]<<16|M[H>>>8&255]<<8|M[O&255])^b[Z++],J=(M[B>>>24]<<24|M[H>>>16&255]<<16|M[O>>>8&255]<<8|M[D&255])^b[Z++],C=(M[H>>>24]<<24|M[O>>>16&255]<<16|M[D>>>8&255]<<8|M[B&255])^b[Z++];g[S]=K,g[S+1]=te,g[S+2]=J,g[S+3]=C},keySize:256/32});n.AES=s._createHelper(_)}(),t.AES})}(Ts)),Ts.exports}var Ex=Wl();const jt=Vl(Ex);var Xl={exports:{}},Us={exports:{}},Cc;function Hr(){return Cc||(Cc=1,function(i,e){(function(t,n){i.exports=n(Ye())})(ke,function(t){return function(n){var r=t,s=r.lib,o=s.Base,a=s.WordArray,l=r.x64={};l.Word=o.extend({init:function(c,u){this.high=c,this.low=u}}),l.WordArray=o.extend({init:function(c,u){c=this.words=c||[],u!=n?this.sigBytes=u:this.sigBytes=c.length*8},toX32:function(){for(var c=this.words,u=c.length,f=[],h=0;h<u;h++){var p=c[h];f.push(p.high),f.push(p.low)}return a.create(f,this.sigBytes)},clone:function(){for(var c=o.clone.call(this),u=c.words=this.words.slice(0),f=u.length,h=0;h<f;h++)u[h]=u[h].clone();return c}})}(),t})}(Us)),Us.exports}var Is={exports:{}},Pc;function bx(){return Pc||(Pc=1,function(i,e){(function(t,n){i.exports=n(Ye())})(ke,function(t){return function(){if(typeof ArrayBuffer=="function"){var n=t,r=n.lib,s=r.WordArray,o=s.init,a=s.init=function(l){if(l instanceof ArrayBuffer&&(l=new Uint8Array(l)),(l instanceof Int8Array||typeof Uint8ClampedArray<"u"&&l instanceof Uint8ClampedArray||l instanceof Int16Array||l instanceof Uint16Array||l instanceof Int32Array||l instanceof Uint32Array||l instanceof Float32Array||l instanceof Float64Array)&&(l=new Uint8Array(l.buffer,l.byteOffset,l.byteLength)),l instanceof Uint8Array){for(var c=l.byteLength,u=[],f=0;f<c;f++)u[f>>>2]|=l[f]<<24-f%4*8;o.call(this,u,c)}else o.apply(this,arguments)};a.prototype=s}}(),t.lib.WordArray})}(Is)),Is.exports}var Ns={exports:{}},Lc;function Tx(){return Lc||(Lc=1,function(i,e){(function(t,n){i.exports=n(Ye())})(ke,function(t){return function(){var n=t,r=n.lib,s=r.WordArray,o=n.enc;o.Utf16=o.Utf16BE={stringify:function(l){for(var c=l.words,u=l.sigBytes,f=[],h=0;h<u;h+=2){var p=c[h>>>2]>>>16-h%4*8&65535;f.push(String.fromCharCode(p))}return f.join("")},parse:function(l){for(var c=l.length,u=[],f=0;f<c;f++)u[f>>>1]|=l.charCodeAt(f)<<16-f%2*16;return s.create(u,c*2)}},o.Utf16LE={stringify:function(l){for(var c=l.words,u=l.sigBytes,f=[],h=0;h<u;h+=2){var p=a(c[h>>>2]>>>16-h%4*8&65535);f.push(String.fromCharCode(p))}return f.join("")},parse:function(l){for(var c=l.length,u=[],f=0;f<c;f++)u[f>>>1]|=a(l.charCodeAt(f)<<16-f%2*16);return s.create(u,c*2)}};function a(l){return l<<8&4278255360|l>>>8&16711935}}(),t.enc.Utf16})}(Ns)),Ns.exports}var Fs={exports:{}},Dc;function Ax(){return Dc||(Dc=1,function(i,e){(function(t,n){i.exports=n(Ye())})(ke,function(t){return function(){var n=t,r=n.lib,s=r.WordArray,o=n.enc;o.Base64url={stringify:function(l,c=!0){var u=l.words,f=l.sigBytes,h=c?this._safe_map:this._map;l.clamp();for(var p=[],x=0;x<f;x+=3)for(var v=u[x>>>2]>>>24-x%4*8&255,m=u[x+1>>>2]>>>24-(x+1)%4*8&255,d=u[x+2>>>2]>>>24-(x+2)%4*8&255,_=v<<16|m<<8|d,g=0;g<4&&x+g*.75<f;g++)p.push(h.charAt(_>>>6*(3-g)&63));var S=h.charAt(64);if(S)for(;p.length%4;)p.push(S);return p.join("")},parse:function(l,c=!0){var u=l.length,f=c?this._safe_map:this._map,h=this._reverseMap;if(!h){h=this._reverseMap=[];for(var p=0;p<f.length;p++)h[f.charCodeAt(p)]=p}var x=f.charAt(64);if(x){var v=l.indexOf(x);v!==-1&&(u=v)}return a(l,u,h)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",_safe_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"};function a(l,c,u){for(var f=[],h=0,p=0;p<c;p++)if(p%4){var x=u[l.charCodeAt(p-1)]<<p%4*2,v=u[l.charCodeAt(p)]>>>6-p%4*2,m=x|v;f[h>>>2]|=m<<24-h%4*8,h++}return s.create(f,h)}}(),t.enc.Base64url})}(Fs)),Fs.exports}var Os={exports:{}},Uc;function ql(){return Uc||(Uc=1,function(i,e){(function(t,n){i.exports=n(Ye())})(ke,function(t){return function(n){var r=t,s=r.lib,o=s.WordArray,a=s.Hasher,l=r.algo,c=[],u=[];(function(){function p(d){for(var _=n.sqrt(d),g=2;g<=_;g++)if(!(d%g))return!1;return!0}function x(d){return(d-(d|0))*4294967296|0}for(var v=2,m=0;m<64;)p(v)&&(m<8&&(c[m]=x(n.pow(v,1/2))),u[m]=x(n.pow(v,1/3)),m++),v++})();var f=[],h=l.SHA256=a.extend({_doReset:function(){this._hash=new o.init(c.slice(0))},_doProcessBlock:function(p,x){for(var v=this._hash.words,m=v[0],d=v[1],_=v[2],g=v[3],S=v[4],b=v[5],T=v[6],E=v[7],P=0;P<64;P++){if(P<16)f[P]=p[x+P]|0;else{var y=f[P-15],M=(y<<25|y>>>7)^(y<<14|y>>>18)^y>>>3,L=f[P-2],O=(L<<15|L>>>17)^(L<<13|L>>>19)^L>>>10;f[P]=M+f[P-7]+O+f[P-16]}var D=S&b^~S&T,B=m&d^m&_^d&_,H=(m<<30|m>>>2)^(m<<19|m>>>13)^(m<<10|m>>>22),Z=(S<<26|S>>>6)^(S<<21|S>>>11)^(S<<7|S>>>25),X=E+Z+D+u[P]+f[P],K=H+B;E=T,T=b,b=S,S=g+X|0,g=_,_=d,d=m,m=X+K|0}v[0]=v[0]+m|0,v[1]=v[1]+d|0,v[2]=v[2]+_|0,v[3]=v[3]+g|0,v[4]=v[4]+S|0,v[5]=v[5]+b|0,v[6]=v[6]+T|0,v[7]=v[7]+E|0},_doFinalize:function(){var p=this._data,x=p.words,v=this._nDataBytes*8,m=p.sigBytes*8;return x[m>>>5]|=128<<24-m%32,x[(m+64>>>9<<4)+14]=n.floor(v/4294967296),x[(m+64>>>9<<4)+15]=v,p.sigBytes=x.length*4,this._process(),this._hash},clone:function(){var p=a.clone.call(this);return p._hash=this._hash.clone(),p}});r.SHA256=a._createHelper(h),r.HmacSHA256=a._createHmacHelper(h)}(Math),t.SHA256})}(Os)),Os.exports}var Bs={exports:{}},Ic;function wx(){return Ic||(Ic=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),ql())})(ke,function(t){return function(){var n=t,r=n.lib,s=r.WordArray,o=n.algo,a=o.SHA256,l=o.SHA224=a.extend({_doReset:function(){this._hash=new s.init([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])},_doFinalize:function(){var c=a._doFinalize.call(this);return c.sigBytes-=4,c}});n.SHA224=a._createHelper(l),n.HmacSHA224=a._createHmacHelper(l)}(),t.SHA224})}(Bs)),Bs.exports}var zs={exports:{}},Nc;function Yl(){return Nc||(Nc=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),Hr())})(ke,function(t){return function(){var n=t,r=n.lib,s=r.Hasher,o=n.x64,a=o.Word,l=o.WordArray,c=n.algo;function u(){return a.create.apply(a,arguments)}var f=[u(1116352408,3609767458),u(1899447441,602891725),u(3049323471,3964484399),u(3921009573,2173295548),u(961987163,4081628472),u(1508970993,3053834265),u(2453635748,2937671579),u(2870763221,3664609560),u(3624381080,2734883394),u(310598401,1164996542),u(607225278,1323610764),u(1426881987,3590304994),u(1925078388,4068182383),u(2162078206,991336113),u(2614888103,633803317),u(3248222580,3479774868),u(3835390401,2666613458),u(4022224774,944711139),u(264347078,2341262773),u(604807628,2007800933),u(770255983,1495990901),u(1249150122,1856431235),u(1555081692,3175218132),u(1996064986,2198950837),u(2554220882,3999719339),u(2821834349,766784016),u(2952996808,2566594879),u(3210313671,3203337956),u(3336571891,1034457026),u(3584528711,2466948901),u(113926993,3758326383),u(338241895,168717936),u(666307205,1188179964),u(773529912,1546045734),u(1294757372,1522805485),u(1396182291,2643833823),u(1695183700,2343527390),u(1986661051,1014477480),u(2177026350,1206759142),u(2456956037,344077627),u(2730485921,1290863460),u(2820302411,3158454273),u(3259730800,3505952657),u(3345764771,106217008),u(3516065817,3606008344),u(3600352804,1432725776),u(4094571909,1467031594),u(275423344,851169720),u(430227734,3100823752),u(506948616,1363258195),u(659060556,3750685593),u(883997877,3785050280),u(958139571,3318307427),u(1322822218,3812723403),u(1537002063,2003034995),u(1747873779,3602036899),u(1955562222,1575990012),u(2024104815,1125592928),u(2227730452,2716904306),u(2361852424,442776044),u(2428436474,593698344),u(2756734187,3733110249),u(3204031479,2999351573),u(3329325298,3815920427),u(3391569614,3928383900),u(3515267271,566280711),u(3940187606,3454069534),u(4118630271,4000239992),u(116418474,1914138554),u(174292421,2731055270),u(289380356,3203993006),u(460393269,320620315),u(685471733,587496836),u(852142971,1086792851),u(1017036298,365543100),u(1126000580,2618297676),u(1288033470,3409855158),u(1501505948,4234509866),u(1607167915,987167468),u(1816402316,1246189591)],h=[];(function(){for(var x=0;x<80;x++)h[x]=u()})();var p=c.SHA512=s.extend({_doReset:function(){this._hash=new l.init([new a.init(1779033703,4089235720),new a.init(3144134277,2227873595),new a.init(1013904242,4271175723),new a.init(2773480762,1595750129),new a.init(1359893119,2917565137),new a.init(2600822924,725511199),new a.init(528734635,4215389547),new a.init(1541459225,327033209)])},_doProcessBlock:function(x,v){for(var m=this._hash.words,d=m[0],_=m[1],g=m[2],S=m[3],b=m[4],T=m[5],E=m[6],P=m[7],y=d.high,M=d.low,L=_.high,O=_.low,D=g.high,B=g.low,H=S.high,Z=S.low,X=b.high,K=b.low,te=T.high,J=T.low,C=E.high,U=E.low,k=P.high,G=P.low,oe=y,me=M,ye=L,ce=O,Fe=D,qe=B,Re=H,I=Z,se=X,Q=K,ue=te,ne=J,Te=C,Me=U,Ee=k,we=G,Pe=0;Pe<80;Pe++){var Ve,R,A=h[Pe];if(Pe<16)R=A.high=x[v+Pe*2]|0,Ve=A.low=x[v+Pe*2+1]|0;else{var q=h[Pe-15],ae=q.high,re=q.low,he=(ae>>>1|re<<31)^(ae>>>8|re<<24)^ae>>>7,Ae=(re>>>1|ae<<31)^(re>>>8|ae<<24)^(re>>>7|ae<<25),fe=h[Pe-2],Y=fe.high,N=fe.low,ie=(Y>>>19|N<<13)^(Y<<3|N>>>29)^Y>>>6,_e=(N>>>19|Y<<13)^(N<<3|Y>>>29)^(N>>>6|Y<<26),pe=h[Pe-7],Se=pe.high,Le=pe.low,He=h[Pe-16],F=He.high,xe=He.low;Ve=Ae+Le,R=he+Se+(Ve>>>0<Ae>>>0?1:0),Ve=Ve+_e,R=R+ie+(Ve>>>0<_e>>>0?1:0),Ve=Ve+xe,R=R+F+(Ve>>>0<xe>>>0?1:0),A.high=R,A.low=Ve}var j=se&ue^~se&Te,le=Q&ne^~Q&Me,ge=oe&ye^oe&Fe^ye&Fe,Oe=me&ce^me&qe^ce&qe,je=(oe>>>28|me<<4)^(oe<<30|me>>>2)^(oe<<25|me>>>7),Ke=(me>>>28|oe<<4)^(me<<30|oe>>>2)^(me<<25|oe>>>7),qt=(se>>>14|Q<<18)^(se>>>18|Q<<14)^(se<<23|Q>>>9),Je=(Q>>>14|se<<18)^(Q>>>18|se<<14)^(Q<<23|se>>>9),Pt=f[Pe],dt=Pt.high,Li=Pt.low,xt=we+Je,Yt=Ee+qt+(xt>>>0<we>>>0?1:0),xt=xt+le,Yt=Yt+j+(xt>>>0<le>>>0?1:0),xt=xt+Li,Yt=Yt+dt+(xt>>>0<Li>>>0?1:0),xt=xt+Ve,Yt=Yt+R+(xt>>>0<Ve>>>0?1:0),Rn=Ke+Oe,ir=je+ge+(Rn>>>0<Ke>>>0?1:0);Ee=Te,we=Me,Te=ue,Me=ne,ue=se,ne=Q,Q=I+xt|0,se=Re+Yt+(Q>>>0<I>>>0?1:0)|0,Re=Fe,I=qe,Fe=ye,qe=ce,ye=oe,ce=me,me=xt+Rn|0,oe=Yt+ir+(me>>>0<xt>>>0?1:0)|0}M=d.low=M+me,d.high=y+oe+(M>>>0<me>>>0?1:0),O=_.low=O+ce,_.high=L+ye+(O>>>0<ce>>>0?1:0),B=g.low=B+qe,g.high=D+Fe+(B>>>0<qe>>>0?1:0),Z=S.low=Z+I,S.high=H+Re+(Z>>>0<I>>>0?1:0),K=b.low=K+Q,b.high=X+se+(K>>>0<Q>>>0?1:0),J=T.low=J+ne,T.high=te+ue+(J>>>0<ne>>>0?1:0),U=E.low=U+Me,E.high=C+Te+(U>>>0<Me>>>0?1:0),G=P.low=G+we,P.high=k+Ee+(G>>>0<we>>>0?1:0)},_doFinalize:function(){var x=this._data,v=x.words,m=this._nDataBytes*8,d=x.sigBytes*8;v[d>>>5]|=128<<24-d%32,v[(d+128>>>10<<5)+30]=Math.floor(m/4294967296),v[(d+128>>>10<<5)+31]=m,x.sigBytes=v.length*4,this._process();var _=this._hash.toX32();return _},clone:function(){var x=s.clone.call(this);return x._hash=this._hash.clone(),x},blockSize:1024/32});n.SHA512=s._createHelper(p),n.HmacSHA512=s._createHmacHelper(p)}(),t.SHA512})}(zs)),zs.exports}var Hs={exports:{}},Fc;function Rx(){return Fc||(Fc=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),Hr(),Yl())})(ke,function(t){return function(){var n=t,r=n.x64,s=r.Word,o=r.WordArray,a=n.algo,l=a.SHA512,c=a.SHA384=l.extend({_doReset:function(){this._hash=new o.init([new s.init(3418070365,3238371032),new s.init(1654270250,914150663),new s.init(2438529370,812702999),new s.init(355462360,4144912697),new s.init(1731405415,4290775857),new s.init(2394180231,1750603025),new s.init(3675008525,1694076839),new s.init(1203062813,3204075428)])},_doFinalize:function(){var u=l._doFinalize.call(this);return u.sigBytes-=16,u}});n.SHA384=l._createHelper(c),n.HmacSHA384=l._createHmacHelper(c)}(),t.SHA384})}(Hs)),Hs.exports}var Gs={exports:{}},Oc;function Cx(){return Oc||(Oc=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),Hr())})(ke,function(t){return function(n){var r=t,s=r.lib,o=s.WordArray,a=s.Hasher,l=r.x64,c=l.Word,u=r.algo,f=[],h=[],p=[];(function(){for(var m=1,d=0,_=0;_<24;_++){f[m+5*d]=(_+1)*(_+2)/2%64;var g=d%5,S=(2*m+3*d)%5;m=g,d=S}for(var m=0;m<5;m++)for(var d=0;d<5;d++)h[m+5*d]=d+(2*m+3*d)%5*5;for(var b=1,T=0;T<24;T++){for(var E=0,P=0,y=0;y<7;y++){if(b&1){var M=(1<<y)-1;M<32?P^=1<<M:E^=1<<M-32}b&128?b=b<<1^113:b<<=1}p[T]=c.create(E,P)}})();var x=[];(function(){for(var m=0;m<25;m++)x[m]=c.create()})();var v=u.SHA3=a.extend({cfg:a.cfg.extend({outputLength:512}),_doReset:function(){for(var m=this._state=[],d=0;d<25;d++)m[d]=new c.init;this.blockSize=(1600-2*this.cfg.outputLength)/32},_doProcessBlock:function(m,d){for(var _=this._state,g=this.blockSize/2,S=0;S<g;S++){var b=m[d+2*S],T=m[d+2*S+1];b=(b<<8|b>>>24)&16711935|(b<<24|b>>>8)&4278255360,T=(T<<8|T>>>24)&16711935|(T<<24|T>>>8)&4278255360;var E=_[S];E.high^=T,E.low^=b}for(var P=0;P<24;P++){for(var y=0;y<5;y++){for(var M=0,L=0,O=0;O<5;O++){var E=_[y+5*O];M^=E.high,L^=E.low}var D=x[y];D.high=M,D.low=L}for(var y=0;y<5;y++)for(var B=x[(y+4)%5],H=x[(y+1)%5],Z=H.high,X=H.low,M=B.high^(Z<<1|X>>>31),L=B.low^(X<<1|Z>>>31),O=0;O<5;O++){var E=_[y+5*O];E.high^=M,E.low^=L}for(var K=1;K<25;K++){var M,L,E=_[K],te=E.high,J=E.low,C=f[K];C<32?(M=te<<C|J>>>32-C,L=J<<C|te>>>32-C):(M=J<<C-32|te>>>64-C,L=te<<C-32|J>>>64-C);var U=x[h[K]];U.high=M,U.low=L}var k=x[0],G=_[0];k.high=G.high,k.low=G.low;for(var y=0;y<5;y++)for(var O=0;O<5;O++){var K=y+5*O,E=_[K],oe=x[K],me=x[(y+1)%5+5*O],ye=x[(y+2)%5+5*O];E.high=oe.high^~me.high&ye.high,E.low=oe.low^~me.low&ye.low}var E=_[0],ce=p[P];E.high^=ce.high,E.low^=ce.low}},_doFinalize:function(){var m=this._data,d=m.words;this._nDataBytes*8;var _=m.sigBytes*8,g=this.blockSize*32;d[_>>>5]|=1<<24-_%32,d[(n.ceil((_+1)/g)*g>>>5)-1]|=128,m.sigBytes=d.length*4,this._process();for(var S=this._state,b=this.cfg.outputLength/8,T=b/8,E=[],P=0;P<T;P++){var y=S[P],M=y.high,L=y.low;M=(M<<8|M>>>24)&16711935|(M<<24|M>>>8)&4278255360,L=(L<<8|L>>>24)&16711935|(L<<24|L>>>8)&4278255360,E.push(L),E.push(M)}return new o.init(E,b)},clone:function(){for(var m=a.clone.call(this),d=m._state=this._state.slice(0),_=0;_<25;_++)d[_]=d[_].clone();return m}});r.SHA3=a._createHelper(v),r.HmacSHA3=a._createHmacHelper(v)}(Math),t.SHA3})}(Gs)),Gs.exports}var ks={exports:{}},Bc;function Px(){return Bc||(Bc=1,function(i,e){(function(t,n){i.exports=n(Ye())})(ke,function(t){/** @preserve
			(c) 2012 by Cédric Mesnil. All rights reserved.

			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
			*/return function(n){var r=t,s=r.lib,o=s.WordArray,a=s.Hasher,l=r.algo,c=o.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),u=o.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),f=o.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),h=o.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),p=o.create([0,1518500249,1859775393,2400959708,2840853838]),x=o.create([1352829926,1548603684,1836072691,2053994217,0]),v=l.RIPEMD160=a.extend({_doReset:function(){this._hash=o.create([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(T,E){for(var P=0;P<16;P++){var y=E+P,M=T[y];T[y]=(M<<8|M>>>24)&16711935|(M<<24|M>>>8)&4278255360}var L=this._hash.words,O=p.words,D=x.words,B=c.words,H=u.words,Z=f.words,X=h.words,K,te,J,C,U,k,G,oe,me,ye;k=K=L[0],G=te=L[1],oe=J=L[2],me=C=L[3],ye=U=L[4];for(var ce,P=0;P<80;P+=1)ce=K+T[E+B[P]]|0,P<16?ce+=m(te,J,C)+O[0]:P<32?ce+=d(te,J,C)+O[1]:P<48?ce+=_(te,J,C)+O[2]:P<64?ce+=g(te,J,C)+O[3]:ce+=S(te,J,C)+O[4],ce=ce|0,ce=b(ce,Z[P]),ce=ce+U|0,K=U,U=C,C=b(J,10),J=te,te=ce,ce=k+T[E+H[P]]|0,P<16?ce+=S(G,oe,me)+D[0]:P<32?ce+=g(G,oe,me)+D[1]:P<48?ce+=_(G,oe,me)+D[2]:P<64?ce+=d(G,oe,me)+D[3]:ce+=m(G,oe,me)+D[4],ce=ce|0,ce=b(ce,X[P]),ce=ce+ye|0,k=ye,ye=me,me=b(oe,10),oe=G,G=ce;ce=L[1]+J+me|0,L[1]=L[2]+C+ye|0,L[2]=L[3]+U+k|0,L[3]=L[4]+K+G|0,L[4]=L[0]+te+oe|0,L[0]=ce},_doFinalize:function(){var T=this._data,E=T.words,P=this._nDataBytes*8,y=T.sigBytes*8;E[y>>>5]|=128<<24-y%32,E[(y+64>>>9<<4)+14]=(P<<8|P>>>24)&16711935|(P<<24|P>>>8)&4278255360,T.sigBytes=(E.length+1)*4,this._process();for(var M=this._hash,L=M.words,O=0;O<5;O++){var D=L[O];L[O]=(D<<8|D>>>24)&16711935|(D<<24|D>>>8)&4278255360}return M},clone:function(){var T=a.clone.call(this);return T._hash=this._hash.clone(),T}});function m(T,E,P){return T^E^P}function d(T,E,P){return T&E|~T&P}function _(T,E,P){return(T|~E)^P}function g(T,E,P){return T&P|E&~P}function S(T,E,P){return T^(E|~P)}function b(T,E){return T<<E|T>>>32-E}r.RIPEMD160=a._createHelper(v),r.HmacRIPEMD160=a._createHmacHelper(v)}(),t.RIPEMD160})}(ks)),ks.exports}var Vs={exports:{}},zc;function Lx(){return zc||(zc=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),Fa(),Oa())})(ke,function(t){return function(){var n=t,r=n.lib,s=r.Base,o=r.WordArray,a=n.algo,l=a.SHA1,c=a.HMAC,u=a.PBKDF2=s.extend({cfg:s.extend({keySize:128/32,hasher:l,iterations:1}),init:function(f){this.cfg=this.cfg.extend(f)},compute:function(f,h){for(var p=this.cfg,x=c.create(p.hasher,f),v=o.create(),m=o.create([1]),d=v.words,_=m.words,g=p.keySize,S=p.iterations;d.length<g;){var b=x.update(h).finalize(m);x.reset();for(var T=b.words,E=T.length,P=b,y=1;y<S;y++){P=x.finalize(P),x.reset();for(var M=P.words,L=0;L<E;L++)T[L]^=M[L]}v.concat(b),_[0]++}return v.sigBytes=g*4,v}});n.PBKDF2=function(f,h,p){return u.create(p).compute(f,h)}}(),t.PBKDF2})}(Vs)),Vs.exports}var Ws={exports:{}},Hc;function Dx(){return Hc||(Hc=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),mt())})(ke,function(t){return t.mode.CFB=function(){var n=t.lib.BlockCipherMode.extend();n.Encryptor=n.extend({processBlock:function(s,o){var a=this._cipher,l=a.blockSize;r.call(this,s,o,l,a),this._prevBlock=s.slice(o,o+l)}}),n.Decryptor=n.extend({processBlock:function(s,o){var a=this._cipher,l=a.blockSize,c=s.slice(o,o+l);r.call(this,s,o,l,a),this._prevBlock=c}});function r(s,o,a,l){var c,u=this._iv;u?(c=u.slice(0),this._iv=void 0):c=this._prevBlock,l.encryptBlock(c,0);for(var f=0;f<a;f++)s[o+f]^=c[f]}return n}(),t.mode.CFB})}(Ws)),Ws.exports}var Xs={exports:{}},Gc;function Ux(){return Gc||(Gc=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),mt())})(ke,function(t){return t.mode.CTR=function(){var n=t.lib.BlockCipherMode.extend(),r=n.Encryptor=n.extend({processBlock:function(s,o){var a=this._cipher,l=a.blockSize,c=this._iv,u=this._counter;c&&(u=this._counter=c.slice(0),this._iv=void 0);var f=u.slice(0);a.encryptBlock(f,0),u[l-1]=u[l-1]+1|0;for(var h=0;h<l;h++)s[o+h]^=f[h]}});return n.Decryptor=r,n}(),t.mode.CTR})}(Xs)),Xs.exports}var qs={exports:{}},kc;function Ix(){return kc||(kc=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),mt())})(ke,function(t){/** @preserve
 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
 * derived from CryptoJS.mode.CTR
 * Jan Hruby jhruby.web@gmail.com
 */return t.mode.CTRGladman=function(){var n=t.lib.BlockCipherMode.extend();function r(a){if((a>>24&255)===255){var l=a>>16&255,c=a>>8&255,u=a&255;l===255?(l=0,c===255?(c=0,u===255?u=0:++u):++c):++l,a=0,a+=l<<16,a+=c<<8,a+=u}else a+=1<<24;return a}function s(a){return(a[0]=r(a[0]))===0&&(a[1]=r(a[1])),a}var o=n.Encryptor=n.extend({processBlock:function(a,l){var c=this._cipher,u=c.blockSize,f=this._iv,h=this._counter;f&&(h=this._counter=f.slice(0),this._iv=void 0),s(h);var p=h.slice(0);c.encryptBlock(p,0);for(var x=0;x<u;x++)a[l+x]^=p[x]}});return n.Decryptor=o,n}(),t.mode.CTRGladman})}(qs)),qs.exports}var Ys={exports:{}},Vc;function Nx(){return Vc||(Vc=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),mt())})(ke,function(t){return t.mode.OFB=function(){var n=t.lib.BlockCipherMode.extend(),r=n.Encryptor=n.extend({processBlock:function(s,o){var a=this._cipher,l=a.blockSize,c=this._iv,u=this._keystream;c&&(u=this._keystream=c.slice(0),this._iv=void 0),a.encryptBlock(u,0);for(var f=0;f<l;f++)s[o+f]^=u[f]}});return n.Decryptor=r,n}(),t.mode.OFB})}(Ys)),Ys.exports}var js={exports:{}},Wc;function Fx(){return Wc||(Wc=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),mt())})(ke,function(t){return t.mode.ECB=function(){var n=t.lib.BlockCipherMode.extend();return n.Encryptor=n.extend({processBlock:function(r,s){this._cipher.encryptBlock(r,s)}}),n.Decryptor=n.extend({processBlock:function(r,s){this._cipher.decryptBlock(r,s)}}),n}(),t.mode.ECB})}(js)),js.exports}var Zs={exports:{}},Xc;function Ox(){return Xc||(Xc=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),mt())})(ke,function(t){return t.pad.AnsiX923={pad:function(n,r){var s=n.sigBytes,o=r*4,a=o-s%o,l=s+a-1;n.clamp(),n.words[l>>>2]|=a<<24-l%4*8,n.sigBytes+=a},unpad:function(n){var r=n.words[n.sigBytes-1>>>2]&255;n.sigBytes-=r}},t.pad.Ansix923})}(Zs)),Zs.exports}var Ks={exports:{}},qc;function Bx(){return qc||(qc=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),mt())})(ke,function(t){return t.pad.Iso10126={pad:function(n,r){var s=r*4,o=s-n.sigBytes%s;n.concat(t.lib.WordArray.random(o-1)).concat(t.lib.WordArray.create([o<<24],1))},unpad:function(n){var r=n.words[n.sigBytes-1>>>2]&255;n.sigBytes-=r}},t.pad.Iso10126})}(Ks)),Ks.exports}var Js={exports:{}},Yc;function zx(){return Yc||(Yc=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),mt())})(ke,function(t){return t.pad.Iso97971={pad:function(n,r){n.concat(t.lib.WordArray.create([2147483648],1)),t.pad.ZeroPadding.pad(n,r)},unpad:function(n){t.pad.ZeroPadding.unpad(n),n.sigBytes--}},t.pad.Iso97971})}(Js)),Js.exports}var Qs={exports:{}},jc;function Hx(){return jc||(jc=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),mt())})(ke,function(t){return t.pad.ZeroPadding={pad:function(n,r){var s=r*4;n.clamp(),n.sigBytes+=s-(n.sigBytes%s||s)},unpad:function(n){for(var r=n.words,s=n.sigBytes-1,s=n.sigBytes-1;s>=0;s--)if(r[s>>>2]>>>24-s%4*8&255){n.sigBytes=s+1;break}}},t.pad.ZeroPadding})}(Qs)),Qs.exports}var $s={exports:{}},Zc;function Gx(){return Zc||(Zc=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),mt())})(ke,function(t){return t.pad.NoPadding={pad:function(){},unpad:function(){}},t.pad.NoPadding})}($s)),$s.exports}var ea={exports:{}},Kc;function kx(){return Kc||(Kc=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),mt())})(ke,function(t){return function(n){var r=t,s=r.lib,o=s.CipherParams,a=r.enc,l=a.Hex,c=r.format;c.Hex={stringify:function(u){return u.ciphertext.toString(l)},parse:function(u){var f=l.parse(u);return o.create({ciphertext:f})}}}(),t.format.Hex})}(ea)),ea.exports}var ta={exports:{}},Jc;function Vx(){return Jc||(Jc=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),Ri(),Ci(),Yn(),mt())})(ke,function(t){return function(){var n=t,r=n.lib,s=r.WordArray,o=r.BlockCipher,a=n.algo,l=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],c=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],u=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],f=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],h=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],p=a.DES=o.extend({_doReset:function(){for(var d=this._key,_=d.words,g=[],S=0;S<56;S++){var b=l[S]-1;g[S]=_[b>>>5]>>>31-b%32&1}for(var T=this._subKeys=[],E=0;E<16;E++){for(var P=T[E]=[],y=u[E],S=0;S<24;S++)P[S/6|0]|=g[(c[S]-1+y)%28]<<31-S%6,P[4+(S/6|0)]|=g[28+(c[S+24]-1+y)%28]<<31-S%6;P[0]=P[0]<<1|P[0]>>>31;for(var S=1;S<7;S++)P[S]=P[S]>>>(S-1)*4+3;P[7]=P[7]<<5|P[7]>>>27}for(var M=this._invSubKeys=[],S=0;S<16;S++)M[S]=T[15-S]},encryptBlock:function(d,_){this._doCryptBlock(d,_,this._subKeys)},decryptBlock:function(d,_){this._doCryptBlock(d,_,this._invSubKeys)},_doCryptBlock:function(d,_,g){this._lBlock=d[_],this._rBlock=d[_+1],x.call(this,4,252645135),x.call(this,16,65535),v.call(this,2,858993459),v.call(this,8,16711935),x.call(this,1,1431655765);for(var S=0;S<16;S++){for(var b=g[S],T=this._lBlock,E=this._rBlock,P=0,y=0;y<8;y++)P|=f[y][((E^b[y])&h[y])>>>0];this._lBlock=E,this._rBlock=T^P}var M=this._lBlock;this._lBlock=this._rBlock,this._rBlock=M,x.call(this,1,1431655765),v.call(this,8,16711935),v.call(this,2,858993459),x.call(this,16,65535),x.call(this,4,252645135),d[_]=this._lBlock,d[_+1]=this._rBlock},keySize:64/32,ivSize:64/32,blockSize:64/32});function x(d,_){var g=(this._lBlock>>>d^this._rBlock)&_;this._rBlock^=g,this._lBlock^=g<<d}function v(d,_){var g=(this._rBlock>>>d^this._lBlock)&_;this._lBlock^=g,this._rBlock^=g<<d}n.DES=o._createHelper(p);var m=a.TripleDES=o.extend({_doReset:function(){var d=this._key,_=d.words;if(_.length!==2&&_.length!==4&&_.length<6)throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");var g=_.slice(0,2),S=_.length<4?_.slice(0,2):_.slice(2,4),b=_.length<6?_.slice(0,2):_.slice(4,6);this._des1=p.createEncryptor(s.create(g)),this._des2=p.createEncryptor(s.create(S)),this._des3=p.createEncryptor(s.create(b))},encryptBlock:function(d,_){this._des1.encryptBlock(d,_),this._des2.decryptBlock(d,_),this._des3.encryptBlock(d,_)},decryptBlock:function(d,_){this._des3.decryptBlock(d,_),this._des2.encryptBlock(d,_),this._des1.decryptBlock(d,_)},keySize:192/32,ivSize:64/32,blockSize:64/32});n.TripleDES=o._createHelper(m)}(),t.TripleDES})}(ta)),ta.exports}var na={exports:{}},Qc;function Wx(){return Qc||(Qc=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),Ri(),Ci(),Yn(),mt())})(ke,function(t){return function(){var n=t,r=n.lib,s=r.StreamCipher,o=n.algo,a=o.RC4=s.extend({_doReset:function(){for(var u=this._key,f=u.words,h=u.sigBytes,p=this._S=[],x=0;x<256;x++)p[x]=x;for(var x=0,v=0;x<256;x++){var m=x%h,d=f[m>>>2]>>>24-m%4*8&255;v=(v+p[x]+d)%256;var _=p[x];p[x]=p[v],p[v]=_}this._i=this._j=0},_doProcessBlock:function(u,f){u[f]^=l.call(this)},keySize:256/32,ivSize:0});function l(){for(var u=this._S,f=this._i,h=this._j,p=0,x=0;x<4;x++){f=(f+1)%256,h=(h+u[f])%256;var v=u[f];u[f]=u[h],u[h]=v,p|=u[(u[f]+u[h])%256]<<24-x*8}return this._i=f,this._j=h,p}n.RC4=s._createHelper(a);var c=o.RC4Drop=a.extend({cfg:a.cfg.extend({drop:192}),_doReset:function(){a._doReset.call(this);for(var u=this.cfg.drop;u>0;u--)l.call(this)}});n.RC4Drop=s._createHelper(c)}(),t.RC4})}(na)),na.exports}var ia={exports:{}},$c;function Xx(){return $c||($c=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),Ri(),Ci(),Yn(),mt())})(ke,function(t){return function(){var n=t,r=n.lib,s=r.StreamCipher,o=n.algo,a=[],l=[],c=[],u=o.Rabbit=s.extend({_doReset:function(){for(var h=this._key.words,p=this.cfg.iv,x=0;x<4;x++)h[x]=(h[x]<<8|h[x]>>>24)&16711935|(h[x]<<24|h[x]>>>8)&4278255360;var v=this._X=[h[0],h[3]<<16|h[2]>>>16,h[1],h[0]<<16|h[3]>>>16,h[2],h[1]<<16|h[0]>>>16,h[3],h[2]<<16|h[1]>>>16],m=this._C=[h[2]<<16|h[2]>>>16,h[0]&4294901760|h[1]&65535,h[3]<<16|h[3]>>>16,h[1]&4294901760|h[2]&65535,h[0]<<16|h[0]>>>16,h[2]&4294901760|h[3]&65535,h[1]<<16|h[1]>>>16,h[3]&4294901760|h[0]&65535];this._b=0;for(var x=0;x<4;x++)f.call(this);for(var x=0;x<8;x++)m[x]^=v[x+4&7];if(p){var d=p.words,_=d[0],g=d[1],S=(_<<8|_>>>24)&16711935|(_<<24|_>>>8)&4278255360,b=(g<<8|g>>>24)&16711935|(g<<24|g>>>8)&4278255360,T=S>>>16|b&4294901760,E=b<<16|S&65535;m[0]^=S,m[1]^=T,m[2]^=b,m[3]^=E,m[4]^=S,m[5]^=T,m[6]^=b,m[7]^=E;for(var x=0;x<4;x++)f.call(this)}},_doProcessBlock:function(h,p){var x=this._X;f.call(this),a[0]=x[0]^x[5]>>>16^x[3]<<16,a[1]=x[2]^x[7]>>>16^x[5]<<16,a[2]=x[4]^x[1]>>>16^x[7]<<16,a[3]=x[6]^x[3]>>>16^x[1]<<16;for(var v=0;v<4;v++)a[v]=(a[v]<<8|a[v]>>>24)&16711935|(a[v]<<24|a[v]>>>8)&4278255360,h[p+v]^=a[v]},blockSize:128/32,ivSize:64/32});function f(){for(var h=this._X,p=this._C,x=0;x<8;x++)l[x]=p[x];p[0]=p[0]+1295307597+this._b|0,p[1]=p[1]+3545052371+(p[0]>>>0<l[0]>>>0?1:0)|0,p[2]=p[2]+886263092+(p[1]>>>0<l[1]>>>0?1:0)|0,p[3]=p[3]+1295307597+(p[2]>>>0<l[2]>>>0?1:0)|0,p[4]=p[4]+3545052371+(p[3]>>>0<l[3]>>>0?1:0)|0,p[5]=p[5]+886263092+(p[4]>>>0<l[4]>>>0?1:0)|0,p[6]=p[6]+1295307597+(p[5]>>>0<l[5]>>>0?1:0)|0,p[7]=p[7]+3545052371+(p[6]>>>0<l[6]>>>0?1:0)|0,this._b=p[7]>>>0<l[7]>>>0?1:0;for(var x=0;x<8;x++){var v=h[x]+p[x],m=v&65535,d=v>>>16,_=((m*m>>>17)+m*d>>>15)+d*d,g=((v&4294901760)*v|0)+((v&65535)*v|0);c[x]=_^g}h[0]=c[0]+(c[7]<<16|c[7]>>>16)+(c[6]<<16|c[6]>>>16)|0,h[1]=c[1]+(c[0]<<8|c[0]>>>24)+c[7]|0,h[2]=c[2]+(c[1]<<16|c[1]>>>16)+(c[0]<<16|c[0]>>>16)|0,h[3]=c[3]+(c[2]<<8|c[2]>>>24)+c[1]|0,h[4]=c[4]+(c[3]<<16|c[3]>>>16)+(c[2]<<16|c[2]>>>16)|0,h[5]=c[5]+(c[4]<<8|c[4]>>>24)+c[3]|0,h[6]=c[6]+(c[5]<<16|c[5]>>>16)+(c[4]<<16|c[4]>>>16)|0,h[7]=c[7]+(c[6]<<8|c[6]>>>24)+c[5]|0}n.Rabbit=s._createHelper(u)}(),t.Rabbit})}(ia)),ia.exports}var ra={exports:{}},el;function qx(){return el||(el=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),Ri(),Ci(),Yn(),mt())})(ke,function(t){return function(){var n=t,r=n.lib,s=r.StreamCipher,o=n.algo,a=[],l=[],c=[],u=o.RabbitLegacy=s.extend({_doReset:function(){var h=this._key.words,p=this.cfg.iv,x=this._X=[h[0],h[3]<<16|h[2]>>>16,h[1],h[0]<<16|h[3]>>>16,h[2],h[1]<<16|h[0]>>>16,h[3],h[2]<<16|h[1]>>>16],v=this._C=[h[2]<<16|h[2]>>>16,h[0]&4294901760|h[1]&65535,h[3]<<16|h[3]>>>16,h[1]&4294901760|h[2]&65535,h[0]<<16|h[0]>>>16,h[2]&4294901760|h[3]&65535,h[1]<<16|h[1]>>>16,h[3]&4294901760|h[0]&65535];this._b=0;for(var m=0;m<4;m++)f.call(this);for(var m=0;m<8;m++)v[m]^=x[m+4&7];if(p){var d=p.words,_=d[0],g=d[1],S=(_<<8|_>>>24)&16711935|(_<<24|_>>>8)&4278255360,b=(g<<8|g>>>24)&16711935|(g<<24|g>>>8)&4278255360,T=S>>>16|b&4294901760,E=b<<16|S&65535;v[0]^=S,v[1]^=T,v[2]^=b,v[3]^=E,v[4]^=S,v[5]^=T,v[6]^=b,v[7]^=E;for(var m=0;m<4;m++)f.call(this)}},_doProcessBlock:function(h,p){var x=this._X;f.call(this),a[0]=x[0]^x[5]>>>16^x[3]<<16,a[1]=x[2]^x[7]>>>16^x[5]<<16,a[2]=x[4]^x[1]>>>16^x[7]<<16,a[3]=x[6]^x[3]>>>16^x[1]<<16;for(var v=0;v<4;v++)a[v]=(a[v]<<8|a[v]>>>24)&16711935|(a[v]<<24|a[v]>>>8)&4278255360,h[p+v]^=a[v]},blockSize:128/32,ivSize:64/32});function f(){for(var h=this._X,p=this._C,x=0;x<8;x++)l[x]=p[x];p[0]=p[0]+1295307597+this._b|0,p[1]=p[1]+3545052371+(p[0]>>>0<l[0]>>>0?1:0)|0,p[2]=p[2]+886263092+(p[1]>>>0<l[1]>>>0?1:0)|0,p[3]=p[3]+1295307597+(p[2]>>>0<l[2]>>>0?1:0)|0,p[4]=p[4]+3545052371+(p[3]>>>0<l[3]>>>0?1:0)|0,p[5]=p[5]+886263092+(p[4]>>>0<l[4]>>>0?1:0)|0,p[6]=p[6]+1295307597+(p[5]>>>0<l[5]>>>0?1:0)|0,p[7]=p[7]+3545052371+(p[6]>>>0<l[6]>>>0?1:0)|0,this._b=p[7]>>>0<l[7]>>>0?1:0;for(var x=0;x<8;x++){var v=h[x]+p[x],m=v&65535,d=v>>>16,_=((m*m>>>17)+m*d>>>15)+d*d,g=((v&4294901760)*v|0)+((v&65535)*v|0);c[x]=_^g}h[0]=c[0]+(c[7]<<16|c[7]>>>16)+(c[6]<<16|c[6]>>>16)|0,h[1]=c[1]+(c[0]<<8|c[0]>>>24)+c[7]|0,h[2]=c[2]+(c[1]<<16|c[1]>>>16)+(c[0]<<16|c[0]>>>16)|0,h[3]=c[3]+(c[2]<<8|c[2]>>>24)+c[1]|0,h[4]=c[4]+(c[3]<<16|c[3]>>>16)+(c[2]<<16|c[2]>>>16)|0,h[5]=c[5]+(c[4]<<8|c[4]>>>24)+c[3]|0,h[6]=c[6]+(c[5]<<16|c[5]>>>16)+(c[4]<<16|c[4]>>>16)|0,h[7]=c[7]+(c[6]<<8|c[6]>>>24)+c[5]|0}n.RabbitLegacy=s._createHelper(u)}(),t.RabbitLegacy})}(ra)),ra.exports}(function(i,e){(function(t,n,r){i.exports=n(Ye(),Hr(),bx(),Tx(),Ri(),Ax(),Ci(),Fa(),ql(),wx(),Yl(),Rx(),Cx(),Px(),Oa(),Lx(),Yn(),mt(),Dx(),Ux(),Ix(),Nx(),Fx(),Ox(),Bx(),zx(),Hx(),Gx(),kx(),Wl(),Vx(),Wx(),Xx(),qx())})(ke,function(t){return t})})(Xl);var Yx=Xl.exports;const fi=Vl(Yx);class jx{constructor(){this.secretkey="secretkey123"}getvABufferShader(){var e=null;e=gc;var t=jt.decrypt(e,this.secretkey),n=t.toString(fi.enc.Utf8);return n}getfABufferShader(){var e=null;e=vc;var t=jt.decrypt(e,this.secretkey),n=t.toString(fi.enc.Utf8);return n}getvBBufferShader(){var e=null;e=_c;var t=jt.decrypt(e,this.secretkey),n=t.toString(fi.enc.Utf8);return n}getfBBufferShader(){var e=null;e=Sc;var t=jt.decrypt(e,this.secretkey),n=t.toString(fi.enc.Utf8);return n}getvBkShader(){var e=null;e=xx;var t=jt.decrypt(e,this.secretkey),n=t.toString(fi.enc.Utf8);return n}getfBkShader(){var e=null;e=gx;var t=jt.decrypt(e,this.secretkey),n=t.toString(fi.enc.Utf8);return n}makebuild(){var e=jt.encrypt(gc,this.secretkey).toString(),t=jt.encrypt(vc,this.secretkey).toString(),n=jt.encrypt(_c,this.secretkey).toString(),r=jt.encrypt(Sc,this.secretkey).toString();e="export  const vABufferShader=`"+e+"`;",t="export const fABufferShader=`"+t+"`;",n="export const vBBufferShader=`"+n+"`;",r="export const fBBufferShader=`"+r+"`;",console.log(`makebuild ==== compelte!!!
`);var s=e+t+n+r;return s}}let Pi=new jx;var Zx=Pi.getvABufferShader(),Kx=Pi.getfABufferShader(),Jx=Pi.getvBBufferShader(),Qx=Pi.getfBBufferShader(),$x=Pi.getvBkShader(),eg=Pi.getfBkShader(),tl=new cx,It,Xt=new de(window.innerWidth,0),Ba=!1,hn=0,nt=new Date;new $e(nt.getFullYear(),nt.getMonth(),nt.getDate(),nt.getDay());var tg=25e-5,ut=700,pt=700,Xi=0,nl,_a,Nr,sa,On,il,Sa,er,gi,un,rl={minFilter:ht,stencilBuffer:!1,depthBuffer:!1,generateMipmaps:!1},At,Ti,Zt,Oi=new de,zi=[],Bn=[],aa;function ng(){console.log("threejs startup log: winddow = ",window.innerWidth,window.innerHeight),It=new Il,It.setSize(ut,pt),document.body.appendChild(It.domElement),It.getDrawingBufferSize(Oi),Zt=new xn(Oi.x,Oi.y,rl),Zt.wrapS=Tt,Zt.wrapT=Tt,Zt.minFilter=ht,Zt.magFilter=_t,Zt.stencilBuffer=!1,Zt.depthBuffer=!1,_a=new _s,Nr=new Rt(1,ut/pt,1,1e6);const i=new nx;i.setPath("textures/skybox/"),sa=i.load(["space_ft.jpg","space_bk.jpg","space_up.jpg","space_dn.jpg","space_rt.jpg","space_lf.jpg"]);const e=new ix;e.setPath("textures/skybox/");var t=e.load("channel1.jpg");t.magFilter=ht,t.minFilter=ht,t.wrapS=qi,t.wrapT=qi,t.repeat.set(4,4),On=new Bt({side:St,uniforms:{iChannel0:{value:sa},iChannel1:{value:t},iResolution:{value:new z(ut,pt,2e3)},iMouse:{value:new de(ut,0)},iTime:{value:hn},iDate:{value:new $e(nt.getFullYear(),nt.getMonth(),nt.getDate(),nt.getDay())},iMode:{value:0}},vertexShader:Zx,fragmentShader:Kx});var n=new dn(ut,pt,2500);nl=new wt(n,On),_a.add(nl),Sa=new _s,er=new Rt(1,ut/pt,1,1e6),un=new xn(Oi.x,Oi.y,rl),un.wrapS=Tt,un.wrapT=Tt,un.minFilter=ht,un.magFilter=ht,un.stencilBuffer=!1,un.depthBuffer=!1,gi=new Bt({side:St,uniforms:{iChannelA0:{value:sa},iChannelA1:{value:t},iChannel0FromA:{value:un.texture},iResolution:{value:new z(ut,pt,2e3)},iMouse:{value:new de(0,0)},iTime:{value:hn},iDate:{value:new $e(nt.getFullYear(),nt.getMonth(),nt.getDate(),nt.getDay())},iMode:{value:0}},vertexShader:Jx,fragmentShader:Qx});var r=new dn(ut,pt,2500);il=new wt(r,gi),Sa.add(il),new hx(er,It.domElement),At=new _s,Ti=new Rt(5,ut/pt,1,1e6),Ti.position.z=100;var s=new Bt({side:Ot,uniforms:{iChannelUI:{value:Zt.texture},iResolution:{value:new z(ut,pt,1)}},vertexShader:$x,fragmentShader:eg});At.background=Zt.texture;var o=new dn(ut,pt,2500),a=new wt(o,s);At.add(a);var l=new Jm({color:33008});l.side=mn,aa=new ox(0,1e5),aa.position.set(2,5,0),At.add(aa);var c=new wt(new dn(10,1,1),l);c.position.set(0,-4,0),c.name="meshbutton1",c.material.transparent=!0,c.material.opacity=.4,At.add(c);var u=new fx;const f=`
  varying vec3 vWorldPosition;
  varying vec4 fragCoord;
  varying vec2 vUv;
  void main() {

  vUv = uv;
  vec4 worldPosition = modelMatrix * vec4(position, 1.0);

  vWorldPosition = vec3(-worldPosition.z, worldPosition.y, -worldPosition.x);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  fragCoord = gl_Position;
  }
  `,h=`
  varying vec3 vWorldPosition;
  varying vec4 fragCoord;
  varying vec2 vUv;
  uniform float iTime;
  uniform vec3      iResolution;           // viewport resolution (in pixels)
  uniform float iFontsize;
  uniform vec3  iPosition;

  #define PI 3.14159265358979

  float colormap_red(float x) {
    if (x < 0.0) {
        return 54.0 / 255.0;
    } else if (x < 20049.0 / 82979.0) {
        return (829.79 * x + 54.51) / 255.0;
    } else {
        return 1.0;
    }
  }

  float colormap_green(float x) {
    if (x < 20049.0 / 82979.0) {
        return 0.0;
    } else if (x < 327013.0 / 810990.0) {
        return (8546482679670.0 / 10875673217.0 * x - 2064961390770.0 / 10875673217.0) / 255.0;
    } else if (x <= 1.0) {
        return (103806720.0 / 483977.0 * x + 19607415.0 / 483977.0) / 255.0;
    } else {
        return 1.0;
    }
  }

  float colormap_blue(float x) {
    if (x < 0.0) {
        return 54.0 / 255.0;
    } else if (x < 7249.0 / 82979.0) {
        return (829.79 * x + 54.51) / 255.0;
    } else if (x < 20049.0 / 82979.0) {
        return 127.0 / 255.0;
    } else if (x < 327013.0 / 810990.0) {
        return (792.02249341361393720147485376583 * x - 64.364790735602331034989206222672) / 255.0;
    } else {
        return 1.0;
    }
  }

  vec4 colormap(float x) {
    // return vec4(colormap_red(x), colormap_green(x), colormap_blue(x), 1.0);
    return vec4(0.0, colormap_green(x), colormap_blue(x), 1.0);
  }


  float rand(vec2 n) { 
    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
  }

  float noise(vec2 p){
    vec2 ip = floor(p);
    vec2 u = fract(p);
    u = u*u*(3.0-2.0*u);

    float res = mix(
        mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
        mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
    return res*res;
  }

  const mat2 mtx = mat2( 0.80,  0.60, -0.60,  0.80 );

  float fbm( vec2 p )
  {
    float f = 0.0;

    f += 0.500000*noise( p + iTime * 300. ); p = mtx*p*2.02;
    f += 0.031250*noise( p ); p = mtx*p*2.01;
    f += 0.250000*noise( p ); p = mtx*p*2.03;
    f += 0.125000*noise( p ); p = mtx*p*2.01;
    f += 0.062500*noise( p ); p = mtx*p*2.04;
    f += 0.015625*noise( p + sin(iTime * 150.) );

    return f/0.96875;
  }

  float pattern( in vec2 p )
  {
  return fbm( p + fbm( p + fbm( p ) ) );
  }

  void mainImage( out vec4 fragColor, in vec2 fragCoord )
  {
    vec2 uv = fragCoord/iResolution.x;
  float shade = pattern(uv);
    fragColor = vec4(colormap(shade).rgb, shade);
  }

  float angleTime(float time)
  {
    float a = time;
    //right->left
    float angle = PI*2.0 - mod(a, (PI*2.0));
    //left->right
    // float angle = mod(a, (PI*2.0));
    return angle;
  }

  float angleWorldPoint()
  {
    //iPosition = -2.5, 2.0, 0 : 0.8,  -1.5, 2.0, 0 : 0.9
    //y: 1.8 ~ 2.9 => up down
    //x: -1.40 ~ -1.48 => bivel
    //z: -2.7 ~ 2.7 =>left right
    //=>

    float bevelSize = iFontsize / 10.;

    // if(vWorldPosition.z > -iFontsize/2. - iPosition.x + (.1 + iFontsize/2.) * sin(iTime*40.))
    // {
    //   shade = pattern(uv);
    // }
    
    // if(vWorldPosition.y > iPosition.y + iFontsize/2. + sin(iTime*40.)/2.0)
    // {
    //   shade = pattern(uv);
    // }

    // if(vWorldPosition.x > -2.0 * (iFontsize - bevelSize) + (iFontsize/2.) * sin(iTime*40.))
    // {
    //   shade = pattern(uv);
    // }

    // if(vWorldPosition.z > -iFontsize/2. - iPosition.x + (.1 + iFontsize/2.) * sin(iTime*40.))
    // {
    //   shade = pattern(uv);
    // }
    
    // if(vWorldPosition.y > iPosition.y + iFontsize/2. + sin(iTime*40.)/2.0)
    // {
    //   shade = pattern(uv);
    // }


    float dz = 0.1;
    float dy = 0.1;
    float sz = -iFontsize/2. - iPosition.x;
    float sy = iPosition.y + iFontsize/2.;

    
    float oz = -iFontsize/2. - iPosition.x;
    float oy = iPosition.y + iFontsize/2.;

    float iz = vWorldPosition.z - oz;
    float iy = vWorldPosition.y - oy;
    
    float id = sqrt(iy*iy + iz*iz);

    return atan(iz, iy) + PI;
  }

  vec4 makecolor(vec2 uv)
  {
    vec4 fragcolor = vec4(0.0, 0.3, 1., 0.0);
    float color = 0.;
    float r = 0.;
    float angle = angleTime(iTime*80.);
    float anglelen = PI*2.0 / 0.8;
    // //right->left
    // if(angleWorldPoint() < angle)
    // {
    //   color = pattern(uv);
    //   r = 1.;
    // }

    //left->right
    // float wa = angleWorldPoint();
    // if(wa > angle && wa < angle + anglelen)
    {
      color = pattern(uv);
      r = 1.;
      fragcolor = vec4(colormap(color).rgb, r);
    }
    
    return fragcolor;
  }

  void main(){
    vec3 normalizedVWorldPosition = normalize(vWorldPosition);
    vec2 uv = vUv * 10. * normalizedVWorldPosition.y;
    vec4 fragColor =  makecolor(uv);
    // if(fragColor.w == 0.) discard;
    gl_FragColor = fragColor;
  }
  `,p=`
  varying vec3 vWorldPosition;
  varying vec4 fragCoord;
  varying vec2 vUv;
  uniform vec3 iResolution;
  uniform float iTime;
  varying vec4 fragColor;
  uniform float iFontsize;
  uniform vec3  iPosition;

  #define PI 3.14159265358979
  #define P2 6.28318530717959

  float Pow5 (float x)
  {
      return x*x * x*x * x;
  }

  float saturate(float x)
  {
    return max(0., min(1., x));
  }

  // vec3 F_Schlick(vec3 f0, float wo, float wh)
  // {
  //     return f0 + (vec3(1.0) - f0) * Pow5(1.0 - max(0.0, dot(wo, wh)));
  // }

  vec3 F_Schlick1(float u, vec3 f0, float f90) {
    return f0 + (vec3(f90) - f0) * pow(1.0 - u, 5.0);
  }

  float F_Schlick2(float u, float f0) {
    float f = pow(1.0 - u, 5.0);
    return f + f0 * (1.0 - f);
  }

  vec3 F_Schlick(vec3 f0, float f90, float u) {
    return f0 + (f90 - f0) * exp2((-5.55473f * u - 6.98316f) * u);  //native_powr(1.f - u, 5.f);
  }

  float Fr_DisneyDiffuse(float NdotV, float NdotL, float LdotH, float linearRoughness) {
    float energyBias = mix(0., 0.5, linearRoughness);
    float energyFactor = mix(1.0, 1.0 / 1.51, linearRoughness);
    float fd90 = energyBias + 2.0 * LdotH*LdotH * linearRoughness;
    vec3 f0 = vec3(1.0f, 1.0f, 1.0f);
    float lightScatter = F_Schlick(f0, fd90, NdotL).r;
    float viewScatter = F_Schlick(f0, fd90, NdotV).r;
    
    return lightScatter * viewScatter * energyFactor;
  }

  float DisneyDiffuse(float NdotV, float NdotL, float LdotH, float perceptualRoughness)
  {
      float fd90 = 0.5 + 2. * LdotH * LdotH * perceptualRoughness;
      // Two schlick fresnel term
      float lightScatter   = (1. + (fd90 - 1.) * Pow5(1. - NdotL));
      float viewScatter    = (1. + (fd90 - 1.) * Pow5(1. - NdotV));

      return lightScatter * viewScatter;
  }


  float ggxNormalDistribution( float NdotH, float roughness )
  {
    float a2 = roughness * roughness;
    float d = ((NdotH * a2 - NdotH) * NdotH + 1.);
    return a2 / (d * d * PI);
  }

  float ggxSchlickMaskingTerm(float NdotL, float NdotV, float roughness)
  {
    float GGXV = NdotL * sqrt(NdotV * NdotV * (1.0 - roughness) + roughness);
    float GGXL = NdotV * sqrt(NdotL * NdotL * (1.0 - roughness) + roughness);
    float G = 0.5/(GGXV + GGXL);
    return G;
  }

  vec3 schlickFresnel(vec3 f0, float lDotH)
  {
    return f0 + (vec3(1.0f, 1.0f, 1.0f) - f0) * pow(1.0f - lDotH, 5.0f);
  }

  float D_GGX(float NoH, float roughness) {
    float a = NoH * roughness;
    float k = roughness / (1.0 - NoH * NoH + a * a);
    return k * k * (1.0 / PI);
  }

  float V_Kelemen(float LoH) {
    return 0.25 / (LoH * LoH);
  }

  float Fd_Lambert() {
    return 1.0 / PI;
  }

  float V_SmithGGXCorrelated(float NoV, float NoL, float roughness) {
    float a2 = roughness * roughness;
    float GGXV = NoL * sqrt(NoV * NoV * (1.0 - a2) + a2);
    float GGXL = NoV * sqrt(NoL * NoL * (1.0 - a2) + a2);
    return 0.5 / (GGXV + GGXL);
  }


  float roughnessValue = 1.5;
  vec3 WorldSpaceCameraPos = vec3(0.1, 1., 0.5);
  vec3 lightpos = vec3(-0.5, 2.0, 0.);
  vec3 baseColor = vec3(0., .3, .9);
  // vec3 lightColor = vec3(2., 2., 2.);
  float lightColor = 4.5;
  float clearCoat = 0.3;
  float transparent = .8;

  void main() {
  vUv = uv;
  vec4 worldPosition = modelMatrix * vec4(position, 1.0);
  vWorldPosition = vec3(-worldPosition.z, worldPosition.y, -worldPosition.x);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

  vec3 origin = (vec4(iPosition,1.0) * modelMatrix).xyz  + vec3(iFontsize/2.);
  WorldSpaceCameraPos += origin;
  lightpos += origin;

  float linearRoughness = roughnessValue * roughnessValue;
  vec3 normalDirection = normalize(worldPosition.xyz);
  vec3 viewDirection = normalize(WorldSpaceCameraPos-worldPosition.xyz);
  vec3 lightDirection = normalize(lightpos-worldPosition.xyz);
  vec3 halfDirection = normalize(lightDirection + viewDirection );


  //========================Diffuse==============================================
  float NdotL = saturate(dot(normalDirection, lightDirection));
  float NdotV = saturate(dot(normalDirection, viewDirection));
  float VdotH = saturate(dot(viewDirection, halfDirection));
  float NdotH = saturate(dot(normalDirection, halfDirection));
  float LdotH = saturate(dot(lightDirection, halfDirection));

  float diffuse = Fr_DisneyDiffuse(NdotV, NdotL, LdotH, linearRoughness);
  vec3 diffuseColor = baseColor * diffuse/PI;

  //========================Metal=============================================
  // Evaluate terms for our GGX BRDF model
  vec3 F = schlickFresnel(baseColor, LdotH);	
  float  D = ggxNormalDistribution(NdotH, linearRoughness);
  float  G = ggxSchlickMaskingTerm(NdotL, NdotV, linearRoughness);
    
    //Specular component
  vec3 specularReflection = lightColor * baseColor * (F * D * G);


  //========================clearCoat=============================================
  // remapping and linearization of clear coat roughness
  float clearCoatPerceptualRoughness = clamp(roughnessValue, 0.089, 1.0);
  float clearCoatRoughness = clearCoatPerceptualRoughness * clearCoatPerceptualRoughness;

  float f0 = 0.04;
  // clear coat BRDF
  float  Dc = D_GGX(NdotH, clearCoatRoughness);
  float  Vc = V_Kelemen(LdotH);
  float  Fc = F_Schlick2(f0, LdotH) * clearCoat; // clear coat strength
  float Frc = (Dc * Vc) * Fc;
  vec3 Fd = diffuseColor * Fd_Lambert();
  float V = V_SmithGGXCorrelated(NdotV, NdotL, clearCoatRoughness);
  vec3 Fr = (Dc * V) * F;
  // account for energy loss in the base layer
  vec3 CoatColor =  baseColor * ((Fd + Fr * (1.0 - Fc)) * (1.0 - Fc) + Frc);


  //========================glassColor=============================================
  float alpha = transparent;//baseColor.a;
  vec3 specularColor = specularReflection;    
  vec4 glassColor =  vec4(diffuseColor + specularColor, alpha);


  fragColor = vec4(diffuseColor, 1.0);
  fragColor = vec4(specularReflection, 1.0);
  // fragColor = vec4(CoatColor, 1.0);
  fragColor = glassColor;

  fragCoord = gl_Position;
  }
  `,x=`
  varying vec4 fragColor;

  void main(void)
  {
    gl_FragColor = fragColor;
  }
  `;function v(d,_,g,S,b){Bn.push(new Bt({side:Ot,uniforms:{iResolution:{value:new z(ut,pt,1)},iTime:{value:hn},iMouse:{value:Xt},iMatrix:{value:{}},iFontsize:{value:g},iPosition:{value:S}},vertexShader:f,fragmentShader:h})),zi.push(new Bt({side:Ot,uniforms:{iResolution:{value:new z(ut,pt,1)},iTime:{value:hn},iMouse:{value:Xt},iMatrix:{value:{}},iFontsize:{value:.8},iPosition:{value:S}},vertexShader:p,fragmentShader:x}));const T=new xc(b,{font:_,size:g,height:g+.6,curveSegments:20,bevelEnabled:!0,bevelThickness:g*.5,bevelSize:g/10,bevelOffset:0,bevelSegments:20});var E=new wt(T,Bn[Bn.length-1]);return E.position.set(S.x,S.y,S.z),d.add(E),E}function m(d,_,g,S,b,T){const E=new xc(T,{font:_,size:g,height:g+.6,curveSegments:10});var P=new wt(E,b);return P.position.set(S.x,S.y,S.z),d.add(P),P}u.load("/fonts/helvetiker_bold.typeface.json",function(d){m(At,d,.2,new z(-3.3,-3.9,0),new wa({color:16756768,wireframe:!1}),`  This is not a Video & not 3D animation & Effect, 
 AR Vision by GLSL from msapple0338@gmail.com`);var _=-2,g=.8;v(At,d,g,new z(_,2,0),"V"),_+=g,v(At,d,g,new z(_,2,0),"i"),_+=g/2,v(At,d,g,new z(_,2,0),"s"),_+=g,v(At,d,g,new z(_,2,0),"i"),_+=g/2,v(At,d,g,new z(_,2,0),"o"),_+=g,v(At,d,g,new z(_,2,0),"n")})}Xt=new de;document.addEventListener("mousemove",cg,!1);document.addEventListener("mousedown",lg,!1);document.addEventListener("mouseup",og,!1);document.addEventListener("keydown",ag,!1);document.addEventListener("resize",sg);window.addEventListener("pointerdown",ig);const oa=new de;function ig(i){oa.x=i.clientX/ut*2-1,oa.y=-(i.clientY/pt)*2+1,tl.setFromCamera(oa,Ti);for(var e=tl.intersectObjects(At.children,!0),t=0;t<e.length;t++)e[t].object.name=="meshbutton1"&&rg()}function rg(){console.log("onMeshButton1 click iMode = ",Xi),Xi=(Xi+1)%2}function sg(){It.setSize(ut,pt),Nr.aspect=pt/ut,Nr.updateProjectionMatrix(),er.aspect=pt/ut,er.updateProjectionMatrix(),Ti.aspect=pt/ut,Ti.updateProjectionMatrix()}function ag(i){new z}function og(i){Ba=!1}function cg(i){i.preventDefault(),Ba&&(Xt.x=i.x,Xt.y=-i.y)}function lg(i){Xt.x=i.x,Xt.y=-i.y,Ba=!0}function ug(){if(On!=null){if(nt=new Date,On.uniforms.iMode.value=Xi,On.uniforms.iMouse.value=Xt,On.uniforms.iTime.value=hn,On.uniforms.iDate.value=new $e(nt.getFullYear(),nt.getMonth(),nt.getDate(),nt.getDay()),gi.uniforms.iMode.value=Xi,gi.uniforms.iMouse.value=Xt,gi.uniforms.iTime.value=hn,gi.uniforms.iDate.value=new $e(nt.getFullYear(),nt.getMonth(),nt.getDate(),nt.getDay()),zi!=null)for(var i=0;i<zi.length;i++)zi[i].uniforms.iTime.value=hn*3,zi[i].uniforms.iMouse.value=Xt;if(Bn!=null)for(var i=0;i<Bn.length;i++)Bn[i].uniforms.iTime.value=hn*3+500*i,Bn[i].uniforms.iMouse.value=Xt;hn+=tg}}function jl(){ug(),requestAnimationFrame(jl),It.clear(),It.setRenderTarget(un),It.render(_a,Nr),It.setRenderTarget(Zt),It.render(Sa,er),It.setRenderTarget(null),It.render(At,Ti)}ng();jl();
