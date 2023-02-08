﻿(()=>{"use strict";var e,r,t,n={239864:(e,r,t)=>{t.r(r),t.d(r,{FunctionToString:()=>o.FunctionToString,Hub:()=>i.Hub,InboundFilters:()=>a.InboundFilters,SDK_VERSION:()=>s.SDK_VERSION,Scope:()=>u.Scope,addBreadcrumb:()=>l.addBreadcrumb,addGlobalEventProcessor:()=>u.addGlobalEventProcessor,captureEvent:()=>l.captureEvent,captureException:()=>l.captureException,captureMessage:()=>l.captureMessage,configureScope:()=>l.configureScope,createTransport:()=>d.createTransport,getCurrentHub:()=>i.getCurrentHub,getHubFromCarrier:()=>i.getHubFromCarrier,makeMain:()=>i.makeMain,setContext:()=>l.setContext,setExtra:()=>l.setExtra,setExtras:()=>l.setExtras,setTag:()=>l.setTag,setTags:()=>l.setTags,setUser:()=>l.setUser,startTransaction:()=>l.startTransaction,withScope:()=>l.withScope,WINDOW:()=>c.WINDOW,BrowserClient:()=>f.BrowserClient,makeFetchTransport:()=>p.makeFetchTransport,makeXHRTransport:()=>g.makeXHRTransport,chromeStackLineParser:()=>_.chromeStackLineParser,defaultStackLineParsers:()=>_.defaultStackLineParsers,defaultStackParser:()=>_.defaultStackParser,geckoStackLineParser:()=>_.geckoStackLineParser,opera10StackLineParser:()=>_.opera10StackLineParser,opera11StackLineParser:()=>_.opera11StackLineParser,winjsStackLineParser:()=>_.winjsStackLineParser,close:()=>m.close,defaultIntegrations:()=>m.defaultIntegrations,flush:()=>m.flush,forceLoad:()=>m.forceLoad,init:()=>m.init,lastEventId:()=>m.lastEventId,onLoad:()=>m.onLoad,showReportDialog:()=>m.showReportDialog,wrap:()=>m.wrap,GlobalHandlers:()=>y.GlobalHandlers,TryCatch:()=>S.TryCatch,Breadcrumbs:()=>E.Breadcrumbs,LinkedErrors:()=>b.LinkedErrors,HttpContext:()=>h.HttpContext,Dedupe:()=>O.Dedupe,Integrations:()=>T});t(175115);var n=t(941194),o=t(981552),i=t(279249),a=t(73510),s=t(403286),u=t(30031),l=t(305640),d=t(624240),c=t(127279),v=t(817925),f=t(230977),p=t(56052),g=t(704033),_=t(902206),m=t(967866),y=t(928491),S=t(645748),E=t(754160),b=t(895963),h=t(449003),O=t(433115);function w(){return w=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},w.apply(this,arguments)}var k={};c.WINDOW.Sentry&&c.WINDOW.Sentry.Integrations&&(k=c.WINDOW.Sentry.Integrations);var T=w({},k,{},n,{},v)},817925:(e,r,t)=>{t.r(r),t.d(r,{GlobalHandlers:()=>n.GlobalHandlers,TryCatch:()=>o.TryCatch,Breadcrumbs:()=>i.Breadcrumbs,LinkedErrors:()=>a.LinkedErrors,HttpContext:()=>s.HttpContext,Dedupe:()=>u.Dedupe});var n=t(928491),o=t(645748),i=t(754160),a=t(895963),s=t(449003),u=t(433115)},941194:(e,r,t)=>{t.r(r),t.d(r,{FunctionToString:()=>n.FunctionToString,InboundFilters:()=>o.InboundFilters});var n=t(981552),o=t(73510)},985513:(e,r,t)=>{t.d(r,{initSentry:()=>p});var n=t(570655),o=t(967866),i=t(305640),a=t(239864),s=t(649846),u=t(19331),l=t(961540),d=t(930216),c=t(209509),v=t(401208),f=s.navigationStat.getModule,p=function(e){var r=e.dsn,t=e.moduleChangeListener,s=e.peKeyOfVerboseMode,p=e.ignoreErrors,g=e.initialScope,_=e.integrations,m=(0,n.__rest)(e,["dsn","moduleChangeListener","peKeyOfVerboseMode","ignoreErrors","initialScope","integrations"]),y=(0,l.getGlobalObject)().vk||{},S=y.statsMeta,E=y.id,b=!!(null==S?void 0:S.st)&&(0,u.partConfigEnabled)(s),h=(0,d.getEnvironment)(),O=(0,d.getRelease)(h);o.init((0,n.__assign)({environment:h,release:O,dsn:"https://"+r[0]+"@stacks.vk-portal.net/"+r[1],ignoreErrors:c.commonIgnoreErrors.concat(p||[]),sampleRate:1,maxBreadcrumbs:b?3:1,autoSessionTracking:!O||!t,integrations:(0,n.__spreadArray)((0,n.__spreadArray)((0,n.__spreadArray)((0,n.__spreadArray)((0,n.__spreadArray)((0,n.__spreadArray)([],(0,n.__read)((0,u.partConfigEnabled)("sentry_js_sanitize_frames")?[new v.FramesSanitizer]:[]),!1),[new v.BadScripts,new v.ModuleDetect(f)],!1),(0,n.__read)((0,u.partConfigEnabled)("sentry_js_inline_scripts")?[new v.InlineScripts]:[]),!1),(0,n.__read)((0,u.partConfigEnabled)("sentry_js_reference_errors")?[new v.ReferenceErrors]:[]),!1),(0,n.__read)((0,u.partConfigEnabled)("sentry_js_lost_user_info_stats")?[new v.LostUserInfoStats]:[]),!1),(0,n.__read)(_||[]),!1),initialScope:(0,n.__assign)({tags:(0,n.__assign)((0,n.__assign)((0,n.__assign)({},(null==g?void 0:g.tags)||{}),{}),{is_logged_in:Boolean(E),module:f()})},E?{user:{id:String(E)}}:{})},m)),o.onLoad((function(){return null==t?void 0:t((function(){return i.setTag("module",f())}))})),window.Sentry=a}},914301:(e,r,t)=>{t.d(r,{BadScripts:()=>i});var n=t(930216),o=t(209509),i=function(){function e(){this.name=e.id,this.lastSentErrors=new Set,this.maxLastSentErrors=10}return e.getFrames=function(e){var r;return null===(r=(0,n.getStacktrace)(e))||void 0===r?void 0:r.frames},e.getLastFrame=function(r){var t;return null===(t=e.getFrames(r))||void 0===t?void 0:t.slice(-1).pop()},e.onLocalWindows=function(e){var r;return/^file:\/\/\/[A-Z]:(\\|\/)/.test((null===(r=null==e?void 0:e.request)||void 0===r?void 0:r.url)||"")},e.inAnonymousFilename=function(e){return e===o.anonymousName},e.inNativeCode=function(e){return e===o.nativeCode},e.prototype.inExtension=function(r){var t;return null===(t=e.getFrames(r))||void 0===t?void 0:t.some((function(e){return o.extensionPrefixes.some((function(r){var t;return null===(t=e.filename)||void 0===t?void 0:t.startsWith(r)}))}))},e.prototype.alreadySent=function(e,r){var t=[(0,n.getTitleFromEventOrHint)(e,r),(0,n.getStackStringFromEventOrHint)(e,r)].join("_");return this.lastSentErrors.size>this.maxLastSentErrors&&this.lastSentErrors.clear(),!!this.lastSentErrors.has(t)||(this.lastSentErrors.add(t),!1)},e.prototype.findAllPredicates=function(r,t){var o=e.getLastFrame(r),i={inExtension:this.inExtension(r),isServiceWorker:(0,n.isServiceWorker)(t),inAnonymousFilename:!1,inNativeCode:!1,onLocalWindows:e.onLocalWindows(r),withoutFrames:!e.getFrames(r)};return o&&(i.inAnonymousFilename=e.inAnonymousFilename(null==o?void 0:o.filename),i.inNativeCode=e.inNativeCode(null==o?void 0:o.filename)),i},e.prototype.setupOnce=function(r,t){var i=this;r((function(r,a){if(t().getIntegration(e)){var s=i.findAllPredicates(r,a),u=[s.inExtension,s.isServiceWorker,s.inAnonymousFilename,s.inNativeCode,s.withoutFrames].some(Boolean),l=[u].some(Boolean);return[s.onLocalWindows].some(Boolean)?null:(s.inExtension&&(0,n.setException)(r,{type:o.CustomSentryErrorTypes.ERROR_OF_EXTENSION}),l&&(r.level="warning"),u&&i.alreadySent(r,a)?null:r)}return r}))},e.id="BadScripts",e}()},4126:(e,r,t)=>{t.d(r,{FramesSanitizer:()=>i});var n=t(570655),o=t(403286),i=function(){function e(){this.name=e.id}return e.prototype.setupOnce=function(r,t){r((function(r){var n=t().getIntegration(e);return n?n.process(r):r}))},e.prototype.process=function(e){var r,t=e;return Array.isArray(null===(r=null==e?void 0:e.exception)||void 0===r?void 0:r.values)&&(t=this._processExceptionsEvent(t)),o.SDK_VERSION.startsWith("6")&&(null==e?void 0:e.stacktrace)&&(t=this._processStacktraceEvent(t)),t},e.isSentryFrame=function(e){var r=e.filename;return["web/sentry","mobile/vendors~sentry","mobile/sentry","mobile/vendors~sentry_fallback","mobile/sentry_fallback"].some((function(e){return null==r?void 0:r.includes("/dist/"+e+".")}))},e.isRavenFrame=function(e){var r=e.filename;return["web/raven_logger","mobile/vendors~raven","mobile/vendors~raven_fallback"].some((function(e){return null==r?void 0:r.includes("/dist/"+e+".")}))},e.iteratee=function(r){return[e.isSentryFrame,e.isRavenFrame].some((function(e){return e(r)}))?void 0:r},e.prototype._processExceptionsEvent=function(e){var r=this;try{return(0,n.__assign)((0,n.__assign)({},e),{exception:(0,n.__assign)((0,n.__assign)({},e.exception),{values:e.exception.values.map((function(e){return(0,n.__assign)((0,n.__assign)({},e),e.stacktrace&&{stacktrace:r._processStacktrace(e.stacktrace)})}))})})}catch(r){return e}},e.prototype._processStacktraceEvent=function(e){try{return(0,n.__assign)((0,n.__assign)({},e),{stacktrace:this._processStacktrace(e.stacktrace)})}catch(r){return e}},e.prototype._processStacktrace=function(r){var t;return(0,n.__assign)((0,n.__assign)({},r),{frames:null===(t=null==r?void 0:r.frames)||void 0===t?void 0:t.reduce((function(r,t){var o=e.iteratee(t);return o?(0,n.__spreadArray)((0,n.__spreadArray)([],(0,n.__read)(r||[]),!1),[o],!1):r}),void 0)})},e.id="FramesSanitizer",e}()},401208:(e,r,t)=>{t.d(r,{BadScripts:()=>n.BadScripts,ModuleDetect:()=>o.ModuleDetect,FramesSanitizer:()=>i.FramesSanitizer,KnownIssues:()=>a.KnownIssues,InlineScripts:()=>s.InlineScripts,ReferenceErrors:()=>u.ReferenceErrors,LostUserInfoStats:()=>l.LostUserInfoStats});var n=t(914301),o=t(201361),i=t(4126),a=t(535925),s=t(426986),u=t(93922),l=t(237458)},426986:(e,r,t)=>{t.d(r,{InlineScripts:()=>i});var n=t(930216),o=t(209509),i=function(){function e(){this.name=e.id}return e.prototype.setupOnce=function(r,t){r((function(r){var i,a,s,u,l;if(t().getIntegration(e)){var d=(null!==(i=r.request)&&void 0!==i?i:{}).url,c=null!==(a=(0,n.getException)(r))&&void 0!==a?a:{},v=c.type,f=c.value,p=(null!==(s=(0,n.getStacktrace)(r))&&void 0!==s?s:{}).frames;if(!v||!f||!d)return r;if(!(null==p?void 0:p.some((function(e){var r=e.in_app,t=e.abs_path,n=e.filename;return!!r&&d!==(t||n)})))){var g=String(null!==(l=null===(u=r.tags)||void 0===u?void 0:u.module)&&void 0!==l?l:o.SentryExplicitModule.UNKNOWN);r.fingerprint=[v,g,f]}}return r}))},e.id="InlineScripts",e}()},535925:(e,r,t)=>{t.d(r,{KnownIssues:()=>s});var n=t(570655),o=t(19331),i=t(209509),a=t(930216),s=function(){function e(r){this.getKnownIssues=r,this.name=e.id}return e.prototype.isWellKnown=function(e){var r=Object.entries(this.getKnownIssues(e)||{});return!!r.length&&r.reduce((function(e,r){var t=(0,n.__read)(r,2),o=t[0],i=t[1];return(null==i?void 0:i.every(Boolean))?parseFloat(o):e}),!1)},e.prototype.setupOnce=function(r,t){var n=this;r((function(r){if(t().getIntegration(e)){var s=n.isWellKnown(r);if(s){if(!(0,o.randEnabled)(s))return null;var u=(0,a.getException)(r)||{},l=u.type,d=u.value;l&&d&&(r.level="warning",r.fingerprint=["{{ default }}","{{ type }}"],(0,a.setException)(r,{type:i.CustomSentryErrorTypes.KNOWN_ISSUE,value:l+": "+d}))}}return r}))},e.id="KnownIssues",e}()},237458:(e,r,t)=>{t.d(r,{LostUserInfoStats:()=>o});var n=t(953711),o=function(){function e(){this.name=e.id,this.createdBy=Date.now()}return e.prototype.setupOnce=function(r,t){var o=this;r((function(r){o.createdBy+3e5>Date.now()&&(t().getIntegration(e)&&(null==r?void 0:r.tags)&&(new n.CooldownManager(n.COOLDOWN_MANAGER_METRIC.USER_INFO_STATS).isMetricOnCoolDown()||(r.tags.lost_user_info_stats=!0)));return r}))},e.id="LostUserInfoStats",e}()},201361:(e,r,t)=>{t.d(r,{ModuleDetect:()=>a});var n=t(961540),o=t(930216),i=t(209509),a=function(){function e(r){this.getModuleFallback=r,this.name=e.id}return e.isExternalService=function(e){return(null==e?void 0:e.startsWith("http"))&&!n.VK_URL_REGEX_STRICT.test(e)},e.detectModuleInSentryEvent=function(r,t){var n=(0,o.getStackStringFromEventOrHint)(r,t);return(0,o.isServiceWorker)(t)?i.SentryExplicitModule.SERVICE_WORKER:e.isExternalService(n)?i.SentryExplicitModule.EXTERNAL:(0,o.findModuleByStacktrace)((0,o.getStacktrace)(r))||(0,o.findModuleByStackString)(n)},e.prototype.setupOnce=function(r,t){var n=this;r((function(r,o){if(t().getIntegration(e)){if(null==r?void 0:r.tags){var a=i.PROTECTED_MODULE_NAME_TAG;r.tags[a]||(r.tags.module=e.detectModuleInSentryEvent(r,o)||n.getModuleFallback()),r.tags.hasOwnProperty(a)&&delete r.tags[a]}return r}return r}))},e.id="ModuleDetect",e}()},93922:(e,r,t)=>{t.d(r,{ReferenceErrors:()=>s});var n=t(209509),o=t(930216),i=[" is not defined","Can't find variable: "],a=/No value for lang key "([a-zA-Z0-9_]+)" is specified/,s=function(){function e(){this.name=e.id}return e.prototype.setupOnce=function(r,t){r((function(r){var s,u,l;if(t().getIntegration(e)){var d=null!==(s=(0,o.getException)(r))&&void 0!==s?s:{},c=d.type,v=d.value;if(c!==n.ReferenceError||!v)return r;var f=String(null!==(l=null===(u=r.tags)||void 0===u?void 0:u.module)&&void 0!==l?l:n.SentryExplicitModule.UNKNOWN);if(i.some((function(e){return v.includes(e)}))){var p=i.reduce((function(e,r){return e.replace(r,"")}),v).replace(/['"]/g,"");r.fingerprint=[c,f,p]}else{var g=v.match(a);g&&g[1]&&(r.fingerprint=[c,f,g[1]])}}return r}))},e.id="ReferenceErrors",e}()},930216:(e,r,t)=>{t.d(r,{getException:()=>d,setException:()=>c,getTitleFromEventOrHint:()=>v,getStackStringFromEventOrHint:()=>f,getStacktrace:()=>p,getEnvironment:()=>g,getRelease:()=>_,isServiceWorker:()=>m,findModuleByStackString:()=>y,findModuleByStacktrace:()=>S});var n=t(570655),o=t(403286),i=t(40906),a=t(209509),s=(0,t(961540).getGlobalObject)(),u=(s.location,s.vk),l=function(e,r){var t=(e||{}).originalException;return"string"==typeof t?t:null==t?void 0:t[r]},d=function(e){var r,t;return null===(t=null===(r=null==e?void 0:e.exception)||void 0===r?void 0:r.values)||void 0===t?void 0:t[0]},c=function(e,r){var t,o,a=d(e);if((0,i.isObject)(a))try{for(var s=(0,n.__values)(Object.entries(r)),u=s.next();!u.done;u=s.next()){var l=(0,n.__read)(u.value,2),c=l[0],v=l[1];(null==a?void 0:a.hasOwnProperty(c))&&(a[c]=v)}}catch(e){t={error:e}}finally{try{u&&!u.done&&(o=s.return)&&o.call(s)}finally{if(t)throw t.error}}return e},v=function(e,r){var t=d(e)||{},n=t.type,o=t.value;return l(r,"message")||[n,o].join(" ")},f=function(e,r){return l(r,"stack")||function(e){var r,t;return null===(t=null===(r=e.exception)||void 0===r?void 0:r.values)||void 0===t?void 0:t.map((function(e){var r,t=e.stacktrace;return null===(r=null==t?void 0:t.frames)||void 0===r?void 0:r.map((function(e){return e.filename}))})).join()}(e)},p=function(e){var r,t=null===(r=d(e))||void 0===r?void 0:r.stacktrace;return o.SDK_VERSION.startsWith("6")?t||(null==e?void 0:e.stacktrace):t},g=function(){var e;return(null===(e=null==u?void 0:u.statsMeta)||void 0===e?void 0:e.st)?"staging":"production"},_=function(e){return null==u?void 0:u.rv},m=function(e){var r,t=null==e?void 0:e.originalException;return!(!t||"mvk"!==(null===(r=null==u?void 0:u.statsMeta)||void 0===r?void 0:r.platform))&&("string"==typeof t?t:String(null==t?void 0:t.message)).toLowerCase().includes("serviceworker")},y=function(e){var r,t,o;if(e)try{for(var i=(0,n.__values)(Object.entries(a.moduleDetectionConfig.includes)),s=i.next();!s.done;s=i.next()){var u=(0,n.__read)(s.value,2),l=u[0],d=u[1];if(e.includes(d)){o=l;break}}}catch(e){r={error:e}}finally{try{s&&!s.done&&(t=i.return)&&t.call(i)}finally{if(r)throw r.error}}return o},S=function(e){var r,t,o,i,s;if(e&&Array.isArray(e.frames)){var u=e.frames.reverse();try{for(var l=(0,n.__values)(Object.entries(a.moduleDetectionConfig.some)),d=l.next();!d.done;d=l.next()){var c=(0,n.__read)(d.value,2),v=c[0];if((0,c[1])(u)){s=v;break}}}catch(e){r={error:e}}finally{try{d&&!d.done&&(t=l.return)&&t.call(l)}finally{if(r)throw r.error}}if(!s)try{for(var f=(0,n.__values)(u),p=f.next();!p.done;p=f.next()){var g=p.value,_=y(g.filename);if(_){s=_;break}}}catch(e){o={error:e}}finally{try{p&&!p.done&&(i=f.return)&&i.call(f)}finally{if(o)throw o.error}}}return s}},953711:(e,r,t)=>{t.d(r,{COOLDOWN_MANAGER_METRIC:()=>n,CooldownManager:()=>a});var n,o=t(522683);!function(e){e.USER_INFO_STATS="USER_INFO_STATS"}(n||(n={}));var i="default",a=function(){function e(e){var r,t;this.metricsName=e,this.metricsTTL=((r={})[n.USER_INFO_STATS]=((t={}).default=864e5,t),r),this.storageName="@METRICS_"+e}return e.prototype.getMetricsState=function(){var e=o.vkLocalStorage.getItem(this.storageName);return e?JSON.parse(e):{timestamps:{}}},e.prototype.getMetricTTL=function(e){var r;return void 0===e&&(e=i),null!==(r=this.metricsTTL[this.metricsName][e])&&void 0!==r?r:0},e.prototype.isMetricOnCoolDown=function(e){var r;return void 0===e&&(e=i),(null!==(r=this.getMetricsState().timestamps[e])&&void 0!==r?r:0)+this.getMetricTTL(e)>Date.now()},e.prototype.updateMetricTimestamp=function(e){void 0===e&&(e=i);var r=this.getMetricsState();r.timestamps[e]=Date.now(),o.vkLocalStorage.setItem(this.storageName,JSON.stringify(r))},e}()},528603:(e,r,t)=>{var n,o=t(570655),i=t(985513),a=t(19331),s=t(300801),u=t(401208),l=t(246111),d=t(961540);(0,i.initSentry)({dsn:["d98c13466f87431e8460fb4d0f55aa15",25],peKeyOfVerboseMode:"sentry_js_web_verbose",moduleChangeListener:null===(n=(0,d.getGlobalObject)().nav)||void 0===n?void 0:n.subscribeOnModuleEvaluated,integrations:(0,o.__spreadArray)((0,o.__spreadArray)((0,o.__spreadArray)([],(0,o.__read)((0,a.partConfigEnabled)("sentry_js_server_errors_integration")?[new s.ServerErrors]:[]),!1),(0,o.__read)((0,a.partConfigEnabled)("sentry_js_handled_errors_integration")?[new s.HandledErrors]:[]),!1),(0,o.__read)((0,a.partConfigEnabled)("sentry_js_known_issues_web_integration")?[new u.KnownIssues(l.getKnownIssuesOfWeb)]:[]),!1)});try{window.stManager.done(window.jsc("web/sentry.js"))}catch(e){}},246111:(e,r,t)=>{t.d(r,{WebCustomSentryErrorTypes:()=>n,getKnownIssuesOfWeb:()=>a});var n,o=t(209509),i=t(930216);!function(e){e.TIMEOUT="Timeout",e.TOP_ERROR="TopError"}(n||(n={}));var a=function(e){var r,t,n=(0,i.getException)(e)||{},a=n.type,s=n.value,u=(n.stacktrace||{}).frames,l=String(null===(r=null==e?void 0:e.tags)||void 0===r?void 0:r.module);return Array.isArray(u)?{.05:[a===o.TypeError,"Cannot redefine property: getChannelData"===s,!(null===(t=null==e?void 0:e.tags)||void 0===t?void 0:t.is_logged_in),u.every((function(e){return"<anonymous>"===e.filename})),["video",o.SentryExplicitModule.UNKNOWN].includes(l)],.075:[a===o.TypeError,null==s?void 0:s.includes(".finally is not a function"),["videoplayer","notifier"].includes(l)],.1:[a===o.CustomSentryErrorTypes.ERROR_OF_EXTENSION,u.some((function(e){var r;return null===(r=e.filename)||void 0===r?void 0:r.includes("/vkopt.js")})),"profile"===l],.15:[a===o.Error,null==s?void 0:s.includes("Empty response. Method: auth.anonymLogin"),"videoplayer"===l]}:{}}},798302:(e,r,t)=>{t.d(r,{HandledErrors:()=>u});var n=t(209509),o=t(985768),i=t(246111),a=t(401208),s=t(930216),u=function(){function e(){this.name=e.id}return e.breadcrumbWithCustomCategory=function(e){var r=e.breadcrumbs;return null==r?void 0:r.find((function(e){return e.category===n.customBreadcrumbCategory}))},e.shortenMessage=function(e){var r,t=e.split("#")[0].trim();return t.startsWith(null===(r=null===window||void 0===window?void 0:window.lang)||void 0===r?void 0:r.global_unknown_error)?"unknown_error":t},e.getModuleFromCustomBreadcrumb=function(e){var r,t=null===(r=null==e?void 0:e.data)||void 0===r?void 0:r.module;return"string"==typeof t&&"[undefined]"!==t?t:void 0},e.prototype.setupOnce=function(r,t){r((function(r,u){var l,d;if(t().getIntegration(e)&&(0,s.getException)(r)&&(null===(l=r.tags)||void 0===l?void 0:l.module)===n.topErrorModuleName){var c=null===(d=r.extra)||void 0===d?void 0:d.__serialized__,v="string"==typeof c?{}:c||{},f=v.url,p=v.type,g=e.breadcrumbWithCustomCategory(r),_=f&&(0,o.stripUrlQueryAndFragment)(f),m=p&&n.errorEventNames[p];(0,s.setException)(r,{type:i.WebCustomSentryErrorTypes.TOP_ERROR}),g&&_&&m&&(r.tags.module=e.getModuleFromCustomBreadcrumb(g)||a.ModuleDetect.detectModuleInSentryEvent(r,u)||n.topErrorModuleName,(0,s.setException)(r,{value:[_,"["+m+"]",'"'+e.shortenMessage(g.message||"")+'"'].join(" ")}),r.fingerprint=[_,m])}return r}))},e.id="HandledErrors",e}()},300801:(e,r,t)=>{t.d(r,{ServerErrors:()=>n.ServerErrors,HandledErrors:()=>o.HandledErrors});var n=t(528910),o=t(798302)},528910:(e,r,t)=>{t.d(r,{ServerErrors:()=>v});var n=t(570655),o=t(930216),i=t(85372),a=t(561697),s=t(246111),u=t(171516),l=t(649846),d=t(19331),c=l.navigationStat.getModule,v=function(){function e(){this.name=e.id}return e.typeOfStaticTimedOut=function(e){var r,t,i;return(null===(r=e.tags)||void 0===r?void 0:r.module)===a.staticManagerModuleName&&(null===(i=null===(t=Object.entries(this.timedOutMessagesOf).filter((function(r){var t,i,a=(0,n.__read)(r,2)[1];return null===(i=null===(t=(0,o.getException)(e))||void 0===t?void 0:t.value)||void 0===i?void 0:i.includes(a)})))||void 0===t?void 0:t.pop())||void 0===i?void 0:i[0])},e.hasBadStatusCode=function(e){var r;return null===(r=null==e?void 0:e.breadcrumbs)||void 0===r?void 0:r.some((function(e){var r;return[502,503,504].includes(null===(r=null==e?void 0:e.data)||void 0===r?void 0:r.status_code)}))},e.modifyEventOfTimeout=function(e,r){var t;e.level="warning",e.fingerprint=[a.staticManagerModuleName+"_"+r],(0,o.setException)(e,{type:s.WebCustomSentryErrorTypes.TIMEOUT}),e.tags&&(e.tags.module=(0,o.findModuleByStackString)(null===(t=(0,o.getException)(e))||void 0===t?void 0:t.value)||c())},e.prototype.setupOnce=function(r,t){r((function(r){var n;if(t().getIntegration(e)){var o=e.typeOfStaticTimedOut(r);if(e.hasBadStatusCode(r)&&(r.level="fatal"),o&&(e.modifyEventOfTimeout(r,o),(0,d.partConfigEnabled)("sentry_js_web_timeouts_forwarding")&&(0,u.saveStatlogEvents)({name:"sentry_web_issues",value:1,keys:[String(null===(n=null==r?void 0:r.tags)||void 0===n?void 0:n.module),"warning",s.WebCustomSentryErrorTypes.TIMEOUT+"Of"+o.toUpperCase()]}),!(0,d.partConfigEnabled)("sentry_js_web_timeouts")))return null}return r}))},e.id="ServerErrors",e.timedOutMessagesOf={js:i.JS_LOAD_ERROR_TEXT,css:i.CSS_LOAD_ERROR_TEXT},e}()}},o={};function i(e){var r=o[e];if(void 0!==r)return r.exports;var t=o[e]={exports:{}};return n[e].call(t.exports,t,t.exports,i),t.exports}i.m=n,e=[],i.O=(r,t,n,o)=>{if(!t){var a=1/0;for(d=0;d<e.length;d++){for(var[t,n,o]=e[d],s=!0,u=0;u<t.length;u++)(!1&o||a>=o)&&Object.keys(i.O).every((e=>i.O[e](t[u])))?t.splice(u--,1):(s=!1,o<a&&(a=o));if(s){e.splice(d--,1);var l=n();void 0!==l&&(r=l)}}return r}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[t,n,o]},i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var a={};r=r||[null,t({}),t([]),t(t)];for(var s=2&n&&e;"object"==typeof s&&!~r.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((r=>a[r]=()=>e[r]));return a.default=()=>e,i.d(o,a),o},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.e=()=>Promise.resolve(),i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={60112:0};i.O.j=r=>0===e[r];var r=(r,t)=>{var n,o,[a,s,u]=t,l=0;for(n in s)i.o(s,n)&&(i.m[n]=s[n]);if(u)var d=u(i);for(r&&r(t);l<a.length;l++)o=a[l],i.o(e,o)&&e[o]&&e[o][0](),e[a[l]]=0;return i.O(d)},t=self.webpackChunkvk=self.webpackChunkvk||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var a=i.O(void 0,[76429,68592,5227],(()=>i(528603)));a=i.O(a)})();