import{a as fe,i as oe,c as ce,f as le,s as he,S as de,t as H,j as ue}from"./index-52af64fe.js";import{c as ve,g as _e}from"./_commonjsHelpers-72a828de.js";(function(){try{var d=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},g=new Error().stack;g&&(d._sentryDebugIds=d._sentryDebugIds||{},d._sentryDebugIds[g]="fbfd2cfe-ece2-488d-afd8-a79638a253b4",d._sentryDebugIdIdentifier="sentry-dbid-fbfd2cfe-ece2-488d-afd8-a79638a253b4")}catch{}})();var j={exports:{}};(function(d,g){(function(m,B){d.exports=B()})(ve,function(){var m=function(){},B=Object.prototype.hasOwnProperty,v=Array.prototype.slice;function y(t,e){var i;return typeof Object.create=="function"?i=Object.create(t):(m.prototype=t,i=new m,m.prototype=null),e&&p(!0,i,e),i}function k(t,e,i,a){var r=this;return typeof t!="string"&&(a=i,i=e,e=t,t=null),typeof e!="function"&&(a=i,i=e,e=function(){return r.apply(this,arguments)}),p(!1,e,r,a),e.prototype=y(r.prototype,i),e.prototype.constructor=e,e.class_=t||r.class_,e.super_=r,e}function p(t,e,i){i=v.call(arguments,2);for(var a,r,s=0,x=i.length;s<x;s++){r=i[s];for(a in r)(!t||B.call(r,a))&&(e[a]=r[a])}}var O=k;function w(){}w.class_="Nevis",w.super_=Object,w.extend=O;var S=w,o=S,q=o.extend(function(t,e,i){this.qrious=t,this.element=e,this.element.qrious=t,this.enabled=!!i},{draw:function(t){},getElement:function(){return this.enabled||(this.enabled=!0,this.render()),this.element},getModuleSize:function(t){var e=this.qrious,i=e.padding||0,a=Math.floor((e.size-i*2)/t.width);return Math.max(1,a)},getOffset:function(t){var e=this.qrious,i=e.padding;if(i!=null)return i;var a=this.getModuleSize(t),r=Math.floor((e.size-a*t.width)/2);return Math.max(0,r)},render:function(t){this.enabled&&(this.resize(),this.reset(),this.draw(t))},reset:function(){},resize:function(){}}),A=q,T=A.extend({draw:function(t){var e,i,a=this.qrious,r=this.getModuleSize(t),s=this.getOffset(t),x=this.element.getContext("2d");for(x.fillStyle=a.foreground,x.globalAlpha=a.foregroundAlpha,e=0;e<t.width;e++)for(i=0;i<t.width;i++)t.buffer[i*t.width+e]&&x.fillRect(r*e+s,r*i+s,r,r)},reset:function(){var t=this.qrious,e=this.element.getContext("2d"),i=t.size;e.lineWidth=1,e.clearRect(0,0,i,i),e.fillStyle=t.background,e.globalAlpha=t.backgroundAlpha,e.fillRect(0,0,i,i)},resize:function(){var t=this.element;t.width=t.height=this.qrious.size}}),D=T,z=o.extend(null,{BLOCK:[0,11,15,19,23,27,31,16,18,20,22,24,26,28,20,22,24,24,26,28,28,22,24,24,26,26,28,28,24,24,26,26,26,28,28,24,26,26,26,28,28]}),I=z,$=o.extend(null,{BLOCKS:[1,0,19,7,1,0,16,10,1,0,13,13,1,0,9,17,1,0,34,10,1,0,28,16,1,0,22,22,1,0,16,28,1,0,55,15,1,0,44,26,2,0,17,18,2,0,13,22,1,0,80,20,2,0,32,18,2,0,24,26,4,0,9,16,1,0,108,26,2,0,43,24,2,2,15,18,2,2,11,22,2,0,68,18,4,0,27,16,4,0,19,24,4,0,15,28,2,0,78,20,4,0,31,18,2,4,14,18,4,1,13,26,2,0,97,24,2,2,38,22,4,2,18,22,4,2,14,26,2,0,116,30,3,2,36,22,4,4,16,20,4,4,12,24,2,2,68,18,4,1,43,26,6,2,19,24,6,2,15,28,4,0,81,20,1,4,50,30,4,4,22,28,3,8,12,24,2,2,92,24,6,2,36,22,4,6,20,26,7,4,14,28,4,0,107,26,8,1,37,22,8,4,20,24,12,4,11,22,3,1,115,30,4,5,40,24,11,5,16,20,11,5,12,24,5,1,87,22,5,5,41,24,5,7,24,30,11,7,12,24,5,1,98,24,7,3,45,28,15,2,19,24,3,13,15,30,1,5,107,28,10,1,46,28,1,15,22,28,2,17,14,28,5,1,120,30,9,4,43,26,17,1,22,28,2,19,14,28,3,4,113,28,3,11,44,26,17,4,21,26,9,16,13,26,3,5,107,28,3,13,41,26,15,5,24,30,15,10,15,28,4,4,116,28,17,0,42,26,17,6,22,28,19,6,16,30,2,7,111,28,17,0,46,28,7,16,24,30,34,0,13,24,4,5,121,30,4,14,47,28,11,14,24,30,16,14,15,30,6,4,117,30,6,14,45,28,11,16,24,30,30,2,16,30,8,4,106,26,8,13,47,28,7,22,24,30,22,13,15,30,10,2,114,28,19,4,46,28,28,6,22,28,33,4,16,30,8,4,122,30,22,3,45,28,8,26,23,30,12,28,15,30,3,10,117,30,3,23,45,28,4,31,24,30,11,31,15,30,7,7,116,30,21,7,45,28,1,37,23,30,19,26,15,30,5,10,115,30,19,10,47,28,15,25,24,30,23,25,15,30,13,3,115,30,2,29,46,28,42,1,24,30,23,28,15,30,17,0,115,30,10,23,46,28,10,35,24,30,19,35,15,30,17,1,115,30,14,21,46,28,29,19,24,30,11,46,15,30,13,6,115,30,14,23,46,28,44,7,24,30,59,1,16,30,12,7,121,30,12,26,47,28,39,14,24,30,22,41,15,30,6,14,121,30,6,34,47,28,46,10,24,30,2,64,15,30,17,4,122,30,29,14,46,28,49,10,24,30,24,46,15,30,4,18,122,30,13,32,46,28,48,14,24,30,42,32,15,30,20,4,117,30,40,7,47,28,43,22,24,30,10,67,15,30,19,6,118,30,18,31,47,28,34,34,24,30,20,61,15,30],FINAL_FORMAT:[30660,29427,32170,30877,26159,25368,27713,26998,21522,20773,24188,23371,17913,16590,20375,19104,13663,12392,16177,14854,9396,8579,11994,11245,5769,5054,7399,6608,1890,597,3340,2107],LEVELS:{L:1,M:2,Q:3,H:4}}),M=$,P=o.extend(null,{EXPONENT:[1,2,4,8,16,32,64,128,29,58,116,232,205,135,19,38,76,152,45,90,180,117,234,201,143,3,6,12,24,48,96,192,157,39,78,156,37,74,148,53,106,212,181,119,238,193,159,35,70,140,5,10,20,40,80,160,93,186,105,210,185,111,222,161,95,190,97,194,153,47,94,188,101,202,137,15,30,60,120,240,253,231,211,187,107,214,177,127,254,225,223,163,91,182,113,226,217,175,67,134,17,34,68,136,13,26,52,104,208,189,103,206,129,31,62,124,248,237,199,147,59,118,236,197,151,51,102,204,133,23,46,92,184,109,218,169,79,158,33,66,132,21,42,84,168,77,154,41,82,164,85,170,73,146,57,114,228,213,183,115,230,209,191,99,198,145,63,126,252,229,215,179,123,246,241,255,227,219,171,75,150,49,98,196,149,55,110,220,165,87,174,65,130,25,50,100,200,141,7,14,28,56,112,224,221,167,83,166,81,162,89,178,121,242,249,239,195,155,43,86,172,69,138,9,18,36,72,144,61,122,244,245,247,243,251,235,203,139,11,22,44,88,176,125,250,233,207,131,27,54,108,216,173,71,142,0],LOG:[255,0,1,25,2,50,26,198,3,223,51,238,27,104,199,75,4,100,224,14,52,141,239,129,28,193,105,248,200,8,76,113,5,138,101,47,225,36,15,33,53,147,142,218,240,18,130,69,29,181,194,125,106,39,249,185,201,154,9,120,77,228,114,166,6,191,139,98,102,221,48,253,226,152,37,179,16,145,34,136,54,208,148,206,143,150,219,189,241,210,19,92,131,56,70,64,30,66,182,163,195,72,126,110,107,58,40,84,250,133,186,61,202,94,155,159,10,21,121,43,78,212,229,172,115,243,167,87,7,112,192,247,140,128,99,13,103,74,222,237,49,197,254,24,227,165,153,119,38,184,180,124,17,68,146,217,35,32,137,46,55,63,209,91,149,188,207,205,144,135,151,178,220,252,190,97,242,86,211,171,20,42,93,158,132,60,57,83,71,109,65,162,31,45,67,216,183,123,164,118,196,23,73,236,127,12,111,246,108,161,59,82,41,157,85,170,251,96,134,177,187,204,62,90,203,89,95,176,156,169,160,81,11,245,22,235,122,117,44,215,79,174,213,233,230,231,173,232,116,214,244,234,168,80,88,175]}),_=P,Q=o.extend(null,{BLOCK:[3220,1468,2713,1235,3062,1890,2119,1549,2344,2936,1117,2583,1330,2470,1667,2249,2028,3780,481,4011,142,3098,831,3445,592,2517,1776,2234,1951,2827,1070,2660,1345,3177]}),F=Q,c=o.extend(function(t){var e,i,a,r,s,x=t.value.length;for(this._badness=[],this._level=M.LEVELS[t.level],this._polynomial=[],this._value=t.value,this._version=0,this._stringBuffer=[];this._version<40&&(this._version++,a=(this._level-1)*4+(this._version-1)*16,r=M.BLOCKS[a++],s=M.BLOCKS[a++],e=M.BLOCKS[a++],i=M.BLOCKS[a],a=e*(r+s)+s-3+(this._version<=9),!(x<=a)););this._dataBlock=e,this._eccBlock=i,this._neccBlock1=r,this._neccBlock2=s;var n=this.width=17+4*this._version;this.buffer=c._createArray(n*n),this._ecc=c._createArray(e+(e+i)*(r+s)+s),this._mask=c._createArray((n*(n+1)+1)/2),this._insertFinders(),this._insertAlignments(),this.buffer[8+n*(n-8)]=1,this._insertTimingGap(),this._reverseMask(),this._insertTimingRowAndColumn(),this._insertVersion(),this._syncMask(),this._convertBitStream(x),this._calculatePolynomial(),this._appendEccToData(),this._interleaveBlocks(),this._pack(),this._finish()},{_addAlignment:function(t,e){var i,a=this.buffer,r=this.width;for(a[t+r*e]=1,i=-2;i<2;i++)a[t+i+r*(e-2)]=1,a[t-2+r*(e+i+1)]=1,a[t+2+r*(e+i)]=1,a[t+i+1+r*(e+2)]=1;for(i=0;i<2;i++)this._setMask(t-1,e+i),this._setMask(t+1,e-i),this._setMask(t-i,e-1),this._setMask(t+i,e+1)},_appendData:function(t,e,i,a){var r,s,x,n=this._polynomial,f=this._stringBuffer;for(s=0;s<a;s++)f[i+s]=0;for(s=0;s<e;s++){if(r=_.LOG[f[t+s]^f[i]],r!==255)for(x=1;x<a;x++)f[i+x-1]=f[i+x]^_.EXPONENT[c._modN(r+n[a-x])];else for(x=i;x<i+a;x++)f[x]=f[x+1];f[i+a-1]=r===255?0:_.EXPONENT[c._modN(r+n[0])]}},_appendEccToData:function(){var t,e=0,i=this._dataBlock,a=this._calculateMaxLength(),r=this._eccBlock;for(t=0;t<this._neccBlock1;t++)this._appendData(e,i,a,r),e+=i,a+=r;for(t=0;t<this._neccBlock2;t++)this._appendData(e,i+1,a,r),e+=i+1,a+=r},_applyMask:function(t){var e,i,a,r,s=this.buffer,x=this.width;switch(t){case 0:for(r=0;r<x;r++)for(a=0;a<x;a++)!(a+r&1)&&!this._isMasked(a,r)&&(s[a+r*x]^=1);break;case 1:for(r=0;r<x;r++)for(a=0;a<x;a++)!(r&1)&&!this._isMasked(a,r)&&(s[a+r*x]^=1);break;case 2:for(r=0;r<x;r++)for(e=0,a=0;a<x;a++,e++)e===3&&(e=0),!e&&!this._isMasked(a,r)&&(s[a+r*x]^=1);break;case 3:for(i=0,r=0;r<x;r++,i++)for(i===3&&(i=0),e=i,a=0;a<x;a++,e++)e===3&&(e=0),!e&&!this._isMasked(a,r)&&(s[a+r*x]^=1);break;case 4:for(r=0;r<x;r++)for(e=0,i=r>>1&1,a=0;a<x;a++,e++)e===3&&(e=0,i=!i),!i&&!this._isMasked(a,r)&&(s[a+r*x]^=1);break;case 5:for(i=0,r=0;r<x;r++,i++)for(i===3&&(i=0),e=0,a=0;a<x;a++,e++)e===3&&(e=0),!((a&r&1)+!(!e|!i))&&!this._isMasked(a,r)&&(s[a+r*x]^=1);break;case 6:for(i=0,r=0;r<x;r++,i++)for(i===3&&(i=0),e=0,a=0;a<x;a++,e++)e===3&&(e=0),!((a&r&1)+(e&&e===i)&1)&&!this._isMasked(a,r)&&(s[a+r*x]^=1);break;case 7:for(i=0,r=0;r<x;r++,i++)for(i===3&&(i=0),e=0,a=0;a<x;a++,e++)e===3&&(e=0),!((e&&e===i)+(a+r&1)&1)&&!this._isMasked(a,r)&&(s[a+r*x]^=1);break}},_calculateMaxLength:function(){return this._dataBlock*(this._neccBlock1+this._neccBlock2)+this._neccBlock2},_calculatePolynomial:function(){var t,e,i=this._eccBlock,a=this._polynomial;for(a[0]=1,t=0;t<i;t++){for(a[t+1]=1,e=t;e>0;e--)a[e]=a[e]?a[e-1]^_.EXPONENT[c._modN(_.LOG[a[e]]+t)]:a[e-1];a[0]=_.EXPONENT[c._modN(_.LOG[a[0]]+t)]}for(t=0;t<=i;t++)a[t]=_.LOG[a[t]]},_checkBadness:function(){var t,e,i,a,r,s=0,x=this._badness,n=this.buffer,f=this.width;for(r=0;r<f-1;r++)for(a=0;a<f-1;a++)(n[a+f*r]&&n[a+1+f*r]&&n[a+f*(r+1)]&&n[a+1+f*(r+1)]||!(n[a+f*r]||n[a+1+f*r]||n[a+f*(r+1)]||n[a+1+f*(r+1)]))&&(s+=c.N2);var h=0;for(r=0;r<f;r++){for(i=0,x[0]=0,t=0,a=0;a<f;a++)e=n[a+f*r],t===e?x[i]++:x[++i]=1,t=e,h+=t?1:-1;s+=this._getBadness(i)}h<0&&(h=-h);var R=0,C=h;for(C+=C<<2,C<<=1;C>f*f;)C-=f*f,R++;for(s+=R*c.N4,a=0;a<f;a++){for(i=0,x[0]=0,t=0,r=0;r<f;r++)e=n[a+f*r],t===e?x[i]++:x[++i]=1,t=e;s+=this._getBadness(i)}return s},_convertBitStream:function(t){var e,i,a=this._ecc,r=this._version;for(i=0;i<t;i++)a[i]=this._value.charCodeAt(i);var s=this._stringBuffer=a.slice(),x=this._calculateMaxLength();t>=x-2&&(t=x-2,r>9&&t--);var n=t;if(r>9){for(s[n+2]=0,s[n+3]=0;n--;)e=s[n],s[n+3]|=255&e<<4,s[n+2]=e>>4;s[2]|=255&t<<4,s[1]=t>>4,s[0]=64|t>>12}else{for(s[n+1]=0,s[n+2]=0;n--;)e=s[n],s[n+2]|=255&e<<4,s[n+1]=e>>4;s[1]|=255&t<<4,s[0]=64|t>>4}for(n=t+3-(r<10);n<x;)s[n++]=236,s[n++]=17},_getBadness:function(t){var e,i=0,a=this._badness;for(e=0;e<=t;e++)a[e]>=5&&(i+=c.N1+a[e]-5);for(e=3;e<t-1;e+=2)a[e-2]===a[e+2]&&a[e+2]===a[e-1]&&a[e-1]===a[e+1]&&a[e-1]*3===a[e]&&(a[e-3]===0||e+3>t||a[e-3]*3>=a[e]*4||a[e+3]*3>=a[e]*4)&&(i+=c.N3);return i},_finish:function(){this._stringBuffer=this.buffer.slice();var t,e,i=0,a=3e4;for(e=0;e<8&&(this._applyMask(e),t=this._checkBadness(),t<a&&(a=t,i=e),i!==7);e++)this.buffer=this._stringBuffer.slice();i!==e&&this._applyMask(i),a=M.FINAL_FORMAT[i+(this._level-1<<3)];var r=this.buffer,s=this.width;for(e=0;e<8;e++,a>>=1)a&1&&(r[s-1-e+s*8]=1,e<6?r[8+s*e]=1:r[8+s*(e+1)]=1);for(e=0;e<7;e++,a>>=1)a&1&&(r[8+s*(s-7+e)]=1,e?r[6-e+s*8]=1:r[7+s*8]=1)},_interleaveBlocks:function(){var t,e,i=this._dataBlock,a=this._ecc,r=this._eccBlock,s=0,x=this._calculateMaxLength(),n=this._neccBlock1,f=this._neccBlock2,h=this._stringBuffer;for(t=0;t<i;t++){for(e=0;e<n;e++)a[s++]=h[t+e*i];for(e=0;e<f;e++)a[s++]=h[n*i+t+e*(i+1)]}for(e=0;e<f;e++)a[s++]=h[n*i+t+e*(i+1)];for(t=0;t<r;t++)for(e=0;e<n+f;e++)a[s++]=h[x+t+e*r];this._stringBuffer=a},_insertAlignments:function(){var t,e,i,a=this._version,r=this.width;if(a>1)for(t=I.BLOCK[a],i=r-7;;){for(e=r-7;e>t-3&&(this._addAlignment(e,i),!(e<t));)e-=t;if(i<=t+9)break;i-=t,this._addAlignment(6,i),this._addAlignment(i,6)}},_insertFinders:function(){var t,e,i,a,r=this.buffer,s=this.width;for(t=0;t<3;t++){for(e=0,a=0,t===1&&(e=s-7),t===2&&(a=s-7),r[a+3+s*(e+3)]=1,i=0;i<6;i++)r[a+i+s*e]=1,r[a+s*(e+i+1)]=1,r[a+6+s*(e+i)]=1,r[a+i+1+s*(e+6)]=1;for(i=1;i<5;i++)this._setMask(a+i,e+1),this._setMask(a+1,e+i+1),this._setMask(a+5,e+i),this._setMask(a+i+1,e+5);for(i=2;i<4;i++)r[a+i+s*(e+2)]=1,r[a+2+s*(e+i+1)]=1,r[a+4+s*(e+i)]=1,r[a+i+1+s*(e+4)]=1}},_insertTimingGap:function(){var t,e,i=this.width;for(e=0;e<7;e++)this._setMask(7,e),this._setMask(i-8,e),this._setMask(7,e+i-7);for(t=0;t<8;t++)this._setMask(t,7),this._setMask(t+i-8,7),this._setMask(t,i-8)},_insertTimingRowAndColumn:function(){var t,e=this.buffer,i=this.width;for(t=0;t<i-14;t++)t&1?(this._setMask(8+t,6),this._setMask(6,8+t)):(e[8+t+i*6]=1,e[6+i*(8+t)]=1)},_insertVersion:function(){var t,e,i,a,r=this.buffer,s=this._version,x=this.width;if(s>6)for(t=F.BLOCK[s-7],e=17,i=0;i<6;i++)for(a=0;a<3;a++,e--)1&(e>11?s>>e-12:t>>e)?(r[5-i+x*(2-a+x-11)]=1,r[2-a+x-11+x*(5-i)]=1):(this._setMask(5-i,2-a+x-11),this._setMask(2-a+x-11,5-i))},_isMasked:function(t,e){var i=c._getMaskBit(t,e);return this._mask[i]===1},_pack:function(){var t,e,i,a=1,r=1,s=this.width,x=s-1,n=s-1,f=(this._dataBlock+this._eccBlock)*(this._neccBlock1+this._neccBlock2)+this._neccBlock2;for(e=0;e<f;e++)for(t=this._stringBuffer[e],i=0;i<8;i++,t<<=1){128&t&&(this.buffer[x+s*n]=1);do r?x--:(x++,a?n!==0?n--:(x-=2,a=!a,x===6&&(x--,n=9)):n!==s-1?n++:(x-=2,a=!a,x===6&&(x--,n-=8))),r=!r;while(this._isMasked(x,n))}},_reverseMask:function(){var t,e,i=this.width;for(t=0;t<9;t++)this._setMask(t,8);for(t=0;t<8;t++)this._setMask(t+i-8,8),this._setMask(8,t);for(e=0;e<7;e++)this._setMask(8,e+i-7)},_setMask:function(t,e){var i=c._getMaskBit(t,e);this._mask[i]=1},_syncMask:function(){var t,e,i=this.width;for(e=0;e<i;e++)for(t=0;t<=e;t++)this.buffer[t+i*e]&&this._setMask(t,e)}},{_createArray:function(t){var e,i=[];for(e=0;e<t;e++)i[e]=0;return i},_getMaskBit:function(t,e){var i;return t>e&&(i=t,t=e,e=i),i=e,i+=e*e,i>>=1,i+=t,i},_modN:function(t){for(;t>=255;)t-=255,t=(t>>8)+(t&255);return t},N1:3,N2:3,N3:40,N4:10}),G=c,U=A.extend({draw:function(){this.element.src=this.qrious.toDataURL()},reset:function(){this.element.src=""},resize:function(){var t=this.element;t.width=t.height=this.qrious.size}}),K=U,X=o.extend(function(t,e,i,a){this.name=t,this.modifiable=!!e,this.defaultValue=i,this._valueTransformer=a},{transform:function(t){var e=this._valueTransformer;return typeof e=="function"?e(t,this):t}}),l=X,J=o.extend(null,{abs:function(t){return t!=null?Math.abs(t):null},hasOwn:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},noop:function(){},toUpperCase:function(t){return t!=null?t.toUpperCase():null}}),u=J,b=o.extend(function(t){this.options={},t.forEach(function(e){this.options[e.name]=e},this)},{exists:function(t){return this.options[t]!=null},get:function(t,e){return b._get(this.options[t],e)},getAll:function(t){var e,i=this.options,a={};for(e in i)u.hasOwn(i,e)&&(a[e]=b._get(i[e],t));return a},init:function(t,e,i){typeof i!="function"&&(i=u.noop);var a,r;for(a in this.options)u.hasOwn(this.options,a)&&(r=this.options[a],b._set(r,r.defaultValue,e),b._createAccessor(r,e,i));this._setAll(t,e,!0)},set:function(t,e,i){return this._set(t,e,i)},setAll:function(t,e){return this._setAll(t,e)},_set:function(t,e,i,a){var r=this.options[t];if(!r)throw new Error("Invalid option: "+t);if(!r.modifiable&&!a)throw new Error("Option cannot be modified: "+t);return b._set(r,e,i)},_setAll:function(t,e,i){if(!t)return!1;var a,r=!1;for(a in t)u.hasOwn(t,a)&&this._set(a,t[a],e,i)&&(r=!0);return r}},{_createAccessor:function(t,e,i){var a={get:function(){return b._get(t,e)}};t.modifiable&&(a.set=function(r){b._set(t,r,e)&&i(r,t)}),Object.defineProperty(e,t.name,a)},_get:function(t,e){return e["_"+t.name]},_set:function(t,e,i){var a="_"+t.name,r=i[a],s=t.transform(e??t.defaultValue);return i[a]=s,s!==r}}),W=b,Y=o.extend(function(){this._services={}},{getService:function(t){var e=this._services[t];if(!e)throw new Error("Service is not being managed with name: "+t);return e},setService:function(t,e){if(this._services[t])throw new Error("Service is already managed with name: "+t);e&&(this._services[t]=e)}}),Z=Y,E=new W([new l("background",!0,"white"),new l("backgroundAlpha",!0,1,u.abs),new l("element"),new l("foreground",!0,"black"),new l("foregroundAlpha",!0,1,u.abs),new l("level",!0,"L",u.toUpperCase),new l("mime",!0,"image/png"),new l("padding",!0,null,u.abs),new l("size",!0,100,u.abs),new l("value",!0,"")]),V=new Z,N=o.extend(function(t){E.init(t,this,this.update.bind(this));var e=E.get("element",this),i=V.getService("element"),a=e&&i.isCanvas(e)?e:i.createCanvas(),r=e&&i.isImage(e)?e:i.createImage();this._canvasRenderer=new D(this,a,!0),this._imageRenderer=new K(this,r,r===e),this.update()},{get:function(){return E.getAll(this)},set:function(t){E.setAll(t,this)&&this.update()},toDataURL:function(t){return this.canvas.toDataURL(t||this.mime)},update:function(){var t=new G({level:this.level,value:this.value});this._canvasRenderer.render(t),this._imageRenderer.render(t)}},{use:function(t){V.setService(t.getName(),t)}});Object.defineProperties(N.prototype,{canvas:{get:function(){return this._canvasRenderer.getElement()}},image:{get:function(){return this._imageRenderer.getElement()}}});var ee=N,L=ee,te=o.extend({getName:function(){}}),ie=te,ae=ie.extend({createCanvas:function(){},createImage:function(){},getName:function(){return"element"},isCanvas:function(t){},isImage:function(t){}}),re=ae,se=re.extend({createCanvas:function(){return document.createElement("canvas")},createImage:function(){return document.createElement("img")},isCanvas:function(t){return t instanceof HTMLCanvasElement},isImage:function(t){return t instanceof HTMLImageElement}}),xe=se;L.use(new xe);var ne=L;return ne})})(j);var be=j.exports;const me=_e(be),pe=H('<div class="flex relative"><input type="checkbox" class="peer hidden" id="showQrCode"><label class="cursor-pointer peer-checked:bg-blue-100 rounded p-1 shadow" for="showQrCode"><svg fill="#000000" class="h-6 w-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4,4h6v6H4V4M20,4v6H14V4h6M14,15h2V13H14V11h2v2h2V11h2v2H18v2h2v3H18v2H16V18H13v2H11V16h3V15m2,0v3h2V15H16M4,20V14h6v6H4M6,6V8H8V6H6M16,6V8h2V6H16M6,16v2H8V16H6M4,11H6v2H4V11m5,0h4v4H11V13H9V11m2-5h2v4H11V6M2,2V6H0V2A2,2,0,0,1,2,0H6V2H2M22,0a2,2,0,0,1,2,2V6H22V2H18V0h4M2,18v4H6v2H2a2,2,0,0,1-2-2V18H2m20,4V18h2v4a2,2,0,0,1-2,2H18V22Z"></path></svg></label><div class="peer-checked:block peer-hover:block hidden absolute left-10"><img class="w-24 h-24">'),ge=H('<main class="text-center mx-auto text-gray-700 p-4"><h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">QR Code</h1><form class="flex flex-col"><label>Realm<input type="text" name="realm" class="border"></label><label>Username<input type="text" name="username" class="border"></label><label>Password<input type="text" name="password" class="border"></label><button>Submit');function Me(){const[d,g]=fe(),m=v=>{v.preventDefault();const y=new FormData(v.currentTarget),k=JSON.stringify(Object.fromEntries(y)),p=btoa(k),O=new me({size:500,value:`https://${window.location.hostname}/login#${p}`});g(O.toDataURL())};""+btoa(JSON.stringify({authentication:"emailPassword",realm:"365photos-qjiqh",email:"isabelle.kay@gmail.com",password:"bOO0s$17QxAMmXa5"}));const B="https://365photos.app/login#"+btoa(JSON.stringify({authentication:"emailPassword",realm:"365photos-qjiqh",email:"isabelle.kay+guest@gmail.com",password:"OFXdYfphD$TqoyXA"}));return console.log(B),(()=>{const v=ge(),y=v.firstChild,k=y.nextSibling;return k.addEventListener("change",m),k.$$input=()=>g(),oe(v,ce(de,{get when(){return d()},get children(){const p=pe(),O=p.firstChild,w=O.nextSibling,S=w.nextSibling,o=S.firstChild;return le(()=>he(o,"src",d())),p}}),null),v})()}ue(["input"]);export{Me as default};
//# sourceMappingURL=qrcode-0ab9cd41.js.map
