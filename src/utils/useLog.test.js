import { renderHook } from '@testing-library/react-hooks'
import useLog from './useLog'

const html = `

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en-US">
<head profile="http://gmpg.org/xfn/11">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><script type="text/javascript">(window.NREUM||(NREUM={})).loader_config={licenseKey:"a5e0c8e661",applicationID:"524815282"};window.NREUM||(NREUM={}),__nr_require=function(e,t,n){function r(n){if(!t[n]){var i=t[n]={exports:{}};e[n][0].call(i.exports,function(t){var i=e[n][1][t];return r(i||t)},i,i.exports)}return t[n].exports}if("function"==typeof __nr_require)return __nr_require;for(var i=0;i<n.length;i++)r(n[i]);return r}({1:[function(e,t,n){function r(){}function i(e,t,n){return function(){return o(e,[u.now()].concat(c(arguments)),t?null:this,n),t?void 0:this}}var o=e("handle"),a=e(6),c=e(7),f=e("ee").get("tracer"),u=e("loader"),s=NREUM;"undefined"==typeof window.newrelic&&(newrelic=s);var d=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],p="api-",l=p+"ixn-";a(d,function(e,t){s[t]=i(p+t,!0,"api")}),s.addPageAction=i(p+"addPageAction",!0),s.setCurrentRouteName=i(p+"routeName",!0),t.exports=newrelic,s.interaction=function(){return(new r).get()};var m=r.prototype={createTracer:function(e,t){var n={},r=this,i="function"==typeof t;return o(l+"tracer",[u.now(),e,n],r),function(){if(f.emit((i?"":"no-")+"fn-start",[u.now(),r,i],n),i)try{return t.apply(this,arguments)}catch(e){throw f.emit("fn-err",[arguments,this,e],n),e}finally{f.emit("fn-end",[u.now()],n)}}}};a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(e,t){m[t]=i(l+t)}),newrelic.noticeError=function(e,t){"string"==typeof e&&(e=new Error(e)),o("err",[e,u.now(),!1,t])}},{}],2:[function(e,t,n){function r(){return c.exists&&performance.now?Math.round(performance.now()):(o=Math.max((new Date).getTime(),o))-a}function i(){return o}var o=(new Date).getTime(),a=o,c=e(8);t.exports=r,t.exports.offset=a,t.exports.getLastTimestamp=i},{}],3:[function(e,t,n){function r(e,t){var n=e.getEntries();n.forEach(function(e){"first-paint"===e.name?d("timing",["fp",Math.floor(e.startTime)]):"first-contentful-paint"===e.name&&d("timing",["fcp",Math.floor(e.startTime)])})}function i(e,t){var n=e.getEntries();n.length>0&&d("lcp",[n[n.length-1]])}function o(e){e.getEntries().forEach(function(e){e.hadRecentInput||d("cls",[e])})}function a(e){if(e instanceof m&&!g){var t=Math.round(e.timeStamp),n={type:e.type};t<=p.now()?n.fid=p.now()-t:t>p.offset&&t<=Date.now()?(t-=p.offset,n.fid=p.now()-t):t=p.now(),g=!0,d("timing",["fi",t,n])}}function c(e){d("pageHide",[p.now(),e])}if(!("init"in NREUM&&"page_view_timing"in NREUM.init&&"enabled"in NREUM.init.page_view_timing&&NREUM.init.page_view_timing.enabled===!1)){var f,u,s,d=e("handle"),p=e("loader"),l=e(5),m=NREUM.o.EV;if("PerformanceObserver"in window&&"function"==typeof window.PerformanceObserver){f=new PerformanceObserver(r);try{f.observe({entryTypes:["paint"]})}catch(v){}u=new PerformanceObserver(i);try{u.observe({entryTypes:["largest-contentful-paint"]})}catch(v){}s=new PerformanceObserver(o);try{s.observe({type:"layout-shift",buffered:!0})}catch(v){}}if("addEventListener"in document){var g=!1,w=["click","keydown","mousedown","pointerdown","touchstart"];w.forEach(function(e){document.addEventListener(e,a,!1)})}l(c)}},{}],4:[function(e,t,n){function r(e,t){if(!i)return!1;if(e!==i)return!1;if(!t)return!0;if(!o)return!1;for(var n=o.split("."),r=t.split("."),a=0;a<r.length;a++)if(r[a]!==n[a])return!1;return!0}var i=null,o=null,a=/Version\/(\S+)\s+Safari/;if(navigator.userAgent){var c=navigator.userAgent,f=c.match(a);f&&c.indexOf("Chrome")===-1&&c.indexOf("Chromium")===-1&&(i="Safari",o=f[1])}t.exports={agent:i,version:o,match:r}},{}],5:[function(e,t,n){function r(e){function t(){e(a&&document[a]?document[a]:document[i]?"hidden":"visible")}"addEventListener"in document&&o&&document.addEventListener(o,t,!1)}t.exports=r;var i,o,a;"undefined"!=typeof document.hidden?(i="hidden",o="visibilitychange",a="visibilityState"):"undefined"!=typeof document.msHidden?(i="msHidden",o="msvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(i="webkitHidden",o="webkitvisibilitychange",a="webkitVisibilityState")},{}],6:[function(e,t,n){function r(e,t){var n=[],r="",o=0;for(r in e)i.call(e,r)&&(n[o]=t(r,e[r]),o+=1);return n}var i=Object.prototype.hasOwnProperty;t.exports=r},{}],7:[function(e,t,n){function r(e,t,n){t||(t=0),"undefined"==typeof n&&(n=e?e.length:0);for(var r=-1,i=n-t||0,o=Array(i<0?0:i);++r<i;)o[r]=e[t+r];return o}t.exports=r},{}],8:[function(e,t,n){t.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(e,t,n){function r(){}function i(e){function t(e){return e&&e instanceof r?e:e?u(e,f,a):a()}function n(n,r,i,o,a){if(a!==!1&&(a=!0),!l.aborted||o){e&&a&&e(n,r,i);for(var c=t(i),f=v(n),u=f.length,s=0;s<u;s++)f[s].apply(c,r);var p=d[h[n]];return p&&p.push([b,n,r,c]),c}}function o(e,t){y[e]=v(e).concat(t)}function m(e,t){var n=y[e];if(n)for(var r=0;r<n.length;r++)n[r]===t&&n.splice(r,1)}function v(e){return y[e]||[]}function g(e){return p[e]=p[e]||i(n)}function w(e,t){s(e,function(e,n){t=t||"feature",h[n]=t,t in d||(d[t]=[])})}var y={},h={},b={on:o,addEventListener:o,removeEventListener:m,emit:n,get:g,listeners:v,context:t,buffer:w,abort:c,aborted:!1};return b}function o(e){return u(e,f,a)}function a(){return new r}function c(){(d.api||d.feature)&&(l.aborted=!0,d=l.backlog={})}var f="nr@context",u=e("gos"),s=e(6),d={},p={},l=t.exports=i();t.exports.getOrSetContext=o,l.backlog=d},{}],gos:[function(e,t,n){function r(e,t,n){if(i.call(e,t))return e[t];var r=n();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,t,{value:r,writable:!0,enumerable:!1}),r}catch(o){}return e[t]=r,r}var i=Object.prototype.hasOwnProperty;t.exports=r},{}],handle:[function(e,t,n){function r(e,t,n,r){i.buffer([e],r),i.emit(e,t,n)}var i=e("ee").get("handle");t.exports=r,r.ee=i},{}],id:[function(e,t,n){function r(e){var t=typeof e;return!e||"object"!==t&&"function"!==t?-1:e===window?0:a(e,o,function(){return i++})}var i=1,o="nr@id",a=e("gos");t.exports=r},{}],loader:[function(e,t,n){function r(){if(!x++){var e=b.info=NREUM.info,t=p.getElementsByTagName("script")[0];if(setTimeout(u.abort,3e4),!(e&&e.licenseKey&&e.applicationID&&t))return u.abort();f(y,function(t,n){e[t]||(e[t]=n)});var n=a();c("mark",["onload",n+b.offset],null,"api"),c("timing",["load",n]);var r=p.createElement("script");r.src="https://"+e.agent,t.parentNode.insertBefore(r,t)}}function i(){"complete"===p.readyState&&o()}function o(){c("mark",["domContent",a()+b.offset],null,"api")}var a=e(2),c=e("handle"),f=e(6),u=e("ee"),s=e(4),d=window,p=d.document,l="addEventListener",m="attachEvent",v=d.XMLHttpRequest,g=v&&v.prototype;NREUM.o={ST:setTimeout,SI:d.setImmediate,CT:clearTimeout,XHR:v,REQ:d.Request,EV:d.Event,PR:d.Promise,MO:d.MutationObserver};var w=""+location,y={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-1198.min.js"},h=v&&g&&g[l]&&!/CriOS/.test(navigator.userAgent),b=t.exports={offset:a.getLastTimestamp(),now:a,origin:w,features:{},xhrWrappable:h,userAgent:s};e(1),e(3),p[l]?(p[l]("DOMContentLoaded",o,!1),d[l]("load",r,!1)):(p[m]("onreadystatechange",i),d[m]("onload",r)),c("mark",["firstbyte",a.getLastTimestamp()],null,"api");var x=0},{}],"wrap-function":[function(e,t,n){function r(e,t){function n(t,n,r,f,u){function nrWrapper(){var o,a,s,p;try{a=this,o=d(arguments),s="function"==typeof r?r(o,a):r||{}}catch(l){i([l,"",[o,a,f],s],e)}c(n+"start",[o,a,f],s,u);try{return p=t.apply(a,o)}catch(m){throw c(n+"err",[o,a,m],s,u),m}finally{c(n+"end",[o,a,p],s,u)}}return a(t)?t:(n||(n=""),nrWrapper[p]=t,o(t,nrWrapper,e),nrWrapper)}function r(e,t,r,i,o){r||(r="");var c,f,u,s="-"===r.charAt(0);for(u=0;u<t.length;u++)f=t[u],c=e[f],a(c)||(e[f]=n(c,s?f+r:r,i,f,o))}function c(n,r,o,a){if(!m||t){var c=m;m=!0;try{e.emit(n,r,o,t,a)}catch(f){i([f,n,r,o],e)}m=c}}return e||(e=s),n.inPlace=r,n.flag=p,n}function i(e,t){t||(t=s);try{t.emit("internal-error",e)}catch(n){}}function o(e,t,n){if(Object.defineProperty&&Object.keys)try{var r=Object.keys(e);return r.forEach(function(n){Object.defineProperty(t,n,{get:function(){return e[n]},set:function(t){return e[n]=t,t}})}),t}catch(o){i([o],n)}for(var a in e)l.call(e,a)&&(t[a]=e[a]);return t}function a(e){return!(e&&e instanceof Function&&e.apply&&!e[p])}function c(e,t){var n=t(e);return n[p]=e,o(e,n,s),n}function f(e,t,n){var r=e[t];e[t]=c(r,n)}function u(){for(var e=arguments.length,t=new Array(e),n=0;n<e;++n)t[n]=arguments[n];return t}var s=e("ee"),d=e(7),p="nr@original",l=Object.prototype.hasOwnProperty,m=!1;t.exports=r,t.exports.wrapFunction=c,t.exports.wrapInPlace=f,t.exports.argsToArray=u},{}]},{},["loader"]);</script>
<meta property="og:site_name" content="Jefit">
    <meta property="og:title" content="debbie.facey's Workout Summary">

<meta property="og:url" content="http://www.jefit.com">
<meta name="description"
      content="debbie.facey's online profile for the Jefit Workout App. View debbie.facey's workout, fitness and bodybuilding logs and stats and give comments on their progress!"/>
<meta name="keywords"
      content="Jefit, Workout, Bodybuilding, App, Fitness, Routine, Database, Exercise, Planner, Android, Weight, Training, Tracking, Progress, Notes, Logs, Pictures, Data, Statistics, Body, iPhone, Daily, Calendar, Date, Lifting,"/>

<title>debbie.facey User Logs | Jefit - Best Android and iPhone Workout, Fitness, Exercise, and
    Bodybuilding App | Best Workout Tracking Software</title>
<link rel="stylesheet" href="../../../css/style.css" type="text/css" media="screen"/>
    <!-- Meta -->
    <meta charset="utf-8">
    <meta name="description"
          content="Looking to improve & track your workout? Download JEFIT, the #1 Android and iPhone workout & bodybuilding app."/>
    <meta content="" name="author">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- CSS Global Compulsory -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
    <link rel="stylesheet" href="https://www.jefit.com/assets/css/style.css"/>

    <!-- CSS Implementing Plugins -->
    <link rel="stylesheet" href="https://www.jefit.com/assets/plugins/line-icons/line-icons.css"/>
    <link rel="stylesheet" href="https://www.jefit.com/assets/plugins/font-awesome/css/font-awesome.css"/>
    <link rel="shortcut icon" href="https://www.jefit.com/favicon.ico" type="image/x-icon"/>

    <!-- JEFIT Main Style file -->
    <link rel="stylesheet"
          href="https://www.jefit.com/1591564091/style"
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
    })(window,document,'script','dataLayer','GTM-5P4QND4');</script>
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
    <body style="background-color:#fcfcfc;">

        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5P4QND4"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->

    <!-- wrapper open, close in footer.php-->
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
                <a id = 'top-download-banner' href='https://sy95h.app.goo.gl/?link=https%3A%2F%2Fwww.jefit.com%2Fmembers%2Fuser-logs%2Flog%2F%3Fxid%3Ddebbie-facey%26dd%3D2020-07-24%26utm_campaign%3Dweb_link%26utm_source%3Dwebsite%26utm_medium%3Dbottom_banner_mobile%26utm_content%3D%25252Fmembers%25252Fuser-logs%25252Flog%25252F&apn=je.fit&ibi=com.Jefit.JEFIT&isi=449810000' style="display:block;width:100%;height:100%;"></a>
            </div>        <!-- Dumb smart banner END -->


        <!-- Topbar -->
            <div class="container mt-2">
                                <div class="row">
                    <div class="col-auto ml-auto dropdown p-0">
                        <a class="btn btn-sm btn-info pull-right" style="margin-right: 5px;" href="https://www.jefit.com/signup/">
                            <i class="fa fa-user pull-left"></i> Sign up</a>
                    </div>
                    <div class="col-auto dropdown p-0">
                        <a class="btn btn-sm pull-right" style="margin-right: 5px;" href="https://www.jefit.com/login">
                            <i class="fa fa-sign-in pull-left"></i> Login</a>
                    </div>
                </div>
                            </div>
            <!-- End Topbar Navigation -->

        <!--=== Header ===-->
        <nav class="navbar navbar-expand-xl navbar-light pb-4" style="background-color: #ffffff;">
            <a class="navbar-brand" href="https://www.jefit.com/">
                <img src="https://www.jefit.com/images/logo_155_40.png" height="20" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">

                <ul class="ml-auto navbar-nav">

                    <li class="nav-item">
                                                    <a class="nav-title nav-link" href="https://www.jefit.com/">HOME</a>
                                            </li>

                    <li class="nav-item dropdown">
                        <a class="nav-title nav-link dropdown-toggle" href="https://www.jefit.com/routines/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          WORKOUTS
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" style="background-color: #00AEEF; color: #FFFFFF; padding:0px 10px; font-size: 12px">Categories</a>
                            <a class="dropdown-item" href="https://www.jefit.com/routines/">All Workouts</a>
                            <a class="dropdown-item" style="background-color: #00AEEF; color: #FFFFFF; padding:0px 10px; font-size: 12px">Gym Workouts</a>
                            <a class="dropdown-item" href="https://www.jefit.com/routines/20683/3-months-from-fat-to-fit">3 Month Fat to Fit</a>
                            <a class="dropdown-item" href="https://www.jefit.com/routines/56286/3-day-split">3 Day Split</a>
                            <a class="dropdown-item" href="https://www.jefit.com/routines/20517/5-day-compound-exercise-only-workout">Compound Exercise Only</a>
                            <a class="dropdown-item" href="https://www.jefit.com/routines/56292/6-week-fat-loss-program">Fat to Fit</a>
                            <a class="dropdown-item" href="https://www.jefit.com/routines/24597/planet-fitness-full-body-routine">Gym Full Body Routine</a>
                            <a class="dropdown-item" href="https://www.jefit.com/routines/20525/machine-only-beginner-workout">Machine Only</a>
                            <a class="dropdown-item" style="background-color: #00AEEF; color: #FFFFFF; padding:0px 10px; font-size: 12px">Home Workouts</a>
                            <a class="dropdown-item" href="https://www.jefit.com/routines/56319/20-minute-hiit-circuit">20 Minute HIIT Circuit</a>
                            <a class="dropdown-item" href="https://www.jefit.com/routines/56309/30-minute-no-equipment">30 Minute No Equipment</a>
                            <a class="dropdown-item" href="https://www.jefit.com/routines/56303/3-day-burn-fat">3 Day Fat Loss</a>
                            <a class="dropdown-item" href="https://www.jefit.com/routines/56302/3-day-strength-building">3 Day Strength Building</a>
                            <a class="dropdown-item" style="background-color: #00AEEF; color: #FFFFFF; padding:0px 10px; font-size: 12px">Single Workouts</a>
                            <a class="dropdown-item" href="https://www.jefit.com/routines/56312/20-minute-arms">20 Minute Arms</a>
                            <a class="dropdown-item" href="https://www.jefit.com/routines/56329/back-and-biceps">Back and Biceps</a>
                            <a class="dropdown-item" href="https://www.jefit.com/routines/56328/chest-and-triceps">Chest and Triceps</a>
                        </div>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-title nav-link dropdown-toggle" href="https://www.jefit.com/exercises/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          EXERCISES
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" style="background-color: #00AEEF; color: #FFFFFF; padding:0px 10px; font-size: 12px">Categories</a>
                            <a class="dropdown-item" href="https://www.jefit.com/exercises/">All Exercises</a>
                            <a class="dropdown-item" style="background-color: #00AEEF; color: #FFFFFF; padding:0px 10px; font-size: 12px">Arms</a>
                            <a class="dropdown-item" href="https://www.jefit.com/exercises/116/Dumbbell-Alternate-Bicep-Curl">Alternating Bicep Curls</a>
                            <a class="dropdown-item" href="https://www.jefit.com/exercises/112/Barbell-Curl">Barbell Curl</a>
                            <a class="dropdown-item" href="https://www.jefit.com/exercises/183/cable-straight-arm-push-down">Cable Push Down</a>
                            <a class="dropdown-item" href="https://www.jefit.com/exercises/4/Barbell-Close-Grip-Bench-Press">Close Grip Bench Press</a>
                            <a class="dropdown-item" href="https://www.jefit.com/exercises/108/Dumbbell-Hammer-Curls">Dumbbell Hammer Curl</a>
                            <a class="dropdown-item" style="background-color: #00AEEF; color: #FFFFFF; padding:0px 10px; font-size: 12px">Back</a>
                            <a class="dropdown-item" href="https://www.jefit.com/exercises/3/Barbell-Bent-Over-Row">Barbell Bent Over Row</a>
                            <a class="dropdown-item" href="https://www.jefit.com/exercises/93/barbell-deadlift">Barbell Deadlift</a>
                            <a class="dropdown-item" href="https://www.jefit.com/exercises/90/dumbbell-one-arm-row">Dumbbell Row</a>
                            <a class="dropdown-item" href="https://www.jefit.com/exercises/86/Wide-Grip-Lat-Pulldown">Lat Pulldown</a>
                            <a class="dropdown-item" href="https://www.jefit.com/exercises/83/Pull-Ups">Pull Up</a>
                            <a class="dropdown-item" style="background-color: #00AEEF; color: #FFFFFF; padding:0px 10px; font-size: 12px">Chest</a>
                            <a class="dropdown-item" href="https://www.jefit.com/exercises/2/Barbell-Bench-Press">Barbell Chest Press</a>
                            <a class="dropdown-item" href="https://www.jefit.com/exercises/1059/cable-lower-chest-raise">Cable Chest Raise</a>
                            <a class="dropdown-item" href="https://www.jefit.com/exercises/179/machine-decline-chest-press">Machine Decline Chest Press</a>
                            <a class="dropdown-item" href="https://www.jefit.com/exercises/45/machine-fly">Machine Fly</a>
                            <a class="dropdown-item" style="background-color: #00AEEF; color: #FFFFFF; padding:0px 10px; font-size: 12px">Legs</a>
                            <a class="dropdown-item" href="https://www.jefit.com/exercises/137/Barbell-Front-Squat">Barbell Front Squat</a>
                            <a class="dropdown-item" href="https://www.jefit.com/exercises/467/Barbell-Full-Squat">Barbell Full Squat</a>
                            <a class="dropdown-item" href="https://www.jefit.com/exercises/203/smith-machine-hack-squat">Smith Machine Hack Squat</a>
                            <a class="dropdown-item" style="background-color: #00AEEF; color: #FFFFFF; padding:0px 10px; font-size: 12px">Shoulders</a>
                            <a class="dropdown-item" href="https://www.jefit.com/exercises/453/Barbell-Standing-Military-Press">Barbell Military Press</a>
                            <a class="dropdown-item" href="https://www.jefit.com/exercises/25/Dumbbell-Arnold-Press">Dumbbell Arnold Press</a>
                            <a class="dropdown-item" href="https://www.jefit.com/exercises/210/dumbbell-iron-cross">Dumbbell Iron Cross</a>
                            <a class="dropdown-item" href="https://www.jefit.com/exercises/1166/dumbbell-close-grip-press">Dumbbell Close Grip Press</a>
                            <a class="dropdown-item" href="https://www.jefit.com/exercises/11/Barbell-Shrug">Shrugs</a>
                        </div>
                    </li>

                    <li>
                        <a class="nav-title nav-link" href="https://www.jefit.com/blog/">BLOG</a>
                    </li>
                    <li>
                        <a class="nav-title nav-link" href="https://www.jefit.com/forum/">FORUM</a>
                    </li>
                    <li class="nav-item dropdown">
                            <a class="nav-title nav-link dropdown-toggle" href="https://sy95h.app.goo.gl/fQag" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              DOWNLOAD
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" style="background-color: #00AEEF; color: #FFFFFF; padding:0px 10px; font-size: 12px">Download the App</a>
                            <a class="dropdown-item" href="https://itunes.apple.com/app/apple-store/id449810000?pt=516380&ct=Website&mt=8" target="_blank">iOS workout app</a>
                            <a class="dropdown-item" href="https://play.google.com/store/apps/details?id=je.fit&referrer=utm_source%3DWebsite" target="_blank">Android workout app</a>

                            </div>
                        </li>

                </ul>

                        </nav>
        <!--=== End Header ===-->

    
<div class = "row mx-0">

    <div class="col-md-7 order-sm-2">
        <div>
            <a href="http://www.jefit.com/members/user-logs/?xid=debbie-facey">Logs</a>-&gt; 2020-07-24        </div>
    
<div id="workout-summary" class = "row">
<div class = "col-12">
    <div style="border-bottom:1px solid #d4d4d4; padding-bottom:5px; margin-top:30px;">
        <form name="print-summary-form" method="post" action="printer-friendly-summary.php">
            <input type="hidden" name="print_content" value=""/>
            <strong style="font-size:16px; color:#4d4f53">Session Summary</strong>
                    </form>
    </div>
    </div>

    <div class="col-12">
        <div class = "row">
            <div class="col">
                <strong style="color: #7B7B7B; font-size: 14px;">Session 1</strong>
            </div>

                        <div class="deleteSummary col-2">
                &times;<input type="hidden" name="sessionid" value="180"/>
                <input type="hidden" name="date" value="2020-07-24"/>
            </div>
        </div>
    </div>
    <div class = "col-12">
        <div class="workout-session" id="workout-session645309190" style="color: #4D4F53; padding-left: 5px;">
            <div class="row">
                <div class="col-6 col-md-4">
                    <div class="row">
                        <div class = "col-4 d-flex flex-wrap align-items-center">
                            <img class="img-fluid" src="../../../images/session_length.png">
                        </div>
                        <div class = "col-8 px-0 py-2">
                            <div>Session Length</div>
                            <div><span style="font-size:14px; font-weight:bold">01:39:44</span></div>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-md-4">
                    <div class="row">
                        <div class = "col-4 d-flex flex-wrap align-items-center">
                            <img class="img-fluid" src="../../../images/total_workout_time1.png">
                        </div>
                        <div class = "col-8 px-0 py-2">
                            <div>Actual Workout</div>
                            <div><span style="font-size:14px; font-weight:bold">00:28:19</span></div>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-md-4">
                    <div class="row">
                        <div class = "col-4 d-flex flex-wrap align-items-center">
                            <img class="img-fluid" src="../../../images/wasted_time3.png">
                        </div>
                        <div class = "col-8 px-0 py-2">
                            <div>Wasted Time</div>
                            <div><span style="font-size:14px; font-weight:bold">00:37:48</span></div>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-md-4">
                    <div class="row">
                        <div class = "col-4 d-flex flex-wrap align-items-center">
                            <img class="img-fluid" src="../../../images/resting_timer.png">
                        </div>
                        <div class = "col-8 px-0 py-2">
                            <div>Rest Timer</div>
                            <div><span style="font-size:14px; font-weight:bold">00:18:37</span></div>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-md-4">
                    <div class="row">
                        <div class = "col-4 d-flex flex-wrap align-items-center">
                            <img class="img-fluid" src="../../../images/exercises_performed.png">
                        </div>
                        <div class = "col-8 px-0 py-2">
                            <div>Exercises Done</div>
                            <div><span style="font-size:14px; font-weight:bold">10</span></div>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-md-4">
                    <div class="row">
                        <div class = "col-4 d-flex flex-wrap align-items-center">
                            <img class="img-fluid" src="../../../images/total_exercise_weight_done1.png">
                        </div>
                        <div class = "col-8 px-0 py-2">
                            <div>Weight Lifted</div>
                            <div>   <span style="font-size:14px; font-weight:bold">5125  lbs</span></div>
                        </div>
                    </div>
                </div>
            </div>
                    </div>

        <div class="edit-summary" style="color: #4D4F53; height: 54px; display: none; margin-top:10px;">
            <form name="edit-summary">
                <div style="display: inline-block; width: 40%; margin-left:20px">
                    <div style="display: inline-block; width: 40%;">
                        <strong style="color: #444444;">Start : </strong>
                    </div style="display: inline-block;"><div style="display: inline-block; width: 40%; margin-left:32px;">
                        <input type="text" placeholder="00" class="hourinput timeinput" name="starthour" maxlength="2"
                               value="12" style="width: 30px;"/> :
                        <input type="text" placeholder="00" class="mininput timeinput" name="startmin" maxlength="2"
                               value="04" style="width: 30px;"/>
                    </div>
                </div><div style="display: inline-block; width: 40%; margin-left:20px">
                    <div style="display: inline-block; width: 30%;">
                        <strong style="color: #444444;">End : </strong>
                    </div><div style="display: inline-block; width: 40%; margin-left:32px;">
                        <input type="text" placeholder="23" class="hourinput timeinput" name="endhour" maxlength="2"
                               value="13" style="width: 30px;"/> :
                        <input type="text" placeholder="59" class="mininput timeinput" name="endmin" maxlength="2"
                               value="44" style="width: 30px;"/>
                    </div>
                </div>
                <div style="padding: 5px;"></div>
                <div style="display: inline-block; width: 40%; margin-left:20px">
                    <div style="display: inline-block; width: 50%;">
                        <strong style="color: #444444;">Workout Length :</strong>
                    </div><div style="display: inline-block; width: 40%; margin-left:10px;">
                        <input type="text" placeholder="hour" class="hourinput timeinput" name="workouthour" maxlength="2"
                               value="00" style="width: 30px;"/> :
                        <input type="text" placeholder="min" class="mininput timeinput" name="workoutmin" maxlength="2"
                               value="28" style="width: 30px;"/>
                    </div>
                </div><div style="display: inline-block; width: 40%; margin-left:20px;">
                    <div style="display: inline-block; width: 40%;">
                        <strong style="color: #444444;">Rest Length : </strong>
                    </div><div style="display: inline-block; width: 40%; margin-left:10px;">
                        <input type="text" placeholder="hour" class="hourinput timeinput" name="resthour" maxlength="2"
                               value="00" style="width: 30px;"/> :
                        <input type="text" placeholder="min" class="mininput timeinput" name="restmin" maxlength="2"
                               value="18" style="width: 30px;"/>
                    </div>
                </div>
            </form>
        </div>
        <div style="margin-top: 20px; margin-bottom: 50px;">
<!--DO NOT BREAK THE SERIES OF DIVS INTO DIFFERENT LINES!-->
    <div style="border-bottom:1px solid #d4d4d4; padding-bottom:5px; margin-top:30px;">
        <strong style="font-size:13px; color:#4d4f53; margin-left:5px">Workout Logs</strong>
    </div>
    <div style="color:#909090; background-color:#F5F5F5; margin-left:5px">
        <div style="width: 35%; display: inline-block; font-weight: bold">&nbsp;Exercise Name</div
            ><div style="width: 15%; display: inline-block; font-weight: bold">1RM</div
            ><div style="width: 30%; display: inline-block; font-weight: bold">Lifting Logs</div
            ><div style="width: 20%; display: inline-block; font-weight: bold"></div>
    </div>

    <div id="logList1" class="allLogLists" style="min-height: 20px; color: #666; padding-left: 2px;">
        <input type="hidden" name="sessionid" value="180"/>
        <div class="exercise-block">
            <div class="log-input-layout" style="border: solid 1px #dddddd; border-radius: 10px; position: absolute; width: 555px; z-index: 999; background-color: #ffffff; display: none;">
    <div style="text-align: center; font-weight: bold; color: #4d4d4d;">Push Up</div>
    <div style="padding: 10px;">
        <div style="display: inline-block; width: 40%;">                <img src="../../../images/exercises/800_600/188.jpg" width="200" height="150"/>        </div><div style="display: inline-block; width: 60%; vertical-align: top;">
            <form>
                <input type="hidden" name="logid" value="1064"/>
                <input type="hidden" name="exerciseid" value="47"/>
                <input type="hidden" name="belongsys" value="1"/>
                <input type="hidden" name="ename" value="Push Up"/>
                <input type="hidden" name="recordtype" value="1"/>
                <input type="hidden" name="date" value="2020-07-24"/>
            <div style="display: inline-block;">
                <ul class="logsetlist">                        <li style="margin-bottom: 5px;"><span>Set 1 : </span>
                            <input class="inputlog" type="text" size="3" maxlength="6" name="rep" value="15"/> Reps
                        </li>                </ul>
                <div style="display: block; text-align: center; margin-top: 15px; ">
                    <button type="button" class="update-log-button">Update Log</button>
                </div>
            </div>            <div style="display: inline-block; vertical-align: top; margin-left: 10px;">
                <div class="plus-minus-set plus" style="vertical-align: top;">+
                </div>
                <div class="plus-minus-set minus" style="vertical-align: top; margin-top: 15px;">&minus;
                </div>
            </div>            </form>
        </div>
    </div>
</div>
            <div id="log1064" class="fixedLogBar">
                <input type="hidden" name="logrowid" value="4830909064"/>
                <input type="hidden" name="logId" value="1064"/>
                <input type="hidden" name="bs" value="1"/>
                <input type="hidden" name="eid" value="47"/>
                <input type="hidden" name="myrecord" value="15"/>

                <div class="fixedLogBarBlock align-top" style="width: 15%;">                    <img class="img-fluid" src="../../../images/exercises/50_50/188.jpg"/>                </div>

                <div class="fixedLogBarBlock align-top" style="width: 20%;">
                    <a href="https://www.jefit.com/my-jefit/chart/?type=2&amp;id=47&amp;bs=1">
                        Push Up                    </a>
                </div>


                <div class="fixedLogBarBlock align-top" style="width: 15%;">15                </div>

                <div class="fixedLogBarBlock align-top" style="width: 30%;">Set 1 : 15 Lap/Rep<br/>                </div>

                <div class="fixedLogBarBlock logAction" style="width: 20%; vertical-align: top; text-align: right; display: none;">
                    <div class="edit-button" style="display: inline-block;">
                        <img src="../../../images/edit_icon.png" style="height: 20px; width: 20px; position: relative; top: 7px;"/>
                    </div><span style="font-size: 15px; position: relative; top: 4px; color: #cccccc; font-weight: lighter">|</span>
                    <div class="circle-delete-button" style="display: inline-block; margin-top: 5px; margin-right: 5px;">
                        <div>&times;</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="exercise-block">
            <div class="log-input-layout" style="border: solid 1px #dddddd; border-radius: 10px; position: absolute; width: 555px; z-index: 999; background-color: #ffffff; display: none;">
    <div style="text-align: center; font-weight: bold; color: #4d4d4d;">Dumbbell Bench Press</div>
    <div style="padding: 10px;">
        <div style="display: inline-block; width: 40%;">                <img src="../../../images/exercises/800_600/104.jpg" width="200" height="150"/>        </div><div style="display: inline-block; width: 60%; vertical-align: top;">
            <form>
                <input type="hidden" name="logid" value="1065"/>
                <input type="hidden" name="exerciseid" value="26"/>
                <input type="hidden" name="belongsys" value="1"/>
                <input type="hidden" name="ename" value="Dumbbell Bench Press"/>
                <input type="hidden" name="recordtype" value="0"/>
                <input type="hidden" name="date" value="2020-07-24"/>
            <div style="display: inline-block;">
                <ul class="logsetlist">                        <li style="margin-bottom: 5px;"><span>Set 1 : </span>
                            <input class="inputlog decimal" type="text" size="3" maxlength="6" name="weight"
                                   value="20"/> lbs                            <input class="inputlog" type="text" size="3" maxlength="6" name="rep"
                                   value="15"/> Reps
                        </li>                        <li style="margin-bottom: 5px;"><span>Set 2 : </span>
                            <input class="inputlog decimal" type="text" size="3" maxlength="6" name="weight"
                                   value="20"/> lbs                            <input class="inputlog" type="text" size="3" maxlength="6" name="rep"
                                   value="15"/> Reps
                        </li>                        <li style="margin-bottom: 5px;"><span>Set 3 : </span>
                            <input class="inputlog decimal" type="text" size="3" maxlength="6" name="weight"
                                   value="20"/> lbs                            <input class="inputlog" type="text" size="3" maxlength="6" name="rep"
                                   value="13"/> Reps
                        </li>                        <li style="margin-bottom: 5px;"><span>Set 4 : </span>
                            <input class="inputlog decimal" type="text" size="3" maxlength="6" name="weight"
                                   value="15"/> lbs                            <input class="inputlog" type="text" size="3" maxlength="6" name="rep"
                                   value="9"/> Reps
                        </li>                </ul>
                <div style="display: block; text-align: center; margin-top: 15px; ">
                    <button type="button" class="update-log-button">Update Log</button>
                </div>
            </div>            <div style="display: inline-block; vertical-align: top; margin-left: 10px;">
                <div class="plus-minus-set plus" style="vertical-align: top;">+
                </div>
                <div class="plus-minus-set minus" style="vertical-align: top; margin-top: 15px;">&minus;
                </div>
            </div>            </form>
        </div>
    </div>
</div>
            <div id="log1065" class="fixedLogBar">
                <input type="hidden" name="logrowid" value="4830929600"/>
                <input type="hidden" name="logId" value="1065"/>
                <input type="hidden" name="bs" value="1"/>
                <input type="hidden" name="eid" value="26"/>
                <input type="hidden" name="myrecord" value="30"/>

                <div class="fixedLogBarBlock align-top" style="width: 15%;">                    <img class="img-fluid" src="../../../images/exercises/50_50/104.jpg"/>                </div>

                <div class="fixedLogBarBlock align-top" style="width: 20%;">
                    <a href="https://www.jefit.com/my-jefit/chart/?type=2&amp;id=26&amp;bs=1">
                        Dumbbell Bench Press                    </a>
                </div>


                <div class="fixedLogBarBlock align-top" style="width: 15%;">30                </div>

                <div class="fixedLogBarBlock align-top" style="width: 30%;">Set 1 : 20x15<br/>Set 2 : 20x15<br/>Set 3 : 20x13<br/>Set 4 : 15x9<br/>                </div>

                <div class="fixedLogBarBlock logAction" style="width: 20%; vertical-align: top; text-align: right; display: none;">
                    <div class="edit-button" style="display: inline-block;">
                        <img src="../../../images/edit_icon.png" style="height: 20px; width: 20px; position: relative; top: 7px;"/>
                    </div><span style="font-size: 15px; position: relative; top: 4px; color: #cccccc; font-weight: lighter">|</span>
                    <div class="circle-delete-button" style="display: inline-block; margin-top: 5px; margin-right: 5px;">
                        <div>&times;</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="exercise-block">
            <div class="log-input-layout" style="border: solid 1px #dddddd; border-radius: 10px; position: absolute; width: 555px; z-index: 999; background-color: #ffffff; display: none;">
    <div style="text-align: center; font-weight: bold; color: #4d4d4d;">Machine Inner Chest Press</div>
    <div style="padding: 10px;">
        <div style="display: inline-block; width: 40%;">                <img src="../../../images/exercises/800_600/5080.jpg" width="200" height="150"/>        </div><div style="display: inline-block; width: 60%; vertical-align: top;">
            <form>
                <input type="hidden" name="logid" value="1066"/>
                <input type="hidden" name="exerciseid" value="1270"/>
                <input type="hidden" name="belongsys" value="1"/>
                <input type="hidden" name="ename" value="Machine Inner Chest Press"/>
                <input type="hidden" name="recordtype" value="0"/>
                <input type="hidden" name="date" value="2020-07-24"/>
            <div style="display: inline-block;">
                <ul class="logsetlist">                        <li style="margin-bottom: 5px;"><span>Set 1 : </span>
                            <input class="inputlog decimal" type="text" size="3" maxlength="6" name="weight"
                                   value="30"/> lbs                            <input class="inputlog" type="text" size="3" maxlength="6" name="rep"
                                   value="9"/> Reps
                        </li>                        <li style="margin-bottom: 5px;"><span>Set 2 : </span>
                            <input class="inputlog decimal" type="text" size="3" maxlength="6" name="weight"
                                   value="20"/> lbs                            <input class="inputlog" type="text" size="3" maxlength="6" name="rep"
                                   value="12"/> Reps
                        </li>                </ul>
                <div style="display: block; text-align: center; margin-top: 15px; ">
                    <button type="button" class="update-log-button">Update Log</button>
                </div>
            </div>            <div style="display: inline-block; vertical-align: top; margin-left: 10px;">
                <div class="plus-minus-set plus" style="vertical-align: top;">+
                </div>
                <div class="plus-minus-set minus" style="vertical-align: top; margin-top: 15px;">&minus;
                </div>
            </div>            </form>
        </div>
    </div>
</div>
            <div id="log1066" class="fixedLogBar">
                <input type="hidden" name="logrowid" value="4831031024"/>
                <input type="hidden" name="logId" value="1066"/>
                <input type="hidden" name="bs" value="1"/>
                <input type="hidden" name="eid" value="1270"/>
                <input type="hidden" name="myrecord" value="39"/>

                <div class="fixedLogBarBlock align-top" style="width: 15%;">                    <img class="img-fluid" src="../../../images/exercises/50_50/5080.jpg"/>                </div>

                <div class="fixedLogBarBlock align-top" style="width: 20%;">
                    <a href="https://www.jefit.com/my-jefit/chart/?type=2&amp;id=1270&amp;bs=1">
                        Machine Inner Chest Press                    </a>
                </div>


                <div class="fixedLogBarBlock align-top" style="width: 15%;">39                </div>

                <div class="fixedLogBarBlock align-top" style="width: 30%;">Set 1 : 30x9<br/>Set 2 : 20x12<br/>                </div>

                <div class="fixedLogBarBlock logAction" style="width: 20%; vertical-align: top; text-align: right; display: none;">
                    <div class="edit-button" style="display: inline-block;">
                        <img src="../../../images/edit_icon.png" style="height: 20px; width: 20px; position: relative; top: 7px;"/>
                    </div><span style="font-size: 15px; position: relative; top: 4px; color: #cccccc; font-weight: lighter">|</span>
                    <div class="circle-delete-button" style="display: inline-block; margin-top: 5px; margin-right: 5px;">
                        <div>&times;</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="exercise-block">
            <div class="log-input-layout" style="border: solid 1px #dddddd; border-radius: 10px; position: absolute; width: 555px; z-index: 999; background-color: #ffffff; display: none;">
    <div style="text-align: center; font-weight: bold; color: #4d4d4d;">Dumbbell Shoulder Press</div>
    <div style="padding: 10px;">
        <div style="display: inline-block; width: 40%;">                <img src="../../../images/exercises/800_600/192.jpg" width="200" height="150"/>        </div><div style="display: inline-block; width: 60%; vertical-align: top;">
            <form>
                <input type="hidden" name="logid" value="1067"/>
                <input type="hidden" name="exerciseid" value="48"/>
                <input type="hidden" name="belongsys" value="1"/>
                <input type="hidden" name="ename" value="Dumbbell Shoulder Press"/>
                <input type="hidden" name="recordtype" value="0"/>
                <input type="hidden" name="date" value="2020-07-24"/>
            <div style="display: inline-block;">
                <ul class="logsetlist">                        <li style="margin-bottom: 5px;"><span>Set 1 : </span>
                            <input class="inputlog decimal" type="text" size="3" maxlength="6" name="weight"
                                   value="15"/> lbs                            <input class="inputlog" type="text" size="3" maxlength="6" name="rep"
                                   value="12"/> Reps
                        </li>                        <li style="margin-bottom: 5px;"><span>Set 2 : </span>
                            <input class="inputlog decimal" type="text" size="3" maxlength="6" name="weight"
                                   value="15"/> lbs                            <input class="inputlog" type="text" size="3" maxlength="6" name="rep"
                                   value="12"/> Reps
                        </li>                        <li style="margin-bottom: 5px;"><span>Set 3 : </span>
                            <input class="inputlog decimal" type="text" size="3" maxlength="6" name="weight"
                                   value="15"/> lbs                            <input class="inputlog" type="text" size="3" maxlength="6" name="rep"
                                   value="12"/> Reps
                        </li>                        <li style="margin-bottom: 5px;"><span>Set 4 : </span>
                            <input class="inputlog decimal" type="text" size="3" maxlength="6" name="weight"
                                   value="15"/> lbs                            <input class="inputlog" type="text" size="3" maxlength="6" name="rep"
                                   value="12"/> Reps
                        </li>                </ul>
                <div style="display: block; text-align: center; margin-top: 15px; ">
                    <button type="button" class="update-log-button">Update Log</button>
                </div>
            </div>            <div style="display: inline-block; vertical-align: top; margin-left: 10px;">
                <div class="plus-minus-set plus" style="vertical-align: top;">+
                </div>
                <div class="plus-minus-set minus" style="vertical-align: top; margin-top: 15px;">&minus;
                </div>
            </div>            </form>
        </div>
    </div>
</div>
            <div id="log1067" class="fixedLogBar">
                <input type="hidden" name="logrowid" value="4831090643"/>
                <input type="hidden" name="logId" value="1067"/>
                <input type="hidden" name="bs" value="1"/>
                <input type="hidden" name="eid" value="48"/>
                <input type="hidden" name="myrecord" value="21"/>

                <div class="fixedLogBarBlock align-top" style="width: 15%;">                    <img class="img-fluid" src="../../../images/exercises/50_50/192.jpg"/>                </div>

                <div class="fixedLogBarBlock align-top" style="width: 20%;">
                    <a href="https://www.jefit.com/my-jefit/chart/?type=2&amp;id=48&amp;bs=1">
                        Dumbbell Shoulder Press                    </a>
                </div>


                <div class="fixedLogBarBlock align-top" style="width: 15%;">21                </div>

                <div class="fixedLogBarBlock align-top" style="width: 30%;">Set 1 : 15x12<br/>Set 2 : 15x12<br/>Set 3 : 15x12<br/>Set 4 : 15x12<br/>                </div>

                <div class="fixedLogBarBlock logAction" style="width: 20%; vertical-align: top; text-align: right; display: none;">
                    <div class="edit-button" style="display: inline-block;">
                        <img src="../../../images/edit_icon.png" style="height: 20px; width: 20px; position: relative; top: 7px;"/>
                    </div><span style="font-size: 15px; position: relative; top: 4px; color: #cccccc; font-weight: lighter">|</span>
                    <div class="circle-delete-button" style="display: inline-block; margin-top: 5px; margin-right: 5px;">
                        <div>&times;</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="exercise-block">
            <div class="log-input-layout" style="border: solid 1px #dddddd; border-radius: 10px; position: absolute; width: 555px; z-index: 999; background-color: #ffffff; display: none;">
    <div style="text-align: center; font-weight: bold; color: #4d4d4d;">Dumbbell Lying Rear Delt Raise</div>
    <div style="padding: 10px;">
        <div style="display: inline-block; width: 40%;">                <img src="../../../images/exercises/800_600/136.jpg" width="200" height="150"/>        </div><div style="display: inline-block; width: 60%; vertical-align: top;">
            <form>
                <input type="hidden" name="logid" value="1068"/>
                <input type="hidden" name="exerciseid" value="427"/>
                <input type="hidden" name="belongsys" value="1"/>
                <input type="hidden" name="ename" value="Dumbbell Lying Rear Delt Raise"/>
                <input type="hidden" name="recordtype" value="0"/>
                <input type="hidden" name="date" value="2020-07-24"/>
            <div style="display: inline-block;">
                <ul class="logsetlist">                        <li style="margin-bottom: 5px;"><span>Set 1 : </span>
                            <input class="inputlog decimal" type="text" size="3" maxlength="6" name="weight"
                                   value="5"/> lbs                            <input class="inputlog" type="text" size="3" maxlength="6" name="rep"
                                   value="20"/> Reps
                        </li>                        <li style="margin-bottom: 5px;"><span>Set 2 : </span>
                            <input class="inputlog decimal" type="text" size="3" maxlength="6" name="weight"
                                   value="5"/> lbs                            <input class="inputlog" type="text" size="3" maxlength="6" name="rep"
                                   value="20"/> Reps
                        </li>                        <li style="margin-bottom: 5px;"><span>Set 3 : </span>
                            <input class="inputlog decimal" type="text" size="3" maxlength="6" name="weight"
                                   value="5"/> lbs                            <input class="inputlog" type="text" size="3" maxlength="6" name="rep"
                                   value="20"/> Reps
                        </li>                </ul>
                <div style="display: block; text-align: center; margin-top: 15px; ">
                    <button type="button" class="update-log-button">Update Log</button>
                </div>
            </div>            <div style="display: inline-block; vertical-align: top; margin-left: 10px;">
                <div class="plus-minus-set plus" style="vertical-align: top;">+
                </div>
                <div class="plus-minus-set minus" style="vertical-align: top; margin-top: 15px;">&minus;
                </div>
            </div>            </form>
        </div>
    </div>
</div>
            <div id="log1068" class="fixedLogBar">
                <input type="hidden" name="logrowid" value="4831264013"/>
                <input type="hidden" name="logId" value="1068"/>
                <input type="hidden" name="bs" value="1"/>
                <input type="hidden" name="eid" value="427"/>
                <input type="hidden" name="myrecord" value="8.33"/>

                <div class="fixedLogBarBlock align-top" style="width: 15%;">                    <img class="img-fluid" src="../../../images/exercises/50_50/136.jpg"/>                </div>

                <div class="fixedLogBarBlock align-top" style="width: 20%;">
                    <a href="https://www.jefit.com/my-jefit/chart/?type=2&amp;id=427&amp;bs=1">
                        Dumbbell Lying Rear Delt Raise                    </a>
                </div>


                <div class="fixedLogBarBlock align-top" style="width: 15%;">8.33                </div>

                <div class="fixedLogBarBlock align-top" style="width: 30%;">Set 1 : 5x20<br/>Set 2 : 5x20<br/>Set 3 : 5x20<br/>                </div>

                <div class="fixedLogBarBlock logAction" style="width: 20%; vertical-align: top; text-align: right; display: none;">
                    <div class="edit-button" style="display: inline-block;">
                        <img src="../../../images/edit_icon.png" style="height: 20px; width: 20px; position: relative; top: 7px;"/>
                    </div><span style="font-size: 15px; position: relative; top: 4px; color: #cccccc; font-weight: lighter">|</span>
                    <div class="circle-delete-button" style="display: inline-block; margin-top: 5px; margin-right: 5px;">
                        <div>&times;</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="exercise-block">
            <div class="log-input-layout" style="border: solid 1px #dddddd; border-radius: 10px; position: absolute; width: 555px; z-index: 999; background-color: #ffffff; display: none;">
    <div style="text-align: center; font-weight: bold; color: #4d4d4d;">Light Band Face Pull</div>
    <div style="padding: 10px;">
        <div style="display: inline-block; width: 40%;">                <img src="../../../images/exercises/b6.jpg" width="200" height="200"/>        </div><div style="display: inline-block; width: 60%; vertical-align: top;">
            <form>
                <input type="hidden" name="logid" value="1069"/>
                <input type="hidden" name="exerciseid" value="50"/>
                <input type="hidden" name="belongsys" value="0"/>
                <input type="hidden" name="ename" value="Light Band Face Pull"/>
                <input type="hidden" name="recordtype" value="1"/>
                <input type="hidden" name="date" value="2020-07-24"/>
            <div style="display: inline-block;">
                <ul class="logsetlist">                        <li style="margin-bottom: 5px;"><span>Set 1 : </span>
                            <input class="inputlog" type="text" size="3" maxlength="6" name="rep" value="20"/> Reps
                        </li>                        <li style="margin-bottom: 5px;"><span>Set 2 : </span>
                            <input class="inputlog" type="text" size="3" maxlength="6" name="rep" value="20"/> Reps
                        </li>                        <li style="margin-bottom: 5px;"><span>Set 3 : </span>
                            <input class="inputlog" type="text" size="3" maxlength="6" name="rep" value="20"/> Reps
                        </li>                </ul>
                <div style="display: block; text-align: center; margin-top: 15px; ">
                    <button type="button" class="update-log-button">Update Log</button>
                </div>
            </div>            <div style="display: inline-block; vertical-align: top; margin-left: 10px;">
                <div class="plus-minus-set plus" style="vertical-align: top;">+
                </div>
                <div class="plus-minus-set minus" style="vertical-align: top; margin-top: 15px;">&minus;
                </div>
            </div>            </form>
        </div>
    </div>
</div>
            <div id="log1069" class="fixedLogBar">
                <input type="hidden" name="logrowid" value="4831264110"/>
                <input type="hidden" name="logId" value="1069"/>
                <input type="hidden" name="bs" value="0"/>
                <input type="hidden" name="eid" value="50"/>
                <input type="hidden" name="myrecord" value="20"/>

                <div class="fixedLogBarBlock align-top" style="width: 15%;">                    <img class="img-fluid" src="../../../images/bodyparts/6.png"/>                </div>

                <div class="fixedLogBarBlock align-top" style="width: 20%;">
                    <a href="https://www.jefit.com/my-jefit/chart/?type=2&amp;id=50&amp;bs=0">
                        Light Band Face Pull                    </a>
                </div>


                <div class="fixedLogBarBlock align-top" style="width: 15%;">20                </div>

                <div class="fixedLogBarBlock align-top" style="width: 30%;">Set 1 : 20 Lap/Rep<br/>Set 2 : 20 Lap/Rep<br/>Set 3 : 20 Lap/Rep<br/>                </div>

                <div class="fixedLogBarBlock logAction" style="width: 20%; vertical-align: top; text-align: right; display: none;">
                    <div class="edit-button" style="display: inline-block;">
                        <img src="../../../images/edit_icon.png" style="height: 20px; width: 20px; position: relative; top: 7px;"/>
                    </div><span style="font-size: 15px; position: relative; top: 4px; color: #cccccc; font-weight: lighter">|</span>
                    <div class="circle-delete-button" style="display: inline-block; margin-top: 5px; margin-right: 5px;">
                        <div>&times;</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="exercise-block">
            <div class="log-input-layout" style="border: solid 1px #dddddd; border-radius: 10px; position: absolute; width: 555px; z-index: 999; background-color: #ffffff; display: none;">
    <div style="text-align: center; font-weight: bold; color: #4d4d4d;">Dumbbell One Arm Shoulder Press</div>
    <div style="padding: 10px;">
        <div style="display: inline-block; width: 40%;">                <img src="../../../images/exercises/800_600/140.jpg" width="200" height="150"/>        </div><div style="display: inline-block; width: 60%; vertical-align: top;">
            <form>
                <input type="hidden" name="logid" value="1070"/>
                <input type="hidden" name="exerciseid" value="35"/>
                <input type="hidden" name="belongsys" value="1"/>
                <input type="hidden" name="ename" value="Dumbbell One Arm Shoulder Press"/>
                <input type="hidden" name="recordtype" value="0"/>
                <input type="hidden" name="date" value="2020-07-24"/>
            <div style="display: inline-block;">
                <ul class="logsetlist">                        <li style="margin-bottom: 5px;"><span>Set 1 : </span>
                            <input class="inputlog decimal" type="text" size="3" maxlength="6" name="weight"
                                   value="10"/> lbs                            <input class="inputlog" type="text" size="3" maxlength="6" name="rep"
                                   value="15"/> Reps
                        </li>                </ul>
                <div style="display: block; text-align: center; margin-top: 15px; ">
                    <button type="button" class="update-log-button">Update Log</button>
                </div>
            </div>            <div style="display: inline-block; vertical-align: top; margin-left: 10px;">
                <div class="plus-minus-set plus" style="vertical-align: top;">+
                </div>
                <div class="plus-minus-set minus" style="vertical-align: top; margin-top: 15px;">&minus;
                </div>
            </div>            </form>
        </div>
    </div>
</div>
            <div id="log1070" class="fixedLogBar">
                <input type="hidden" name="logrowid" value="4831292416"/>
                <input type="hidden" name="logId" value="1070"/>
                <input type="hidden" name="bs" value="1"/>
                <input type="hidden" name="eid" value="35"/>
                <input type="hidden" name="myrecord" value="15"/>

                <div class="fixedLogBarBlock align-top" style="width: 15%;">                    <img class="img-fluid" src="../../../images/exercises/50_50/140.jpg"/>                </div>

                <div class="fixedLogBarBlock align-top" style="width: 20%;">
                    <a href="https://www.jefit.com/my-jefit/chart/?type=2&amp;id=35&amp;bs=1">
                        Dumbbell One Arm Shoulder Press                    </a>
                </div>


                <div class="fixedLogBarBlock align-top" style="width: 15%;">15                </div>

                <div class="fixedLogBarBlock align-top" style="width: 30%;">Set 1 : 10x15<br/>                </div>

                <div class="fixedLogBarBlock logAction" style="width: 20%; vertical-align: top; text-align: right; display: none;">
                    <div class="edit-button" style="display: inline-block;">
                        <img src="../../../images/edit_icon.png" style="height: 20px; width: 20px; position: relative; top: 7px;"/>
                    </div><span style="font-size: 15px; position: relative; top: 4px; color: #cccccc; font-weight: lighter">|</span>
                    <div class="circle-delete-button" style="display: inline-block; margin-top: 5px; margin-right: 5px;">
                        <div>&times;</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="exercise-block">
            <div class="log-input-layout" style="border: solid 1px #dddddd; border-radius: 10px; position: absolute; width: 555px; z-index: 999; background-color: #ffffff; display: none;">
    <div style="text-align: center; font-weight: bold; color: #4d4d4d;">Band Hip Thrust</div>
    <div style="padding: 10px;">
        <div style="display: inline-block; width: 40%;">                <img src="../../../images/exercises/b5.jpg" width="200" height="200"/>        </div><div style="display: inline-block; width: 60%; vertical-align: top;">
            <form>
                <input type="hidden" name="logid" value="1071"/>
                <input type="hidden" name="exerciseid" value="139"/>
                <input type="hidden" name="belongsys" value="0"/>
                <input type="hidden" name="ename" value="Band Hip Thrust"/>
                <input type="hidden" name="recordtype" value="1"/>
                <input type="hidden" name="date" value="2020-07-24"/>
            <div style="display: inline-block;">
                <ul class="logsetlist">                        <li style="margin-bottom: 5px;"><span>Set 1 : </span>
                            <input class="inputlog" type="text" size="3" maxlength="6" name="rep" value="25"/> Reps
                        </li>                        <li style="margin-bottom: 5px;"><span>Set 2 : </span>
                            <input class="inputlog" type="text" size="3" maxlength="6" name="rep" value="25"/> Reps
                        </li>                        <li style="margin-bottom: 5px;"><span>Set 3 : </span>
                            <input class="inputlog" type="text" size="3" maxlength="6" name="rep" value="25"/> Reps
                        </li>                        <li style="margin-bottom: 5px;"><span>Set 4 : </span>
                            <input class="inputlog" type="text" size="3" maxlength="6" name="rep" value="25"/> Reps
                        </li>                        <li style="margin-bottom: 5px;"><span>Set 5 : </span>
                            <input class="inputlog" type="text" size="3" maxlength="6" name="rep" value="25"/> Reps
                        </li>                </ul>
                <div style="display: block; text-align: center; margin-top: 15px; ">
                    <button type="button" class="update-log-button">Update Log</button>
                </div>
            </div>            <div style="display: inline-block; vertical-align: top; margin-left: 10px;">
                <div class="plus-minus-set plus" style="vertical-align: top;">+
                </div>
                <div class="plus-minus-set minus" style="vertical-align: top; margin-top: 15px;">&minus;
                </div>
            </div>            </form>
        </div>
    </div>
</div>
            <div id="log1071" class="fixedLogBar">
                <input type="hidden" name="logrowid" value="4831352121"/>
                <input type="hidden" name="logId" value="1071"/>
                <input type="hidden" name="bs" value="0"/>
                <input type="hidden" name="eid" value="139"/>
                <input type="hidden" name="myrecord" value="25"/>

                <div class="fixedLogBarBlock align-top" style="width: 15%;">                    <img class="img-fluid" src="../../../images/bodyparts/5.png"/>                </div>

                <div class="fixedLogBarBlock align-top" style="width: 20%;">
                    <a href="https://www.jefit.com/my-jefit/chart/?type=2&amp;id=139&amp;bs=0">
                        Band Hip Thrust                    </a>
                </div>


                <div class="fixedLogBarBlock align-top" style="width: 15%;">25                </div>

                <div class="fixedLogBarBlock align-top" style="width: 30%;">Set 1 : 25 Lap/Rep<br/>Set 2 : 25 Lap/Rep<br/>Set 3 : 25 Lap/Rep<br/>Set 4 : 25 Lap/Rep<br/>Set 5 : 25 Lap/Rep<br/>                </div>

                <div class="fixedLogBarBlock logAction" style="width: 20%; vertical-align: top; text-align: right; display: none;">
                    <div class="edit-button" style="display: inline-block;">
                        <img src="../../../images/edit_icon.png" style="height: 20px; width: 20px; position: relative; top: 7px;"/>
                    </div><span style="font-size: 15px; position: relative; top: 4px; color: #cccccc; font-weight: lighter">|</span>
                    <div class="circle-delete-button" style="display: inline-block; margin-top: 5px; margin-right: 5px;">
                        <div>&times;</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="exercise-block">
            <div class="log-input-layout" style="border: solid 1px #dddddd; border-radius: 10px; position: absolute; width: 555px; z-index: 999; background-color: #ffffff; display: none;">
    <div style="text-align: center; font-weight: bold; color: #4d4d4d;">Band Hip Abduction</div>
    <div style="padding: 10px;">
        <div style="display: inline-block; width: 40%;">                <img src="../../../images/exercises/b5.jpg" width="200" height="200"/>        </div><div style="display: inline-block; width: 60%; vertical-align: top;">
            <form>
                <input type="hidden" name="logid" value="1072"/>
                <input type="hidden" name="exerciseid" value="122"/>
                <input type="hidden" name="belongsys" value="0"/>
                <input type="hidden" name="ename" value="Band Hip Abduction"/>
                <input type="hidden" name="recordtype" value="4"/>
                <input type="hidden" name="date" value="2020-07-24"/>
            <div style="display: inline-block;">
                <ul class="logsetlist">                        <li style="margin-bottom: 5px;"><span>Set 1 : </span>
                            <input class="inputlog" type="text" size="3" maxlength="6" name="rep"
                                   value="8"/> Lap(s)/Rep(s)
                            <input class="inputlog" type="text" size="1" maxlength="2" name="hour"
                                   value="00"/> :
                            <input class="inputlog" type="text" size="1" maxlength="2" name="min"
                                   value="00"/> :
                            <input class="inputlog" type="text" size="1" maxlength="2" name="sec"
                                   value="25"/>
                        </li>                        <li style="margin-bottom: 5px;"><span>Set 2 : </span>
                            <input class="inputlog" type="text" size="3" maxlength="6" name="rep"
                                   value="8"/> Lap(s)/Rep(s)
                            <input class="inputlog" type="text" size="1" maxlength="2" name="hour"
                                   value="00"/> :
                            <input class="inputlog" type="text" size="1" maxlength="2" name="min"
                                   value="00"/> :
                            <input class="inputlog" type="text" size="1" maxlength="2" name="sec"
                                   value="25"/>
                        </li>                </ul>
                <div style="display: block; text-align: center; margin-top: 15px; ">
                    <button type="button" class="update-log-button">Update Log</button>
                </div>
            </div>            <div style="display: inline-block; vertical-align: top; margin-left: 10px;">
                <div class="plus-minus-set plus" style="vertical-align: top;">+
                </div>
                <div class="plus-minus-set minus" style="vertical-align: top; margin-top: 15px;">&minus;
                </div>
            </div>            </form>
        </div>
    </div>
</div>
            <div id="log1072" class="fixedLogBar">
                <input type="hidden" name="logrowid" value="4831468924"/>
                <input type="hidden" name="logId" value="1072"/>
                <input type="hidden" name="bs" value="0"/>
                <input type="hidden" name="eid" value="122"/>
                <input type="hidden" name="myrecord" value="0"/>

                <div class="fixedLogBarBlock align-top" style="width: 15%;">                    <img class="img-fluid" src="../../../images/bodyparts/5.png"/>                </div>

                <div class="fixedLogBarBlock align-top" style="width: 20%;">
                    <a href="https://www.jefit.com/my-jefit/chart/?type=2&amp;id=122&amp;bs=0">
                        Band Hip Abduction                    </a>
                </div>


                <div class="fixedLogBarBlock align-top" style="width: 15%;">N/A                </div>

                <div class="fixedLogBarBlock align-top" style="width: 30%;">Set 1: 8 Lap/Rep<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;00:00:25<br/>Set 2: 8 Lap/Rep<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;00:00:25<br/>                </div>

                <div class="fixedLogBarBlock logAction" style="width: 20%; vertical-align: top; text-align: right; display: none;">
                    <div class="edit-button" style="display: inline-block;">
                        <img src="../../../images/edit_icon.png" style="height: 20px; width: 20px; position: relative; top: 7px;"/>
                    </div><span style="font-size: 15px; position: relative; top: 4px; color: #cccccc; font-weight: lighter">|</span>
                    <div class="circle-delete-button" style="display: inline-block; margin-top: 5px; margin-right: 5px;">
                        <div>&times;</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="exercise-block">
            <div class="log-input-layout" style="border: solid 1px #dddddd; border-radius: 10px; position: absolute; width: 555px; z-index: 999; background-color: #ffffff; display: none;">
    <div style="text-align: center; font-weight: bold; color: #4d4d4d;">Band Skull Crushes</div>
    <div style="padding: 10px;">
        <div style="display: inline-block; width: 40%;">                <img src="../../../images/exercises/b7.jpg" width="200" height="200"/>        </div><div style="display: inline-block; width: 60%; vertical-align: top;">
            <form>
                <input type="hidden" name="logid" value="1073"/>
                <input type="hidden" name="exerciseid" value="140"/>
                <input type="hidden" name="belongsys" value="0"/>
                <input type="hidden" name="ename" value="Band Skull Crushes"/>
                <input type="hidden" name="recordtype" value="1"/>
                <input type="hidden" name="date" value="2020-07-24"/>
            <div style="display: inline-block;">
                <ul class="logsetlist">                        <li style="margin-bottom: 5px;"><span>Set 1 : </span>
                            <input class="inputlog" type="text" size="3" maxlength="6" name="rep" value="15"/> Reps
                        </li>                        <li style="margin-bottom: 5px;"><span>Set 2 : </span>
                            <input class="inputlog" type="text" size="3" maxlength="6" name="rep" value="15"/> Reps
                        </li>                        <li style="margin-bottom: 5px;"><span>Set 3 : </span>
                            <input class="inputlog" type="text" size="3" maxlength="6" name="rep" value="15"/> Reps
                        </li>                </ul>
                <div style="display: block; text-align: center; margin-top: 15px; ">
                    <button type="button" class="update-log-button">Update Log</button>
                </div>
            </div>            <div style="display: inline-block; vertical-align: top; margin-left: 10px;">
                <div class="plus-minus-set plus" style="vertical-align: top;">+
                </div>
                <div class="plus-minus-set minus" style="vertical-align: top; margin-top: 15px;">&minus;
                </div>
            </div>            </form>
        </div>
    </div>
</div>
            <div id="log1073" class="fixedLogBar">
                <input type="hidden" name="logrowid" value="4831548766"/>
                <input type="hidden" name="logId" value="1073"/>
                <input type="hidden" name="bs" value="0"/>
                <input type="hidden" name="eid" value="140"/>
                <input type="hidden" name="myrecord" value="15"/>

                <div class="fixedLogBarBlock align-top" style="width: 15%;">                    <img class="img-fluid" src="../../../images/bodyparts/7.png"/>                </div>

                <div class="fixedLogBarBlock align-top" style="width: 20%;">
                    <a href="https://www.jefit.com/my-jefit/chart/?type=2&amp;id=140&amp;bs=0">
                        Band Skull Crushes                    </a>
                </div>


                <div class="fixedLogBarBlock align-top" style="width: 15%;">15                </div>

                <div class="fixedLogBarBlock align-top" style="width: 30%;">Set 1 : 15 Lap/Rep<br/>Set 2 : 15 Lap/Rep<br/>Set 3 : 15 Lap/Rep<br/>                </div>

                <div class="fixedLogBarBlock logAction" style="width: 20%; vertical-align: top; text-align: right; display: none;">
                    <div class="edit-button" style="display: inline-block;">
                        <img src="../../../images/edit_icon.png" style="height: 20px; width: 20px; position: relative; top: 7px;"/>
                    </div><span style="font-size: 15px; position: relative; top: 4px; color: #cccccc; font-weight: lighter">|</span>
                    <div class="circle-delete-button" style="display: inline-block; margin-top: 5px; margin-right: 5px;">
                        <div>&times;</div>
                    </div>
                </div>
            </div>
        </div>    </div>
</div>


    </div>
</div>
    <div style="border-bottom:1px solid #d4d4d4; font-size:16px;padding-top:20px;padding-bottom:5px;">
        <strong style="margin-left:5px; color:#4d4f53;">Notes</strong>
    </div>
    
    <table cellspacing="0" id="hor-minimalist_2">
                    <tr class="">
                <td><strong>Exercise : </strong>Dumbbell Bench Press                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;90s  rest.  </td>
            </tr>

                        <tr class="">
                <td><strong>Exercise : </strong>Dumbbell Bench Press                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;1s up, 3s down</td>
            </tr>

                        <tr class="">
                <td><strong>Exercise : </strong>Machine Inner Chest Press                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;very slow eccentric</td>
            </tr>

                        <tr class="">
                <td><strong>Exercise : </strong>Dumbbell Shoulder Press                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;3s slow eccentric</td>
            </tr>

                        <tr class="">
                <td><strong>Exercise : </strong>Dumbbell One Arm Shoulder Press                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;left arm only</td>
            </tr>

                        <tr class="">
                <td><strong>Exercise : </strong>Band Hip Thrust                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;x-heavy band</td>
            </tr>

                        <tr class="">
                <td><strong>Exercise : </strong>Band Hip Abduction                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;2m rest</td>
            </tr>

                        <tr class="">
                <td><strong>Exercise : </strong>Band Skull Crushes                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;medium band</td>
            </tr>

                        <tr class="">
                <td><strong>Exercise : </strong>Band Skull Crushes                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;1.5 foot length stretch</td>
            </tr>

                </table>
    <div style='padding: 10px;'>        Sorry, you don't have permission to view this section. The account owner allows only his/her friends to view this section. Please
        <a href="http://www.jefit.com/0">add friend</a> first.
    </div>    </div>
    <div class="col-md-3 order-sm-1">
        <div id="leftProfilePicCell" title="Back to home page">
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
    </div>
    <div class="col-md-2 order-sm-3">
        <table cellspacing="0" id="hor-minimalist_2">

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
    </div>
</div>


<footer class="py-4 border-top px-4">
    <div class="row">
        <div class="col-12 col-md px-4 pt-2">
            <img class="mb-2" src="https://www.jefit.com/images/logo_155_40.png" alt="Jefit Workout Tracker" width="80">
            <small class="d-block mb-3 text-muted">Copyright &copy; 2010-2018 Jefit, Inc. All Rights Reserved.</small>
        </div>
        <div class="col-6 col-md px-4 pt-2">
            <h5>Features</h5>
            <ul class="list-unstyled text-small">
                <li><a class="text-muted" href="https://sy95h.app.goo.gl/fQag">Get The App</a></li>
                <li><a class="text-muted" href="https://www.jefit.com/signup/">Sign Up</a></li>
                <li><a class="text-muted" href="https://www.jefit.com/routines">Workout Programs</a></li>
                <li><a class="text-muted" href="https://www.jefit.com/exercises">Exercise Database</a></li>
            </ul>
        </div>
        <div class="col-6 col-md px-4 pt-2">
            <h5>Follow</h5>
            <ul class="list-unstyled text-small">
                <li><a href="https://www.jefit.com/blog/">Blog</a></li>
                <li><a href="https://www.facebook.com/jefitapp/">Facebook</a></li>
                <li><a href="https://twitter.com/JefitInc">Twitter</a></li>
                <li><a href="https://www.instagram.com/jefitapp/">Instagram</a></li>

            </ul>
        </div>
        <div class="col-6 col-md px-4 pt-2">
            <h5>About</h5>
            <ul class="list-unstyled text-small">
                <li><a href="https://www.jefit.com/company/">About Us</a></li>
                <li><a href="mailto:hr@jefit.com&subject=Careers%20at%20Jefit&body=Please%20let%20us%20know%20what%20your%20expertise%20is%20and%20attach%20any%20relevant%20samples%20of%20work%20and%20your%20CV.%20Thanks%21">Careers</a></li>
                <li><a href="https://www.jefit.com/support/">Contact Us</a></li>
                <li><a href="http://support.jefit.com">Help Center</a></li>
                <li><a href="https://www.jefit.com/privacy-policy/">Privacy Policy</a></li>
                <li><a href="https://www.jefit.com/terms-of-use/">Terms of Service</a></li>
                <li><a href="https://www.jefit.com/dmcanotices/">IP/DMCA Notices</a></li>
            </ul>
        </div>
    </div>
</footer>


</div>

<!--Cookie banner-->
<script src="https://www.jefit.com/assets/plugins/cookie-banner/cookiealert-standalone.js"></script>

<!--<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>

<script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam-cell.nr-data.net","licenseKey":"a5e0c8e661","applicationID":"524815282","transactionName":"ZlxTN0pRWUoCUhZeWV8WZBFRH1pcDlMHRUUeTEIGSh1bVgRCTVtZVhZYDVxVTxcTWRI=","queueTime":0,"applicationTime":117,"atts":"ShtQQQJLSkQ=","errorBeacon":"bam-cell.nr-data.net","agent":""}</script></body>
<!-- body closed-->
</html>

`

beforeEach(() => {
  fetch.mockResponse(html)
})

test('should use logs', async () => {
  const { result, waitForValueToChange } = renderHook(() =>
    useLog('test-user', '2020-07-24')
  )

  await waitForValueToChange(() => result.current)

  expect(result.current.data).toEqual(expect.anything())
})

test('should throw username required error', () => {
  const { result } = renderHook(() => useLog())

  expect(result.error).toEqual(Error('username is required'))
})

test('should throw date required error', () => {
  const { result } = renderHook(() => useLog('test-user'))

  expect(result.error).toEqual(Error('date is required'))
})

test('should throw invalid date error', () => {
  const { result } = renderHook(() => useLog('test-user', '200-01-01'))

  expect(result.error).toEqual(Error('date is invalid'))
})
