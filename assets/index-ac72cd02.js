(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ya="155",Yn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Kn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Jl=0,ka=1,Ql=2,il=1,eu=2,ln=3,mn=0,Mt=1,Bt=2,bn=0,_i=1,Ga=2,Va=3,Wa=4,tu=5,hi=100,nu=101,iu=102,Xa=103,qa=104,ru=200,su=201,au=202,ou=203,rl=204,sl=205,cu=206,lu=207,uu=208,fu=209,hu=210,du=0,pu=1,mu=2,oa=3,vu=4,xu=5,gu=6,_u=7,al=0,yu=1,Su=2,Tn=0,Mu=1,Eu=2,bu=3,Tu=4,Au=5,ol=300,Mi=301,Ei=302,ca=303,la=304,Fr=306,qi=1e3,wt=1001,ua=1002,St=1003,Ya=1004,Xr=1005,ft=1006,wu=1007,Yi=1008,An=1009,Cu=1010,Ru=1011,Sa=1012,cl=1013,Mn=1014,En=1015,Ki=1016,ll=1017,ul=1018,Bn=1020,Pu=1021,Xt=1023,Lu=1024,Du=1025,zn=1026,bi=1027,Uu=1028,fl=1029,Iu=1030,hl=1031,dl=1033,qr=33776,Yr=33777,Kr=33778,Zr=33779,Ka=35840,Za=35841,ja=35842,$a=35843,Nu=36196,Ja=37492,Qa=37496,eo=37808,to=37809,no=37810,io=37811,ro=37812,so=37813,ao=37814,oo=37815,co=37816,lo=37817,uo=37818,fo=37819,ho=37820,po=37821,jr=36492,Fu=36283,mo=36284,vo=36285,xo=36286,pl=3e3,Hn=3001,Ou=3200,Bu=3201,ml=0,zu=1,kn="",Ne="srgb",Jt="srgb-linear",vl="display-p3",$r=7680,Hu=519,ku=512,Gu=513,Vu=514,Wu=515,Xu=516,qu=517,Yu=518,Ku=519,go=35044,_o="300 es",fa=1035,hn=2e3,Dr=2001;class Wn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yo=1234567;const Hi=Math.PI/180,Zi=180/Math.PI;function Xn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xt[i&255]+xt[i>>8&255]+xt[i>>16&255]+xt[i>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]).toLowerCase()}function ht(i,e,t){return Math.max(e,Math.min(t,i))}function Ma(i,e){return(i%e+e)%e}function Zu(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function ju(i,e,t){return i!==e?(t-i)/(e-i):0}function ki(i,e,t){return(1-t)*i+t*e}function $u(i,e,t,n){return ki(i,e,1-Math.exp(-t*n))}function Ju(i,e=1){return e-Math.abs(Ma(i,e*2)-e)}function Qu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ef(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function tf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function nf(i,e){return i+Math.random()*(e-i)}function rf(i){return i*(.5-Math.random())}function sf(i){i!==void 0&&(yo=i);let e=yo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function af(i){return i*Hi}function of(i){return i*Zi}function ha(i){return(i&i-1)===0&&i!==0}function cf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ur(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function lf(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),p=s((n-e)/2),v=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*v,l*p,a*c);break;case"YXY":i.set(l*p,a*u,l*v,a*c);break;case"ZYZ":i.set(l*v,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function di(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Tt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const uf={DEG2RAD:Hi,RAD2DEG:Zi,generateUUID:Xn,clamp:ht,euclideanModulo:Ma,mapLinear:Zu,inverseLerp:ju,lerp:ki,damp:$u,pingpong:Ju,smoothstep:Qu,smootherstep:ef,randInt:tf,randFloat:nf,randFloatSpread:rf,seededRandom:sf,degToRad:af,radToDeg:of,isPowerOfTwo:ha,ceilPowerOfTwo:cf,floorPowerOfTwo:Ur,setQuaternionFromProperEuler:lf,normalize:Tt,denormalize:di};class de{constructor(e=0,t=0){de.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,n,r,s,o,a,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],v=n[8],g=r[0],m=r[3],d=r[6],_=r[1],x=r[4],y=r[7],b=r[2],T=r[5],E=r[8];return s[0]=o*g+a*_+l*b,s[3]=o*m+a*x+l*T,s[6]=o*d+a*y+l*E,s[1]=c*g+u*_+h*b,s[4]=c*m+u*x+h*T,s[7]=c*d+u*y+h*E,s[2]=f*g+p*_+v*b,s[5]=f*m+p*x+v*T,s[8]=f*d+p*y+v*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,p=c*s-o*l,v=t*h+n*f+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=h*g,e[1]=(r*c-u*n)*g,e[2]=(a*n-r*o)*g,e[3]=f*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=p*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Jr.makeScale(e,t)),this}rotate(e){return this.premultiply(Jr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Jr=new ke;function xl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ji(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const So={};function Gi(i){i in So||(So[i]=!0,console.warn(i))}function yi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const ff=new ke().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),hf=new ke().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function df(i){return i.convertSRGBToLinear().applyMatrix3(hf)}function pf(i){return i.applyMatrix3(ff).convertLinearToSRGB()}const mf={[Jt]:i=>i,[Ne]:i=>i.convertSRGBToLinear(),[vl]:df},vf={[Jt]:i=>i,[Ne]:i=>i.convertLinearToSRGB(),[vl]:pf},Ht={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return Jt},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=mf[e],r=vf[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let Zn;class gl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zn===void 0&&(Zn=ji("canvas")),Zn.width=e.width,Zn.height=e.height;const n=Zn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Zn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ji("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=yi(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yi(t[n]/255)*255):t[n]=yi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xf=0;class _l{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=Xn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(es(r[o].image)):s.push(es(r[o]))}else s=es(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function es(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?gl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gf=0;class Pt extends Wn{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=wt,r=wt,s=ft,o=Yi,a=Xt,l=An,c=Pt.DEFAULT_ANISOTROPY,u=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=Xn(),this.name="",this.source=new _l(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Gi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Hn?Ne:kn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ol)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qi:e.x=e.x-Math.floor(e.x);break;case wt:e.x=e.x<0?0:1;break;case ua:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qi:e.y=e.y-Math.floor(e.y);break;case wt:e.y=e.y<0?0:1;break;case ua:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Gi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ne?Hn:pl}set encoding(e){Gi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Hn?Ne:kn}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=ol;Pt.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,t=0,n=0,r=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],v=l[9],g=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(p+1)/2,b=(d+1)/2,T=(u+f)/4,E=(h+g)/4,P=(v+m)/4;return x>y&&x>b?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=T/n,s=E/n):y>b?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=T/r,s=P/r):b<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),n=E/s,r=P/s),this.set(n,r,s,t),this}let _=Math.sqrt((m-v)*(m-v)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(h-g)/_,this.z=(f-u)/_,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _f extends Wn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Gi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Hn?Ne:kn),this.texture=new Pt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ft,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new _l(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vn extends _f{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class yl extends Pt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=St,this.minFilter=St,this.wrapR=wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yf extends Pt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=St,this.minFilter=St,this.wrapR=wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=s[o+0],p=s[o+1],v=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=v,e[t+3]=g;return}if(h!==g||l!==f||c!==p||u!==v){let m=1-a;const d=l*f+c*p+u*v+h*g,_=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const b=Math.sqrt(x),T=Math.atan2(b,d*_);m=Math.sin(m*T)/b,a=Math.sin(a*T)/b}const y=a*_;if(l=l*m+f*y,c=c*m+p*y,u=u*m+v*y,h=h*m+g*y,m===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],p=s[o+2],v=s[o+3];return e[t]=a*v+u*h+l*p-c*f,e[t+1]=l*v+u*f+c*h-a*p,e[t+2]=c*v+u*p+a*f-l*h,e[t+3]=u*v-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*p*v,this._y=c*p*h-f*u*v,this._z=c*u*v+f*p*h,this._w=c*u*h-f*p*v;break;case"YXZ":this._x=f*u*h+c*p*v,this._y=c*p*h-f*u*v,this._z=c*u*v-f*p*h,this._w=c*u*h+f*p*v;break;case"ZXY":this._x=f*u*h-c*p*v,this._y=c*p*h+f*u*v,this._z=c*u*v+f*p*h,this._w=c*u*h-f*p*v;break;case"ZYX":this._x=f*u*h-c*p*v,this._y=c*p*h+f*u*v,this._z=c*u*v-f*p*h,this._w=c*u*h+f*p*v;break;case"YZX":this._x=f*u*h+c*p*v,this._y=c*p*h+f*u*v,this._z=c*u*v-f*p*h,this._w=c*u*h-f*p*v;break;case"XZY":this._x=f*u*h-c*p*v,this._y=c*p*h-f*u*v,this._z=c*u*v+f*p*h,this._w=c*u*h+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*n,u=l*n+a*t-s*r,h=l*r+s*n-o*t,f=-s*t-o*n-a*r;return this.x=c*l+f*-s+u*-a-h*-o,this.y=u*l+f*-o+h*-s-c*-a,this.z=h*l+f*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ts.copy(this).projectOnVector(e),this.sub(ts)}reflect(e){return this.sub(ts.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ts=new z,Mo=new Gn;class tr{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),jn.copy(e.boundingBox),jn.applyMatrix4(e.matrixWorld),this.union(jn);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)nn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(nn)}else r.boundingBox===null&&r.computeBoundingBox(),jn.copy(r.boundingBox),jn.applyMatrix4(e.matrixWorld),this.union(jn)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ii),sr.subVectors(this.max,Ii),$n.subVectors(e.a,Ii),Jn.subVectors(e.b,Ii),Qn.subVectors(e.c,Ii),xn.subVectors(Jn,$n),gn.subVectors(Qn,Jn),Ln.subVectors($n,Qn);let t=[0,-xn.z,xn.y,0,-gn.z,gn.y,0,-Ln.z,Ln.y,xn.z,0,-xn.x,gn.z,0,-gn.x,Ln.z,0,-Ln.x,-xn.y,xn.x,0,-gn.y,gn.x,0,-Ln.y,Ln.x,0];return!ns(t,$n,Jn,Qn,sr)||(t=[1,0,0,0,1,0,0,0,1],!ns(t,$n,Jn,Qn,sr))?!1:(ar.crossVectors(xn,gn),t=[ar.x,ar.y,ar.z],ns(t,$n,Jn,Qn,sr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const tn=[new z,new z,new z,new z,new z,new z,new z,new z],nn=new z,jn=new tr,$n=new z,Jn=new z,Qn=new z,xn=new z,gn=new z,Ln=new z,Ii=new z,sr=new z,ar=new z,Dn=new z;function ns(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Dn.fromArray(i,s);const a=r.x*Math.abs(Dn.x)+r.y*Math.abs(Dn.y)+r.z*Math.abs(Dn.z),l=e.dot(Dn),c=t.dot(Dn),u=n.dot(Dn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Sf=new tr,Ni=new z,is=new z;class Ea{constructor(e=new z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Sf.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ni.subVectors(e,this.center);const t=Ni.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ni,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(is.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ni.copy(e.center).add(is)),this.expandByPoint(Ni.copy(e.center).sub(is))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const rn=new z,rs=new z,or=new z,_n=new z,ss=new z,cr=new z,as=new z;class ba{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rn.copy(this.origin).addScaledVector(this.direction,t),rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){rs.copy(e).add(t).multiplyScalar(.5),or.copy(t).sub(e).normalize(),_n.copy(this.origin).sub(rs);const s=e.distanceTo(t)*.5,o=-this.direction.dot(or),a=_n.dot(this.direction),l=-_n.dot(or),c=_n.lengthSq(),u=Math.abs(1-o*o);let h,f,p,v;if(u>0)if(h=o*l-a,f=o*a-l,v=s*u,h>=0)if(f>=-v)if(f<=v){const g=1/u;h*=g,f*=g,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-v?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=v?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(rs).addScaledVector(or,f),p}intersectSphere(e,t){rn.subVectors(e.center,this.origin);const n=rn.dot(this.direction),r=rn.dot(rn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,rn)!==null}intersectTriangle(e,t,n,r,s){ss.subVectors(t,e),cr.subVectors(n,e),as.crossVectors(ss,cr);let o=this.direction.dot(as),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_n.subVectors(this.origin,e);const l=a*this.direction.dot(cr.crossVectors(_n,cr));if(l<0)return null;const c=a*this.direction.dot(ss.cross(_n));if(c<0||l+c>o)return null;const u=-a*_n.dot(as);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,n,r,s,o,a,l,c,u,h,f,p,v,g,m){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,h,f,p,v,g,m)}set(e,t,n,r,s,o,a,l,c,u,h,f,p,v,g,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=v,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ei.setFromMatrixColumn(e,0).length(),s=1/ei.setFromMatrixColumn(e,1).length(),o=1/ei.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*h,v=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+v*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=v+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,v=c*u,g=c*h;t[0]=f+g*a,t[4]=v*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-v,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,v=c*u,g=c*h;t[0]=f-g*a,t[4]=-o*h,t[8]=v+p*a,t[1]=p+v*a,t[5]=o*u,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,v=a*u,g=a*h;t[0]=l*u,t[4]=v*c-p,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=p*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,v=a*l,g=a*c;t[0]=l*u,t[4]=g-f*h,t[8]=v*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+v,t[10]=f-g*h}else if(e.order==="XZY"){const f=o*l,p=o*c,v=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=o*u,t[9]=p*h-v,t[2]=v*h-p,t[6]=a*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mf,e,Ef)}lookAt(e,t,n){const r=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),yn.crossVectors(n,Ut),yn.lengthSq()===0&&(Math.abs(n.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),yn.crossVectors(n,Ut)),yn.normalize(),lr.crossVectors(Ut,yn),r[0]=yn.x,r[4]=lr.x,r[8]=Ut.x,r[1]=yn.y,r[5]=lr.y,r[9]=Ut.y,r[2]=yn.z,r[6]=lr.z,r[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],v=n[2],g=n[6],m=n[10],d=n[14],_=n[3],x=n[7],y=n[11],b=n[15],T=r[0],E=r[4],P=r[8],M=r[12],S=r[1],L=r[5],O=r[9],D=r[13],B=r[2],H=r[6],Z=r[10],X=r[14],j=r[3],te=r[7],$=r[11],R=r[15];return s[0]=o*T+a*S+l*B+c*j,s[4]=o*E+a*L+l*H+c*te,s[8]=o*P+a*O+l*Z+c*$,s[12]=o*M+a*D+l*X+c*R,s[1]=u*T+h*S+f*B+p*j,s[5]=u*E+h*L+f*H+p*te,s[9]=u*P+h*O+f*Z+p*$,s[13]=u*M+h*D+f*X+p*R,s[2]=v*T+g*S+m*B+d*j,s[6]=v*E+g*L+m*H+d*te,s[10]=v*P+g*O+m*Z+d*$,s[14]=v*M+g*D+m*X+d*R,s[3]=_*T+x*S+y*B+b*j,s[7]=_*E+x*L+y*H+b*te,s[11]=_*P+x*O+y*Z+b*$,s[15]=_*M+x*D+y*X+b*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],v=e[3],g=e[7],m=e[11],d=e[15];return v*(+s*l*h-r*c*h-s*a*f+n*c*f+r*a*p-n*l*p)+g*(+t*l*p-t*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+t*c*h-t*a*p-s*o*h+n*o*p+s*a*u-n*c*u)+d*(-r*a*u-t*l*h+t*a*f+r*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],v=e[12],g=e[13],m=e[14],d=e[15],_=h*m*c-g*f*c+g*l*p-a*m*p-h*l*d+a*f*d,x=v*f*c-u*m*c-v*l*p+o*m*p+u*l*d-o*f*d,y=u*g*c-v*h*c+v*a*p-o*g*p-u*a*d+o*h*d,b=v*h*l-u*g*l-v*a*f+o*g*f+u*a*m-o*h*m,T=t*_+n*x+r*y+s*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=_*E,e[1]=(g*f*s-h*m*s-g*r*p+n*m*p+h*r*d-n*f*d)*E,e[2]=(a*m*s-g*l*s+g*r*c-n*m*c-a*r*d+n*l*d)*E,e[3]=(h*l*s-a*f*s-h*r*c+n*f*c+a*r*p-n*l*p)*E,e[4]=x*E,e[5]=(u*m*s-v*f*s+v*r*p-t*m*p-u*r*d+t*f*d)*E,e[6]=(v*l*s-o*m*s-v*r*c+t*m*c+o*r*d-t*l*d)*E,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*p+t*l*p)*E,e[8]=y*E,e[9]=(v*h*s-u*g*s-v*n*p+t*g*p+u*n*d-t*h*d)*E,e[10]=(o*g*s-v*a*s+v*n*c-t*g*c-o*n*d+t*a*d)*E,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*p-t*a*p)*E,e[12]=b*E,e[13]=(u*g*r-v*h*r+v*n*f-t*g*f-u*n*m+t*h*m)*E,e[14]=(v*a*r-o*g*r-v*n*l+t*g*l+o*n*m-t*a*m)*E,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*f+t*a*f)*E,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,p=s*u,v=s*h,g=o*u,m=o*h,d=a*h,_=l*c,x=l*u,y=l*h,b=n.x,T=n.y,E=n.z;return r[0]=(1-(g+d))*b,r[1]=(p+y)*b,r[2]=(v-x)*b,r[3]=0,r[4]=(p-y)*T,r[5]=(1-(f+d))*T,r[6]=(m+_)*T,r[7]=0,r[8]=(v+x)*E,r[9]=(m-_)*E,r[10]=(1-(f+g))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=ei.set(r[0],r[1],r[2]).length();const o=ei.set(r[4],r[5],r[6]).length(),a=ei.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],kt.copy(this);const c=1/s,u=1/o,h=1/a;return kt.elements[0]*=c,kt.elements[1]*=c,kt.elements[2]*=c,kt.elements[4]*=u,kt.elements[5]*=u,kt.elements[6]*=u,kt.elements[8]*=h,kt.elements[9]*=h,kt.elements[10]*=h,t.setFromRotationMatrix(kt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=hn){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r);let p,v;if(a===hn)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Dr)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=hn){const l=this.elements,c=1/(t-e),u=1/(n-r),h=1/(o-s),f=(t+e)*c,p=(n+r)*u;let v,g;if(a===hn)v=(o+s)*h,g=-2*h;else if(a===Dr)v=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ei=new z,kt=new at,Mf=new z(0,0,0),Ef=new z(1,1,1),yn=new z,lr=new z,Ut=new z,Eo=new at,bo=new Gn;class Or{constructor(e=0,t=0,n=0,r=Or.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ht(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ht(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Eo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bo.setFromEuler(this),this.setFromQuaternion(bo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Or.DEFAULT_ORDER="XYZ";class Ta{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bf=0;const To=new z,ti=new Gn,sn=new at,ur=new z,Fi=new z,Tf=new z,Af=new Gn,Ao=new z(1,0,0),wo=new z(0,1,0),Co=new z(0,0,1),wf={type:"added"},Ro={type:"removed"};class Et extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new z,t=new Or,n=new Gn,r=new z(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new ke}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ta,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ti.setFromAxisAngle(e,t),this.quaternion.multiply(ti),this}rotateOnWorldAxis(e,t){return ti.setFromAxisAngle(e,t),this.quaternion.premultiply(ti),this}rotateX(e){return this.rotateOnAxis(Ao,e)}rotateY(e){return this.rotateOnAxis(wo,e)}rotateZ(e){return this.rotateOnAxis(Co,e)}translateOnAxis(e,t){return To.copy(e).applyQuaternion(this.quaternion),this.position.add(To.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ao,e)}translateY(e){return this.translateOnAxis(wo,e)}translateZ(e){return this.translateOnAxis(Co,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ur.copy(e):ur.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Fi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(Fi,ur,this.up):sn.lookAt(ur,Fi,this.up),this.quaternion.setFromRotationMatrix(sn),r&&(sn.extractRotation(r.matrixWorld),ti.setFromRotationMatrix(sn),this.quaternion.premultiply(ti.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(wf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ro)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ro)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(sn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,e,Tf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,Af,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Et.DEFAULT_UP=new z(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gt=new z,an=new z,os=new z,on=new z,ni=new z,ii=new z,Po=new z,cs=new z,ls=new z,us=new z;let fr=!1;class Wt{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Gt.subVectors(e,t),r.cross(Gt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Gt.subVectors(r,t),an.subVectors(n,t),os.subVectors(e,t);const o=Gt.dot(Gt),a=Gt.dot(an),l=Gt.dot(os),c=an.dot(an),u=an.dot(os),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,p=(c*l-a*u)*f,v=(o*u-a*l)*f;return s.set(1-p-v,v,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,on),on.x>=0&&on.y>=0&&on.x+on.y<=1}static getUV(e,t,n,r,s,o,a,l){return fr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fr=!0),this.getInterpolation(e,t,n,r,s,o,a,l)}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,on),l.setScalar(0),l.addScaledVector(s,on.x),l.addScaledVector(o,on.y),l.addScaledVector(a,on.z),l}static isFrontFacing(e,t,n,r){return Gt.subVectors(n,t),an.subVectors(e,t),Gt.cross(an).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),an.subVectors(this.a,this.b),Gt.cross(an).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return fr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fr=!0),Wt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return Wt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Wt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;ni.subVectors(r,n),ii.subVectors(s,n),cs.subVectors(e,n);const l=ni.dot(cs),c=ii.dot(cs);if(l<=0&&c<=0)return t.copy(n);ls.subVectors(e,r);const u=ni.dot(ls),h=ii.dot(ls);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ni,o);us.subVectors(e,s);const p=ni.dot(us),v=ii.dot(us);if(v>=0&&p<=v)return t.copy(s);const g=p*c-l*v;if(g<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(n).addScaledVector(ii,a);const m=u*v-p*h;if(m<=0&&h-u>=0&&p-v>=0)return Po.subVectors(s,r),a=(h-u)/(h-u+(p-v)),t.copy(r).addScaledVector(Po,a);const d=1/(m+g+f);return o=g*d,a=f*d,t.copy(n).addScaledVector(ni,o).addScaledVector(ii,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Cf=0;class nr extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Xn(),this.name="",this.type="Material",this.blending=_i,this.side=mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rl,this.blendDst=sl,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=oa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$r,this.stencilZFail=$r,this.stencilZPass=$r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_i&&(n.blending=this.blending),this.side!==mn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Sl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vt={h:0,s:0,l:0},hr={h:0,s:0,l:0};function fs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ne){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ht.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ht.workingColorSpace){if(e=Ma(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=fs(o,s,e+1/3),this.g=fs(o,s,e),this.b=fs(o,s,e-1/3)}return Ht.toWorkingColorSpace(this,r),this}setStyle(e,t=Ne){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ne){const n=Sl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}copyLinearToSRGB(e){return this.r=Qr(e.r),this.g=Qr(e.g),this.b=Qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ne){return Ht.fromWorkingColorSpace(gt.copy(this),e),Math.round(ht(gt.r*255,0,255))*65536+Math.round(ht(gt.g*255,0,255))*256+Math.round(ht(gt.b*255,0,255))}getHexString(e=Ne){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ht.workingColorSpace){Ht.fromWorkingColorSpace(gt.copy(this),t);const n=gt.r,r=gt.g,s=gt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ht.workingColorSpace){return Ht.fromWorkingColorSpace(gt.copy(this),t),e.r=gt.r,e.g=gt.g,e.b=gt.b,e}getStyle(e=Ne){Ht.fromWorkingColorSpace(gt.copy(this),e);const t=gt.r,n=gt.g,r=gt.b;return e!==Ne?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Vt),Vt.h+=e,Vt.s+=t,Vt.l+=n,this.setHSL(Vt.h,Vt.s,Vt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vt),e.getHSL(hr);const n=ki(Vt.h,hr.h,t),r=ki(Vt.s,hr.s,t),s=ki(Vt.l,hr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gt=new Ze;Ze.NAMES=Sl;class Aa extends nr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const st=new z,dr=new de;class $t{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=go,this.updateRange={offset:0,count:-1},this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyMatrix3(e),this.setXY(t,dr.x,dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=di(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=di(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=di(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=di(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),r=Tt(r,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==go&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Ml extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class El extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class pn extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Rf=0;const Ot=new at,hs=new Et,ri=new z,It=new tr,Oi=new tr,lt=new z;class wn extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xl(e)?El:Ml)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ot.makeRotationFromQuaternion(e),this.applyMatrix4(Ot),this}rotateX(e){return Ot.makeRotationX(e),this.applyMatrix4(Ot),this}rotateY(e){return Ot.makeRotationY(e),this.applyMatrix4(Ot),this}rotateZ(e){return Ot.makeRotationZ(e),this.applyMatrix4(Ot),this}translate(e,t,n){return Ot.makeTranslation(e,t,n),this.applyMatrix4(Ot),this}scale(e,t,n){return Ot.makeScale(e,t,n),this.applyMatrix4(Ot),this}lookAt(e){return hs.lookAt(e),hs.updateMatrix(),this.applyMatrix4(hs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ri).negate(),this.translate(ri.x,ri.y,ri.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new pn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];It.setFromBufferAttribute(s),this.morphTargetsRelative?(lt.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(lt),lt.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(lt)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ea);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Oi.setFromBufferAttribute(a),this.morphTargetsRelative?(lt.addVectors(It.min,Oi.min),It.expandByPoint(lt),lt.addVectors(It.max,Oi.max),It.expandByPoint(lt)):(It.expandByPoint(Oi.min),It.expandByPoint(Oi.max))}It.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)lt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(lt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)lt.fromBufferAttribute(a,c),l&&(ri.fromBufferAttribute(e,c),lt.add(ri)),r=Math.max(r,n.distanceToSquared(lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let S=0;S<a;S++)c[S]=new z,u[S]=new z;const h=new z,f=new z,p=new z,v=new de,g=new de,m=new de,d=new z,_=new z;function x(S,L,O){h.fromArray(r,S*3),f.fromArray(r,L*3),p.fromArray(r,O*3),v.fromArray(o,S*2),g.fromArray(o,L*2),m.fromArray(o,O*2),f.sub(h),p.sub(h),g.sub(v),m.sub(v);const D=1/(g.x*m.y-m.x*g.y);isFinite(D)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(D),_.copy(p).multiplyScalar(g.x).addScaledVector(f,-m.x).multiplyScalar(D),c[S].add(d),c[L].add(d),c[O].add(d),u[S].add(_),u[L].add(_),u[O].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let S=0,L=y.length;S<L;++S){const O=y[S],D=O.start,B=O.count;for(let H=D,Z=D+B;H<Z;H+=3)x(n[H+0],n[H+1],n[H+2])}const b=new z,T=new z,E=new z,P=new z;function M(S){E.fromArray(s,S*3),P.copy(E);const L=c[S];b.copy(L),b.sub(E.multiplyScalar(E.dot(L))).normalize(),T.crossVectors(P,L);const D=T.dot(u[S])<0?-1:1;l[S*4]=b.x,l[S*4+1]=b.y,l[S*4+2]=b.z,l[S*4+3]=D}for(let S=0,L=y.length;S<L;++S){const O=y[S],D=O.start,B=O.count;for(let H=D,Z=D+B;H<Z;H+=3)M(n[H+0]),M(n[H+1]),M(n[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,u=new z,h=new z;if(e)for(let f=0,p=e.count;f<p;f+=3){const v=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)lt.fromBufferAttribute(e,t),lt.normalize(),e.setXYZ(t,lt.x,lt.y,lt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,v=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*u;for(let d=0;d<u;d++)f[v++]=c[p++]}return new $t(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wn,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lo=new at,Un=new ba,pr=new Ea,Do=new z,si=new z,ai=new z,oi=new z,ds=new z,mr=new z,vr=new de,xr=new de,gr=new de,Uo=new z,Io=new z,No=new z,_r=new z,yr=new z;class Ct extends Et{constructor(e=new wn,t=new Aa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){mr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(ds.fromBufferAttribute(h,e),o?mr.addScaledVector(ds,u):mr.addScaledVector(ds.sub(t),u))}t.add(mr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(s),Un.copy(e.ray).recast(e.near),!(pr.containsPoint(Un.origin)===!1&&(Un.intersectSphere(pr,Do)===null||Un.origin.distanceToSquared(Do)>(e.far-e.near)**2))&&(Lo.copy(s).invert(),Un.copy(e.ray).applyMatrix4(Lo),!(n.boundingBox!==null&&Un.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Un)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=f.length;v<g;v++){const m=f[v],d=o[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,b=x;y<b;y+=3){const T=a.getX(y),E=a.getX(y+1),P=a.getX(y+2);r=Sr(this,d,e,n,c,u,h,T,E,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=v,d=g;m<d;m+=3){const _=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);r=Sr(this,o,e,n,c,u,h,_,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=f.length;v<g;v++){const m=f[v],d=o[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,b=x;y<b;y+=3){const T=y,E=y+1,P=y+2;r=Sr(this,d,e,n,c,u,h,T,E,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=v,d=g;m<d;m+=3){const _=m,x=m+1,y=m+2;r=Sr(this,o,e,n,c,u,h,_,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Pf(i,e,t,n,r,s,o,a){let l;if(e.side===Mt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===mn,a),l===null)return null;yr.copy(a),yr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(yr);return c<t.near||c>t.far?null:{distance:c,point:yr.clone(),object:i}}function Sr(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,si),i.getVertexPosition(l,ai),i.getVertexPosition(c,oi);const u=Pf(i,e,t,n,si,ai,oi,_r);if(u){r&&(vr.fromBufferAttribute(r,a),xr.fromBufferAttribute(r,l),gr.fromBufferAttribute(r,c),u.uv=Wt.getInterpolation(_r,si,ai,oi,vr,xr,gr,new de)),s&&(vr.fromBufferAttribute(s,a),xr.fromBufferAttribute(s,l),gr.fromBufferAttribute(s,c),u.uv1=Wt.getInterpolation(_r,si,ai,oi,vr,xr,gr,new de),u.uv2=u.uv1),o&&(Uo.fromBufferAttribute(o,a),Io.fromBufferAttribute(o,l),No.fromBufferAttribute(o,c),u.normal=Wt.getInterpolation(_r,si,ai,oi,Uo,Io,No,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new z,materialIndex:0};Wt.getNormal(si,ai,oi,h.normal),u.face=h}return u}class dn extends wn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;v("z","y","x",-1,-1,n,t,e,o,s,0),v("z","y","x",1,-1,n,t,-e,o,s,1),v("x","z","y",1,1,e,n,t,r,o,2),v("x","z","y",1,-1,e,n,-t,r,o,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new pn(c,3)),this.setAttribute("normal",new pn(u,3)),this.setAttribute("uv",new pn(h,2));function v(g,m,d,_,x,y,b,T,E,P,M){const S=y/E,L=b/P,O=y/2,D=b/2,B=T/2,H=E+1,Z=P+1;let X=0,j=0;const te=new z;for(let $=0;$<Z;$++){const R=$*L-D;for(let U=0;U<H;U++){const G=U*S-O;te[g]=G*_,te[m]=R*x,te[d]=B,c.push(te.x,te.y,te.z),te[g]=0,te[m]=0,te[d]=T>0?1:-1,u.push(te.x,te.y,te.z),h.push(U/E),h.push(1-$/P),X+=1}}for(let $=0;$<P;$++)for(let R=0;R<E;R++){const U=f+R+H*$,G=f+R+H*($+1),k=f+(R+1)+H*($+1),oe=f+(R+1)+H*$;l.push(U,G,oe),l.push(G,k,oe),j+=6}a.addGroup(p,j,M),p+=j,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ti(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function At(i){const e={};for(let t=0;t<i.length;t++){const n=Ti(i[t]);for(const r in n)e[r]=n[r]}return e}function Lf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function bl(i){return i.getRenderTarget()===null?i.outputColorSpace:Jt}const Df={clone:Ti,merge:At};var Uf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,If=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zt extends nr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uf,this.fragmentShader=If,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ti(e.uniforms),this.uniformsGroups=Lf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Tl extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=hn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Rt extends Tl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zi*2*Math.atan(Math.tan(Hi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hi*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ci=-90,li=1;class Nf extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const r=new Rt(ci,li,e,t);r.layers=this.layers,this.add(r);const s=new Rt(ci,li,e,t);s.layers=this.layers,this.add(s);const o=new Rt(ci,li,e,t);o.layers=this.layers,this.add(o);const a=new Rt(ci,li,e,t);a.layers=this.layers,this.add(a);const l=new Rt(ci,li,e,t);l.layers=this.layers,this.add(l);const c=new Rt(ci,li,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===hn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.xr.enabled;e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class wa extends Pt{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Mi,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ff extends vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Gi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Hn?Ne:kn),this.texture=new wa(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ft}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new dn(5,5,5),s=new zt({name:"CubemapFromEquirect",uniforms:Ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mt,blending:bn});s.uniforms.tEquirect.value=t;const o=new Ct(r,s),a=t.minFilter;return t.minFilter===Yi&&(t.minFilter=ft),new Nf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const ps=new z,Of=new z,Bf=new ke;class Sn{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ps.subVectors(n,t).cross(Of.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ps),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Bf.getNormalMatrix(e),r=this.coplanarPoint(ps).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const In=new Ea,Mr=new z;class Ca{constructor(e=new Sn,t=new Sn,n=new Sn,r=new Sn,s=new Sn,o=new Sn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hn){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],p=r[8],v=r[9],g=r[10],m=r[11],d=r[12],_=r[13],x=r[14],y=r[15];if(n[0].setComponents(l-s,f-c,m-p,y-d).normalize(),n[1].setComponents(l+s,f+c,m+p,y+d).normalize(),n[2].setComponents(l+o,f+u,m+v,y+_).normalize(),n[3].setComponents(l-o,f-u,m-v,y-_).normalize(),n[4].setComponents(l-a,f-h,m-g,y-x).normalize(),t===hn)n[5].setComponents(l+a,f+h,m+g,y+x).normalize();else if(t===Dr)n[5].setComponents(a,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),In.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),In.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(In)}intersectsSprite(e){return In.center.set(0,0,0),In.radius=.7071067811865476,In.applyMatrix4(e.matrixWorld),this.intersectsSphere(In)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Mr.x=r.normal.x>0?e.max.x:e.min.x,Mr.y=r.normal.y>0?e.max.y:e.min.y,Mr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Mr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Al(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function zf(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,f=c.usage,p=i.createBuffer();i.bindBuffer(u,p),i.bufferData(u,h,f),c.onUploadCallback();let v;if(h instanceof Float32Array)v=i.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=i.SHORT;else if(h instanceof Uint32Array)v=i.UNSIGNED_INT;else if(h instanceof Int32Array)v=i.INT;else if(h instanceof Int8Array)v=i.BYTE;else if(h instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,p=u.updateRange;i.bindBuffer(h,c),p.count===-1?i.bufferSubData(h,0,f):(t?i.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):i.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class Ra extends wn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,p=[],v=[],g=[],m=[];for(let d=0;d<u;d++){const _=d*f-o;for(let x=0;x<c;x++){const y=x*h-s;v.push(y,-_,0),g.push(0,0,1),m.push(x/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<a;_++){const x=_+c*d,y=_+c*(d+1),b=_+1+c*(d+1),T=_+1+c*d;p.push(x,y,T),p.push(y,b,T)}this.setIndex(p),this.setAttribute("position",new pn(v,3)),this.setAttribute("normal",new pn(g,3)),this.setAttribute("uv",new pn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ra(e.width,e.height,e.widthSegments,e.heightSegments)}}var Hf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kf=`#ifdef USE_ALPHAHASH
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
#endif`,Gf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Xf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$f=`#ifdef USE_IRIDESCENCE
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
#endif`,Jf=`#ifdef USE_BUMPMAP
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
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,th=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ih=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ah=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,oh=`#define PI 3.141592653589793
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
} // validated`,ch=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lh=`vec3 transformedNormal = objectNormal;
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
#endif`,uh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ph="gl_FragColor = linearToOutputTexel( gl_FragColor );",mh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vh=`#ifdef USE_ENVMAP
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
#endif`,xh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gh=`#ifdef USE_ENVMAP
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
#endif`,_h=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yh=`#ifdef USE_ENVMAP
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
#endif`,Sh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Th=`#ifdef USE_GRADIENTMAP
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
}`,Ah=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,wh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ch=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ph=`uniform bool receiveShadow;
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
#endif`,Lh=`#ifdef USE_ENVMAP
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
#endif`,Dh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ih=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fh=`PhysicalMaterial material;
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
#endif`,Oh=`struct PhysicalMaterial {
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
}`,Bh=`
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
#endif`,zh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,kh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Wh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Xh=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,qh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kh=`#if defined( USE_POINTS_UV )
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
#endif`,Zh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$h=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jh=`#ifdef USE_MORPHNORMALS
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
#endif`,Qh=`#ifdef USE_MORPHTARGETS
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
#endif`,ed=`#ifdef USE_MORPHTARGETS
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
#endif`,td=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,nd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,id=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ad=`#ifdef USE_NORMALMAP
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
#endif`,od=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,cd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ld=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ud=`#ifdef USE_IRIDESCENCEMAP
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
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,md=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_d=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Md=`float getShadowMask() {
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
}`,Ed=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bd=`#ifdef USE_SKINNING
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
#endif`,Td=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ad=`#ifdef USE_SKINNING
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
#endif`,wd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ld=`#ifdef USE_TRANSMISSION
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
#endif`,Dd=`#ifdef USE_TRANSMISSION
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
#endif`,Ud=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Od=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Gd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vd=`#include <common>
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
}`,Wd=`#if DEPTH_PACKING == 3200
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
}`,Xd=`#define DISTANCE
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
}`,qd=`#define DISTANCE
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
}`,Yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zd=`uniform float scale;
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
}`,jd=`uniform vec3 diffuse;
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
}`,$d=`#include <common>
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
}`,Jd=`uniform vec3 diffuse;
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
}`,Qd=`#define LAMBERT
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
}`,e0=`#define LAMBERT
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
}`,t0=`#define MATCAP
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
}`,n0=`#define MATCAP
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
}`,i0=`#define NORMAL
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
}`,r0=`#define NORMAL
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
}`,s0=`#define PHONG
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
}`,a0=`#define PHONG
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
}`,o0=`#define STANDARD
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
}`,c0=`#define STANDARD
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
}`,l0=`#define TOON
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
}`,u0=`#define TOON
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
}`,h0=`uniform vec3 diffuse;
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
}`,d0=`#include <common>
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
}`,p0=`uniform vec3 color;
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
}`,m0=`uniform float rotation;
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
}`,v0=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:Hf,alphahash_pars_fragment:kf,alphamap_fragment:Gf,alphamap_pars_fragment:Vf,alphatest_fragment:Wf,alphatest_pars_fragment:Xf,aomap_fragment:qf,aomap_pars_fragment:Yf,begin_vertex:Kf,beginnormal_vertex:Zf,bsdfs:jf,iridescence_fragment:$f,bumpmap_pars_fragment:Jf,clipping_planes_fragment:Qf,clipping_planes_pars_fragment:eh,clipping_planes_pars_vertex:th,clipping_planes_vertex:nh,color_fragment:ih,color_pars_fragment:rh,color_pars_vertex:sh,color_vertex:ah,common:oh,cube_uv_reflection_fragment:ch,defaultnormal_vertex:lh,displacementmap_pars_vertex:uh,displacementmap_vertex:fh,emissivemap_fragment:hh,emissivemap_pars_fragment:dh,colorspace_fragment:ph,colorspace_pars_fragment:mh,envmap_fragment:vh,envmap_common_pars_fragment:xh,envmap_pars_fragment:gh,envmap_pars_vertex:_h,envmap_physical_pars_fragment:Lh,envmap_vertex:yh,fog_vertex:Sh,fog_pars_vertex:Mh,fog_fragment:Eh,fog_pars_fragment:bh,gradientmap_pars_fragment:Th,lightmap_fragment:Ah,lightmap_pars_fragment:wh,lights_lambert_fragment:Ch,lights_lambert_pars_fragment:Rh,lights_pars_begin:Ph,lights_toon_fragment:Dh,lights_toon_pars_fragment:Uh,lights_phong_fragment:Ih,lights_phong_pars_fragment:Nh,lights_physical_fragment:Fh,lights_physical_pars_fragment:Oh,lights_fragment_begin:Bh,lights_fragment_maps:zh,lights_fragment_end:Hh,logdepthbuf_fragment:kh,logdepthbuf_pars_fragment:Gh,logdepthbuf_pars_vertex:Vh,logdepthbuf_vertex:Wh,map_fragment:Xh,map_pars_fragment:qh,map_particle_fragment:Yh,map_particle_pars_fragment:Kh,metalnessmap_fragment:Zh,metalnessmap_pars_fragment:jh,morphcolor_vertex:$h,morphnormal_vertex:Jh,morphtarget_pars_vertex:Qh,morphtarget_vertex:ed,normal_fragment_begin:td,normal_fragment_maps:nd,normal_pars_fragment:id,normal_pars_vertex:rd,normal_vertex:sd,normalmap_pars_fragment:ad,clearcoat_normal_fragment_begin:od,clearcoat_normal_fragment_maps:cd,clearcoat_pars_fragment:ld,iridescence_pars_fragment:ud,opaque_fragment:fd,packing:hd,premultiplied_alpha_fragment:dd,project_vertex:pd,dithering_fragment:md,dithering_pars_fragment:vd,roughnessmap_fragment:xd,roughnessmap_pars_fragment:gd,shadowmap_pars_fragment:_d,shadowmap_pars_vertex:yd,shadowmap_vertex:Sd,shadowmask_pars_fragment:Md,skinbase_vertex:Ed,skinning_pars_vertex:bd,skinning_vertex:Td,skinnormal_vertex:Ad,specularmap_fragment:wd,specularmap_pars_fragment:Cd,tonemapping_fragment:Rd,tonemapping_pars_fragment:Pd,transmission_fragment:Ld,transmission_pars_fragment:Dd,uv_pars_fragment:Ud,uv_pars_vertex:Id,uv_vertex:Nd,worldpos_vertex:Fd,background_vert:Od,background_frag:Bd,backgroundCube_vert:zd,backgroundCube_frag:Hd,cube_vert:kd,cube_frag:Gd,depth_vert:Vd,depth_frag:Wd,distanceRGBA_vert:Xd,distanceRGBA_frag:qd,equirect_vert:Yd,equirect_frag:Kd,linedashed_vert:Zd,linedashed_frag:jd,meshbasic_vert:$d,meshbasic_frag:Jd,meshlambert_vert:Qd,meshlambert_frag:e0,meshmatcap_vert:t0,meshmatcap_frag:n0,meshnormal_vert:i0,meshnormal_frag:r0,meshphong_vert:s0,meshphong_frag:a0,meshphysical_vert:o0,meshphysical_frag:c0,meshtoon_vert:l0,meshtoon_frag:u0,points_vert:f0,points_frag:h0,shadow_vert:d0,shadow_frag:p0,sprite_vert:m0,sprite_frag:v0},ge={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},jt={basic:{uniforms:At([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:At([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:At([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:At([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:At([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:At([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:At([ge.points,ge.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:At([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:At([ge.common,ge.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:At([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:At([ge.sprite,ge.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:At([ge.common,ge.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:At([ge.lights,ge.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};jt.physical={uniforms:At([jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Er={r:0,b:0,g:0};function x0(i,e,t,n,r,s,o){const a=new Ze(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function v(m,d){let _=!1,x=d.isScene===!0?d.background:null;switch(x&&x.isTexture&&(x=(d.backgroundBlurriness>0?t:e).get(x)),x===null?g(a,l):x&&x.isColor&&(g(x,1),_=!0),i.xr.getEnvironmentBlendMode()){case"opaque":_=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),_=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),_=!0;break}(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Fr)?(u===void 0&&(u=new Ct(new dn(1,1,1),new zt({name:"BackgroundCubeMaterial",uniforms:Ti(jt.backgroundCube.uniforms),vertexShader:jt.backgroundCube.vertexShader,fragmentShader:jt.backgroundCube.fragmentShader,side:Mt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,E,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=x.colorSpace!==Ne,(h!==x||f!==x.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,p=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ct(new Ra(2,2),new zt({name:"BackgroundMaterial",uniforms:Ti(jt.background.uniforms),vertexShader:jt.background.vertexShader,fragmentShader:jt.background.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=x.colorSpace!==Ne,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,d){m.getRGB(Er,bl(i)),n.buffers.color.setClear(Er.r,Er.g,Er.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:v}}function g0(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function h(B,H,Z,X,j){let te=!1;if(o){const $=g(X,Z,H);c!==$&&(c=$,p(c.object)),te=d(B,X,Z,j),te&&_(B,X,Z,j)}else{const $=H.wireframe===!0;(c.geometry!==X.id||c.program!==Z.id||c.wireframe!==$)&&(c.geometry=X.id,c.program=Z.id,c.wireframe=$,te=!0)}j!==null&&t.update(j,i.ELEMENT_ARRAY_BUFFER),(te||u)&&(u=!1,P(B,H,Z,X),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function p(B){return n.isWebGL2?i.bindVertexArray(B):s.bindVertexArrayOES(B)}function v(B){return n.isWebGL2?i.deleteVertexArray(B):s.deleteVertexArrayOES(B)}function g(B,H,Z){const X=Z.wireframe===!0;let j=a[B.id];j===void 0&&(j={},a[B.id]=j);let te=j[H.id];te===void 0&&(te={},j[H.id]=te);let $=te[X];return $===void 0&&($=m(f()),te[X]=$),$}function m(B){const H=[],Z=[],X=[];for(let j=0;j<r;j++)H[j]=0,Z[j]=0,X[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Z,attributeDivisors:X,object:B,attributes:{},index:null}}function d(B,H,Z,X){const j=c.attributes,te=H.attributes;let $=0;const R=Z.getAttributes();for(const U in R)if(R[U].location>=0){const k=j[U];let oe=te[U];if(oe===void 0&&(U==="instanceMatrix"&&B.instanceMatrix&&(oe=B.instanceMatrix),U==="instanceColor"&&B.instanceColor&&(oe=B.instanceColor)),k===void 0||k.attribute!==oe||oe&&k.data!==oe.data)return!0;$++}return c.attributesNum!==$||c.index!==X}function _(B,H,Z,X){const j={},te=H.attributes;let $=0;const R=Z.getAttributes();for(const U in R)if(R[U].location>=0){let k=te[U];k===void 0&&(U==="instanceMatrix"&&B.instanceMatrix&&(k=B.instanceMatrix),U==="instanceColor"&&B.instanceColor&&(k=B.instanceColor));const oe={};oe.attribute=k,k&&k.data&&(oe.data=k.data),j[U]=oe,$++}c.attributes=j,c.attributesNum=$,c.index=X}function x(){const B=c.newAttributes;for(let H=0,Z=B.length;H<Z;H++)B[H]=0}function y(B){b(B,0)}function b(B,H){const Z=c.newAttributes,X=c.enabledAttributes,j=c.attributeDivisors;Z[B]=1,X[B]===0&&(i.enableVertexAttribArray(B),X[B]=1),j[B]!==H&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,H),j[B]=H)}function T(){const B=c.newAttributes,H=c.enabledAttributes;for(let Z=0,X=H.length;Z<X;Z++)H[Z]!==B[Z]&&(i.disableVertexAttribArray(Z),H[Z]=0)}function E(B,H,Z,X,j,te,$){$===!0?i.vertexAttribIPointer(B,H,Z,j,te):i.vertexAttribPointer(B,H,Z,X,j,te)}function P(B,H,Z,X){if(n.isWebGL2===!1&&(B.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const j=X.attributes,te=Z.getAttributes(),$=H.defaultAttributeValues;for(const R in te){const U=te[R];if(U.location>=0){let G=j[R];if(G===void 0&&(R==="instanceMatrix"&&B.instanceMatrix&&(G=B.instanceMatrix),R==="instanceColor"&&B.instanceColor&&(G=B.instanceColor)),G!==void 0){const k=G.normalized,oe=G.itemSize,me=t.get(G);if(me===void 0)continue;const Me=me.buffer,ce=me.type,Fe=me.bytesPerElement,qe=n.isWebGL2===!0&&(ce===i.INT||ce===i.UNSIGNED_INT||G.gpuType===cl);if(G.isInterleavedBufferAttribute){const Ce=G.data,I=Ce.stride,se=G.offset;if(Ce.isInstancedInterleavedBuffer){for(let J=0;J<U.locationSize;J++)b(U.location+J,Ce.meshPerAttribute);B.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let J=0;J<U.locationSize;J++)y(U.location+J);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let J=0;J<U.locationSize;J++)E(U.location+J,oe/U.locationSize,ce,k,I*Fe,(se+oe/U.locationSize*J)*Fe,qe)}else{if(G.isInstancedBufferAttribute){for(let Ce=0;Ce<U.locationSize;Ce++)b(U.location+Ce,G.meshPerAttribute);B.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Ce=0;Ce<U.locationSize;Ce++)y(U.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let Ce=0;Ce<U.locationSize;Ce++)E(U.location+Ce,oe/U.locationSize,ce,k,oe*Fe,oe/U.locationSize*Ce*Fe,qe)}}else if($!==void 0){const k=$[R];if(k!==void 0)switch(k.length){case 2:i.vertexAttrib2fv(U.location,k);break;case 3:i.vertexAttrib3fv(U.location,k);break;case 4:i.vertexAttrib4fv(U.location,k);break;default:i.vertexAttrib1fv(U.location,k)}}}}T()}function M(){O();for(const B in a){const H=a[B];for(const Z in H){const X=H[Z];for(const j in X)v(X[j].object),delete X[j];delete H[Z]}delete a[B]}}function S(B){if(a[B.id]===void 0)return;const H=a[B.id];for(const Z in H){const X=H[Z];for(const j in X)v(X[j].object),delete X[j];delete H[Z]}delete a[B.id]}function L(B){for(const H in a){const Z=a[H];if(Z[B.id]===void 0)continue;const X=Z[B.id];for(const j in X)v(X[j].object),delete X[j];delete Z[B.id]}}function O(){D(),u=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:O,resetDefaultState:D,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:y,disableUnusedAttributes:T}}function _0(i,e,t,n){const r=n.isWebGL2;let s;function o(c){s=c}function a(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,p;if(r)f=i,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function y0(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,y=o||e.has("OES_texture_float"),b=x&&y,T=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:_,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:b,maxSamples:T}}function S0(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Sn,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||r;return r=f,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const v=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const _=s?0:n,x=_*4;let y=d.clippingState||null;l.value=y,y=u(v,f,x,p);for(let b=0;b!==x;++b)y[b]=t[b];d.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,v){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const d=p+g*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,y=p;x!==g;++x,y+=4)o.copy(h[x]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function M0(i){let e=new WeakMap;function t(o,a){return a===ca?o.mapping=Mi:a===la&&(o.mapping=Ei),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===ca||a===la)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ff(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class wl extends Tl{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const pi=4,Fo=[.125,.215,.35,.446,.526,.582],Fn=20,ms=new wl,Oo=new Ze;let vs=null;const Nn=(1+Math.sqrt(5))/2,ui=1/Nn,Bo=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,Nn,ui),new z(0,Nn,-ui),new z(ui,0,Nn),new z(-ui,0,Nn),new z(Nn,ui,0),new z(-Nn,ui,0)];class zo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){vs=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Go(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ko(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vs),e.scissorTest=!1,br(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mi||e.mapping===Ei?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vs=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ft,minFilter:ft,generateMipmaps:!1,type:Ki,format:Xt,colorSpace:Jt,depthBuffer:!1},r=Ho(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ho(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=E0(s)),this._blurMaterial=b0(s,e,t)}return r}_compileMaterial(e){const t=new Ct(this._lodPlanes[0],e);this._renderer.compile(t,ms)}_sceneToCubeUV(e,t,n,r){const a=new Rt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Oo),u.toneMapping=Tn,u.autoClear=!1;const p=new Aa({name:"PMREM.Background",side:Mt,depthWrite:!1,depthTest:!1}),v=new Ct(new dn,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(Oo),g=!0);for(let d=0;d<6;d++){const _=d%3;_===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):_===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const x=this._cubeSize;br(r,_*x,d>2?x:0,x,x),u.setRenderTarget(r),g&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Mi||e.mapping===Ei;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Go()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ko());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ct(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;br(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ms)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Bo[(r-1)%Bo.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ct(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Fn-1),g=s/v,m=isFinite(s)?1+Math.floor(u*g):Fn;m>Fn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fn}`);const d=[];let _=0;for(let E=0;E<Fn;++E){const P=E/g,M=Math.exp(-P*P/2);d.push(M),E===0?_+=M:E<m&&(_+=2*M)}for(let E=0;E<d.length;E++)d[E]=d[E]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=v,f.mipInt.value=x-n;const y=this._sizeLods[r],b=3*y*(r>x-pi?r-x+pi:0),T=4*(this._cubeSize-y);br(t,b,T,3*y,2*y),l.setRenderTarget(t),l.render(h,ms)}}function E0(i){const e=[],t=[],n=[];let r=i;const s=i-pi+1+Fo.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-pi?l=Fo[o-i+pi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,v=6,g=3,m=2,d=1,_=new Float32Array(g*v*p),x=new Float32Array(m*v*p),y=new Float32Array(d*v*p);for(let T=0;T<p;T++){const E=T%3*2/3-1,P=T>2?0:-1,M=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];_.set(M,g*v*T),x.set(f,m*v*T);const S=[T,T,T,T,T,T];y.set(S,d*v*T)}const b=new wn;b.setAttribute("position",new $t(_,g)),b.setAttribute("uv",new $t(x,m)),b.setAttribute("faceIndex",new $t(y,d)),e.push(b),r>pi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ho(i,e,t){const n=new vn(i,e,t);return n.texture.mapping=Fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function br(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function b0(i,e,t){const n=new Float32Array(Fn),r=new z(0,1,0);return new zt({name:"SphericalGaussianBlur",defines:{n:Fn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Pa(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function ko(){return new zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pa(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Go(){return new zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Pa(){return`

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
	`}function T0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ca||l===la,u=l===Mi||l===Ei;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new zo(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new zo(i));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function A0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function w0(i,e,t,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const g=f.morphAttributes[v];for(let m=0,d=g.length;m<d;m++)e.remove(g[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const v in f)e.update(f[v],i.ARRAY_BUFFER);const p=h.morphAttributes;for(const v in p){const g=p[v];for(let m=0,d=g.length;m<d;m++)e.update(g[m],i.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,v=h.attributes.position;let g=0;if(p!==null){const _=p.array;g=p.version;for(let x=0,y=_.length;x<y;x+=3){const b=_[x+0],T=_[x+1],E=_[x+2];f.push(b,T,T,E,E,b)}}else if(v!==void 0){const _=v.array;g=v.version;for(let x=0,y=_.length/3-1;x<y;x+=3){const b=x+0,T=x+1,E=x+2;f.push(b,T,T,E,E,b)}}else return;const m=new(xl(f)?El:Ml)(f,1);m.version=g;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function C0(i,e,t,n){const r=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,p){i.drawElements(s,p,a,f*l),t.update(p,s,1)}function h(f,p,v){if(v===0)return;let g,m;if(r)g=i,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](s,p,a,f*l,v),t.update(p,s,v)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function R0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function P0(i,e){return i[0]-e[0]}function L0(i,e){return Math.abs(e[1])-Math.abs(i[1])}function D0(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new Qe,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=v!==void 0?v.length:0;let m=s.get(u);if(m===void 0||m.count!==g){let H=function(){D.dispose(),s.delete(u),u.removeEventListener("dispose",H)};var p=H;m!==void 0&&m.texture.dispose();const x=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,T=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let M=0;x===!0&&(M=1),y===!0&&(M=2),b===!0&&(M=3);let S=u.attributes.position.count*M,L=1;S>e.maxTextureSize&&(L=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const O=new Float32Array(S*L*4*g),D=new yl(O,S,L,g);D.type=En,D.needsUpdate=!0;const B=M*4;for(let Z=0;Z<g;Z++){const X=T[Z],j=E[Z],te=P[Z],$=S*L*4*Z;for(let R=0;R<X.count;R++){const U=R*B;x===!0&&(o.fromBufferAttribute(X,R),O[$+U+0]=o.x,O[$+U+1]=o.y,O[$+U+2]=o.z,O[$+U+3]=0),y===!0&&(o.fromBufferAttribute(j,R),O[$+U+4]=o.x,O[$+U+5]=o.y,O[$+U+6]=o.z,O[$+U+7]=0),b===!0&&(o.fromBufferAttribute(te,R),O[$+U+8]=o.x,O[$+U+9]=o.y,O[$+U+10]=o.z,O[$+U+11]=te.itemSize===4?o.w:1)}}m={count:g,texture:D,size:new de(S,L)},s.set(u,m),u.addEventListener("dispose",H)}let d=0;for(let x=0;x<f.length;x++)d+=f[x];const _=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(i,"morphTargetBaseInfluence",_),h.getUniforms().setValue(i,"morphTargetInfluences",f),h.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const v=f===void 0?0:f.length;let g=n[u.id];if(g===void 0||g.length!==v){g=[];for(let y=0;y<v;y++)g[y]=[y,0];n[u.id]=g}for(let y=0;y<v;y++){const b=g[y];b[0]=y,b[1]=f[y]}g.sort(L0);for(let y=0;y<8;y++)y<v&&g[y][1]?(a[y][0]=g[y][0],a[y][1]=g[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(P0);const m=u.morphAttributes.position,d=u.morphAttributes.normal;let _=0;for(let y=0;y<8;y++){const b=a[y],T=b[0],E=b[1];T!==Number.MAX_SAFE_INTEGER&&E?(m&&u.getAttribute("morphTarget"+y)!==m[T]&&u.setAttribute("morphTarget"+y,m[T]),d&&u.getAttribute("morphNormal"+y)!==d[T]&&u.setAttribute("morphNormal"+y,d[T]),r[y]=E,_+=E):(m&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),d&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const x=u.morphTargetsRelative?1:1-_;h.getUniforms().setValue(i,"morphTargetBaseInfluence",x),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function U0(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Cl=new Pt,Rl=new yl,Pl=new yf,Ll=new wa,Vo=[],Wo=[],Xo=new Float32Array(16),qo=new Float32Array(9),Yo=new Float32Array(4);function wi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Vo[r];if(s===void 0&&(s=new Float32Array(r),Vo[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function ot(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Br(i,e){let t=Wo[e];t===void 0&&(t=new Int32Array(e),Wo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function I0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function N0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2fv(this.addr,e),ct(t,e)}}function F0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ot(t,e))return;i.uniform3fv(this.addr,e),ct(t,e)}}function O0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4fv(this.addr,e),ct(t,e)}}function B0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ct(t,e)}else{if(ot(t,n))return;Yo.set(n),i.uniformMatrix2fv(this.addr,!1,Yo),ct(t,n)}}function z0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ct(t,e)}else{if(ot(t,n))return;qo.set(n),i.uniformMatrix3fv(this.addr,!1,qo),ct(t,n)}}function H0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ct(t,e)}else{if(ot(t,n))return;Xo.set(n),i.uniformMatrix4fv(this.addr,!1,Xo),ct(t,n)}}function k0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function G0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2iv(this.addr,e),ct(t,e)}}function V0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;i.uniform3iv(this.addr,e),ct(t,e)}}function W0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4iv(this.addr,e),ct(t,e)}}function X0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function q0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;i.uniform2uiv(this.addr,e),ct(t,e)}}function Y0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;i.uniform3uiv(this.addr,e),ct(t,e)}}function K0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;i.uniform4uiv(this.addr,e),ct(t,e)}}function Z0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Cl,r)}function j0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Pl,r)}function $0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Ll,r)}function J0(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Rl,r)}function Q0(i){switch(i){case 5126:return I0;case 35664:return N0;case 35665:return F0;case 35666:return O0;case 35674:return B0;case 35675:return z0;case 35676:return H0;case 5124:case 35670:return k0;case 35667:case 35671:return G0;case 35668:case 35672:return V0;case 35669:case 35673:return W0;case 5125:return X0;case 36294:return q0;case 36295:return Y0;case 36296:return K0;case 35678:case 36198:case 36298:case 36306:case 35682:return Z0;case 35679:case 36299:case 36307:return j0;case 35680:case 36300:case 36308:case 36293:return $0;case 36289:case 36303:case 36311:case 36292:return J0}}function ep(i,e){i.uniform1fv(this.addr,e)}function tp(i,e){const t=wi(e,this.size,2);i.uniform2fv(this.addr,t)}function np(i,e){const t=wi(e,this.size,3);i.uniform3fv(this.addr,t)}function ip(i,e){const t=wi(e,this.size,4);i.uniform4fv(this.addr,t)}function rp(i,e){const t=wi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function sp(i,e){const t=wi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ap(i,e){const t=wi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function op(i,e){i.uniform1iv(this.addr,e)}function cp(i,e){i.uniform2iv(this.addr,e)}function lp(i,e){i.uniform3iv(this.addr,e)}function up(i,e){i.uniform4iv(this.addr,e)}function fp(i,e){i.uniform1uiv(this.addr,e)}function hp(i,e){i.uniform2uiv(this.addr,e)}function dp(i,e){i.uniform3uiv(this.addr,e)}function pp(i,e){i.uniform4uiv(this.addr,e)}function mp(i,e,t){const n=this.cache,r=e.length,s=Br(t,r);ot(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Cl,s[o])}function vp(i,e,t){const n=this.cache,r=e.length,s=Br(t,r);ot(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Pl,s[o])}function xp(i,e,t){const n=this.cache,r=e.length,s=Br(t,r);ot(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Ll,s[o])}function gp(i,e,t){const n=this.cache,r=e.length,s=Br(t,r);ot(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Rl,s[o])}function _p(i){switch(i){case 5126:return ep;case 35664:return tp;case 35665:return np;case 35666:return ip;case 35674:return rp;case 35675:return sp;case 35676:return ap;case 5124:case 35670:return op;case 35667:case 35671:return cp;case 35668:case 35672:return lp;case 35669:case 35673:return up;case 5125:return fp;case 36294:return hp;case 36295:return dp;case 36296:return pp;case 35678:case 36198:case 36298:case 36306:case 35682:return mp;case 35679:case 36299:case 36307:return vp;case 35680:case 36300:case 36308:case 36293:return xp;case 36289:case 36303:case 36311:case 36292:return gp}}class yp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Q0(t.type)}}class Sp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=_p(t.type)}}class Mp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const xs=/(\w+)(\])?(\[|\.)?/g;function Ko(i,e){i.seq.push(e),i.map[e.id]=e}function Ep(i,e,t){const n=i.name,r=n.length;for(xs.lastIndex=0;;){const s=xs.exec(n),o=xs.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Ko(t,c===void 0?new yp(a,i,e):new Sp(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Mp(a),Ko(t,h)),t=h}}}class Pr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Ep(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Zo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let bp=0;function Tp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Ap(i){switch(i){case Jt:return["Linear","( value )"];case Ne:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function jo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Tp(i.getShaderSource(e),o)}else return r}function wp(i,e){const t=Ap(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Cp(i,e){let t;switch(e){case Mu:t="Linear";break;case Eu:t="Reinhard";break;case bu:t="OptimizedCineon";break;case Tu:t="ACESFilmic";break;case Au:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Rp(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zi).join(`
`)}function Pp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Lp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function zi(i){return i!==""}function $o(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Dp=/^[ \t]*#include +<([\w\d./]+)>/gm;function da(i){return i.replace(Dp,Ip)}const Up=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Ip(i,e){let t=ze[e];if(t===void 0){const n=Up.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return da(t)}const Np=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qo(i){return i.replace(Np,Fp)}function Fp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ec(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Op(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===il?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===eu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ln&&(e="SHADOWMAP_TYPE_VSM"),e}function Bp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Mi:case Ei:e="ENVMAP_TYPE_CUBE";break;case Fr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ei:e="ENVMAP_MODE_REFRACTION";break}return e}function Hp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case al:e="ENVMAP_BLENDING_MULTIPLY";break;case yu:e="ENVMAP_BLENDING_MIX";break;case Su:e="ENVMAP_BLENDING_ADD";break}return e}function kp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Gp(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Op(t),c=Bp(t),u=zp(t),h=Hp(t),f=kp(t),p=t.isWebGL2?"":Rp(t),v=Pp(s),g=r.createProgram();let m,d,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(zi).join(`
`),m.length>0&&(m+=`
`),d=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(zi).join(`
`),d.length>0&&(d+=`
`)):(m=[ec(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zi).join(`
`),d=[p,ec(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tn?"#define TONE_MAPPING":"",t.toneMapping!==Tn?ze.tonemapping_pars_fragment:"",t.toneMapping!==Tn?Cp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,wp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zi).join(`
`)),o=da(o),o=$o(o,t),o=Jo(o,t),a=da(a),a=$o(a,t),a=Jo(a,t),o=Qo(o),a=Qo(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===_o?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_o?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=_+m+o,y=_+d+a,b=Zo(r,r.VERTEX_SHADER,x),T=Zo(r,r.FRAGMENT_SHADER,y);if(r.attachShader(g,b),r.attachShader(g,T),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),i.debug.checkShaderErrors){const M=r.getProgramInfoLog(g).trim(),S=r.getShaderInfoLog(b).trim(),L=r.getShaderInfoLog(T).trim();let O=!0,D=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,b,T);else{const B=jo(r,b,"vertex"),H=jo(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+B+`
`+H)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(S===""||L==="")&&(D=!1);D&&(this.diagnostics={runnable:O,programLog:M,vertexShader:{log:S,prefix:m},fragmentShader:{log:L,prefix:d}})}r.deleteShader(b),r.deleteShader(T);let E;this.getUniforms=function(){return E===void 0&&(E=new Pr(r,g)),E};let P;return this.getAttributes=function(){return P===void 0&&(P=Lp(r,g)),P},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bp++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=T,this}let Vp=0;class Wp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Xp(e),t.set(e,n)),n}}class Xp{constructor(e){this.id=Vp++,this.code=e,this.usedTimes=0}}function qp(i,e,t,n,r,s,o){const a=new Ta,l=new Wp,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function m(M,S,L,O,D){const B=O.fog,H=D.geometry,Z=M.isMeshStandardMaterial?O.environment:null,X=(M.isMeshStandardMaterial?t:e).get(M.envMap||Z),j=X&&X.mapping===Fr?X.image.height:null,te=v[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const $=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,R=$!==void 0?$.length:0;let U=0;H.morphAttributes.position!==void 0&&(U=1),H.morphAttributes.normal!==void 0&&(U=2),H.morphAttributes.color!==void 0&&(U=3);let G,k,oe,me;if(te){const $e=jt[te];G=$e.vertexShader,k=$e.fragmentShader}else G=M.vertexShader,k=M.fragmentShader,l.update(M),oe=l.getVertexShaderID(M),me=l.getFragmentShaderID(M);const Me=i.getRenderTarget(),ce=D.isInstancedMesh===!0,Fe=!!M.map,qe=!!M.matcap,Ce=!!X,I=!!M.aoMap,se=!!M.lightMap,J=!!M.bumpMap,ue=!!M.normalMap,ne=!!M.displacementMap,Te=!!M.emissiveMap,Se=!!M.metalnessMap,Ee=!!M.roughnessMap,we=M.anisotropy>0,Pe=M.clearcoat>0,Ve=M.iridescence>0,C=M.sheen>0,A=M.transmission>0,q=we&&!!M.anisotropyMap,ae=Pe&&!!M.clearcoatMap,re=Pe&&!!M.clearcoatNormalMap,fe=Pe&&!!M.clearcoatRoughnessMap,Ae=Ve&&!!M.iridescenceMap,he=Ve&&!!M.iridescenceThicknessMap,Y=C&&!!M.sheenColorMap,N=C&&!!M.sheenRoughnessMap,ie=!!M.specularMap,_e=!!M.specularColorMap,pe=!!M.specularIntensityMap,ye=A&&!!M.transmissionMap,Le=A&&!!M.thicknessMap,He=!!M.gradientMap,F=!!M.alphaMap,ve=M.alphaTest>0,K=!!M.alphaHash,le=!!M.extensions,xe=!!H.attributes.uv1,Oe=!!H.attributes.uv2,Ke=!!H.attributes.uv3;let je=Tn;return M.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(je=i.toneMapping),{isWebGL2:u,shaderID:te,shaderType:M.type,shaderName:M.name,vertexShader:G,fragmentShader:k,defines:M.defines,customVertexShaderID:oe,customFragmentShaderID:me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:ce,instancingColor:ce&&D.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Me===null?i.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:Jt,map:Fe,matcap:qe,envMap:Ce,envMapMode:Ce&&X.mapping,envMapCubeUVHeight:j,aoMap:I,lightMap:se,bumpMap:J,normalMap:ue,displacementMap:f&&ne,emissiveMap:Te,normalMapObjectSpace:ue&&M.normalMapType===zu,normalMapTangentSpace:ue&&M.normalMapType===ml,metalnessMap:Se,roughnessMap:Ee,anisotropy:we,anisotropyMap:q,clearcoat:Pe,clearcoatMap:ae,clearcoatNormalMap:re,clearcoatRoughnessMap:fe,iridescence:Ve,iridescenceMap:Ae,iridescenceThicknessMap:he,sheen:C,sheenColorMap:Y,sheenRoughnessMap:N,specularMap:ie,specularColorMap:_e,specularIntensityMap:pe,transmission:A,transmissionMap:ye,thicknessMap:Le,gradientMap:He,opaque:M.transparent===!1&&M.blending===_i,alphaMap:F,alphaTest:ve,alphaHash:K,combine:M.combine,mapUv:Fe&&g(M.map.channel),aoMapUv:I&&g(M.aoMap.channel),lightMapUv:se&&g(M.lightMap.channel),bumpMapUv:J&&g(M.bumpMap.channel),normalMapUv:ue&&g(M.normalMap.channel),displacementMapUv:ne&&g(M.displacementMap.channel),emissiveMapUv:Te&&g(M.emissiveMap.channel),metalnessMapUv:Se&&g(M.metalnessMap.channel),roughnessMapUv:Ee&&g(M.roughnessMap.channel),anisotropyMapUv:q&&g(M.anisotropyMap.channel),clearcoatMapUv:ae&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:re&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:he&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Y&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:N&&g(M.sheenRoughnessMap.channel),specularMapUv:ie&&g(M.specularMap.channel),specularColorMapUv:_e&&g(M.specularColorMap.channel),specularIntensityMapUv:pe&&g(M.specularIntensityMap.channel),transmissionMapUv:ye&&g(M.transmissionMap.channel),thicknessMapUv:Le&&g(M.thicknessMap.channel),alphaMapUv:F&&g(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ue||we),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:xe,vertexUv2s:Oe,vertexUv3s:Ke,pointsUvs:D.isPoints===!0&&!!H.attributes.uv&&(Fe||F),fog:!!B,useFog:M.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:R,morphTextureStride:U,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:je,useLegacyLights:i._useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Bt,flipSided:M.side===Mt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:le&&M.extensions.derivatives===!0,extensionFragDepth:le&&M.extensions.fragDepth===!0,extensionDrawBuffers:le&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)S.push(L),S.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(_(S,M),x(S,M),S.push(i.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function _(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function x(M,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),M.push(a.mask)}function y(M){const S=v[M.type];let L;if(S){const O=jt[S];L=Df.clone(O.uniforms)}else L=M.uniforms;return L}function b(M,S){let L;for(let O=0,D=c.length;O<D;O++){const B=c[O];if(B.cacheKey===S){L=B,++L.usedTimes;break}}return L===void 0&&(L=new Gp(i,S,M,s),c.push(L)),L}function T(M){if(--M.usedTimes===0){const S=c.indexOf(M);c[S]=c[c.length-1],c.pop(),M.destroy()}}function E(M){l.remove(M)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:b,releaseProgram:T,releaseShaderCache:E,programs:c,dispose:P}}function Yp(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Kp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function tc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function nc(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,f,p,v,g,m){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:v,renderOrder:h.renderOrder,z:g,group:m},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=v,d.renderOrder=h.renderOrder,d.z=g,d.group=m),e++,d}function a(h,f,p,v,g,m){const d=o(h,f,p,v,g,m);p.transmission>0?n.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(h,f,p,v,g,m){const d=o(h,f,p,v,g,m);p.transmission>0?n.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||Kp),n.length>1&&n.sort(f||tc),r.length>1&&r.sort(f||tc)}function u(){for(let h=e,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Zp(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new nc,i.set(n,[o])):r>=s.length?(o=new nc,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function jp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Ze};break;case"SpotLight":t={position:new z,direction:new z,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function $p(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Jp=0;function Qp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function em(i,e){const t=new jp,n=$p(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new z);const s=new z,o=new at,a=new at;function l(u,h){let f=0,p=0,v=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let g=0,m=0,d=0,_=0,x=0,y=0,b=0,T=0,E=0,P=0;u.sort(Qp);const M=h===!0?Math.PI:1;for(let L=0,O=u.length;L<O;L++){const D=u[L],B=D.color,H=D.intensity,Z=D.distance,X=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=B.r*H*M,p+=B.g*H*M,v+=B.b*H*M;else if(D.isLightProbe)for(let j=0;j<9;j++)r.probe[j].addScaledVector(D.sh.coefficients[j],H);else if(D.isDirectionalLight){const j=t.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity*M),D.castShadow){const te=D.shadow,$=n.get(D);$.shadowBias=te.bias,$.shadowNormalBias=te.normalBias,$.shadowRadius=te.radius,$.shadowMapSize=te.mapSize,r.directionalShadow[g]=$,r.directionalShadowMap[g]=X,r.directionalShadowMatrix[g]=D.shadow.matrix,y++}r.directional[g]=j,g++}else if(D.isSpotLight){const j=t.get(D);j.position.setFromMatrixPosition(D.matrixWorld),j.color.copy(B).multiplyScalar(H*M),j.distance=Z,j.coneCos=Math.cos(D.angle),j.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),j.decay=D.decay,r.spot[d]=j;const te=D.shadow;if(D.map&&(r.spotLightMap[E]=D.map,E++,te.updateMatrices(D),D.castShadow&&P++),r.spotLightMatrix[d]=te.matrix,D.castShadow){const $=n.get(D);$.shadowBias=te.bias,$.shadowNormalBias=te.normalBias,$.shadowRadius=te.radius,$.shadowMapSize=te.mapSize,r.spotShadow[d]=$,r.spotShadowMap[d]=X,T++}d++}else if(D.isRectAreaLight){const j=t.get(D);j.color.copy(B).multiplyScalar(H),j.halfWidth.set(D.width*.5,0,0),j.halfHeight.set(0,D.height*.5,0),r.rectArea[_]=j,_++}else if(D.isPointLight){const j=t.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity*M),j.distance=D.distance,j.decay=D.decay,D.castShadow){const te=D.shadow,$=n.get(D);$.shadowBias=te.bias,$.shadowNormalBias=te.normalBias,$.shadowRadius=te.radius,$.shadowMapSize=te.mapSize,$.shadowCameraNear=te.camera.near,$.shadowCameraFar=te.camera.far,r.pointShadow[m]=$,r.pointShadowMap[m]=X,r.pointShadowMatrix[m]=D.shadow.matrix,b++}r.point[m]=j,m++}else if(D.isHemisphereLight){const j=t.get(D);j.skyColor.copy(D.color).multiplyScalar(H*M),j.groundColor.copy(D.groundColor).multiplyScalar(H*M),r.hemi[x]=j,x++}}_>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_FLOAT_1,r.rectAreaLTC2=ge.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_HALF_1,r.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=v;const S=r.hash;(S.directionalLength!==g||S.pointLength!==m||S.spotLength!==d||S.rectAreaLength!==_||S.hemiLength!==x||S.numDirectionalShadows!==y||S.numPointShadows!==b||S.numSpotShadows!==T||S.numSpotMaps!==E)&&(r.directional.length=g,r.spot.length=d,r.rectArea.length=_,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=T+E-P,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=P,S.directionalLength=g,S.pointLength=m,S.spotLength=d,S.rectAreaLength=_,S.hemiLength=x,S.numDirectionalShadows=y,S.numPointShadows=b,S.numSpotShadows=T,S.numSpotMaps=E,r.version=Jp++)}function c(u,h){let f=0,p=0,v=0,g=0,m=0;const d=h.matrixWorldInverse;for(let _=0,x=u.length;_<x;_++){const y=u[_];if(y.isDirectionalLight){const b=r.directional[f];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),f++}else if(y.isSpotLight){const b=r.spot[v];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),v++}else if(y.isRectAreaLight){const b=r.rectArea[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(d),a.identity(),o.copy(y.matrixWorld),o.premultiply(d),a.extractRotation(o),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const b=r.point[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(d),p++}else if(y.isHemisphereLight){const b=r.hemi[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:r}}function ic(i,e){const t=new em(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function tm(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new ic(i,e),t.set(s,[l])):o>=a.length?(l=new ic(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class nm extends nr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ou,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class im extends nr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sm=`uniform sampler2D shadow_pass;
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
}`;function am(i,e,t){let n=new Ca;const r=new de,s=new de,o=new Qe,a=new nm({depthPacking:Bu}),l=new im,c={},u=t.maxTextureSize,h={[mn]:Mt,[Mt]:mn,[Bt]:Bt},f=new zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:rm,fragmentShader:sm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new wn;v.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ct(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=il;let d=this.type;this.render=function(b,T,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const P=i.getRenderTarget(),M=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),L=i.state;L.setBlending(bn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const O=d!==ln&&this.type===ln,D=d===ln&&this.type!==ln;for(let B=0,H=b.length;B<H;B++){const Z=b[B],X=Z.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const j=X.getFrameExtents();if(r.multiply(j),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,X.mapSize.y=s.y)),X.map===null||O===!0||D===!0){const $=this.type!==ln?{minFilter:St,magFilter:St}:{};X.map!==null&&X.map.dispose(),X.map=new vn(r.x,r.y,$),X.map.texture.name=Z.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const te=X.getViewportCount();for(let $=0;$<te;$++){const R=X.getViewport($);o.set(s.x*R.x,s.y*R.y,s.x*R.z,s.y*R.w),L.viewport(o),X.updateMatrices(Z,$),n=X.getFrustum(),y(T,E,X.camera,Z,this.type)}X.isPointLightShadow!==!0&&this.type===ln&&_(X,E),X.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(P,M,S)};function _(b,T){const E=e.update(g);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new vn(r.x,r.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(T,null,E,f,g,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(T,null,E,p,g,null)}function x(b,T,E,P){let M=null;const S=E.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(S!==void 0)M=S;else if(M=E.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const L=M.uuid,O=T.uuid;let D=c[L];D===void 0&&(D={},c[L]=D);let B=D[O];B===void 0&&(B=M.clone(),D[O]=B),M=B}if(M.visible=T.visible,M.wireframe=T.wireframe,P===ln?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:h[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,E.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const L=i.properties.get(M);L.light=E}return M}function y(b,T,E,P,M){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===ln)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,b.matrixWorld);const O=e.update(b),D=b.material;if(Array.isArray(D)){const B=O.groups;for(let H=0,Z=B.length;H<Z;H++){const X=B[H],j=D[X.materialIndex];if(j&&j.visible){const te=x(b,j,P,M);i.renderBufferDirect(E,null,O,te,b,X)}}}else if(D.visible){const B=x(b,D,P,M);i.renderBufferDirect(E,null,O,B,b,null)}}const L=b.children;for(let O=0,D=L.length;O<D;O++)y(L[O],T,E,P,M)}}function om(i,e,t){const n=t.isWebGL2;function r(){let F=!1;const ve=new Qe;let K=null;const le=new Qe(0,0,0,0);return{setMask:function(xe){K!==xe&&!F&&(i.colorMask(xe,xe,xe,xe),K=xe)},setLocked:function(xe){F=xe},setClear:function(xe,Oe,Ke,je,Yt){Yt===!0&&(xe*=je,Oe*=je,Ke*=je),ve.set(xe,Oe,Ke,je),le.equals(ve)===!1&&(i.clearColor(xe,Oe,Ke,je),le.copy(ve))},reset:function(){F=!1,K=null,le.set(-1,0,0,0)}}}function s(){let F=!1,ve=null,K=null,le=null;return{setTest:function(xe){xe?Me(i.DEPTH_TEST):ce(i.DEPTH_TEST)},setMask:function(xe){ve!==xe&&!F&&(i.depthMask(xe),ve=xe)},setFunc:function(xe){if(K!==xe){switch(xe){case du:i.depthFunc(i.NEVER);break;case pu:i.depthFunc(i.ALWAYS);break;case mu:i.depthFunc(i.LESS);break;case oa:i.depthFunc(i.LEQUAL);break;case vu:i.depthFunc(i.EQUAL);break;case xu:i.depthFunc(i.GEQUAL);break;case gu:i.depthFunc(i.GREATER);break;case _u:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=xe}},setLocked:function(xe){F=xe},setClear:function(xe){le!==xe&&(i.clearDepth(xe),le=xe)},reset:function(){F=!1,ve=null,K=null,le=null}}}function o(){let F=!1,ve=null,K=null,le=null,xe=null,Oe=null,Ke=null,je=null,Yt=null;return{setTest:function($e){F||($e?Me(i.STENCIL_TEST):ce(i.STENCIL_TEST))},setMask:function($e){ve!==$e&&!F&&(i.stencilMask($e),ve=$e)},setFunc:function($e,Lt,dt){(K!==$e||le!==Lt||xe!==dt)&&(i.stencilFunc($e,Lt,dt),K=$e,le=Lt,xe=dt)},setOp:function($e,Lt,dt){(Oe!==$e||Ke!==Lt||je!==dt)&&(i.stencilOp($e,Lt,dt),Oe=$e,Ke=Lt,je=dt)},setLocked:function($e){F=$e},setClear:function($e){Yt!==$e&&(i.clearStencil($e),Yt=$e)},reset:function(){F=!1,ve=null,K=null,le=null,xe=null,Oe=null,Ke=null,je=null,Yt=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},p={},v=new WeakMap,g=[],m=null,d=!1,_=null,x=null,y=null,b=null,T=null,E=null,P=null,M=!1,S=null,L=null,O=null,D=null,B=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,X=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(j)[1]),Z=X>=1):j.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Z=X>=2);let te=null,$={};const R=i.getParameter(i.SCISSOR_BOX),U=i.getParameter(i.VIEWPORT),G=new Qe().fromArray(R),k=new Qe().fromArray(U);function oe(F,ve,K,le){const xe=new Uint8Array(4),Oe=i.createTexture();i.bindTexture(F,Oe),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ke=0;Ke<K;Ke++)n&&(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)?i.texImage3D(ve,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(ve+Ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return Oe}const me={};me[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),me[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(me[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),me[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Me(i.DEPTH_TEST),l.setFunc(oa),ne(!1),Te(ka),Me(i.CULL_FACE),J(bn);function Me(F){f[F]!==!0&&(i.enable(F),f[F]=!0)}function ce(F){f[F]!==!1&&(i.disable(F),f[F]=!1)}function Fe(F,ve){return p[F]!==ve?(i.bindFramebuffer(F,ve),p[F]=ve,n&&(F===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=ve),F===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=ve)),!0):!1}function qe(F,ve){let K=g,le=!1;if(F)if(K=v.get(ve),K===void 0&&(K=[],v.set(ve,K)),F.isWebGLMultipleRenderTargets){const xe=F.texture;if(K.length!==xe.length||K[0]!==i.COLOR_ATTACHMENT0){for(let Oe=0,Ke=xe.length;Oe<Ke;Oe++)K[Oe]=i.COLOR_ATTACHMENT0+Oe;K.length=xe.length,le=!0}}else K[0]!==i.COLOR_ATTACHMENT0&&(K[0]=i.COLOR_ATTACHMENT0,le=!0);else K[0]!==i.BACK&&(K[0]=i.BACK,le=!0);le&&(t.isWebGL2?i.drawBuffers(K):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(K))}function Ce(F){return m!==F?(i.useProgram(F),m=F,!0):!1}const I={[hi]:i.FUNC_ADD,[nu]:i.FUNC_SUBTRACT,[iu]:i.FUNC_REVERSE_SUBTRACT};if(n)I[Xa]=i.MIN,I[qa]=i.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(I[Xa]=F.MIN_EXT,I[qa]=F.MAX_EXT)}const se={[ru]:i.ZERO,[su]:i.ONE,[au]:i.SRC_COLOR,[rl]:i.SRC_ALPHA,[hu]:i.SRC_ALPHA_SATURATE,[uu]:i.DST_COLOR,[cu]:i.DST_ALPHA,[ou]:i.ONE_MINUS_SRC_COLOR,[sl]:i.ONE_MINUS_SRC_ALPHA,[fu]:i.ONE_MINUS_DST_COLOR,[lu]:i.ONE_MINUS_DST_ALPHA};function J(F,ve,K,le,xe,Oe,Ke,je){if(F===bn){d===!0&&(ce(i.BLEND),d=!1);return}if(d===!1&&(Me(i.BLEND),d=!0),F!==tu){if(F!==_||je!==M){if((x!==hi||T!==hi)&&(i.blendEquation(i.FUNC_ADD),x=hi,T=hi),je)switch(F){case _i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ga:i.blendFunc(i.ONE,i.ONE);break;case Va:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case _i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ga:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Va:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}y=null,b=null,E=null,P=null,_=F,M=je}return}xe=xe||ve,Oe=Oe||K,Ke=Ke||le,(ve!==x||xe!==T)&&(i.blendEquationSeparate(I[ve],I[xe]),x=ve,T=xe),(K!==y||le!==b||Oe!==E||Ke!==P)&&(i.blendFuncSeparate(se[K],se[le],se[Oe],se[Ke]),y=K,b=le,E=Oe,P=Ke),_=F,M=!1}function ue(F,ve){F.side===Bt?ce(i.CULL_FACE):Me(i.CULL_FACE);let K=F.side===Mt;ve&&(K=!K),ne(K),F.blending===_i&&F.transparent===!1?J(bn):J(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),a.setMask(F.colorWrite);const le=F.stencilWrite;c.setTest(le),le&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ee(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Me(i.SAMPLE_ALPHA_TO_COVERAGE):ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function ne(F){S!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),S=F)}function Te(F){F!==Jl?(Me(i.CULL_FACE),F!==L&&(F===ka?i.cullFace(i.BACK):F===Ql?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ce(i.CULL_FACE),L=F}function Se(F){F!==O&&(Z&&i.lineWidth(F),O=F)}function Ee(F,ve,K){F?(Me(i.POLYGON_OFFSET_FILL),(D!==ve||B!==K)&&(i.polygonOffset(ve,K),D=ve,B=K)):ce(i.POLYGON_OFFSET_FILL)}function we(F){F?Me(i.SCISSOR_TEST):ce(i.SCISSOR_TEST)}function Pe(F){F===void 0&&(F=i.TEXTURE0+H-1),te!==F&&(i.activeTexture(F),te=F)}function Ve(F,ve,K){K===void 0&&(te===null?K=i.TEXTURE0+H-1:K=te);let le=$[K];le===void 0&&(le={type:void 0,texture:void 0},$[K]=le),(le.type!==F||le.texture!==ve)&&(te!==K&&(i.activeTexture(K),te=K),i.bindTexture(F,ve||me[F]),le.type=F,le.texture=ve)}function C(){const F=$[te];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function A(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ae(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function he(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Y(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function N(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(F){G.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),G.copy(F))}function pe(F){k.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),k.copy(F))}function ye(F,ve){let K=h.get(ve);K===void 0&&(K=new WeakMap,h.set(ve,K));let le=K.get(F);le===void 0&&(le=i.getUniformBlockIndex(ve,F.name),K.set(F,le))}function Le(F,ve){const le=h.get(ve).get(F);u.get(ve)!==le&&(i.uniformBlockBinding(ve,le,F.__bindingPointIndex),u.set(ve,le))}function He(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},te=null,$={},p={},v=new WeakMap,g=[],m=null,d=!1,_=null,x=null,y=null,b=null,T=null,E=null,P=null,M=!1,S=null,L=null,O=null,D=null,B=null,G.set(0,0,i.canvas.width,i.canvas.height),k.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Me,disable:ce,bindFramebuffer:Fe,drawBuffers:qe,useProgram:Ce,setBlending:J,setMaterial:ue,setFlipSided:ne,setCullFace:Te,setLineWidth:Se,setPolygonOffset:Ee,setScissorTest:we,activeTexture:Pe,bindTexture:Ve,unbindTexture:C,compressedTexImage2D:A,compressedTexImage3D:q,texImage2D:N,texImage3D:ie,updateUBOMapping:ye,uniformBlockBinding:Le,texStorage2D:he,texStorage3D:Y,texSubImage2D:ae,texSubImage3D:re,compressedTexSubImage2D:fe,compressedTexSubImage3D:Ae,scissor:_e,viewport:pe,reset:He}}function cm(i,e,t,n,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let g;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,A){return d?new OffscreenCanvas(C,A):ji("canvas")}function x(C,A,q,ae){let re=1;if((C.width>ae||C.height>ae)&&(re=ae/Math.max(C.width,C.height)),re<1||A===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const fe=A?Ur:Math.floor,Ae=fe(re*C.width),he=fe(re*C.height);g===void 0&&(g=_(Ae,he));const Y=q?_(Ae,he):g;return Y.width=Ae,Y.height=he,Y.getContext("2d").drawImage(C,0,0,Ae,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Ae+"x"+he+")."),Y}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function y(C){return ha(C.width)&&ha(C.height)}function b(C){return a?!1:C.wrapS!==wt||C.wrapT!==wt||C.minFilter!==St&&C.minFilter!==ft}function T(C,A){return C.generateMipmaps&&A&&C.minFilter!==St&&C.minFilter!==ft}function E(C){i.generateMipmap(C)}function P(C,A,q,ae,re=!1){if(a===!1)return A;if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let fe=A;return A===i.RED&&(q===i.FLOAT&&(fe=i.R32F),q===i.HALF_FLOAT&&(fe=i.R16F),q===i.UNSIGNED_BYTE&&(fe=i.R8)),A===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(fe=i.R8UI),q===i.UNSIGNED_SHORT&&(fe=i.R16UI),q===i.UNSIGNED_INT&&(fe=i.R32UI),q===i.BYTE&&(fe=i.R8I),q===i.SHORT&&(fe=i.R16I),q===i.INT&&(fe=i.R32I)),A===i.RG&&(q===i.FLOAT&&(fe=i.RG32F),q===i.HALF_FLOAT&&(fe=i.RG16F),q===i.UNSIGNED_BYTE&&(fe=i.RG8)),A===i.RGBA&&(q===i.FLOAT&&(fe=i.RGBA32F),q===i.HALF_FLOAT&&(fe=i.RGBA16F),q===i.UNSIGNED_BYTE&&(fe=ae===Ne&&re===!1?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(fe=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(fe=i.RGB5_A1)),(fe===i.R16F||fe===i.R32F||fe===i.RG16F||fe===i.RG32F||fe===i.RGBA16F||fe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function M(C,A,q){return T(C,q)===!0||C.isFramebufferTexture&&C.minFilter!==St&&C.minFilter!==ft?Math.log2(Math.max(A.width,A.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?A.mipmaps.length:1}function S(C){return C===St||C===Ya||C===Xr?i.NEAREST:i.LINEAR}function L(C){const A=C.target;A.removeEventListener("dispose",L),D(A),A.isVideoTexture&&v.delete(A)}function O(C){const A=C.target;A.removeEventListener("dispose",O),H(A)}function D(C){const A=n.get(C);if(A.__webglInit===void 0)return;const q=C.source,ae=m.get(q);if(ae){const re=ae[A.__cacheKey];re.usedTimes--,re.usedTimes===0&&B(C),Object.keys(ae).length===0&&m.delete(q)}n.remove(C)}function B(C){const A=n.get(C);i.deleteTexture(A.__webglTexture);const q=C.source,ae=m.get(q);delete ae[A.__cacheKey],o.memory.textures--}function H(C){const A=C.texture,q=n.get(C),ae=n.get(A);if(ae.__webglTexture!==void 0&&(i.deleteTexture(ae.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(q.__webglFramebuffer[re]))for(let fe=0;fe<q.__webglFramebuffer[re].length;fe++)i.deleteFramebuffer(q.__webglFramebuffer[re][fe]);else i.deleteFramebuffer(q.__webglFramebuffer[re]);q.__webglDepthbuffer&&i.deleteRenderbuffer(q.__webglDepthbuffer[re])}else{if(Array.isArray(q.__webglFramebuffer))for(let re=0;re<q.__webglFramebuffer.length;re++)i.deleteFramebuffer(q.__webglFramebuffer[re]);else i.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&i.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&i.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let re=0;re<q.__webglColorRenderbuffer.length;re++)q.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(q.__webglColorRenderbuffer[re]);q.__webglDepthRenderbuffer&&i.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let re=0,fe=A.length;re<fe;re++){const Ae=n.get(A[re]);Ae.__webglTexture&&(i.deleteTexture(Ae.__webglTexture),o.memory.textures--),n.remove(A[re])}n.remove(A),n.remove(C)}let Z=0;function X(){Z=0}function j(){const C=Z;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),Z+=1,C}function te(C){const A=[];return A.push(C.wrapS),A.push(C.wrapT),A.push(C.wrapR||0),A.push(C.magFilter),A.push(C.minFilter),A.push(C.anisotropy),A.push(C.internalFormat),A.push(C.format),A.push(C.type),A.push(C.generateMipmaps),A.push(C.premultiplyAlpha),A.push(C.flipY),A.push(C.unpackAlignment),A.push(C.colorSpace),A.join()}function $(C,A){const q=n.get(C);if(C.isVideoTexture&&Pe(C),C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){const ae=C.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(q,C,A);return}}t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+A)}function R(C,A){const q=n.get(C);if(C.version>0&&q.__version!==C.version){Fe(q,C,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+A)}function U(C,A){const q=n.get(C);if(C.version>0&&q.__version!==C.version){Fe(q,C,A);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+A)}function G(C,A){const q=n.get(C);if(C.version>0&&q.__version!==C.version){qe(q,C,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+A)}const k={[qi]:i.REPEAT,[wt]:i.CLAMP_TO_EDGE,[ua]:i.MIRRORED_REPEAT},oe={[St]:i.NEAREST,[Ya]:i.NEAREST_MIPMAP_NEAREST,[Xr]:i.NEAREST_MIPMAP_LINEAR,[ft]:i.LINEAR,[wu]:i.LINEAR_MIPMAP_NEAREST,[Yi]:i.LINEAR_MIPMAP_LINEAR},me={[ku]:i.NEVER,[Ku]:i.ALWAYS,[Gu]:i.LESS,[Wu]:i.LEQUAL,[Vu]:i.EQUAL,[Yu]:i.GEQUAL,[Xu]:i.GREATER,[qu]:i.NOTEQUAL};function Me(C,A,q){if(q?(i.texParameteri(C,i.TEXTURE_WRAP_S,k[A.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,k[A.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,k[A.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,oe[A.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,oe[A.minFilter])):(i.texParameteri(C,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(C,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(A.wrapS!==wt||A.wrapT!==wt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(C,i.TEXTURE_MAG_FILTER,S(A.magFilter)),i.texParameteri(C,i.TEXTURE_MIN_FILTER,S(A.minFilter)),A.minFilter!==St&&A.minFilter!==ft&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,me[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ae=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===St||A.minFilter!==Xr&&A.minFilter!==Yi||A.type===En&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===Ki&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(i.texParameterf(C,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function ce(C,A){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,A.addEventListener("dispose",L));const ae=A.source;let re=m.get(ae);re===void 0&&(re={},m.set(ae,re));const fe=te(A);if(fe!==C.__cacheKey){re[fe]===void 0&&(re[fe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),re[fe].usedTimes++;const Ae=re[C.__cacheKey];Ae!==void 0&&(re[C.__cacheKey].usedTimes--,Ae.usedTimes===0&&B(A)),C.__cacheKey=fe,C.__webglTexture=re[fe].texture}return q}function Fe(C,A,q){let ae=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ae=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ae=i.TEXTURE_3D);const re=ce(C,A),fe=A.source;t.bindTexture(ae,C.__webglTexture,i.TEXTURE0+q);const Ae=n.get(fe);if(fe.version!==Ae.__version||re===!0){t.activeTexture(i.TEXTURE0+q),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const he=b(A)&&y(A.image)===!1;let Y=x(A.image,he,!1,u);Y=Ve(A,Y);const N=y(Y)||a,ie=s.convert(A.format,A.colorSpace);let _e=s.convert(A.type),pe=P(A.internalFormat,ie,_e,A.colorSpace);Me(ae,A,N);let ye;const Le=A.mipmaps,He=a&&A.isVideoTexture!==!0,F=Ae.__version===void 0||re===!0,ve=M(A,Y,N);if(A.isDepthTexture)pe=i.DEPTH_COMPONENT,a?A.type===En?pe=i.DEPTH_COMPONENT32F:A.type===Mn?pe=i.DEPTH_COMPONENT24:A.type===Bn?pe=i.DEPTH24_STENCIL8:pe=i.DEPTH_COMPONENT16:A.type===En&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===zn&&pe===i.DEPTH_COMPONENT&&A.type!==Sa&&A.type!==Mn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Mn,_e=s.convert(A.type)),A.format===bi&&pe===i.DEPTH_COMPONENT&&(pe=i.DEPTH_STENCIL,A.type!==Bn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Bn,_e=s.convert(A.type))),F&&(He?t.texStorage2D(i.TEXTURE_2D,1,pe,Y.width,Y.height):t.texImage2D(i.TEXTURE_2D,0,pe,Y.width,Y.height,0,ie,_e,null));else if(A.isDataTexture)if(Le.length>0&&N){He&&F&&t.texStorage2D(i.TEXTURE_2D,ve,pe,Le[0].width,Le[0].height);for(let K=0,le=Le.length;K<le;K++)ye=Le[K],He?t.texSubImage2D(i.TEXTURE_2D,K,0,0,ye.width,ye.height,ie,_e,ye.data):t.texImage2D(i.TEXTURE_2D,K,pe,ye.width,ye.height,0,ie,_e,ye.data);A.generateMipmaps=!1}else He?(F&&t.texStorage2D(i.TEXTURE_2D,ve,pe,Y.width,Y.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Y.width,Y.height,ie,_e,Y.data)):t.texImage2D(i.TEXTURE_2D,0,pe,Y.width,Y.height,0,ie,_e,Y.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){He&&F&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,pe,Le[0].width,Le[0].height,Y.depth);for(let K=0,le=Le.length;K<le;K++)ye=Le[K],A.format!==Xt?ie!==null?He?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ye.width,ye.height,Y.depth,ie,ye.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,pe,ye.width,ye.height,Y.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ye.width,ye.height,Y.depth,ie,_e,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,pe,ye.width,ye.height,Y.depth,0,ie,_e,ye.data)}else{He&&F&&t.texStorage2D(i.TEXTURE_2D,ve,pe,Le[0].width,Le[0].height);for(let K=0,le=Le.length;K<le;K++)ye=Le[K],A.format!==Xt?ie!==null?He?t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,ye.width,ye.height,ie,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,K,pe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?t.texSubImage2D(i.TEXTURE_2D,K,0,0,ye.width,ye.height,ie,_e,ye.data):t.texImage2D(i.TEXTURE_2D,K,pe,ye.width,ye.height,0,ie,_e,ye.data)}else if(A.isDataArrayTexture)He?(F&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,pe,Y.width,Y.height,Y.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,ie,_e,Y.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,pe,Y.width,Y.height,Y.depth,0,ie,_e,Y.data);else if(A.isData3DTexture)He?(F&&t.texStorage3D(i.TEXTURE_3D,ve,pe,Y.width,Y.height,Y.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,ie,_e,Y.data)):t.texImage3D(i.TEXTURE_3D,0,pe,Y.width,Y.height,Y.depth,0,ie,_e,Y.data);else if(A.isFramebufferTexture){if(F)if(He)t.texStorage2D(i.TEXTURE_2D,ve,pe,Y.width,Y.height);else{let K=Y.width,le=Y.height;for(let xe=0;xe<ve;xe++)t.texImage2D(i.TEXTURE_2D,xe,pe,K,le,0,ie,_e,null),K>>=1,le>>=1}}else if(Le.length>0&&N){He&&F&&t.texStorage2D(i.TEXTURE_2D,ve,pe,Le[0].width,Le[0].height);for(let K=0,le=Le.length;K<le;K++)ye=Le[K],He?t.texSubImage2D(i.TEXTURE_2D,K,0,0,ie,_e,ye):t.texImage2D(i.TEXTURE_2D,K,pe,ie,_e,ye);A.generateMipmaps=!1}else He?(F&&t.texStorage2D(i.TEXTURE_2D,ve,pe,Y.width,Y.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie,_e,Y)):t.texImage2D(i.TEXTURE_2D,0,pe,ie,_e,Y);T(A,N)&&E(ae),Ae.__version=fe.version,A.onUpdate&&A.onUpdate(A)}C.__version=A.version}function qe(C,A,q){if(A.image.length!==6)return;const ae=ce(C,A),re=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+q);const fe=n.get(re);if(re.version!==fe.__version||ae===!0){t.activeTexture(i.TEXTURE0+q),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const Ae=A.isCompressedTexture||A.image[0].isCompressedTexture,he=A.image[0]&&A.image[0].isDataTexture,Y=[];for(let K=0;K<6;K++)!Ae&&!he?Y[K]=x(A.image[K],!1,!0,c):Y[K]=he?A.image[K].image:A.image[K],Y[K]=Ve(A,Y[K]);const N=Y[0],ie=y(N)||a,_e=s.convert(A.format,A.colorSpace),pe=s.convert(A.type),ye=P(A.internalFormat,_e,pe,A.colorSpace),Le=a&&A.isVideoTexture!==!0,He=fe.__version===void 0||ae===!0;let F=M(A,N,ie);Me(i.TEXTURE_CUBE_MAP,A,ie);let ve;if(Ae){Le&&He&&t.texStorage2D(i.TEXTURE_CUBE_MAP,F,ye,N.width,N.height);for(let K=0;K<6;K++){ve=Y[K].mipmaps;for(let le=0;le<ve.length;le++){const xe=ve[le];A.format!==Xt?_e!==null?Le?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,0,0,xe.width,xe.height,_e,xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,ye,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,0,0,xe.width,xe.height,_e,pe,xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,ye,xe.width,xe.height,0,_e,pe,xe.data)}}}else{ve=A.mipmaps,Le&&He&&(ve.length>0&&F++,t.texStorage2D(i.TEXTURE_CUBE_MAP,F,ye,Y[0].width,Y[0].height));for(let K=0;K<6;K++)if(he){Le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Y[K].width,Y[K].height,_e,pe,Y[K].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ye,Y[K].width,Y[K].height,0,_e,pe,Y[K].data);for(let le=0;le<ve.length;le++){const Oe=ve[le].image[K].image;Le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,0,0,Oe.width,Oe.height,_e,pe,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,ye,Oe.width,Oe.height,0,_e,pe,Oe.data)}}else{Le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,_e,pe,Y[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,ye,_e,pe,Y[K]);for(let le=0;le<ve.length;le++){const xe=ve[le];Le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,0,0,_e,pe,xe.image[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,ye,_e,pe,xe.image[K])}}}T(A,ie)&&E(i.TEXTURE_CUBE_MAP),fe.__version=re.version,A.onUpdate&&A.onUpdate(A)}C.__version=A.version}function Ce(C,A,q,ae,re,fe){const Ae=s.convert(q.format,q.colorSpace),he=s.convert(q.type),Y=P(q.internalFormat,Ae,he,q.colorSpace);if(!n.get(A).__hasExternalTextures){const ie=Math.max(1,A.width>>fe),_e=Math.max(1,A.height>>fe);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,fe,Y,ie,_e,A.depth,0,Ae,he,null):t.texImage2D(re,fe,Y,ie,_e,0,Ae,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),we(A)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,re,n.get(q).__webglTexture,0,Ee(A)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ae,re,n.get(q).__webglTexture,fe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function I(C,A,q){if(i.bindRenderbuffer(i.RENDERBUFFER,C),A.depthBuffer&&!A.stencilBuffer){let ae=i.DEPTH_COMPONENT16;if(q||we(A)){const re=A.depthTexture;re&&re.isDepthTexture&&(re.type===En?ae=i.DEPTH_COMPONENT32F:re.type===Mn&&(ae=i.DEPTH_COMPONENT24));const fe=Ee(A);we(A)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,ae,A.width,A.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,ae,A.width,A.height)}else i.renderbufferStorage(i.RENDERBUFFER,ae,A.width,A.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,C)}else if(A.depthBuffer&&A.stencilBuffer){const ae=Ee(A);q&&we(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,i.DEPTH24_STENCIL8,A.width,A.height):we(A)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,i.DEPTH24_STENCIL8,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,C)}else{const ae=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let re=0;re<ae.length;re++){const fe=ae[re],Ae=s.convert(fe.format,fe.colorSpace),he=s.convert(fe.type),Y=P(fe.internalFormat,Ae,he,fe.colorSpace),N=Ee(A);q&&we(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,N,Y,A.width,A.height):we(A)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,N,Y,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Y,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function se(C,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),$(A.depthTexture,0);const ae=n.get(A.depthTexture).__webglTexture,re=Ee(A);if(A.depthTexture.format===zn)we(A)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0);else if(A.depthTexture.format===bi)we(A)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function J(C){const A=n.get(C),q=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!A.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");se(A.__webglFramebuffer,C)}else if(q){A.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[ae]),A.__webglDepthbuffer[ae]=i.createRenderbuffer(),I(A.__webglDepthbuffer[ae],C,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=i.createRenderbuffer(),I(A.__webglDepthbuffer,C,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(C,A,q){const ae=n.get(C);A!==void 0&&Ce(ae.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&J(C)}function ne(C){const A=C.texture,q=n.get(C),ae=n.get(A);C.addEventListener("dispose",O),C.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture()),ae.__version=A.version,o.memory.textures++);const re=C.isWebGLCubeRenderTarget===!0,fe=C.isWebGLMultipleRenderTargets===!0,Ae=y(C)||a;if(re){q.__webglFramebuffer=[];for(let he=0;he<6;he++)if(a&&A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer[he]=[];for(let Y=0;Y<A.mipmaps.length;Y++)q.__webglFramebuffer[he][Y]=i.createFramebuffer()}else q.__webglFramebuffer[he]=i.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer=[];for(let he=0;he<A.mipmaps.length;he++)q.__webglFramebuffer[he]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(fe)if(r.drawBuffers){const he=C.texture;for(let Y=0,N=he.length;Y<N;Y++){const ie=n.get(he[Y]);ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&we(C)===!1){const he=fe?A:[A];q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Y=0;Y<he.length;Y++){const N=he[Y];q.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[Y]);const ie=s.convert(N.format,N.colorSpace),_e=s.convert(N.type),pe=P(N.internalFormat,ie,_e,N.colorSpace,C.isXRRenderTarget===!0),ye=Ee(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,pe,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,q.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),I(q.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture),Me(i.TEXTURE_CUBE_MAP,A,Ae);for(let he=0;he<6;he++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let Y=0;Y<A.mipmaps.length;Y++)Ce(q.__webglFramebuffer[he][Y],C,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Y);else Ce(q.__webglFramebuffer[he],C,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);T(A,Ae)&&E(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){const he=C.texture;for(let Y=0,N=he.length;Y<N;Y++){const ie=he[Y],_e=n.get(ie);t.bindTexture(i.TEXTURE_2D,_e.__webglTexture),Me(i.TEXTURE_2D,ie,Ae),Ce(q.__webglFramebuffer,C,ie,i.COLOR_ATTACHMENT0+Y,i.TEXTURE_2D,0),T(ie,Ae)&&E(i.TEXTURE_2D)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?he=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,ae.__webglTexture),Me(he,A,Ae),a&&A.mipmaps&&A.mipmaps.length>0)for(let Y=0;Y<A.mipmaps.length;Y++)Ce(q.__webglFramebuffer[Y],C,A,i.COLOR_ATTACHMENT0,he,Y);else Ce(q.__webglFramebuffer,C,A,i.COLOR_ATTACHMENT0,he,0);T(A,Ae)&&E(he),t.unbindTexture()}C.depthBuffer&&J(C)}function Te(C){const A=y(C)||a,q=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ae=0,re=q.length;ae<re;ae++){const fe=q[ae];if(T(fe,A)){const Ae=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,he=n.get(fe).__webglTexture;t.bindTexture(Ae,he),E(Ae),t.unbindTexture()}}}function Se(C){if(a&&C.samples>0&&we(C)===!1){const A=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],q=C.width,ae=C.height;let re=i.COLOR_BUFFER_BIT;const fe=[],Ae=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=n.get(C),Y=C.isWebGLMultipleRenderTargets===!0;if(Y)for(let N=0;N<A.length;N++)t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let N=0;N<A.length;N++){fe.push(i.COLOR_ATTACHMENT0+N),C.depthBuffer&&fe.push(Ae);const ie=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(ie===!1&&(C.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),Y&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,he.__webglColorRenderbuffer[N]),ie===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ae]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ae])),Y){const _e=n.get(A[N]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,_e,0)}i.blitFramebuffer(0,0,q,ae,0,0,q,ae,re,i.NEAREST),p&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,fe)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let N=0;N<A.length;N++){t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.RENDERBUFFER,he.__webglColorRenderbuffer[N]);const ie=n.get(A[N]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.TEXTURE_2D,ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function Ee(C){return Math.min(h,C.samples)}function we(C){const A=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Pe(C){const A=o.render.frame;v.get(C)!==A&&(v.set(C,A),C.update())}function Ve(C,A){const q=C.colorSpace,ae=C.format,re=C.type;return C.isCompressedTexture===!0||C.format===fa||q!==Jt&&q!==kn&&(q===Ne?a===!1?e.has("EXT_sRGB")===!0&&ae===Xt?(C.format=fa,C.minFilter=ft,C.generateMipmaps=!1):A=gl.sRGBToLinear(A):(ae!==Xt||re!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),A}this.allocateTextureUnit=j,this.resetTextureUnits=X,this.setTexture2D=$,this.setTexture2DArray=R,this.setTexture3D=U,this.setTextureCube=G,this.rebindTextures=ue,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=J,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=we}function lm(i,e,t){const n=t.isWebGL2;function r(s,o=kn){let a;if(s===An)return i.UNSIGNED_BYTE;if(s===ll)return i.UNSIGNED_SHORT_4_4_4_4;if(s===ul)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Cu)return i.BYTE;if(s===Ru)return i.SHORT;if(s===Sa)return i.UNSIGNED_SHORT;if(s===cl)return i.INT;if(s===Mn)return i.UNSIGNED_INT;if(s===En)return i.FLOAT;if(s===Ki)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Pu)return i.ALPHA;if(s===Xt)return i.RGBA;if(s===Lu)return i.LUMINANCE;if(s===Du)return i.LUMINANCE_ALPHA;if(s===zn)return i.DEPTH_COMPONENT;if(s===bi)return i.DEPTH_STENCIL;if(s===fa)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Uu)return i.RED;if(s===fl)return i.RED_INTEGER;if(s===Iu)return i.RG;if(s===hl)return i.RG_INTEGER;if(s===dl)return i.RGBA_INTEGER;if(s===qr||s===Yr||s===Kr||s===Zr)if(o===Ne)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===qr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Yr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Kr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Zr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===qr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Yr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Kr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Zr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ka||s===Za||s===ja||s===$a)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ka)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Za)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ja)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===$a)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Nu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ja||s===Qa)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ja)return o===Ne?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Qa)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===eo||s===to||s===no||s===io||s===ro||s===so||s===ao||s===oo||s===co||s===lo||s===uo||s===fo||s===ho||s===po)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===eo)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===to)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===no)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===io)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ro)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===so)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ao)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===oo)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===co)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===lo)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===uo)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===fo)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ho)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===po)return o===Ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===jr)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===jr)return o===Ne?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Fu||s===mo||s===vo||s===xo)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===jr)return a.COMPRESSED_RED_RGTC1_EXT;if(s===mo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===vo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===xo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Bn?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class um extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Tr extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fm={type:"move"};class gs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),d=this._getHandJoint(c,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fm)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Tr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class hm extends Pt{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:zn,u!==zn&&u!==bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===zn&&(n=Mn),n===void 0&&u===bi&&(n=Bn),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:St,this.minFilter=l!==void 0?l:St,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class dm extends Wn{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,v=null;const g=t.getContextAttributes();let m=null,d=null;const _=[],x=[],y=new Rt;y.layers.enable(1),y.viewport=new Qe;const b=new Rt;b.layers.enable(2),b.viewport=new Qe;const T=[y,b],E=new um;E.layers.enable(1),E.layers.enable(2);let P=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let U=_[R];return U===void 0&&(U=new gs,_[R]=U),U.getTargetRaySpace()},this.getControllerGrip=function(R){let U=_[R];return U===void 0&&(U=new gs,_[R]=U),U.getGripSpace()},this.getHand=function(R){let U=_[R];return U===void 0&&(U=new gs,_[R]=U),U.getHandSpace()};function S(R){const U=x.indexOf(R.inputSource);if(U===-1)return;const G=_[U];G!==void 0&&(G.update(R.inputSource,R.frame,c||o),G.dispatchEvent({type:R.type,data:R.inputSource}))}function L(){r.removeEventListener("select",S),r.removeEventListener("selectstart",S),r.removeEventListener("selectend",S),r.removeEventListener("squeeze",S),r.removeEventListener("squeezestart",S),r.removeEventListener("squeezeend",S),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",O);for(let R=0;R<_.length;R++){const U=x[R];U!==null&&(x[R]=null,_[R].disconnect(U))}P=null,M=null,e.setRenderTarget(m),p=null,f=null,h=null,r=null,d=null,$.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){s=R,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){a=R,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(R){c=R},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(R){if(r=R,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",S),r.addEventListener("selectstart",S),r.addEventListener("selectend",S),r.addEventListener("squeeze",S),r.addEventListener("squeezestart",S),r.addEventListener("squeezeend",S),r.addEventListener("end",L),r.addEventListener("inputsourceschange",O),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const U={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,U),r.updateRenderState({baseLayer:p}),d=new vn(p.framebufferWidth,p.framebufferHeight,{format:Xt,type:An,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let U=null,G=null,k=null;g.depth&&(k=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,U=g.stencil?bi:zn,G=g.stencil?Bn:Mn);const oe={colorFormat:t.RGBA8,depthFormat:k,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(oe),r.updateRenderState({layers:[f]}),d=new vn(f.textureWidth,f.textureHeight,{format:Xt,type:An,depthTexture:new hm(f.textureWidth,f.textureHeight,G,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const me=e.properties.get(d);me.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),$.setContext(r),$.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function O(R){for(let U=0;U<R.removed.length;U++){const G=R.removed[U],k=x.indexOf(G);k>=0&&(x[k]=null,_[k].disconnect(G))}for(let U=0;U<R.added.length;U++){const G=R.added[U];let k=x.indexOf(G);if(k===-1){for(let me=0;me<_.length;me++)if(me>=x.length){x.push(G),k=me;break}else if(x[me]===null){x[me]=G,k=me;break}if(k===-1)break}const oe=_[k];oe&&oe.connect(G)}}const D=new z,B=new z;function H(R,U,G){D.setFromMatrixPosition(U.matrixWorld),B.setFromMatrixPosition(G.matrixWorld);const k=D.distanceTo(B),oe=U.projectionMatrix.elements,me=G.projectionMatrix.elements,Me=oe[14]/(oe[10]-1),ce=oe[14]/(oe[10]+1),Fe=(oe[9]+1)/oe[5],qe=(oe[9]-1)/oe[5],Ce=(oe[8]-1)/oe[0],I=(me[8]+1)/me[0],se=Me*Ce,J=Me*I,ue=k/(-Ce+I),ne=ue*-Ce;U.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(ne),R.translateZ(ue),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert();const Te=Me+ue,Se=ce+ue,Ee=se-ne,we=J+(k-ne),Pe=Fe*ce/Se*Te,Ve=qe*ce/Se*Te;R.projectionMatrix.makePerspective(Ee,we,Pe,Ve,Te,Se),R.projectionMatrixInverse.copy(R.projectionMatrix).invert()}function Z(R,U){U===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(U.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.updateCamera=function(R){if(r===null)return;E.near=b.near=y.near=R.near,E.far=b.far=y.far=R.far,(P!==E.near||M!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),P=E.near,M=E.far);const U=R.parent,G=E.cameras;Z(E,U);for(let k=0;k<G.length;k++)Z(G[k],U);G.length===2?H(E,y,b):E.projectionMatrix.copy(y.projectionMatrix),X(R,E,U)};function X(R,U,G){G===null?R.matrix.copy(U.matrixWorld):(R.matrix.copy(G.matrixWorld),R.matrix.invert(),R.matrix.multiply(U.matrixWorld)),R.matrix.decompose(R.position,R.quaternion,R.scale),R.updateMatrixWorld(!0);const k=R.children;for(let oe=0,me=k.length;oe<me;oe++)k[oe].updateMatrixWorld(!0);R.projectionMatrix.copy(U.projectionMatrix),R.projectionMatrixInverse.copy(U.projectionMatrixInverse),R.isPerspectiveCamera&&(R.fov=Zi*2*Math.atan(1/R.projectionMatrix.elements[5]),R.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(R){l=R,f!==null&&(f.fixedFoveation=R),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=R)};let j=null;function te(R,U){if(u=U.getViewerPose(c||o),v=U,u!==null){const G=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let k=!1;G.length!==E.cameras.length&&(E.cameras.length=0,k=!0);for(let oe=0;oe<G.length;oe++){const me=G[oe];let Me=null;if(p!==null)Me=p.getViewport(me);else{const Fe=h.getViewSubImage(f,me);Me=Fe.viewport,oe===0&&(e.setRenderTargetTextures(d,Fe.colorTexture,f.ignoreDepthValues?void 0:Fe.depthStencilTexture),e.setRenderTarget(d))}let ce=T[oe];ce===void 0&&(ce=new Rt,ce.layers.enable(oe),ce.viewport=new Qe,T[oe]=ce),ce.matrix.fromArray(me.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(me.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(Me.x,Me.y,Me.width,Me.height),oe===0&&(E.matrix.copy(ce.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),k===!0&&E.cameras.push(ce)}}for(let G=0;G<_.length;G++){const k=x[G],oe=_[G];k!==null&&oe!==void 0&&oe.update(k,U,c||o)}j&&j(R,U),U.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:U}),v=null}const $=new Al;$.setAnimationLoop(te),this.setAnimationLoop=function(R){j=R},this.dispose=function(){}}}function pm(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,bl(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,_,x,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),v(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),g(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,_,x):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Mt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Mt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=e.get(d).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const x=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*x,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,_,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=x*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Mt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){const _=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function mm(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,x){const y=x.program;n.uniformBlockBinding(_,y)}function c(_,x){let y=r[_.id];y===void 0&&(v(_),y=u(_),r[_.id]=y,_.addEventListener("dispose",m));const b=x.program;n.updateUBOMapping(_,b);const T=e.render.frame;s[_.id]!==T&&(f(_),s[_.id]=T)}function u(_){const x=h();_.__bindingPointIndex=x;const y=i.createBuffer(),b=_.__size,T=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,b,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const x=r[_.id],y=_.uniforms,b=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,E=y.length;T<E;T++){const P=y[T];if(p(P,T,b)===!0){const M=P.__offset,S=Array.isArray(P.value)?P.value:[P.value];let L=0;for(let O=0;O<S.length;O++){const D=S[O],B=g(D);typeof D=="number"?(P.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,M+L,P.__data)):D.isMatrix3?(P.__data[0]=D.elements[0],P.__data[1]=D.elements[1],P.__data[2]=D.elements[2],P.__data[3]=D.elements[0],P.__data[4]=D.elements[3],P.__data[5]=D.elements[4],P.__data[6]=D.elements[5],P.__data[7]=D.elements[0],P.__data[8]=D.elements[6],P.__data[9]=D.elements[7],P.__data[10]=D.elements[8],P.__data[11]=D.elements[0]):(D.toArray(P.__data,L),L+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,M,P.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,x,y){const b=_.value;if(y[x]===void 0){if(typeof b=="number")y[x]=b;else{const T=Array.isArray(b)?b:[b],E=[];for(let P=0;P<T.length;P++)E.push(T[P].clone());y[x]=E}return!0}else if(typeof b=="number"){if(y[x]!==b)return y[x]=b,!0}else{const T=Array.isArray(y[x])?y[x]:[y[x]],E=Array.isArray(b)?b:[b];for(let P=0;P<T.length;P++){const M=T[P];if(M.equals(E[P])===!1)return M.copy(E[P]),!0}}return!1}function v(_){const x=_.uniforms;let y=0;const b=16;let T=0;for(let E=0,P=x.length;E<P;E++){const M=x[E],S={boundary:0,storage:0},L=Array.isArray(M.value)?M.value:[M.value];for(let O=0,D=L.length;O<D;O++){const B=L[O],H=g(B);S.boundary+=H.boundary,S.storage+=H.storage}if(M.__data=new Float32Array(S.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=y,E>0){T=y%b;const O=b-T;T!==0&&O-S.boundary<0&&(y+=b-T,M.__offset=y)}y+=S.storage}return T=y%b,T>0&&(y+=b-T),_.__size=y,_.__cache={},this}function g(_){const x={boundary:0,storage:0};return typeof _=="number"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){const x=_.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const _ in r)i.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}function vm(){const i=ji("canvas");return i.style.display="block",i}class Dl{constructor(e={}){const{canvas:t=vm(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const p=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const d=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ne,this._useLegacyLights=!1,this.toneMapping=Tn,this.toneMappingExposure=1;const x=this;let y=!1,b=0,T=0,E=null,P=-1,M=null;const S=new Qe,L=new Qe;let O=null;const D=new Ze(0);let B=0,H=t.width,Z=t.height,X=1,j=null,te=null;const $=new Qe(0,0,H,Z),R=new Qe(0,0,H,Z);let U=!1;const G=new Ca;let k=!1,oe=!1,me=null;const Me=new at,ce=new de,Fe=new z,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ce(){return E===null?X:1}let I=n;function se(w,W){for(let ee=0;ee<w.length;ee++){const V=w[ee],Q=t.getContext(V,W);if(Q!==null)return Q}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ya}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",K,!1),t.addEventListener("webglcontextcreationerror",le,!1),I===null){const W=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&W.shift(),I=se(W,w),I===null)throw se(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let J,ue,ne,Te,Se,Ee,we,Pe,Ve,C,A,q,ae,re,fe,Ae,he,Y,N,ie,_e,pe,ye,Le;function He(){J=new A0(I),ue=new y0(I,J,e),J.init(ue),pe=new lm(I,J,ue),ne=new om(I,J,ue),Te=new R0(I),Se=new Yp,Ee=new cm(I,J,ne,Se,ue,pe,Te),we=new M0(x),Pe=new T0(x),Ve=new zf(I,ue),ye=new g0(I,J,Ve,ue),C=new w0(I,Ve,Te,ye),A=new U0(I,C,Ve,Te),N=new D0(I,ue,Ee),Ae=new S0(Se),q=new qp(x,we,Pe,J,ue,ye,Ae),ae=new pm(x,Se),re=new Zp,fe=new tm(J,ue),Y=new x0(x,we,Pe,ne,A,f,l),he=new am(x,A,ue),Le=new mm(I,Te,ue,ne),ie=new _0(I,J,Te,ue),_e=new C0(I,J,Te,ue),Te.programs=q.programs,x.capabilities=ue,x.extensions=J,x.properties=Se,x.renderLists=re,x.shadowMap=he,x.state=ne,x.info=Te}He();const F=new dm(x,I);this.xr=F,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=J.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=J.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(w){w!==void 0&&(X=w,this.setSize(H,Z,!1))},this.getSize=function(w){return w.set(H,Z)},this.setSize=function(w,W,ee=!0){if(F.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=w,Z=W,t.width=Math.floor(w*X),t.height=Math.floor(W*X),ee===!0&&(t.style.width=w+"px",t.style.height=W+"px"),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(H*X,Z*X).floor()},this.setDrawingBufferSize=function(w,W,ee){H=w,Z=W,X=ee,t.width=Math.floor(w*ee),t.height=Math.floor(W*ee),this.setViewport(0,0,w,W)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy($)},this.setViewport=function(w,W,ee,V){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,W,ee,V),ne.viewport(S.copy($).multiplyScalar(X).floor())},this.getScissor=function(w){return w.copy(R)},this.setScissor=function(w,W,ee,V){w.isVector4?R.set(w.x,w.y,w.z,w.w):R.set(w,W,ee,V),ne.scissor(L.copy(R).multiplyScalar(X).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(w){ne.setScissorTest(U=w)},this.setOpaqueSort=function(w){j=w},this.setTransparentSort=function(w){te=w},this.getClearColor=function(w){return w.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor.apply(Y,arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha.apply(Y,arguments)},this.clear=function(w=!0,W=!0,ee=!0){let V=0;if(w){let Q=!1;if(E!==null){const be=E.texture.format;Q=be===dl||be===hl||be===fl}if(Q){const be=E.texture.type,Re=be===An||be===Mn||be===Sa||be===Bn||be===ll||be===ul,Ue=Y.getClearColor(),Ie=Y.getClearAlpha(),We=Ue.r,De=Ue.g,Be=Ue.b;Re?(p[0]=We,p[1]=De,p[2]=Be,p[3]=Ie,I.clearBufferuiv(I.COLOR,0,p)):(v[0]=We,v[1]=De,v[2]=Be,v[3]=Ie,I.clearBufferiv(I.COLOR,0,v))}else V|=I.COLOR_BUFFER_BIT}W&&(V|=I.DEPTH_BUFFER_BIT),ee&&(V|=I.STENCIL_BUFFER_BIT),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",K,!1),t.removeEventListener("webglcontextcreationerror",le,!1),re.dispose(),fe.dispose(),Se.dispose(),we.dispose(),Pe.dispose(),A.dispose(),ye.dispose(),Le.dispose(),q.dispose(),F.dispose(),F.removeEventListener("sessionstart",$e),F.removeEventListener("sessionend",Lt),me&&(me.dispose(),me=null),dt.stop()};function ve(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const w=Te.autoReset,W=he.enabled,ee=he.autoUpdate,V=he.needsUpdate,Q=he.type;He(),Te.autoReset=w,he.enabled=W,he.autoUpdate=ee,he.needsUpdate=V,he.type=Q}function le(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function xe(w){const W=w.target;W.removeEventListener("dispose",xe),Oe(W)}function Oe(w){Ke(w),Se.remove(w)}function Ke(w){const W=Se.get(w).programs;W!==void 0&&(W.forEach(function(ee){q.releaseProgram(ee)}),w.isShaderMaterial&&q.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,ee,V,Q,be){W===null&&(W=qe);const Re=Q.isMesh&&Q.matrixWorld.determinant()<0,Ue=Kl(w,W,ee,V,Q);ne.setMaterial(V,Re);let Ie=ee.index,We=1;if(V.wireframe===!0){if(Ie=C.getWireframeAttribute(ee),Ie===void 0)return;We=2}const De=ee.drawRange,Be=ee.attributes.position;let et=De.start*We,tt=(De.start+De.count)*We;be!==null&&(et=Math.max(et,be.start*We),tt=Math.min(tt,(be.start+be.count)*We)),Ie!==null?(et=Math.max(et,0),tt=Math.min(tt,Ie.count)):Be!=null&&(et=Math.max(et,0),tt=Math.min(tt,Be.count));const Ft=tt-et;if(Ft<0||Ft===1/0)return;ye.setup(Q,V,Ue,ee,Ie);let en,it=ie;if(Ie!==null&&(en=Ve.get(Ie),it=_e,it.setIndex(en)),Q.isMesh)V.wireframe===!0?(ne.setLineWidth(V.wireframeLinewidth*Ce()),it.setMode(I.LINES)):it.setMode(I.TRIANGLES);else if(Q.isLine){let Xe=V.linewidth;Xe===void 0&&(Xe=1),ne.setLineWidth(Xe*Ce()),Q.isLineSegments?it.setMode(I.LINES):Q.isLineLoop?it.setMode(I.LINE_LOOP):it.setMode(I.LINE_STRIP)}else Q.isPoints?it.setMode(I.POINTS):Q.isSprite&&it.setMode(I.TRIANGLES);if(Q.isInstancedMesh)it.renderInstances(et,Ft,Q.count);else if(ee.isInstancedBufferGeometry){const Xe=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,kr=Math.min(ee.instanceCount,Xe);it.renderInstances(et,Ft,kr)}else it.render(et,Ft)},this.compile=function(w,W){function ee(V,Q,be){V.transparent===!0&&V.side===Bt&&V.forceSinglePass===!1?(V.side=Mt,V.needsUpdate=!0,rr(V,Q,be),V.side=mn,V.needsUpdate=!0,rr(V,Q,be),V.side=Bt):rr(V,Q,be)}m=fe.get(w),m.init(),_.push(m),w.traverseVisible(function(V){V.isLight&&V.layers.test(W.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(x._useLegacyLights),w.traverse(function(V){const Q=V.material;if(Q)if(Array.isArray(Q))for(let be=0;be<Q.length;be++){const Re=Q[be];ee(Re,w,V)}else ee(Q,w,V)}),_.pop(),m=null};let je=null;function Yt(w){je&&je(w)}function $e(){dt.stop()}function Lt(){dt.start()}const dt=new Al;dt.setAnimationLoop(Yt),typeof self<"u"&&dt.setContext(self),this.setAnimationLoop=function(w){je=w,F.setAnimationLoop(w),w===null?dt.stop():dt.start()},F.addEventListener("sessionstart",$e),F.addEventListener("sessionend",Lt),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),F.enabled===!0&&F.isPresenting===!0&&(F.cameraAutoUpdate===!0&&F.updateCamera(W),W=F.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,W,E),m=fe.get(w,_.length),m.init(),_.push(m),Me.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),G.setFromProjectionMatrix(Me),oe=this.localClippingEnabled,k=Ae.init(this.clippingPlanes,oe),g=re.get(w,d.length),g.init(),d.push(g),Di(w,W,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(j,te),this.info.render.frame++,k===!0&&Ae.beginShadows();const ee=m.state.shadowsArray;if(he.render(ee,w,W),k===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),Y.render(g,w),m.setupLights(x._useLegacyLights),W.isArrayCamera){const V=W.cameras;for(let Q=0,be=V.length;Q<be;Q++){const Re=V[Q];vt(g,w,Re,Re.viewport)}}else vt(g,w,W);E!==null&&(Ee.updateMultisampleRenderTarget(E),Ee.updateRenderTargetMipmap(E)),w.isScene===!0&&w.onAfterRender(x,w,W),ye.resetDefaultState(),P=-1,M=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,d.pop(),d.length>0?g=d[d.length-1]:g=null};function Di(w,W,ee,V){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)ee=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||G.intersectsSprite(w)){V&&Fe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Me);const Re=A.update(w),Ue=w.material;Ue.visible&&g.push(w,Re,Ue,ee,Fe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||G.intersectsObject(w))){const Re=A.update(w),Ue=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Fe.copy(w.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Fe.copy(Re.boundingSphere.center)),Fe.applyMatrix4(w.matrixWorld).applyMatrix4(Me)),Array.isArray(Ue)){const Ie=Re.groups;for(let We=0,De=Ie.length;We<De;We++){const Be=Ie[We],et=Ue[Be.materialIndex];et&&et.visible&&g.push(w,Re,et,ee,Fe.z,Be)}}else Ue.visible&&g.push(w,Re,Ue,ee,Fe.z,null)}}const be=w.children;for(let Re=0,Ue=be.length;Re<Ue;Re++)Di(be[Re],W,ee,V)}function vt(w,W,ee,V){const Q=w.opaque,be=w.transmissive,Re=w.transparent;m.setupLightsView(ee),k===!0&&Ae.setGlobalState(x.clippingPlanes,ee),be.length>0&&Kt(Q,be,W,ee),V&&ne.viewport(S.copy(V)),Q.length>0&&Cn(Q,W,ee),be.length>0&&Cn(be,W,ee),Re.length>0&&Cn(Re,W,ee),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function Kt(w,W,ee,V){const Q=ue.isWebGL2;me===null&&(me=new vn(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")?Ki:An,minFilter:Yi,samples:Q?4:0})),x.getDrawingBufferSize(ce),Q?me.setSize(ce.x,ce.y):me.setSize(Ur(ce.x),Ur(ce.y));const be=x.getRenderTarget();x.setRenderTarget(me),x.getClearColor(D),B=x.getClearAlpha(),B<1&&x.setClearColor(16777215,.5),x.clear();const Re=x.toneMapping;x.toneMapping=Tn,Cn(w,ee,V),Ee.updateMultisampleRenderTarget(me),Ee.updateRenderTargetMipmap(me);let Ue=!1;for(let Ie=0,We=W.length;Ie<We;Ie++){const De=W[Ie],Be=De.object,et=De.geometry,tt=De.material,Ft=De.group;if(tt.side===Bt&&Be.layers.test(V.layers)){const en=tt.side;tt.side=Mt,tt.needsUpdate=!0,ir(Be,ee,V,et,tt,Ft),tt.side=en,tt.needsUpdate=!0,Ue=!0}}Ue===!0&&(Ee.updateMultisampleRenderTarget(me),Ee.updateRenderTargetMipmap(me)),x.setRenderTarget(be),x.setClearColor(D,B),x.toneMapping=Re}function Cn(w,W,ee){const V=W.isScene===!0?W.overrideMaterial:null;for(let Q=0,be=w.length;Q<be;Q++){const Re=w[Q],Ue=Re.object,Ie=Re.geometry,We=V===null?Re.material:V,De=Re.group;Ue.layers.test(ee.layers)&&ir(Ue,W,ee,Ie,We,De)}}function ir(w,W,ee,V,Q,be){w.onBeforeRender(x,W,ee,V,Q,be),w.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Q.onBeforeRender(x,W,ee,V,w,be),Q.transparent===!0&&Q.side===Bt&&Q.forceSinglePass===!1?(Q.side=Mt,Q.needsUpdate=!0,x.renderBufferDirect(ee,W,V,Q,w,be),Q.side=mn,Q.needsUpdate=!0,x.renderBufferDirect(ee,W,V,Q,w,be),Q.side=Bt):x.renderBufferDirect(ee,W,V,Q,w,be),w.onAfterRender(x,W,ee,V,Q,be)}function rr(w,W,ee){W.isScene!==!0&&(W=qe);const V=Se.get(w),Q=m.state.lights,be=m.state.shadowsArray,Re=Q.state.version,Ue=q.getParameters(w,Q.state,be,W,ee),Ie=q.getProgramCacheKey(Ue);let We=V.programs;V.environment=w.isMeshStandardMaterial?W.environment:null,V.fog=W.fog,V.envMap=(w.isMeshStandardMaterial?Pe:we).get(w.envMap||V.environment),We===void 0&&(w.addEventListener("dispose",xe),We=new Map,V.programs=We);let De=We.get(Ie);if(De!==void 0){if(V.currentProgram===De&&V.lightsStateVersion===Re)return Ba(w,Ue),De}else Ue.uniforms=q.getUniforms(w),w.onBuild(ee,Ue,x),w.onBeforeCompile(Ue,x),De=q.acquireProgram(Ue,Ie),We.set(Ie,De),V.uniforms=Ue.uniforms;const Be=V.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Be.clippingPlanes=Ae.uniform),Ba(w,Ue),V.needsLights=jl(w),V.lightsStateVersion=Re,V.needsLights&&(Be.ambientLightColor.value=Q.state.ambient,Be.lightProbe.value=Q.state.probe,Be.directionalLights.value=Q.state.directional,Be.directionalLightShadows.value=Q.state.directionalShadow,Be.spotLights.value=Q.state.spot,Be.spotLightShadows.value=Q.state.spotShadow,Be.rectAreaLights.value=Q.state.rectArea,Be.ltc_1.value=Q.state.rectAreaLTC1,Be.ltc_2.value=Q.state.rectAreaLTC2,Be.pointLights.value=Q.state.point,Be.pointLightShadows.value=Q.state.pointShadow,Be.hemisphereLights.value=Q.state.hemi,Be.directionalShadowMap.value=Q.state.directionalShadowMap,Be.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Be.spotShadowMap.value=Q.state.spotShadowMap,Be.spotLightMatrix.value=Q.state.spotLightMatrix,Be.spotLightMap.value=Q.state.spotLightMap,Be.pointShadowMap.value=Q.state.pointShadowMap,Be.pointShadowMatrix.value=Q.state.pointShadowMatrix);const et=De.getUniforms(),tt=Pr.seqWithValue(et.seq,Be);return V.currentProgram=De,V.uniformsList=tt,De}function Ba(w,W){const ee=Se.get(w);ee.outputColorSpace=W.outputColorSpace,ee.instancing=W.instancing,ee.instancingColor=W.instancingColor,ee.skinning=W.skinning,ee.morphTargets=W.morphTargets,ee.morphNormals=W.morphNormals,ee.morphColors=W.morphColors,ee.morphTargetsCount=W.morphTargetsCount,ee.numClippingPlanes=W.numClippingPlanes,ee.numIntersection=W.numClipIntersection,ee.vertexAlphas=W.vertexAlphas,ee.vertexTangents=W.vertexTangents,ee.toneMapping=W.toneMapping}function Kl(w,W,ee,V,Q){W.isScene!==!0&&(W=qe),Ee.resetTextureUnits();const be=W.fog,Re=V.isMeshStandardMaterial?W.environment:null,Ue=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Jt,Ie=(V.isMeshStandardMaterial?Pe:we).get(V.envMap||Re),We=V.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,De=!!ee.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Be=!!ee.morphAttributes.position,et=!!ee.morphAttributes.normal,tt=!!ee.morphAttributes.color;let Ft=Tn;V.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Ft=x.toneMapping);const en=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,it=en!==void 0?en.length:0,Xe=Se.get(V),kr=m.state.lights;if(k===!0&&(oe===!0||w!==M)){const Dt=w===M&&V.id===P;Ae.setState(V,w,Dt)}let rt=!1;V.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==kr.state.version||Xe.outputColorSpace!==Ue||Q.isInstancedMesh&&Xe.instancing===!1||!Q.isInstancedMesh&&Xe.instancing===!0||Q.isSkinnedMesh&&Xe.skinning===!1||!Q.isSkinnedMesh&&Xe.skinning===!0||Q.isInstancedMesh&&Xe.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Xe.instancingColor===!1&&Q.instanceColor!==null||Xe.envMap!==Ie||V.fog===!0&&Xe.fog!==be||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Ae.numPlanes||Xe.numIntersection!==Ae.numIntersection)||Xe.vertexAlphas!==We||Xe.vertexTangents!==De||Xe.morphTargets!==Be||Xe.morphNormals!==et||Xe.morphColors!==tt||Xe.toneMapping!==Ft||ue.isWebGL2===!0&&Xe.morphTargetsCount!==it)&&(rt=!0):(rt=!0,Xe.__version=V.version);let Rn=Xe.currentProgram;rt===!0&&(Rn=rr(V,W,Q));let za=!1,Ui=!1,Gr=!1;const bt=Rn.getUniforms(),Pn=Xe.uniforms;if(ne.useProgram(Rn.program)&&(za=!0,Ui=!0,Gr=!0),V.id!==P&&(P=V.id,Ui=!0),za||M!==w){if(bt.setValue(I,"projectionMatrix",w.projectionMatrix),ue.logarithmicDepthBuffer&&bt.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),M!==w&&(M=w,Ui=!0,Gr=!0),V.isShaderMaterial||V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshStandardMaterial||V.envMap){const Dt=bt.map.cameraPosition;Dt!==void 0&&Dt.setValue(I,Fe.setFromMatrixPosition(w.matrixWorld))}(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&bt.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial||V.isShadowMaterial||Q.isSkinnedMesh)&&bt.setValue(I,"viewMatrix",w.matrixWorldInverse)}if(Q.isSkinnedMesh){bt.setOptional(I,Q,"bindMatrix"),bt.setOptional(I,Q,"bindMatrixInverse");const Dt=Q.skeleton;Dt&&(ue.floatVertexTextures?(Dt.boneTexture===null&&Dt.computeBoneTexture(),bt.setValue(I,"boneTexture",Dt.boneTexture,Ee),bt.setValue(I,"boneTextureSize",Dt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Vr=ee.morphAttributes;if((Vr.position!==void 0||Vr.normal!==void 0||Vr.color!==void 0&&ue.isWebGL2===!0)&&N.update(Q,ee,Rn),(Ui||Xe.receiveShadow!==Q.receiveShadow)&&(Xe.receiveShadow=Q.receiveShadow,bt.setValue(I,"receiveShadow",Q.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Pn.envMap.value=Ie,Pn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),Ui&&(bt.setValue(I,"toneMappingExposure",x.toneMappingExposure),Xe.needsLights&&Zl(Pn,Gr),be&&V.fog===!0&&ae.refreshFogUniforms(Pn,be),ae.refreshMaterialUniforms(Pn,V,X,Z,me),Pr.upload(I,Xe.uniformsList,Pn,Ee)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Pr.upload(I,Xe.uniformsList,Pn,Ee),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&bt.setValue(I,"center",Q.center),bt.setValue(I,"modelViewMatrix",Q.modelViewMatrix),bt.setValue(I,"normalMatrix",Q.normalMatrix),bt.setValue(I,"modelMatrix",Q.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Dt=V.uniformsGroups;for(let Wr=0,$l=Dt.length;Wr<$l;Wr++)if(ue.isWebGL2){const Ha=Dt[Wr];Le.update(Ha,Rn),Le.bind(Ha,Rn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Rn}function Zl(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function jl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(w,W,ee){Se.get(w.texture).__webglTexture=W,Se.get(w.depthTexture).__webglTexture=ee;const V=Se.get(w);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=ee===void 0,V.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,W){const ee=Se.get(w);ee.__webglFramebuffer=W,ee.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(w,W=0,ee=0){E=w,b=W,T=ee;let V=!0,Q=null,be=!1,Re=!1;if(w){const Ie=Se.get(w);Ie.__useDefaultFramebuffer!==void 0?(ne.bindFramebuffer(I.FRAMEBUFFER,null),V=!1):Ie.__webglFramebuffer===void 0?Ee.setupRenderTarget(w):Ie.__hasExternalTextures&&Ee.rebindTextures(w,Se.get(w.texture).__webglTexture,Se.get(w.depthTexture).__webglTexture);const We=w.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Re=!0);const De=Se.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(De[W])?Q=De[W][ee]:Q=De[W],be=!0):ue.isWebGL2&&w.samples>0&&Ee.useMultisampledRTT(w)===!1?Q=Se.get(w).__webglMultisampledFramebuffer:Array.isArray(De)?Q=De[ee]:Q=De,S.copy(w.viewport),L.copy(w.scissor),O=w.scissorTest}else S.copy($).multiplyScalar(X).floor(),L.copy(R).multiplyScalar(X).floor(),O=U;if(ne.bindFramebuffer(I.FRAMEBUFFER,Q)&&ue.drawBuffers&&V&&ne.drawBuffers(w,Q),ne.viewport(S),ne.scissor(L),ne.setScissorTest(O),be){const Ie=Se.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ie.__webglTexture,ee)}else if(Re){const Ie=Se.get(w.texture),We=W||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ie.__webglTexture,ee||0,We)}P=-1},this.readRenderTargetPixels=function(w,W,ee,V,Q,be,Re){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Se.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(Ue=Ue[Re]),Ue){ne.bindFramebuffer(I.FRAMEBUFFER,Ue);try{const Ie=w.texture,We=Ie.format,De=Ie.type;if(We!==Xt&&pe.convert(We)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=De===Ki&&(J.has("EXT_color_buffer_half_float")||ue.isWebGL2&&J.has("EXT_color_buffer_float"));if(De!==An&&pe.convert(De)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(De===En&&(ue.isWebGL2||J.has("OES_texture_float")||J.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-V&&ee>=0&&ee<=w.height-Q&&I.readPixels(W,ee,V,Q,pe.convert(We),pe.convert(De),be)}finally{const Ie=E!==null?Se.get(E).__webglFramebuffer:null;ne.bindFramebuffer(I.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(w,W,ee=0){const V=Math.pow(2,-ee),Q=Math.floor(W.image.width*V),be=Math.floor(W.image.height*V);Ee.setTexture2D(W,0),I.copyTexSubImage2D(I.TEXTURE_2D,ee,0,0,w.x,w.y,Q,be),ne.unbindTexture()},this.copyTextureToTexture=function(w,W,ee,V=0){const Q=W.image.width,be=W.image.height,Re=pe.convert(ee.format),Ue=pe.convert(ee.type);Ee.setTexture2D(ee,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,ee.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,ee.unpackAlignment),W.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,V,w.x,w.y,Q,be,Re,Ue,W.image.data):W.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,V,w.x,w.y,W.mipmaps[0].width,W.mipmaps[0].height,Re,W.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,V,w.x,w.y,Re,Ue,W.image),V===0&&ee.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),ne.unbindTexture()},this.copyTextureToTexture3D=function(w,W,ee,V,Q=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=w.max.x-w.min.x+1,Re=w.max.y-w.min.y+1,Ue=w.max.z-w.min.z+1,Ie=pe.convert(V.format),We=pe.convert(V.type);let De;if(V.isData3DTexture)Ee.setTexture3D(V,0),De=I.TEXTURE_3D;else if(V.isDataArrayTexture)Ee.setTexture2DArray(V,0),De=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,V.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,V.unpackAlignment);const Be=I.getParameter(I.UNPACK_ROW_LENGTH),et=I.getParameter(I.UNPACK_IMAGE_HEIGHT),tt=I.getParameter(I.UNPACK_SKIP_PIXELS),Ft=I.getParameter(I.UNPACK_SKIP_ROWS),en=I.getParameter(I.UNPACK_SKIP_IMAGES),it=ee.isCompressedTexture?ee.mipmaps[0]:ee.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,it.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,it.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,w.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,w.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,w.min.z),ee.isDataTexture||ee.isData3DTexture?I.texSubImage3D(De,Q,W.x,W.y,W.z,be,Re,Ue,Ie,We,it.data):ee.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(De,Q,W.x,W.y,W.z,be,Re,Ue,Ie,it.data)):I.texSubImage3D(De,Q,W.x,W.y,W.z,be,Re,Ue,Ie,We,it),I.pixelStorei(I.UNPACK_ROW_LENGTH,Be),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,et),I.pixelStorei(I.UNPACK_SKIP_PIXELS,tt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ft),I.pixelStorei(I.UNPACK_SKIP_IMAGES,en),Q===0&&V.generateMipmaps&&I.generateMipmap(De),ne.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Ee.setTextureCube(w,0):w.isData3DTexture?Ee.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ee.setTexture2DArray(w,0):Ee.setTexture2D(w,0),ne.unbindTexture()},this.resetState=function(){b=0,T=0,E=null,ne.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ne?Hn:pl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Hn?Ne:Jt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class xm extends Dl{}xm.prototype.isWebGL1Renderer=!0;class _s extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Qt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const u=n[r],f=n[r+1]-u,p=(o-u)/f;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new de:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new z,r=[],s=[],o=[],a=new z,l=new at;for(let p=0;p<=e;p++){const v=p/e;r[p]=this.getTangentAt(v,new z)}s[0]=new z,o[0]=new z;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(ht(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,v))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(ht(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],p*v)),o[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class La extends Qt{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new de,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class gm extends La{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Da(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,p*=u,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const Ar=new z,ys=new Da,Ss=new Da,Ms=new Da;class _m extends Qt{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new z){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Ar.subVectors(r[0],r[1]).add(r[0]),c=Ar);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Ar.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Ar),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(h),p),g=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);g<1e-4&&(g=1),v<1e-4&&(v=g),m<1e-4&&(m=g),ys.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,v,g,m),Ss.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,v,g,m),Ms.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,v,g,m)}else this.curveType==="catmullrom"&&(ys.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Ss.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Ms.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(ys.calc(l),Ss.calc(l),Ms.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new z().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function rc(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function ym(i,e){const t=1-i;return t*t*e}function Sm(i,e){return 2*(1-i)*i*e}function Mm(i,e){return i*i*e}function Vi(i,e,t,n){return ym(i,e)+Sm(i,t)+Mm(i,n)}function Em(i,e){const t=1-i;return t*t*t*e}function bm(i,e){const t=1-i;return 3*t*t*i*e}function Tm(i,e){return 3*(1-i)*i*i*e}function Am(i,e){return i*i*i*e}function Wi(i,e,t,n,r){return Em(i,e)+bm(i,t)+Tm(i,n)+Am(i,r)}class Ul extends Qt{constructor(e=new de,t=new de,n=new de,r=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new de){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Wi(e,r.x,s.x,o.x,a.x),Wi(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class wm extends Qt{constructor(e=new z,t=new z,n=new z,r=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new z){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Wi(e,r.x,s.x,o.x,a.x),Wi(e,r.y,s.y,o.y,a.y),Wi(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ua extends Qt{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cm extends Qt{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Il extends Qt{constructor(e=new de,t=new de,n=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new de){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Vi(e,r.x,s.x,o.x),Vi(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rm extends Qt{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Vi(e,r.x,s.x,o.x),Vi(e,r.y,s.y,o.y),Vi(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Nl extends Qt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(rc(a,l.x,c.x,u.x,h.x),rc(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new de().fromArray(r))}return this}}var Fl=Object.freeze({__proto__:null,ArcCurve:gm,CatmullRomCurve3:_m,CubicBezierCurve:Ul,CubicBezierCurve3:wm,EllipseCurve:La,LineCurve:Ua,LineCurve3:Cm,QuadraticBezierCurve:Il,QuadraticBezierCurve3:Rm,SplineCurve:Nl});class Pm extends Qt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Ua(t,e))}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new Fl[r.type]().fromJSON(r))}return this}}class pa extends Pm{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Ua(this.currentPoint.clone(),new de(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new Il(this.currentPoint.clone(),new de(e,t),new de(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){const a=new Ul(this.currentPoint.clone(),new de(e,t),new de(n,r),new de(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Nl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){const c=new La(e,t,n,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Lr extends pa{constructor(e){super(e),this.uuid=Xn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new pa().fromJSON(r))}return this}}const Lm={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=Ol(i,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,f,p;if(n&&(s=Fm(i,e,s,t)),i.length>80*t){a=c=i[0],l=u=i[1];for(let v=t;v<r;v+=t)h=i[v],f=i[v+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return $i(s,o,t,a,l,p,0),o}};function Ol(i,e,t,n,r){let s,o;if(r===Ym(i,e,t,n)>0)for(s=e;s<t;s+=n)o=sc(s,i[s],i[s+1],o);else for(s=t-n;s>=e;s-=n)o=sc(s,i[s],i[s+1],o);return o&&zr(o,o.next)&&(Qi(o),o=o.next),o}function Vn(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(zr(t,t.next)||Je(t.prev,t,t.next)===0)){if(Qi(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function $i(i,e,t,n,r,s,o){if(!i)return;!o&&s&&km(i,n,r,s);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?Um(i,n,r,s):Dm(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Qi(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Im(Vn(i),e,t),$i(i,e,t,n,r,s,2)):o===2&&Nm(i,e,t,n,r,s):$i(Vn(i),e,t,n,r,s,1);break}}}function Dm(i){const e=i.prev,t=i,n=i.next;if(Je(e,t,n)>=0)return!1;const r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,f=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let v=n.next;for(;v!==e;){if(v.x>=u&&v.x<=f&&v.y>=h&&v.y<=p&&mi(r,a,s,l,o,c,v.x,v.y)&&Je(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function Um(i,e,t,n){const r=i.prev,s=i,o=i.next;if(Je(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,f=o.y,p=a<l?a<c?a:c:l<c?l:c,v=u<h?u<f?u:f:h<f?h:f,g=a>l?a>c?a:c:l>c?l:c,m=u>h?u>f?u:f:h>f?h:f,d=ma(p,v,e,t,n),_=ma(g,m,e,t,n);let x=i.prevZ,y=i.nextZ;for(;x&&x.z>=d&&y&&y.z<=_;){if(x.x>=p&&x.x<=g&&x.y>=v&&x.y<=m&&x!==r&&x!==o&&mi(a,u,l,h,c,f,x.x,x.y)&&Je(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=p&&y.x<=g&&y.y>=v&&y.y<=m&&y!==r&&y!==o&&mi(a,u,l,h,c,f,y.x,y.y)&&Je(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=d;){if(x.x>=p&&x.x<=g&&x.y>=v&&x.y<=m&&x!==r&&x!==o&&mi(a,u,l,h,c,f,x.x,x.y)&&Je(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=_;){if(y.x>=p&&y.x<=g&&y.y>=v&&y.y<=m&&y!==r&&y!==o&&mi(a,u,l,h,c,f,y.x,y.y)&&Je(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Im(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!zr(r,s)&&Bl(r,n,n.next,s)&&Ji(r,s)&&Ji(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Qi(n),Qi(n.next),n=i=s),n=n.next}while(n!==i);return Vn(n)}function Nm(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Wm(o,a)){let l=zl(o,a);o=Vn(o,o.next),l=Vn(l,l.next),$i(o,e,t,n,r,s,0),$i(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Fm(i,e,t,n){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=Ol(i,a,l,n,!1),c===c.next&&(c.steiner=!0),r.push(Vm(c));for(r.sort(Om),s=0;s<r.length;s++)t=Bm(r[s],t);return t}function Om(i,e){return i.x-e.x}function Bm(i,e){const t=zm(i,e);if(!t)return e;const n=zl(t,i);return Vn(n,n.next),Vn(t,t.next)}function zm(i,e){let t=e,n=-1/0,r;const s=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>n&&(n=f,r=t.x<t.next.x?t:t.next,f===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,h;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&mi(o<c?s:n,o,l,c,o<c?n:s,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(s-t.x),Ji(t,i)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&Hm(r,t)))&&(r=t,u=h)),t=t.next;while(t!==a);return r}function Hm(i,e){return Je(i.prev,i,e.prev)<0&&Je(e.next,i,i.next)<0}function km(i,e,t,n){let r=i;do r.z===0&&(r.z=ma(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Gm(r)}function Gm(i){let e,t,n,r,s,o,a,l,c=1;do{for(t=i,i=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,a--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,c*=2}while(o>1);return i}function ma(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Vm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function mi(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function Wm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Xm(i,e)&&(Ji(i,e)&&Ji(e,i)&&qm(i,e)&&(Je(i.prev,i,e.prev)||Je(i,e.prev,e))||zr(i,e)&&Je(i.prev,i,i.next)>0&&Je(e.prev,e,e.next)>0)}function Je(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function zr(i,e){return i.x===e.x&&i.y===e.y}function Bl(i,e,t,n){const r=Cr(Je(i,e,t)),s=Cr(Je(i,e,n)),o=Cr(Je(t,n,i)),a=Cr(Je(t,n,e));return!!(r!==s&&o!==a||r===0&&wr(i,t,e)||s===0&&wr(i,n,e)||o===0&&wr(t,i,n)||a===0&&wr(t,e,n))}function wr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Cr(i){return i>0?1:i<0?-1:0}function Xm(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Bl(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ji(i,e){return Je(i.prev,i,i.next)<0?Je(i,e,i.next)>=0&&Je(i,i.prev,e)>=0:Je(i,e,i.prev)<0||Je(i,i.next,e)<0}function qm(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function zl(i,e){const t=new va(i.i,i.x,i.y),n=new va(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function sc(i,e,t,n){const r=new va(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Qi(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function va(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ym(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class Si{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return Si.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];ac(e),oc(n,e);let o=e.length;t.forEach(ac);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,oc(n,t[l]);const a=Lm.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function ac(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function oc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Ia extends wn{constructor(e=new Lr([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new pn(r,3)),this.setAttribute("uv",new pn(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,v=t.bevelSize!==void 0?t.bevelSize:p-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Km;let x,y=!1,b,T,E,P;d&&(x=d.getSpacedPoints(u),y=!0,f=!1,b=d.computeFrenetFrames(u,!1),T=new z,E=new z,P=new z),f||(m=0,p=0,v=0,g=0);const M=a.extractPoints(c);let S=M.shape;const L=M.holes;if(!Si.isClockWise(S)){S=S.reverse();for(let I=0,se=L.length;I<se;I++){const J=L[I];Si.isClockWise(J)&&(L[I]=J.reverse())}}const D=Si.triangulateShape(S,L),B=S;for(let I=0,se=L.length;I<se;I++){const J=L[I];S=S.concat(J)}function H(I,se,J){return se||console.error("THREE.ExtrudeGeometry: vec does not exist"),I.clone().addScaledVector(se,J)}const Z=S.length,X=D.length;function j(I,se,J){let ue,ne,Te;const Se=I.x-se.x,Ee=I.y-se.y,we=J.x-I.x,Pe=J.y-I.y,Ve=Se*Se+Ee*Ee,C=Se*Pe-Ee*we;if(Math.abs(C)>Number.EPSILON){const A=Math.sqrt(Ve),q=Math.sqrt(we*we+Pe*Pe),ae=se.x-Ee/A,re=se.y+Se/A,fe=J.x-Pe/q,Ae=J.y+we/q,he=((fe-ae)*Pe-(Ae-re)*we)/(Se*Pe-Ee*we);ue=ae+Se*he-I.x,ne=re+Ee*he-I.y;const Y=ue*ue+ne*ne;if(Y<=2)return new de(ue,ne);Te=Math.sqrt(Y/2)}else{let A=!1;Se>Number.EPSILON?we>Number.EPSILON&&(A=!0):Se<-Number.EPSILON?we<-Number.EPSILON&&(A=!0):Math.sign(Ee)===Math.sign(Pe)&&(A=!0),A?(ue=-Ee,ne=Se,Te=Math.sqrt(Ve)):(ue=Se,ne=Ee,Te=Math.sqrt(Ve/2))}return new de(ue/Te,ne/Te)}const te=[];for(let I=0,se=B.length,J=se-1,ue=I+1;I<se;I++,J++,ue++)J===se&&(J=0),ue===se&&(ue=0),te[I]=j(B[I],B[J],B[ue]);const $=[];let R,U=te.concat();for(let I=0,se=L.length;I<se;I++){const J=L[I];R=[];for(let ue=0,ne=J.length,Te=ne-1,Se=ue+1;ue<ne;ue++,Te++,Se++)Te===ne&&(Te=0),Se===ne&&(Se=0),R[ue]=j(J[ue],J[Te],J[Se]);$.push(R),U=U.concat(R)}for(let I=0;I<m;I++){const se=I/m,J=p*Math.cos(se*Math.PI/2),ue=v*Math.sin(se*Math.PI/2)+g;for(let ne=0,Te=B.length;ne<Te;ne++){const Se=H(B[ne],te[ne],ue);Me(Se.x,Se.y,-J)}for(let ne=0,Te=L.length;ne<Te;ne++){const Se=L[ne];R=$[ne];for(let Ee=0,we=Se.length;Ee<we;Ee++){const Pe=H(Se[Ee],R[Ee],ue);Me(Pe.x,Pe.y,-J)}}}const G=v+g;for(let I=0;I<Z;I++){const se=f?H(S[I],U[I],G):S[I];y?(E.copy(b.normals[0]).multiplyScalar(se.x),T.copy(b.binormals[0]).multiplyScalar(se.y),P.copy(x[0]).add(E).add(T),Me(P.x,P.y,P.z)):Me(se.x,se.y,0)}for(let I=1;I<=u;I++)for(let se=0;se<Z;se++){const J=f?H(S[se],U[se],G):S[se];y?(E.copy(b.normals[I]).multiplyScalar(J.x),T.copy(b.binormals[I]).multiplyScalar(J.y),P.copy(x[I]).add(E).add(T),Me(P.x,P.y,P.z)):Me(J.x,J.y,h/u*I)}for(let I=m-1;I>=0;I--){const se=I/m,J=p*Math.cos(se*Math.PI/2),ue=v*Math.sin(se*Math.PI/2)+g;for(let ne=0,Te=B.length;ne<Te;ne++){const Se=H(B[ne],te[ne],ue);Me(Se.x,Se.y,h+J)}for(let ne=0,Te=L.length;ne<Te;ne++){const Se=L[ne];R=$[ne];for(let Ee=0,we=Se.length;Ee<we;Ee++){const Pe=H(Se[Ee],R[Ee],ue);y?Me(Pe.x,Pe.y+x[u-1].y,x[u-1].x+J):Me(Pe.x,Pe.y,h+J)}}}k(),oe();function k(){const I=r.length/3;if(f){let se=0,J=Z*se;for(let ue=0;ue<X;ue++){const ne=D[ue];ce(ne[2]+J,ne[1]+J,ne[0]+J)}se=u+m*2,J=Z*se;for(let ue=0;ue<X;ue++){const ne=D[ue];ce(ne[0]+J,ne[1]+J,ne[2]+J)}}else{for(let se=0;se<X;se++){const J=D[se];ce(J[2],J[1],J[0])}for(let se=0;se<X;se++){const J=D[se];ce(J[0]+Z*u,J[1]+Z*u,J[2]+Z*u)}}n.addGroup(I,r.length/3-I,0)}function oe(){const I=r.length/3;let se=0;me(B,se),se+=B.length;for(let J=0,ue=L.length;J<ue;J++){const ne=L[J];me(ne,se),se+=ne.length}n.addGroup(I,r.length/3-I,1)}function me(I,se){let J=I.length;for(;--J>=0;){const ue=J;let ne=J-1;ne<0&&(ne=I.length-1);for(let Te=0,Se=u+m*2;Te<Se;Te++){const Ee=Z*Te,we=Z*(Te+1),Pe=se+ue+Ee,Ve=se+ne+Ee,C=se+ne+we,A=se+ue+we;Fe(Pe,Ve,C,A)}}}function Me(I,se,J){l.push(I),l.push(se),l.push(J)}function ce(I,se,J){qe(I),qe(se),qe(J);const ue=r.length/3,ne=_.generateTopUV(n,r,ue-3,ue-2,ue-1);Ce(ne[0]),Ce(ne[1]),Ce(ne[2])}function Fe(I,se,J,ue){qe(I),qe(se),qe(ue),qe(se),qe(J),qe(ue);const ne=r.length/3,Te=_.generateSideWallUV(n,r,ne-6,ne-3,ne-2,ne-1);Ce(Te[0]),Ce(Te[1]),Ce(Te[3]),Ce(Te[1]),Ce(Te[2]),Ce(Te[3])}function qe(I){r.push(l[I*3+0]),r.push(l[I*3+1]),r.push(l[I*3+2])}function Ce(I){s.push(I.x),s.push(I.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Zm(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Fl[r.type]().fromJSON(r)),new Ia(n,e.options)}}const Km={generateTopUV:function(i,e,t,n,r){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],u=e[r*3+1];return[new de(s,o),new de(a,l),new de(c,u)]},generateSideWallUV:function(i,e,t,n,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[r*3],p=e[r*3+1],v=e[r*3+2],g=e[s*3],m=e[s*3+1],d=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new de(o,1-l),new de(c,1-h),new de(f,1-v),new de(g,1-d)]:[new de(a,1-l),new de(u,1-h),new de(p,1-v),new de(m,1-d)]}};function Zm(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class jm extends nr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ml,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Ir={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class $m{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],v=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null}}}const Jm=new $m;class Ci{constructor(e){this.manager=e!==void 0?e:Jm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ci.DEFAULT_MATERIAL_NAME="__DEFAULT";const cn={};class Qm extends Error{constructor(e,t){super(e),this.response=t}}class ev extends Ci{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ir.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(cn[e]!==void 0){cn[e].push({onLoad:t,onProgress:n,onError:r});return}cn[e]=[],cn[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=cn[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=f?parseInt(f):0,v=p!==0;let g=0;const m=new ReadableStream({start(d){_();function _(){h.read().then(({done:x,value:y})=>{if(x)d.close();else{g+=y.byteLength;const b=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:p});for(let T=0,E=u.length;T<E;T++){const P=u[T];P.onProgress&&P.onProgress(b)}d.enqueue(y),_()}})}}});return new Response(m)}else throw new Qm(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(v=>p.decode(v))}}}).then(c=>{Ir.add(e,c);const u=cn[e];delete cn[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=cn[e];if(u===void 0)throw this.manager.itemError(e),c;delete cn[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Hl extends Ci{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ir.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=ji("img");function l(){u(),Ir.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class tv extends Ci{constructor(e){super(e)}load(e,t,n,r){const s=new wa;s.colorSpace=Ne;const o=new Hl(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(e[c],function(u){s.images[c]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let c=0;c<e.length;++c)l(c);return s}}class nv extends Ci{constructor(e){super(e)}load(e,t,n,r){const s=new Pt,o=new Hl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class iv extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Es=new at,cc=new z,lc=new z;class rv{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ca,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;cc.setFromMatrixPosition(e.matrixWorld),t.position.copy(cc),lc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lc),t.updateMatrixWorld(),Es.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Es),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Es)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class sv extends rv{constructor(){super(new wl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class av extends iv{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new sv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ov{constructor(e,t,n=0,r=1/0){this.ray=new ba(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Ta,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return xa(e,this,n,t),n.sort(uc),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)xa(e[r],this,n,t);return n.sort(uc),n}}function uc(i,e){return i.distance-e.distance}function xa(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)xa(r[s],e,t,!0)}}class fc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ht(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class cv{constructor(){this.type="ShapePath",this.color=new Ze,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new pa,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,r){return this.currentPath.quadraticCurveTo(e,t,n,r),this}bezierCurveTo(e,t,n,r,s,o){return this.currentPath.bezierCurveTo(e,t,n,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(d){const _=[];for(let x=0,y=d.length;x<y;x++){const b=d[x],T=new Lr;T.curves=b.curves,_.push(T)}return _}function n(d,_){const x=_.length;let y=!1;for(let b=x-1,T=0;T<x;b=T++){let E=_[b],P=_[T],M=P.x-E.x,S=P.y-E.y;if(Math.abs(S)>Number.EPSILON){if(S<0&&(E=_[T],M=-M,P=_[b],S=-S),d.y<E.y||d.y>P.y)continue;if(d.y===E.y){if(d.x===E.x)return!0}else{const L=S*(d.x-E.x)-M*(d.y-E.y);if(L===0)return!0;if(L<0)continue;y=!y}}else{if(d.y!==E.y)continue;if(P.x<=d.x&&d.x<=E.x||E.x<=d.x&&d.x<=P.x)return!0}}return y}const r=Si.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new Lr,l.curves=a.curves,c.push(l),c;let u=!r(s[0].getPoints());u=e?!u:u;const h=[],f=[];let p=[],v=0,g;f[v]=void 0,p[v]=[];for(let d=0,_=s.length;d<_;d++)a=s[d],g=a.getPoints(),o=r(g),o=e?!o:o,o?(!u&&f[v]&&v++,f[v]={s:new Lr,p:g},f[v].s.curves=a.curves,u&&v++,p[v]=[]):p[v].push({h:a,p:g[0]});if(!f[0])return t(s);if(f.length>1){let d=!1,_=0;for(let x=0,y=f.length;x<y;x++)h[x]=[];for(let x=0,y=f.length;x<y;x++){const b=p[x];for(let T=0;T<b.length;T++){const E=b[T];let P=!0;for(let M=0;M<f.length;M++)n(E.p,f[M].p)&&(x!==M&&_++,P?(P=!1,h[M].push(E)):d=!0);P&&h[x].push(E)}}_>0&&d===!1&&(p=h)}let m;for(let d=0,_=f.length;d<_;d++){l=f[d].s,c.push(l),m=p[d];for(let x=0,y=m.length;x<y;x++)l.holes.push(m[x].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ya}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ya);const hc={type:"change"},bs={type:"start"},dc={type:"end"},Rr=new ba,pc=new Sn,lv=Math.cos(70*uf.DEG2RAD);class uv extends Wn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Yn.ROTATE,MIDDLE:Yn.DOLLY,RIGHT:Yn.PAN},this.touches={ONE:Kn.ROTATE,TWO:Kn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(N){N.addEventListener("keydown",A),this._domElementKeyEvents=N},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",A),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(hc),n.update(),s=r.NONE},this.update=function(){const N=new z,ie=new Gn().setFromUnitVectors(e.up,new z(0,1,0)),_e=ie.clone().invert(),pe=new z,ye=new Gn,Le=new z,He=2*Math.PI;return function(){const ve=n.object.position;N.copy(ve).sub(n.target),N.applyQuaternion(ie),a.setFromVector3(N),n.autoRotate&&s===r.NONE&&L(M()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let K=n.minAzimuthAngle,le=n.maxAzimuthAngle;isFinite(K)&&isFinite(le)&&(K<-Math.PI?K+=He:K>Math.PI&&(K-=He),le<-Math.PI?le+=He:le>Math.PI&&(le-=He),K<=le?a.theta=Math.max(K,Math.min(le,a.theta)):a.theta=a.theta>(K+le)/2?Math.max(K,a.theta):Math.min(le,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.zoomToCursor&&T||n.object.isOrthographicCamera?a.radius=te(a.radius):a.radius=te(a.radius*c),N.setFromSpherical(a),N.applyQuaternion(_e),ve.copy(n.target).add(N),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let xe=!1;if(n.zoomToCursor&&T){let Oe=null;if(n.object.isPerspectiveCamera){const Ke=N.length();Oe=te(Ke*c);const je=Ke-Oe;n.object.position.addScaledVector(y,je),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Ke=new z(b.x,b.y,0);Ke.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),xe=!0;const je=new z(b.x,b.y,0);je.unproject(n.object),n.object.position.sub(je).add(Ke),n.object.updateMatrixWorld(),Oe=N.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Oe!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Oe).add(n.object.position):(Rr.origin.copy(n.object.position),Rr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Rr.direction))<lv?e.lookAt(n.target):(pc.setFromNormalAndCoplanarPoint(n.object.up,n.target),Rr.intersectPlane(pc,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),xe=!0);return c=1,T=!1,xe||pe.distanceToSquared(n.object.position)>o||8*(1-ye.dot(n.object.quaternion))>o||Le.distanceToSquared(n.target)>0?(n.dispatchEvent(hc),pe.copy(n.object.position),ye.copy(n.object.quaternion),Le.copy(n.target),xe=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",re),n.domElement.removeEventListener("pointerdown",Se),n.domElement.removeEventListener("pointercancel",we),n.domElement.removeEventListener("wheel",C),n.domElement.removeEventListener("pointermove",Ee),n.domElement.removeEventListener("pointerup",we),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",A),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new fc,l=new fc;let c=1;const u=new z,h=new de,f=new de,p=new de,v=new de,g=new de,m=new de,d=new de,_=new de,x=new de,y=new z,b=new de;let T=!1;const E=[],P={};function M(){return 2*Math.PI/60/60*n.autoRotateSpeed}function S(){return Math.pow(.95,n.zoomSpeed)}function L(N){l.theta-=N}function O(N){l.phi-=N}const D=function(){const N=new z;return function(_e,pe){N.setFromMatrixColumn(pe,0),N.multiplyScalar(-_e),u.add(N)}}(),B=function(){const N=new z;return function(_e,pe){n.screenSpacePanning===!0?N.setFromMatrixColumn(pe,1):(N.setFromMatrixColumn(pe,0),N.crossVectors(n.object.up,N)),N.multiplyScalar(_e),u.add(N)}}(),H=function(){const N=new z;return function(_e,pe){const ye=n.domElement;if(n.object.isPerspectiveCamera){const Le=n.object.position;N.copy(Le).sub(n.target);let He=N.length();He*=Math.tan(n.object.fov/2*Math.PI/180),D(2*_e*He/ye.clientHeight,n.object.matrix),B(2*pe*He/ye.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(D(_e*(n.object.right-n.object.left)/n.object.zoom/ye.clientWidth,n.object.matrix),B(pe*(n.object.top-n.object.bottom)/n.object.zoom/ye.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Z(N){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(N){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(N){if(!n.zoomToCursor)return;T=!0;const ie=n.domElement.getBoundingClientRect(),_e=N.clientX-ie.left,pe=N.clientY-ie.top,ye=ie.width,Le=ie.height;b.x=_e/ye*2-1,b.y=-(pe/Le)*2+1,y.set(b.x,b.y,1).unproject(e).sub(e.position).normalize()}function te(N){return Math.max(n.minDistance,Math.min(n.maxDistance,N))}function $(N){h.set(N.clientX,N.clientY)}function R(N){j(N),d.set(N.clientX,N.clientY)}function U(N){v.set(N.clientX,N.clientY)}function G(N){f.set(N.clientX,N.clientY),p.subVectors(f,h).multiplyScalar(n.rotateSpeed);const ie=n.domElement;L(2*Math.PI*p.x/ie.clientHeight),O(2*Math.PI*p.y/ie.clientHeight),h.copy(f),n.update()}function k(N){_.set(N.clientX,N.clientY),x.subVectors(_,d),x.y>0?Z(S()):x.y<0&&X(S()),d.copy(_),n.update()}function oe(N){g.set(N.clientX,N.clientY),m.subVectors(g,v).multiplyScalar(n.panSpeed),H(m.x,m.y),v.copy(g),n.update()}function me(N){j(N),N.deltaY<0?X(S()):N.deltaY>0&&Z(S()),n.update()}function Me(N){let ie=!1;switch(N.code){case n.keys.UP:N.ctrlKey||N.metaKey||N.shiftKey?O(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,n.keyPanSpeed),ie=!0;break;case n.keys.BOTTOM:N.ctrlKey||N.metaKey||N.shiftKey?O(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,-n.keyPanSpeed),ie=!0;break;case n.keys.LEFT:N.ctrlKey||N.metaKey||N.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(n.keyPanSpeed,0),ie=!0;break;case n.keys.RIGHT:N.ctrlKey||N.metaKey||N.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(-n.keyPanSpeed,0),ie=!0;break}ie&&(N.preventDefault(),n.update())}function ce(){if(E.length===1)h.set(E[0].pageX,E[0].pageY);else{const N=.5*(E[0].pageX+E[1].pageX),ie=.5*(E[0].pageY+E[1].pageY);h.set(N,ie)}}function Fe(){if(E.length===1)v.set(E[0].pageX,E[0].pageY);else{const N=.5*(E[0].pageX+E[1].pageX),ie=.5*(E[0].pageY+E[1].pageY);v.set(N,ie)}}function qe(){const N=E[0].pageX-E[1].pageX,ie=E[0].pageY-E[1].pageY,_e=Math.sqrt(N*N+ie*ie);d.set(0,_e)}function Ce(){n.enableZoom&&qe(),n.enablePan&&Fe()}function I(){n.enableZoom&&qe(),n.enableRotate&&ce()}function se(N){if(E.length==1)f.set(N.pageX,N.pageY);else{const _e=Y(N),pe=.5*(N.pageX+_e.x),ye=.5*(N.pageY+_e.y);f.set(pe,ye)}p.subVectors(f,h).multiplyScalar(n.rotateSpeed);const ie=n.domElement;L(2*Math.PI*p.x/ie.clientHeight),O(2*Math.PI*p.y/ie.clientHeight),h.copy(f)}function J(N){if(E.length===1)g.set(N.pageX,N.pageY);else{const ie=Y(N),_e=.5*(N.pageX+ie.x),pe=.5*(N.pageY+ie.y);g.set(_e,pe)}m.subVectors(g,v).multiplyScalar(n.panSpeed),H(m.x,m.y),v.copy(g)}function ue(N){const ie=Y(N),_e=N.pageX-ie.x,pe=N.pageY-ie.y,ye=Math.sqrt(_e*_e+pe*pe);_.set(0,ye),x.set(0,Math.pow(_.y/d.y,n.zoomSpeed)),Z(x.y),d.copy(_)}function ne(N){n.enableZoom&&ue(N),n.enablePan&&J(N)}function Te(N){n.enableZoom&&ue(N),n.enableRotate&&se(N)}function Se(N){n.enabled!==!1&&(E.length===0&&(n.domElement.setPointerCapture(N.pointerId),n.domElement.addEventListener("pointermove",Ee),n.domElement.addEventListener("pointerup",we)),fe(N),N.pointerType==="touch"?q(N):Pe(N))}function Ee(N){n.enabled!==!1&&(N.pointerType==="touch"?ae(N):Ve(N))}function we(N){Ae(N),E.length===0&&(n.domElement.releasePointerCapture(N.pointerId),n.domElement.removeEventListener("pointermove",Ee),n.domElement.removeEventListener("pointerup",we)),n.dispatchEvent(dc),s=r.NONE}function Pe(N){let ie;switch(N.button){case 0:ie=n.mouseButtons.LEFT;break;case 1:ie=n.mouseButtons.MIDDLE;break;case 2:ie=n.mouseButtons.RIGHT;break;default:ie=-1}switch(ie){case Yn.DOLLY:if(n.enableZoom===!1)return;R(N),s=r.DOLLY;break;case Yn.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enablePan===!1)return;U(N),s=r.PAN}else{if(n.enableRotate===!1)return;$(N),s=r.ROTATE}break;case Yn.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enableRotate===!1)return;$(N),s=r.ROTATE}else{if(n.enablePan===!1)return;U(N),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(bs)}function Ve(N){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;G(N);break;case r.DOLLY:if(n.enableZoom===!1)return;k(N);break;case r.PAN:if(n.enablePan===!1)return;oe(N);break}}function C(N){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(N.preventDefault(),n.dispatchEvent(bs),me(N),n.dispatchEvent(dc))}function A(N){n.enabled===!1||n.enablePan===!1||Me(N)}function q(N){switch(he(N),E.length){case 1:switch(n.touches.ONE){case Kn.ROTATE:if(n.enableRotate===!1)return;ce(),s=r.TOUCH_ROTATE;break;case Kn.PAN:if(n.enablePan===!1)return;Fe(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case Kn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ce(),s=r.TOUCH_DOLLY_PAN;break;case Kn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;I(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(bs)}function ae(N){switch(he(N),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;se(N),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;J(N),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ne(N),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Te(N),n.update();break;default:s=r.NONE}}function re(N){n.enabled!==!1&&N.preventDefault()}function fe(N){E.push(N)}function Ae(N){delete P[N.pointerId];for(let ie=0;ie<E.length;ie++)if(E[ie].pointerId==N.pointerId){E.splice(ie,1);return}}function he(N){let ie=P[N.pointerId];ie===void 0&&(ie=new de,P[N.pointerId]=ie),ie.set(N.pageX,N.pageY)}function Y(N){const ie=N.pointerId===E[0].pointerId?E[1]:E[0];return P[ie.pointerId]}n.domElement.addEventListener("contextmenu",re),n.domElement.addEventListener("pointerdown",Se),n.domElement.addEventListener("pointercancel",we),n.domElement.addEventListener("wheel",C,{passive:!1}),this.update()}}class fv extends Ci{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new ev(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=s.parse(JSON.parse(a));t&&t(l)},n,r)}parse(e){return new hv(e)}}class hv{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],r=dv(e,t,this.data);for(let s=0,o=r.length;s<o;s++)n.push(...r[s].toShapes());return n}}function dv(i,e,t){const n=Array.from(i),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const u=n[c];if(u===`
`)a=0,l-=s;else{const h=pv(u,r,a,l,t);a+=h.offsetX,o.push(h.path)}}return o}function pv(i,e,t,n,r){const s=r.glyphs[i]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+i+'" does not exists in font family '+r.familyName+".");return}const o=new cv;let a,l,c,u,h,f,p,v;if(s.o){const g=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,d=g.length;m<d;)switch(g[m++]){case"m":a=g[m++]*e+t,l=g[m++]*e+n,o.moveTo(a,l);break;case"l":a=g[m++]*e+t,l=g[m++]*e+n,o.lineTo(a,l);break;case"q":c=g[m++]*e+t,u=g[m++]*e+n,h=g[m++]*e+t,f=g[m++]*e+n,o.quadraticCurveTo(h,f,c,u);break;case"b":c=g[m++]*e+t,u=g[m++]*e+n,h=g[m++]*e+t,f=g[m++]*e+n,p=g[m++]*e+t,v=g[m++]*e+n,o.bezierCurveTo(h,f,p,v,c,u);break}}return{offsetX:s.ha*e,path:o}}class mc extends Ia{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const r=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type="TextGeometry"}}const vc=`
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
`,xc=`
varying vec3 vWorldPosition;
varying vec4 fragCoord;
varying vec2 vUv;

uniform vec3      iResolution;           // viewport resolution (in pixels)
uniform vec2      iMouse;                // mouse pixel coords. xy: current (if MLB down), zw: click
uniform sampler2D iChannel1;
uniform samplerCube iChannel0;
uniform float iTime;
uniform vec4      iDate;
uniform int       iMode;


//==============================

#define PI 3.14159265358979
#define P2 6.28318530717959

const int   MAX_TRACE_STEP = 90;
const float MAX_TRACE_DIST = 40.;
const float NO_HIT_DIST    = 100.;
const float TRACE_PRECISION = .001;
const float FUDGE_FACTOR = .9;
const vec3  GAMMA = vec3(1./2.2);

const float GI_LENGTH = 1.6;
const float GI_STRENGTH = 1.;
const float AO_STRENGTH = .4;
const int   SHADOW_MAX_TRACE_STEP = 40;
const float SHADOW_MAX_TRACE_DIST = 10.;
const float SHADOW_MIN_MARCHING = .4;
const float SHADOW_SHARPNESS = 1.;
const float CAUSTIC_STRENGTH = 1.6;
const float CAUSTIC_SHARPNESS = 4.;


// Structures ----------
struct Surface {
  float d;              // distance
  vec3  kd, tc, rl, rr; // diffusion, transparent-color, reflectance, refractance
};
Surface near(Surface s,Surface t) {if(s.d<t.d)return s;return t;}

struct Ray {
  vec3  org, dir, col; // origin, direction, color
  float len, stp, rr, sgn; // length, marching step, refractance, sign of distance function
};
Ray ray(vec3 o, vec3 d) { return Ray(o,d,vec3(1),0.,0.,1.,1.); }
Ray ray(vec3 o, vec3 d, vec3 c, float rr, float s) { return Ray(o,d,c,0.,0.,rr,s); }
vec3 _pos(Ray r) {return r.org+r.dir*r.len;}

struct Hit {
  vec3 pos,nml; // position, normal
  Ray ray;      // ray
  Surface srf;  // surface
  bool isTransparent;
  bool isReflect;
};
Hit nohit(Ray r) { return Hit(vec3(0), vec3(0), r, Surface(NO_HIT_DIST, vec3(1), vec3(0), vec3(0), vec3(0)), false, false); }

struct Camera {
  vec3 pos, tgt;  // position, target
  float rol, fcs; // roll, focal length
};
mat3 _mat3(Camera c) {
  vec3 w = normalize(c.pos-c.tgt);
  vec3 u = normalize(cross(w,vec3(sin(c.rol),cos(c.rol),0)));
  return mat3(u,normalize(cross(u,w)),w);
}

struct AABB { vec3 bmin, bmax;};
struct DLight { vec3 dir, col; };
vec3 _lit(vec3 n, DLight l){return clamp((dot(n, l.dir)+1.)*.5,0.,1.)*l.col;}


// Grobal valiables ----------
const float bpm = 14400.;
const DLight dif1 = DLight(normalize(vec3(2,3,1)), vec3(2.69,2.67,2.61));
const DLight dif2 = DLight(normalize(vec3(3,3,0)), vec3(4.79,4.77,4.71));
const DLight dif3 = DLight(normalize(vec3(1,3,2)), vec3(6.89,6.87,6.81));
const DLight amb = DLight(vec3(0,-1,0), vec3(.7,1,2));
float phase;


// Utilities ----------
// vec3 _rgb(vec3 c)
// {
//     vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0); 
//     vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www); 
//     return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
// }
vec3  _rgb(vec3 hsv) { return normalize(((clamp(abs(fract(hsv.x+vec3(0,2,1)/3.)*2.-1.)*3.-1.,0.,1.)-1.)*hsv.y+1.)*hsv.z); }
mat3  _smat(vec2 a) { float x=cos(a.y),y=cos(a.x),z=sin(a.y),w=sin(a.x); return mat3(y,w*z,-w*x,0,x,z,w,-y*z,y*x); }
mat3  _pmat(vec3 a) {
  float sx=sin(a.x),sy=sin(a.y),sz=sin(a.z),cx=cos(a.x),cy=cos(a.y),cz=cos(a.z);
  return mat3(cz*cy,sz*cy,-sy,-sz*cx+cz*sy*sx,cz*cx+sz*sy*sx,cy*sx,sz*sx+cz*sy*cx,-cz*sx+sz*sy*cx,cy*cx);
}
float _checker(vec2 uv, vec2 csize) { return mod(floor(uv.x/csize.x)+floor(uv.y/csize.y),2.); }
float len2(vec3 v) { return dot(v,v); }
float smin(float a, float b, float k) { return -log(exp(-k*a)+exp(-k*b))/k; }
float smax(float a, float b, float k) { return log(exp(k*a)+exp(k*b))/k; }
float vmin(vec3 v) { return min(v.x, min(v.y, v.z)); }
float vmax(vec3 v) { return max(v.x, max(v.y, v.z)); }
vec2  cycl(float t, vec2 f, vec2 r) { return vec2(cos(t*f.x)*r.x+cos(t*f.y)*r.y,sin(t*f.x)*r.x+sin(t*f.y)*r.y); }
vec3  fresnel(vec3 f0, float dp) { return f0+(1.-f0)*pow(1.-abs(dp),5.); }
float rr2rl(float rr) { float v=(rr-1.)/(rr+1.); return v*v; }
float rand(vec2 co){ return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453); }

// Intersect functions ----------
vec2 hitAABB(Ray r, AABB b) { 
  vec3 t1=(b.bmin-r.org)/r.dir, t2=(b.bmax-r.org)/r.dir;
  return vec2(vmax(min(t1, t2)), vmin(max(t1, t2)));
}

float ifPln(Ray r, vec3 n, float d) {
  float v = -dot(r.dir, n), l;
  if (abs(v)<TRACE_PRECISION) return NO_HIT_DIST;
  return (0.<(l=dot(r.org-n*d, n)/v))?l:NO_HIT_DIST;
}

float ifSph(Ray r, vec3 c, float s) {
  vec3 A=r.org-c;
  float B=dot(A,r.dir),D=B*B+s*s-dot(A,A), l;
  if (D<0.) return NO_HIT_DIST;
  return (0.<(l=-B-sqrt(D)))?l:NO_HIT_DIST;
}

float ifBox(Ray r, vec3 b) {
  vec2 v=hitAABB(r,AABB(-b,b));
  return (0.<=v.y&&v.x<=v.y)?v.x:NO_HIT_DIST;
}

float ifTri(Ray r, vec3 v0, vec3 v1, vec3 v2) {
  vec3 a=v1-v0,b=v2-v0,t=r.org-v0,p=cross(r.dir,b),q=cross(t,a);
  float det=dot(a,p);
  if (abs(det)<TRACE_PRECISION) return NO_HIT_DIST;
  vec3 uvt=vec3(dot(p,t),dot(q,r.dir),dot(q,b))/det;
  return (0.<=uvt.x&&0.<=uvt.y&&uvt.x+uvt.y<=1.)?uvt.z:NO_HIT_DIST;
}


// Distance Functions ----------
float dfPln(vec3 p, vec3 n, float d) { return dot(p,n) + d; }
float dfBox(vec3 p, vec3 b, float r) { return length(max(abs(p)-b,0.))-r;}
float dfHex(vec3 p, vec2 h, float r) { vec3 q=abs(p); q.x=max(q.x*0.866025+q.z*0.5,q.z); return length(max(q.xy-h.xy,0.))-r; }
vec3 repXZ(vec3 p, vec2 r){ vec2 hr=r*.5; return vec3(mod(p.x+hr.x, r.x)-hr.x, p.y, mod(p.z+hr.y, r.y)-hr.y); }

const vec4 ddp = vec4(-.8506508,.8506508,.5257311,0);
float dfDdc(vec3 p, float r) {
  float dp0=abs(dot(p,ddp.wyz)),dp1=abs(dot(p,ddp.wxz)),dp2=abs(dot(p,ddp.zwy)),
        dp3=abs(dot(p,ddp.zwx)),dp4=abs(dot(p,ddp.yzw)),dp5=abs(dot(p,ddp.xzw));
  return max(vmax(vec3(dp0,dp1,dp2)),vmax(vec3(dp3,dp4,dp5)))-r;
}
float dfDdcr(vec3 p, float r, float e) {
  float dp0=abs(dot(p,ddp.wyz)),dp1=abs(dot(p,ddp.wxz)),dp2=abs(dot(p,ddp.zwy)),
        dp3=abs(dot(p,ddp.zwx)),dp4=abs(dot(p,ddp.yzw)),dp5=abs(dot(p,ddp.xzw));
  return log(exp(dp0*e)+exp(dp1*e)+exp(dp2*e)+exp(dp3*e)+exp(dp4*e)+exp(dp5*e))/e-r;
}

float dfBC(in vec3 p, float r) {
  float a = floor(atan(p.z,p.x)/(PI*.25)+.5)*PI*.25, c = cos(a), s = sin(a);
  vec3  q = vec3(c*p.x+s*p.z, p.y, abs(-c*p.z+s*p.x)) / r;
  float fcBezel = dot(q, vec3(.544639035, .8386705679, 0))           - .544639035;
  float fcUGird = dot(q, vec3(.636291199, .7609957358, .1265661887)) - .636291199;
  float fcLGird = dot(q, vec3(.675808237,-.7247156073, .1344266163)) - .675808237;
  float fcStar  = dot(q, vec3(.332894535, .9328278154, .1378894313)) - .448447409;
  float fcPMain = dot(q, vec3(.656059029,-.7547095802, 0))           - .656059029;
  float fcTable =   q.y - .2727511892;
  float fcCulet = - q.y - .8692867378 * .96;  
  float fcGirdl = length(q.xz) - .975;
  return max(fcGirdl, max(fcCulet, max(fcTable, max(fcBezel, max(fcStar, max(fcUGird, max(fcPMain,fcLGird)))))));
}

// float dfBC(in vec3 p, float r) {
//   float angleStep = P2/8.;
//   float crownAngle = radians(33.0);
//   float pavilionAngle = radians(41.0);
//   float tableArea = 0.58;
//   float starArea  = 0.5;
//   float starAngle = crownAngle * 0.640;
//   float bezlAngle = crownAngle;
//   float ugrdAngle = crownAngle * 1.209;
//   float pavlAngle = pavilionAngle;
//   float lgrdAngle = pavilionAngle * 1.049;

//   vec3 vHlfStep = vec3(cos(angleStep/2.), 0, sin(angleStep/2.));
//   vec3 vQrtStep = vec3(cos(angleStep/4.), 0, sin(angleStep/4.));

//   float a = floor(atan(p.z,p.x)/angleStep+.5)*angleStep, c=cos(a), s=sin(a);
//   mat3  m = mat3(c,0,s,  0,1,0,  -s,0,c) * r;
//   vec3  q = inverse(m) * p;
//   q.z = abs(q.z);

//   vec3 nmlBezel = vec3(sin(bezlAngle), cos(bezlAngle),0);
//   float fcBezel = dot(q, nmlBezel) -  sin(bezlAngle);
 
//   vec3 nmlUGird = normalize(vec3(vQrtStep.x*sin(ugrdAngle),  cos(ugrdAngle)*vQrtStep.x, vQrtStep.z*sin(ugrdAngle)));
//   vec3 nmlLGird = normalize(vec3(vQrtStep.x*sin(lgrdAngle), -cos(lgrdAngle)*vQrtStep.x, vQrtStep.z*sin(lgrdAngle)));
//   float fcUGird = dot(q, nmlUGird) -  dot(nmlUGird, vQrtStep*vQrtStep.x);
//   float fcLGird = dot(q, nmlLGird) -  dot(nmlLGird, vQrtStep*vQrtStep.x);

//   vec3 nmlStar  = vec3(sin(starAngle)*vHlfStep.x,cos(starAngle),sin(starAngle)*vHlfStep.z);
//   float starDst = (1.-tableArea) * (1.-starArea) * (tan(ugrdAngle)/tan(starAngle)-1.) + 1.;
//   float fcStar  = dot(q, nmlStar) -  starDst * sin(starAngle);

//   vec3 nmlPMain = vec3(sin(pavlAngle), -cos(pavlAngle),0);
//   float fcPMain = dot(q, nmlPMain) -  sin(pavlAngle);

//   float fcTable = q.y -  (1.-tableArea) * tan(bezlAngle);
//   float fcCulet = - q.y -  tan(pavlAngle) * .96;
//   float fcGirdl = length(q.xz) - .975;

//   return max(fcGirdl, max(fcCulet, max(fcTable, max(fcBezel, max(fcStar, max(fcUGird, max(fcPMain,fcLGird)))))));
// }


vec3 repC_XZ(vec3 p, float r, int n){
  float t=P2/float(n),atn=(atan(p.z,p.x))/t+.5;
  float a=(fract(atn)-.5)*t,l=length(p.xz);
  return vec3(cos(a)*l-r, p.y, sin(a)*l);
}

float esBounce(float t) { t=(t-1./3.5)*3.5;return min(t*t,min((t-1.5)*(t-1.5)+.75,(t-2.25)*(t-2.25)+.9375)); }


// Sphere tracing ----------.
vec3 hmsUnit = vec3(12,60,60);
Surface mapSparkle(vec3 p){
  vec3 now = mod(vec3(iTime*100.0)/vec3(3600,60,1),hmsUnit);
  vec3 idx = floor(mod(vec3(1.-atan(p.z,p.x)/P2)*hmsUnit-.5,hmsUnit));
  vec3 hmsFlag = clamp(now-idx,0.,1.);
  float s12 = clamp(mod(now.z/5.+6.,12.)-idx.x,0.,1.);

  vec3 hcol = _rgb(vec3(idx.x/12.,hmsFlag.x*.6,.9));
  vec3 mcol = _rgb(vec3(idx.y/60.,hmsFlag.y*.3,.9));
  float sm = mod(now.z-idx.y,60.), ism=1.-(sm-1.)/59.;
  vec2 sp = (sm<1.)?vec2(sm,esBounce(sm)):vec2((1.-cos(ism*PI))*.5,(3.+cos(ism*P2))*.25);
  vec3 spos = vec3(6.*sp.x,sp.y*2.8-3.0,0);
  vec3 ms = vec3((1.-hmsFlag.x)*((cos(s12*P2)+1.)*.45+.1),1.25-cos(s12*PI)*2.,0);

  // if (iMouse.z > .5) {
    ms.xy = clamp(iMouse.yx/iResolution.yx*1.4-0.2,vec2(0),vec2(1));
    hcol = _rgb(vec3(idx.x/12.,.6,.9));
  // }
  mat3 mat = _pmat(ms*PI*vec3(41./180.,2,1));
  vec3 ri = vec3(2.4,2.425,2.45);
  vec3 pos = vec3(2,1.0,2);
  vec3 fcl = textureLod(iChannel1,p.xz*0.1,0.).rgb*(_checker(p.xz,vec2(2.5))*.0625+.02);
  return near(
    Surface(dfBox(p-vec3(0,-.52,0), vec3(10,0,10), .5), fcl, vec3(0), vec3(.2), vec3(0)), 
    near(
      Surface(dfBC(repC_XZ(p,7.2,12)*mat+vec3(0,-.86,0), 1.0), vec3(0), hcol, vec3(rr2rl(ri.x)), ri),
      Surface(dfDdc(repC_XZ(p,9.5,60)+spos, 0.2), vec3(0), mcol, vec3(rr2rl(ri.x)), ri)
    )
//    Surface(dfBC(repC_XZ(p,8.,12)*m+vec3(5.,-.86,0), 1.0), col*.1, vec3(0), vec3(.9), ri)
  );
}

vec3 calcNormal(in vec3 p){
  vec3 v=vec3(.001,0,mapSparkle(p).d);
  return normalize(vec3(mapSparkle(p+v.xyy).d-v.z,mapSparkle(p+v.yxy).d-v.z,mapSparkle(p+v.yyx).d-v.z));
}


// Lighting ----------
vec4 cs(in vec3 pos, in vec3 dir) {
  vec4 col=vec4(0,0,0,1);
  float len=SHADOW_MIN_MARCHING;
  for( int i=0; i<SHADOW_MAX_TRACE_STEP; i++ ) {
    Surface s = mapSparkle(pos + dir*len);
    col.a   = min(col.a, SHADOW_SHARPNESS*s.d/len);
    col.rgb = s.tc;
    len += max(s.d, SHADOW_MIN_MARCHING);
    if (s.d<TRACE_PRECISION || len>SHADOW_MAX_TRACE_DIST) break;
  }
  col.a = clamp(col.a, 0., 1.);
  col.rgb = pow((1.-col.a), CAUSTIC_SHARPNESS) * col.rgb * CAUSTIC_STRENGTH;
  return col;
}

vec4 gi(in vec3 pos, in vec3 nml) {
  vec4 col = vec4(0);
  for (int i=0; i<4; i++) {
    float hr = .01 + float(i) * GI_LENGTH / 4.;
    Surface s = mapSparkle(nml * hr + pos);
    col += vec4(s.kd, 1.) * (hr - s.d);
  }
  col.rgb *= GI_STRENGTH / GI_LENGTH;
  col.w = clamp(1.-col.w * AO_STRENGTH / GI_LENGTH, 0., 1.);
  return col;
}

vec3 lighting(in Hit h) {
  if(iMode == 0)
  {
    if (h.ray.len > MAX_TRACE_DIST) return pow(textureLod(iChannel0, h.ray.dir, 0.5).rgb,vec3(0.4))*.25;
  }
  else{
    if (h.ray.len > MAX_TRACE_DIST) return vec3(0.0);
  } 
  
  vec4 fgi = gi(h.pos, h.nml);    // Fake Global Illumination
  vec4 fcs1 = cs(h.pos, dif1.dir);  // Fake Caustic Shadow
  vec4 fcs2 = cs(h.pos, dif2.dir);  // Fake Caustic Shadow
  vec4 fcs3 = cs(h.pos, dif3.dir);  // Fake Caustic Shadow
  //   lin = ([Ambient]        + [Diffuse]        * [SS] + [CAUSTICS]) * [AO] + [GI]
  vec3 lin = (_lit(h.nml, amb)
              + _lit(h.nml, dif1) * fcs1.w + fcs1.rgb
              + _lit(h.nml, dif2) * fcs2.w + fcs2.rgb
              + _lit(h.nml, dif3) * fcs3.w + fcs3.rgb) * fgi.w + fgi.rgb;
  return  h.srf.kd * lin;
}


// Ray ----------
Ray rayScreen(in vec2 p, in Camera c) {
  return ray(c.pos, normalize(_mat3(c) * vec3(p.xy, -c.fcs)));
}

Ray rayReflect(Hit h, vec3 rl) {
  return ray(h.pos + h.nml*.01, reflect(h.ray.dir, h.nml), h.ray.col*rl, h.ray.rr, h.ray.sgn);
}

Ray rayRefract(Hit h, float rr) {
  vec3 r = refract(h.ray.dir, h.nml, h.ray.rr/rr);
  if (len2(r)<.001) return ray(h.pos+h.nml*.01, reflect(h.ray.dir, h.nml), h.ray.col, h.ray.rr, h.ray.sgn);
  return ray(h.pos - h.nml*.01, r, h.ray.col*h.srf.tc, rr, -h.ray.sgn);
}

// renderer ----------
Hit sphereTrace(in Ray r) {
  Surface s;
  for(int i=0; i<MAX_TRACE_STEP; i++) {
    s = mapSparkle(_pos(r));
    s.d *= r.sgn;
    r.len += s.d * FUDGE_FACTOR;
    r.stp = float(i);
    if (s.d < TRACE_PRECISION) break;
    if (r.len > MAX_TRACE_DIST) return nohit(r);
  }
  vec3 p = _pos(r);
  float interior = .5-r.sgn*.5;
  s.rr = mix(s.rr, vec3(1), interior);
  s.tc = max(s.tc, interior);
  return Hit(p, calcNormal(p)*r.sgn, r, s, (len2(s.tc)>.001), (len2(s.rl)>.001));
}

// Hit trace(in Ray r) {
//   return sphereTrace(r);
// }

vec3 renderDiffusion(inout Hit h) {
  if (len2(h.srf.kd) < .001) return vec3(0);
  vec3 col = lighting(h) * h.ray.col;
  h.ray.col *= 1. - h.srf.kd;
  return col;
}

//==========================

vec4 renderSparkle(in Ray r){
  vec3 col = vec3(0), rl, c;
  Hit h0, h1;
  float l0;

    // first trace
  h0 = sphereTrace(r);
  l0 = h0.ray.len;

  // first diffusion surface
  col += renderDiffusion(h0);

  // first reflection
  h1 = h0;
  rl = fresnel(h0.srf.rl, dot(h0.ray.dir, h0.nml));
  h0.ray.col *= 1. - rl;
  if (h1.isReflect) { 
    h1 = sphereTrace(rayReflect(h1, rl));
    col += renderDiffusion(h1);
    if (!h0.isTransparent) h0 = h1;
  }

  // repeating trace
  for (int i=4; i!=0; --i) {
    if (!h0.isReflect) break;
    if (h0.isTransparent) 
      h0 = sphereTrace(rayRefract(h0, h0.srf.rr.x));
    else 
      h0 = sphereTrace(rayReflect(h0, fresnel(h0.srf.rl, dot(h0.ray.dir, h0.nml))));
    col += renderDiffusion(h0);
  }

  // cheap trick
  c = h0.ray.col;

  if(iMode == 0)
  {
    if (len2(c) >= .2) col += textureLod(iChannel0, h0.ray.dir, 0.).rgb * c * c * 3.0;
  }
  else{
    if (len2(c) >= .2) col += c * c * 3.0;
  }
  
  return vec4(col, l0);
}



vec2 rot(vec2 p, float a) {
  a=radians(a);
  return cos(a)*p + sin(a)*vec2(p.y, -p.x);
}
vec2 saturate(vec2 p) { return clamp(p,0.,1.); }


// Entry point ----------
vec4  mainImageA(in vec2 fragCoord) {
  phase = iTime * bpm / 200. * P2;

  vec2   m = vec2(cos(phase/128.), sin(phase/128.))*20.;
  Camera c = Camera(vec3(m.x,sin(phase/32.)*4.+6.,m.y), vec3(0), 0., 1.73205081);
  // Ray    r = rayScreen((fragCoord.xy * 1.3 - iResolution.xy) / iResolution.x / 20. , c);
  // Ray    r = rayScreen((fragCoord.xy * 2. - iResolution.xy) / iResolution.x, c);
  vec2 uv = fragCoord.xy/iResolution.xy;
  Ray    r = rayScreen(uv, c);

  vec4 res = renderSparkle(r);
  res.w = min(abs(res.w - length(c.pos)+8.)/100., .5);

  vec4 bkcolor = textureLod(iChannel0, r.dir, 0.);
  
  vec4 fragColor = (res);//gamma(res);

  return fragColor;
}


vec4 gamma(in vec4 i) {
  return vec4(pow(i.xyz, GAMMA), i.w);
}

void main(){
  vec3 normalizedVWorldPosition = normalize(vWorldPosition);
  // vec3 outcolor = textureCube(iChannel0, normalizedVWorldPosition.xyz).rgb;
  // gl_FragColor = vec4(outcolor, 1.0);
  
  gl_FragColor = mainImageA(fragCoord.xy);
}
`,gc=`
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
`,_c=`
varying vec3 vWorldPosition;
varying vec4 fragCoord;
varying vec2 vUv;

uniform vec3      iResolution;           // viewport resolution (in pixels)
uniform vec2      iMouse;                // mouse pixel coords. xy: current (if MLB down), zw: click
uniform sampler2D iChannel0FromA;

uniform sampler2D iChannelA1;
uniform samplerCube iChannelA0;
uniform float iTime;
uniform vec4      iDate; 
uniform int       iMode;

//==============================

#define PI 3.14159265358979
#define P2 6.28318530717959

const int   MAX_TRACE_STEP = 90;
const float MAX_TRACE_DIST = 40.;
const float NO_HIT_DIST    = 100.;
const float TRACE_PRECISION = .001;
const float FUDGE_FACTOR = .9;
const vec3  GAMMA = vec3(1./2.2);

const float GI_LENGTH = 1.6;
const float GI_STRENGTH = 1.;
const float AO_STRENGTH = .4;
const int   SHADOW_MAX_TRACE_STEP = 4;
const float SHADOW_MAX_TRACE_DIST = 10.;
const float SHADOW_MIN_MARCHING = .4;
const float SHADOW_SHARPNESS = 1.;
const float CAUSTIC_STRENGTH = 1.6;
const float CAUSTIC_SHARPNESS = 4.;


// Structures ----------
struct Surface {
  float d;              // distance
  vec3  kd, tc, rl, rr; // diffusion, transparent-color, reflectance, refractance
};
Surface near(Surface s,Surface t) {if(s.d<t.d)return s;return t;}

struct Ray {
  vec3  org, dir, col; // origin, direction, color
  float len, stp, rr, sgn; // length, marching step, refractance, sign of distance function
};
Ray ray(vec3 o, vec3 d) { return Ray(o,d,vec3(1),0.,0.,1.,1.); }
Ray ray(vec3 o, vec3 d, vec3 c, float rr, float s) { return Ray(o,d,c,0.,0.,rr,s); }
vec3 _pos(Ray r) {return r.org+r.dir*r.len;}

struct Hit {
  vec3 pos,nml; // position, normal
  Ray ray;      // ray
  Surface srf;  // surface
  bool isTransparent;
  bool isReflect;
};
Hit nohit(Ray r) { return Hit(vec3(0), vec3(0), r, Surface(NO_HIT_DIST, vec3(1), vec3(0), vec3(0), vec3(0)), false, false); }

struct Camera {
  vec3 pos, tgt;  // position, target
  float rol, fcs; // roll, focal length
};
mat3 _mat3(Camera c) {
  vec3 w = normalize(c.pos-c.tgt);
  vec3 u = normalize(cross(w,vec3(sin(c.rol),cos(c.rol),0)));
  return mat3(u,normalize(cross(u,w)),w);
}

struct AABB { vec3 bmin, bmax;};
struct DLight { vec3 dir, col; };
vec3 _lit(vec3 n, DLight l){return clamp((dot(n, l.dir)+1.)*.5,0.,1.)*l.col;}


// Grobal valiables ----------
const float bpm = 14400.;
const DLight dif1 = DLight(normalize(vec3(2,3,1)), vec3(2.69,2.67,2.61));
const DLight dif2 = DLight(normalize(vec3(3,3,0)), vec3(4.79,4.77,4.71));
const DLight dif3 = DLight(normalize(vec3(1,3,2)), vec3(6.89,6.87,6.81));
const DLight amb = DLight(vec3(0,-1,0), vec3(.7,1,2));
float phase;


// Utilities ----------
// vec3 _rgb(vec3 c)
// {
//     vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0); 
//     vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www); 
//     return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
// }
vec3  _rgb(vec3 hsv) { return normalize(((clamp(abs(fract(hsv.x+vec3(0,2,1)/3.)*2.-1.)*3.-1.,0.,1.)-1.)*hsv.y+1.)*hsv.z); }
mat3  _smat(vec2 a) { float x=cos(a.y),y=cos(a.x),z=sin(a.y),w=sin(a.x); return mat3(y,w*z,-w*x,0,x,z,w,-y*z,y*x); }
mat3  _pmat(vec3 a) {
  float sx=sin(a.x),sy=sin(a.y),sz=sin(a.z),cx=cos(a.x),cy=cos(a.y),cz=cos(a.z);
  return mat3(cz*cy,sz*cy,-sy,-sz*cx+cz*sy*sx,cz*cx+sz*sy*sx,cy*sx,sz*sx+cz*sy*cx,-cz*sx+sz*sy*cx,cy*cx);
}
float _checker(vec2 uv, vec2 csize) { return mod(floor(uv.x/csize.x)+floor(uv.y/csize.y),2.); }
float len2(vec3 v) { return dot(v,v); }
float smin(float a, float b, float k) { return -log(exp(-k*a)+exp(-k*b))/k; }
float smax(float a, float b, float k) { return log(exp(k*a)+exp(k*b))/k; }
float vmin(vec3 v) { return min(v.x, min(v.y, v.z)); }
float vmax(vec3 v) { return max(v.x, max(v.y, v.z)); }
vec2  cycl(float t, vec2 f, vec2 r) { return vec2(cos(t*f.x)*r.x+cos(t*f.y)*r.y,sin(t*f.x)*r.x+sin(t*f.y)*r.y); }
vec3  fresnel(vec3 f0, float dp) { return f0+(1.-f0)*pow(1.-abs(dp),5.); }
float rr2rl(float rr) { float v=(rr-1.)/(rr+1.); return v*v; }
float rand(vec2 co){ return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453); }

// Intersect functions ----------
vec2 hitAABB(Ray r, AABB b) { 
  vec3 t1=(b.bmin-r.org)/r.dir, t2=(b.bmax-r.org)/r.dir;
  return vec2(vmax(min(t1, t2)), vmin(max(t1, t2)));
}

float ifPln(Ray r, vec3 n, float d) {
  float v = -dot(r.dir, n), l;
  if (abs(v)<TRACE_PRECISION) return NO_HIT_DIST;
  return (0.<(l=dot(r.org-n*d, n)/v))?l:NO_HIT_DIST;
}

float ifSph(Ray r, vec3 c, float s) {
  vec3 A=r.org-c;
  float B=dot(A,r.dir),D=B*B+s*s-dot(A,A), l;
  if (D<0.) return NO_HIT_DIST;
  return (0.<(l=-B-sqrt(D)))?l:NO_HIT_DIST;
}

float ifBox(Ray r, vec3 b) {
  vec2 v=hitAABB(r,AABB(-b,b));
  return (0.<=v.y&&v.x<=v.y)?v.x:NO_HIT_DIST;
}

float ifTri(Ray r, vec3 v0, vec3 v1, vec3 v2) {
  vec3 a=v1-v0,b=v2-v0,t=r.org-v0,p=cross(r.dir,b),q=cross(t,a);
  float det=dot(a,p);
  if (abs(det)<TRACE_PRECISION) return NO_HIT_DIST;
  vec3 uvt=vec3(dot(p,t),dot(q,r.dir),dot(q,b))/det;
  return (0.<=uvt.x&&0.<=uvt.y&&uvt.x+uvt.y<=1.)?uvt.z:NO_HIT_DIST;
}


// Distance Functions ----------
float dfPln(vec3 p, vec3 n, float d) { return dot(p,n) + d; }
float dfBox(vec3 p, vec3 b, float r) { return length(max(abs(p)-b,0.))-r;}
float dfHex(vec3 p, vec2 h, float r) { vec3 q=abs(p); q.x=max(q.x*0.866025+q.z*0.5,q.z); return length(max(q.xy-h.xy,0.))-r; }
vec3 repXZ(vec3 p, vec2 r){ vec2 hr=r*.5; return vec3(mod(p.x+hr.x, r.x)-hr.x, p.y, mod(p.z+hr.y, r.y)-hr.y); }

const vec4 ddp = vec4(-.8506508,.8506508,.5257311,0);
float dfDdc(vec3 p, float r) {
  float dp0=abs(dot(p,ddp.wyz)),dp1=abs(dot(p,ddp.wxz)),dp2=abs(dot(p,ddp.zwy)),
        dp3=abs(dot(p,ddp.zwx)),dp4=abs(dot(p,ddp.yzw)),dp5=abs(dot(p,ddp.xzw));
  return max(vmax(vec3(dp0,dp1,dp2)),vmax(vec3(dp3,dp4,dp5)))-r;
}
float dfDdcr(vec3 p, float r, float e) {
  float dp0=abs(dot(p,ddp.wyz)),dp1=abs(dot(p,ddp.wxz)),dp2=abs(dot(p,ddp.zwy)),
        dp3=abs(dot(p,ddp.zwx)),dp4=abs(dot(p,ddp.yzw)),dp5=abs(dot(p,ddp.xzw));
  return log(exp(dp0*e)+exp(dp1*e)+exp(dp2*e)+exp(dp3*e)+exp(dp4*e)+exp(dp5*e))/e-r;
}

float dfBC(in vec3 p, float r) {
  float a = floor(atan(p.z,p.x)/(PI*.25)+.5)*PI*.25, c = cos(a), s = sin(a);
  vec3  q = vec3(c*p.x+s*p.z, p.y, abs(-c*p.z+s*p.x)) / r;
  float fcBezel = dot(q, vec3(.544639035, .8386705679, 0))           - .544639035;
  float fcUGird = dot(q, vec3(.636291199, .7609957358, .1265661887)) - .636291199;
  float fcLGird = dot(q, vec3(.675808237,-.7247156073, .1344266163)) - .675808237;
  float fcStar  = dot(q, vec3(.332894535, .9328278154, .1378894313)) - .448447409;
  float fcPMain = dot(q, vec3(.656059029,-.7547095802, 0))           - .656059029;
  float fcTable =   q.y - .2727511892;
  float fcCulet = - q.y - .8692867378 * .96;  
  float fcGirdl = length(q.xz) - .975;
  return max(fcGirdl, max(fcCulet, max(fcTable, max(fcBezel, max(fcStar, max(fcUGird, max(fcPMain,fcLGird)))))));
}

// float dfBC(in vec3 p, float r) {
//   float angleStep = P2/8.;
//   float crownAngle = radians(33.0);
//   float pavilionAngle = radians(41.0);
//   float tableArea = 0.58;
//   float starArea  = 0.5;
//   float starAngle = crownAngle * 0.640;
//   float bezlAngle = crownAngle;
//   float ugrdAngle = crownAngle * 1.209;
//   float pavlAngle = pavilionAngle;
//   float lgrdAngle = pavilionAngle * 1.049;

//   vec3 vHlfStep = vec3(cos(angleStep/2.), 0, sin(angleStep/2.));
//   vec3 vQrtStep = vec3(cos(angleStep/4.), 0, sin(angleStep/4.));

//   float a = floor(atan(p.z,p.x)/angleStep+.5)*angleStep, c=cos(a), s=sin(a);
//   mat3  m = mat3(c,0,s,  0,1,0,  -s,0,c) * r;
//   vec3  q = inverse(m) * p;
//   q.z = abs(q.z);

//   vec3 nmlBezel = vec3(sin(bezlAngle), cos(bezlAngle),0);
//   float fcBezel = dot(q, nmlBezel) -  sin(bezlAngle);
 
//   vec3 nmlUGird = normalize(vec3(vQrtStep.x*sin(ugrdAngle),  cos(ugrdAngle)*vQrtStep.x, vQrtStep.z*sin(ugrdAngle)));
//   vec3 nmlLGird = normalize(vec3(vQrtStep.x*sin(lgrdAngle), -cos(lgrdAngle)*vQrtStep.x, vQrtStep.z*sin(lgrdAngle)));
//   float fcUGird = dot(q, nmlUGird) -  dot(nmlUGird, vQrtStep*vQrtStep.x);
//   float fcLGird = dot(q, nmlLGird) -  dot(nmlLGird, vQrtStep*vQrtStep.x);

//   vec3 nmlStar  = vec3(sin(starAngle)*vHlfStep.x,cos(starAngle),sin(starAngle)*vHlfStep.z);
//   float starDst = (1.-tableArea) * (1.-starArea) * (tan(ugrdAngle)/tan(starAngle)-1.) + 1.;
//   float fcStar  = dot(q, nmlStar) -  starDst * sin(starAngle);

//   vec3 nmlPMain = vec3(sin(pavlAngle), -cos(pavlAngle),0);
//   float fcPMain = dot(q, nmlPMain) -  sin(pavlAngle);

//   float fcTable = q.y -  (1.-tableArea) * tan(bezlAngle);
//   float fcCulet = - q.y -  tan(pavlAngle) * .96;
//   float fcGirdl = length(q.xz) - .975;

//   return max(fcGirdl, max(fcCulet, max(fcTable, max(fcBezel, max(fcStar, max(fcUGird, max(fcPMain,fcLGird)))))));
// }


vec3 repC_XZ(vec3 p, float r, int n){
  float t=P2/float(n),atn=(atan(p.z,p.x))/t+.5;
  float a=(fract(atn)-.5)*t,l=length(p.xz);
  return vec3(cos(a)*l-r, p.y, sin(a)*l);
}

float esBounce(float t) { t=(t-1./3.5)*3.5;return min(t*t,min((t-1.5)*(t-1.5)+.75,(t-2.25)*(t-2.25)+.9375)); }


// Sphere tracing ----------.
vec3 hmsUnit = vec3(12,60,60);
Surface mapSparkle(vec3 p){
  vec3 now = mod(vec3(iTime*100.0)/vec3(3600,60,1),hmsUnit);
  vec3 idx = floor(mod(vec3(1.-atan(p.z,p.x)/P2)*hmsUnit-.5,hmsUnit));
  vec3 hmsFlag = clamp(now-idx,0.,1.);
  float s12 = clamp(mod(now.z/5.+6.,12.)-idx.x,0.,1.);

  vec3 hcol = _rgb(vec3(idx.x/12.,hmsFlag.x*.6,.9));
  vec3 mcol = _rgb(vec3(idx.y/60.,hmsFlag.y*.3,.9));
  float sm = mod(now.z-idx.y,60.), ism=1.-(sm-1.)/59.;
  vec2 sp = (sm<1.)?vec2(sm,esBounce(sm)):vec2((1.-cos(ism*PI))*.5,(3.+cos(ism*P2))*.25);
  vec3 spos = vec3(6.*sp.x,sp.y*2.8-3.0,0);
  vec3 ms = vec3((1.-hmsFlag.x)*((cos(s12*P2)+1.)*.45+.1),1.25-cos(s12*PI)*2.,0);

  // if (iMouse.z > .5) {
    ms.xy = clamp(iMouse.yx/iResolution.yx*1.4-0.2,vec2(0),vec2(1));
    hcol = _rgb(vec3(idx.x/12.,.6,.9));
  // }
  mat3 mat = _pmat(ms*PI*vec3(41./180.,2,1));
  vec3 ri = vec3(2.4,2.425,2.45);
  vec3 pos = vec3(2,1.0,2);
  vec3 fcl = textureLod(iChannelA1,p.xz*0.1,0.).rgb*(_checker(p.xz,vec2(2.5))*.0625+.02);
  return near(
    Surface(dfBox(p-vec3(0,-.52,0), vec3(10,0,10), .5), fcl, vec3(0), vec3(.2), vec3(0)), 
    near(
      Surface(dfBC(repC_XZ(p,7.2,12)*mat+vec3(0,-.86,0), 1.0), vec3(0), hcol, vec3(rr2rl(ri.x)), ri),
      Surface(dfDdc(repC_XZ(p,9.5,60)+spos, 0.2), vec3(0), mcol, vec3(rr2rl(ri.x)), ri)
    )
//    Surface(dfBC(repC_XZ(p,8.,12)*m+vec3(5.,-.86,0), 1.0), col*.1, vec3(0), vec3(.9), ri)
  );
}

vec3 calcNormal(in vec3 p){
  vec3 v=vec3(.001,0,mapSparkle(p).d);
  return normalize(vec3(mapSparkle(p+v.xyy).d-v.z,mapSparkle(p+v.yxy).d-v.z,mapSparkle(p+v.yyx).d-v.z));
}


// Lighting ----------
vec4 cs(in vec3 pos, in vec3 dir) {
  vec4 col=vec4(0,0,0,1);
  float len=SHADOW_MIN_MARCHING;
  for( int i=0; i<SHADOW_MAX_TRACE_STEP; i++ ) {
    Surface s = mapSparkle(pos + dir*len);
    col.a   = min(col.a, SHADOW_SHARPNESS*s.d/len);
    col.rgb = s.tc;
    len += max(s.d, SHADOW_MIN_MARCHING);
    if (s.d<TRACE_PRECISION || len>SHADOW_MAX_TRACE_DIST) break;
  }
  col.a = clamp(col.a, 0., 1.);
  col.rgb = pow((1.-col.a), CAUSTIC_SHARPNESS) * col.rgb * CAUSTIC_STRENGTH;
  return col;
}

vec4 gi(in vec3 pos, in vec3 nml) {
  vec4 col = vec4(0);
  for (int i=0; i<4; i++) {
    float hr = .01 + float(i) * GI_LENGTH / 4.;
    Surface s = mapSparkle(nml * hr + pos);
    col += vec4(s.kd, 1.) * (hr - s.d);
  }
  col.rgb *= GI_STRENGTH / GI_LENGTH;
  col.w = clamp(1.-col.w * AO_STRENGTH / GI_LENGTH, 0., 1.);
  return col;
}

vec3 lighting(in Hit h) {
  // if (h.ray.len > MAX_TRACE_DIST) return pow(textureLod(iChannelA0, h.ray.dir, 0.).rgb,vec3(0.4))*.25;
  if (h.ray.len > MAX_TRACE_DIST) return vec3(0.0);
  vec4 fgi = gi(h.pos, h.nml);    // Fake Global Illumination
  vec4 fcs1 = cs(h.pos, dif1.dir);  // Fake Caustic Shadow
  vec4 fcs2 = cs(h.pos, dif2.dir);  // Fake Caustic Shadow
  vec4 fcs3 = cs(h.pos, dif3.dir);  // Fake Caustic Shadow
  //   lin = ([Ambient]        + [Diffuse]        * [SS] + [CAUSTICS]) * [AO] + [GI]
  vec3 lin = (_lit(h.nml, amb)
              + _lit(h.nml, dif1) * fcs1.w + fcs1.rgb
              + _lit(h.nml, dif2) * fcs2.w + fcs2.rgb
              + _lit(h.nml, dif3) * fcs3.w + fcs3.rgb) * fgi.w + fgi.rgb;
  return  h.srf.kd * lin;
}


// Ray ----------
Ray rayScreen(in vec2 p, in Camera c) {
  return ray(c.pos, normalize(_mat3(c) * vec3(p.xy, -c.fcs)));
}

Ray rayReflect(Hit h, vec3 rl) {
  return ray(h.pos + h.nml*.01, reflect(h.ray.dir, h.nml), h.ray.col*rl, h.ray.rr, h.ray.sgn);
}

Ray rayRefract(Hit h, float rr) {
  vec3 r = refract(h.ray.dir, h.nml, h.ray.rr/rr);
  if (len2(r)<.001) return ray(h.pos+h.nml*.01, reflect(h.ray.dir, h.nml), h.ray.col, h.ray.rr, h.ray.sgn);
  return ray(h.pos - h.nml*.01, r, h.ray.col*h.srf.tc, rr, -h.ray.sgn);
}

// renderer ----------
Hit sphereTrace(in Ray r) {
  Surface s;
  for(int i=0; i<MAX_TRACE_STEP; i++) {
    s = mapSparkle(_pos(r));
    s.d *= r.sgn;
    r.len += s.d * FUDGE_FACTOR;
    r.stp = float(i);
    if (s.d < TRACE_PRECISION) break;
    if (r.len > MAX_TRACE_DIST) return nohit(r);
  }
  vec3 p = _pos(r);
  float interior = .5-r.sgn*.5;
  s.rr = mix(s.rr, vec3(1), interior);
  s.tc = max(s.tc, interior);
  return Hit(p, calcNormal(p)*r.sgn, r, s, (len2(s.tc)>.001), (len2(s.rl)>.001));
}

// Hit trace(in Ray r) {
//   return sphereTrace(r);
// }

vec3 renderDiffusion(inout Hit h) {
  if (len2(h.srf.kd) < .001) return vec3(0);
  vec3 col = lighting(h) * h.ray.col;
  h.ray.col *= 1. - h.srf.kd;
  return col;
}

//==========================

vec4 renderSparkle(in Ray r){
  vec3 col = vec3(0), rl, c;
  Hit h0, h1;
  float l0;

    // first trace
  h0 = sphereTrace(r);
  l0 = h0.ray.len;

  // first diffusion surface
  col += renderDiffusion(h0);

  // first reflection
  h1 = h0;
  rl = fresnel(h0.srf.rl, dot(h0.ray.dir, h0.nml));
  h0.ray.col *= 1. - rl;
  if (h1.isReflect) { 
    h1 = sphereTrace(rayReflect(h1, rl));
    col += renderDiffusion(h1);
    if (!h0.isTransparent) h0 = h1;
  }

  // repeating trace
  for (int i=4; i!=0; --i) {
    if (!h0.isReflect) break;
    if (h0.isTransparent) 
      h0 = sphereTrace(rayRefract(h0, h0.srf.rr.x));
    else 
      h0 = sphereTrace(rayReflect(h0, fresnel(h0.srf.rl, dot(h0.ray.dir, h0.nml))));
    col += renderDiffusion(h0);
  }

  // cheap trick
  c = h0.ray.col;

  // if (len2(c) >= .2) col += textureLod(iChannelA0, h0.ray.dir, 0.).rgb * c * c * 3.0;
  if (len2(c) >= .2) col += c * c * 3.0;

  return vec4(col, l0);
}



vec2 rot(vec2 p, float a) {
  a=radians(a);
  return cos(a)*p + sin(a)*vec2(p.y, -p.x);
}
vec2 saturate(vec2 p) { return clamp(p,0.,1.); }


// Entry point ----------
vec4  mainImageBA(in vec2 fragCoord) {
  phase = iTime * bpm / 200. * P2;

  vec2   m = vec2(cos(phase/128.), sin(phase/128.))*20.;
  Camera c = Camera(vec3(m.x,sin(phase/32.)*4.+6.,m.y), vec3(0), 0., 1.73205081);
  // Ray    r = rayScreen((fragCoord.xy * 1.3 - iResolution.xy) / iResolution.x / 20. , c);
  // Ray    r = rayScreen((fragCoord.xy * 2. - iResolution.xy) / iResolution.x, c);

  // vec2 uv = ((fragCoord.xy*2. - iResolution.xy) / iResolution.xy);// - vec2(0.5 , 0.5);
  vec2 uv = fragCoord.xy/iResolution.xy;
  Ray    r = rayScreen(uv, c);

  vec4 res = renderSparkle(r);
  res.w = min(abs(res.w - length(c.pos)+8.)/100., 1.);

  vec4 bkcolor = textureLod(iChannelA0, r.dir, 0.);
  // vec4 bkcolor = vec4(outcolor, 1.0);

  vec4 fragColor = (res);//gamma(res);

  return fragColor + bkcolor;
}

vec4 gamma(in vec4 i) {
  return vec4(pow(i.xyz, GAMMA), i.w);
}

vec4 mainImageB(in vec2 fragCoord ){

  
  const float n = 20.;
  const float a1 = -1.;
  const float a2 = -5.;

  vec2 uv = fragCoord.xy*0.2/iResolution.xy + vec2(iResolution.x/2.0, iResolution.y/2.0)/iResolution.xy;

 
  vec3 color = vec3(0);
  vec2 colorShift = vec2(2,1)/iResolution.xy;
  vec2 uv1 = uv+colorShift;
  vec2 uv2 = uv;
  vec2 uv3 = uv-colorShift;
  vec2 axis1 = rot(vec2(0,1.105/iResolution.y),-15.);
  vec2 axis2 = rot(vec2(0,0.953/iResolution.y),+65.);
  for(float delta = 0.; delta< n;delta++){
      float scale = .0625*.0625*(1.-.9875*delta/n);
      vec2 d1r = delta*rot(axis1,-a1);
      vec2 d1g = delta*axis1;
      vec2 d1b = delta*rot(axis1,+a1);
      vec4 texR1 = texture2D(iChannel0FromA, saturate(uv1+d1r));
      vec4 texR2 = texture2D(iChannel0FromA, saturate(uv1-d1r));
      vec4 texG1 = texture2D(iChannel0FromA, saturate(uv2+d1g));
      vec4 texG2 = texture2D(iChannel0FromA, saturate(uv2-d1g));
      vec4 texB1 = texture2D(iChannel0FromA, saturate(uv3+d1b));
      vec4 texB2 = texture2D(iChannel0FromA, saturate(uv3-d1b));


      vec3 aberr1 = vec3(dot(vec4(10,4,2,0),texR1+texR2),
                         dot(vec4(3,10,3,0),texG1+texG2),
                         dot(vec4(2,4,10,0),texB1+texB2));
      vec3 col1 = aberr1*max(aberr1.r,max(aberr1.g,aberr1.b));
      vec2 d2r = delta*rot(axis2,+a2);
      vec2 d2g = delta*axis2;
      vec2 d2b = delta*rot(axis2,-a2);
      vec4 texR3 = texture2D(iChannel0FromA, saturate(uv1+d2r));
      vec4 texR4 = texture2D(iChannel0FromA, saturate(uv1-d2r));
      vec4 texG3 = texture2D(iChannel0FromA, saturate(uv2+d2g));
      vec4 texG4 = texture2D(iChannel0FromA, saturate(uv2-d2g));
      vec4 texB3 = texture2D(iChannel0FromA, saturate(uv3+d2b));
      vec4 texB4 = texture2D(iChannel0FromA, saturate(uv3-d2b));

      vec3 aberr2 = vec3(dot(vec4(10,4,2,0),texR3+texR4),
                         dot(vec4(3,10,3,0),texG3+texG4),
                         dot(vec4(2,4,10,0),texB3+texB4));
      vec3 col2 = aberr2*max(aberr2.r,max(aberr2.g,aberr2.b));
      vec3 col = pow(scale*max(col1,col2)*3.7,vec3(5.2));
      color+=col;
  }

  vec3 tmppp = texture2D(iChannel0FromA,uv).rgb;
  vec4 fragColor = vec4(mix(tmppp, color, smoothstep(.01,.2,min(uv.x,uv.y))*smoothstep(-8.99,-.8,-max(uv.x,uv.y))),1);
  // return vec4(tmppp, 1.);
  return fragColor;
}



void main(){
  // vec3 normalizedVWorldPosition = normalize(vWorldPosition);
  // gl_FragColor = textureCube(iChannelA0, normalizedVWorldPosition.xyz);

  phase = iTime * bpm / 60. * P2;

  vec2   m = vec2(cos(phase/128.), sin(phase/128.))*20.;
  Camera c = Camera(vec3(m.x,sin(phase/32.)*4.+6.,m.y), vec3(0), 0., 1.73205081);
  vec2 uvbk = fragCoord.xy/iResolution.xy;
  Ray    r = rayScreen(uvbk, c);

  vec4 bkcolor = textureLod(iChannelA0, r.dir, 0.);
  
  
  vec4 glow  = mainImageB(fragCoord.xy);
  // vec4 res = mainImageBA(fragCoord.xy);
  vec2 uv = fragCoord.xy*0.2/iResolution.xy + vec2(iResolution.x/2.0, iResolution.y/2.0)/iResolution.xy;
  vec4 res = vec4(texture2D(iChannel0FromA,uv).rgb, 1.);

  vec4 fragColor = gamma(max(vec4(0),sqrt(5.5*glow)*.015625)+res);
 
  if(iMode == 0)
  {
    gl_FragColor = fragColor;
  }
  else{
    gl_FragColor = fragColor + bkcolor;
  }

}

`,mv=`
varying vec3 vWorldPosition;
varying vec4 fragCoord;

void main() {
vec4 worldPosition = modelMatrix * vec4(position, 1.0);
vWorldPosition = vec3(-worldPosition.z, worldPosition.y, -worldPosition.x);
gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
fragCoord = gl_Position;
}
`,vv=`
varying vec3 vWorldPosition;
varying vec4 fragCoord;
uniform vec3      iResolution;
uniform sampler2D iChannelUI;

void main(){
  vec3 normalizedVWorldPosition = normalize(vWorldPosition);
  // vec3 outcolor = textureCube(iTexture, normalizedVWorldPosition).rgb;
  // vec2 uv = fragCoord.xy/iResolution.xy;
  // gl_FragColor = vec4(outcolor, 1.0);

  vec2 uv = fragCoord.xy*0.2/iResolution.xy + vec2(iResolution.x/2.0, iResolution.y/2.0)/iResolution.xy;
  vec4 uicolor  = vec4(texture2D(iChannelUI,uv).rgb, 1.);
  gl_FragColor = uicolor;
}
`;var Ge=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function kl(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function xv(i){if(i.__esModule)return i;var e=i.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(i).forEach(function(n){var r=Object.getOwnPropertyDescriptor(i,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return i[n]}})}),t}var Gl={exports:{}};function gv(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ts={exports:{}};const _v={},yv=Object.freeze(Object.defineProperty({__proto__:null,default:_v},Symbol.toStringTag,{value:"Module"})),Sv=xv(yv);var yc;function Ye(){return yc||(yc=1,function(i,e){(function(t,n){i.exports=n()})(Ge,function(){var t=t||function(n,r){var s;if(typeof window<"u"&&window.crypto&&(s=window.crypto),typeof self<"u"&&self.crypto&&(s=self.crypto),typeof globalThis<"u"&&globalThis.crypto&&(s=globalThis.crypto),!s&&typeof window<"u"&&window.msCrypto&&(s=window.msCrypto),!s&&typeof Ge<"u"&&Ge.crypto&&(s=Ge.crypto),!s&&typeof gv=="function")try{s=Sv}catch{}var o=function(){if(s){if(typeof s.getRandomValues=="function")try{return s.getRandomValues(new Uint32Array(1))[0]}catch{}if(typeof s.randomBytes=="function")try{return s.randomBytes(4).readInt32LE()}catch{}}throw new Error("Native crypto module could not be used to get secure random number.")},a=Object.create||function(){function _(){}return function(x){var y;return _.prototype=x,y=new _,_.prototype=null,y}}(),l={},c=l.lib={},u=c.Base=function(){return{extend:function(_){var x=a(this);return _&&x.mixIn(_),(!x.hasOwnProperty("init")||this.init===x.init)&&(x.init=function(){x.$super.init.apply(this,arguments)}),x.init.prototype=x,x.$super=this,x},create:function(){var _=this.extend();return _.init.apply(_,arguments),_},init:function(){},mixIn:function(_){for(var x in _)_.hasOwnProperty(x)&&(this[x]=_[x]);_.hasOwnProperty("toString")&&(this.toString=_.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),h=c.WordArray=u.extend({init:function(_,x){_=this.words=_||[],x!=r?this.sigBytes=x:this.sigBytes=_.length*4},toString:function(_){return(_||p).stringify(this)},concat:function(_){var x=this.words,y=_.words,b=this.sigBytes,T=_.sigBytes;if(this.clamp(),b%4)for(var E=0;E<T;E++){var P=y[E>>>2]>>>24-E%4*8&255;x[b+E>>>2]|=P<<24-(b+E)%4*8}else for(var M=0;M<T;M+=4)x[b+M>>>2]=y[M>>>2];return this.sigBytes+=T,this},clamp:function(){var _=this.words,x=this.sigBytes;_[x>>>2]&=4294967295<<32-x%4*8,_.length=n.ceil(x/4)},clone:function(){var _=u.clone.call(this);return _.words=this.words.slice(0),_},random:function(_){for(var x=[],y=0;y<_;y+=4)x.push(o());return new h.init(x,_)}}),f=l.enc={},p=f.Hex={stringify:function(_){for(var x=_.words,y=_.sigBytes,b=[],T=0;T<y;T++){var E=x[T>>>2]>>>24-T%4*8&255;b.push((E>>>4).toString(16)),b.push((E&15).toString(16))}return b.join("")},parse:function(_){for(var x=_.length,y=[],b=0;b<x;b+=2)y[b>>>3]|=parseInt(_.substr(b,2),16)<<24-b%8*4;return new h.init(y,x/2)}},v=f.Latin1={stringify:function(_){for(var x=_.words,y=_.sigBytes,b=[],T=0;T<y;T++){var E=x[T>>>2]>>>24-T%4*8&255;b.push(String.fromCharCode(E))}return b.join("")},parse:function(_){for(var x=_.length,y=[],b=0;b<x;b++)y[b>>>2]|=(_.charCodeAt(b)&255)<<24-b%4*8;return new h.init(y,x)}},g=f.Utf8={stringify:function(_){try{return decodeURIComponent(escape(v.stringify(_)))}catch{throw new Error("Malformed UTF-8 data")}},parse:function(_){return v.parse(unescape(encodeURIComponent(_)))}},m=c.BufferedBlockAlgorithm=u.extend({reset:function(){this._data=new h.init,this._nDataBytes=0},_append:function(_){typeof _=="string"&&(_=g.parse(_)),this._data.concat(_),this._nDataBytes+=_.sigBytes},_process:function(_){var x,y=this._data,b=y.words,T=y.sigBytes,E=this.blockSize,P=E*4,M=T/P;_?M=n.ceil(M):M=n.max((M|0)-this._minBufferSize,0);var S=M*E,L=n.min(S*4,T);if(S){for(var O=0;O<S;O+=E)this._doProcessBlock(b,O);x=b.splice(0,S),y.sigBytes-=L}return new h.init(x,L)},clone:function(){var _=u.clone.call(this);return _._data=this._data.clone(),_},_minBufferSize:0});c.Hasher=m.extend({cfg:u.extend(),init:function(_){this.cfg=this.cfg.extend(_),this.reset()},reset:function(){m.reset.call(this),this._doReset()},update:function(_){return this._append(_),this._process(),this},finalize:function(_){_&&this._append(_);var x=this._doFinalize();return x},blockSize:16,_createHelper:function(_){return function(x,y){return new _.init(y).finalize(x)}},_createHmacHelper:function(_){return function(x,y){return new d.HMAC.init(_,y).finalize(x)}}});var d=l.algo={};return l}(Math);return t})}(Ts)),Ts.exports}var As={exports:{}},Sc;function Ri(){return Sc||(Sc=1,function(i,e){(function(t,n){i.exports=n(Ye())})(Ge,function(t){return function(){var n=t,r=n.lib,s=r.WordArray,o=n.enc;o.Base64={stringify:function(l){var c=l.words,u=l.sigBytes,h=this._map;l.clamp();for(var f=[],p=0;p<u;p+=3)for(var v=c[p>>>2]>>>24-p%4*8&255,g=c[p+1>>>2]>>>24-(p+1)%4*8&255,m=c[p+2>>>2]>>>24-(p+2)%4*8&255,d=v<<16|g<<8|m,_=0;_<4&&p+_*.75<u;_++)f.push(h.charAt(d>>>6*(3-_)&63));var x=h.charAt(64);if(x)for(;f.length%4;)f.push(x);return f.join("")},parse:function(l){var c=l.length,u=this._map,h=this._reverseMap;if(!h){h=this._reverseMap=[];for(var f=0;f<u.length;f++)h[u.charCodeAt(f)]=f}var p=u.charAt(64);if(p){var v=l.indexOf(p);v!==-1&&(c=v)}return a(l,c,h)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="};function a(l,c,u){for(var h=[],f=0,p=0;p<c;p++)if(p%4){var v=u[l.charCodeAt(p-1)]<<p%4*2,g=u[l.charCodeAt(p)]>>>6-p%4*2,m=v|g;h[f>>>2]|=m<<24-f%4*8,f++}return s.create(h,f)}}(),t.enc.Base64})}(As)),As.exports}var ws={exports:{}},Mc;function Pi(){return Mc||(Mc=1,function(i,e){(function(t,n){i.exports=n(Ye())})(Ge,function(t){return function(n){var r=t,s=r.lib,o=s.WordArray,a=s.Hasher,l=r.algo,c=[];(function(){for(var g=0;g<64;g++)c[g]=n.abs(n.sin(g+1))*4294967296|0})();var u=l.MD5=a.extend({_doReset:function(){this._hash=new o.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(g,m){for(var d=0;d<16;d++){var _=m+d,x=g[_];g[_]=(x<<8|x>>>24)&16711935|(x<<24|x>>>8)&4278255360}var y=this._hash.words,b=g[m+0],T=g[m+1],E=g[m+2],P=g[m+3],M=g[m+4],S=g[m+5],L=g[m+6],O=g[m+7],D=g[m+8],B=g[m+9],H=g[m+10],Z=g[m+11],X=g[m+12],j=g[m+13],te=g[m+14],$=g[m+15],R=y[0],U=y[1],G=y[2],k=y[3];R=h(R,U,G,k,b,7,c[0]),k=h(k,R,U,G,T,12,c[1]),G=h(G,k,R,U,E,17,c[2]),U=h(U,G,k,R,P,22,c[3]),R=h(R,U,G,k,M,7,c[4]),k=h(k,R,U,G,S,12,c[5]),G=h(G,k,R,U,L,17,c[6]),U=h(U,G,k,R,O,22,c[7]),R=h(R,U,G,k,D,7,c[8]),k=h(k,R,U,G,B,12,c[9]),G=h(G,k,R,U,H,17,c[10]),U=h(U,G,k,R,Z,22,c[11]),R=h(R,U,G,k,X,7,c[12]),k=h(k,R,U,G,j,12,c[13]),G=h(G,k,R,U,te,17,c[14]),U=h(U,G,k,R,$,22,c[15]),R=f(R,U,G,k,T,5,c[16]),k=f(k,R,U,G,L,9,c[17]),G=f(G,k,R,U,Z,14,c[18]),U=f(U,G,k,R,b,20,c[19]),R=f(R,U,G,k,S,5,c[20]),k=f(k,R,U,G,H,9,c[21]),G=f(G,k,R,U,$,14,c[22]),U=f(U,G,k,R,M,20,c[23]),R=f(R,U,G,k,B,5,c[24]),k=f(k,R,U,G,te,9,c[25]),G=f(G,k,R,U,P,14,c[26]),U=f(U,G,k,R,D,20,c[27]),R=f(R,U,G,k,j,5,c[28]),k=f(k,R,U,G,E,9,c[29]),G=f(G,k,R,U,O,14,c[30]),U=f(U,G,k,R,X,20,c[31]),R=p(R,U,G,k,S,4,c[32]),k=p(k,R,U,G,D,11,c[33]),G=p(G,k,R,U,Z,16,c[34]),U=p(U,G,k,R,te,23,c[35]),R=p(R,U,G,k,T,4,c[36]),k=p(k,R,U,G,M,11,c[37]),G=p(G,k,R,U,O,16,c[38]),U=p(U,G,k,R,H,23,c[39]),R=p(R,U,G,k,j,4,c[40]),k=p(k,R,U,G,b,11,c[41]),G=p(G,k,R,U,P,16,c[42]),U=p(U,G,k,R,L,23,c[43]),R=p(R,U,G,k,B,4,c[44]),k=p(k,R,U,G,X,11,c[45]),G=p(G,k,R,U,$,16,c[46]),U=p(U,G,k,R,E,23,c[47]),R=v(R,U,G,k,b,6,c[48]),k=v(k,R,U,G,O,10,c[49]),G=v(G,k,R,U,te,15,c[50]),U=v(U,G,k,R,S,21,c[51]),R=v(R,U,G,k,X,6,c[52]),k=v(k,R,U,G,P,10,c[53]),G=v(G,k,R,U,H,15,c[54]),U=v(U,G,k,R,T,21,c[55]),R=v(R,U,G,k,D,6,c[56]),k=v(k,R,U,G,$,10,c[57]),G=v(G,k,R,U,L,15,c[58]),U=v(U,G,k,R,j,21,c[59]),R=v(R,U,G,k,M,6,c[60]),k=v(k,R,U,G,Z,10,c[61]),G=v(G,k,R,U,E,15,c[62]),U=v(U,G,k,R,B,21,c[63]),y[0]=y[0]+R|0,y[1]=y[1]+U|0,y[2]=y[2]+G|0,y[3]=y[3]+k|0},_doFinalize:function(){var g=this._data,m=g.words,d=this._nDataBytes*8,_=g.sigBytes*8;m[_>>>5]|=128<<24-_%32;var x=n.floor(d/4294967296),y=d;m[(_+64>>>9<<4)+15]=(x<<8|x>>>24)&16711935|(x<<24|x>>>8)&4278255360,m[(_+64>>>9<<4)+14]=(y<<8|y>>>24)&16711935|(y<<24|y>>>8)&4278255360,g.sigBytes=(m.length+1)*4,this._process();for(var b=this._hash,T=b.words,E=0;E<4;E++){var P=T[E];T[E]=(P<<8|P>>>24)&16711935|(P<<24|P>>>8)&4278255360}return b},clone:function(){var g=a.clone.call(this);return g._hash=this._hash.clone(),g}});function h(g,m,d,_,x,y,b){var T=g+(m&d|~m&_)+x+b;return(T<<y|T>>>32-y)+m}function f(g,m,d,_,x,y,b){var T=g+(m&_|d&~_)+x+b;return(T<<y|T>>>32-y)+m}function p(g,m,d,_,x,y,b){var T=g+(m^d^_)+x+b;return(T<<y|T>>>32-y)+m}function v(g,m,d,_,x,y,b){var T=g+(d^(m|~_))+x+b;return(T<<y|T>>>32-y)+m}r.MD5=a._createHelper(u),r.HmacMD5=a._createHmacHelper(u)}(Math),t.MD5})}(ws)),ws.exports}var Cs={exports:{}},Rs={exports:{}},Ec;function Na(){return Ec||(Ec=1,function(i,e){(function(t,n){i.exports=n(Ye())})(Ge,function(t){return function(){var n=t,r=n.lib,s=r.WordArray,o=r.Hasher,a=n.algo,l=[],c=a.SHA1=o.extend({_doReset:function(){this._hash=new s.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(u,h){for(var f=this._hash.words,p=f[0],v=f[1],g=f[2],m=f[3],d=f[4],_=0;_<80;_++){if(_<16)l[_]=u[h+_]|0;else{var x=l[_-3]^l[_-8]^l[_-14]^l[_-16];l[_]=x<<1|x>>>31}var y=(p<<5|p>>>27)+d+l[_];_<20?y+=(v&g|~v&m)+1518500249:_<40?y+=(v^g^m)+1859775393:_<60?y+=(v&g|v&m|g&m)-1894007588:y+=(v^g^m)-899497514,d=m,m=g,g=v<<30|v>>>2,v=p,p=y}f[0]=f[0]+p|0,f[1]=f[1]+v|0,f[2]=f[2]+g|0,f[3]=f[3]+m|0,f[4]=f[4]+d|0},_doFinalize:function(){var u=this._data,h=u.words,f=this._nDataBytes*8,p=u.sigBytes*8;return h[p>>>5]|=128<<24-p%32,h[(p+64>>>9<<4)+14]=Math.floor(f/4294967296),h[(p+64>>>9<<4)+15]=f,u.sigBytes=h.length*4,this._process(),this._hash},clone:function(){var u=o.clone.call(this);return u._hash=this._hash.clone(),u}});n.SHA1=o._createHelper(c),n.HmacSHA1=o._createHmacHelper(c)}(),t.SHA1})}(Rs)),Rs.exports}var Ps={exports:{}},bc;function Fa(){return bc||(bc=1,function(i,e){(function(t,n){i.exports=n(Ye())})(Ge,function(t){(function(){var n=t,r=n.lib,s=r.Base,o=n.enc,a=o.Utf8,l=n.algo;l.HMAC=s.extend({init:function(c,u){c=this._hasher=new c.init,typeof u=="string"&&(u=a.parse(u));var h=c.blockSize,f=h*4;u.sigBytes>f&&(u=c.finalize(u)),u.clamp();for(var p=this._oKey=u.clone(),v=this._iKey=u.clone(),g=p.words,m=v.words,d=0;d<h;d++)g[d]^=1549556828,m[d]^=909522486;p.sigBytes=v.sigBytes=f,this.reset()},reset:function(){var c=this._hasher;c.reset(),c.update(this._iKey)},update:function(c){return this._hasher.update(c),this},finalize:function(c){var u=this._hasher,h=u.finalize(c);u.reset();var f=u.finalize(this._oKey.clone().concat(h));return f}})})()})}(Ps)),Ps.exports}var Tc;function qn(){return Tc||(Tc=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),Na(),Fa())})(Ge,function(t){return function(){var n=t,r=n.lib,s=r.Base,o=r.WordArray,a=n.algo,l=a.MD5,c=a.EvpKDF=s.extend({cfg:s.extend({keySize:128/32,hasher:l,iterations:1}),init:function(u){this.cfg=this.cfg.extend(u)},compute:function(u,h){for(var f,p=this.cfg,v=p.hasher.create(),g=o.create(),m=g.words,d=p.keySize,_=p.iterations;m.length<d;){f&&v.update(f),f=v.update(u).finalize(h),v.reset();for(var x=1;x<_;x++)f=v.finalize(f),v.reset();g.concat(f)}return g.sigBytes=d*4,g}});n.EvpKDF=function(u,h,f){return c.create(f).compute(u,h)}}(),t.EvpKDF})}(Cs)),Cs.exports}var Ls={exports:{}},Ac;function mt(){return Ac||(Ac=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),qn())})(Ge,function(t){t.lib.Cipher||function(n){var r=t,s=r.lib,o=s.Base,a=s.WordArray,l=s.BufferedBlockAlgorithm,c=r.enc;c.Utf8;var u=c.Base64,h=r.algo,f=h.EvpKDF,p=s.Cipher=l.extend({cfg:o.extend(),createEncryptor:function(S,L){return this.create(this._ENC_XFORM_MODE,S,L)},createDecryptor:function(S,L){return this.create(this._DEC_XFORM_MODE,S,L)},init:function(S,L,O){this.cfg=this.cfg.extend(O),this._xformMode=S,this._key=L,this.reset()},reset:function(){l.reset.call(this),this._doReset()},process:function(S){return this._append(S),this._process()},finalize:function(S){S&&this._append(S);var L=this._doFinalize();return L},keySize:128/32,ivSize:128/32,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function S(L){return typeof L=="string"?M:T}return function(L){return{encrypt:function(O,D,B){return S(D).encrypt(L,O,D,B)},decrypt:function(O,D,B){return S(D).decrypt(L,O,D,B)}}}}()});s.StreamCipher=p.extend({_doFinalize:function(){var S=this._process(!0);return S},blockSize:1});var v=r.mode={},g=s.BlockCipherMode=o.extend({createEncryptor:function(S,L){return this.Encryptor.create(S,L)},createDecryptor:function(S,L){return this.Decryptor.create(S,L)},init:function(S,L){this._cipher=S,this._iv=L}}),m=v.CBC=function(){var S=g.extend();S.Encryptor=S.extend({processBlock:function(O,D){var B=this._cipher,H=B.blockSize;L.call(this,O,D,H),B.encryptBlock(O,D),this._prevBlock=O.slice(D,D+H)}}),S.Decryptor=S.extend({processBlock:function(O,D){var B=this._cipher,H=B.blockSize,Z=O.slice(D,D+H);B.decryptBlock(O,D),L.call(this,O,D,H),this._prevBlock=Z}});function L(O,D,B){var H,Z=this._iv;Z?(H=Z,this._iv=n):H=this._prevBlock;for(var X=0;X<B;X++)O[D+X]^=H[X]}return S}(),d=r.pad={},_=d.Pkcs7={pad:function(S,L){for(var O=L*4,D=O-S.sigBytes%O,B=D<<24|D<<16|D<<8|D,H=[],Z=0;Z<D;Z+=4)H.push(B);var X=a.create(H,D);S.concat(X)},unpad:function(S){var L=S.words[S.sigBytes-1>>>2]&255;S.sigBytes-=L}};s.BlockCipher=p.extend({cfg:p.cfg.extend({mode:m,padding:_}),reset:function(){var S;p.reset.call(this);var L=this.cfg,O=L.iv,D=L.mode;this._xformMode==this._ENC_XFORM_MODE?S=D.createEncryptor:(S=D.createDecryptor,this._minBufferSize=1),this._mode&&this._mode.__creator==S?this._mode.init(this,O&&O.words):(this._mode=S.call(D,this,O&&O.words),this._mode.__creator=S)},_doProcessBlock:function(S,L){this._mode.processBlock(S,L)},_doFinalize:function(){var S,L=this.cfg.padding;return this._xformMode==this._ENC_XFORM_MODE?(L.pad(this._data,this.blockSize),S=this._process(!0)):(S=this._process(!0),L.unpad(S)),S},blockSize:128/32});var x=s.CipherParams=o.extend({init:function(S){this.mixIn(S)},toString:function(S){return(S||this.formatter).stringify(this)}}),y=r.format={},b=y.OpenSSL={stringify:function(S){var L,O=S.ciphertext,D=S.salt;return D?L=a.create([1398893684,1701076831]).concat(D).concat(O):L=O,L.toString(u)},parse:function(S){var L,O=u.parse(S),D=O.words;return D[0]==1398893684&&D[1]==1701076831&&(L=a.create(D.slice(2,4)),D.splice(0,4),O.sigBytes-=16),x.create({ciphertext:O,salt:L})}},T=s.SerializableCipher=o.extend({cfg:o.extend({format:b}),encrypt:function(S,L,O,D){D=this.cfg.extend(D);var B=S.createEncryptor(O,D),H=B.finalize(L),Z=B.cfg;return x.create({ciphertext:H,key:O,iv:Z.iv,algorithm:S,mode:Z.mode,padding:Z.padding,blockSize:S.blockSize,formatter:D.format})},decrypt:function(S,L,O,D){D=this.cfg.extend(D),L=this._parse(L,D.format);var B=S.createDecryptor(O,D).finalize(L.ciphertext);return B},_parse:function(S,L){return typeof S=="string"?L.parse(S,this):S}}),E=r.kdf={},P=E.OpenSSL={execute:function(S,L,O,D){D||(D=a.random(64/8));var B=f.create({keySize:L+O}).compute(S,D),H=a.create(B.words.slice(L),O*4);return B.sigBytes=L*4,x.create({key:B,iv:H,salt:D})}},M=s.PasswordBasedCipher=T.extend({cfg:T.cfg.extend({kdf:P}),encrypt:function(S,L,O,D){D=this.cfg.extend(D);var B=D.kdf.execute(O,S.keySize,S.ivSize);D.iv=B.iv;var H=T.encrypt.call(this,S,L,B.key,D);return H.mixIn(B),H},decrypt:function(S,L,O,D){D=this.cfg.extend(D),L=this._parse(L,D.format);var B=D.kdf.execute(O,S.keySize,S.ivSize,L.salt);D.iv=B.iv;var H=T.decrypt.call(this,S,L,B.key,D);return H}})}()})}(Ls)),Ls.exports}(function(i,e){(function(t,n,r){i.exports=n(Ye(),Ri(),Pi(),qn(),mt())})(Ge,function(t){return function(){var n=t,r=n.lib,s=r.BlockCipher,o=n.algo,a=[],l=[],c=[],u=[],h=[],f=[],p=[],v=[],g=[],m=[];(function(){for(var x=[],y=0;y<256;y++)y<128?x[y]=y<<1:x[y]=y<<1^283;for(var b=0,T=0,y=0;y<256;y++){var E=T^T<<1^T<<2^T<<3^T<<4;E=E>>>8^E&255^99,a[b]=E,l[E]=b;var P=x[b],M=x[P],S=x[M],L=x[E]*257^E*16843008;c[b]=L<<24|L>>>8,u[b]=L<<16|L>>>16,h[b]=L<<8|L>>>24,f[b]=L;var L=S*16843009^M*65537^P*257^b*16843008;p[E]=L<<24|L>>>8,v[E]=L<<16|L>>>16,g[E]=L<<8|L>>>24,m[E]=L,b?(b=P^x[x[x[S^P]]],T^=x[x[T]]):b=T=1}})();var d=[0,1,2,4,8,16,32,64,128,27,54],_=o.AES=s.extend({_doReset:function(){var x;if(!(this._nRounds&&this._keyPriorReset===this._key)){for(var y=this._keyPriorReset=this._key,b=y.words,T=y.sigBytes/4,E=this._nRounds=T+6,P=(E+1)*4,M=this._keySchedule=[],S=0;S<P;S++)S<T?M[S]=b[S]:(x=M[S-1],S%T?T>6&&S%T==4&&(x=a[x>>>24]<<24|a[x>>>16&255]<<16|a[x>>>8&255]<<8|a[x&255]):(x=x<<8|x>>>24,x=a[x>>>24]<<24|a[x>>>16&255]<<16|a[x>>>8&255]<<8|a[x&255],x^=d[S/T|0]<<24),M[S]=M[S-T]^x);for(var L=this._invKeySchedule=[],O=0;O<P;O++){var S=P-O;if(O%4)var x=M[S];else var x=M[S-4];O<4||S<=4?L[O]=x:L[O]=p[a[x>>>24]]^v[a[x>>>16&255]]^g[a[x>>>8&255]]^m[a[x&255]]}}},encryptBlock:function(x,y){this._doCryptBlock(x,y,this._keySchedule,c,u,h,f,a)},decryptBlock:function(x,y){var b=x[y+1];x[y+1]=x[y+3],x[y+3]=b,this._doCryptBlock(x,y,this._invKeySchedule,p,v,g,m,l);var b=x[y+1];x[y+1]=x[y+3],x[y+3]=b},_doCryptBlock:function(x,y,b,T,E,P,M,S){for(var L=this._nRounds,O=x[y]^b[0],D=x[y+1]^b[1],B=x[y+2]^b[2],H=x[y+3]^b[3],Z=4,X=1;X<L;X++){var j=T[O>>>24]^E[D>>>16&255]^P[B>>>8&255]^M[H&255]^b[Z++],te=T[D>>>24]^E[B>>>16&255]^P[H>>>8&255]^M[O&255]^b[Z++],$=T[B>>>24]^E[H>>>16&255]^P[O>>>8&255]^M[D&255]^b[Z++],R=T[H>>>24]^E[O>>>16&255]^P[D>>>8&255]^M[B&255]^b[Z++];O=j,D=te,B=$,H=R}var j=(S[O>>>24]<<24|S[D>>>16&255]<<16|S[B>>>8&255]<<8|S[H&255])^b[Z++],te=(S[D>>>24]<<24|S[B>>>16&255]<<16|S[H>>>8&255]<<8|S[O&255])^b[Z++],$=(S[B>>>24]<<24|S[H>>>16&255]<<16|S[O>>>8&255]<<8|S[D&255])^b[Z++],R=(S[H>>>24]<<24|S[O>>>16&255]<<16|S[D>>>8&255]<<8|S[B&255])^b[Z++];x[y]=j,x[y+1]=te,x[y+2]=$,x[y+3]=R},keySize:256/32});n.AES=s._createHelper(_)}(),t.AES})})(Gl);var Vl=Gl.exports;const _t=kl(Vl);var Wl={exports:{}},Ds={exports:{}},wc;function Hr(){return wc||(wc=1,function(i,e){(function(t,n){i.exports=n(Ye())})(Ge,function(t){return function(n){var r=t,s=r.lib,o=s.Base,a=s.WordArray,l=r.x64={};l.Word=o.extend({init:function(c,u){this.high=c,this.low=u}}),l.WordArray=o.extend({init:function(c,u){c=this.words=c||[],u!=n?this.sigBytes=u:this.sigBytes=c.length*8},toX32:function(){for(var c=this.words,u=c.length,h=[],f=0;f<u;f++){var p=c[f];h.push(p.high),h.push(p.low)}return a.create(h,this.sigBytes)},clone:function(){for(var c=o.clone.call(this),u=c.words=this.words.slice(0),h=u.length,f=0;f<h;f++)u[f]=u[f].clone();return c}})}(),t})}(Ds)),Ds.exports}var Us={exports:{}},Cc;function Mv(){return Cc||(Cc=1,function(i,e){(function(t,n){i.exports=n(Ye())})(Ge,function(t){return function(){if(typeof ArrayBuffer=="function"){var n=t,r=n.lib,s=r.WordArray,o=s.init,a=s.init=function(l){if(l instanceof ArrayBuffer&&(l=new Uint8Array(l)),(l instanceof Int8Array||typeof Uint8ClampedArray<"u"&&l instanceof Uint8ClampedArray||l instanceof Int16Array||l instanceof Uint16Array||l instanceof Int32Array||l instanceof Uint32Array||l instanceof Float32Array||l instanceof Float64Array)&&(l=new Uint8Array(l.buffer,l.byteOffset,l.byteLength)),l instanceof Uint8Array){for(var c=l.byteLength,u=[],h=0;h<c;h++)u[h>>>2]|=l[h]<<24-h%4*8;o.call(this,u,c)}else o.apply(this,arguments)};a.prototype=s}}(),t.lib.WordArray})}(Us)),Us.exports}var Is={exports:{}},Rc;function Ev(){return Rc||(Rc=1,function(i,e){(function(t,n){i.exports=n(Ye())})(Ge,function(t){return function(){var n=t,r=n.lib,s=r.WordArray,o=n.enc;o.Utf16=o.Utf16BE={stringify:function(l){for(var c=l.words,u=l.sigBytes,h=[],f=0;f<u;f+=2){var p=c[f>>>2]>>>16-f%4*8&65535;h.push(String.fromCharCode(p))}return h.join("")},parse:function(l){for(var c=l.length,u=[],h=0;h<c;h++)u[h>>>1]|=l.charCodeAt(h)<<16-h%2*16;return s.create(u,c*2)}},o.Utf16LE={stringify:function(l){for(var c=l.words,u=l.sigBytes,h=[],f=0;f<u;f+=2){var p=a(c[f>>>2]>>>16-f%4*8&65535);h.push(String.fromCharCode(p))}return h.join("")},parse:function(l){for(var c=l.length,u=[],h=0;h<c;h++)u[h>>>1]|=a(l.charCodeAt(h)<<16-h%2*16);return s.create(u,c*2)}};function a(l){return l<<8&4278255360|l>>>8&16711935}}(),t.enc.Utf16})}(Is)),Is.exports}var Ns={exports:{}},Pc;function bv(){return Pc||(Pc=1,function(i,e){(function(t,n){i.exports=n(Ye())})(Ge,function(t){return function(){var n=t,r=n.lib,s=r.WordArray,o=n.enc;o.Base64url={stringify:function(l,c=!0){var u=l.words,h=l.sigBytes,f=c?this._safe_map:this._map;l.clamp();for(var p=[],v=0;v<h;v+=3)for(var g=u[v>>>2]>>>24-v%4*8&255,m=u[v+1>>>2]>>>24-(v+1)%4*8&255,d=u[v+2>>>2]>>>24-(v+2)%4*8&255,_=g<<16|m<<8|d,x=0;x<4&&v+x*.75<h;x++)p.push(f.charAt(_>>>6*(3-x)&63));var y=f.charAt(64);if(y)for(;p.length%4;)p.push(y);return p.join("")},parse:function(l,c=!0){var u=l.length,h=c?this._safe_map:this._map,f=this._reverseMap;if(!f){f=this._reverseMap=[];for(var p=0;p<h.length;p++)f[h.charCodeAt(p)]=p}var v=h.charAt(64);if(v){var g=l.indexOf(v);g!==-1&&(u=g)}return a(l,u,f)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",_safe_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"};function a(l,c,u){for(var h=[],f=0,p=0;p<c;p++)if(p%4){var v=u[l.charCodeAt(p-1)]<<p%4*2,g=u[l.charCodeAt(p)]>>>6-p%4*2,m=v|g;h[f>>>2]|=m<<24-f%4*8,f++}return s.create(h,f)}}(),t.enc.Base64url})}(Ns)),Ns.exports}var Fs={exports:{}},Lc;function Xl(){return Lc||(Lc=1,function(i,e){(function(t,n){i.exports=n(Ye())})(Ge,function(t){return function(n){var r=t,s=r.lib,o=s.WordArray,a=s.Hasher,l=r.algo,c=[],u=[];(function(){function p(d){for(var _=n.sqrt(d),x=2;x<=_;x++)if(!(d%x))return!1;return!0}function v(d){return(d-(d|0))*4294967296|0}for(var g=2,m=0;m<64;)p(g)&&(m<8&&(c[m]=v(n.pow(g,1/2))),u[m]=v(n.pow(g,1/3)),m++),g++})();var h=[],f=l.SHA256=a.extend({_doReset:function(){this._hash=new o.init(c.slice(0))},_doProcessBlock:function(p,v){for(var g=this._hash.words,m=g[0],d=g[1],_=g[2],x=g[3],y=g[4],b=g[5],T=g[6],E=g[7],P=0;P<64;P++){if(P<16)h[P]=p[v+P]|0;else{var M=h[P-15],S=(M<<25|M>>>7)^(M<<14|M>>>18)^M>>>3,L=h[P-2],O=(L<<15|L>>>17)^(L<<13|L>>>19)^L>>>10;h[P]=S+h[P-7]+O+h[P-16]}var D=y&b^~y&T,B=m&d^m&_^d&_,H=(m<<30|m>>>2)^(m<<19|m>>>13)^(m<<10|m>>>22),Z=(y<<26|y>>>6)^(y<<21|y>>>11)^(y<<7|y>>>25),X=E+Z+D+u[P]+h[P],j=H+B;E=T,T=b,b=y,y=x+X|0,x=_,_=d,d=m,m=X+j|0}g[0]=g[0]+m|0,g[1]=g[1]+d|0,g[2]=g[2]+_|0,g[3]=g[3]+x|0,g[4]=g[4]+y|0,g[5]=g[5]+b|0,g[6]=g[6]+T|0,g[7]=g[7]+E|0},_doFinalize:function(){var p=this._data,v=p.words,g=this._nDataBytes*8,m=p.sigBytes*8;return v[m>>>5]|=128<<24-m%32,v[(m+64>>>9<<4)+14]=n.floor(g/4294967296),v[(m+64>>>9<<4)+15]=g,p.sigBytes=v.length*4,this._process(),this._hash},clone:function(){var p=a.clone.call(this);return p._hash=this._hash.clone(),p}});r.SHA256=a._createHelper(f),r.HmacSHA256=a._createHmacHelper(f)}(Math),t.SHA256})}(Fs)),Fs.exports}var Os={exports:{}},Dc;function Tv(){return Dc||(Dc=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),Xl())})(Ge,function(t){return function(){var n=t,r=n.lib,s=r.WordArray,o=n.algo,a=o.SHA256,l=o.SHA224=a.extend({_doReset:function(){this._hash=new s.init([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])},_doFinalize:function(){var c=a._doFinalize.call(this);return c.sigBytes-=4,c}});n.SHA224=a._createHelper(l),n.HmacSHA224=a._createHmacHelper(l)}(),t.SHA224})}(Os)),Os.exports}var Bs={exports:{}},Uc;function ql(){return Uc||(Uc=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),Hr())})(Ge,function(t){return function(){var n=t,r=n.lib,s=r.Hasher,o=n.x64,a=o.Word,l=o.WordArray,c=n.algo;function u(){return a.create.apply(a,arguments)}var h=[u(1116352408,3609767458),u(1899447441,602891725),u(3049323471,3964484399),u(3921009573,2173295548),u(961987163,4081628472),u(1508970993,3053834265),u(2453635748,2937671579),u(2870763221,3664609560),u(3624381080,2734883394),u(310598401,1164996542),u(607225278,1323610764),u(1426881987,3590304994),u(1925078388,4068182383),u(2162078206,991336113),u(2614888103,633803317),u(3248222580,3479774868),u(3835390401,2666613458),u(4022224774,944711139),u(264347078,2341262773),u(604807628,2007800933),u(770255983,1495990901),u(1249150122,1856431235),u(1555081692,3175218132),u(1996064986,2198950837),u(2554220882,3999719339),u(2821834349,766784016),u(2952996808,2566594879),u(3210313671,3203337956),u(3336571891,1034457026),u(3584528711,2466948901),u(113926993,3758326383),u(338241895,168717936),u(666307205,1188179964),u(773529912,1546045734),u(1294757372,1522805485),u(1396182291,2643833823),u(1695183700,2343527390),u(1986661051,1014477480),u(2177026350,1206759142),u(2456956037,344077627),u(2730485921,1290863460),u(2820302411,3158454273),u(3259730800,3505952657),u(3345764771,106217008),u(3516065817,3606008344),u(3600352804,1432725776),u(4094571909,1467031594),u(275423344,851169720),u(430227734,3100823752),u(506948616,1363258195),u(659060556,3750685593),u(883997877,3785050280),u(958139571,3318307427),u(1322822218,3812723403),u(1537002063,2003034995),u(1747873779,3602036899),u(1955562222,1575990012),u(2024104815,1125592928),u(2227730452,2716904306),u(2361852424,442776044),u(2428436474,593698344),u(2756734187,3733110249),u(3204031479,2999351573),u(3329325298,3815920427),u(3391569614,3928383900),u(3515267271,566280711),u(3940187606,3454069534),u(4118630271,4000239992),u(116418474,1914138554),u(174292421,2731055270),u(289380356,3203993006),u(460393269,320620315),u(685471733,587496836),u(852142971,1086792851),u(1017036298,365543100),u(1126000580,2618297676),u(1288033470,3409855158),u(1501505948,4234509866),u(1607167915,987167468),u(1816402316,1246189591)],f=[];(function(){for(var v=0;v<80;v++)f[v]=u()})();var p=c.SHA512=s.extend({_doReset:function(){this._hash=new l.init([new a.init(1779033703,4089235720),new a.init(3144134277,2227873595),new a.init(1013904242,4271175723),new a.init(2773480762,1595750129),new a.init(1359893119,2917565137),new a.init(2600822924,725511199),new a.init(528734635,4215389547),new a.init(1541459225,327033209)])},_doProcessBlock:function(v,g){for(var m=this._hash.words,d=m[0],_=m[1],x=m[2],y=m[3],b=m[4],T=m[5],E=m[6],P=m[7],M=d.high,S=d.low,L=_.high,O=_.low,D=x.high,B=x.low,H=y.high,Z=y.low,X=b.high,j=b.low,te=T.high,$=T.low,R=E.high,U=E.low,G=P.high,k=P.low,oe=M,me=S,Me=L,ce=O,Fe=D,qe=B,Ce=H,I=Z,se=X,J=j,ue=te,ne=$,Te=R,Se=U,Ee=G,we=k,Pe=0;Pe<80;Pe++){var Ve,C,A=f[Pe];if(Pe<16)C=A.high=v[g+Pe*2]|0,Ve=A.low=v[g+Pe*2+1]|0;else{var q=f[Pe-15],ae=q.high,re=q.low,fe=(ae>>>1|re<<31)^(ae>>>8|re<<24)^ae>>>7,Ae=(re>>>1|ae<<31)^(re>>>8|ae<<24)^(re>>>7|ae<<25),he=f[Pe-2],Y=he.high,N=he.low,ie=(Y>>>19|N<<13)^(Y<<3|N>>>29)^Y>>>6,_e=(N>>>19|Y<<13)^(N<<3|Y>>>29)^(N>>>6|Y<<26),pe=f[Pe-7],ye=pe.high,Le=pe.low,He=f[Pe-16],F=He.high,ve=He.low;Ve=Ae+Le,C=fe+ye+(Ve>>>0<Ae>>>0?1:0),Ve=Ve+_e,C=C+ie+(Ve>>>0<_e>>>0?1:0),Ve=Ve+ve,C=C+F+(Ve>>>0<ve>>>0?1:0),A.high=C,A.low=Ve}var K=se&ue^~se&Te,le=J&ne^~J&Se,xe=oe&Me^oe&Fe^Me&Fe,Oe=me&ce^me&qe^ce&qe,Ke=(oe>>>28|me<<4)^(oe<<30|me>>>2)^(oe<<25|me>>>7),je=(me>>>28|oe<<4)^(me<<30|oe>>>2)^(me<<25|oe>>>7),Yt=(se>>>14|J<<18)^(se>>>18|J<<14)^(se<<23|J>>>9),$e=(J>>>14|se<<18)^(J>>>18|se<<14)^(J<<23|se>>>9),Lt=h[Pe],dt=Lt.high,Di=Lt.low,vt=we+$e,Kt=Ee+Yt+(vt>>>0<we>>>0?1:0),vt=vt+le,Kt=Kt+K+(vt>>>0<le>>>0?1:0),vt=vt+Di,Kt=Kt+dt+(vt>>>0<Di>>>0?1:0),vt=vt+Ve,Kt=Kt+C+(vt>>>0<Ve>>>0?1:0),Cn=je+Oe,ir=Ke+xe+(Cn>>>0<je>>>0?1:0);Ee=Te,we=Se,Te=ue,Se=ne,ue=se,ne=J,J=I+vt|0,se=Ce+Kt+(J>>>0<I>>>0?1:0)|0,Ce=Fe,I=qe,Fe=Me,qe=ce,Me=oe,ce=me,me=vt+Cn|0,oe=Kt+ir+(me>>>0<vt>>>0?1:0)|0}S=d.low=S+me,d.high=M+oe+(S>>>0<me>>>0?1:0),O=_.low=O+ce,_.high=L+Me+(O>>>0<ce>>>0?1:0),B=x.low=B+qe,x.high=D+Fe+(B>>>0<qe>>>0?1:0),Z=y.low=Z+I,y.high=H+Ce+(Z>>>0<I>>>0?1:0),j=b.low=j+J,b.high=X+se+(j>>>0<J>>>0?1:0),$=T.low=$+ne,T.high=te+ue+($>>>0<ne>>>0?1:0),U=E.low=U+Se,E.high=R+Te+(U>>>0<Se>>>0?1:0),k=P.low=k+we,P.high=G+Ee+(k>>>0<we>>>0?1:0)},_doFinalize:function(){var v=this._data,g=v.words,m=this._nDataBytes*8,d=v.sigBytes*8;g[d>>>5]|=128<<24-d%32,g[(d+128>>>10<<5)+30]=Math.floor(m/4294967296),g[(d+128>>>10<<5)+31]=m,v.sigBytes=g.length*4,this._process();var _=this._hash.toX32();return _},clone:function(){var v=s.clone.call(this);return v._hash=this._hash.clone(),v},blockSize:1024/32});n.SHA512=s._createHelper(p),n.HmacSHA512=s._createHmacHelper(p)}(),t.SHA512})}(Bs)),Bs.exports}var zs={exports:{}},Ic;function Av(){return Ic||(Ic=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),Hr(),ql())})(Ge,function(t){return function(){var n=t,r=n.x64,s=r.Word,o=r.WordArray,a=n.algo,l=a.SHA512,c=a.SHA384=l.extend({_doReset:function(){this._hash=new o.init([new s.init(3418070365,3238371032),new s.init(1654270250,914150663),new s.init(2438529370,812702999),new s.init(355462360,4144912697),new s.init(1731405415,4290775857),new s.init(2394180231,1750603025),new s.init(3675008525,1694076839),new s.init(1203062813,3204075428)])},_doFinalize:function(){var u=l._doFinalize.call(this);return u.sigBytes-=16,u}});n.SHA384=l._createHelper(c),n.HmacSHA384=l._createHmacHelper(c)}(),t.SHA384})}(zs)),zs.exports}var Hs={exports:{}},Nc;function wv(){return Nc||(Nc=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),Hr())})(Ge,function(t){return function(n){var r=t,s=r.lib,o=s.WordArray,a=s.Hasher,l=r.x64,c=l.Word,u=r.algo,h=[],f=[],p=[];(function(){for(var m=1,d=0,_=0;_<24;_++){h[m+5*d]=(_+1)*(_+2)/2%64;var x=d%5,y=(2*m+3*d)%5;m=x,d=y}for(var m=0;m<5;m++)for(var d=0;d<5;d++)f[m+5*d]=d+(2*m+3*d)%5*5;for(var b=1,T=0;T<24;T++){for(var E=0,P=0,M=0;M<7;M++){if(b&1){var S=(1<<M)-1;S<32?P^=1<<S:E^=1<<S-32}b&128?b=b<<1^113:b<<=1}p[T]=c.create(E,P)}})();var v=[];(function(){for(var m=0;m<25;m++)v[m]=c.create()})();var g=u.SHA3=a.extend({cfg:a.cfg.extend({outputLength:512}),_doReset:function(){for(var m=this._state=[],d=0;d<25;d++)m[d]=new c.init;this.blockSize=(1600-2*this.cfg.outputLength)/32},_doProcessBlock:function(m,d){for(var _=this._state,x=this.blockSize/2,y=0;y<x;y++){var b=m[d+2*y],T=m[d+2*y+1];b=(b<<8|b>>>24)&16711935|(b<<24|b>>>8)&4278255360,T=(T<<8|T>>>24)&16711935|(T<<24|T>>>8)&4278255360;var E=_[y];E.high^=T,E.low^=b}for(var P=0;P<24;P++){for(var M=0;M<5;M++){for(var S=0,L=0,O=0;O<5;O++){var E=_[M+5*O];S^=E.high,L^=E.low}var D=v[M];D.high=S,D.low=L}for(var M=0;M<5;M++)for(var B=v[(M+4)%5],H=v[(M+1)%5],Z=H.high,X=H.low,S=B.high^(Z<<1|X>>>31),L=B.low^(X<<1|Z>>>31),O=0;O<5;O++){var E=_[M+5*O];E.high^=S,E.low^=L}for(var j=1;j<25;j++){var S,L,E=_[j],te=E.high,$=E.low,R=h[j];R<32?(S=te<<R|$>>>32-R,L=$<<R|te>>>32-R):(S=$<<R-32|te>>>64-R,L=te<<R-32|$>>>64-R);var U=v[f[j]];U.high=S,U.low=L}var G=v[0],k=_[0];G.high=k.high,G.low=k.low;for(var M=0;M<5;M++)for(var O=0;O<5;O++){var j=M+5*O,E=_[j],oe=v[j],me=v[(M+1)%5+5*O],Me=v[(M+2)%5+5*O];E.high=oe.high^~me.high&Me.high,E.low=oe.low^~me.low&Me.low}var E=_[0],ce=p[P];E.high^=ce.high,E.low^=ce.low}},_doFinalize:function(){var m=this._data,d=m.words;this._nDataBytes*8;var _=m.sigBytes*8,x=this.blockSize*32;d[_>>>5]|=1<<24-_%32,d[(n.ceil((_+1)/x)*x>>>5)-1]|=128,m.sigBytes=d.length*4,this._process();for(var y=this._state,b=this.cfg.outputLength/8,T=b/8,E=[],P=0;P<T;P++){var M=y[P],S=M.high,L=M.low;S=(S<<8|S>>>24)&16711935|(S<<24|S>>>8)&4278255360,L=(L<<8|L>>>24)&16711935|(L<<24|L>>>8)&4278255360,E.push(L),E.push(S)}return new o.init(E,b)},clone:function(){for(var m=a.clone.call(this),d=m._state=this._state.slice(0),_=0;_<25;_++)d[_]=d[_].clone();return m}});r.SHA3=a._createHelper(g),r.HmacSHA3=a._createHmacHelper(g)}(Math),t.SHA3})}(Hs)),Hs.exports}var ks={exports:{}},Fc;function Cv(){return Fc||(Fc=1,function(i,e){(function(t,n){i.exports=n(Ye())})(Ge,function(t){/** @preserve
			(c) 2012 by Cédric Mesnil. All rights reserved.

			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
			*/return function(n){var r=t,s=r.lib,o=s.WordArray,a=s.Hasher,l=r.algo,c=o.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),u=o.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),h=o.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),f=o.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),p=o.create([0,1518500249,1859775393,2400959708,2840853838]),v=o.create([1352829926,1548603684,1836072691,2053994217,0]),g=l.RIPEMD160=a.extend({_doReset:function(){this._hash=o.create([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(T,E){for(var P=0;P<16;P++){var M=E+P,S=T[M];T[M]=(S<<8|S>>>24)&16711935|(S<<24|S>>>8)&4278255360}var L=this._hash.words,O=p.words,D=v.words,B=c.words,H=u.words,Z=h.words,X=f.words,j,te,$,R,U,G,k,oe,me,Me;G=j=L[0],k=te=L[1],oe=$=L[2],me=R=L[3],Me=U=L[4];for(var ce,P=0;P<80;P+=1)ce=j+T[E+B[P]]|0,P<16?ce+=m(te,$,R)+O[0]:P<32?ce+=d(te,$,R)+O[1]:P<48?ce+=_(te,$,R)+O[2]:P<64?ce+=x(te,$,R)+O[3]:ce+=y(te,$,R)+O[4],ce=ce|0,ce=b(ce,Z[P]),ce=ce+U|0,j=U,U=R,R=b($,10),$=te,te=ce,ce=G+T[E+H[P]]|0,P<16?ce+=y(k,oe,me)+D[0]:P<32?ce+=x(k,oe,me)+D[1]:P<48?ce+=_(k,oe,me)+D[2]:P<64?ce+=d(k,oe,me)+D[3]:ce+=m(k,oe,me)+D[4],ce=ce|0,ce=b(ce,X[P]),ce=ce+Me|0,G=Me,Me=me,me=b(oe,10),oe=k,k=ce;ce=L[1]+$+me|0,L[1]=L[2]+R+Me|0,L[2]=L[3]+U+G|0,L[3]=L[4]+j+k|0,L[4]=L[0]+te+oe|0,L[0]=ce},_doFinalize:function(){var T=this._data,E=T.words,P=this._nDataBytes*8,M=T.sigBytes*8;E[M>>>5]|=128<<24-M%32,E[(M+64>>>9<<4)+14]=(P<<8|P>>>24)&16711935|(P<<24|P>>>8)&4278255360,T.sigBytes=(E.length+1)*4,this._process();for(var S=this._hash,L=S.words,O=0;O<5;O++){var D=L[O];L[O]=(D<<8|D>>>24)&16711935|(D<<24|D>>>8)&4278255360}return S},clone:function(){var T=a.clone.call(this);return T._hash=this._hash.clone(),T}});function m(T,E,P){return T^E^P}function d(T,E,P){return T&E|~T&P}function _(T,E,P){return(T|~E)^P}function x(T,E,P){return T&P|E&~P}function y(T,E,P){return T^(E|~P)}function b(T,E){return T<<E|T>>>32-E}r.RIPEMD160=a._createHelper(g),r.HmacRIPEMD160=a._createHmacHelper(g)}(),t.RIPEMD160})}(ks)),ks.exports}var Gs={exports:{}},Oc;function Rv(){return Oc||(Oc=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),Na(),Fa())})(Ge,function(t){return function(){var n=t,r=n.lib,s=r.Base,o=r.WordArray,a=n.algo,l=a.SHA1,c=a.HMAC,u=a.PBKDF2=s.extend({cfg:s.extend({keySize:128/32,hasher:l,iterations:1}),init:function(h){this.cfg=this.cfg.extend(h)},compute:function(h,f){for(var p=this.cfg,v=c.create(p.hasher,h),g=o.create(),m=o.create([1]),d=g.words,_=m.words,x=p.keySize,y=p.iterations;d.length<x;){var b=v.update(f).finalize(m);v.reset();for(var T=b.words,E=T.length,P=b,M=1;M<y;M++){P=v.finalize(P),v.reset();for(var S=P.words,L=0;L<E;L++)T[L]^=S[L]}g.concat(b),_[0]++}return g.sigBytes=x*4,g}});n.PBKDF2=function(h,f,p){return u.create(p).compute(h,f)}}(),t.PBKDF2})}(Gs)),Gs.exports}var Vs={exports:{}},Bc;function Pv(){return Bc||(Bc=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),mt())})(Ge,function(t){return t.mode.CFB=function(){var n=t.lib.BlockCipherMode.extend();n.Encryptor=n.extend({processBlock:function(s,o){var a=this._cipher,l=a.blockSize;r.call(this,s,o,l,a),this._prevBlock=s.slice(o,o+l)}}),n.Decryptor=n.extend({processBlock:function(s,o){var a=this._cipher,l=a.blockSize,c=s.slice(o,o+l);r.call(this,s,o,l,a),this._prevBlock=c}});function r(s,o,a,l){var c,u=this._iv;u?(c=u.slice(0),this._iv=void 0):c=this._prevBlock,l.encryptBlock(c,0);for(var h=0;h<a;h++)s[o+h]^=c[h]}return n}(),t.mode.CFB})}(Vs)),Vs.exports}var Ws={exports:{}},zc;function Lv(){return zc||(zc=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),mt())})(Ge,function(t){return t.mode.CTR=function(){var n=t.lib.BlockCipherMode.extend(),r=n.Encryptor=n.extend({processBlock:function(s,o){var a=this._cipher,l=a.blockSize,c=this._iv,u=this._counter;c&&(u=this._counter=c.slice(0),this._iv=void 0);var h=u.slice(0);a.encryptBlock(h,0),u[l-1]=u[l-1]+1|0;for(var f=0;f<l;f++)s[o+f]^=h[f]}});return n.Decryptor=r,n}(),t.mode.CTR})}(Ws)),Ws.exports}var Xs={exports:{}},Hc;function Dv(){return Hc||(Hc=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),mt())})(Ge,function(t){/** @preserve
 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
 * derived from CryptoJS.mode.CTR
 * Jan Hruby jhruby.web@gmail.com
 */return t.mode.CTRGladman=function(){var n=t.lib.BlockCipherMode.extend();function r(a){if((a>>24&255)===255){var l=a>>16&255,c=a>>8&255,u=a&255;l===255?(l=0,c===255?(c=0,u===255?u=0:++u):++c):++l,a=0,a+=l<<16,a+=c<<8,a+=u}else a+=1<<24;return a}function s(a){return(a[0]=r(a[0]))===0&&(a[1]=r(a[1])),a}var o=n.Encryptor=n.extend({processBlock:function(a,l){var c=this._cipher,u=c.blockSize,h=this._iv,f=this._counter;h&&(f=this._counter=h.slice(0),this._iv=void 0),s(f);var p=f.slice(0);c.encryptBlock(p,0);for(var v=0;v<u;v++)a[l+v]^=p[v]}});return n.Decryptor=o,n}(),t.mode.CTRGladman})}(Xs)),Xs.exports}var qs={exports:{}},kc;function Uv(){return kc||(kc=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),mt())})(Ge,function(t){return t.mode.OFB=function(){var n=t.lib.BlockCipherMode.extend(),r=n.Encryptor=n.extend({processBlock:function(s,o){var a=this._cipher,l=a.blockSize,c=this._iv,u=this._keystream;c&&(u=this._keystream=c.slice(0),this._iv=void 0),a.encryptBlock(u,0);for(var h=0;h<l;h++)s[o+h]^=u[h]}});return n.Decryptor=r,n}(),t.mode.OFB})}(qs)),qs.exports}var Ys={exports:{}},Gc;function Iv(){return Gc||(Gc=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),mt())})(Ge,function(t){return t.mode.ECB=function(){var n=t.lib.BlockCipherMode.extend();return n.Encryptor=n.extend({processBlock:function(r,s){this._cipher.encryptBlock(r,s)}}),n.Decryptor=n.extend({processBlock:function(r,s){this._cipher.decryptBlock(r,s)}}),n}(),t.mode.ECB})}(Ys)),Ys.exports}var Ks={exports:{}},Vc;function Nv(){return Vc||(Vc=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),mt())})(Ge,function(t){return t.pad.AnsiX923={pad:function(n,r){var s=n.sigBytes,o=r*4,a=o-s%o,l=s+a-1;n.clamp(),n.words[l>>>2]|=a<<24-l%4*8,n.sigBytes+=a},unpad:function(n){var r=n.words[n.sigBytes-1>>>2]&255;n.sigBytes-=r}},t.pad.Ansix923})}(Ks)),Ks.exports}var Zs={exports:{}},Wc;function Fv(){return Wc||(Wc=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),mt())})(Ge,function(t){return t.pad.Iso10126={pad:function(n,r){var s=r*4,o=s-n.sigBytes%s;n.concat(t.lib.WordArray.random(o-1)).concat(t.lib.WordArray.create([o<<24],1))},unpad:function(n){var r=n.words[n.sigBytes-1>>>2]&255;n.sigBytes-=r}},t.pad.Iso10126})}(Zs)),Zs.exports}var js={exports:{}},Xc;function Ov(){return Xc||(Xc=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),mt())})(Ge,function(t){return t.pad.Iso97971={pad:function(n,r){n.concat(t.lib.WordArray.create([2147483648],1)),t.pad.ZeroPadding.pad(n,r)},unpad:function(n){t.pad.ZeroPadding.unpad(n),n.sigBytes--}},t.pad.Iso97971})}(js)),js.exports}var $s={exports:{}},qc;function Bv(){return qc||(qc=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),mt())})(Ge,function(t){return t.pad.ZeroPadding={pad:function(n,r){var s=r*4;n.clamp(),n.sigBytes+=s-(n.sigBytes%s||s)},unpad:function(n){for(var r=n.words,s=n.sigBytes-1,s=n.sigBytes-1;s>=0;s--)if(r[s>>>2]>>>24-s%4*8&255){n.sigBytes=s+1;break}}},t.pad.ZeroPadding})}($s)),$s.exports}var Js={exports:{}},Yc;function zv(){return Yc||(Yc=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),mt())})(Ge,function(t){return t.pad.NoPadding={pad:function(){},unpad:function(){}},t.pad.NoPadding})}(Js)),Js.exports}var Qs={exports:{}},Kc;function Hv(){return Kc||(Kc=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),mt())})(Ge,function(t){return function(n){var r=t,s=r.lib,o=s.CipherParams,a=r.enc,l=a.Hex,c=r.format;c.Hex={stringify:function(u){return u.ciphertext.toString(l)},parse:function(u){var h=l.parse(u);return o.create({ciphertext:h})}}}(),t.format.Hex})}(Qs)),Qs.exports}var ea={exports:{}},Zc;function kv(){return Zc||(Zc=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),Ri(),Pi(),qn(),mt())})(Ge,function(t){return function(){var n=t,r=n.lib,s=r.WordArray,o=r.BlockCipher,a=n.algo,l=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],c=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],u=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],h=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],f=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],p=a.DES=o.extend({_doReset:function(){for(var d=this._key,_=d.words,x=[],y=0;y<56;y++){var b=l[y]-1;x[y]=_[b>>>5]>>>31-b%32&1}for(var T=this._subKeys=[],E=0;E<16;E++){for(var P=T[E]=[],M=u[E],y=0;y<24;y++)P[y/6|0]|=x[(c[y]-1+M)%28]<<31-y%6,P[4+(y/6|0)]|=x[28+(c[y+24]-1+M)%28]<<31-y%6;P[0]=P[0]<<1|P[0]>>>31;for(var y=1;y<7;y++)P[y]=P[y]>>>(y-1)*4+3;P[7]=P[7]<<5|P[7]>>>27}for(var S=this._invSubKeys=[],y=0;y<16;y++)S[y]=T[15-y]},encryptBlock:function(d,_){this._doCryptBlock(d,_,this._subKeys)},decryptBlock:function(d,_){this._doCryptBlock(d,_,this._invSubKeys)},_doCryptBlock:function(d,_,x){this._lBlock=d[_],this._rBlock=d[_+1],v.call(this,4,252645135),v.call(this,16,65535),g.call(this,2,858993459),g.call(this,8,16711935),v.call(this,1,1431655765);for(var y=0;y<16;y++){for(var b=x[y],T=this._lBlock,E=this._rBlock,P=0,M=0;M<8;M++)P|=h[M][((E^b[M])&f[M])>>>0];this._lBlock=E,this._rBlock=T^P}var S=this._lBlock;this._lBlock=this._rBlock,this._rBlock=S,v.call(this,1,1431655765),g.call(this,8,16711935),g.call(this,2,858993459),v.call(this,16,65535),v.call(this,4,252645135),d[_]=this._lBlock,d[_+1]=this._rBlock},keySize:64/32,ivSize:64/32,blockSize:64/32});function v(d,_){var x=(this._lBlock>>>d^this._rBlock)&_;this._rBlock^=x,this._lBlock^=x<<d}function g(d,_){var x=(this._rBlock>>>d^this._lBlock)&_;this._lBlock^=x,this._rBlock^=x<<d}n.DES=o._createHelper(p);var m=a.TripleDES=o.extend({_doReset:function(){var d=this._key,_=d.words;if(_.length!==2&&_.length!==4&&_.length<6)throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");var x=_.slice(0,2),y=_.length<4?_.slice(0,2):_.slice(2,4),b=_.length<6?_.slice(0,2):_.slice(4,6);this._des1=p.createEncryptor(s.create(x)),this._des2=p.createEncryptor(s.create(y)),this._des3=p.createEncryptor(s.create(b))},encryptBlock:function(d,_){this._des1.encryptBlock(d,_),this._des2.decryptBlock(d,_),this._des3.encryptBlock(d,_)},decryptBlock:function(d,_){this._des3.decryptBlock(d,_),this._des2.encryptBlock(d,_),this._des1.decryptBlock(d,_)},keySize:192/32,ivSize:64/32,blockSize:64/32});n.TripleDES=o._createHelper(m)}(),t.TripleDES})}(ea)),ea.exports}var ta={exports:{}},jc;function Gv(){return jc||(jc=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),Ri(),Pi(),qn(),mt())})(Ge,function(t){return function(){var n=t,r=n.lib,s=r.StreamCipher,o=n.algo,a=o.RC4=s.extend({_doReset:function(){for(var u=this._key,h=u.words,f=u.sigBytes,p=this._S=[],v=0;v<256;v++)p[v]=v;for(var v=0,g=0;v<256;v++){var m=v%f,d=h[m>>>2]>>>24-m%4*8&255;g=(g+p[v]+d)%256;var _=p[v];p[v]=p[g],p[g]=_}this._i=this._j=0},_doProcessBlock:function(u,h){u[h]^=l.call(this)},keySize:256/32,ivSize:0});function l(){for(var u=this._S,h=this._i,f=this._j,p=0,v=0;v<4;v++){h=(h+1)%256,f=(f+u[h])%256;var g=u[h];u[h]=u[f],u[f]=g,p|=u[(u[h]+u[f])%256]<<24-v*8}return this._i=h,this._j=f,p}n.RC4=s._createHelper(a);var c=o.RC4Drop=a.extend({cfg:a.cfg.extend({drop:192}),_doReset:function(){a._doReset.call(this);for(var u=this.cfg.drop;u>0;u--)l.call(this)}});n.RC4Drop=s._createHelper(c)}(),t.RC4})}(ta)),ta.exports}var na={exports:{}},$c;function Vv(){return $c||($c=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),Ri(),Pi(),qn(),mt())})(Ge,function(t){return function(){var n=t,r=n.lib,s=r.StreamCipher,o=n.algo,a=[],l=[],c=[],u=o.Rabbit=s.extend({_doReset:function(){for(var f=this._key.words,p=this.cfg.iv,v=0;v<4;v++)f[v]=(f[v]<<8|f[v]>>>24)&16711935|(f[v]<<24|f[v]>>>8)&4278255360;var g=this._X=[f[0],f[3]<<16|f[2]>>>16,f[1],f[0]<<16|f[3]>>>16,f[2],f[1]<<16|f[0]>>>16,f[3],f[2]<<16|f[1]>>>16],m=this._C=[f[2]<<16|f[2]>>>16,f[0]&4294901760|f[1]&65535,f[3]<<16|f[3]>>>16,f[1]&4294901760|f[2]&65535,f[0]<<16|f[0]>>>16,f[2]&4294901760|f[3]&65535,f[1]<<16|f[1]>>>16,f[3]&4294901760|f[0]&65535];this._b=0;for(var v=0;v<4;v++)h.call(this);for(var v=0;v<8;v++)m[v]^=g[v+4&7];if(p){var d=p.words,_=d[0],x=d[1],y=(_<<8|_>>>24)&16711935|(_<<24|_>>>8)&4278255360,b=(x<<8|x>>>24)&16711935|(x<<24|x>>>8)&4278255360,T=y>>>16|b&4294901760,E=b<<16|y&65535;m[0]^=y,m[1]^=T,m[2]^=b,m[3]^=E,m[4]^=y,m[5]^=T,m[6]^=b,m[7]^=E;for(var v=0;v<4;v++)h.call(this)}},_doProcessBlock:function(f,p){var v=this._X;h.call(this),a[0]=v[0]^v[5]>>>16^v[3]<<16,a[1]=v[2]^v[7]>>>16^v[5]<<16,a[2]=v[4]^v[1]>>>16^v[7]<<16,a[3]=v[6]^v[3]>>>16^v[1]<<16;for(var g=0;g<4;g++)a[g]=(a[g]<<8|a[g]>>>24)&16711935|(a[g]<<24|a[g]>>>8)&4278255360,f[p+g]^=a[g]},blockSize:128/32,ivSize:64/32});function h(){for(var f=this._X,p=this._C,v=0;v<8;v++)l[v]=p[v];p[0]=p[0]+1295307597+this._b|0,p[1]=p[1]+3545052371+(p[0]>>>0<l[0]>>>0?1:0)|0,p[2]=p[2]+886263092+(p[1]>>>0<l[1]>>>0?1:0)|0,p[3]=p[3]+1295307597+(p[2]>>>0<l[2]>>>0?1:0)|0,p[4]=p[4]+3545052371+(p[3]>>>0<l[3]>>>0?1:0)|0,p[5]=p[5]+886263092+(p[4]>>>0<l[4]>>>0?1:0)|0,p[6]=p[6]+1295307597+(p[5]>>>0<l[5]>>>0?1:0)|0,p[7]=p[7]+3545052371+(p[6]>>>0<l[6]>>>0?1:0)|0,this._b=p[7]>>>0<l[7]>>>0?1:0;for(var v=0;v<8;v++){var g=f[v]+p[v],m=g&65535,d=g>>>16,_=((m*m>>>17)+m*d>>>15)+d*d,x=((g&4294901760)*g|0)+((g&65535)*g|0);c[v]=_^x}f[0]=c[0]+(c[7]<<16|c[7]>>>16)+(c[6]<<16|c[6]>>>16)|0,f[1]=c[1]+(c[0]<<8|c[0]>>>24)+c[7]|0,f[2]=c[2]+(c[1]<<16|c[1]>>>16)+(c[0]<<16|c[0]>>>16)|0,f[3]=c[3]+(c[2]<<8|c[2]>>>24)+c[1]|0,f[4]=c[4]+(c[3]<<16|c[3]>>>16)+(c[2]<<16|c[2]>>>16)|0,f[5]=c[5]+(c[4]<<8|c[4]>>>24)+c[3]|0,f[6]=c[6]+(c[5]<<16|c[5]>>>16)+(c[4]<<16|c[4]>>>16)|0,f[7]=c[7]+(c[6]<<8|c[6]>>>24)+c[5]|0}n.Rabbit=s._createHelper(u)}(),t.Rabbit})}(na)),na.exports}var ia={exports:{}},Jc;function Wv(){return Jc||(Jc=1,function(i,e){(function(t,n,r){i.exports=n(Ye(),Ri(),Pi(),qn(),mt())})(Ge,function(t){return function(){var n=t,r=n.lib,s=r.StreamCipher,o=n.algo,a=[],l=[],c=[],u=o.RabbitLegacy=s.extend({_doReset:function(){var f=this._key.words,p=this.cfg.iv,v=this._X=[f[0],f[3]<<16|f[2]>>>16,f[1],f[0]<<16|f[3]>>>16,f[2],f[1]<<16|f[0]>>>16,f[3],f[2]<<16|f[1]>>>16],g=this._C=[f[2]<<16|f[2]>>>16,f[0]&4294901760|f[1]&65535,f[3]<<16|f[3]>>>16,f[1]&4294901760|f[2]&65535,f[0]<<16|f[0]>>>16,f[2]&4294901760|f[3]&65535,f[1]<<16|f[1]>>>16,f[3]&4294901760|f[0]&65535];this._b=0;for(var m=0;m<4;m++)h.call(this);for(var m=0;m<8;m++)g[m]^=v[m+4&7];if(p){var d=p.words,_=d[0],x=d[1],y=(_<<8|_>>>24)&16711935|(_<<24|_>>>8)&4278255360,b=(x<<8|x>>>24)&16711935|(x<<24|x>>>8)&4278255360,T=y>>>16|b&4294901760,E=b<<16|y&65535;g[0]^=y,g[1]^=T,g[2]^=b,g[3]^=E,g[4]^=y,g[5]^=T,g[6]^=b,g[7]^=E;for(var m=0;m<4;m++)h.call(this)}},_doProcessBlock:function(f,p){var v=this._X;h.call(this),a[0]=v[0]^v[5]>>>16^v[3]<<16,a[1]=v[2]^v[7]>>>16^v[5]<<16,a[2]=v[4]^v[1]>>>16^v[7]<<16,a[3]=v[6]^v[3]>>>16^v[1]<<16;for(var g=0;g<4;g++)a[g]=(a[g]<<8|a[g]>>>24)&16711935|(a[g]<<24|a[g]>>>8)&4278255360,f[p+g]^=a[g]},blockSize:128/32,ivSize:64/32});function h(){for(var f=this._X,p=this._C,v=0;v<8;v++)l[v]=p[v];p[0]=p[0]+1295307597+this._b|0,p[1]=p[1]+3545052371+(p[0]>>>0<l[0]>>>0?1:0)|0,p[2]=p[2]+886263092+(p[1]>>>0<l[1]>>>0?1:0)|0,p[3]=p[3]+1295307597+(p[2]>>>0<l[2]>>>0?1:0)|0,p[4]=p[4]+3545052371+(p[3]>>>0<l[3]>>>0?1:0)|0,p[5]=p[5]+886263092+(p[4]>>>0<l[4]>>>0?1:0)|0,p[6]=p[6]+1295307597+(p[5]>>>0<l[5]>>>0?1:0)|0,p[7]=p[7]+3545052371+(p[6]>>>0<l[6]>>>0?1:0)|0,this._b=p[7]>>>0<l[7]>>>0?1:0;for(var v=0;v<8;v++){var g=f[v]+p[v],m=g&65535,d=g>>>16,_=((m*m>>>17)+m*d>>>15)+d*d,x=((g&4294901760)*g|0)+((g&65535)*g|0);c[v]=_^x}f[0]=c[0]+(c[7]<<16|c[7]>>>16)+(c[6]<<16|c[6]>>>16)|0,f[1]=c[1]+(c[0]<<8|c[0]>>>24)+c[7]|0,f[2]=c[2]+(c[1]<<16|c[1]>>>16)+(c[0]<<16|c[0]>>>16)|0,f[3]=c[3]+(c[2]<<8|c[2]>>>24)+c[1]|0,f[4]=c[4]+(c[3]<<16|c[3]>>>16)+(c[2]<<16|c[2]>>>16)|0,f[5]=c[5]+(c[4]<<8|c[4]>>>24)+c[3]|0,f[6]=c[6]+(c[5]<<16|c[5]>>>16)+(c[4]<<16|c[4]>>>16)|0,f[7]=c[7]+(c[6]<<8|c[6]>>>24)+c[5]|0}n.RabbitLegacy=s._createHelper(u)}(),t.RabbitLegacy})}(ia)),ia.exports}(function(i,e){(function(t,n,r){i.exports=n(Ye(),Hr(),Mv(),Ev(),Ri(),bv(),Pi(),Na(),Xl(),Tv(),ql(),Av(),wv(),Cv(),Fa(),Rv(),qn(),mt(),Pv(),Lv(),Dv(),Uv(),Iv(),Nv(),Fv(),Ov(),Bv(),zv(),Hv(),Vl,kv(),Gv(),Vv(),Wv())})(Ge,function(t){return t})})(Wl);var Xv=Wl.exports;const fi=kl(Xv);class qv{constructor(){this.secretkey="secretkey123"}getvABufferShader(){var e=null;e=_t.encrypt(vc,this.secretkey).toString();var t=_t.decrypt(e,this.secretkey),n=t.toString(fi.enc.Utf8);return n}getfABufferShader(){var e=null;e=_t.encrypt(xc,this.secretkey).toString();var t=_t.decrypt(e,this.secretkey),n=t.toString(fi.enc.Utf8);return n}getvBBufferShader(){var e=null;e=_t.encrypt(gc,this.secretkey).toString();var t=_t.decrypt(e,this.secretkey),n=t.toString(fi.enc.Utf8);return n}getfBBufferShader(){var e=null;e=_t.encrypt(_c,this.secretkey).toString();var t=_t.decrypt(e,this.secretkey),n=t.toString(fi.enc.Utf8);return n}getvBkShader(){var e=null;e=_t.encrypt(mv,this.secretkey).toString();var t=_t.decrypt(e,this.secretkey),n=t.toString(fi.enc.Utf8);return n}getfBkShader(){var e=null;e=_t.encrypt(vv,this.secretkey).toString();var t=_t.decrypt(e,this.secretkey),n=t.toString(fi.enc.Utf8);return n}makebuild(){var e=_t.encrypt(vc,this.secretkey).toString(),t=_t.encrypt(xc,this.secretkey).toString(),n=_t.encrypt(gc,this.secretkey).toString(),r=_t.encrypt(_c,this.secretkey).toString();e="export  const vABufferShader=`"+e+"`;",t="export const fABufferShader=`"+t+"`;",n="export const vBBufferShader=`"+n+"`;",r="export const fBBufferShader=`"+r+"`;",console.log(`makebuild ==== compelte!!!
`);var s=e+t+n+r;return s}}let Li=new qv;var Yv=Li.getvABufferShader(),Kv=Li.getfABufferShader(),Zv=Li.getvBBufferShader(),jv=Li.getfBBufferShader(),$v=Li.getvBkShader(),Jv=Li.getfBkShader(),Qc=new ov,Nt,qt=new de(window.innerWidth,0),Oa=!1,fn=0,nt=new Date;new Qe(nt.getFullYear(),nt.getMonth(),nt.getDate(),nt.getDay());var Qv=25e-5,ut=700,pt=700,Xi=0,el,ga,Nr,ra,On,tl,_a,er,vi,un,nl={minFilter:ft,stencilBuffer:!1,depthBuffer:!1,generateMipmaps:!1},yt,Ai,Zt,Bi=new de,xi=[],gi=[],sa;function ex(){console.log("threejs startup log: winddow = ",window.innerWidth,window.innerHeight),Nt=new Dl,Nt.setSize(ut,pt),document.body.appendChild(Nt.domElement),Nt.getDrawingBufferSize(Bi),Zt=new vn(Bi.x,Bi.y,nl),Zt.wrapS=wt,Zt.wrapT=wt,Zt.minFilter=ft,Zt.magFilter=St,Zt.stencilBuffer=!1,Zt.depthBuffer=!1,ga=new _s,Nr=new Rt(1,ut/pt,1,1e6);const i=new tv;i.setPath("textures/skybox/"),ra=i.load(["space_ft.jpg","space_bk.jpg","space_up.jpg","space_dn.jpg","space_rt.jpg","space_lf.jpg"]);const e=new nv;e.setPath("textures/skybox/");var t=e.load("channel1.jpg");t.magFilter=ft,t.minFilter=ft,t.wrapS=qi,t.wrapT=qi,t.repeat.set(4,4),On=new zt({side:Mt,uniforms:{iChannel0:{value:ra},iChannel1:{value:t},iResolution:{value:new z(ut,pt,2e3)},iMouse:{value:new de(ut,0)},iTime:{value:fn},iDate:{value:new Qe(nt.getFullYear(),nt.getMonth(),nt.getDate(),nt.getDay())},iMode:{value:0}},vertexShader:Yv,fragmentShader:Kv});var n=new dn(ut,pt,2500);el=new Ct(n,On),ga.add(el),_a=new _s,er=new Rt(1,ut/pt,1,1e6),un=new vn(Bi.x,Bi.y,nl),un.wrapS=wt,un.wrapT=wt,un.minFilter=ft,un.magFilter=ft,un.stencilBuffer=!1,un.depthBuffer=!1,vi=new zt({side:Mt,uniforms:{iChannelA0:{value:ra},iChannelA1:{value:t},iChannel0FromA:{value:un.texture},iResolution:{value:new z(ut,pt,2e3)},iMouse:{value:new de(0,0)},iTime:{value:fn},iDate:{value:new Qe(nt.getFullYear(),nt.getMonth(),nt.getDate(),nt.getDay())},iMode:{value:0}},vertexShader:Zv,fragmentShader:jv});var r=new dn(ut,pt,2500);tl=new Ct(r,vi),_a.add(tl),new uv(er,Nt.domElement),yt=new _s,Ai=new Rt(5,ut/pt,1,1e6),Ai.position.z=100;var s=new zt({side:Bt,uniforms:{iChannelUI:{value:Zt.texture},iResolution:{value:new z(ut,pt,1)}},vertexShader:$v,fragmentShader:Jv});yt.background=Zt.texture;var o=new dn(ut,pt,2500),a=new Ct(o,s);yt.add(a);var l=new jm({color:33008});l.side=mn,sa=new av(0,1e5),sa.position.set(2,5,0),yt.add(sa);var c=new Ct(new dn(10,1,1),l);c.position.set(0,-4,0),c.name="meshbutton1",c.material.transparent=!0,c.material.opacity=.4,yt.add(c);var u=new fv;const h=`
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
  `,f=`
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
    float angle = angleTime(iTime*30.);
    float anglelen = PI*2.0 / 0.8;
    // //right->left
    // if(angleWorldPoint() < angle)
    // {
    //   color = pattern(uv);
    //   r = 1.;
    // }

    //left->right
    float wa = angleWorldPoint();
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
    if(fragColor.w == 0.) discard;
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
  vec3 lightpos = vec3(0., 2., 0.);
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
  `,v=`
  varying vec4 fragColor;

  void main(void)
  {
    gl_FragColor = fragColor;
  }
  `;function g(d,_,x,y,b){gi.push(new zt({side:Bt,uniforms:{iResolution:{value:new z(ut,pt,1)},iTime:{value:fn},iMouse:{value:qt},iMatrix:{value:{}},iFontsize:{value:x},iPosition:{value:y}},vertexShader:h,fragmentShader:f})),xi.push(new zt({side:Bt,uniforms:{iResolution:{value:new z(ut,pt,1)},iTime:{value:fn},iMouse:{value:qt},iMatrix:{value:{}},iFontsize:{value:.8},iPosition:{value:y}},vertexShader:p,fragmentShader:v}));const T=new mc(b,{font:_,size:x,height:x+.6,curveSegments:20,bevelEnabled:!0,bevelThickness:x*.5,bevelSize:x/10,bevelOffset:0,bevelSegments:20});var E=new Ct(T,xi[gi.length-1]);return E.position.set(y.x,y.y,y.z),d.add(E),E}function m(d,_,x,y,b,T){const E=new mc(T,{font:_,size:x,height:x+.6,curveSegments:10});var P=new Ct(E,b);return P.position.set(y.x,y.y,y.z),d.add(P),P}u.load("public/fonts/helvetiker_bold.typeface.json",function(d){m(yt,d,.2,new z(-3.3,-3.9,0),new Aa({color:16756768,wireframe:!1}),`  This is not a Video & not 3D animation & Effect, 
 AR Vision by GLSL from msapple0338@gmail.com`);var _=-3,x=.8,y=.2;g(yt,d,x,new z(_,2,0),"A"),_+=x+y,g(yt,d,x,new z(_,2,0),"R"),_+=x+y*2,g(yt,d,x,new z(_,2,0),"V"),_+=x,g(yt,d,x,new z(_,2,0),"i"),_+=x/2,g(yt,d,x,new z(_,2,0),"s"),_+=x,g(yt,d,x,new z(_,2,0),"i"),_+=x/2,g(yt,d,x,new z(_,2,0),"o"),_+=x,g(yt,d,x,new z(_,2,0),"n")})}qt=new de;document.addEventListener("mousemove",ax,!1);document.addEventListener("mousedown",ox,!1);document.addEventListener("mouseup",sx,!1);document.addEventListener("keydown",rx,!1);document.addEventListener("resize",ix);window.addEventListener("pointerdown",tx);const aa=new de;function tx(i){aa.x=i.clientX/ut*2-1,aa.y=-(i.clientY/pt)*2+1,Qc.setFromCamera(aa,Ai);for(var e=Qc.intersectObjects(yt.children,!0),t=0;t<e.length;t++)e[t].object.name=="meshbutton1"&&nx()}function nx(){console.log("onMeshButton1 click iMode = ",Xi),Xi=(Xi+1)%2}function ix(){Nt.setSize(ut,pt),Nr.aspect=pt/ut,Nr.updateProjectionMatrix(),er.aspect=pt/ut,er.updateProjectionMatrix(),Ai.aspect=pt/ut,Ai.updateProjectionMatrix()}function rx(i){new z}function sx(i){Oa=!1}function ax(i){i.preventDefault(),Oa&&(qt.x=i.x,qt.y=-i.y)}function ox(i){qt.x=i.x,qt.y=-i.y,Oa=!0}function cx(){if(On!=null){if(nt=new Date,On.uniforms.iMode.value=Xi,On.uniforms.iMouse.value=qt,On.uniforms.iTime.value=fn,On.uniforms.iDate.value=new Qe(nt.getFullYear(),nt.getMonth(),nt.getDate(),nt.getDay()),vi.uniforms.iMode.value=Xi,vi.uniforms.iMouse.value=qt,vi.uniforms.iTime.value=fn,vi.uniforms.iDate.value=new Qe(nt.getFullYear(),nt.getMonth(),nt.getDate(),nt.getDay()),xi!=null)for(var i=0;i<xi.length;i++)xi[i].uniforms.iTime.value=fn*3,xi[i].uniforms.iMouse.value=qt;if(gi!=null)for(var i=0;i<gi.length;i++)gi[i].uniforms.iTime.value=fn*3+500*i,gi[i].uniforms.iMouse.value=qt;fn+=Qv}}function Yl(){cx(),requestAnimationFrame(Yl),Nt.clear(),Nt.setRenderTarget(un),Nt.render(ga,Nr),Nt.setRenderTarget(Zt),Nt.render(_a,er),Nt.setRenderTarget(null),Nt.render(yt,Ai)}ex();Yl();
