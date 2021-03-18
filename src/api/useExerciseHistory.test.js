import { renderHook } from '@testing-library/react-hooks'
import useExerciseHistory from './useExerciseHistory'

const html = `

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en-US">
<head profile="http://gmpg.org/xfn/11">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><script type="text/javascript">(window.NREUM||(NREUM={})).loader_config={licenseKey:"a5e0c8e661",applicationID:"524815282"};window.NREUM||(NREUM={}),__nr_require=function(e,t,n){function r(n){if(!t[n]){var i=t[n]={exports:{}};e[n][0].call(i.exports,function(t){var i=e[n][1][t];return r(i||t)},i,i.exports)}return t[n].exports}if("function"==typeof __nr_require)return __nr_require;for(var i=0;i<n.length;i++)r(n[i]);return r}({1:[function(e,t,n){function r(){}function i(e,t,n){return function(){return o(e,[u.now()].concat(c(arguments)),t?null:this,n),t?void 0:this}}var o=e("handle"),a=e(7),c=e(8),f=e("ee").get("tracer"),u=e("loader"),s=NREUM;"undefined"==typeof window.newrelic&&(newrelic=s);var d=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],p="api-",l=p+"ixn-";a(d,function(e,t){s[t]=i(p+t,!0,"api")}),s.addPageAction=i(p+"addPageAction",!0),s.setCurrentRouteName=i(p+"routeName",!0),t.exports=newrelic,s.interaction=function(){return(new r).get()};var m=r.prototype={createTracer:function(e,t){var n={},r=this,i="function"==typeof t;return o(l+"tracer",[u.now(),e,n],r),function(){if(f.emit((i?"":"no-")+"fn-start",[u.now(),r,i],n),i)try{return t.apply(this,arguments)}catch(e){throw f.emit("fn-err",[arguments,this,e],n),e}finally{f.emit("fn-end",[u.now()],n)}}}};a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(e,t){m[t]=i(l+t)}),newrelic.noticeError=function(e,t){"string"==typeof e&&(e=new Error(e)),o("err",[e,u.now(),!1,t])}},{}],2:[function(e,t,n){function r(){return c.exists&&performance.now?Math.round(performance.now()):(o=Math.max((new Date).getTime(),o))-a}function i(){return o}var o=(new Date).getTime(),a=o,c=e(9);t.exports=r,t.exports.offset=a,t.exports.getLastTimestamp=i},{}],3:[function(e,t,n){function r(e){return!(!e||!e.protocol||"file:"===e.protocol)}t.exports=r},{}],4:[function(e,t,n){function r(e,t){var n=e.getEntries();n.forEach(function(e){"first-paint"===e.name?d("timing",["fp",Math.floor(e.startTime)]):"first-contentful-paint"===e.name&&d("timing",["fcp",Math.floor(e.startTime)])})}function i(e,t){var n=e.getEntries();n.length>0&&d("lcp",[n[n.length-1]])}function o(e){e.getEntries().forEach(function(e){e.hadRecentInput||d("cls",[e])})}function a(e){if(e instanceof m&&!g){var t=Math.round(e.timeStamp),n={type:e.type};t<=p.now()?n.fid=p.now()-t:t>p.offset&&t<=Date.now()?(t-=p.offset,n.fid=p.now()-t):t=p.now(),g=!0,d("timing",["fi",t,n])}}function c(e){d("pageHide",[p.now(),e])}if(!("init"in NREUM&&"page_view_timing"in NREUM.init&&"enabled"in NREUM.init.page_view_timing&&NREUM.init.page_view_timing.enabled===!1)){var f,u,s,d=e("handle"),p=e("loader"),l=e(6),m=NREUM.o.EV;if("PerformanceObserver"in window&&"function"==typeof window.PerformanceObserver){f=new PerformanceObserver(r);try{f.observe({entryTypes:["paint"]})}catch(v){}u=new PerformanceObserver(i);try{u.observe({entryTypes:["largest-contentful-paint"]})}catch(v){}s=new PerformanceObserver(o);try{s.observe({type:"layout-shift",buffered:!0})}catch(v){}}if("addEventListener"in document){var g=!1,w=["click","keydown","mousedown","pointerdown","touchstart"];w.forEach(function(e){document.addEventListener(e,a,!1)})}l(c)}},{}],5:[function(e,t,n){function r(e,t){if(!i)return!1;if(e!==i)return!1;if(!t)return!0;if(!o)return!1;for(var n=o.split("."),r=t.split("."),a=0;a<r.length;a++)if(r[a]!==n[a])return!1;return!0}var i=null,o=null,a=/Version\/(\S+)\s+Safari/;if(navigator.userAgent){var c=navigator.userAgent,f=c.match(a);f&&c.indexOf("Chrome")===-1&&c.indexOf("Chromium")===-1&&(i="Safari",o=f[1])}t.exports={agent:i,version:o,match:r}},{}],6:[function(e,t,n){function r(e){function t(){e(a&&document[a]?document[a]:document[i]?"hidden":"visible")}"addEventListener"in document&&o&&document.addEventListener(o,t,!1)}t.exports=r;var i,o,a;"undefined"!=typeof document.hidden?(i="hidden",o="visibilitychange",a="visibilityState"):"undefined"!=typeof document.msHidden?(i="msHidden",o="msvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(i="webkitHidden",o="webkitvisibilitychange",a="webkitVisibilityState")},{}],7:[function(e,t,n){function r(e,t){var n=[],r="",o=0;for(r in e)i.call(e,r)&&(n[o]=t(r,e[r]),o+=1);return n}var i=Object.prototype.hasOwnProperty;t.exports=r},{}],8:[function(e,t,n){function r(e,t,n){t||(t=0),"undefined"==typeof n&&(n=e?e.length:0);for(var r=-1,i=n-t||0,o=Array(i<0?0:i);++r<i;)o[r]=e[t+r];return o}t.exports=r},{}],9:[function(e,t,n){t.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(e,t,n){function r(){}function i(e){function t(e){return e&&e instanceof r?e:e?u(e,f,a):a()}function n(n,r,i,o,a){if(a!==!1&&(a=!0),!l.aborted||o){e&&a&&e(n,r,i);for(var c=t(i),f=v(n),u=f.length,s=0;s<u;s++)f[s].apply(c,r);var p=d[h[n]];return p&&p.push([b,n,r,c]),c}}function o(e,t){y[e]=v(e).concat(t)}function m(e,t){var n=y[e];if(n)for(var r=0;r<n.length;r++)n[r]===t&&n.splice(r,1)}function v(e){return y[e]||[]}function g(e){return p[e]=p[e]||i(n)}function w(e,t){s(e,function(e,n){t=t||"feature",h[n]=t,t in d||(d[t]=[])})}var y={},h={},b={on:o,addEventListener:o,removeEventListener:m,emit:n,get:g,listeners:v,context:t,buffer:w,abort:c,aborted:!1};return b}function o(e){return u(e,f,a)}function a(){return new r}function c(){(d.api||d.feature)&&(l.aborted=!0,d=l.backlog={})}var f="nr@context",u=e("gos"),s=e(7),d={},p={},l=t.exports=i();t.exports.getOrSetContext=o,l.backlog=d},{}],gos:[function(e,t,n){function r(e,t,n){if(i.call(e,t))return e[t];var r=n();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,t,{value:r,writable:!0,enumerable:!1}),r}catch(o){}return e[t]=r,r}var i=Object.prototype.hasOwnProperty;t.exports=r},{}],handle:[function(e,t,n){function r(e,t,n,r){i.buffer([e],r),i.emit(e,t,n)}var i=e("ee").get("handle");t.exports=r,r.ee=i},{}],id:[function(e,t,n){function r(e){var t=typeof e;return!e||"object"!==t&&"function"!==t?-1:e===window?0:a(e,o,function(){return i++})}var i=1,o="nr@id",a=e("gos");t.exports=r},{}],loader:[function(e,t,n){function r(){if(!E++){var e=x.info=NREUM.info,t=l.getElementsByTagName("script")[0];if(setTimeout(u.abort,3e4),!(e&&e.licenseKey&&e.applicationID&&t))return u.abort();f(h,function(t,n){e[t]||(e[t]=n)});var n=a();c("mark",["onload",n+x.offset],null,"api"),c("timing",["load",n]);var r=l.createElement("script");r.src="https://"+e.agent,t.parentNode.insertBefore(r,t)}}function i(){"complete"===l.readyState&&o()}function o(){c("mark",["domContent",a()+x.offset],null,"api")}var a=e(2),c=e("handle"),f=e(7),u=e("ee"),s=e(5),d=e(3),p=window,l=p.document,m="addEventListener",v="attachEvent",g=p.XMLHttpRequest,w=g&&g.prototype;if(d(p.location)){NREUM.o={ST:setTimeout,SI:p.setImmediate,CT:clearTimeout,XHR:g,REQ:p.Request,EV:p.Event,PR:p.Promise,MO:p.MutationObserver};var y=""+location,h={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-1208.min.js"},b=g&&w&&w[m]&&!/CriOS/.test(navigator.userAgent),x=t.exports={offset:a.getLastTimestamp(),now:a,origin:y,features:{},xhrWrappable:b,userAgent:s};e(1),e(4),l[m]?(l[m]("DOMContentLoaded",o,!1),p[m]("load",r,!1)):(l[v]("onreadystatechange",i),p[v]("onload",r)),c("mark",["firstbyte",a.getLastTimestamp()],null,"api");var E=0}},{}],"wrap-function":[function(e,t,n){function r(e,t){function n(t,n,r,f,u){function nrWrapper(){var o,a,s,p;try{a=this,o=d(arguments),s="function"==typeof r?r(o,a):r||{}}catch(l){i([l,"",[o,a,f],s],e)}c(n+"start",[o,a,f],s,u);try{return p=t.apply(a,o)}catch(m){throw c(n+"err",[o,a,m],s,u),m}finally{c(n+"end",[o,a,p],s,u)}}return a(t)?t:(n||(n=""),nrWrapper[p]=t,o(t,nrWrapper,e),nrWrapper)}function r(e,t,r,i,o){r||(r="");var c,f,u,s="-"===r.charAt(0);for(u=0;u<t.length;u++)f=t[u],c=e[f],a(c)||(e[f]=n(c,s?f+r:r,i,f,o))}function c(n,r,o,a){if(!m||t){var c=m;m=!0;try{e.emit(n,r,o,t,a)}catch(f){i([f,n,r,o],e)}m=c}}return e||(e=s),n.inPlace=r,n.flag=p,n}function i(e,t){t||(t=s);try{t.emit("internal-error",e)}catch(n){}}function o(e,t,n){if(Object.defineProperty&&Object.keys)try{var r=Object.keys(e);return r.forEach(function(n){Object.defineProperty(t,n,{get:function(){return e[n]},set:function(t){return e[n]=t,t}})}),t}catch(o){i([o],n)}for(var a in e)l.call(e,a)&&(t[a]=e[a]);return t}function a(e){return!(e&&e instanceof Function&&e.apply&&!e[p])}function c(e,t){var n=t(e);return n[p]=e,o(e,n,s),n}function f(e,t,n){var r=e[t];e[t]=c(r,n)}function u(){for(var e=arguments.length,t=new Array(e),n=0;n<e;++n)t[n]=arguments[n];return t}var s=e("ee"),d=e(8),p="nr@original",l=Object.prototype.hasOwnProperty,m=!1;t.exports=r,t.exports.wrapFunction=c,t.exports.wrapInPlace=f,t.exports.argsToArray=u},{}]},{},["loader"]);</script>
<meta name="description" content="" />
<meta name="keywords" content="Jefit,Workout,App,Bodybuilding,Fitness,Tracking,Tracker,Android,iPhone,Weight Loss,Exercise,Forum,Training,Profile,Log,Stats" />
<title>Guest - Home | Jefit - Best Fitness & Workout Tracking System | Android & iPhone Workout App</title>
<link rel="stylesheet" href="../../css/style.css" type="text/css" media="screen" />
    <style>
        input[type="submit"]
        {
            -moz-box-shadow:inset 0px 1px 0px 0px #ffffff;
            -webkit-box-shadow:inset 0px 1px 0px 0px #ffffff;
            box-shadow:inset 0px 1px 0px 0px #ffffff;
            background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #f7f7f7), color-stop(1, #e6e6e6) );
            background:-moz-linear-gradient( center top, #f7f7f7 5%, #e6e6e6 100% );
            filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#f7f7f7', endColorstr='#e6e6e6');
            background-color:#f7f7f7;
            -webkit-border-top-left-radius:6px;
            -moz-border-radius-topleft:6px;
            border-top-left-radius:6px;
            -webkit-border-top-right-radius:6px;
            -moz-border-radius-topright:6px;
            border-top-right-radius:6px;
            -webkit-border-bottom-right-radius:6px;
            -moz-border-radius-bottomright:6px;
            border-bottom-right-radius:6px;
            -webkit-border-bottom-left-radius:6px;
            -moz-border-radius-bottomleft:6px;
            border-bottom-left-radius:6px;
            text-indent:0;
            border:1px solid #dedede;
            display:inline-block;
            color:#6b6b6b;
            font-family:Arial;
            font-style:normal;
            width:105px;
            text-align:center;
            text-shadow:1px 1px 0px #ffffff;
            padding-top:4px;
            padding-bottom:4px;
            margin-right:2px;
            cursor: pointer;
        }

        input[type="submit"]:hover
        {
            background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #e6e6e6), color-stop(1, #f7f7f7) );
            background:-moz-linear-gradient( center top, #e6e6e6 5%, #f7f7f7 100% );
            filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#e6e6e6', endColorstr='#f7f7f7');
            background-color:#e6e6e6;
        }
    </style>
<!-- Meta -->
<meta charset="utf-8">
<meta name="description"
   content="Looking to improve & track your workout? Download JEFIT, the #1 Android and iPhone workout & bodybuilding app."/>
<meta content="" name="author">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<!-- CSS Global Compulsory -->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
<link rel="stylesheet" href="https://www.jefit.com/assets/css/style.css"/>
<link rel="stylesheet" href="https://www.jefit.com/assets/css/headers/header-wp.css"/>
<!-- CSS Implementing Plugins -->
<link rel="stylesheet" href="https://www.jefit.com/assets/plugins/line-icons/line-icons.css"/>
<link rel="stylesheet" href="https://www.jefit.com/assets/plugins/font-awesome/css/font-awesome.css"/>
<link rel="shortcut icon" href="https://www.jefit.com/favicon.ico" type="image/x-icon"/>
<!-- JEFIT Main Style file -->
<link rel="stylesheet"
   href="https://www.jefit.com/1615316645/style"
   type="text/css" media="screen"/>
<link rel="stylesheet"
   href="https://www.jefit.com/1588486885/headerfooterstyle"
   type="text/css" media="screen"/>
<script type="text/javascript" src="https://www.jefit.com/js/jquery-1.9.1.min.js"></script>
<!--Cookie Banner-->
<link rel="stylesheet" href="https://www.jefit.com/assets/plugins/cookie-banner/cookiealert.css">
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
   new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
   j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
   'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
   })(window,document,'script','dataLayer','GTM-5P4QND4');
</script>
<!-- End Google Tag Manager -->
<!-- Amplitude Tracking Code Header START-->
<script type="text/javascript">
   (function(e,t){var n=e.amplitude||{_q:[],_iq:{}};var r=t.createElement("script")
   ;r.type="text/javascript";r.async=true
   ;r.src="https://cdn.amplitude.com/libs/amplitude-4.0.0-min.gz.js"
   ;r.onload=function(){if(e.amplitude.runQueuedFunctions){
   e.amplitude.runQueuedFunctions()}else{
   console.log("[Amplitude] Error: could not load SDK")}}
   ;var i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)
   ;function s(e,t){e.prototype[t]=function(){
   this._q.push([t].concat(Array.prototype.slice.call(arguments,0)));return this}}
   var o=function(){this._q=[];return this}
   ;var a=["add","append","clearAll","prepend","set","setOnce","unset"]
   ;for(var u=0;u<a.length;u++){s(o,a[u])}n.Identify=o;var c=function(){this._q=[]
   ;return this}
   ;var l=["setProductId","setQuantity","setPrice","setRevenueType","setEventProperties"]
   ;for(var p=0;p<l.length;p++){s(c,l[p])}n.Revenue=c
   ;var d=["init","logEvent","logRevenue","setUserId","setUserProperties","setOptOut","setVersionName","setDomain","setDeviceId","setGlobalUserProperties","identify","clearUserProperties","setGroup","logRevenueV2","regenerateDeviceId","logEventWithTimestamp","logEventWithGroups","setSessionId"]
   ;function v(e){function t(t){e[t]=function(){
   e._q.push([t].concat(Array.prototype.slice.call(arguments,0)))}}
   for(var n=0;n<d.length;n++){t(d[n])}}v(n);n.getInstance=function(e){
   e=(!e||e.length===0?"$default_instance":e).toLowerCase()
   ;if(!n._iq.hasOwnProperty(e)){n._iq[e]={_q:[]};v(n._iq[e])}return n._iq[e]}
   ;e.amplitude=n})(window,document);

          amplitude.getInstance().init("b9d2bc03885acd82f7a3b95918a0c2b6");
   
</script>
<!-- Amplitude Tracking Code Header END -->
</head>
<!-- body open, close in footer.php-->
<body  class="home page-template page-template-elementor_header_footer page page-id-4507 js jet-desktop-menu-active elementor-default elementor-template-full-width elementor-kit-4790 elementor-page elementor-page-4507 e--ua-blink e--ua-chrome e--ua-mac e--ua-webkit" itemscope="itemscope" itemtype="http://schema.org/WebPage" data-elementor-device-mode="desktop" style="background-color:#fcfcfc;">
   <!-- Google Tag Manager (noscript) -->
   <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5P4QND4"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
   <!-- End Google Tag Manager (noscript) -->
   <!-- wrapper open, close in footer.php-->
   <div class="jupiterx-site">
      <header class="jupiterx-header jupiterx-header-custom" data-jupiterx-settings="{&quot;breakpoint&quot;:&quot;767.98&quot;,&quot;template&quot;:&quot;55&quot;,&quot;behavior&quot;:&quot;&quot;}" role="banner" itemscope="itemscope" itemtype="http://schema.org/WPHeader">
         <div data-elementor-type="header" data-elementor-id="55" class="elementor elementor-55" data-elementor-settings="[]">
            <div class="elementor-inner">
               <div class="elementor-section-wrap">
                  <section class="elementor-section elementor-top-section elementor-element elementor-element-8c99b35 elementor-section-height-min-height elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-items-middle" data-id="8c99b35" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                     <div class="elementor-container elementor-column-gap-default">
                        <div class="elementor-row">
                           <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-657564c" data-id="657564c" data-element_type="column">
                              <div class="elementor-column-wrap elementor-element-populated">
                                 <div class="elementor-widget-wrap">
                                    <div class="elementor-element elementor-element-d936146 elementor-widget elementor-widget-raven-site-logo is-mac" data-id="d936146" data-element_type="widget" data-widget_type="raven-site-logo.default">
                                       <div class="elementor-widget-container">
                                          <div class="raven-widget-wrapper">
                                             <div class="raven-site-logo">
                                                <a class="raven-site-logo-link" href="https://www.jefit.com"> <img src="//cdn.jefit.com/wp/wp-content/uploads/2018/05/Jefit_logo_text_only_blue-2.png" alt="Jefit - #1 Gym / Home workout app" class="raven-site-logo-desktop raven-site-logo-tablet raven-site-logo-mobile" data-no-lazy="1"> </a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-ac28562" data-id="ac28562" data-element_type="column">
                              <div class="elementor-column-wrap elementor-element-populated">
                                 <div class="elementor-widget-wrap">
                                    <div class="elementor-element elementor-element-0d7904f raven-nav-menu-align-center raven-breakpoint-tablet raven-nav-menu-stretch elementor-widget elementor-widget-raven-nav-menu is-mac" data-id="0d7904f" data-element_type="widget" data-settings="{&quot;full_width&quot;:&quot;stretch&quot;,&quot;mobile_layout&quot;:&quot;dropdown&quot;,&quot;submenu_space_between&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;submenu_opening_position&quot;:&quot;bottom&quot;}" data-widget_type="raven-nav-menu.default">
                                       <div class="elementor-widget-container">
                                          <nav class="raven-nav-menu-main raven-nav-menu-horizontal raven-nav-menu-tablet-horizontal raven-nav-menu-mobile-horizontal raven-nav-icons-hidden-tablet raven-nav-icons-hidden-mobile">
                                             <ul id="menu-0d7904f" class="raven-nav-menu" data-smartmenus-id="16142021716153457">
                                                <li>
                                                   <a href="https://www.jefit.com" aria-current="page" class="raven-menu-item raven-link-item ">Home</a>
                                                </li>
                                                <li id="get-jefit-app-menu">
                                                   <a href="#" class="raven-menu-item raven-link-item has-submenu" aria-haspopup="true" aria-controls="sm-16142021716153457-2" aria-expanded="false">Get Jefit App</a>
                                                   <ul class="0 sub-menu raven-submenu" id="get-jefit-app-submenu" role="group" aria-hidden="true" aria-expanded="false">
                                                      <li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://itunes.apple.com/app/apple-store/id449810000?pt=516380&ct=Website&mt=8" class="raven-submenu-item raven-link-item" target="_blank">iOS App</a></li>
                                                      <li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="https://play.google.com/store/apps/details?id=je.fit&referrer=utm_source%3DWebsite" class="raven-submenu-item raven-link-item" target="_blank">Android App</a></li>
                                                   </ul>
                                                </li>
                                                <li><a href="https://www.jefit.com/routines" class="raven-menu-item raven-link-item ">Workout</a></li>
                                                <li><a href="https://www.jefit.com/exercises" class="raven-menu-item raven-link-item ">Exercises</a></li>
                                                <li><a href="https://www.jefit.com/blog" class="raven-menu-item raven-link-item">Blog</a></li>
                                                <li><a href="https://www.jefit.com/coach" class="raven-menu-item raven-link-item">Coach Mode</a></li>
                                                                                                <li><a href="https://www.jefit.com/login" class="raven-menu-item raven-link-item">Login</a></li>
                                                                                             </ul>
                                          </nav>
                                          <div class="raven-nav-menu-toggle">
                                             <div class="raven-nav-menu-toggle-button">
                                                <span class="fa fa-bars"></span>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-efee389 elementor-hidden-phone" data-id="efee389" data-element_type="column">
                              <div class="elementor-column-wrap elementor-element-populated">
                                 <div class="elementor-widget-wrap">
                                    <div class="elementor-element elementor-element-2196cb8 elementor-align-right elementor-widget elementor-widget-raven-button is-mac" data-id="2196cb8" data-element_type="widget" data-widget_type="raven-button.default">
                                       <div class="elementor-widget-container">
                                          <div class="raven-widget-wrapper">
                                                                                          <a class="raven-button raven-button-link" href="https://www.jefit.com/signup/"> <span class="raven-button-content"> <span class="raven-button-text">Sign up</span> </span> </a>
                                                                                       </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </section>
               </div>
            </div>
         </div>
      </header>
   </div>
   <div class="container-fluid px-0">
   <!-- COOKIES -->
   <div class="alert text-center cookiealert" role="alert">
      <div class="cookiealert-container">
         We use cookies to help make Jefit better. By visiting this site, you agree to our <a href="https://www.jefit.com/privacy-policy" target="_blank">cookie policy</a>.
         <button type="button" class="btn btn-primary btn-sm acceptcookies" aria-label="Close">
         Dismiss
         </button>
      </div>
   </div>
   <!-- /COOKIES -->
   <!-- Dumb smart banner START -->
   
      <div class = 'fixed-bottom' id = 'top-download-banner'>
          <a id = 'top-download-banner' href='https://sy95h.app.goo.gl/?link=https%3A%2F%2Fwww.jefit.com%2Fmembers%2Fchart%2F%3Fxid%3Ddebbie-facey%26type%3D2%26id%3D2%26bs%3D1%26utm_campaign%3Dweb_link%26utm_source%3Dwebsite%26utm_medium%3Dbottom_banner_mobile%26utm_content%3D%25252Fmembers%25252Fchart%25252F&apn=je.fit&ibi=com.Jefit.JEFIT&isi=449810000' style="display:block;width:100%;height:100%;"></a>
      </div>   <!-- Dumb smart banner END -->


      <div style="margin: 5px auto;width:728px;">
      <script type="text/javascript"><!--
         google_ad_client = "ca-pub-2835681754103896";
         /* Footer */
         google_ad_slot = "4818851907";
         google_ad_width = 728;
         google_ad_height = 90;
         //-->
      </script>
      <script type="text/javascript" src="https://pagead2.googlesyndication.com/pagead/show_ads.js"></script>
   </div>
   <table cellspacing="0" class="JefitMainTable">
<tr>
<td width="170" valign="top"><div id="leftProfilePicCell" title="Back to home page">
        <div style="position: relative;">
    <a href="https://www.jefit.com/user/debbie-facey">
        <img class="leftProfilePic" src="https://www.jefit.com/images/noProfilePic220.png" />
                <span class="vipicon" style="position: absolute; right: 0px; bottom: 0px;">VIP</span>
            </a>
    </div>
</div>


<ul class="leftList">
    <li><a href="https://www.jefit.com/user/debbie-facey"><img src="https://www.jefit.com/images/main_menu_stats_70_70.png">
            <span class="emptyLinkStub"></span> DEBBIE.FACEY</a></li>
    <li><a href="https://www.jefit.com/members/user-workout-routine/?xid=debbie-facey"><img src="https://www.jefit.com/images/routine_icon_64_64.png">
            <span class="emptyLinkStub"></span> Current Routine</a></li>
    <li><a href="https://www.jefit.com/members/user-logs/?xid=debbie-facey"><img src="https://www.jefit.com/images/main_menu_logs_70_70.png">
            <span class="emptyLinkStub"></span> Logs</a></li>
        <li><a href="https://www.jefit.com/2016815"style='color: #dcdcdc;'><img src="https://www.jefit.com/images/pictureicon.png">
            <span class="emptyLinkStub"></span> Photos</a></li>
        <li><a href="https://www.jefit.com/members/message/?xid=2016815&hash=ca26a04e536cbf2977e07e4d54ea607e"style='color: #dcdcdc;'><img src="https://www.jefit.com/images/message_icon.png">
            <span class="emptyLinkStub"></span> Messages</a></li>
    <li><img src="https://www.jefit.com/images/friend_request_20.png">
            <span class="emptyLinkStub"></span>  Friend(s)</li>

</ul>
<div style="padding: 0 5px;">
            <div class="friendCell2">
            <a href="https://www.jefit.com/user/thevanhandersan">
                <div style="width: 60px; height: 60px; position: relative;
                    background-size: 60px 60px;
                    background-image: url('https://www.jefit.com/images/unknown.gif')">
                                    </div>
                <div style="text-align: center; width: 60px; white-space: nowrap; overflow: hidden;">
                    ThevanHandersan                </div>
            </a>
        </div>
    </div>
</td>
<td class="MiddleColumn">

<div id='chart_div2' style='width: 600px; height: 380px;'></div>

<br clear="all"/>

<div style="border-bottom:1px solid #d4d4d4; font-size:16px;margin-top:20px;padding-bottom:5px">
    <strong style="margin-left:5px; color:#4d4f53;">Training Progress : Barbell Bench Press 1RM ( lbs) :</strong>
</div>
<table cellspacing="0" id="hor-minimalist_3">
<tr>
    <td>
        <table cellspacing="0" class="InnerTable" style="margin-top:5px">
            <tr>
                <td width="33%"><span style="font-size:12px; color:#999">Start Date </span></td>
                <td width="33%"><span style='font-size:12px; color:#999'>1RM : </span></td>
                <td width="34%"><span style="font-size:12px; color:#999">Duration</span></td>
            </tr>

            <tr>
                <td style="font-size:22px; font-weight:bold; padding-top:5px; padding-bottom:10px; border-bottom:1px dashed #ccc; color:#666666">2019-05-14</td>
                <td style="font-size:22px; font-weight:bold; padding-top:5px; padding-bottom:10px; border-bottom:1px dashed #ccc;color:#666666">
                    67.5 lbs                </td>
                <td style="font-size:22px; font-weight:bold; padding-top:5px; padding-bottom:10px; border-bottom:1px dashed #ccc; color:#666666">665 Day(s)</td>
            </tr>

            <tr>
                <td width="33%" style="padding-top:10px"><span style="font-size:12px; color:#999">Last Date : </span></td>
                <td width="33%" style="padding-top:10px"><span style='font-size:12px; color:#999'>1RM : </span></td>
                <td width="34%" style="padding-top:10px"><span style="font-size:12px; color:#999">Result</span></td>
            </tr>

            <tr>
                <td style="font-size:22px; font-weight:bold; padding-top:5px; padding-bottom:10px; border-bottom:1px dashed #ccc; color:#666666">2021-03-08</td>
                <td style="font-size:22px; font-weight:bold; padding-top:5px; padding-bottom:10px; border-bottom:1px dashed #ccc; color:#666666">
                    136 lbs</td>
                <td style="font-size:22px; font-weight:bold; padding-top:5px; padding-bottom:10px; border-bottom:1px dashed #ccc; color:#666666">Increase 101.5 %</td>
            </tr>
        </table>
    </td>
</tr>
<!-- Section for Training logs -->
<tr>
    <th colspan="3" class="listheader"  style=" padding-top:40px; padding-left:5px; font-size:16px; color: #4d4f53; border-bottom:1px solid #d4d4d4; ">
        Logs For : Barbell Bench Press    </th>
</tr>

<tr>
    <td id='trainingLogs' style='padding-top:10px'><div id='log_container' style='width:540px;'><div id='log_date' style='width:100px;float:left;border-top-style:solid;border-width:1px;'>
						        <p style='padding-left:5px;'>2021-03-08</p></div><div id='log_logs' style='width:350px;float:left;border-top-style:solid;border-width:1px;'><p style='padding-left:100px;'><b>Set 1 :</b> 85x18<br/></p><p style='padding-left:100px;'><b>Set 2 :</b> 85x16<br/></p><p style='padding-left:100px;'><b>Set 3 :</b> 85x12<br/></p><br /></div>
			     		      <div id='log_record' style='width:90px;float:left;border-top-style:solid;border-width:1px;'>
						      <p style='padding-left:5px;'><b>1RM:</b>     136</p></div></div><div id='log_container' style='width:540px;'><div id='log_date' style='width:100px;float:left;border-top-style:solid;border-width:1px;'>
						        <p style='padding-left:5px;'>2021-03-03</p></div><div id='log_logs' style='width:350px;float:left;border-top-style:solid;border-width:1px;'><p style='padding-left:100px;'><b>Set 1 :</b> 85x13<br/></p><p style='padding-left:100px;'><b>Set 2 :</b> 85x13<br/></p><p style='padding-left:100px;'><b>Set 3 :</b> 85x13<br/></p><p style='padding-left:100px;'><b>Set 4 :</b> 85x13<br/></p><br /></div>
			     		      <div id='log_record' style='width:90px;float:left;border-top-style:solid;border-width:1px;'>
						      <p style='padding-left:5px;'><b>1RM:</b>     121.83</p></div></div><div id='log_container' style='width:540px;'><div id='log_date' style='width:100px;float:left;border-top-style:solid;border-width:1px;'>
						        <p style='padding-left:5px;'>2021-02-22</p></div><div id='log_logs' style='width:350px;float:left;border-top-style:solid;border-width:1px;'><p style='padding-left:100px;'><b>Set 1 :</b> 90x11<br/></p><p style='padding-left:100px;'><b>Set 2 :</b> 90x12<br/></p><p style='padding-left:100px;'><b>Set 3 :</b> 90x12<br/></p><p style='padding-left:100px;'><b>Set 4 :</b> 90x12<br/></p><br /></div>
			     		      <div id='log_record' style='width:90px;float:left;border-top-style:solid;border-width:1px;'>
						      <p style='padding-left:5px;'><b>1RM:</b>     125.99</p></div></div><div id='log_container' style='width:540px;'><div id='log_date' style='width:100px;float:left;border-top-style:solid;border-width:1px;'>
						        <p style='padding-left:5px;'>2021-02-08</p></div><div id='log_logs' style='width:350px;float:left;border-top-style:solid;border-width:1px;'><p style='padding-left:100px;'><b>Set 1 :</b> 85x12<br/></p><p style='padding-left:100px;'><b>Set 2 :</b> 85x12<br/></p><p style='padding-left:100px;'><b>Set 3 :</b> 85x12<br/></p><p style='padding-left:100px;'><b>Set 4 :</b> 85x12<br/></p><br /></div>
			     		      <div id='log_record' style='width:90px;float:left;border-top-style:solid;border-width:1px;'>
						      <p style='padding-left:5px;'><b>1RM:</b>     118.99</p></div></div><div id='log_container' style='width:540px;'><div id='log_date' style='width:100px;float:left;border-top-style:solid;border-width:1px;'>
						        <p style='padding-left:5px;'>2021-02-01</p></div><div id='log_logs' style='width:350px;float:left;border-top-style:solid;border-width:1px;'><p style='padding-left:100px;'><b>Set 1 :</b> 85x12<br/></p><p style='padding-left:100px;'><b>Set 2 :</b> 85x12<br/></p><p style='padding-left:100px;'><b>Set 3 :</b> 85x12<br/></p><p style='padding-left:100px;'><b>Set 4 :</b> 85x12<br/></p><br /></div>
			     		      <div id='log_record' style='width:90px;float:left;border-top-style:solid;border-width:1px;'>
						      <p style='padding-left:5px;'><b>1RM:</b>     118.99</p></div></div></td></tr>
<tr id="LoadALL">
    
             	<td align='center'>
             	<input
       				style='padding-left:10px; padding-top:10px; padding-right:10px; padding-bottom:10px; width:200px'
       				type='trainingbutton' name='loadMoreLogs' value='Show All Training Logs'
       				onclick='loadMoreDays(2,1);'/>
             	</td>
				</tr>

<!-- End Section for Training logs -->
</table>
</td>
<td width="170" valign="top"><table cellspacing="0" id="hor-minimalist_2">

<tr><td id="JefitSideTableAds">

        <script type="text/javascript"><!--
            google_ad_client = "ca-pub-2835681754103896";
            /* JEFIT LEFT */
            google_ad_slot = "8830191561";
            google_ad_width = 160;
            google_ad_height = 600;
            //-->
        </script>
        <script type="text/javascript"
                src="https://pagead2.googlesyndication.com/pagead/show_ads.js">
        </script>
</td></tr>
</table>
</td>
</tr>



</table>
<script type="text/javascript" src="https://www.google.com/jsapi"></script>
<script type='text/javascript'>
    google.load('visualization', '1', {'packages':['annotatedtimeline']});
    google.setOnLoadCallback(drawChart);
    function drawChart() {
        var recordType = 0;
        var type       = 2;




        if(type == 1) {
            var data = new google.visualization.DataTable();
            data.addColumn('date', 'Date');
            data.addColumn('number', 'Training Progress : Barbell Bench Press 1RM ( lbs) :');

            data.addRows([
                [new Date(1557792000000), 67.5],[new Date(1563926400000), 73.33],[new Date(1564531200000), 82.5],[new Date(1565740800000), 80],[new Date(1566259200000), 78],[new Date(1566864000000), 82.5],[new Date(1568160000000), 67.5],[new Date(1568678400000), 77],[new Date(1569369600000), 86.66],[new Date(1570579200000), 86.66],[new Date(1571788800000), 95],[new Date(1572393600000), 91],[new Date(1573516800000), 93.33],[new Date(1574812800000), 105],[new Date(1575417600000), 106.16],[new Date(1576022400000), 101.33],[new Date(1576627200000), 103.33],[new Date(1578441600000), 101.33],[new Date(1579046400000), 106.66],[new Date(1579651200000), 104],[new Date(1580256000000), 106.66],[new Date(1580860800000), 106.66],[new Date(1583280000000), 112],[new Date(1583971200000), 112],[new Date(1604880000000), 101.83],[new Date(1605484800000), 104],[new Date(1606089600000), 93.33],[new Date(1606694400000), 112],[new Date(1607299200000), 112],[new Date(1607904000000), 112],[new Date(1610928000000), 106.66],[new Date(1611532800000), 112],[new Date(1612137600000), 118.99],[new Date(1612742400000), 118.99],[new Date(1613952000000), 125.99],[new Date(1614729600000), 121.83],[new Date(1615161600000), 136]            ]);

            var chart = new google.visualization.AnnotatedTimeLine(document.getElementById('chart_div2'));
            chart.draw(data,
                {displayAnnotations: false,
                    thickness:2,
                    scaleType:'maximized'});
        } else {
            if(recordType <= 1) {
                var data = new google.visualization.DataTable();
                data.addColumn('date', 'Date');
                data.addColumn('number', 'Training Progress : Barbell Bench Press 1RM ( lbs) :');
                data.addRows([
                    [new Date(1557792000000), 67.5],[new Date(1563926400000), 73.33],[new Date(1564531200000), 82.5],[new Date(1565740800000), 80],[new Date(1566259200000), 78],[new Date(1566864000000), 82.5],[new Date(1568160000000), 67.5],[new Date(1568678400000), 77],[new Date(1569369600000), 86.66],[new Date(1570579200000), 86.66],[new Date(1571788800000), 95],[new Date(1572393600000), 91],[new Date(1573516800000), 93.33],[new Date(1574812800000), 105],[new Date(1575417600000), 106.16],[new Date(1576022400000), 101.33],[new Date(1576627200000), 103.33],[new Date(1578441600000), 101.33],[new Date(1579046400000), 106.66],[new Date(1579651200000), 104],[new Date(1580256000000), 106.66],[new Date(1580860800000), 106.66],[new Date(1583280000000), 112],[new Date(1583971200000), 112],[new Date(1604880000000), 101.83],[new Date(1605484800000), 104],[new Date(1606089600000), 93.33],[new Date(1606694400000), 112],[new Date(1607299200000), 112],[new Date(1607904000000), 112],[new Date(1610928000000), 106.66],[new Date(1611532800000), 112],[new Date(1612137600000), 118.99],[new Date(1612742400000), 118.99],[new Date(1613952000000), 125.99],[new Date(1614729600000), 121.83],[new Date(1615161600000), 136]                ]);

                var chart = new google.visualization.AnnotatedTimeLine(document.getElementById('chart_div2'));
                chart.draw(data,
                    {displayAnnotations: false,
                        thickness:2,
                        scaleType:'maximized'});
            } else if(recordType == 2) {
                var data = new google.visualization.DataTable();

                var c_Type = "none";

                data.addColumn('date', 'Date');

                if(c_Type == "Distance"){
                    data.addColumn('number', 'Dist');
                } else if (c_Type == "Speed"){
                    data.addColumn('number', 'Speed');
                } else if (c_Type == "Lap/Rep") {
                    data.addColumn('number', 'Laps/Reps');
                } else if (c_Type == "Duration") {
                    data.addColumn('number', 'Dur (in secs)');
                } else {
                    data.addColumn('number', 'Cal');
                }

                data.addRows([
                    [new Date(1557792000000), 67.5],[new Date(1563926400000), 73.33],[new Date(1564531200000), 82.5],[new Date(1565740800000), 80],[new Date(1566259200000), 78],[new Date(1566864000000), 82.5],[new Date(1568160000000), 67.5],[new Date(1568678400000), 77],[new Date(1569369600000), 86.66],[new Date(1570579200000), 86.66],[new Date(1571788800000), 95],[new Date(1572393600000), 91],[new Date(1573516800000), 93.33],[new Date(1574812800000), 105],[new Date(1575417600000), 106.16],[new Date(1576022400000), 101.33],[new Date(1576627200000), 103.33],[new Date(1578441600000), 101.33],[new Date(1579046400000), 106.66],[new Date(1579651200000), 104],[new Date(1580256000000), 106.66],[new Date(1580860800000), 106.66],[new Date(1583280000000), 112],[new Date(1583971200000), 112],[new Date(1604880000000), 101.83],[new Date(1605484800000), 104],[new Date(1606089600000), 93.33],[new Date(1606694400000), 112],[new Date(1607299200000), 112],[new Date(1607904000000), 112],[new Date(1610928000000), 106.66],[new Date(1611532800000), 112],[new Date(1612137600000), 118.99],[new Date(1612742400000), 118.99],[new Date(1613952000000), 125.99],[new Date(1614729600000), 121.83],[new Date(1615161600000), 136]                ]);

                var chart = new google.visualization.AnnotatedTimeLine(document.getElementById('chart_div2'));
                chart.draw(data,
                    {displayAnnotations: false,
                        colors: ['#ff0000', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
                        thickness:2,
                        scaleType:'maximized'});

            } else if(recordType == 3) {
                var data = new google.visualization.DataTable();
                data.addColumn('date', 'Date');
                data.addColumn('number', 'Training Progress : Barbell Bench Press 1RM ( lbs) :');
                data.addRows([
                    [new Date(1557792000000), 67.5],[new Date(1563926400000), 73.33],[new Date(1564531200000), 82.5],[new Date(1565740800000), 80],[new Date(1566259200000), 78],[new Date(1566864000000), 82.5],[new Date(1568160000000), 67.5],[new Date(1568678400000), 77],[new Date(1569369600000), 86.66],[new Date(1570579200000), 86.66],[new Date(1571788800000), 95],[new Date(1572393600000), 91],[new Date(1573516800000), 93.33],[new Date(1574812800000), 105],[new Date(1575417600000), 106.16],[new Date(1576022400000), 101.33],[new Date(1576627200000), 103.33],[new Date(1578441600000), 101.33],[new Date(1579046400000), 106.66],[new Date(1579651200000), 104],[new Date(1580256000000), 106.66],[new Date(1580860800000), 106.66],[new Date(1583280000000), 112],[new Date(1583971200000), 112],[new Date(1604880000000), 101.83],[new Date(1605484800000), 104],[new Date(1606089600000), 93.33],[new Date(1606694400000), 112],[new Date(1607299200000), 112],[new Date(1607904000000), 112],[new Date(1610928000000), 106.66],[new Date(1611532800000), 112],[new Date(1612137600000), 118.99],[new Date(1612742400000), 118.99],[new Date(1613952000000), 125.99],[new Date(1614729600000), 121.83],[new Date(1615161600000), 136]                ]);

                var chart = new google.visualization.AnnotatedTimeLine(document.getElementById('chart_div2'));
                chart.draw(data,
                    {displayAnnotations: false,
                        colors: ['#ff0000', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
                        thickness:2,
                        scaleType:'maximized'});
            } else if(recordType == 4) {
                var data = new google.visualization.DataTable();
                var c_Type = "none";

                data.addColumn('date', 'Date');
                if(c_Type == "Duration"){
                    data.addColumn('number', 'Duration (in secs)');
                } else {
                    data.addColumn('number', 'Laps/Rep');
                }

                data.addRows([
                    [new Date(1557792000000), 67.5],[new Date(1563926400000), 73.33],[new Date(1564531200000), 82.5],[new Date(1565740800000), 80],[new Date(1566259200000), 78],[new Date(1566864000000), 82.5],[new Date(1568160000000), 67.5],[new Date(1568678400000), 77],[new Date(1569369600000), 86.66],[new Date(1570579200000), 86.66],[new Date(1571788800000), 95],[new Date(1572393600000), 91],[new Date(1573516800000), 93.33],[new Date(1574812800000), 105],[new Date(1575417600000), 106.16],[new Date(1576022400000), 101.33],[new Date(1576627200000), 103.33],[new Date(1578441600000), 101.33],[new Date(1579046400000), 106.66],[new Date(1579651200000), 104],[new Date(1580256000000), 106.66],[new Date(1580860800000), 106.66],[new Date(1583280000000), 112],[new Date(1583971200000), 112],[new Date(1604880000000), 101.83],[new Date(1605484800000), 104],[new Date(1606089600000), 93.33],[new Date(1606694400000), 112],[new Date(1607299200000), 112],[new Date(1607904000000), 112],[new Date(1610928000000), 106.66],[new Date(1611532800000), 112],[new Date(1612137600000), 118.99],[new Date(1612742400000), 118.99],[new Date(1613952000000), 125.99],[new Date(1614729600000), 121.83],[new Date(1615161600000), 136]                ]);

                var chart = new google.visualization.AnnotatedTimeLine(document.getElementById('chart_div2'));
                chart.draw(data,
                    {displayAnnotations: false,
                        colors: ['#ff0000', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
                        thickness:2,
                        scaleType:'maximized'});
            }
        }
    }



    function setXMLHttpRequest() {
        var xmlhttp;
        if(window.XMLHttpRequest)
        // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        else
        // code for IE6, IE 5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        return xmlhttp;
    }

    function loadMoreDays(eid,belongSys)
    {
        //hide the button
        document.getElementById('LoadALL').style.visibility = 'hidden';

        //loadMoreButton(elementid,routineid,dayStart,dayCount);
        var xmlhttp1 = setXMLHttpRequest();
        xmlhttp1.onreadystatechange = function(){
            if(xmlhttp1.readyState == 4 && xmlhttp1.status == 200){
                document.getElementById('trainingLogs').innerHTML=xmlhttp1.responseText;
            }
        };
        //Next 3 lines are used by ajax for POST
        xmlhttp1.open('POST','load-more-logs.php',true);
        xmlhttp1.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xmlhttp1.send('eid=' + eid + '&belongSys=' + belongSys);
    };

</script>
</div>

<!--Cookie banner-->
<script src="https://www.jefit.com/assets/plugins/cookie-banner/cookiealert-standalone.js"></script>

<!--<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>

<script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam-cell.nr-data.net","licenseKey":"a5e0c8e661","applicationID":"524815282","transactionName":"ZlxTN0pRWUoCUhZeWV8WZBFRH1pcDlMHRUUeWlkCSkQYUA1VB08YQVFB","queueTime":0,"applicationTime":109,"atts":"ShtQQQJLSkQ=","errorBeacon":"bam-cell.nr-data.net","agent":""}</script></body>
<!-- body closed-->

<footer class="jupiterx-footer" role="contentinfo" itemscope="itemscope" itemtype="http://schema.org/WPFooter">
    <div class="footer-links-container container-fluid">
        <div class="footer-links">
            <div class="jupiterx-subfooter-menu-container row">
                <li class="col-sm-3"><a href="https://www.jefit.com/elite">Elite Membership</a></li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page col-sm-3"><a href="https://www.jefit.com/routines">Workout Plans</a></li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page col-sm-3"><a href="https://www.jefit.com/blog">Blog</a></li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page col-sm-3"><a href="https://www.jefit.com/privacy-policy">Privacy Policy</a></li>
            </div>
        </div>

        <div class="footer-links">
            <div class="jupiterx-subfooter-menu-container row">
                <li class="menu-item menu-item-type-post_type menu-item-object-page col-sm-3"><a href="https://www.jefit.com/coach">Coach Mode</a></li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page col-sm-3"><a href="https://www.jefit.com/exercises"">Exercise Database</a></li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page col-sm-3"><a href="https://www.facebook.com/jefitapp">Facebook</a></li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page col-sm-3"><a href="https://www.jefit.com/terms-of-use">Terms of Use</a></li>
            </div>
        </div>

        <div class="footer-links">
            <div class="jupiterx-subfooter-menu-container row">
                <li class="menu-item menu-item-type-post_type menu-item-object-page col-sm-3"><a href="https://www.jefit.com/signup">Sign up</a></li>
<!--                <li class="menu-item menu-item-type-post_type menu-item-object-page col-sm-3"><a href="--><!--/company/">About Us</a></li>-->
                <li class="menu-item menu-item-type-post_type menu-item-object-page col-sm-3"><a href="https://support.jefit.com/hc/en-us">Help Center</a></li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page col-sm-3"><a href="https://twitter.com/jefitinc">Twitter</a></li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page col-sm-3"><a href="https://www.jefit.com/intellectual-property-notice-of-infringement-procedure">IP/DMCA Notices</a></li>
            </div>
        </div>

        <div class="footer-links">
            <div class="jupiterx-subfooter-menu-container row">
                <li class="menu-item menu-item-type-post_type menu-item-object-page col-sm-3"><a href="https://www.jefit.com/login">Log in</a></li>
<!--                <li class="menu-item menu-item-type-post_type menu-item-object-page col-sm-3"><a href="https://support.jefit.com/hc/en-us">Help Center</a></li>-->
                <li class="menu-item menu-item-type-post_type menu-item-object-page col-sm-3"><a href="#"></a></li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page col-sm-3"><a href="https://www.instagram.com/jefitapp/">Instagram</a></li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page col-sm-3"><a href="https://www.jefit.com/press-media">Press &amp; Media</a></li>
            </div>
        </div>
    </div>
    <div class="jupiterx-subfooter">
        <div class="container-fluid" align="center">
            <div class="jupiterx-subfooter-copyright">&#169; 2021 - Jefit - #1 Gym / Home workout app. All rights reserved.</div>
        </div>
    </div>
</footer>
</html>


`

beforeEach(() => {
  fetch.mockResponse(html)
})

test('should return history', async () => {
  const { result, waitForValueToChange } = renderHook(() =>
    useExerciseHistory('https://jefit.com')
  )

  await waitForValueToChange(() => result.current)

  expect(result.current.value).toEqual(expect.anything())
})
