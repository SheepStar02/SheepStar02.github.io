import{a as g,j as F,r as ae,c as Cc,R as Dc}from"./client-9V6QpHqO.js";/* empty css              */const Ac="/assets/happy-sOpZ6stn.png",Nc="/assets/sad-RLbLw-Yg.png",xc="/assets/angry-MSN-A72e.png",kc="/assets/upset-qTbVfiwv.png",_c="/assets/pretty-qk0xEaIy.png",Rc="/assets/cuddly-DOZEO-6T.png",Oc=[{name:"Morning routine",options:[{label:"Brushed teeth",value:"morning-brushed-teeth"},{label:"Washed face",value:"morning-washed-face"},{label:"Hair and makeup",value:"morning-hair-and-makeup"},{label:"Ate breakfast",value:"morning-ate-breakfast"},{label:"Maintained clean room",value:"morning-maintained-clean-room"}]},{name:"Exercises",options:[{label:"Recovery",condition:[7],value:"exercise-recovery"},{label:"Took a walk",condition:[7],value:"exercise-took-a-walk"},{label:"Cardio (15 mins)",condition:[1,3,5],value:"exercise-cardio-(15-mins)"},{label:"Core (15 mins)",condition:[6],value:"exercise-core-(15-mins)"},{label:"Bridges",condition:[2,4],value:"exercise-bridges"},{label:"Seated ball",condition:[2,4],value:"exercise-seated-ball"},{label:"Straight leg raises",condition:[2,4],value:"exercise-straight-leg-raises"},{label:"Side lying straight leg raises",condition:[2,4],value:"exercise-side-lying-straight-leg-raises"},{label:"Leg presses inward",condition:[2,4],value:"exercise-leg-presses-inward"},{label:"Clam shells",condition:[2,4],value:"exercise-clam-shells"},{label:"Plank hold",condition:[2,4],value:"exercise-plank-hold"},{label:"Side plank hold",condition:[2,4],value:"exercise-side-plank-hold"},{label:"Pilates hold",condition:[2,4],value:"exercise-pilates-hold"},{label:"Wall sit",condition:[2,4],value:"exercise-wall-sit"}]},{name:"POTS",options:[{label:"3+ grams of salt",value:"pots-3+-grams-of-salt"},{label:"2+ litres of water",value:"pots-2+-litres-of-water"},{label:"8+ hours of sleep",value:"pots-8+-hours-of-sleep"},{label:"In bed before 11pm",value:"pots-in-bed-before-11pm"},{label:"Wore compression clothes",value:"pots-wore-compression-clothes"}]},{name:"Night time routine",options:[{label:"Brushed teeth",value:"night-brushed-teeth"},{label:"Washed face",value:"night-washed-face"},{label:"Shower",value:"night-shower"},{label:"Journaling",value:"night-journaling"}]}],Lc=[{type:"scale",question:"How did you sleep?",start:1,end:5,startText:"Shit",endText:"Amazing",id:"msc-sleep"},{type:"scale",question:"How do you think today will go?",start:1,end:5,startText:"Shit",endText:"Incredible",id:"msc-today"},{type:"scale",question:"How busy are you today?",start:1,end:5,startText:"Gaming",endText:"Ignore me",id:"msc-busy"},{type:"checklist",question:"How do you feel?",options:[{label:"Anxious",value:"anxious"},{label:"Stressed",value:"stressed"},{label:"Upset",value:"upset"},{label:"Happy",value:"happy"},{label:"Sad",value:"sad"},{label:"Guilty",value:"guilty"},{label:"Angry",value:"angry"},{label:"Scared",value:"scared"},{label:"Eepy",value:"eepy"},{label:"Tired",value:"tired"},{label:"Silly",value:"silly"},{label:"Affectionate",value:"affectionate"},{label:"Worried",value:"worried"},{label:"Excited",value:"excited"}],id:"mmc-feel"},{type:"radio",question:"Do you love me? ❤️",options:[{label:"Yes",value:"yes-1"},{label:"Yes",value:"yes-2"}],id:"mmr-love"},{type:"text",question:"What's something you're looking forward to today?",id:"mla-forward"},{type:"text",question:"What did you dream about?",id:"mla-dream"},{type:"text",question:"What's something you'd like to achieve today?",id:"mla-achieve"}],Mc=[{type:"scale",question:"How did today go?",start:1,end:5,startText:"Shit",endText:"Amazing",id:"nsc-today"},{type:"checklist",question:"How do you feel?",options:[{label:"Anxious",value:"anxious"},{label:"Stressed",value:"stressed"},{label:"Upset",value:"upset"},{label:"Happy",value:"happy"},{label:"Sad",value:"sad"},{label:"Guilty",value:"guilty"},{label:"Angry",value:"angry"},{label:"Scared",value:"scared"},{label:"Eepy",value:"eepy"},{label:"Tired",value:"tired"},{label:"Silly",value:"silly"},{label:"Affectionate",value:"affectionate"},{label:"Worried",value:"worried"},{label:"Excited",value:"excited"}],id:"nmc-feel"},{type:"radio",question:"Do you love me? ❤️",options:[{label:"Yes",value:"yes-1"},{label:"Yes",value:"yes-2"}],id:"nmr-love"},{type:"text",question:"Tell me about your day",id:"nla-day"},{type:"text",question:"What's something on your mind right now?",id:"nla-mind"}],Fc=[{label:"Happy",value:"happy",icon:Ac,color:"#c4ff0e"},{label:"Sad",value:"sad",icon:Nc,color:"#004f74"},{label:"Angry",value:"angry",icon:xc,color:"#ec1c24"},{label:"Upset",value:"upset",icon:kc,color:"#88001b"},{label:"Pretty",value:"pretty",icon:_c,color:"#ffaec8"},{label:"Cuddly",value:"cuddly",icon:Rc,color:"#b83dba"}];var Qr={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Pc=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Wi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,y=u&63;c||(y=64,o||(d=64)),s.push(n[l],n[h],n[d],n[y])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Gi(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Pc(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),u!==64){const y=a<<4&240|u>>2;if(s.push(y),h!==64){const w=u<<6&192|h;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Vc=function(t){const e=Gi(t);return Wi.encodeByteArray(e,!0)},gn=function(t){return Vc(t).replace(/\./g,"")},Uc=function(t){try{return Wi.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Bc(){try{return typeof indexedDB=="object"}catch{return!1}}function $c(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function qc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc=()=>qc().__FIREBASE_DEFAULTS__,Hc=()=>{if(typeof process>"u"||typeof Qr>"u")return;const t=Qr.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Kc=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Uc(t[1]);return e&&JSON.parse(e)},Qi=()=>{try{return jc()||Hc()||Kc()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},zc=t=>{var e,n;return(n=(e=Qi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Gc=t=>{const e=zc(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Wc=()=>{var t;return(t=Qi())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[gn(JSON.stringify(n)),gn(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc="FirebaseError";class ht extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Yc,Object.setPrototypeOf(this,ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xi.prototype.create)}}class Xi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Jc(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ht(r,a,s)}}function Jc(t,e){return t.replace(Zc,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Zc=/\{\$([^}]+)}/g;function Ss(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Xr(i)&&Xr(o)){if(!Ss(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Xr(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(t){return t&&t._delegate?t._delegate:t}class Nt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Qc;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nu(e))try{this.getOrInitializeService({instanceIdentifier:Fe})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Fe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fe){return this.instances.has(e)}getOptions(e=Fe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:tu(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Fe){return this.component?this.component.multipleInstances?e:Fe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tu(t){return t===Fe?void 0:t}function nu(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new eu(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var L;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(L||(L={}));const ru={debug:L.DEBUG,verbose:L.VERBOSE,info:L.INFO,warn:L.WARN,error:L.ERROR,silent:L.SILENT},iu=L.INFO,ou={[L.DEBUG]:"log",[L.VERBOSE]:"log",[L.INFO]:"info",[L.WARN]:"warn",[L.ERROR]:"error"},au=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=ou[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yi{constructor(e){this.name=e,this._logLevel=iu,this._logHandler=au,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in L))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ru[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,L.DEBUG,...e),this._logHandler(this,L.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,L.VERBOSE,...e),this._logHandler(this,L.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,L.INFO,...e),this._logHandler(this,L.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,L.WARN,...e),this._logHandler(this,L.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,L.ERROR,...e),this._logHandler(this,L.ERROR,...e)}}const cu=(t,e)=>e.some(n=>t instanceof n);let Yr,Jr;function uu(){return Yr||(Yr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lu(){return Jr||(Jr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ji=new WeakMap,Is=new WeakMap,Zi=new WeakMap,cs=new WeakMap,Ys=new WeakMap;function hu(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ie(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ji.set(n,t)}).catch(()=>{}),Ys.set(e,t),e}function du(t){if(Is.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Is.set(t,e)}let Cs={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Is.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Zi.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ie(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function fu(t){Cs=t(Cs)}function pu(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(us(this),e,...n);return Zi.set(s,e.sort?e.sort():[e]),Ie(s)}:lu().includes(t)?function(...e){return t.apply(us(this),e),Ie(Ji.get(this))}:function(...e){return Ie(t.apply(us(this),e))}}function gu(t){return typeof t=="function"?pu(t):(t instanceof IDBTransaction&&du(t),cu(t,uu())?new Proxy(t,Cs):t)}function Ie(t){if(t instanceof IDBRequest)return hu(t);if(cs.has(t))return cs.get(t);const e=gu(t);return e!==t&&(cs.set(t,e),Ys.set(e,t)),e}const us=t=>Ys.get(t);function mu(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Ie(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Ie(o.result),c.oldVersion,c.newVersion,Ie(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const yu=["get","getKey","getAll","getAllKeys","count"],vu=["put","add","delete","clear"],ls=new Map;function Zr(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ls.get(e))return ls.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=vu.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||yu.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return ls.set(e,i),i}fu(t=>({...t,get:(e,n,s)=>Zr(e,n)||t.get(e,n,s),has:(e,n)=>!!Zr(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Eu(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Eu(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ds="@firebase/app",ei="0.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je=new Yi("@firebase/app"),bu="@firebase/app-compat",Tu="@firebase/analytics-compat",Su="@firebase/analytics",Iu="@firebase/app-check-compat",Cu="@firebase/app-check",Du="@firebase/auth",Au="@firebase/auth-compat",Nu="@firebase/database",xu="@firebase/database-compat",ku="@firebase/functions",_u="@firebase/functions-compat",Ru="@firebase/installations",Ou="@firebase/installations-compat",Lu="@firebase/messaging",Mu="@firebase/messaging-compat",Fu="@firebase/performance",Pu="@firebase/performance-compat",Vu="@firebase/remote-config",Uu="@firebase/remote-config-compat",Bu="@firebase/storage",$u="@firebase/storage-compat",qu="@firebase/firestore",ju="@firebase/firestore-compat",Hu="firebase",Ku="9.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As="[DEFAULT]",zu={[Ds]:"fire-core",[bu]:"fire-core-compat",[Su]:"fire-analytics",[Tu]:"fire-analytics-compat",[Cu]:"fire-app-check",[Iu]:"fire-app-check-compat",[Du]:"fire-auth",[Au]:"fire-auth-compat",[Nu]:"fire-rtdb",[xu]:"fire-rtdb-compat",[ku]:"fire-fn",[_u]:"fire-fn-compat",[Ru]:"fire-iid",[Ou]:"fire-iid-compat",[Lu]:"fire-fcm",[Mu]:"fire-fcm-compat",[Fu]:"fire-perf",[Pu]:"fire-perf-compat",[Vu]:"fire-rc",[Uu]:"fire-rc-compat",[Bu]:"fire-gcs",[$u]:"fire-gcs-compat",[qu]:"fire-fst",[ju]:"fire-fst-compat","fire-js":"fire-js",[Hu]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn=new Map,Ns=new Map;function Gu(t,e){try{t.container.addComponent(e)}catch(n){je.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function yn(t){const e=t.name;if(Ns.has(e))return je.debug(`There were multiple attempts to register component ${e}.`),!1;Ns.set(e,t);for(const n of mn.values())Gu(n,t);return!0}function Wu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ce=new Xi("app","Firebase",Qu);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Nt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ce.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu=Ku;function eo(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:As,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Ce.create("bad-app-name",{appName:String(r)});if(n||(n=Wc()),!n)throw Ce.create("no-options");const i=mn.get(r);if(i){if(Ss(n,i.options)&&Ss(s,i.config))return i;throw Ce.create("duplicate-app",{appName:r})}const o=new su(r);for(const c of Ns.values())o.addComponent(c);const a=new Xu(n,s,o);return mn.set(r,a),a}function Ju(t=As){const e=mn.get(t);if(!e&&t===As)return eo();if(!e)throw Ce.create("no-app",{appName:t});return e}function et(t,e,n){var s;let r=(s=zu[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),je.warn(a.join(" "));return}yn(new Nt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu="firebase-heartbeat-database",el=1,xt="firebase-heartbeat-store";let hs=null;function to(){return hs||(hs=mu(Zu,el,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(xt)}}}).catch(t=>{throw Ce.create("idb-open",{originalErrorMessage:t.message})})),hs}async function tl(t){try{return(await to()).transaction(xt).objectStore(xt).get(no(t))}catch(e){if(e instanceof ht)je.warn(e.message);else{const n=Ce.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});je.warn(n.message)}}}async function ti(t,e){try{const s=(await to()).transaction(xt,"readwrite");return await s.objectStore(xt).put(e,no(t)),s.done}catch(n){if(n instanceof ht)je.warn(n.message);else{const s=Ce.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});je.warn(s.message)}}}function no(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl=1024,sl=30*24*60*60*1e3;class rl{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ol(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ni();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=sl}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ni(),{heartbeatsToSend:n,unsentEntries:s}=il(this._heartbeatsCache.heartbeats),r=gn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ni(){return new Date().toISOString().substring(0,10)}function il(t,e=nl){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),si(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),si(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class ol{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bc()?$c().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await tl(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ti(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ti(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function si(t){return gn(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(t){yn(new Nt("platform-logger",e=>new wu(e),"PRIVATE")),yn(new Nt("heartbeat",e=>new rl(e),"PRIVATE")),et(Ds,ei,t),et(Ds,ei,"esm2017"),et("fire-js","")}al("");var cl="firebase",ul="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */et(cl,ul,"app");var ll=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},v,Js=Js||{},I=ll||self;function vn(){}function On(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function jt(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function hl(t){return Object.prototype.hasOwnProperty.call(t,ds)&&t[ds]||(t[ds]=++dl)}var ds="closure_uid_"+(1e9*Math.random()>>>0),dl=0;function fl(t,e,n){return t.call.apply(t.bind,arguments)}function pl(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function se(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?se=fl:se=pl,se.apply(null,arguments)}function rn(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function J(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function ke(){this.s=this.s,this.o=this.o}var gl=0;ke.prototype.s=!1;ke.prototype.na=function(){!this.s&&(this.s=!0,this.M(),gl!=0)&&hl(this)};ke.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const so=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Zs(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function ri(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(On(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function re(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}re.prototype.h=function(){this.defaultPrevented=!0};var ml=function(){if(!I.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{I.addEventListener("test",vn,e),I.removeEventListener("test",vn,e)}catch{}return t}();function wn(t){return/^[\s\xa0]*$/.test(t)}var ii=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function fs(t,e){return t<e?-1:t>e?1:0}function Ln(){var t=I.navigator;return t&&(t=t.userAgent)?t:""}function de(t){return Ln().indexOf(t)!=-1}function er(t){return er[" "](t),t}er[" "]=vn;function yl(t){var e=El;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var vl=de("Opera"),st=de("Trident")||de("MSIE"),ro=de("Edge"),xs=ro||st,io=de("Gecko")&&!(Ln().toLowerCase().indexOf("webkit")!=-1&&!de("Edge"))&&!(de("Trident")||de("MSIE"))&&!de("Edge"),wl=Ln().toLowerCase().indexOf("webkit")!=-1&&!de("Edge");function oo(){var t=I.document;return t?t.documentMode:void 0}var En;e:{var ps="",gs=function(){var t=Ln();if(io)return/rv:([^\);]+)(\)|;)/.exec(t);if(ro)return/Edge\/([\d\.]+)/.exec(t);if(st)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(wl)return/WebKit\/(\S+)/.exec(t);if(vl)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(gs&&(ps=gs?gs[1]:""),st){var ms=oo();if(ms!=null&&ms>parseFloat(ps)){En=String(ms);break e}}En=ps}var El={};function bl(){return yl(function(){let t=0;const e=ii(String(En)).split("."),n=ii("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=fs(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||fs(r[2].length==0,i[2].length==0)||fs(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var ks;if(I.document&&st){var oi=oo();ks=oi||parseInt(En,10)||void 0}else ks=void 0;var Tl=ks;function kt(t,e){if(re.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(io){e:{try{er(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Sl[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&kt.X.h.call(this)}}J(kt,re);var Sl={2:"touch",3:"pen",4:"mouse"};kt.prototype.h=function(){kt.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ht="closure_listenable_"+(1e6*Math.random()|0),Il=0;function Cl(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++Il,this.ba=this.ea=!1}function Mn(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function tr(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function ao(t){const e={};for(const n in t)e[n]=t[n];return e}const ai="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function co(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<ai.length;i++)n=ai[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Fn(t){this.src=t,this.g={},this.h=0}Fn.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Rs(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Cl(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function _s(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=so(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Mn(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Rs(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var nr="closure_lm_"+(1e6*Math.random()|0),ys={};function uo(t,e,n,s,r){if(s&&s.once)return ho(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)uo(t,e[i],n,s,r);return null}return n=ir(n),t&&t[Ht]?t.N(e,n,jt(s)?!!s.capture:!!s,r):lo(t,e,n,!1,s,r)}function lo(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=jt(r)?!!r.capture:!!r,a=rr(t);if(a||(t[nr]=a=new Fn(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=Dl(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)ml||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(po(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Dl(){function t(n){return e.call(t.src,t.listener,n)}const e=Al;return t}function ho(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)ho(t,e[i],n,s,r);return null}return n=ir(n),t&&t[Ht]?t.O(e,n,jt(s)?!!s.capture:!!s,r):lo(t,e,n,!0,s,r)}function fo(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)fo(t,e[i],n,s,r);else s=jt(s)?!!s.capture:!!s,n=ir(n),t&&t[Ht]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Rs(i,n,s,r),-1<n&&(Mn(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=rr(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Rs(e,n,s,r)),(n=-1<t?e[t]:null)&&sr(n))}function sr(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Ht])_s(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(po(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=rr(e))?(_s(n,t),n.h==0&&(n.src=null,e[nr]=null)):Mn(t)}}}function po(t){return t in ys?ys[t]:ys[t]="on"+t}function Al(t,e){if(t.ba)t=!0;else{e=new kt(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&sr(t),t=n.call(s,e)}return t}function rr(t){return t=t[nr],t instanceof Fn?t:null}var vs="__closure_events_fn_"+(1e9*Math.random()>>>0);function ir(t){return typeof t=="function"?t:(t[vs]||(t[vs]=function(e){return t.handleEvent(e)}),t[vs])}function Q(){ke.call(this),this.i=new Fn(this),this.P=this,this.I=null}J(Q,ke);Q.prototype[Ht]=!0;Q.prototype.removeEventListener=function(t,e,n,s){fo(this,t,e,n,s)};function Y(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new re(e,t);else if(e instanceof re)e.target=e.target||t;else{var r=e;e=new re(s,t),co(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=on(o,s,!0,e)&&r}if(o=e.g=t,r=on(o,s,!0,e)&&r,r=on(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=on(o,s,!1,e)&&r}Q.prototype.M=function(){if(Q.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Mn(n[s]);delete t.g[e],t.h--}}this.I=null};Q.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Q.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function on(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&_s(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var or=I.JSON.stringify;function Nl(){var t=yo;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class xl{constructor(){this.h=this.g=null}add(e,n){const s=go.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var go=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new kl,t=>t.reset());class kl{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function _l(t){I.setTimeout(()=>{throw t},0)}function mo(t,e){Os||Rl(),Ls||(Os(),Ls=!0),yo.add(t,e)}var Os;function Rl(){var t=I.Promise.resolve(void 0);Os=function(){t.then(Ol)}}var Ls=!1,yo=new xl;function Ol(){for(var t;t=Nl();){try{t.h.call(t.g)}catch(n){_l(n)}var e=go;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ls=!1}function Pn(t,e){Q.call(this),this.h=t||1,this.g=e||I,this.j=se(this.lb,this),this.l=Date.now()}J(Pn,Q);v=Pn.prototype;v.ca=!1;v.R=null;v.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Y(this,"tick"),this.ca&&(ar(this),this.start()))}};v.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ar(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}v.M=function(){Pn.X.M.call(this),ar(this),delete this.g};function cr(t,e,n){if(typeof t=="function")n&&(t=se(t,n));else if(t&&typeof t.handleEvent=="function")t=se(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:I.setTimeout(t,e||0)}function vo(t){t.g=cr(()=>{t.g=null,t.i&&(t.i=!1,vo(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Ll extends ke{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:vo(this)}M(){super.M(),this.g&&(I.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _t(t){ke.call(this),this.h=t,this.g={}}J(_t,ke);var ci=[];function wo(t,e,n,s){Array.isArray(n)||(n&&(ci[0]=n.toString()),n=ci);for(var r=0;r<n.length;r++){var i=uo(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Eo(t){tr(t.g,function(e,n){this.g.hasOwnProperty(n)&&sr(e)},t),t.g={}}_t.prototype.M=function(){_t.X.M.call(this),Eo(this)};_t.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Vn(){this.g=!0}Vn.prototype.Aa=function(){this.g=!1};function Ml(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function Fl(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Ze(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Vl(t,n)+(s?" "+s:"")})}function Pl(t,e){t.info(function(){return"TIMEOUT: "+e})}Vn.prototype.info=function(){};function Vl(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return or(n)}catch{return e}}var ze={},ui=null;function Un(){return ui=ui||new Q}ze.Pa="serverreachability";function bo(t){re.call(this,ze.Pa,t)}J(bo,re);function Rt(t){const e=Un();Y(e,new bo(e))}ze.STAT_EVENT="statevent";function To(t,e){re.call(this,ze.STAT_EVENT,t),this.stat=e}J(To,re);function oe(t){const e=Un();Y(e,new To(e,t))}ze.Qa="timingevent";function So(t,e){re.call(this,ze.Qa,t),this.size=e}J(So,re);function Kt(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return I.setTimeout(function(){t()},e)}var Bn={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Io={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ur(){}ur.prototype.h=null;function li(t){return t.h||(t.h=t.i())}function Co(){}var zt={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function lr(){re.call(this,"d")}J(lr,re);function hr(){re.call(this,"c")}J(hr,re);var Ms;function $n(){}J($n,ur);$n.prototype.g=function(){return new XMLHttpRequest};$n.prototype.i=function(){return{}};Ms=new $n;function Gt(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new _t(this),this.O=Ul,t=xs?125:void 0,this.T=new Pn(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Do}function Do(){this.i=null,this.g="",this.h=!1}var Ul=45e3,Fs={},bn={};v=Gt.prototype;v.setTimeout=function(t){this.O=t};function Ps(t,e,n){t.K=1,t.v=jn(we(e)),t.s=n,t.P=!0,Ao(t,null)}function Ao(t,e){t.F=Date.now(),Wt(t),t.A=we(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Mo(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Do,t.g=na(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Ll(se(t.La,t,t.g),t.N)),wo(t.S,t.g,"readystatechange",t.ib),e=t.H?ao(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Rt(),Ml(t.j,t.u,t.A,t.m,t.U,t.s)}v.ib=function(t){t=t.target;const e=this.L;e&&ye(t)==3?e.l():this.La(t)};v.La=function(t){try{if(t==this.g)e:{const l=ye(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||xs||this.g&&(this.h.h||this.g.fa()||pi(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Rt(3):Rt(2)),qn(this);var n=this.g.aa();this.Y=n;t:if(No(this)){var s=pi(this.g);t="";var r=s.length,i=ye(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pe(this),St(this);var o="";break t}this.h.i=new I.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Fl(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!wn(a)){var u=a;break t}}u=null}if(n=u)Ze(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Vs(this,n);else{this.i=!1,this.o=3,oe(12),Pe(this),St(this);break e}}this.P?(xo(this,l,o),xs&&this.i&&l==3&&(wo(this.S,this.T,"tick",this.hb),this.T.start())):(Ze(this.j,this.m,o,null),Vs(this,o)),l==4&&Pe(this),this.i&&!this.I&&(l==4?Jo(this.l,this):(this.i=!1,Wt(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,oe(12)):(this.o=0,oe(13)),Pe(this),St(this)}}}catch{}finally{}};function No(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function xo(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=Bl(t,n),r==bn){e==4&&(t.o=4,oe(14),s=!1),Ze(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Fs){t.o=4,oe(15),Ze(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Ze(t.j,t.m,r,null),Vs(t,r);No(t)&&r!=bn&&r!=Fs&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,oe(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),vr(e),e.K=!0,oe(11))):(Ze(t.j,t.m,n,"[Invalid Chunked Response]"),Pe(t),St(t))}v.hb=function(){if(this.g){var t=ye(this.g),e=this.g.fa();this.C<e.length&&(qn(this),xo(this,t,e),this.i&&t!=4&&Wt(this))}};function Bl(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?bn:(n=Number(e.substring(n,s)),isNaN(n)?Fs:(s+=1,s+n>e.length?bn:(e=e.substr(s,n),t.C=s+n,e)))}v.cancel=function(){this.I=!0,Pe(this)};function Wt(t){t.V=Date.now()+t.O,ko(t,t.O)}function ko(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Kt(se(t.gb,t),e)}function qn(t){t.B&&(I.clearTimeout(t.B),t.B=null)}v.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(Pl(this.j,this.A),this.K!=2&&(Rt(),oe(17)),Pe(this),this.o=2,St(this)):ko(this,this.V-t)};function St(t){t.l.G==0||t.I||Jo(t.l,t)}function Pe(t){qn(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ar(t.T),Eo(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Vs(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Us(n.h,t))){if(!t.J&&Us(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)In(n),zn(n);else break e;yr(n),oe(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Kt(se(n.cb,n),6e3));if(1>=Vo(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Ve(n,11)}else if((t.J||n.g==t)&&In(n),!wn(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const y=t.g;if(y){const w=y.g?y.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var i=s.h;i.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(dr(i,i.h),i.h=null))}if(s.D){const x=y.g?y.g.getResponseHeader("X-HTTP-Session-Id"):null;x&&(s.za=x,V(s.F,s.D,x))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=ta(s,s.H?s.ka:null,s.V),o.J){Uo(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(qn(a),Wt(a)),s.g=o}else Xo(s);0<n.i.length&&Gn(n)}else u[0]!="stop"&&u[0]!="close"||Ve(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ve(n,7):mr(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Rt(4)}catch{}}function $l(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(On(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function ql(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(On(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function _o(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(On(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=ql(t),s=$l(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Ro=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jl(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Be(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Be){this.h=e!==void 0?e:t.h,Tn(this,t.j),this.s=t.s,this.g=t.g,Sn(this,t.m),this.l=t.l,e=t.i;var n=new Ot;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),hi(this,n),this.o=t.o}else t&&(n=String(t).match(Ro))?(this.h=!!e,Tn(this,n[1]||"",!0),this.s=Et(n[2]||""),this.g=Et(n[3]||"",!0),Sn(this,n[4]),this.l=Et(n[5]||"",!0),hi(this,n[6]||"",!0),this.o=Et(n[7]||"")):(this.h=!!e,this.i=new Ot(null,this.h))}Be.prototype.toString=function(){var t=[],e=this.j;e&&t.push(bt(e,di,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(bt(e,di,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(bt(n,n.charAt(0)=="/"?zl:Kl,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",bt(n,Wl)),t.join("")};function we(t){return new Be(t)}function Tn(t,e,n){t.j=n?Et(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Sn(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function hi(t,e,n){e instanceof Ot?(t.i=e,Ql(t.i,t.h)):(n||(e=bt(e,Gl)),t.i=new Ot(e,t.h))}function V(t,e,n){t.i.set(e,n)}function jn(t){return V(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Et(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function bt(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Hl),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Hl(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var di=/[#\/\?@]/g,Kl=/[#\?:]/g,zl=/[#\?]/g,Gl=/[#\?@]/g,Wl=/#/g;function Ot(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function _e(t){t.g||(t.g=new Map,t.h=0,t.i&&jl(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}v=Ot.prototype;v.add=function(t,e){_e(this),this.i=null,t=dt(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Oo(t,e){_e(t),e=dt(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Lo(t,e){return _e(t),e=dt(t,e),t.g.has(e)}v.forEach=function(t,e){_e(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};v.oa=function(){_e(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};v.W=function(t){_e(this);let e=[];if(typeof t=="string")Lo(this,t)&&(e=e.concat(this.g.get(dt(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};v.set=function(t,e){return _e(this),this.i=null,t=dt(this,t),Lo(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};v.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Mo(t,e,n){Oo(t,e),0<n.length&&(t.i=null,t.g.set(dt(t,e),Zs(n)),t.h+=n.length)}v.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function dt(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Ql(t,e){e&&!t.j&&(_e(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Oo(this,s),Mo(this,r,n))},t)),t.j=e}var Xl=class{constructor(e,n){this.h=e,this.g=n}};function Fo(t){this.l=t||Yl,I.PerformanceNavigationTiming?(t=I.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(I.g&&I.g.Ga&&I.g.Ga()&&I.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Yl=10;function Po(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Vo(t){return t.h?1:t.g?t.g.size:0}function Us(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function dr(t,e){t.g?t.g.add(e):t.h=e}function Uo(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Fo.prototype.cancel=function(){if(this.i=Bo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Bo(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Zs(t.i)}function fr(){}fr.prototype.stringify=function(t){return I.JSON.stringify(t,void 0)};fr.prototype.parse=function(t){return I.JSON.parse(t,void 0)};function Jl(){this.g=new fr}function Zl(t,e,n){const s=n||"";try{_o(t,function(r,i){let o=r;jt(r)&&(o=or(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function eh(t,e){const n=new Vn;if(I.Image){const s=new Image;s.onload=rn(an,n,s,"TestLoadImage: loaded",!0,e),s.onerror=rn(an,n,s,"TestLoadImage: error",!1,e),s.onabort=rn(an,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=rn(an,n,s,"TestLoadImage: timeout",!1,e),I.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function an(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Qt(t){this.l=t.ac||null,this.j=t.jb||!1}J(Qt,ur);Qt.prototype.g=function(){return new Hn(this.l,this.j)};Qt.prototype.i=function(t){return function(){return t}}({});function Hn(t,e){Q.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=pr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}J(Hn,Q);var pr=0;v=Hn.prototype;v.open=function(t,e){if(this.readyState!=pr)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Lt(this)};v.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||I).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};v.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xt(this)),this.readyState=pr};v.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Lt(this)),this.g&&(this.readyState=3,Lt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof I.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;$o(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function $o(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}v.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Xt(this):Lt(this),this.readyState==3&&$o(this)}};v.Va=function(t){this.g&&(this.response=this.responseText=t,Xt(this))};v.Ua=function(t){this.g&&(this.response=t,Xt(this))};v.ga=function(){this.g&&Xt(this)};function Xt(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Lt(t)}v.setRequestHeader=function(t,e){this.v.append(t,e)};v.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};v.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Lt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Hn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var th=I.JSON.parse;function B(t){Q.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=qo,this.K=this.L=!1}J(B,Q);var qo="",nh=/^https?$/i,sh=["POST","PUT"];v=B.prototype;v.Ka=function(t){this.L=t};v.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ms.g(),this.C=this.u?li(this.u):li(Ms),this.g.onreadystatechange=se(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){fi(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=I.FormData&&t instanceof I.FormData,!(0<=so(sh,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ko(this),0<this.B&&((this.K=rh(this.g))?(this.g.timeout=this.B,this.g.ontimeout=se(this.qa,this)):this.A=cr(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){fi(this,i)}};function rh(t){return st&&bl()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}v.qa=function(){typeof Js<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Y(this,"timeout"),this.abort(8))};function fi(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,jo(t),Kn(t)}function jo(t){t.D||(t.D=!0,Y(t,"complete"),Y(t,"error"))}v.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Y(this,"complete"),Y(this,"abort"),Kn(this))};v.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Kn(this,!0)),B.X.M.call(this)};v.Ha=function(){this.s||(this.F||this.v||this.l?Ho(this):this.fb())};v.fb=function(){Ho(this)};function Ho(t){if(t.h&&typeof Js<"u"&&(!t.C[1]||ye(t)!=4||t.aa()!=2)){if(t.v&&ye(t)==4)cr(t.Ha,0,t);else if(Y(t,"readystatechange"),ye(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Ro)[1]||null;if(!r&&I.self&&I.self.location){var i=I.self.location.protocol;r=i.substr(0,i.length-1)}s=!nh.test(r?r.toLowerCase():"")}n=s}if(n)Y(t,"complete"),Y(t,"success");else{t.m=6;try{var o=2<ye(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",jo(t)}}finally{Kn(t)}}}}function Kn(t,e){if(t.g){Ko(t);const n=t.g,s=t.C[0]?vn:null;t.g=null,t.C=null,e||Y(t,"ready");try{n.onreadystatechange=s}catch{}}}function Ko(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(I.clearTimeout(t.A),t.A=null)}function ye(t){return t.g?t.g.readyState:0}v.aa=function(){try{return 2<ye(this)?this.g.status:-1}catch{return-1}};v.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};v.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),th(e)}};function pi(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case qo:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}v.Ea=function(){return this.m};v.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function zo(t){let e="";return tr(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function gr(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=zo(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):V(t,e,n))}function wt(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Go(t){this.Ca=0,this.i=[],this.j=new Vn,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=wt("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=wt("baseRetryDelayMs",5e3,t),this.bb=wt("retryDelaySeedMs",1e4,t),this.$a=wt("forwardChannelMaxRetries",2,t),this.ta=wt("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Fo(t&&t.concurrentRequestLimit),this.Fa=new Jl,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}v=Go.prototype;v.ma=8;v.G=1;function mr(t){if(Wo(t),t.G==3){var e=t.U++,n=we(t.F);V(n,"SID",t.I),V(n,"RID",e),V(n,"TYPE","terminate"),Yt(t,n),e=new Gt(t,t.j,e,void 0),e.K=2,e.v=jn(we(n)),n=!1,I.navigator&&I.navigator.sendBeacon&&(n=I.navigator.sendBeacon(e.v.toString(),"")),!n&&I.Image&&(new Image().src=e.v,n=!0),n||(e.g=na(e.l,null),e.g.da(e.v)),e.F=Date.now(),Wt(e)}ea(t)}function zn(t){t.g&&(vr(t),t.g.cancel(),t.g=null)}function Wo(t){zn(t),t.u&&(I.clearTimeout(t.u),t.u=null),In(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&I.clearTimeout(t.m),t.m=null)}function Gn(t){Po(t.h)||t.m||(t.m=!0,mo(t.Ja,t),t.C=0)}function ih(t,e){return Vo(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Kt(se(t.Ja,t,e),Zo(t,t.C)),t.C++,!0)}v.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Gt(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=ao(i),co(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Qo(this,r,e),n=we(this.F),V(n,"RID",t),V(n,"CVER",22),this.D&&V(n,"X-HTTP-Session-Id",this.D),Yt(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(zo(i)))+"&"+e:this.o&&gr(n,this.o,i)),dr(this.h,r),this.Ya&&V(n,"TYPE","init"),this.O?(V(n,"$req",e),V(n,"SID","null"),r.Z=!0,Ps(r,n,null)):Ps(r,n,e),this.G=2}}else this.G==3&&(t?gi(this,t):this.i.length==0||Po(this.h)||gi(this))};function gi(t,e){var n;e?n=e.m:n=t.U++;const s=we(t.F);V(s,"SID",t.I),V(s,"RID",n),V(s,"AID",t.T),Yt(t,s),t.o&&t.s&&gr(s,t.o,t.s),n=new Gt(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Qo(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),dr(t.h,n),Ps(n,s,e)}function Yt(t,e){t.ia&&tr(t.ia,function(n,s){V(e,s,n)}),t.l&&_o({},function(n,s){V(e,s,n)})}function Qo(t,e,n){n=Math.min(t.i.length,n);var s=t.l?se(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{Zl(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Xo(t){t.g||t.u||(t.Z=1,mo(t.Ia,t),t.A=0)}function yr(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Kt(se(t.Ia,t),Zo(t,t.A)),t.A++,!0)}v.Ia=function(){if(this.u=null,Yo(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Kt(se(this.eb,this),t)}};v.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,oe(10),zn(this),Yo(this))};function vr(t){t.B!=null&&(I.clearTimeout(t.B),t.B=null)}function Yo(t){t.g=new Gt(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=we(t.sa);V(e,"RID","rpc"),V(e,"SID",t.I),V(e,"CI",t.L?"0":"1"),V(e,"AID",t.T),V(e,"TYPE","xmlhttp"),Yt(t,e),t.o&&t.s&&gr(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=jn(we(e)),n.s=null,n.P=!0,Ao(n,t)}v.cb=function(){this.v!=null&&(this.v=null,zn(this),yr(this),oe(19))};function In(t){t.v!=null&&(I.clearTimeout(t.v),t.v=null)}function Jo(t,e){var n=null;if(t.g==e){In(t),vr(t),t.g=null;var s=2}else if(Us(t.h,e))n=e.D,Uo(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Un(),Y(s,new So(s,n)),Gn(t)}else Xo(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&ih(t,e)||s==2&&yr(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Ve(t,5);break;case 4:Ve(t,10);break;case 3:Ve(t,6);break;default:Ve(t,2)}}}function Zo(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Ve(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=se(t.kb,t);n||(n=new Be("//www.google.com/images/cleardot.gif"),I.location&&I.location.protocol=="http"||Tn(n,"https"),jn(n)),eh(n.toString(),s)}else oe(2);t.G=0,t.l&&t.l.va(e),ea(t),Wo(t)}v.kb=function(t){t?(this.j.info("Successfully pinged google.com"),oe(2)):(this.j.info("Failed to ping google.com"),oe(1))};function ea(t){if(t.G=0,t.la=[],t.l){const e=Bo(t.h);(e.length!=0||t.i.length!=0)&&(ri(t.la,e),ri(t.la,t.i),t.h.i.length=0,Zs(t.i),t.i.length=0),t.l.ua()}}function ta(t,e,n){var s=n instanceof Be?we(n):new Be(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Sn(s,s.m);else{var r=I.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Be(null,void 0);s&&Tn(i,s),e&&(i.g=e),r&&Sn(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&V(s,n,e),V(s,"VER",t.ma),Yt(t,s),s}function na(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new B(new Qt({jb:!0})):new B(t.ra),e.Ka(t.H),e}function sa(){}v=sa.prototype;v.xa=function(){};v.wa=function(){};v.va=function(){};v.ua=function(){};v.Ra=function(){};function Cn(){if(st&&!(10<=Number(Tl)))throw Error("Environmental error: no available transport.")}Cn.prototype.g=function(t,e){return new ue(t,e)};function ue(t,e){Q.call(this),this.g=new Go(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!wn(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!wn(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ft(this)}J(ue,Q);ue.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;oe(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=ta(t,null,t.V),Gn(t)};ue.prototype.close=function(){mr(this.g)};ue.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=or(t),t=n);e.i.push(new Xl(e.ab++,t)),e.G==3&&Gn(e)};ue.prototype.M=function(){this.g.l=null,delete this.j,mr(this.g),delete this.g,ue.X.M.call(this)};function ra(t){lr.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}J(ra,lr);function ia(){hr.call(this),this.status=1}J(ia,hr);function ft(t){this.g=t}J(ft,sa);ft.prototype.xa=function(){Y(this.g,"a")};ft.prototype.wa=function(t){Y(this.g,new ra(t))};ft.prototype.va=function(t){Y(this.g,new ia)};ft.prototype.ua=function(){Y(this.g,"b")};Cn.prototype.createWebChannel=Cn.prototype.g;ue.prototype.send=ue.prototype.u;ue.prototype.open=ue.prototype.m;ue.prototype.close=ue.prototype.close;Bn.NO_ERROR=0;Bn.TIMEOUT=8;Bn.HTTP_ERROR=6;Io.COMPLETE="complete";Co.EventType=zt;zt.OPEN="a";zt.CLOSE="b";zt.ERROR="c";zt.MESSAGE="d";Q.prototype.listen=Q.prototype.N;B.prototype.listenOnce=B.prototype.O;B.prototype.getLastError=B.prototype.Oa;B.prototype.getLastErrorCode=B.prototype.Ea;B.prototype.getStatus=B.prototype.aa;B.prototype.getResponseJson=B.prototype.Sa;B.prototype.getResponseText=B.prototype.fa;B.prototype.send=B.prototype.da;B.prototype.setWithCredentials=B.prototype.Ka;var oh=function(){return new Cn},ah=function(){return Un()},ws=Bn,ch=Io,uh=ze,mi={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},lh=Qt,cn=Co,hh=B;const yi="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ee.UNAUTHENTICATED=new ee(null),ee.GOOGLE_CREDENTIALS=new ee("google-credentials-uid"),ee.FIRST_PARTY=new ee("first-party-uid"),ee.MOCK_USER=new ee("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pt="9.15.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He=new Yi("@firebase/firestore");function vi(){return He.logLevel}function E(t,...e){if(He.logLevel<=L.DEBUG){const n=e.map(wr);He.debug(`Firestore (${pt}): ${t}`,...n)}}function Ee(t,...e){if(He.logLevel<=L.ERROR){const n=e.map(wr);He.error(`Firestore (${pt}): ${t}`,...n)}}function Bs(t,...e){if(He.logLevel<=L.WARN){const n=e.map(wr);He.warn(`Firestore (${pt}): ${t}`,...n)}}function wr(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(t="Unexpected state"){const e=`FIRESTORE (${pt}) INTERNAL ASSERTION FAILED: `+t;throw Ee(e),new Error(e)}function P(t,e){t||C()}function A(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class S extends ht{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class dh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ee.UNAUTHENTICATED))}shutdown(){}}class fh{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ph{constructor(e){this.t=e,this.currentUser=ee.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new De;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new De,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{E("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(E("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new De)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(E("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(P(typeof s.accessToken=="string"),new oa(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return P(e===null||typeof e=="string"),new ee(e)}}class gh{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=ee.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(P(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class mh{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new gh(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(ee.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vh{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&E("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,E("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{E("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):E("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(P(typeof n.token=="string"),this.A=n.token,new yh(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wh(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=wh(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function M(t,e){return t<e?-1:t>e?1:0}function rt(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new S(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new S(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new S(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new S(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return H.fromMillis(Date.now())}static fromDate(e){return H.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new H(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?M(this.nanoseconds,e.nanoseconds):M(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.timestamp=e}static fromTimestamp(e){return new D(e)}static min(){return new D(new H(0,0))}static max(){return new D(new H(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,n,s){n===void 0?n=0:n>e.length&&C(),s===void 0?s=e.length-n:s>e.length-n&&C(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Mt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Mt?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class U extends Mt{construct(e,n,s){return new U(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new S(p.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new U(n)}static emptyPath(){return new U([])}}const Eh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ne extends Mt{construct(e,n,s){return new ne(e,n,s)}static isValidIdentifier(e){return Eh.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ne.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ne(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new S(p.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new S(p.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new S(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new S(p.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ne(n)}static emptyPath(){return new ne([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.path=e}static fromPath(e){return new b(U.fromString(e))}static fromName(e){return new b(U.fromString(e).popFirst(5))}static empty(){return new b(U.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&U.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return U.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new b(new U(e.slice()))}}function bh(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=D.fromTimestamp(s===1e9?new H(n+1,0):new H(n,s));return new Ae(r,b.empty(),e)}function Th(t){return new Ae(t.readTime,t.key,-1)}class Ae{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Ae(D.min(),b.empty(),-1)}static max(){return new Ae(D.max(),b.empty(),-1)}}function Sh(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=b.comparator(t.documentKey,e.documentKey),n!==0?n:M(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ch{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jt(t){if(t.code!==p.FAILED_PRECONDITION||t.message!==Ih)throw t;E("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&C(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new f((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof f?n:f.resolve(n)}catch(n){return f.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):f.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):f.reject(n)}static resolve(e){return new f((n,s)=>{n(e)})}static reject(e){return new f((n,s)=>{s(e)})}static waitFor(e){return new f((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=f.resolve(!1);for(const s of e)n=n.next(r=>r?f.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new f((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(e,n){return new f((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Zt(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Er.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Ft{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ft("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ft&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ge(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ca(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t){return t==null}function Dn(t){return t===0&&1/t==-1/0}function Ah(t){return typeof t=="number"&&Number.isInteger(t)&&!Dn(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new ie(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new ie(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return M(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ie.EMPTY_BYTE_STRING=new ie("");const Nh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ne(t){if(P(!!t),typeof t=="string"){let e=0;const n=Nh.exec(t);if(P(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:q(t.seconds),nanos:q(t.nanos)}}function q(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function it(t){return typeof t=="string"?ie.fromBase64String(t):ie.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function la(t){const e=t.mapValue.fields.__previous_value__;return ua(e)?la(e):e}function Pt(t){const e=Ne(t.mapValue.fields.__local_write_time__.timestampValue);return new H(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ke(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ua(t)?4:xh(t)?9007199254740991:10:C()}function ge(t,e){if(t===e)return!0;const n=Ke(t);if(n!==Ke(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Pt(t).isEqual(Pt(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Ne(s.timestampValue),o=Ne(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return it(s.bytesValue).isEqual(it(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return q(s.geoPointValue.latitude)===q(r.geoPointValue.latitude)&&q(s.geoPointValue.longitude)===q(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return q(s.integerValue)===q(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=q(s.doubleValue),o=q(r.doubleValue);return i===o?Dn(i)===Dn(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return rt(t.arrayValue.values||[],e.arrayValue.values||[],ge);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(wi(i)!==wi(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!ge(i[a],o[a])))return!1;return!0}(t,e);default:return C()}}function Vt(t,e){return(t.values||[]).find(n=>ge(n,e))!==void 0}function ot(t,e){if(t===e)return 0;const n=Ke(t),s=Ke(e);if(n!==s)return M(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return M(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=q(r.integerValue||r.doubleValue),a=q(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Ei(t.timestampValue,e.timestampValue);case 4:return Ei(Pt(t),Pt(e));case 5:return M(t.stringValue,e.stringValue);case 6:return function(r,i){const o=it(r),a=it(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=M(o[c],a[c]);if(u!==0)return u}return M(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=M(q(r.latitude),q(i.latitude));return o!==0?o:M(q(r.longitude),q(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=ot(o[c],a[c]);if(u)return u}return M(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===un.mapValue&&i===un.mapValue)return 0;if(r===un.mapValue)return 1;if(i===un.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=M(a[l],u[l]);if(h!==0)return h;const d=ot(o[a[l]],c[u[l]]);if(d!==0)return d}return M(a.length,u.length)}(t.mapValue,e.mapValue);default:throw C()}}function Ei(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return M(t,e);const n=Ne(t),s=Ne(e),r=M(n.seconds,s.seconds);return r!==0?r:M(n.nanos,s.nanos)}function at(t){return $s(t)}function $s(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Ne(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?it(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,b.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=$s(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${$s(s.fields[a])}`;return i+"}"}(t.mapValue):C();var e,n}function qs(t){return!!t&&"integerValue"in t}function br(t){return!!t&&"arrayValue"in t}function bi(t){return!!t&&"nullValue"in t}function Ti(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function dn(t){return!!t&&"mapValue"in t}function It(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ge(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=It(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=It(t.arrayValue.values[n]);return e}return Object.assign({},t)}function xh(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,n){this.position=e,this.inclusive=n}}function Si(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=b.comparator(b.fromName(o.referenceValue),n.key):s=ot(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ii(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ge(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{}class j extends ha{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new Rh(e,n,s):n==="array-contains"?new Mh(e,s):n==="in"?new Fh(e,s):n==="not-in"?new Ph(e,s):n==="array-contains-any"?new Vh(e,s):new j(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new Oh(e,s):new Lh(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ot(n,this.value)):n!==null&&Ke(this.value)===Ke(n)&&this.matchesComparison(ot(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return C()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class me extends ha{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new me(e,n)}matches(e){return da(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function da(t){return t.op==="and"}function kh(t){return _h(t)&&da(t)}function _h(t){for(const e of t.filters)if(e instanceof me)return!1;return!0}function fa(t){if(t instanceof j)return t.field.canonicalString()+t.op.toString()+at(t.value);{const e=t.filters.map(n=>fa(n)).join(",");return`${t.op}(${e})`}}function pa(t,e){return t instanceof j?function(n,s){return s instanceof j&&n.op===s.op&&n.field.isEqual(s.field)&&ge(n.value,s.value)}(t,e):t instanceof me?function(n,s){return s instanceof me&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&pa(i,s.filters[o]),!0):!1}(t,e):void C()}function ga(t){return t instanceof j?function(e){return`${e.field.canonicalString()} ${e.op} ${at(e.value)}`}(t):t instanceof me?function(e){return e.op.toString()+" {"+e.getFilters().map(ga).join(" ,")+"}"}(t):"Filter"}class Rh extends j{constructor(e,n,s){super(e,n,s),this.key=b.fromName(s.referenceValue)}matches(e){const n=b.comparator(e.key,this.key);return this.matchesComparison(n)}}class Oh extends j{constructor(e,n){super(e,"in",n),this.keys=ma("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Lh extends j{constructor(e,n){super(e,"not-in",n),this.keys=ma("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ma(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>b.fromName(s.referenceValue))}class Mh extends j{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return br(n)&&Vt(n.arrayValue,this.value)}}class Fh extends j{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Vt(this.value.arrayValue,n)}}class Ph extends j{constructor(e,n){super(e,"not-in",n)}matches(e){if(Vt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Vt(this.value.arrayValue,n)}}class Vh extends j{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!br(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Vt(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,n="asc"){this.field=e,this.dir=n}}function Uh(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,n){this.comparator=e,this.root=n||X.EMPTY}insert(e,n){return new z(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,X.BLACK,null,null))}remove(e){return new z(this.comparator,this.root.remove(e,this.comparator).copy(null,null,X.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ln(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ln(this.root,e,this.comparator,!1)}getReverseIterator(){return new ln(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ln(this.root,e,this.comparator,!0)}}class ln{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class X{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??X.RED,this.left=r??X.EMPTY,this.right=i??X.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new X(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return X.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return X.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,X.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,X.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw C();const e=this.left.check();if(e!==this.right.check())throw C();return e+(this.isRed()?0:1)}}X.EMPTY=null,X.RED=!0,X.BLACK=!1;X.EMPTY=new class{constructor(){this.size=0}get key(){throw C()}get value(){throw C()}get color(){throw C()}get left(){throw C()}get right(){throw C()}copy(t,e,n,s,r){return this}insert(t,e,n){return new X(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.comparator=e,this.data=new z(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ci(this.data.getIterator())}getIteratorFrom(e){return new Ci(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof K)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new K(this.comparator);return n.data=e,n}}class Ci{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.fields=e,e.sort(ne.comparator)}static empty(){return new fe([])}unionWith(e){let n=new K(ne.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new fe(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return rt(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.value=e}static empty(){return new ce({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!dn(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=It(n)}setAll(e){let n=ne.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=It(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());dn(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ge(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];dn(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Ge(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new ce(It(this.value))}}function ya(t){const e=[];return Ge(t.fields,(n,s)=>{const r=new ne([n]);if(dn(s)){const i=ya(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new fe(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new te(e,0,D.min(),D.min(),D.min(),ce.empty(),0)}static newFoundDocument(e,n,s,r){return new te(e,1,n,D.min(),s,r,0)}static newNoDocument(e,n){return new te(e,2,n,D.min(),D.min(),ce.empty(),0)}static newUnknownDocument(e,n){return new te(e,3,n,D.min(),D.min(),ce.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(D.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ce.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ce.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=D.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof te&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new te(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function Di(t,e=null,n=[],s=[],r=null,i=null,o=null){return new Bh(t,e,n,s,r,i,o)}function Tr(t){const e=A(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>fa(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Wn(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>at(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>at(s)).join(",")),e.ft=n}return e.ft}function Sr(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Uh(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!pa(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ii(t.startAt,e.startAt)&&Ii(t.endAt,e.endAt)}function js(t){return b.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function $h(t,e,n,s,r,i,o,a){return new Qn(t,e,n,s,r,i,o,a)}function Ir(t){return new Qn(t)}function Ai(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function qh(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function jh(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Hh(t){return t.collectionGroup!==null}function tt(t){const e=A(t);if(e.dt===null){e.dt=[];const n=jh(e),s=qh(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new Ct(n)),e.dt.push(new Ct(ne.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Ct(ne.keyField(),i))}}}return e.dt}function be(t){const e=A(t);if(!e._t)if(e.limitType==="F")e._t=Di(e.path,e.collectionGroup,tt(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of tt(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Ct(i.field,o))}const s=e.endAt?new An(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new An(e.startAt.position,e.startAt.inclusive):null;e._t=Di(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function Hs(t,e,n){return new Qn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Xn(t,e){return Sr(be(t),be(e))&&t.limitType===e.limitType}function va(t){return`${Tr(be(t))}|lt:${t.limitType}`}function Ks(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>ga(s)).join(", ")}]`),Wn(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>at(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>at(s)).join(",")),`Target(${n})`}(be(t))}; limitType=${t.limitType})`}function Cr(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):b.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of tt(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Si(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,tt(n),s)||n.endAt&&!function(r,i,o){const a=Si(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,tt(n),s))}(t,e)}function Kh(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function wa(t){return(e,n)=>{let s=!1;for(const r of tt(t)){const i=zh(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function zh(t,e,n){const s=t.field.isKeyField()?b.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?ot(a,c):C()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return C()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Dn(e)?"-0":e}}function ba(t){return{integerValue:""+t}}function Gh(t,e){return Ah(e)?ba(e):Ea(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(){this._=void 0}}function Wh(t,e,n){return t instanceof Nn?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Ut?Sa(t,e):t instanceof Bt?Ia(t,e):function(s,r){const i=Ta(s,r),o=Ni(i)+Ni(s.gt);return qs(i)&&qs(s.gt)?ba(o):Ea(s.yt,o)}(t,e)}function Qh(t,e,n){return t instanceof Ut?Sa(t,e):t instanceof Bt?Ia(t,e):n}function Ta(t,e){return t instanceof xn?qs(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Nn extends Yn{}class Ut extends Yn{constructor(e){super(),this.elements=e}}function Sa(t,e){const n=Ca(e);for(const s of t.elements)n.some(r=>ge(r,s))||n.push(s);return{arrayValue:{values:n}}}class Bt extends Yn{constructor(e){super(),this.elements=e}}function Ia(t,e){let n=Ca(e);for(const s of t.elements)n=n.filter(r=>!ge(r,s));return{arrayValue:{values:n}}}class xn extends Yn{constructor(e,n){super(),this.yt=e,this.gt=n}}function Ni(t){return q(t.integerValue||t.doubleValue)}function Ca(t){return br(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Xh(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Ut&&s instanceof Ut||n instanceof Bt&&s instanceof Bt?rt(n.elements,s.elements,ge):n instanceof xn&&s instanceof xn?ge(n.gt,s.gt):n instanceof Nn&&s instanceof Nn}(t.transform,e.transform)}class Yh{constructor(e,n){this.version=e,this.transformResults=n}}class ve{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ve}static exists(e){return new ve(void 0,e)}static updateTime(e){return new ve(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fn(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Jn{}function Da(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Na(t.key,ve.none()):new Zn(t.key,t.data,ve.none());{const n=t.data,s=ce.empty();let r=new K(ne.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new We(t.key,s,new fe(r.toArray()),ve.none())}}function Jh(t,e,n){t instanceof Zn?function(s,r,i){const o=s.value.clone(),a=ki(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof We?function(s,r,i){if(!fn(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=ki(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Aa(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Dt(t,e,n,s){return t instanceof Zn?function(r,i,o,a){if(!fn(r.precondition,i))return o;const c=r.value.clone(),u=_i(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof We?function(r,i,o,a){if(!fn(r.precondition,i))return o;const c=_i(r.fieldTransforms,a,i),u=i.data;return u.setAll(Aa(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(r,i,o){return fn(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function Zh(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Ta(s.transform,r||null);i!=null&&(n===null&&(n=ce.empty()),n.set(s.field,i))}return n||null}function xi(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&rt(n,s,(r,i)=>Xh(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Zn extends Jn{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class We extends Jn{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Aa(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function ki(t,e,n){const s=new Map;P(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,Qh(o,a,n[r]))}return s}function _i(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Wh(i,o,e))}return s}class Na extends Jn{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ed extends Jn{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $,R;function nd(t){switch(t){default:return C();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function xa(t){if(t===void 0)return Ee("GRPC error has no .code"),p.UNKNOWN;switch(t){case $.OK:return p.OK;case $.CANCELLED:return p.CANCELLED;case $.UNKNOWN:return p.UNKNOWN;case $.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case $.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case $.INTERNAL:return p.INTERNAL;case $.UNAVAILABLE:return p.UNAVAILABLE;case $.UNAUTHENTICATED:return p.UNAUTHENTICATED;case $.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case $.NOT_FOUND:return p.NOT_FOUND;case $.ALREADY_EXISTS:return p.ALREADY_EXISTS;case $.PERMISSION_DENIED:return p.PERMISSION_DENIED;case $.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case $.ABORTED:return p.ABORTED;case $.OUT_OF_RANGE:return p.OUT_OF_RANGE;case $.UNIMPLEMENTED:return p.UNIMPLEMENTED;case $.DATA_LOSS:return p.DATA_LOSS;default:return C()}}(R=$||($={}))[R.OK=0]="OK",R[R.CANCELLED=1]="CANCELLED",R[R.UNKNOWN=2]="UNKNOWN",R[R.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",R[R.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",R[R.NOT_FOUND=5]="NOT_FOUND",R[R.ALREADY_EXISTS=6]="ALREADY_EXISTS",R[R.PERMISSION_DENIED=7]="PERMISSION_DENIED",R[R.UNAUTHENTICATED=16]="UNAUTHENTICATED",R[R.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",R[R.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",R[R.ABORTED=10]="ABORTED",R[R.OUT_OF_RANGE=11]="OUT_OF_RANGE",R[R.UNIMPLEMENTED=12]="UNIMPLEMENTED",R[R.INTERNAL=13]="INTERNAL",R[R.UNAVAILABLE=14]="UNAVAILABLE",R[R.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Ge(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return ca(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd=new z(b.comparator);function Te(){return sd}const ka=new z(b.comparator);function Tt(...t){let e=ka;for(const n of t)e=e.insert(n.key,n);return e}function _a(t){let e=ka;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Ue(){return At()}function Ra(){return At()}function At(){return new gt(t=>t.toString(),(t,e)=>t.isEqual(e))}const rd=new z(b.comparator),id=new K(b.comparator);function k(...t){let e=id;for(const n of t)e=e.add(n);return e}const od=new K(M);function Oa(){return od}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,en.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new es(D.min(),r,Oa(),Te(),k())}}class en{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new en(s,n,k(),k(),k())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class La{constructor(e,n){this.targetId=e,this.Et=n}}class Ma{constructor(e,n,s=ie.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Ri{constructor(){this.At=0,this.Rt=Li(),this.bt=ie.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=k(),n=k(),s=k();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:C()}}),new en(this.bt,this.Pt,e,n,s)}xt(){this.vt=!1,this.Rt=Li()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class ad{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Te(),this.qt=Oi(),this.Ut=new K(M)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const s=this.Wt(n);switch(e.state){case 0:this.zt(n)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:C()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.zt(r)&&n(r)})}Jt(e){const n=e.targetId,s=e.Et.count,r=this.Yt(n);if(r){const i=r.target;if(js(i))if(s===0){const o=new b(i.path);this.Qt(n,o,te.newNoDocument(o,D.min()))}else P(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&js(a.target)){const c=new b(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,te.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=k();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new es(e,n,this.Ut,this.Lt,s);return this.Lt=Te(),this.qt=Oi(),this.Ut=new K(M),r}Gt(e,n){if(!this.zt(e))return;const s=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.zt(e))return;const r=this.Wt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new Ri,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new K(M),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||E("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Ri),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function Oi(){return new z(b.comparator)}function Li(){return new z(b.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd={asc:"ASCENDING",desc:"DESCENDING"},ud={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ld={and:"AND",or:"OR"};class hd{constructor(e,n){this.databaseId=e,this.wt=n}}function kn(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Fa(t,e){return t.wt?e.toBase64():e.toUint8Array()}function dd(t,e){return kn(t,e.toTimestamp())}function pe(t){return P(!!t),D.fromTimestamp(function(e){const n=Ne(e);return new H(n.seconds,n.nanos)}(t))}function Dr(t,e){return function(n){return new U(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Pa(t){const e=U.fromString(t);return P($a(e)),e}function zs(t,e){return Dr(t.databaseId,e.path)}function Es(t,e){const n=Pa(e);if(n.get(1)!==t.databaseId.projectId)throw new S(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new S(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new b(Va(n))}function Gs(t,e){return Dr(t.databaseId,e)}function fd(t){const e=Pa(t);return e.length===4?U.emptyPath():Va(e)}function Ws(t){return new U(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Va(t){return P(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Mi(t,e,n){return{name:zs(t,e),fields:n.value.mapValue.fields}}function pd(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:C()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.wt?(P(u===void 0||typeof u=="string"),ie.fromBase64String(u||"")):(P(u===void 0||u instanceof Uint8Array),ie.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?p.UNKNOWN:xa(c.code);return new S(u,c.message||"")}(o);n=new Ma(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Es(t,s.document.name),i=pe(s.document.updateTime),o=s.document.createTime?pe(s.document.createTime):D.min(),a=new ce({mapValue:{fields:s.document.fields}}),c=te.newFoundDocument(r,i,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new pn(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Es(t,s.document),i=s.readTime?pe(s.readTime):D.min(),o=te.newNoDocument(r,i),a=s.removedTargetIds||[];n=new pn([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Es(t,s.document),i=s.removedTargetIds||[];n=new pn([],i,r,null)}else{if(!("filter"in e))return C();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new td(r),o=s.targetId;n=new La(o,i)}}return n}function gd(t,e){let n;if(e instanceof Zn)n={update:Mi(t,e.key,e.value)};else if(e instanceof Na)n={delete:zs(t,e.key)};else if(e instanceof We)n={update:Mi(t,e.key,e.data),updateMask:Id(e.fieldMask)};else{if(!(e instanceof ed))return C();n={verify:zs(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Nn)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ut)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Bt)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof xn)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw C()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:dd(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:C()}(t,e.precondition)),n}function md(t,e){return t&&t.length>0?(P(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?pe(s.updateTime):pe(r);return i.isEqual(D.min())&&(i=pe(r)),new Yh(i,s.transformResults||[])}(n,e))):[]}function yd(t,e){return{documents:[Gs(t,e.path)]}}function vd(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Gs(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Gs(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Ba(me.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Ye(l.field),direction:bd(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.wt||Wn(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function wd(t){let e=fd(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){P(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=function(l){const h=Ua(l);return h instanceof me&&kh(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Ct(Je(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Wn(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new An(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new An(d,h)}(n.endAt)),$h(e,r,o,i,a,"F",c,u)}function Ed(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return C()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Ua(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Je(e.unaryFilter.field);return j.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Je(e.unaryFilter.field);return j.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Je(e.unaryFilter.field);return j.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Je(e.unaryFilter.field);return j.create(i,"!=",{nullValue:"NULL_VALUE"});default:return C()}}(t):t.fieldFilter!==void 0?function(e){return j.create(Je(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return C()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return me.create(e.compositeFilter.filters.map(n=>Ua(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return C()}}(e.compositeFilter.op))}(t):C()}function bd(t){return cd[t]}function Td(t){return ud[t]}function Sd(t){return ld[t]}function Ye(t){return{fieldPath:t.canonicalString()}}function Je(t){return ne.fromServerFormat(t.fieldPath)}function Ba(t){return t instanceof j?function(e){if(e.op==="=="){if(Ti(e.value))return{unaryFilter:{field:Ye(e.field),op:"IS_NAN"}};if(bi(e.value))return{unaryFilter:{field:Ye(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ti(e.value))return{unaryFilter:{field:Ye(e.field),op:"IS_NOT_NAN"}};if(bi(e.value))return{unaryFilter:{field:Ye(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ye(e.field),op:Td(e.op),value:e.value}}}(t):t instanceof me?function(e){const n=e.getFilters().map(s=>Ba(s));return n.length===1?n[0]:{compositeFilter:{op:Sd(e.op),filters:n}}}(t):C()}function Id(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function $a(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Jh(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Dt(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Dt(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Ra();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Da(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(D.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),k())}isEqual(e){return this.batchId===e.batchId&&rt(this.mutations,e.mutations,(n,s)=>xi(n,s))&&rt(this.baseMutations,e.baseMutations,(n,s)=>xi(n,s))}}class Ar{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){P(e.mutations.length===s.length);let r=rd;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Ar(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n,s,r,i=D.min(),o=D.min(),a=ie.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new $e(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new $e(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new $e(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e){this.ie=e}}function Nd(t){const e=wd({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Hs(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(){this.Je=new kd}addToCollectionParentIndex(e,n){return this.Je.add(n),f.resolve()}getCollectionParents(e,n){return f.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return f.resolve()}deleteFieldIndex(e,n){return f.resolve()}getDocumentsMatchingTarget(e,n){return f.resolve(null)}getIndexType(e,n){return f.resolve(0)}getFieldIndexes(e,n){return f.resolve([])}getNextCollectionGroupToUpdate(e){return f.resolve(null)}getMinOffset(e,n){return f.resolve(Ae.min())}getMinOffsetFromCollectionGroup(e,n){return f.resolve(Ae.min())}updateCollectionGroup(e,n,s){return f.resolve()}updateIndexEntries(e,n){return f.resolve()}}class kd{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new K(U.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new K(U.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new ct(0)}static vn(){return new ct(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(){this.changes=new gt(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,te.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?f.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Dt(s.mutation,r,fe.empty(),H.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,k()).next(()=>s))}getLocalViewOfDocuments(e,n,s=k()){const r=Ue();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Tt();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Ue();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,k()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Te();const o=At(),a=At();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof We)?i=i.insert(u.key,u):l!==void 0&&(o.set(u.key,l.mutation.getFieldMask()),Dt(l.mutation,u,l.mutation.getFieldMask(),H.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new Rd(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=At();let r=new z((o,a)=>o-a),i=k();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||fe.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(r.get(a.batchId)||k()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Ra();l.forEach(d=>{if(!i.has(d)){const y=Da(n.get(d),s.get(d));y!==null&&h.set(d,y),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return f.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return b.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Hh(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):f.resolve(Ue());let a=-1,c=i;return o.next(u=>f.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?f.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,k())).next(l=>({batchId:a,changes:_a(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new b(n)).next(s=>{let r=Tt();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Tt();return this.indexManager.getCollectionParents(e,r).next(o=>f.forEach(o,a=>{const c=function(u,l){return new Qn(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const u=c.getKey();r.get(u)===null&&(r=r.insert(u,te.newInvalidDocument(u)))});let o=Tt();return r.forEach((a,c)=>{const u=i.get(a);u!==void 0&&Dt(u.mutation,c,fe.empty(),H.now()),Cr(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return f.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:pe(s.createTime)}),f.resolve()}getNamedQuery(e,n){return f.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:Nd(s.bundledQuery),readTime:pe(s.readTime)}}(n)),f.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(){this.overlays=new z(b.comparator),this.es=new Map}getOverlay(e,n){return f.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ue();return f.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.oe(e,n,i)}),f.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),f.resolve()}getOverlaysForCollection(e,n,s){const r=Ue(),i=n.length+1,o=new b(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return f.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new z((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=Ue(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Ue(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return f.resolve(a)}oe(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Dd(n,s));let i=this.es.get(n);i===void 0&&(i=k(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(){this.ns=new K(W.ss),this.rs=new K(W.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new W(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new W(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new b(new U([])),s=new W(n,e),r=new W(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new b(new U([])),s=new W(n,e),r=new W(n,e+1);let i=k();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new W(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class W{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return b.comparator(e.key,n.key)||M(e._s,n._s)}static os(e,n){return M(e._s,n._s)||b.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new K(W.ss)}checkEmpty(e){return f.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Cd(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new W(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(e,n){return f.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return f.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return f.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new W(n,0),r=new W(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),f.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new K(M);return n.forEach(r=>{const i=new W(r,0),o=new W(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),f.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;b.isDocumentKey(i)||(i=i.child(""));const o=new W(new b(i),0);let a=new K(M);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c._s)),!0)},o),f.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){P(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return f.forEach(n.mutations,r=>{const i=new W(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new W(n,0),r=this.gs.firstAfterOrEqual(s);return f.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,f.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e){this.Es=e,this.docs=new z(b.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return f.resolve(s?s.document.mutableCopy():te.newInvalidDocument(n))}getEntries(e,n){let s=Te();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():te.newInvalidDocument(r))}),f.resolve(s)}getAllFromCollection(e,n,s){let r=Te();const i=new b(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||Sh(Th(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return f.resolve(r)}getAllFromCollectionGroup(e,n,s,r){C()}As(e,n){return f.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Vd(this)}getSize(e){return f.resolve(this.size)}}class Vd extends _d{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),f.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e){this.persistence=e,this.Rs=new gt(n=>Tr(n),Sr),this.lastRemoteSnapshotVersion=D.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Nr,this.targetCount=0,this.vs=ct.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),f.resolve()}getLastRemoteSnapshotVersion(e){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return f.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),f.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new ct(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,f.resolve()}updateTargetData(e,n){return this.Dn(n),f.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,f.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),f.waitFor(i).next(()=>r)}getTargetCount(e){return f.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return f.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),f.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),f.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),f.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return f.resolve(s)}containsKey(e,n){return f.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Er(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new Ud(this),this.indexManager=new xd,this.remoteDocumentCache=function(s){return new Pd(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new Ad(n),this.Ns=new Ld(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Md,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new Fd(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){E("MemoryPersistence","Starting transaction:",e);const r=new $d(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,n){return f.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class $d extends Ch{constructor(e){super(),this.currentSequenceNumber=e}}class xr{constructor(e){this.persistence=e,this.Fs=new Nr,this.$s=null}static Bs(e){return new xr(e)}get Ls(){if(this.$s)return this.$s;throw C()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),f.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),f.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),f.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Ls,s=>{const r=b.fromPath(s);return this.qs(e,r).next(i=>{i||n.removeEntry(r,D.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return f.or([()=>f.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=k(),r=k();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new kr(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Mi(e,n))}ki(e,n){if(Ai(n))return f.resolve(null);let s=be(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Hs(n,null,"F"),s=be(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=k(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.Fi(n,a);return this.$i(n,u,o,c.readTime)?this.ki(e,Hs(n,null,"F")):this.Bi(e,u,n,c)}))})))}Oi(e,n,s,r){return Ai(n)||r.isEqual(D.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(e,n):(vi()<=L.DEBUG&&E("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ks(n)),this.Bi(e,o,n,bh(r,-1)))})}Fi(e,n){let s=new K(wa(e));return n.forEach((r,i)=>{Cr(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,n){return vi()<=L.DEBUG&&E("QueryEngine","Using full collection scan to execute query:",Ks(n)),this.Ni.getDocumentsMatchingQuery(e,n,Ae.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.yt=r,this.qi=new z(M),this.Ui=new gt(i=>Tr(i),Sr),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Od(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function Hd(t,e,n,s){return new jd(t,e,n,s)}async function qa(t,e){const n=A(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=k();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function Kd(t,e){const n=A(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=f.resolve();return h.forEach(y=>{d=d.next(()=>u.getEntry(a,y)).next(w=>{const x=c.docVersions.get(y);P(x!==null),w.version.compareTo(x)<0&&(l.applyToRemoteDocument(w,c),w.isValidDocument()&&(w.setReadTime(c.commitVersion),u.addEntry(w)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=k();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function ja(t){const e=A(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function zd(t,e){const n=A(t),s=e.snapshotVersion;let r=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.qi;const a=[];e.targetChanges.forEach((l,h)=>{const d=r.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,l.addedDocuments,h)));let y=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?y=y.withResumeToken(ie.EMPTY_BYTE_STRING,D.min()).withLastLimboFreeSnapshotVersion(D.min()):l.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(l.resumeToken,s)),r=r.insert(h,y),function(w,x,O){return w.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(d,y,l)&&a.push(n.Cs.updateTargetData(i,y))});let c=Te(),u=k();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(Gd(i,o,e.documentUpdates).next(l=>{c=l.Wi,u=l.zi})),!s.isEqual(D.min())){const l=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return f.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.qi=r,i))}function Gd(t,e,n){let s=k(),r=k();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Te();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(D.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):E("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function Wd(t,e){const n=A(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Qd(t,e){const n=A(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,f.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new $e(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.qi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(e,s.targetId)),s})}async function Qs(t,e,n){const s=A(t),r=s.qi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Zt(o))throw o;E("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(r.target)}function Fi(t,e,n){const s=A(t);let r=D.min(),i=k();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=A(a),h=l.Ui.get(u);return h!==void 0?f.resolve(l.qi.get(h)):l.Cs.getTargetData(c,u)}(s,o,be(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:D.min(),n?i:k())).next(a=>(Xd(s,Kh(e),a),{documents:a,Hi:i})))}function Xd(t,e,n){let s=t.Ki.get(e)||D.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class Pi{constructor(){this.activeTargetIds=Oa()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Yd{constructor(){this.Lr=new Pi,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Pi,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){E("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){E("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,r,i){const o=this.ho(e,n);E("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(E("RestConnection","Received: ",c),c),c=>{throw Bs("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,r,i,o){return this.ao(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+pt,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=Zd[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new hh;a.setWithCredentials(!0),a.listenOnce(ch.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case ws.NO_ERROR:const u=a.getResponseJson();E("Connection","XHR received:",JSON.stringify(u)),i(u);break;case ws.TIMEOUT:E("Connection",'RPC "'+e+'" timed out'),o(new S(p.DEADLINE_EXCEEDED,"Request time out"));break;case ws.HTTP_ERROR:const l=a.getStatus();if(E("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const y=function(w){const x=w.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(x)>=0?x:p.UNKNOWN}(d.status);o(new S(y,d.message))}else o(new S(p.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new S(p.UNAVAILABLE,"Connection failed."));break;default:C()}}finally{E("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=oh(),o=ah(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new lh({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");E("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const d=new ef({Hr:w=>{h?E("Connection","Not sending because WebChannel is closed:",w):(l||(E("Connection","Opening WebChannel transport."),u.open(),l=!0),E("Connection","WebChannel sending:",w),u.send(w))},Jr:()=>u.close()}),y=(w,x,O)=>{w.listen(x,Z=>{try{O(Z)}catch(G){setTimeout(()=>{throw G},0)}})};return y(u,cn.EventType.OPEN,()=>{h||E("Connection","WebChannel transport opened.")}),y(u,cn.EventType.CLOSE,()=>{h||(h=!0,E("Connection","WebChannel transport closed"),d.io())}),y(u,cn.EventType.ERROR,w=>{h||(h=!0,Bs("Connection","WebChannel transport errored:",w),d.io(new S(p.UNAVAILABLE,"The operation could not be completed")))}),y(u,cn.EventType.MESSAGE,w=>{var x;if(!h){const O=w.data[0];P(!!O);const Z=O,G=Z.error||((x=Z[0])===null||x===void 0?void 0:x.error);if(G){E("Connection","WebChannel received error:",G);const Xe=G.status;let Se=function(as){const yt=$[as];if(yt!==void 0)return xa(yt)}(Xe),Re=G.message;Se===void 0&&(Se=p.INTERNAL,Re="Unknown error status: "+Xe+" with message "+G.message),h=!0,d.io(new S(Se,Re)),u.close()}else E("Connection","WebChannel received:",O),d.ro(O)}}),y(o,uh.STAT_EVENT,w=>{w.stat===mi.PROXY?E("Connection","Detected buffering proxy"):w.stat===mi.NOPROXY&&E("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function bs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(t){return new hd(t,!0)}class Ha{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&E("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Ha(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===p.RESOURCE_EXHAUSTED?(Ee(n.toString()),Ee("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new S(p.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return E("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(E("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nf extends Ka{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.yt=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=pd(this.yt,e),s=function(r){if(!("targetChange"in r))return D.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?D.min():i.readTime?pe(i.readTime):D.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=Ws(this.yt),n.addTarget=function(r,i){let o;const a=i.target;return o=js(a)?{documents:yd(r,a)}:{query:vd(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Fa(r,i.resumeToken):i.snapshotVersion.compareTo(D.min())>0&&(o.readTime=kn(r,i.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=Ed(this.yt,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=Ws(this.yt),n.removeTarget=e,this.Bo(n)}}class sf extends Ka{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(P(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=md(e.writeResults,e.commitTime),s=pe(e.commitTime);return this.listener.Zo(s,n)}return P(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Ws(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>gd(this.yt,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.yt=r,this.nu=!1}su(){if(this.nu)throw new S(p.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new S(p.UNKNOWN,r.toString())})}_o(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new S(p.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class of{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Ee(n),this.ou=!1):E("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{Qe(this)&&(E("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=A(a);c._u.add(4),await tn(c),c.gu.set("Unknown"),c._u.delete(4),await ns(c)}(this))})}),this.gu=new of(s,r)}}async function ns(t){if(Qe(t))for(const e of t.wu)await e(!0)}async function tn(t){for(const e of t.wu)await e(!1)}function za(t,e){const n=A(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Or(n)?Rr(n):mt(n).ko()&&_r(n,e))}function Ga(t,e){const n=A(t),s=mt(n);n.du.delete(e),s.ko()&&Wa(n,e),n.du.size===0&&(s.ko()?s.Fo():Qe(n)&&n.gu.set("Unknown"))}function _r(t,e){t.yu.Ot(e.targetId),mt(t).zo(e)}function Wa(t,e){t.yu.Ot(e),mt(t).Ho(e)}function Rr(t){t.yu=new ad({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),mt(t).start(),t.gu.uu()}function Or(t){return Qe(t)&&!mt(t).No()&&t.du.size>0}function Qe(t){return A(t)._u.size===0}function Qa(t){t.yu=void 0}async function cf(t){t.du.forEach((e,n)=>{_r(t,e)})}async function uf(t,e){Qa(t),Or(t)?(t.gu.hu(e),Rr(t)):t.gu.set("Unknown")}async function lf(t,e,n){if(t.gu.set("Online"),e instanceof Ma&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){E("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await _n(t,s)}else if(e instanceof pn?t.yu.Kt(e):e instanceof La?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(D.min()))try{const s=await ja(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.Zt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.du.get(c);u&&r.du.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(ie.EMPTY_BYTE_STRING,c.snapshotVersion)),Wa(r,a);const u=new $e(c.target,a,1,c.sequenceNumber);_r(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){E("RemoteStore","Failed to raise snapshot:",s),await _n(t,s)}}async function _n(t,e,n){if(!Zt(e))throw e;t._u.add(1),await tn(t),t.gu.set("Offline"),n||(n=()=>ja(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{E("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await ns(t)})}function Xa(t,e){return e().catch(n=>_n(t,n,e))}async function ss(t){const e=A(t),n=xe(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;hf(e);)try{const r=await Wd(e.localStore,s);if(r===null){e.fu.length===0&&n.Fo();break}s=r.batchId,df(e,r)}catch(r){await _n(e,r)}Ya(e)&&Ja(e)}function hf(t){return Qe(t)&&t.fu.length<10}function df(t,e){t.fu.push(e);const n=xe(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function Ya(t){return Qe(t)&&!xe(t).No()&&t.fu.length>0}function Ja(t){xe(t).start()}async function ff(t){xe(t).eu()}async function pf(t){const e=xe(t);for(const n of t.fu)e.Xo(n.mutations)}async function gf(t,e,n){const s=t.fu.shift(),r=Ar.from(s,e,n);await Xa(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await ss(t)}async function mf(t,e){e&&xe(t).Yo&&await async function(n,s){if(r=s.code,nd(r)&&r!==p.ABORTED){const i=n.fu.shift();xe(n).Mo(),await Xa(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ss(n)}var r}(t,e),Ya(t)&&Ja(t)}async function Ui(t,e){const n=A(t);n.asyncQueue.verifyOperationInProgress(),E("RemoteStore","RemoteStore received new credentials");const s=Qe(n);n._u.add(3),await tn(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await ns(n)}async function yf(t,e){const n=A(t);e?(n._u.delete(2),await ns(n)):e||(n._u.add(2),await tn(n),n.gu.set("Unknown"))}function mt(t){return t.pu||(t.pu=function(e,n,s){const r=A(e);return r.su(),new nf(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:cf.bind(null,t),Zr:uf.bind(null,t),Wo:lf.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Or(t)?Rr(t):t.gu.set("Unknown")):(await t.pu.stop(),Qa(t))})),t.pu}function xe(t){return t.Iu||(t.Iu=function(e,n,s){const r=A(e);return r.su(),new sf(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:ff.bind(null,t),Zr:mf.bind(null,t),tu:pf.bind(null,t),Zo:gf.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await ss(t)):(await t.Iu.stop(),t.fu.length>0&&(E("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new De,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Lr(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new S(p.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Mr(t,e){if(Ee("AsyncQueue",`${e}: ${t}`),Zt(t))return new S(p.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.comparator=e?(n,s)=>e(n,s)||b.comparator(n.key,s.key):(n,s)=>b.comparator(n.key,s.key),this.keyedMap=Tt(),this.sortedSet=new z(this.comparator)}static emptySet(e){return new nt(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new nt;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(){this.Tu=new z(b.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):C():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class ut{constructor(e,n,s,r,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ut(e,n,nt.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xn(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(){this.Au=void 0,this.listeners=[]}}class wf{constructor(){this.queries=new gt(e=>va(e),Xn),this.onlineState="Unknown",this.Ru=new Set}}async function Ef(t,e){const n=A(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new vf),r)try{i.Au=await n.onListen(s)}catch(o){const a=Mr(o,`Initialization of query '${Ks(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&Fr(n)}async function bf(t,e){const n=A(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Tf(t,e){const n=A(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&Fr(n)}function Sf(t,e,n){const s=A(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Fr(t){t.Ru.forEach(e=>{e.next()})}class If{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new ut(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=ut.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e){this.key=e}}class ec{constructor(e){this.key=e}}class Cf{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=k(),this.mutatedKeys=k(),this.Gu=wa(e),this.Qu=new nt(this.Gu)}get ju(){return this.qu}Wu(e,n){const s=n?n.zu:new Bi,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,h)=>{const d=r.get(l),y=Cr(this.query,h)?h:null,w=!!d&&this.mutatedKeys.has(d.key),x=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let O=!1;d&&y?d.data.isEqual(y.data)?w!==x&&(s.track({type:3,doc:y}),O=!0):this.Hu(d,y)||(s.track({type:2,doc:y}),O=!0,(c&&this.Gu(y,c)>0||u&&this.Gu(y,u)<0)&&(a=!0)):!d&&y?(s.track({type:0,doc:y}),O=!0):d&&!y&&(s.track({type:1,doc:d}),O=!0,(c||u)&&(a=!0)),O&&(y?(o=o.add(y),i=x?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((u,l)=>function(h,d){const y=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return C()}};return y(h)-y(d)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new ut(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Bi,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=k(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new ec(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new Za(s))}),n}tc(e){this.qu=e.Hi,this.Ku=k();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return ut.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class Df{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Af{constructor(e){this.key=e,this.nc=!1}}class Nf{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new gt(a=>va(a),Xn),this.rc=new Map,this.oc=new Set,this.uc=new z(b.comparator),this.cc=new Map,this.ac=new Nr,this.hc={},this.lc=new Map,this.fc=ct.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function xf(t,e){const n=Uf(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await Qd(n.localStore,be(e));n.isPrimaryClient&&za(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await kf(n,e,s,a==="current",o.resumeToken)}return r}async function kf(t,e,n,s,r){t._c=(h,d,y)=>async function(w,x,O,Z){let G=x.view.Wu(O);G.$i&&(G=await Fi(w.localStore,x.query,!1).then(({documents:Re})=>x.view.Wu(Re,G)));const Xe=Z&&Z.targetChanges.get(x.targetId),Se=x.view.applyChanges(G,w.isPrimaryClient,Xe);return qi(w,x.targetId,Se.Xu),Se.snapshot}(t,h,d,y);const i=await Fi(t.localStore,e,!0),o=new Cf(e,i.Hi),a=o.Wu(i.documents),c=en.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,c);qi(t,n,u.Xu);const l=new Df(e,n,o);return t.ic.set(e,l),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function _f(t,e){const n=A(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!Xn(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Qs(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Ga(n.remoteStore,s.targetId),Xs(n,s.targetId)}).catch(Jt)):(Xs(n,s.targetId),await Qs(n.localStore,s.targetId,!0))}async function Rf(t,e,n){const s=Bf(t);try{const r=await function(i,o){const a=A(i),c=H.now(),u=o.reduce((d,y)=>d.add(y.key),k());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let y=Te(),w=k();return a.Gi.getEntries(d,u).next(x=>{y=x,y.forEach((O,Z)=>{Z.isValidDocument()||(w=w.add(O))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,y)).next(x=>{l=x;const O=[];for(const Z of o){const G=Zh(Z,l.get(Z.key).overlayedDocument);G!=null&&O.push(new We(Z.key,G,ya(G.value.mapValue),ve.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,O,o)}).next(x=>{h=x;const O=x.applyToLocalDocumentSet(l,w);return a.documentOverlayCache.saveOverlays(d,x.batchId,O)})}).then(()=>({batchId:h.batchId,changes:_a(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new z(M)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(s,r.batchId,n),await nn(s,r.changes),await ss(s.remoteStore)}catch(r){const i=Mr(r,"Failed to persist write");n.reject(i)}}async function tc(t,e){const n=A(t);try{const s=await zd(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(P(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?P(o.nc):r.removedDocuments.size>0&&(P(o.nc),o.nc=!1))}),await nn(n,s,e)}catch(s){await Jt(s)}}function $i(t,e,n){const s=A(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=A(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.bu(o)&&(c=!0)}),c&&Fr(a)}(s.eventManager,e),r.length&&s.sc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Of(t,e,n){const s=A(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new z(b.comparator);o=o.insert(i,te.newNoDocument(i,D.min()));const a=k().add(i),c=new es(D.min(),new Map,new K(M),o,a);await tc(s,c),s.uc=s.uc.remove(i),s.cc.delete(e),Pr(s)}else await Qs(s.localStore,e,!1).then(()=>Xs(s,e,n)).catch(Jt)}async function Lf(t,e){const n=A(t),s=e.batch.batchId;try{const r=await Kd(n.localStore,e);sc(n,s,null),nc(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await nn(n,r)}catch(r){await Jt(r)}}async function Mf(t,e,n){const s=A(t);try{const r=await function(i,o){const a=A(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(P(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);sc(s,e,n),nc(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await nn(s,r)}catch(r){await Jt(r)}}function nc(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function sc(t,e,n){const s=A(t);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function Xs(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||rc(t,s)})}function rc(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(Ga(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Pr(t))}function qi(t,e,n){for(const s of n)s instanceof Za?(t.ac.addReference(s.key,e),Ff(t,s)):s instanceof ec?(E("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||rc(t,s.key)):C()}function Ff(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(E("SyncEngine","New document in limbo: "+n),t.oc.add(s),Pr(t))}function Pr(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new b(U.fromString(e)),s=t.fc.next();t.cc.set(s,new Af(n)),t.uc=t.uc.insert(n,s),za(t.remoteStore,new $e(be(Ir(n.path)),s,2,Er.at))}}async function nn(t,e,n){const s=A(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const l=kr.Ci(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const u=A(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>f.forEach(c,h=>f.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>f.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!Zt(l))throw l;E("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.qi.get(h),y=d.snapshotVersion,w=d.withLastLimboFreeSnapshotVersion(y);u.qi=u.qi.insert(h,w)}}}(s.localStore,i))}async function Pf(t,e){const n=A(t);if(!n.currentUser.isEqual(e)){E("SyncEngine","User change. New user:",e.toKey());const s=await qa(n.localStore,e);n.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new S(p.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await nn(n,s.ji)}}function Vf(t,e){const n=A(t),s=n.cc.get(e);if(s&&s.nc)return k().add(s.key);{let r=k();const i=n.rc.get(e);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function Uf(t){const e=A(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=tc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Vf.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Of.bind(null,e),e.sc.Wo=Tf.bind(null,e.eventManager),e.sc.wc=Sf.bind(null,e.eventManager),e}function Bf(t){const e=A(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Lf.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Mf.bind(null,e),e}class $f{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=ts(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return Hd(this.persistence,new qd,e.initialUser,this.yt)}yc(e){return new Bd(xr.Bs,this.yt)}gc(e){return new Yd}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class qf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>$i(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Pf.bind(null,this.syncEngine),await yf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new wf}createDatastore(e){const n=ts(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new tf(r));var r;return function(i,o,a,c){return new rf(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>$i(this.syncEngine,a,0),o=Vi.C()?new Vi:new Jd,new af(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,u){const l=new Nf(s,r,i,o,a,c);return u&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=A(e);E("RemoteStore","RemoteStore shutting down."),n._u.add(5),await tn(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jf(t,e,n){if(!n)throw new S(p.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Hf(t,e,n,s){if(e===!0&&s===!0)throw new S(p.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ji(t){if(!b.isDocumentKey(t))throw new S(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Vr(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":C()}function $t(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new S(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vr(t);throw new S(p.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi=new Map;class Ki{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new S(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new S(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Hf("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ki({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new S(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new S(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ki(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new dh;switch(n.type){case"gapi":const s=n.client;return new mh(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new S(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Hi.get(e);n&&(E("ComponentProvider","Removing Datastore"),Hi.delete(e),n.terminate())}(this),Promise.resolve()}}function Kf(t,e,n,s={}){var r;const i=(t=$t(t,Ur))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Bs("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=ee.MOCK_USER;else{o=Xc(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new S(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ee(c)}t._authCredentials=new fh(new oa(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new le(this.firestore,e,this._key)}}class Br{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Br(this.firestore,e,this._query)}}class qt extends Br{constructor(e,n,s){super(e,n,Ir(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new le(this.firestore,null,new b(e))}withConverter(e){return new qt(this.firestore,e,this._path)}}function Le(t,e,...n){if(t=qe(t),arguments.length===1&&(e=aa.R()),jf("doc","path",e),t instanceof Ur){const s=U.fromString(e,...n);return ji(s),new le(t,null,new b(s))}{if(!(t instanceof le||t instanceof qt))throw new S(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(U.fromString(e,...n));return ji(s),new le(t.firestore,t instanceof qt?t.converter:null,new b(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Ee("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=ee.UNAUTHENTICATED,this.clientId=aa.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{E("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(E("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new S(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new De;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Mr(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Wf(t,e){t.asyncQueue.verifyOperationInProgress(),E("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await qa(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Qf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Xf(t);E("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Ui(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Ui(e.remoteStore,i)),t.onlineComponents=e}async function Xf(t){return t.offlineComponents||(E("FirestoreClient","Using default OfflineComponentProvider"),await Wf(t,new $f)),t.offlineComponents}async function ic(t){return t.onlineComponents||(E("FirestoreClient","Using default OnlineComponentProvider"),await Qf(t,new qf)),t.onlineComponents}function Yf(t){return ic(t).then(e=>e.syncEngine)}async function Jf(t){const e=await ic(t),n=e.eventManager;return n.onListen=xf.bind(null,e.syncEngine),n.onUnlisten=_f.bind(null,e.syncEngine),n}function Zf(t,e,n={}){const s=new De;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new zf({next:h=>{i.enqueueAndForget(()=>bf(r,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new S(p.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new S(p.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new If(Ir(o.path),u,{includeMetadataChanges:!0,Nu:!0});return Ef(r,l)}(await Jf(t),t.asyncQueue,e,n,s)),s.promise}class ep{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Ha(this,"async_queue_retry"),this.Wc=()=>{const n=bs();n&&E("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=bs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=bs();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new De;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Zt(e))throw e;E("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Ee("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const r=Lr.createAndSchedule(this,e,n,s,i=>this.Yc(i));return this.Uc.push(r),r}zc(){this.Kc&&C()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class $r extends Ur{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new ep,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ac(this),this._firestoreClient.terminate()}}function tp(t,e){const n=typeof t=="object"?t:Ju(),s=typeof t=="string"?t:e||"(default)",r=Wu(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Gc("firestore");i&&Kf(r,...i)}return r}function oc(t){return t._firestoreClient||ac(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ac(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new Dh(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Gf(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new lt(ie.fromBase64String(e))}catch(n){throw new S(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new lt(ie.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new S(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ne(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new S(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new S(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return M(this._lat,e._lat)||M(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np=/^__.*__$/;class cc{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new We(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function uc(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw C()}}class Hr{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Hr(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.ua(e),r}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Rn(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(uc(this.sa)&&np.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class sp{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=s||ts(e)}da(e,n,s,r=!1){return new Hr({sa:e,methodName:n,fa:s,path:ne.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function rp(t){const e=t._freezeSettings(),n=ts(t._databaseId);return new sp(t._databaseId,!!e.ignoreUndefinedProperties,n)}class is extends qr{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof is}}function ip(t,e,n,s){const r=t.da(1,e,n);hc("Data must be an object, but it was:",r,s);const i=[],o=ce.empty();Ge(s,(c,u)=>{const l=Kr(e,c,n);u=qe(u);const h=r.ca(l);if(u instanceof is)i.push(l);else{const d=os(u,h);d!=null&&(i.push(l),o.set(l,d))}});const a=new fe(i);return new cc(o,a,r.fieldTransforms)}function op(t,e,n,s,r,i){const o=t.da(1,e,n),a=[zi(e,s,n)],c=[r];if(i.length%2!=0)throw new S(p.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(zi(e,i[d])),c.push(i[d+1]);const u=[],l=ce.empty();for(let d=a.length-1;d>=0;--d)if(!up(u,a[d])){const y=a[d];let w=c[d];w=qe(w);const x=o.ca(y);if(w instanceof is)u.push(y);else{const O=os(w,x);O!=null&&(u.push(y),l.set(y,O))}}const h=new fe(u);return new cc(l,h,o.fieldTransforms)}function os(t,e){if(lc(t=qe(t)))return hc("Unsupported field value:",e,t),ap(t,e);if(t instanceof qr)return function(n,s){if(!uc(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=os(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=qe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Gh(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=H.fromDate(n);return{timestampValue:kn(s.yt,r)}}if(n instanceof H){const r=new H(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:kn(s.yt,r)}}if(n instanceof jr)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof lt)return{bytesValue:Fa(s.yt,n._byteString)};if(n instanceof le){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Dr(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Vr(n)}`)}(t,e)}function ap(t,e){const n={};return ca(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ge(t,(s,r)=>{const i=os(r,e.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function lc(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof H||t instanceof jr||t instanceof lt||t instanceof le||t instanceof qr)}function hc(t,e,n){if(!lc(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Vr(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function zi(t,e,n){if((e=qe(e))instanceof rs)return e._internalPath;if(typeof e=="string")return Kr(t,e);throw Rn("Field path arguments must be of type string or ",t,!1,void 0,n)}const cp=new RegExp("[~\\*/\\[\\]]");function Kr(t,e,n){if(e.search(cp)>=0)throw Rn(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new rs(...e.split("."))._internalPath}catch{throw Rn(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Rn(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new S(p.INVALID_ARGUMENT,a+t+c)}function up(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new lp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(fc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class lp extends dc{data(){return super.data()}}function fc(t,e){return typeof e=="string"?Kr(t,e):e instanceof rs?e._internalPath:e._delegate._internalPath}class hp{convertValue(e,n="none"){switch(Ke(e)){case 0:return null;case 1:return e.booleanValue;case 2:return q(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(it(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw C()}}convertObject(e,n){const s={};return Ge(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new jr(q(e.latitude),q(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=la(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Pt(e));default:return null}}convertTimestamp(e){const n=Ne(e);return new H(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=U.fromString(e);P($a(s));const r=new Ft(s.get(1),s.get(3)),i=new b(s.popFirst(5));return r.isEqual(n)||Ee(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class pc extends dc{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new fp(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(fc("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class fp extends pc{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(t){t=$t(t,le);const e=$t(t.firestore,$r);return Zf(oc(e),t._key).then(n=>mp(e,t,n))}class pp extends hp{constructor(e){super(),this.firestore=e}convertBytes(e){return new lt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new le(this.firestore,null,n)}}function Ts(t,e,n,...s){t=$t(t,le);const r=$t(t.firestore,$r),i=rp(r);let o;return o=typeof(e=qe(e))=="string"||e instanceof rs?op(i,"updateDoc",t._key,e,n,s):ip(i,"updateDoc",t._key,e),gp(r,[o.toMutation(t._key,ve.exists(!0))])}function gp(t,e){return function(n,s){const r=new De;return n.asyncQueue.enqueueAndForget(async()=>Rf(await Yf(n),s,r)),r.promise}(oc(t),e)}function mp(t,e,n){const s=n.docs.get(e._key),r=new pp(t);return new pc(t,r,e._key,s,new dp(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){pt=n})(Yu),yn(new Nt("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new $r(new ph(n.getProvider("auth-internal")),new vh(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new S(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ft(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),et(yi,"3.8.0",t),et(yi,"3.8.0","esm2017")})();const yp={apiKey:"AIzaSyABEReprjiIcKJBuCehs9bBkyzouRBJmec",authDomain:"website-502fe.firebaseapp.com",projectId:"website-502fe",storageBucket:"website-502fe.appspot.com",messagingSenderId:"820514700793",appId:"1:820514700793:web:ffaaa20c73563b7334d128",measurementId:"G-CVDD3NX4MK"},vp=eo(yp),Me=tp(vp),wp=({setOpen:t,children:e})=>g("div",{className:"w-screen h-screen z-50 fixed items-center justify-center flex",onClick:()=>{t(!1)},children:e}),Ep="/assets/giftbox-fScXdi6S.png",bp=()=>g("div",{className:"md:bg-blue-50 zoom-in-animation md:border-8 md:border-solid md:border-blue-400 p-2 md:p-8 mx-4",onClick:t=>{t.stopPropagation()},children:F("div",{className:"flex flex-col text-black gap-2 p-2 md:p-8 border-4 border-solid border-green-200 rounded-xl bg-yellow-50",children:[F("div",{className:"w-full justify-between flex items-center text-sm md:text-xl",children:[g("span",{children:"💚"}),g("span",{children:"💝"}),g("span",{children:"💚"}),g("span",{children:"💝"}),g("span",{children:"💚"}),g("span",{children:"💝"}),g("span",{children:"💚"}),g("span",{children:"💝"}),g("span",{children:"💚"}),g("span",{children:"💝"}),g("span",{children:"💚"}),g("span",{children:"💝"})]}),F("h1",{className:"font-bold text-3xl md:text-5xl text-center cursive flex justify-between items-center gap-2 whitespace-nowrap",children:[g("span",{className:"text-lg md:text-3xl",children:"🎂"}),"Happy Birthday Kate",g("span",{className:"text-lg md:text-3xl",children:"🎂"})]}),F("div",{className:"w-full justify-between flex items-center text-sm md:text-xl",children:[g("span",{children:"💚"}),g("span",{children:"💝"}),g("span",{children:"💚"}),g("span",{children:"💝"}),g("span",{children:"💚"}),g("span",{children:"💝"}),g("span",{children:"💚"}),g("span",{children:"💝"}),g("span",{children:"💚"}),g("span",{children:"💝"}),g("span",{children:"💚"}),g("span",{children:"💝"})]}),F("div",{className:"font-mono font-bold max-w-[450px]",children:[g("br",{}),g("h3",{children:"To my favorite, most beautiful girl,"}),g("br",{}),g("p",{children:"I love you."}),g("p",{children:"I wish I could be there for your 21st, but I'm still glad I can surprise you with a cute letter. I hope I'll be there for the next one. I'm really proud of everything you've done since we met, I appreciate how hard you try, I love you so much."}),g("br",{}),g("p",{children:"Yours,"})]})]})}),Tp=()=>{const[t,e]=ae.useState(!0),[n,s]=ae.useState({}),[r,i]=ae.useState(!1),[o,a]=ae.useState(!1),[c,u]=ae.useState(""),[l,h]=ae.useState([]),[d,y]=ae.useState([]),[w,x]=ae.useState(new Date),[O,Z]=ae.useState(!1),[G,Xe]=ae.useState(!1),[Se,Re]=ae.useState(!1),[as,yt]=ae.useState("happy"),Oe="girlfriend-form",zr="feelings",Gr="tasks",gc="notes",Wr="mood",mc=()=>{Xe(!0),setTimeout(()=>{Re(!1),Z(!0)},500)},yc=(m,_)=>{const T=[];for(let N=m;N<=_;N++)T.push(N);return T},vc=async m=>{const _=Le(Me,Oe,zr);return(await hn(_)).data()[m]},wc=async m=>{const _=Le(Me,Oe,Gr);return(await hn(_)).data()[m]},Ec=async()=>{const m=w.toDateString(),_=await vc(m);_?(s({..._.answers}),i(_.morning===!0),a(_.night===!0),_.morning&&e(!1)):(s({}),i(!1),a(!1));const T=await wc(m);y(T||[]);const N=Le(Me,Oe,gc);(await hn(N)).data().birthday&&Re(!0);const he=Le(Me,Oe,Wr),Ic=await hn(he);yt(Ic.data().mood)},bc=async m=>{const _=Le(Me,Oe,Wr);await Ts(_,{mood:m}),yt(m)},sn=(m,_)=>{const T={...n};T[m]=_,s(T)},Tc=async()=>{if(!r&&!t){u("Babe, submit the morning form first ❤️");return}const m={},_=Le(Me,Oe,zr);for(const T of Object.keys(n))(T.startsWith("m")||!t)&&(m[T]=n[T]);await Ts(_,{[w.toDateString()]:{answers:m,morning:!0,night:!t}}),t?i(!0):a(!0),e(!t)},Sc=async m=>{m.preventDefault();const _=Le(Me,Oe,Gr);await Ts(_,{[w.toDateString()]:d})};return ae.useEffect(()=>{Ec()},[w]),ae.useEffect(()=>{const m=setInterval(()=>{h(_=>{const T=[..._];for(let N=T.length-1;N>=0;N--){if(T[N].y>=window.innerHeight||T[N].icon==="❤️"&&T[N].opacity<=0){T.splice(N,1);continue}T[N].opacity+=T[N].icon==="❤️"?-1:.2,T[N].icon!=="❤️"&&(T[N].y+=T[N].speed,T[N].x+=T[N].direction)}if(Math.random()<.1&&T.length<20){const N=["❤️","🎂","🎉"][Math.floor(Math.random()*3)];return[...T,{opacity:N==="❤️"?90:0,size:Math.random()*(N==="❤️"?50:60)+14,x:Math.random()*(window.innerWidth-100),y:Math.random()*((window.innerHeight-100)/(N==="❤️"?1:2)),icon:N,speed:Math.random()+1.5,direction:Math.random()*2-1}]}return T})},33.333333333333336);return()=>clearInterval(m)},[]),F("div",{className:"bg-black w-screen h-screen flex items-center justify-center",children:[g("div",{className:"w-screen h-screen absolute overflow-hidden",children:l.map((m,_)=>g("span",{className:"absolute animate-emoji",style:{fontSize:`${m.size}px`,opacity:m.opacity/100,left:`${m.x}px`,top:`${m.y}px`},children:m.icon},_))}),O?g(wp,{setOpen:Z,children:g(bp,{})}):"",F("div",{className:"z-10 flex items-center w-screen h-screen flex-col gap-8 p-8 pb-20 overflow-x-hidden overflow-y-auto",children:[F("div",{className:"flex items-center gap-4",children:[g("h1",{className:"font-bold text-4xl text-green-200",children:w.toDateString()}),g("input",{type:"date",max:new Date().toLocaleDateString("fr-ca"),onChange:m=>{const _=new Date(m.target.value),T=_.getTimezoneOffset();x(new Date(_.getTime()+T*60*1e3))}})]}),F("form",{className:"flex flex-col items-center",children:[F("div",{className:"flex items-center gap-4 mb-8",children:[g("h1",{className:"font-bold text-2xl w-full text-center text-pink-200",children:"TODO List"}),g("button",{className:"px-4 py-1 border-4 rounded-xl border-solid border-stone-700 text-red-100 whitespace-nowrap hover:bg-stone-700 duration-200 hover:text-green-500",onClick:Sc,children:"Update 💚"})]}),Se?g("div",{className:`mb-8 cursor-pointer animate-pulse animate-bounce ${G?"animate-ping":""}`,onClick:()=>{mc()},children:g("img",{src:Ep,width:64})}):"",g("div",{className:`flex gap-20 mb-8 flex-wrap select-none ${w.toDateString()!==new Date().toDateString()?"pointer-events-none":""}`,children:Oc.map((m,_)=>{var T;return!((T=m.condition)!=null&&T.length)||m.condition.includes(w.getDay())?F("div",{className:"flex flex-col gap-2",children:[g("h1",{className:"font-bold text-lg mb-4 text-blue-100",children:m.name}),m.options.map((N,vt)=>{var he;return!((he=N.condition)!=null&&he.length)||N.condition.includes(w.getDay())?F("label",{className:"flex gap-2 cursor-pointer",children:[g("input",{type:"checkbox",className:"scale-150 cursor-pointer",checked:d.includes(N.value),onChange:()=>{d.includes(N.value)?d.splice(d.indexOf(N.value),1):d.push(N.value)}}),N.label]},vt):""})]},_):""})}),F("div",{className:"flex w-full justify-center gap-8 select-none",children:[g("button",{className:`p-4 text-green-200 duration-200 ${t?"bg-slate-700 border-b-2 border-solid border-white":"bg-slate-900 border-transparent border-b-2"}`,onClick:m=>{m.preventDefault(),u(""),e(!0)},children:"Morning Girlfriend Form ☀️"}),g("button",{className:`p-4 text-green-200 duration-200 ${t?"bg-slate-900 border-transparent border-b-2":"bg-slate-700 border-b-2 border-solid border-white"}`,onClick:m=>{m.preventDefault(),u(""),e(!1)},children:"Night Girlfriend Form 🌙"})]}),F("div",{className:`flex flex-col md:items-center pt-8 gap-20 md:w-[640px] select-none ${t&&r||!t&&o||w.toDateString()!==new Date().toDateString()?"pointer-events-none":""}`,children:[(t?Lc:Mc).map((m,_)=>{switch(m.type){case"scale":return F("div",{className:"flex flex-col gap-4",children:[g("h1",{className:"font-bold text-lg mb-4 text-green-200",children:m.question}),F("div",{className:"flex md:gap-20 gap-8 md:flex-row flex-col md:items-end",children:[g("span",{children:m.startText}),g("div",{className:"flex md:gap-20 gap-4 flex-col md:flex-row",children:yc(m.start,m.end).map((T,N)=>F("label",{className:"flex md:flex-col flex-row gap-8 cursor-pointer",children:[T,g("input",{className:"scale-150 cursor-pointer",type:"radio",value:"test",name:m.id,checked:n[m.id]===N,onChange:()=>{sn(m.id,N)}})]},N))}),g("span",{children:m.endText})]})]},_);case"checklist":return F("div",{className:"flex flex-col gap-4",children:[g("h1",{className:"font-bold text-lg mb-4 text-green-200",children:m.question}),g("div",{className:"flex gap-20 items-end",children:g("div",{className:"flex gap-6 max-w-[640px] flex-wrap",children:m.options.map((T,N)=>{var vt;return F("label",{className:"flex gap-2 cursor-pointer",children:[g("input",{type:"checkbox",className:"scale-150 cursor-pointer",checked:((vt=n[m.id])==null?void 0:vt.includes(T.value))||!1,onChange:()=>{const he=n[m.id]?[...n[m.id]]:[];he.includes(T.value)?he.splice(he.indexOf(T.value),1):he.push(T.value),sn(m.id,he)}}),T.label]},N)})})})]},_);case"radio":return F("div",{className:"flex flex-col gap-4 justify-start w-full",children:[g("h1",{className:"font-bold text-lg mb-4 text-green-200",children:m.question}),g("div",{className:"flex gap-20 items-end",children:g("div",{className:"flex gap-6 flex-wrap",children:m.options.map((T,N)=>F("label",{className:"flex gap-2 cursor-pointer",children:[g("input",{type:"radio",className:"scale-150 cursor-pointer",checked:n[m.id]===T.value,onChange:()=>{sn(m.id,T.value)},name:m.id}),T.label]},N))})})]},_);case"text":return F("div",{className:"flex flex-col gap-4 justify-start w-full",children:[g("h1",{className:"font-bold text-lg mb-4 text-green-200",children:m.question}),g("div",{className:"flex gap-20 items-end",children:g("input",{placeholder:m.question,type:"text",className:"w-full outline-none bg-transparent border-b-white border-solid border-b-2 py-2",value:n[m.id]||"",onChange:T=>{sn(m.id,T.target.value)}})})]},_)}}),F("div",{className:"flex flex-col gap-2 items-center",children:[" ",c?F("div",{className:"flex text-pink-200 gap-4",children:[g("p",{children:c}),g("button",{className:"text-red-500",onClick:m=>{m.preventDefault(),u("")},children:"X"})]}):"",F("button",{className:"px-4 p-2 bg-slate-800 rounded hover:bg-slate-700 duration-200",onClick:m=>{m.preventDefault(),Tc()},children:[t&&r||!t&&o?"Submitted":"Submit"," ",t?"☀️":"🌙"]})]})]})]}),F("div",{className:"flex flex-col items-center gap-8",children:[g("h1",{className:"font-bold text-4xl text-red-400",children:"Mood"}),g("div",{className:"flex gap-12 flex-wrap justify-center font-mono",children:Fc.map((m,_)=>F("div",{className:`p-4 duration-200 rounded-xl flex flex-col items-center gap-2 w-[114px] border-2 border-solid ${m.value===as?"border-white":"border-slate-800 cursor-pointer hover:bg-slate-900"}`,onClick:()=>{bc(m.value)},children:[g("img",{src:m.icon,width:50}),g("span",{className:`mood-${m.value}`,children:m.label})]},_))})]})]})]})};function Sp(){return g(Tp,{})}Cc.createRoot(document.getElementById("root")).render(g(Dc.StrictMode,{children:g(Sp,{})}));
