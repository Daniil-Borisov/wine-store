import Script from 'next/script';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const EnsaladasGourmet = () => {
  return (
    <div>
      <Head>
        <title>
          ▷Las Mejores Conservas Gourmet a tu Domicilio | Gourmet La Vanguardia
        </title>
        <meta
          content="Las mejores conservas para comprar online las encontraras en Gourmet la Vanguardia. Conservas de mar, de tierra, latas de conserva y botes de cristal."
          name="description"
        />
        <meta
          content="▷Las Mejores Conservas Gourmet a tu Domicilio | Gourmet La Vanguardia"
          property="og:title"
        />
        <meta
          content="Las mejores conservas para comprar online las encontraras en Gourmet la Vanguardia. Conservas de mar, de tierra, latas de conserva y botes de cristal."
          property="og:description"
        />
        <meta
          content="▷Las Mejores Conservas Gourmet a tu Domicilio | Gourmet La Vanguardia"
          property="twitter:title"
        />
        <meta
          content="Las mejores conservas para comprar online las encontraras en Gourmet la Vanguardia. Conservas de mar, de tierra, latas de conserva y botes de cristal."
          property="twitter:description"
        />
        <meta property="og:type" content="website" />
      </Head>

      <style jsx>{`
      html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type="button"],input[type="reset"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type='checkbox'],input[type='radio']{box-sizing:border-box;padding:0}input[type='number']::-webkit-inner-spin-button,input[type='number']::-webkit-outer-spin-button{height:auto}input[type='search']{-webkit-appearance:none}input[type='search']::-webkit-search-cancel-button,input[type='search']::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}@font-face{font-family:'webflow-icons';src:url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBiUAAAC8AAAAYGNtYXDpP+a4AAABHAAAAFxnYXNwAAAAEAAAAXgAAAAIZ2x5ZmhS2XEAAAGAAAADHGhlYWQTFw3HAAAEnAAAADZoaGVhCXYFgQAABNQAAAAkaG10eCe4A1oAAAT4AAAAMGxvY2EDtALGAAAFKAAAABptYXhwABAAPgAABUQAAAAgbmFtZSoCsMsAAAVkAAABznBvc3QAAwAAAAAHNAAAACAAAwP4AZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpAwPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAQAAAAAwACAACAAQAAQAg5gPpA//9//8AAAAAACDmAOkA//3//wAB/+MaBBcIAAMAAQAAAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEBIAAAAyADgAAFAAAJAQcJARcDIP5AQAGA/oBAAcABwED+gP6AQAABAOAAAALgA4AABQAAEwEXCQEH4AHAQP6AAYBAAcABwED+gP6AQAAAAwDAAOADQALAAA8AHwAvAAABISIGHQEUFjMhMjY9ATQmByEiBh0BFBYzITI2PQE0JgchIgYdARQWMyEyNj0BNCYDIP3ADRMTDQJADRMTDf3ADRMTDQJADRMTDf3ADRMTDQJADRMTAsATDSANExMNIA0TwBMNIA0TEw0gDRPAEw0gDRMTDSANEwAAAAABAJ0AtAOBApUABQAACQIHCQEDJP7r/upcAXEBcgKU/usBFVz+fAGEAAAAAAL//f+9BAMDwwAEAAkAABcBJwEXAwE3AQdpA5ps/GZsbAOabPxmbEMDmmz8ZmwDmvxmbAOabAAAAgAA/8AEAAPAAB0AOwAABSInLgEnJjU0Nz4BNzYzMTIXHgEXFhUUBw4BBwYjNTI3PgE3NjU0Jy4BJyYjMSIHDgEHBhUUFx4BFxYzAgBqXV6LKCgoKIteXWpqXV6LKCgoKIteXWpVSktvICEhIG9LSlVVSktvICEhIG9LSlVAKCiLXl1qal1eiygoKCiLXl1qal1eiygoZiEgb0tKVVVKS28gISEgb0tKVVVKS28gIQABAAABwAIAA8AAEgAAEzQ3PgE3NjMxFSIHDgEHBhUxIwAoKIteXWpVSktvICFmAcBqXV6LKChmISBvS0pVAAAAAgAA/8AFtgPAADIAOgAAARYXHgEXFhUUBw4BBwYHIxUhIicuAScmNTQ3PgE3NjMxOAExNDc+ATc2MzIXHgEXFhcVATMJATMVMzUEjD83NlAXFxYXTjU1PQL8kz01Nk8XFxcXTzY1PSIjd1BQWlJJSXInJw3+mdv+2/7c25MCUQYcHFg5OUA/ODlXHBwIAhcXTzY1PTw1Nk8XF1tQUHcjIhwcYUNDTgL+3QFt/pOTkwABAAAAAQAAmM7nP18PPPUACwQAAAAAANciZKUAAAAA1yJkpf/9/70FtgPDAAAACAACAAAAAAAAAAEAAAPA/8AAAAW3//3//QW2AAEAAAAAAAAAAAAAAAAAAAAMBAAAAAAAAAAAAAAAAgAAAAQAASAEAADgBAAAwAQAAJ0EAP/9BAAAAAQAAAAFtwAAAAAAAAAKABQAHgAyAEYAjACiAL4BFgE2AY4AAAABAAAADAA8AAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADQAAAAEAAAAAAAIABwCWAAEAAAAAAAMADQBIAAEAAAAAAAQADQCrAAEAAAAAAAUACwAnAAEAAAAAAAYADQBvAAEAAAAAAAoAGgDSAAMAAQQJAAEAGgANAAMAAQQJAAIADgCdAAMAAQQJAAMAGgBVAAMAAQQJAAQAGgC4AAMAAQQJAAUAFgAyAAMAAQQJAAYAGgB8AAMAAQQJAAoANADsd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQByd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format("truetype");font-weight:400;font-style:normal}[class^="w-icon-"],[class*=" w-icon-"]{font-family:'webflow-icons'!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.w-icon-slider-right:before{content:"\e600"}.w-icon-slider-left:before{content:"\e601"}.w-icon-nav-menu:before{content:"\e602"}.w-icon-arrow-down:before,.w-icon-dropdown-toggle:before{content:"\e603"}.w-icon-file-upload-remove:before{content:"\e900"}.w-icon-file-upload-icon:before{content:"\e903"}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}html{height:100%}body{margin:0;min-height:100%;background-color:#fff;font-family:Arial,sans-serif;font-size:14px;line-height:20px;color:#333}img{max-width:100%;vertical-align:middle;display:inline-block}html.w-mod-touch *{background-attachment:scroll!important}.w-block{display:block}.w-inline-block{max-width:100%;display:inline-block}.w-clearfix:before,.w-clearfix:after{content:" ";display:table;grid-column-start:1;grid-row-start:1;grid-column-end:2;grid-row-end:2}.w-clearfix:after{clear:both}.w-hidden{display:none}.w-button{display:inline-block;padding:9px 15px;background-color:#3898EC;color:#fff;border:0;line-height:inherit;text-decoration:none;cursor:pointer;border-radius:0}input.w-button{-webkit-appearance:button}html[data-w-dynpage] [data-w-cloak]{color:transparent!important}.w-webflow-badge,.w-webflow-badge *{position:static;left:auto;top:auto;right:auto;bottom:auto;z-index:auto;display:block;visibility:visible;overflow:visible;overflow-x:visible;overflow-y:visible;box-sizing:border-box;width:auto;height:auto;max-height:none;max-width:none;min-height:0;min-width:0;margin:0;padding:0;float:none;clear:none;border:0 none transparent;border-radius:0;background:none;background-image:none;background-position:0 0;background-size:auto auto;background-repeat:repeat;background-origin:padding-box;background-clip:border-box;background-attachment:scroll;background-color:transparent;box-shadow:none;opacity:1;transform:none;transition:none;direction:ltr;font-family:inherit;font-weight:inherit;color:inherit;font-size:inherit;line-height:inherit;font-style:inherit;font-variant:inherit;text-align:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:0;text-transform:inherit;list-style-type:disc;text-shadow:none;font-smoothing:auto;vertical-align:baseline;cursor:inherit;white-space:inherit;word-break:normal;word-spacing:normal;word-wrap:normal}.w-webflow-badge{position:fixed!important;display:inline-block!important;visibility:visible!important;z-index:2147483647!important;top:auto!important;right:12px!important;bottom:12px!important;left:auto!important;color:#AAADB0!important;background-color:#fff!important;border-radius:3px!important;padding:6px 8px 6px 6px !important;font-size:12px!important;opacity:1!important;line-height:14px!important;text-decoration:none!important;transform:none!important;margin:0!important;width:auto!important;height:auto!important;overflow:visible!important;white-space:nowrap;box-shadow:0 0 0 1px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.1);cursor:pointer}.w-webflow-badge > img{display:inline-block!important;visibility:visible!important;opacity:1!important;vertical-align:middle!important}h1,h2,h3,h4,h5,h6{font-weight:700;margin-bottom:10px}h1{font-size:38px;line-height:44px;margin-top:20px}h2{font-size:32px;line-height:36px;margin-top:20px}h3{font-size:24px;line-height:30px;margin-top:20px}h4{font-size:18px;line-height:24px;margin-top:10px}h5{font-size:14px;line-height:20px;margin-top:10px}h6{font-size:12px;line-height:18px;margin-top:10px}p{margin-top:0;margin-bottom:10px}blockquote{margin:0 0 10px;padding:10px 20px;border-left:5px solid #E2E2E2;font-size:18px;line-height:22px}figure{margin:0;margin-bottom:10px}figcaption{margin-top:5px;text-align:center}ul,ol{margin-top:0;margin-bottom:10px;padding-left:40px}.w-list-unstyled{padding-left:0;list-style:none}.w-embed:before,.w-embed:after{content:" ";display:table;grid-column-start:1;grid-row-start:1;grid-column-end:2;grid-row-end:2}.w-embed:after{clear:both}.w-video{width:100%;position:relative;padding:0}.w-video iframe,.w-video object,.w-video embed{position:absolute;top:0;left:0;width:100%;height:100%;border:none}fieldset{padding:0;margin:0;border:0}button,[type='button'],[type='reset']{border:0;cursor:pointer;-webkit-appearance:button}.w-form{margin:0 0 15px}.w-form-done{display:none;padding:20px;text-align:center;background-color:#ddd}.w-form-fail{display:none;margin-top:10px;padding:10px;background-color:#ffdede}label{display:block;margin-bottom:5px;font-weight:700}.w-input,.w-select{display:block;width:100%;height:38px;padding:8px 12px;margin-bottom:10px;font-size:14px;line-height:1.42857143;color:#333;vertical-align:middle;background-color:#fff;border:1px solid #ccc}.w-input:-moz-placeholder,.w-select:-moz-placeholder{color:#999}.w-input::-moz-placeholder,.w-select::-moz-placeholder{color:#999;opacity:1}.w-input:-ms-input-placeholder,.w-select:-ms-input-placeholder{color:#999}.w-input::-webkit-input-placeholder,.w-select::-webkit-input-placeholder{color:#999}.w-input:focus,.w-select:focus{border-color:#3898EC;outline:0}.w-input[disabled],.w-select[disabled],.w-input[readonly],.w-select[readonly],fieldset[disabled] .w-input,fieldset[disabled] .w-select{cursor:not-allowed}.w-input[disabled]:not(.w-input-disabled),.w-select[disabled]:not(.w-input-disabled),.w-input[readonly],.w-select[readonly],fieldset[disabled]:not(.w-input-disabled) .w-input,fieldset[disabled]:not(.w-input-disabled) .w-select{background-color:#eee}textarea.w-input,textarea.w-select{height:auto}.w-select{background-color:#f3f3f3}.w-select[multiple]{height:auto}.w-form-label{display:inline-block;cursor:pointer;font-weight:400;margin-bottom:0}.w-radio{display:block;margin-bottom:5px;padding-left:20px}.w-radio:before,.w-radio:after{content:" ";display:table;grid-column-start:1;grid-row-start:1;grid-column-end:2;grid-row-end:2}.w-radio:after{clear:both}.w-radio-input{margin:4px 0 0;margin-top:1px \9;line-height:normal;float:left;margin-left:-20px;margin-top:3px}.w-file-upload{display:block;margin-bottom:10px}.w-file-upload-input{width:.1px;height:.1px;opacity:0;overflow:hidden;position:absolute;z-index:-100}.w-file-upload-default,.w-file-upload-uploading,.w-file-upload-success{display:inline-block;color:#333}.w-file-upload-error{display:block;margin-top:10px}.w-file-upload-default.w-hidden,.w-file-upload-uploading.w-hidden,.w-file-upload-error.w-hidden,.w-file-upload-success.w-hidden{display:none}.w-file-upload-uploading-btn{display:flex;font-size:14px;font-weight:400;cursor:pointer;margin:0;padding:8px 12px;border:1px solid #ccc;background-color:#fafafa}.w-file-upload-file{display:flex;flex-grow:1;justify-content:space-between;margin:0;padding:8px 9px 8px 11px;border:1px solid #ccc;background-color:#fafafa}.w-file-upload-file-name{font-size:14px;font-weight:400;display:block}.w-file-remove-link{margin-top:3px;margin-left:10px;width:auto;height:auto;padding:3px;display:block;cursor:pointer}.w-icon-file-upload-remove{margin:auto;font-size:10px}.w-file-upload-error-msg{display:inline-block;color:#ea384c;padding:2px 0}.w-file-upload-info{display:inline-block;line-height:38px;padding:0 12px}.w-file-upload-label{display:inline-block;font-size:14px;font-weight:400;cursor:pointer;margin:0;padding:8px 12px;border:1px solid #ccc;background-color:#fafafa}.w-icon-file-upload-icon,.w-icon-file-upload-uploading{display:inline-block;margin-right:8px;width:20px}.w-icon-file-upload-uploading{height:20px}.w-container{margin-left:auto;margin-right:auto;max-width:940px}.w-container:before,.w-container:after{content:" ";display:table;grid-column-start:1;grid-row-start:1;grid-column-end:2;grid-row-end:2}.w-container:after{clear:both}.w-container .w-row{margin-left:-10px;margin-right:-10px}.w-row:before,.w-row:after{content:" ";display:table;grid-column-start:1;grid-row-start:1;grid-column-end:2;grid-row-end:2}.w-row:after{clear:both}.w-row .w-row{margin-left:0;margin-right:0}.w-col{position:relative;float:left;width:100%;min-height:1px;padding-left:10px;padding-right:10px}.w-col .w-col{padding-left:0;padding-right:0}.w-col-1{width:8.33333333%}.w-col-2{width:16.66666667%}.w-col-3{width:25%}.w-col-4{width:33.33333333%}.w-col-5{width:41.66666667%}.w-col-6{width:50%}.w-col-7{width:58.33333333%}.w-col-8{width:66.66666667%}.w-col-9{width:75%}.w-col-10{width:83.33333333%}.w-col-11{width:91.66666667%}.w-col-12{width:100%}.w-hidden-main{display:none!important}@media screen and (max-width: 991px){.w-container{max-width:728px}.w-hidden-main{display:inherit!important}.w-hidden-medium{display:none!important}.w-col-medium-1{width:8.33333333%}.w-col-medium-2{width:16.66666667%}.w-col-medium-3{width:25%}.w-col-medium-4{width:33.33333333%}.w-col-medium-5{width:41.66666667%}.w-col-medium-6{width:50%}.w-col-medium-7{width:58.33333333%}.w-col-medium-8{width:66.66666667%}.w-col-medium-9{width:75%}.w-col-medium-10{width:83.33333333%}.w-col-medium-11{width:91.66666667%}.w-col-medium-12{width:100%}.w-col-stack{width:100%;left:auto;right:auto}}@media screen and (max-width: 767px){.w-hidden-main{display:inherit!important}.w-hidden-medium{display:inherit!important}.w-hidden-small{display:none!important}.w-row,.w-container .w-row{margin-left:0;margin-right:0}.w-col{width:100%;left:auto;right:auto}.w-col-small-1{width:8.33333333%}.w-col-small-2{width:16.66666667%}.w-col-small-3{width:25%}.w-col-small-4{width:33.33333333%}.w-col-small-5{width:41.66666667%}.w-col-small-6{width:50%}.w-col-small-7{width:58.33333333%}.w-col-small-8{width:66.66666667%}.w-col-small-9{width:75%}.w-col-small-10{width:83.33333333%}.w-col-small-11{width:91.66666667%}.w-col-small-12{width:100%}}@media screen and (max-width: 479px){.w-container{max-width:none}.w-hidden-main{display:inherit!important}.w-hidden-medium{display:inherit!important}.w-hidden-small{display:inherit!important}.w-hidden-tiny{display:none!important}.w-col{width:100%}.w-col-tiny-1{width:8.33333333%}.w-col-tiny-2{width:16.66666667%}.w-col-tiny-3{width:25%}.w-col-tiny-4{width:33.33333333%}.w-col-tiny-5{width:41.66666667%}.w-col-tiny-6{width:50%}.w-col-tiny-7{width:58.33333333%}.w-col-tiny-8{width:66.66666667%}.w-col-tiny-9{width:75%}.w-col-tiny-10{width:83.33333333%}.w-col-tiny-11{width:91.66666667%}.w-col-tiny-12{width:100%}}.w-widget{position:relative}.w-widget-map{width:100%;height:400px}.w-widget-map label{width:auto;display:inline}.w-widget-map img{max-width:inherit}.w-widget-map .gm-style-iw{text-align:center}.w-widget-map .gm-style-iw > button{display:none!important}.w-widget-twitter{overflow:hidden}.w-widget-twitter-count-shim{display:inline-block;vertical-align:top;position:relative;width:28px;height:20px;text-align:center;background:#fff;border:#758696 solid 1px;border-radius:3px}.w-widget-twitter-count-shim *{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.w-widget-twitter-count-shim .w-widget-twitter-count-inner{position:relative;font-size:15px;line-height:12px;text-align:center;color:#999;font-family:serif}.w-widget-twitter-count-shim .w-widget-twitter-count-clear{position:relative;display:block}.w-widget-twitter-count-shim.w--large{width:36px;height:28px}.w-widget-twitter-count-shim.w--large .w-widget-twitter-count-inner{font-size:18px;line-height:18px}.w-widget-twitter-count-shim:not(.w--vertical){margin-left:5px;margin-right:8px}.w-widget-twitter-count-shim:not(.w--vertical).w--large{margin-left:6px}.w-widget-twitter-count-shim:not(.w--vertical):before,.w-widget-twitter-count-shim:not(.w--vertical):after{top:50%;left:0;border:solid transparent;content:' ';height:0;width:0;position:absolute;pointer-events:none}.w-widget-twitter-count-shim:not(.w--vertical):before{border-color:rgba(117,134,150,0);border-right-color:#5d6c7b;border-width:4px;margin-left:-9px;margin-top:-4px}.w-widget-twitter-count-shim:not(.w--vertical).w--large:before{border-width:5px;margin-left:-10px;margin-top:-5px}.w-widget-twitter-count-shim:not(.w--vertical):after{border-color:rgba(255,255,255,0);border-right-color:#fff;border-width:4px;margin-left:-8px;margin-top:-4px}.w-widget-twitter-count-shim:not(.w--vertical).w--large:after{border-width:5px;margin-left:-9px;margin-top:-5px}.w-widget-twitter-count-shim.w--vertical{width:61px;height:33px;margin-bottom:8px}.w-widget-twitter-count-shim.w--vertical:before,.w-widget-twitter-count-shim.w--vertical:after{top:100%;left:50%;border:solid transparent;content:' ';height:0;width:0;position:absolute;pointer-events:none}.w-widget-twitter-count-shim.w--vertical:before{border-color:rgba(117,134,150,0);border-top-color:#5d6c7b;border-width:5px;margin-left:-5px}.w-widget-twitter-count-shim.w--vertical:after{border-color:rgba(255,255,255,0);border-top-color:#fff;border-width:4px;margin-left:-4px}.w-widget-twitter-count-shim.w--vertical .w-widget-twitter-count-inner{font-size:18px;line-height:22px}.w-widget-twitter-count-shim.w--vertical.w--large{width:76px}.w-background-video{position:relative;overflow:hidden;height:500px;color:#fff}.w-background-video > video{background-size:cover;background-position:50% 50%;position:absolute;margin:auto;width:100%;height:100%;right:-100%;bottom:-100%;top:-100%;left:-100%;object-fit:cover;z-index:-100}.w-background-video > video::-webkit-media-controls-start-playback-button{display:none!important;-webkit-appearance:none}.w-background-video--control{position:absolute;bottom:1em;right:1em;background-color:transparent;padding:0}.w-background-video--control > [hidden]{display:none!important}.w-slider{position:relative;height:300px;text-align:center;background:#ddd;clear:both;-webkit-tap-highlight-color:rgba(0,0,0,0);tap-highlight-color:rgba(0,0,0,0)}.w-slider-mask{position:relative;display:block;overflow:hidden;z-index:1;left:0;right:0;height:100%;white-space:nowrap}.w-slide{position:relative;display:inline-block;vertical-align:top;width:100%;height:100%;white-space:normal;text-align:left}.w-slider-nav{position:absolute;z-index:2;top:auto;right:0;bottom:0;left:0;margin:auto;padding-top:10px;height:40px;text-align:center;-webkit-tap-highlight-color:rgba(0,0,0,0);tap-highlight-color:rgba(0,0,0,0)}.w-slider-nav.w-round > div{border-radius:100%}.w-slider-nav.w-num > div{width:auto;height:auto;padding:.2em .5em;font-size:inherit;line-height:inherit}.w-slider-nav.w-shadow > div{box-shadow:0 0 3px rgba(51,51,51,0.4)}.w-slider-nav-invert{color:#fff}.w-slider-nav-invert > div{background-color:rgba(34,34,34,0.4)}.w-slider-nav-invert > div.w-active{background-color:#222}.w-slider-dot{position:relative;display:inline-block;width:1em;height:1em;background-color:rgba(255,255,255,0.4);cursor:pointer;margin:0 3px .5em;transition:background-color 100ms,color 100ms}.w-slider-dot.w-active{background-color:#fff}.w-slider-dot:focus{outline:none;box-shadow:0 0 0 2px #fff}.w-slider-dot:focus.w-active{box-shadow:none}.w-slider-arrow-left,.w-slider-arrow-right{position:absolute;width:80px;top:0;right:0;bottom:0;left:0;margin:auto;cursor:pointer;overflow:hidden;color:#fff;font-size:40px;-webkit-tap-highlight-color:rgba(0,0,0,0);tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.w-slider-arrow-left [class^='w-icon-'],.w-slider-arrow-right [class^='w-icon-'],.w-slider-arrow-left [class*=' w-icon-'],.w-slider-arrow-right [class*=' w-icon-']{position:absolute}.w-slider-arrow-left:focus,.w-slider-arrow-right:focus{outline:0}.w-slider-arrow-left{z-index:3;right:auto}.w-slider-arrow-right{z-index:4;left:auto}.w-icon-slider-left,.w-icon-slider-right{top:0;right:0;bottom:0;left:0;margin:auto;width:1em;height:1em}.w-slider-aria-label{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.w-slider-force-show{display:block!important}.w-dropdown{display:inline-block;position:relative;text-align:left;margin-left:auto;margin-right:auto;z-index:900}.w-dropdown-btn,.w-dropdown-toggle,.w-dropdown-link{position:relative;vertical-align:top;text-decoration:none;color:#222;padding:20px;text-align:left;margin-left:auto;margin-right:auto;white-space:nowrap}.w-dropdown-toggle{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;cursor:pointer;padding-right:40px}.w-dropdown-toggle:focus{outline:0}.w-icon-dropdown-toggle{position:absolute;top:0;right:0;bottom:0;margin:auto;margin-right:20px;width:1em;height:1em}.w-dropdown-list{position:absolute;background:#ddd;display:none;min-width:100%}.w-dropdown-list.w--open{display:block}.w-dropdown-link{padding:10px 20px;display:block;color:#222}.w-dropdown-link.w--current{color:#0082f3}.w-dropdown-link:focus{outline:0}@media screen and (max-width: 767px){.w-nav-brand{padding-left:10px}}.w-lightbox-backdrop{color:#000;cursor:auto;font-family:serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:400;letter-spacing:normal;line-height:normal;list-style:disc;text-align:start;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-break:normal;word-spacing:normal;word-wrap:normal;position:fixed;top:0;right:0;bottom:0;left:0;color:#fff;font-family:"Helvetica Neue",Helvetica,Ubuntu,"Segoe UI",Verdana,sans-serif;font-size:17px;line-height:1.2;font-weight:300;text-align:center;background:rgba(0,0,0,0.9);z-index:2000;outline:0;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-tap-highlight-color:transparent;-webkit-transform:translate(0,0)}.w-lightbox-backdrop,.w-lightbox-container{height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.w-lightbox-content{position:relative;height:100vh;overflow:hidden}.w-lightbox-view{position:absolute;width:100vw;height:100vh;opacity:0}.w-lightbox-view:before{content:"";height:100vh}.w-lightbox-group,.w-lightbox-group .w-lightbox-view,.w-lightbox-group .w-lightbox-view:before{height:86vh}.w-lightbox-frame,.w-lightbox-view:before{display:inline-block;vertical-align:middle}.w-lightbox-figure{position:relative;margin:0}.w-lightbox-group .w-lightbox-figure{cursor:pointer}.w-lightbox-img{width:auto;height:auto;max-width:none}.w-lightbox-image{display:block;float:none;max-width:100vw;max-height:100vh}.w-lightbox-group .w-lightbox-image{max-height:86vh}.w-lightbox-caption{position:absolute;right:0;bottom:0;left:0;padding:.5em 1em;background:rgba(0,0,0,0.4);text-align:left;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.w-lightbox-embed{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%}.w-lightbox-control{position:absolute;top:0;width:4em;background-size:24px;background-repeat:no-repeat;background-position:center;cursor:pointer;-webkit-transition:all .3s;transition:all .3s}.w-lightbox-left{display:none;bottom:0;left:0;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yMCAwIDI0IDQwIiB3aWR0aD0iMjQiIGhlaWdodD0iNDAiPjxnIHRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0ibTAgMGg1djIzaDIzdjVoLTI4eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDN2MjNoMjN2M2gtMjZ6IiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==)}.w-lightbox-right{display:none;right:0;bottom:0;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMjQgNDAiIHdpZHRoPSIyNCIgaGVpZ2h0PSI0MCI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMC0waDI4djI4aC01di0yM2gtMjN6IiBvcGFjaXR5PSIuNCIvPjxwYXRoIGQ9Im0xIDFoMjZ2MjZoLTN2LTIzaC0yM3oiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+)}.w-lightbox-close{right:0;height:2.6em;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMTggMTciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMCAwaDd2LTdoNXY3aDd2NWgtN3Y3aC01di03aC03eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDd2LTdoM3Y3aDd2M2gtN3Y3aC0zdi03aC03eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=);background-size:18px}.w-lightbox-strip{position:absolute;bottom:0;left:0;right:0;padding:0 1vh;line-height:0;white-space:nowrap;overflow-x:auto;overflow-y:hidden}.w-lightbox-item{display:inline-block;width:10vh;padding:2vh 1vh;box-sizing:content-box;cursor:pointer;-webkit-transform:translate3d(0,0,0)}.w-lightbox-active{opacity:.3}.w-lightbox-thumbnail{position:relative;height:10vh;background:#222;overflow:hidden}.w-lightbox-thumbnail-image{position:absolute;top:0;left:0}.w-lightbox-thumbnail .w-lightbox-tall{top:50%;width:100%;-webkit-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%)}.w-lightbox-thumbnail .w-lightbox-wide{left:50%;height:100%;-webkit-transform:translate(-50%,0);-ms-transform:translate(-50%,0);transform:translate(-50%,0)}.w-lightbox-spinner{position:absolute;top:50%;left:50%;box-sizing:border-box;width:40px;height:40px;margin-top:-20px;margin-left:-20px;border:5px solid rgba(0,0,0,0.4);border-radius:50%;-webkit-animation:spin .8s infinite linear;animation:spin .8s infinite linear}.w-lightbox-spinner:after{content:"";position:absolute;top:-4px;right:-4px;bottom:-4px;left:-4px;border:3px solid transparent;border-bottom-color:#fff;border-radius:50%}.w-lightbox-hide{display:none}.w-lightbox-noscroll{overflow:hidden}@media (min-width: 768px){.w-lightbox-content{height:96vh;margin-top:2vh}.w-lightbox-view,.w-lightbox-view:before{height:96vh}.w-lightbox-group,.w-lightbox-group .w-lightbox-view,.w-lightbox-group .w-lightbox-view:before{height:84vh}.w-lightbox-image{max-width:96vw;max-height:96vh}.w-lightbox-group .w-lightbox-image{max-width:82.3vw;max-height:84vh}.w-lightbox-left,.w-lightbox-right{display:block;opacity:.5}.w-lightbox-close{opacity:.8}.w-lightbox-control:hover{opacity:1}}.w-lightbox-inactive,.w-lightbox-inactive:hover{opacity:0}.w-richtext:before,.w-richtext:after{content:" ";display:table;grid-column-start:1;grid-row-start:1;grid-column-end:2;grid-row-end:2}.w-richtext:after{clear:both}.w-richtext[contenteditable="true"]:before,.w-richtext[contenteditable="true"]:after{white-space:initial}.w-richtext ol,.w-richtext ul{overflow:hidden}.w-richtext .w-richtext-figure-selected.w-richtext-figure-type-video div:after,.w-richtext .w-richtext-figure-selected[data-rt-type="video"] div:after{outline:2px solid #2895f7}.w-richtext .w-richtext-figure-selected.w-richtext-figure-type-image div,.w-richtext .w-richtext-figure-selected[data-rt-type="image"] div{outline:2px solid #2895f7}.w-richtext figure.w-richtext-figure-type-video > div:after,.w-richtext figure[data-rt-type="video"] > div:after{content:'';position:absolute;display:none;left:0;top:0;right:0;bottom:0}.w-richtext figure{position:relative;max-width:60%}.w-richtext figure > div:before{cursor:default!important}.w-richtext figure img{width:100%}.w-richtext figure figcaption.w-richtext-figcaption-placeholder{opacity:.6}.w-richtext figure div{font-size:0;color:transparent}.w-richtext figure.w-richtext-figure-type-image,.w-richtext figure[data-rt-type="image"]{display:table}.w-richtext figure.w-richtext-figure-type-image > div,.w-richtext figure[data-rt-type="image"] > div{display:inline-block}.w-richtext figure.w-richtext-figure-type-image > figcaption,.w-richtext figure[data-rt-type="image"] > figcaption{display:table-caption;caption-side:bottom}.w-richtext figure.w-richtext-figure-type-video,.w-richtext figure[data-rt-type="video"]{width:60%;height:0}.w-richtext figure.w-richtext-figure-type-video iframe,.w-richtext figure[data-rt-type="video"] iframe{position:absolute;top:0;left:0;width:100%;height:100%}.w-richtext figure.w-richtext-figure-type-video > div,.w-richtext figure[data-rt-type="video"] > div{width:100%}.w-richtext figure.w-richtext-align-center{margin-right:auto;margin-left:auto;clear:both}.w-richtext figure.w-richtext-align-center.w-richtext-figure-type-image > div,.w-richtext figure.w-richtext-align-center[data-rt-type="image"] > div{max-width:100%}.w-richtext figure.w-richtext-align-normal{clear:both}.w-richtext figure.w-richtext-align-fullwidth{width:100%;max-width:100%;text-align:center;clear:both;display:block;margin-right:auto;margin-left:auto}.w-richtext figure.w-richtext-align-fullwidth > div{display:inline-block;padding-bottom:inherit}.w-richtext figure.w-richtext-align-fullwidth > figcaption{display:block}.w-richtext figure.w-richtext-align-floatleft{float:left;margin-right:15px;clear:none}.w-richtext figure.w-richtext-align-floatright{float:right;margin-left:15px;clear:none}.w-nav{position:relative;background:#ddd;z-index:1000}.w-nav:before,.w-nav:after{content:" ";display:table;grid-column-start:1;grid-row-start:1;grid-column-end:2;grid-row-end:2}.w-nav:after{clear:both}.w-nav-brand{position:relative;float:left;text-decoration:none;color:#333}.w-nav-link{position:relative;display:inline-block;vertical-align:top;text-decoration:none;color:#222;padding:20px;text-align:left;margin-left:auto;margin-right:auto}.w-nav-link.w--current{color:#0082f3}.w-nav-menu{position:relative;float:right}[data-nav-menu-open]{display:block!important;position:absolute;top:100%;left:0;right:0;background:#C8C8C8;text-align:center;overflow:visible;min-width:200px}.w--nav-link-open{display:block;position:relative}.w-nav-overlay{position:absolute;overflow:hidden;display:none;top:100%;left:0;right:0;width:100%}.w-nav-overlay [data-nav-menu-open]{top:0}.w-nav[data-animation="over-left"] .w-nav-overlay{width:auto}.w-nav[data-animation="over-left"] .w-nav-overlay,.w-nav[data-animation="over-left"] [data-nav-menu-open]{right:auto;z-index:1;top:0}.w-nav[data-animation="over-right"] .w-nav-overlay{width:auto}.w-nav[data-animation="over-right"] .w-nav-overlay,.w-nav[data-animation="over-right"] [data-nav-menu-open]{left:auto;z-index:1;top:0}.w-nav-button{position:relative;float:right;padding:18px;font-size:24px;display:none;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.w-nav-button:focus{outline:0}.w-nav-button.w--open{background-color:#C8C8C8;color:#fff}.w-nav[data-collapse="all"] .w-nav-menu{display:none}.w-nav[data-collapse="all"] .w-nav-button{display:block}.w--nav-dropdown-open{display:block}.w--nav-dropdown-toggle-open{display:block}.w--nav-dropdown-list-open{position:static}@media screen and (max-width: 991px){.w-nav[data-collapse="medium"] .w-nav-menu{display:none}.w-nav[data-collapse="medium"] .w-nav-button{display:block}}@media screen and (max-width: 767px){.w-nav[data-collapse="small"] .w-nav-menu{display:none}.w-nav[data-collapse="small"] .w-nav-button{display:block}.w-nav-brand{padding-left:10px}}@media screen and (max-width: 479px){.w-nav[data-collapse="tiny"] .w-nav-menu{display:none}.w-nav[data-collapse="tiny"] .w-nav-button{display:block}}.w-tabs{position:relative}.w-tabs:before,.w-tabs:after{content:" ";display:table;grid-column-start:1;grid-row-start:1;grid-column-end:2;grid-row-end:2}.w-tabs:after{clear:both}.w-tab-menu{position:relative}.w-tab-link{position:relative;display:inline-block;vertical-align:top;text-decoration:none;padding:9px 30px;text-align:left;cursor:pointer;color:#222;background-color:#ddd}.w-tab-link.w--current{background-color:#C8C8C8}.w-tab-link:focus{outline:0}.w-tab-content{position:relative;display:block;overflow:hidden}.w-tab-pane{position:relative;display:none}.w--tab-active{display:block}@media screen and (max-width: 479px){.w-tab-link{display:block}}.w-ix-emptyfix:after{content:""}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.w-dyn-empty{padding:10px;background-color:#ddd}.w-dyn-hide{display:none!important}.w-dyn-bind-empty{display:none!important}.w-condition-invisible{display:none!important}.wf-layout-layout{display:grid!important}.w-layout-grid{display:-ms-grid;display:grid;grid-auto-columns:1fr;-ms-grid-columns:1fr 1fr;grid-template-columns:1fr 1fr;-ms-grid-rows:auto auto;grid-template-rows:auto auto;grid-row-gap:16px;grid-column-gap:16px}h2{margin-top:20px;margin-bottom:10px;font-size:32px;line-height:36px;font-weight:400}h3{margin-top:20px;margin-bottom:20px;font-size:24px;line-height:30px;font-weight:400}p{margin-bottom:10px;font-family:"Open Sans",sans-serif;font-size:16px;line-height:1.5em}a{padding-right:3px;padding-left:3px;-webkit-transition:all 75ms ease;transition:all 75ms ease;color:#0c0000;text-decoration:none}a:hover{background-image:none;color:#000}img{display:inline-block;max-width:100%;margin-top:20px;margin-bottom:20px}.columns{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100vh;padding-right:0;padding-left:2em;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch}.column{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100vh;padding-left:0;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}.column-2{height:100vh;padding:100px 60px 100px 0;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.paragraph{width:100%;margin-top:20px;margin-bottom:20px;font-family:"Open Sans",sans-serif;font-size:14px;line-height:21px}.heading{font-family:"Open Sans",sans-serif;font-size:42px;font-weight:400}.button{padding:18px 26px;background-color:#b1881e;-webkit-transition:all 300ms ease;transition:all 300ms ease;font-family:"Open Sans",sans-serif;font-size:17px;font-weight:600}.button:hover{padding:18px 26px;background-color:#242c3b;background-image:none;color:#fff}.button.padding_left{margin-left:10px}.div-block{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:60%;margin-top:0;padding-right:2em;padding-left:2em;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}.div-block.modifie{height:auto;margin-top:61px;margin-right:auto;margin-left:auto;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.heading-2{max-width:750px;margin-right:auto;margin-left:auto;font-family:"Open Sans",sans-serif;font-weight:400;text-align:center}.section{margin-top:140px}.grid{width:auto;max-width:1250px;margin-top:40px;margin-right:auto;margin-left:auto;grid-column-gap:21px;grid-row-gap:51px;-ms-grid-columns:1fr 1fr 1fr;grid-template-columns:1fr 1fr 1fr}.tabs-menu{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:20px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.tab-link-tab-3{margin-right:20px;margin-left:20px;border-style:solid;border-width:2px;border-color:#242c3b;background-color:hsla(0,0%,100%,0)}.tab-link-tab-3.w--current{border-color:#b1881e;background-color:#fff}.tab-link-tab-3._3{margin-right:0;margin-left:0;font-family:"Open Sans",sans-serif}.tab-link-tab-3-2{margin-right:20px;border-style:solid;border-width:2px;border-color:#242c3b;background-color:hsla(0,0%,86.7%,0);font-family:"Open Sans",sans-serif}.tab-link-tab-3-2:hover{background-image:none;color:#000}.tab-link-tab-3-2.w--current{margin-right:20px;border-color:#b1881e;background-color:hsla(0,0%,100%,0)}.tab-link-tab-2{margin-right:20px;margin-left:20px;border-style:solid;border-width:2px;border-color:#242c3b;background-color:hsla(0,0%,78.4%,0)}.tab-link-tab-2.w--current{margin-right:20px;margin-left:20px;border-style:solid;border-width:2px;border-color:#b1881e;background-color:hsla(0,0%,78.4%,0);font-family:"Open Sans",sans-serif;font-weight:400}.div-block-3{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;padding:22px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;border-style:solid;border-width:2px;border-color:#f0f0f0;border-radius:0;background-image:none;color:#000;text-decoration:none}.div-block-3:hover{padding:22px;border-color:rgba(177,136,30,0.55);background-color:hsla(0,0%,100%,0);background-image:-webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,100%,0.61)),to(hsla(0,0%,100%,0.61)));background-image:linear-gradient(180deg,hsla(0,0%,100%,0.61),hsla(0,0%,100%,0.61));color:#000}.image-3{min-width:100%;margin-top:0;margin-bottom:0;border-style:solid;border-width:2px;border-color:#f1f1f1}.paragraph-2{padding-top:10px;font-family:"Open Sans",sans-serif;font-weight:600}.paragraph-2._20px{font-size:20px;font-weight:700}.paragraph-2._20px.sticky{margin-bottom:0;padding-top:0;font-size:16px}.button-2{width:100%;background-color:#b1881e;-webkit-transition:all 200ms ease;transition:all 200ms ease;font-family:"Open Sans",sans-serif;text-align:center}.button-2.sticky:hover{background-color:#002d5e}.button-2.sticky.small{width:281px}.text-block{font-size:16px}.text-block-2{font-size:16px}.text-block-3{font-size:16px}.section-2{margin-top:140px;padding-right:2em;padding-left:2em}.tab-pane-tab-3{padding-right:2em;padding-left:2em}.tabs-content{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:auto;margin-left:auto;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.tabs{margin-right:auto;margin-left:auto;padding-right:2em;padding-left:2em}.home-section-wrap{margin-bottom:30px}.divider{height:1px;margin-bottom:38px;background-color:#eee}.container-2{width:100%;max-width:1140px;margin-right:auto;margin-left:auto}.paragraph-light{opacity:1;font-family:"Open Sans",sans-serif;color:#414141;font-size:16px;line-height:1.5em;text-align:left}.paragraph-light.middle-text{text-align:center}.paragraph-light.middle-text.padding_down{margin-bottom:60px}.paragraph-light.padding_bottom{margin-bottom:31px}.motto-wrap{width:80%;margin-right:auto;margin-bottom:40px;margin-left:auto;text-align:center}.about-grid{margin-bottom:80px;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;grid-column-gap:80px;grid-row-gap:30px;grid-template-areas:". .";-ms-grid-columns:1.4fr 80px 1fr;grid-template-columns:1.4fr 1fr;-ms-grid-rows:auto;grid-template-rows:auto}.about-grid.cc-about-2{-webkit-box-pack:stretch;-webkit-justify-content:stretch;-ms-flex-pack:stretch;justify-content:stretch;justify-items:stretch;grid-template-areas:". .";-ms-grid-columns:1fr 1.4fr;grid-template-columns:1fr 1.4fr}.about-grid.cc-about-2.modified{margin-top:43px;-ms-grid-columns:1fr 1fr;grid-template-columns:1fr 1fr}.about-grid.cc-about-2.modified._4_columns{grid-column-gap:9px;-ms-grid-columns:1fr 1fr 1fr 1fr;grid-template-columns:1fr 1fr 1fr 1fr}.about-grid.cc-about-2.modified._4_columns._2-rows{grid-column-gap:12px;grid-row-gap:12px;-ms-grid-rows:auto auto;grid-template-rows:auto auto}.about-grid.cc-about-2.modified._4_columns._2-rows._2_columns{-ms-grid-columns:1fr 1fr;grid-template-columns:1fr 1fr;-ms-grid-rows:auto;grid-template-rows:auto}.about-grid.cc-about-2.modified._4_columns._2-rows._3_columns{-ms-grid-columns:1fr 1fr 1fr;grid-template-columns:1fr 1fr 1fr;-ms-grid-rows:auto;grid-template-rows:auto}.section-heading{margin-top:10px;margin-bottom:20px;font-family:"Open Sans",sans-serif;font-size:30px;line-height:1.4em;font-weight:400}.section-heading.middle_text{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;text-align:center}.section-heading.middle_text.padding_down{margin-bottom:28px;font-size:34px}.section-heading.middle_text.padding_down.padding_up{margin-top:0;padding-top:40px}.section-heading.padding_top{margin-top:60px}.home-content-wrap{margin-top:0;margin-bottom:120px;padding-right:3em;padding-left:3em}.image-5{width:100%;height:600px;-o-object-fit:cover;object-fit:cover}.image-5._400px{height:400px}.image-6{width:100%;height:600px;margin-top:0;margin-bottom:0;-o-object-fit:cover;object-fit:cover}.image-6.contain{height:200px;-o-object-fit:contain;object-fit:contain}.image-6.contain.sticky{width:70px;height:70px;border-radius:1005px}.image-6.contain.petit{height:200px}.container-3{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;max-width:850px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}.image-header{height:100%;margin-top:0;margin-bottom:0;-o-object-fit:cover;object-fit:cover}.image-7{margin-left:2em}.div-link-home{position:absolute;left:0;top:0;right:auto;bottom:auto;background-image:none}.div-link-home:hover{background-image:-webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent));background-image:linear-gradient(180deg,transparent,transparent)}.section-3{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:77px;margin-bottom:40px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.section-3.modificar{margin-top:0}.button-copy-footer{margin-bottom:40px;padding:18px 26px;background-color:#b1881e;-webkit-transition:all 300ms ease;transition:all 300ms ease;font-family:"Open Sans",sans-serif;font-size:17px;font-weight:600}.button-copy-footer:hover{background-color:#242c3b}.image-8{display:none}.section-4{margin-right:auto;margin-left:auto}.heading-3{margin-left:0;padding-right:2em;padding-left:0;font-family:"Open Sans",sans-serif}.tabs-5{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.text-block-31{padding-left:10px;font-family:"Open Sans",sans-serif;color:#000;font-size:17px;line-height:1.2;font-weight:700}.tab-grid{display:block;width:100%;height:100%;-ms-grid-row-align:center;align-self:center;-ms-grid-columns:1.75fr 1fr;grid-template-columns:1.75fr 1fr;-ms-grid-rows:100%;grid-template-rows:100%}.tabs-menu-5{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:300px;max-width:1500px;margin-right:auto;margin-left:auto;padding-right:0;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch}.content-block-2{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-top:19px;padding-right:35px;padding-left:35px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;background-color:#efe6d0;text-align:left}.tab-panel{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:visible;width:100%;height:100%;min-height:auto;margin-left:0;padding:0 25px 0 0;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;border-radius:7px;background-color:hsla(0,0%,100%,0)}.tab-compacta{height:100%}.content-section{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;width:100vw;padding:106px 3% 0;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background-color:#fff}.content-section.ipad{width:auto;padding-top:40px;padding-right:0;padding-left:0}.standard-tab{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:303px;margin-bottom:8px;padding:15px 15px 16px;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background-color:transparent;opacity:.7;color:#000;font-size:15px}.standard-tab:hover{color:rgba(0,0,0,0.62)}.standard-tab.w--current{position:relative;padding-right:15px;padding-left:14px;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-flex:0;-webkit-flex:0 auto;-ms-flex:0 auto;flex:0 auto;background-color:transparent;background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(177,136,30,0.21)),to(rgba(177,136,30,0.21)));background-image:linear-gradient(180deg,rgba(177,136,30,0.21),rgba(177,136,30,0.21));opacity:1;font-family:"Open Sans",sans-serif;color:#fff}.standard-tab.w--current:hover{color:#fff}.container-10{width:100%;max-width:1250px;margin-right:auto;margin-left:auto}.tab-adaptable{height:100%}.tabs-content-4{overflow:visible;height:100%;padding-top:0;-webkit-align-self:center;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}.tab-potencia{height:100%}.heading-67{font-family:"Open Sans",sans-serif;font-size:26px;font-weight:400}.image-9{width:100%;height:250px;-o-object-fit:cover;object-fit:cover}.faq-paragraph{margin-bottom:0;padding-top:14px;padding-bottom:14px;color:#485166;font-size:15px;line-height:1.6;font-weight:400;letter-spacing:-.03em}.faq-wrapper{max-width:1000px;margin-right:auto;margin-left:auto;padding-bottom:100px}.faq-question-bar{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-top:30px;padding-bottom:30px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;border-bottom:1px solid rgba(0,0,0,0.07);background-image:none;color:#1a1e27;font-size:20px;line-height:1.3;font-weight:600;text-decoration:none}.faq-question-bar:hover{background-image:none;color:#000}.div-block-103{width:100%;height:1px}.faq-question-wrap{padding-right:40px;padding-left:40px;cursor:pointer}.faq-circle{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:55px;height:55px;min-height:55px;min-width:55px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;border-radius:100%;background-color:#f3f3f3}.faq-content{overflow:hidden}.section-5{margin-top:100px;padding-right:2em;padding-left:2em}.image-10{width:100%;max-height:70vh;-o-object-fit:cover;object-fit:cover}.image-11{width:100%;max-height:70vh;-o-object-fit:cover;object-fit:cover}.image-12{width:100%;max-height:70vh;-o-object-fit:cover;object-fit:cover}.h2_16px{font-size:16px;line-height:1.5em}.bold-text{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-flex:0;-webkit-flex:0 auto;-ms-flex:0 auto;flex:0 auto;line-height:1.4em}.body{margin-bottom:100px;padding-right:0;padding-bottom:100px;padding-left:0}.text-block-32{padding:12px;color:#fff}.image-13{width:100%}.div_sticky{position:fixed;left:0;top:auto;right:0;bottom:0;z-index:999;display:-ms-grid;display:grid;max-width:1780px;margin-right:auto;margin-left:auto;grid-auto-columns:1fr;grid-column-gap:0;grid-row-gap:16px;-ms-grid-columns:1fr 2px 1fr;grid-template-columns:1fr 2px 1fr;-ms-grid-rows:auto;grid-template-rows:auto;border-style:solid none none;border-width:2px 1px 1px;border-color:rgba(177,136,30,0.21) #000 #000;background-color:#fff;box-shadow:0 0 20px 0 rgba(0,0,0,0.16)}.div_sticky.regalos-gourmet{-ms-grid-columns:1fr;grid-template-columns:1fr}.link-sticky{position:relative;display:-ms-grid;display:grid;padding:7px 4em;grid-auto-columns:1fr;grid-column-gap:10px;grid-row-gap:10px;-ms-grid-columns:0.3fr 1fr 0.7fr;grid-template-columns:0.3fr 1fr 0.7fr;-ms-grid-rows:auto;grid-template-rows:auto;background-image:none;color:#000}.link-sticky:hover{padding-right:4em;padding-left:4em;background-image:-webkit-gradient(linear,left top,left bottom,from(transparent),to(transparent));background-image:linear-gradient(180deg,transparent,transparent);color:#000}.link-sticky.regalos-gourmet-gg{-ms-grid-columns:0.3fr 1fr;grid-template-columns:0.3fr 1fr}.div-block-105{width:100%;background-color:rgba(177,136,30,0.21)}.separador{width:100%;height:50px}.container-hide{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;max-width:850px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}.section-6{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-bottom:40px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.button-m-s{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100vw;height:60px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background-color:#e7e7e7;-webkit-transition-duration:150ms;transition-duration:150ms;font-family:"Open Sans",sans-serif;color:#000;font-size:17px;text-align:center}.button-m-s:hover{background-color:#dae1e7}.accordion-item---brix{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:40px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch;border-radius:14px;background-color:#fff;cursor:pointer}.accordion-item---brix.accordion-1---brix{margin-bottom:32px;border:2px solid transparent;box-shadow:0 5px 16px 0 rgba(8,15,52,0.06);-webkit-transition:border-color 200ms ease,box-shadow 200ms ease;transition:border-color 200ms ease,box-shadow 200ms ease}.accordion-item---brix.accordion-1---brix:hover{box-shadow:0 14px 21px 0 rgba(74,58,255,0.06)}@media screen and (min-width: 1440px){.div-block-3{height:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.paragraph-2._20px.sticky.padding_left{margin-left:10px}.about-grid.cc-about-2.modified{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;grid-column-gap:8px;-ms-grid-columns:1fr 1fr 1fr 1fr;grid-template-columns:1fr 1fr 1fr 1fr}.image-6.contain{height:200px}.link-sticky{-ms-grid-columns:0.25fr 1fr 0.7fr;grid-template-columns:0.25fr 1fr 0.7fr}.link_normal{background-image:none}}@media screen and (min-width: 1920px){.columns{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;max-width:1780px;margin-right:auto;margin-left:auto}.column-2{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.div-block{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.image-header{height:auto}}@media screen and (max-width: 991px){.columns{height:auto;padding-left:0;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.column{height:auto}.column-2{padding-top:40px}.div-block{margin-top:74px;padding-right:0;padding-left:0}.paragraph-2._20px{text-align:left}.paragraph-2._20px.sticky{font-size:14px}.about-grid{grid-row-gap:50px;grid-template-areas:. .;-ms-grid-columns:1fr;grid-template-columns:1fr;-ms-grid-rows:auto 50px auto;grid-template-rows:auto auto;text-align:center}.about-grid.cc-about-2{grid-template-areas:. .;-ms-grid-columns:1fr;grid-template-columns:1fr}.about-grid.cc-about-2.modified{grid-column-gap:8px;-ms-grid-rows:auto;grid-template-rows:auto}.about-grid.cc-about-2.modified._4_columns{-ms-grid-columns:1fr 1fr;grid-template-columns:1fr 1fr}.image-6.contain{height:210px}.container-3{padding-right:2em;padding-left:2em}.image-header{height:400px}.image-7{margin-left:0}.image-8{display:none}.tab-grid{-ms-grid-columns:1fr;grid-template-columns:1fr;-ms-grid-rows:auto auto;grid-template-rows:auto auto}.tabs-menu-5{overflow:scroll;width:auto;margin-left:0;clear:none;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-flex:0;-webkit-flex:0 auto;-ms-flex:0 auto;flex:0 auto}.content-block-2{padding:20px 10px}.tab-panel{margin-left:0}.content-section.ipad{display:none}.container-10{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.faq-question-wrap{padding-right:20px;padding-left:20px}.body{padding-right:3em;padding-left:3em}.text-block-32{padding:10px;font-size:13px}.link-sticky{padding-right:1em;padding-left:1em}.link-sticky:hover{padding-right:1em;padding-left:1em}.container-hide{padding-right:2em;padding-left:2em}.accordion-item---brix.accordion-1---brix{margin-bottom:20px}}@media screen and (max-width: 767px){.column-2{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding-right:0}.grid{-ms-grid-columns:1fr 1fr;grid-template-columns:1fr 1fr}.tabs-menu{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.tab-link-tab-3._3{margin-top:10px}.tab-link-tab-3-2{margin-right:0}.tab-link-tab-3-2.w--current{margin-right:0}.tab-link-tab-2{margin-top:10px;margin-right:0;margin-left:0}.tab-link-tab-2.w--current{margin-right:0;margin-left:0}.container-2{text-align:center}.about-grid.cc-about-2.modified{-ms-grid-columns:1fr;grid-template-columns:1fr}.container-3{padding-right:0;padding-left:0}.image-header{width:100%}.image-8{display:none}.tabs-menu-5{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.standard-tab{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.link-sticky.regalos-gourmet-gg{-ms-grid-columns:0.3fr 0.7fr;grid-template-columns:0.3fr 0.7fr}.container-hide{padding-right:0;padding-left:0}.accordion-item---brix.accordion-1---brix{margin-bottom:16px;padding:32px}}@media screen and (max-width: 479px){.columns{padding-left:0}.column{height:auto;padding-right:0}.column-2{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.paragraph{font-size:14px}.heading{font-size:34px}.button{width:100%;font-size:14px;text-align:center}.button.modified{margin-top:20px}.div-block{height:auto}.div-block.modifie{padding-left:0}.grid{grid-column-gap:9px}.paragraph-2{font-size:12px}.paragraph-2._20px.sticky{display:none}.button-2{font-size:13px}.tab-pane-tab-3{padding-right:.25em;padding-left:.25em}.tabs{padding-right:1em;padding-left:1em}.paragraph-light{font-size:14px;line-height:23px}.about-grid.cc-about-2.modified._4_columns{-ms-grid-columns:1fr;grid-template-columns:1fr}.about-grid.cc-about-2.modified._4_columns._2-rows._2_columns{-ms-grid-columns:1fr;grid-template-columns:1fr}.about-grid.cc-about-2.modified._4_columns._2-rows._3_columns{-ms-grid-columns:1fr;grid-template-columns:1fr}.section-heading{font-size:28px;text-align:left}.section-heading.middle_text.padding_down.padding_up{font-size:30px}.home-content-wrap{padding-right:0;padding-left:0}.image-5{height:300px}.image-6{height:300px}.image-header{display:block}.image-7{margin-top:10px;margin-bottom:10px;margin-left:0}.div-link-home{left:0;top:0;right:0;bottom:auto;margin-right:auto;margin-left:auto;text-align:center}.image-8{display:block;height:30vh;margin-top:81px;-o-object-fit:cover;object-fit:cover}.heading-3{font-size:22px;line-height:30px}.tabs-5{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch}.text-block-31{padding-left:.5em;font-size:14px}.tab-grid{-ms-grid-rows:350px auto;grid-template-rows:350px auto}.tabs-menu-5{display:-ms-grid;display:grid;overflow:auto;width:100%;height:auto;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start;-webkit-box-flex:0;-webkit-flex:0 auto;-ms-flex:0 auto;flex:0 auto;grid-auto-columns:1fr;grid-column-gap:16px;grid-row-gap:16px;-ms-grid-columns:1fr 1fr 1fr;grid-template-columns:1fr 1fr 1fr;-ms-grid-rows:auto;grid-template-rows:auto}.content-block-2{width:87vw;padding-top:.25em;padding-bottom:10px}.tab-panel{padding-right:0;padding-left:0}.tab-compacta{width:100%}.content-section{width:100vw;padding-top:2em;padding-right:0;padding-left:0}.content-section.ipad{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.standard-tab{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;padding:1em 0}.standard-tab.w--current{padding:1em 0}.container-10{width:90vw;margin-right:0;margin-left:0}.tabs-content-4{width:100%;padding-top:0}.heading-67{font-size:26px;line-height:1.1;font-weight:700}.faq-question-wrap{padding-right:0;padding-left:0}.h2_16px{text-align:left}.bold-text{text-align:left}.body{padding-right:2em;padding-left:2em}.link-sticky.regalos-gourmet-gg{-ms-grid-columns:0.7fr;grid-template-columns:0.7fr}}#w-node-_29e1181e-7c66-a48b-d12e-a60248ea2006-f0bb7bb1{-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1;-ms-grid-row:span 1;grid-row-start:span 1;-ms-grid-row-span:1;grid-row-end:span 1}#w-node-_29e1181e-7c66-a48b-d12e-a60248ea200c-f0bb7bb1{-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1;-ms-grid-row:span 1;grid-row-start:span 1;-ms-grid-row-span:1;grid-row-end:span 1;-ms-grid-row-align:auto;align-self:auto;-ms-grid-column-align:stretch;justify-self:stretch}#w-node-_29e1181e-7c66-a48b-d12e-a60248ea2012-f0bb7bb1{-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1;-ms-grid-row:span 1;grid-row-start:span 1;-ms-grid-row-span:1;grid-row-end:span 1}#w-node-_29e1181e-7c66-a48b-d12e-a60248ea2013-f0bb7bb1{-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1;-ms-grid-row:span 1;grid-row-start:span 1;-ms-grid-row-span:1;grid-row-end:span 1}#w-node-d30132f9-4055-6b63-6724-13498115e364-f0bb7bb1{-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1;-ms-grid-row:span 1;grid-row-start:span 1;-ms-grid-row-span:1;grid-row-end:span 1;-ms-grid-row-align:auto;align-self:auto}#w-node-_15d91810-edc4-0d54-f44a-24d6e08bb8b0-f0bb7bb1{-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1;-ms-grid-row:span 1;grid-row-start:span 1;-ms-grid-row-span:1;grid-row-end:span 1}#w-node-_37adb8ed-631c-8041-7f6f-78a96ac3f652-f0bb7bb1{-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1;-ms-grid-row:span 1;grid-row-start:span 1;-ms-grid-row-span:1;grid-row-end:span 1}#w-node-_37adb8ed-631c-8041-7f6f-78a96ac3f653-f0bb7bb1{-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1;-ms-grid-row:span 1;grid-row-start:span 1;-ms-grid-row-span:1;grid-row-end:span 1}#w-node-d8971cd8-259c-46a7-8068-b8935770d60b-f0bb7bb1{-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1;-ms-grid-row:span 1;grid-row-start:span 1;-ms-grid-row-span:1;grid-row-end:span 1}#w-node-_0fe16de2-72f6-c625-1876-499ef7f8ddc5-f0bb7bb1{-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1;-ms-grid-row:span 1;grid-row-start:span 1;-ms-grid-row-span:1;grid-row-end:span 1}#w-node-_09515fb2-36b1-0ba7-9c49-77de7211505b-f0bb7bb1{-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1;-ms-grid-row:span 1;grid-row-start:span 1;-ms-grid-row-span:1;grid-row-end:span 1}#w-node-_8bb20882-e94c-e10e-ea17-49538fee766d-f0bb7bb1{-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1;-ms-grid-row:span 1;grid-row-start:span 1;-ms-grid-row-span:1;grid-row-end:span 1}#w-node-_8bb20882-e94c-e10e-ea17-49538fee766e-f0bb7bb1{-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1;-ms-grid-row:span 1;grid-row-start:span 1;-ms-grid-row-span:1;grid-row-end:span 1}#w-node-_5f424ac0-43a3-ee9f-1aae-debe89eae747-f0bb7bb1{-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1;-ms-grid-row:span 1;grid-row-start:span 1;-ms-grid-row-span:1;grid-row-end:span 1}#w-node-_40b2ac0a-a419-5f07-e746-bf74698817fa-f0bb7bb1{-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1;-ms-grid-row:span 1;grid-row-start:span 1;-ms-grid-row-span:1;grid-row-end:span 1}#w-node-_2eefebc8-e390-ff17-3848-4f491b1c5bac-f0bb7bb1{-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1;-ms-grid-row:span 1;grid-row-start:span 1;-ms-grid-row-span:1;grid-row-end:span 1}#w-node-_2eefebc8-e390-ff17-3848-4f491b1c5bad-f0bb7bb1{-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1;-ms-grid-row:span 1;grid-row-start:span 1;-ms-grid-row-span:1;grid-row-end:span 1}#w-node-_3e2edc09-6a91-3bca-8007-06c4d4d48ea4-f0bb7bb1{-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1;-ms-grid-row:span 1;grid-row-start:span 1;-ms-grid-row-span:1;grid-row-end:span 1}#w-node-_3e2edc09-6a91-3bca-8007-06c4d4d48ea5-f0bb7bb1{-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1;-ms-grid-row:span 1;grid-row-start:span 1;-ms-grid-row-span:1;grid-row-end:span 1}#w-node-b8bd58d2-a824-3155-a545-09f65f41a204-f0bb7bb1{-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1;-ms-grid-row:span 1;grid-row-start:span 1;-ms-grid-row-span:1;grid-row-end:span 1;-ms-grid-row-align:auto;align-self:auto}#w-node-_3e2edc09-6a91-3bca-8007-06c4d4d48eb0-f0bb7bb1{-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1;-ms-grid-row:span 1;grid-row-start:span 1;-ms-grid-row-span:1;grid-row-end:span 1}#w-node-_3e2edc09-6a91-3bca-8007-06c4d4d48eb1-f0bb7bb1{-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1;-ms-grid-row:span 1;grid-row-start:span 1;-ms-grid-row-span:1;grid-row-end:span 1}#w-node-_3e2edc09-6a91-3bca-8007-06c4d4d48eaa-f0bb7bb1{-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1;-ms-grid-row:span 1;grid-row-start:span 1;-ms-grid-row-span:1;grid-row-end:span 1;-ms-grid-row-align:auto;align-self:auto}#w-node-_3e2edc09-6a91-3bca-8007-06c4d4d48eab-f0bb7bb1{-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1;-ms-grid-row:span 1;grid-row-start:span 1;-ms-grid-row-span:1;grid-row-end:span 1}#w-node-_8d0f0063-3631-cc5b-4526-62ee775a63f3-f0bb7bb1{-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1;-ms-grid-row:span 1;grid-row-start:span 1;-ms-grid-row-span:1;grid-row-end:span 1}#w-node-_326dca32-915b-1f1e-0f94-418f9cacafe1-f0bb7bb1{-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1;-ms-grid-row:span 1;grid-row-start:span 1;-ms-grid-row-span:1;grid-row-end:span 1;-ms-grid-row-align:auto;align-self:auto}#w-node-_326dca32-915b-1f1e-0f94-418f9cacafe2-f0bb7bb1{-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1;-ms-grid-row:span 1;grid-row-start:span 1;-ms-grid-row-span:1;grid-row-end:span 1}#w-node-_750608f9-f32d-87fd-dd8f-54df27168d65-f0bb7bb1{-ms-grid-column:1;grid-column-start:1;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row:1;grid-row-start:1;-ms-grid-row-span:1;grid-row-end:2}#w-node-_750608f9-f32d-87fd-dd8f-54df27168d6b-f0bb7bb1{-ms-grid-column:2;grid-column-start:2;-ms-grid-column-span:1;grid-column-end:3;-ms-grid-row:1;grid-row-start:1;-ms-grid-row-span:1;grid-row-end:2}#w-node-_750608f9-f32d-87fd-dd8f-54df27168d6d-f0bb7bb1{-ms-grid-column:2;grid-column-start:2;-ms-grid-column-span:1;grid-column-end:3;-ms-grid-row:1;grid-row-start:1;-ms-grid-row-span:1;grid-row-end:2}#w-node-_750608f9-f32d-87fd-dd8f-54df27168d73-f0bb7bb1{-ms-grid-column:1;grid-column-start:1;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row:1;grid-row-start:1;-ms-grid-row-span:1;grid-row-end:2}#w-node-aa23cb0a-a75f-902e-63bc-3942f5aa44b7-f0bb7bb1{-ms-grid-column:1;grid-column-start:1;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row:1;grid-row-start:1;-ms-grid-row-span:1;grid-row-end:2}#w-node-aa23cb0a-a75f-902e-63bc-3942f5aa44ce-f0bb7bb1{-ms-grid-column:2;grid-column-start:2;-ms-grid-column-span:1;grid-column-end:3;-ms-grid-row:1;grid-row-start:1;-ms-grid-row-span:1;grid-row-end:2}#w-node-aa23cb0a-a75f-902e-63bc-3942f5aa44d0-f0bb7bb1{-ms-grid-column:2;grid-column-start:2;-ms-grid-column-span:1;grid-column-end:3;-ms-grid-row:1;grid-row-start:1;-ms-grid-row-span:1;grid-row-end:2}#w-node-aa23cb0a-a75f-902e-63bc-3942f5aa44e5-f0bb7bb1{-ms-grid-column:1;grid-column-start:1;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row:1;grid-row-start:1;-ms-grid-row-span:1;grid-row-end:2}#w-node-_430c6b7b-0398-5139-44ac-1781f7e22c80-d8e5e215{-webkit-align-self:start;-ms-flex-item-align:start;-ms-grid-row-align:start;align-self:start}#w-node-_017fb73d-fdb5-6a59-16eb-5d046a401645-d8e5e215{-webkit-align-self:start;-ms-flex-item-align:start;-ms-grid-row-align:start;align-self:start}#w-node-cdbfb347-2ec9-60c1-f9f0-f249dfc9fc3f-d8e5e215{-webkit-align-self:start;-ms-flex-item-align:start;-ms-grid-row-align:start;align-self:start}#w-node-e46a8671-545e-30f8-3f77-90049356d6cd-237eb781{-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1;-ms-grid-row:span 1;grid-row-start:span 1;-ms-grid-row-span:1;grid-row-end:span 1}#w-node-_0c4646b8-c154-aa87-6d68-34821583b7e2-237eb781{-webkit-align-self:center;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}#w-node-_5618da03-46de-2148-7906-fe9ba447598c-237eb781{-webkit-align-self:center;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}#w-node-_4309d029-136a-8835-4c9c-8a30c2c36392-237eb781{-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1;-ms-grid-row:span 1;grid-row-start:span 1;-ms-grid-row-span:1;grid-row-end:span 1}#w-node-_2221f85b-be70-e7b8-b976-1853d7120d21-237eb781{-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1;-ms-grid-row:span 1;grid-row-start:span 1;-ms-grid-row-span:1;grid-row-end:span 1}#w-node-_2221f85b-be70-e7b8-b976-1853d7120d22-237eb781{-webkit-align-self:center;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}#w-node-_2221f85b-be70-e7b8-b976-1853d7120d24-237eb781{-webkit-align-self:center;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}#w-node-_06955975-d0bf-1c6e-26c0-984ea91e3ef5-237eb781{-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1;-ms-grid-row:span 1;grid-row-start:span 1;-ms-grid-row-span:1;grid-row-end:span 1}#w-node-f43c0d1b-5eaf-cdbd-13a1-43a2c7767c4b-237eb781{-ms-grid-column:1;grid-column-start:1;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row:1;grid-row-start:1;-ms-grid-row-span:1;grid-row-end:2}#w-node-f43c0d1b-5eaf-cdbd-13a1-43a2c7767c64-237eb781{-ms-grid-column:2;grid-column-start:2;-ms-grid-column-span:1;grid-column-end:3;-ms-grid-row:1;grid-row-start:1;-ms-grid-row-span:1;grid-row-end:2}#w-node-f43c0d1b-5eaf-cdbd-13a1-43a2c7767c66-237eb781{-ms-grid-column:2;grid-column-start:2;-ms-grid-column-span:1;grid-column-end:3;-ms-grid-row:1;grid-row-start:1;-ms-grid-row-span:1;grid-row-end:2}#w-node-f43c0d1b-5eaf-cdbd-13a1-43a2c7767c7d-237eb781{-ms-grid-column:1;grid-column-start:1;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row:1;grid-row-start:1;-ms-grid-row-span:1;grid-row-end:2}#w-node-_0c4646b8-c154-aa87-6d68-34821583b7e2-1aaf7b5f{-webkit-align-self:center;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}#w-node-_5618da03-46de-2148-7906-fe9ba447598c-1aaf7b5f{-webkit-align-self:center;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;-ms-grid-column-align:end;justify-self:end}#w-node-_06955975-d0bf-1c6e-26c0-984ea91e3ef5-1aaf7b5f{-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1;-ms-grid-row:span 1;grid-row-start:span 1;-ms-grid-row-span:1;grid-row-end:span 1}#w-node-f43c0d1b-5eaf-cdbd-13a1-43a2c7767c4b-1aaf7b5f{-ms-grid-column:1;grid-column-start:1;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row:1;grid-row-start:1;-ms-grid-row-span:1;grid-row-end:2}#w-node-f43c0d1b-5eaf-cdbd-13a1-43a2c7767c64-1aaf7b5f{-ms-grid-column:2;grid-column-start:2;-ms-grid-column-span:1;grid-column-end:3;-ms-grid-row:1;grid-row-start:1;-ms-grid-row-span:1;grid-row-end:2}#w-node-f43c0d1b-5eaf-cdbd-13a1-43a2c7767c66-1aaf7b5f{-ms-grid-column:2;grid-column-start:2;-ms-grid-column-span:1;grid-column-end:3;-ms-grid-row:1;grid-row-start:1;-ms-grid-row-span:1;grid-row-end:2}#w-node-f43c0d1b-5eaf-cdbd-13a1-43a2c7767c7d-1aaf7b5f{-ms-grid-column:1;grid-column-start:1;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row:1;grid-row-start:1;-ms-grid-row-span:1;grid-row-end:2}#w-node-a432bb9a-2b88-3dbe-adc6-5ba587b1a2cb-1aaf7b5f{-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1;-ms-grid-row:span 1;grid-row-start:span 1;-ms-grid-row-span:1;grid-row-end:span 1}#w-node-_6dceef8a-0bdf-77a9-76b5-7bbffaf7c332-1aaf7b5f{-ms-grid-column:1;grid-column-start:1;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row:1;grid-row-start:1;-ms-grid-row-span:1;grid-row-end:2}#w-node-_6dceef8a-0bdf-77a9-76b5-7bbffaf7c350-1aaf7b5f{-ms-grid-column:2;grid-column-start:2;-ms-grid-column-span:1;grid-column-end:3;-ms-grid-row:1;grid-row-start:1;-ms-grid-row-span:1;grid-row-end:2}#w-node-_52e56b50-1daa-a360-b0da-edc9bcea8c2c-1aaf7b5f{-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1;-ms-grid-row:span 1;grid-row-start:span 1;-ms-grid-row-span:1;grid-row-end:span 1}#w-node-_8f34195a-6b19-dba4-1914-60fd704babc0-1aaf7b5f{-ms-grid-column:2;grid-column-start:2;-ms-grid-column-span:1;grid-column-end:3;-ms-grid-row:1;grid-row-start:1;-ms-grid-row-span:1;grid-row-end:2}#w-node-_8f34195a-6b19-dba4-1914-60fd704babd5-1aaf7b5f{-ms-grid-column:1;grid-column-start:1;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row:1;grid-row-start:1;-ms-grid-row-span:1;grid-row-end:2}#w-node-_7a55ac5d-a2fb-6822-086d-a79d2a5ae9f4-1aaf7b5f{-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1;-ms-grid-row:span 1;grid-row-start:span 1;-ms-grid-row-span:1;grid-row-end:span 1}#w-node-f7ae57df-03b1-5879-40e3-ee8809deddca-1aaf7b5f{-ms-grid-row:span 1;grid-row-start:span 1;-ms-grid-row-span:1;grid-row-end:span 1;-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1}#w-node-ec4a65ea-2635-3d98-0695-1bc7d4b2d1ee-1aaf7b5f{-ms-grid-column:1;grid-column-start:1;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row:1;grid-row-start:1;-ms-grid-row-span:1;grid-row-end:2}#w-node-ec4a65ea-2635-3d98-0695-1bc7d4b2d209-1aaf7b5f{-ms-grid-column:2;grid-column-start:2;-ms-grid-column-span:1;grid-column-end:3;-ms-grid-row:1;grid-row-start:1;-ms-grid-row-span:1;grid-row-end:2}#w-node-_3841df74-a5be-6fe6-31dd-2360ff14b395-1aaf7b5f{-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1;-ms-grid-row:span 1;grid-row-start:span 1;-ms-grid-row-span:1;grid-row-end:span 1}#w-node-_5d67654f-59c9-e90f-b363-6ef1cdd1d6bf-1aaf7b5f{-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1;-ms-grid-row:span 1;grid-row-start:span 1;-ms-grid-row-span:1;grid-row-end:span 1}#w-node-_3268cdc1-325c-5d94-ab5e-b2f8eca9a4e3-1aaf7b5f{-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1;-ms-grid-row:span 1;grid-row-start:span 1;-ms-grid-row-span:1;grid-row-end:span 1}#w-node-e46a8671-545e-30f8-3f77-90049356d6cd-d6373161{-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1;-ms-grid-row:span 1;grid-row-start:span 1;-ms-grid-row-span:1;grid-row-end:span 1;-ms-grid-column-align:auto;justify-self:auto;-ms-grid-row-align:auto;align-self:auto}#w-node-_0c4646b8-c154-aa87-6d68-34821583b7e2-d6373161{-webkit-align-self:center;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}#w-node-_5618da03-46de-2148-7906-fe9ba447598c-d6373161{-webkit-align-self:center;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}#w-node-_4309d029-136a-8835-4c9c-8a30c2c36392-d6373161{-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1;-ms-grid-row:span 1;grid-row-start:span 1;-ms-grid-row-span:1;grid-row-end:span 1}#w-node-_2221f85b-be70-e7b8-b976-1853d7120d21-d6373161{-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1;-ms-grid-row:span 1;grid-row-start:span 1;-ms-grid-row-span:1;grid-row-end:span 1}#w-node-_2221f85b-be70-e7b8-b976-1853d7120d22-d6373161{-webkit-align-self:center;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}#w-node-_2221f85b-be70-e7b8-b976-1853d7120d24-d6373161{-webkit-align-self:center;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}#w-node-_06955975-d0bf-1c6e-26c0-984ea91e3ef5-d6373161{-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1;-ms-grid-row:span 1;grid-row-start:span 1;-ms-grid-row-span:1;grid-row-end:span 1}#w-node-f43c0d1b-5eaf-cdbd-13a1-43a2c7767c4b-d6373161{-ms-grid-column:1;grid-column-start:1;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row:1;grid-row-start:1;-ms-grid-row-span:1;grid-row-end:2}#w-node-f43c0d1b-5eaf-cdbd-13a1-43a2c7767c64-d6373161{-ms-grid-column:2;grid-column-start:2;-ms-grid-column-span:1;grid-column-end:3;-ms-grid-row:1;grid-row-start:1;-ms-grid-row-span:1;grid-row-end:2}#w-node-_3dce43be-7d10-8077-a3b6-6c35c7fbf44e-d6373161{-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1;-ms-grid-row:span 1;grid-row-start:span 1;-ms-grid-row-span:1;grid-row-end:span 1}#w-node-_3dce43be-7d10-8077-a3b6-6c35c7fbf46a-d6373161{-ms-grid-column:1;grid-column-start:1;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row:1;grid-row-start:1;-ms-grid-row-span:1;grid-row-end:2}#w-node-_3dce43be-7d10-8077-a3b6-6c35c7fbf486-d6373161{-ms-grid-column:2;grid-column-start:2;-ms-grid-column-span:1;grid-column-end:3;-ms-grid-row:1;grid-row-start:1;-ms-grid-row-span:1;grid-row-end:2}@media screen and (max-width: 991px){#w-node-_750608f9-f32d-87fd-dd8f-54df27168d65-f0bb7bb1{-ms-grid-column:1;grid-column-start:1;-ms-grid-row:2;grid-row-start:2;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row-span:1;grid-row-end:3}#w-node-_750608f9-f32d-87fd-dd8f-54df27168d6b-f0bb7bb1{-ms-grid-column:1;grid-column-start:1;-ms-grid-row:1;grid-row-start:1;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row-span:1;grid-row-end:2}#w-node-_750608f9-f32d-87fd-dd8f-54df27168d6d-f0bb7bb1{-ms-grid-column:1;grid-column-start:1;-ms-grid-row:2;grid-row-start:2;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row-span:1;grid-row-end:3}#w-node-_750608f9-f32d-87fd-dd8f-54df27168d73-f0bb7bb1{-ms-grid-column:1;grid-column-start:1;-ms-grid-row:1;grid-row-start:1;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row-span:1;grid-row-end:2}#w-node-aa23cb0a-a75f-902e-63bc-3942f5aa44b7-f0bb7bb1{-ms-grid-column:1;grid-column-start:1;-ms-grid-row:2;grid-row-start:2;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row-span:1;grid-row-end:3}#w-node-aa23cb0a-a75f-902e-63bc-3942f5aa44ce-f0bb7bb1{-ms-grid-column:1;grid-column-start:1;-ms-grid-row:1;grid-row-start:1;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row-span:1;grid-row-end:2}#w-node-aa23cb0a-a75f-902e-63bc-3942f5aa44d0-f0bb7bb1{-ms-grid-column:1;grid-column-start:1;-ms-grid-row:2;grid-row-start:2;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row-span:1;grid-row-end:3}#w-node-aa23cb0a-a75f-902e-63bc-3942f5aa44e5-f0bb7bb1{-ms-grid-column:1;grid-column-start:1;-ms-grid-row:1;grid-row-start:1;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row-span:1;grid-row-end:2}#w-node-_430c6b7b-0398-5139-44ac-1781f7e22c80-d8e5e215{-ms-grid-column-span:1;grid-column-end:2;-ms-grid-column:1;grid-column-start:1;-ms-grid-row-span:1;grid-row-end:3;-ms-grid-row:2;grid-row-start:2}#w-node-_017fb73d-fdb5-6a59-16eb-5d046a401645-d8e5e215{-ms-grid-column-span:1;grid-column-end:2;-ms-grid-column:1;grid-column-start:1;-ms-grid-row-span:1;grid-row-end:3;-ms-grid-row:2;grid-row-start:2}#w-node-cdbfb347-2ec9-60c1-f9f0-f249dfc9fc3f-d8e5e215{-ms-grid-column-span:1;grid-column-end:2;-ms-grid-column:1;grid-column-start:1;-ms-grid-row-span:1;grid-row-end:3;-ms-grid-row:2;grid-row-start:2}#w-node-e46a8671-545e-30f8-3f77-90049356d6cd-237eb781{-ms-grid-column:1;grid-column-start:1;-ms-grid-row:1;grid-row-start:1;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row-span:1;grid-row-end:2}#w-node-_2221f85b-be70-e7b8-b976-1853d7120d21-237eb781{-ms-grid-column:1;grid-column-start:1;-ms-grid-row:1;grid-row-start:1;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row-span:1;grid-row-end:2}#w-node-_06955975-d0bf-1c6e-26c0-984ea91e3ef5-237eb781{-ms-grid-column:1;grid-column-start:1;-ms-grid-row:1;grid-row-start:1;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row-span:1;grid-row-end:2}#w-node-f43c0d1b-5eaf-cdbd-13a1-43a2c7767c4b-237eb781{-ms-grid-column:1;grid-column-start:1;-ms-grid-row:2;grid-row-start:2;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row-span:1;grid-row-end:3}#w-node-f43c0d1b-5eaf-cdbd-13a1-43a2c7767c64-237eb781{-ms-grid-column:1;grid-column-start:1;-ms-grid-row:1;grid-row-start:1;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row-span:1;grid-row-end:2}#w-node-f43c0d1b-5eaf-cdbd-13a1-43a2c7767c66-237eb781{-ms-grid-column:1;grid-column-start:1;-ms-grid-row:2;grid-row-start:2;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row-span:1;grid-row-end:3}#w-node-f43c0d1b-5eaf-cdbd-13a1-43a2c7767c7d-237eb781{-ms-grid-column:1;grid-column-start:1;-ms-grid-row:1;grid-row-start:1;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row-span:1;grid-row-end:2}#w-node-_06955975-d0bf-1c6e-26c0-984ea91e3ef5-1aaf7b5f{-ms-grid-column:1;grid-column-start:1;-ms-grid-row:1;grid-row-start:1;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row-span:1;grid-row-end:2}#w-node-f43c0d1b-5eaf-cdbd-13a1-43a2c7767c4b-1aaf7b5f{-ms-grid-column:1;grid-column-start:1;-ms-grid-row:2;grid-row-start:2;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row-span:1;grid-row-end:3}#w-node-f43c0d1b-5eaf-cdbd-13a1-43a2c7767c64-1aaf7b5f{-ms-grid-column:1;grid-column-start:1;-ms-grid-row:1;grid-row-start:1;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row-span:1;grid-row-end:2}#w-node-f43c0d1b-5eaf-cdbd-13a1-43a2c7767c66-1aaf7b5f{-ms-grid-column:1;grid-column-start:1;-ms-grid-row:2;grid-row-start:2;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row-span:1;grid-row-end:3}#w-node-f43c0d1b-5eaf-cdbd-13a1-43a2c7767c7d-1aaf7b5f{-ms-grid-column:1;grid-column-start:1;-ms-grid-row:1;grid-row-start:1;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row-span:1;grid-row-end:2}#w-node-a432bb9a-2b88-3dbe-adc6-5ba587b1a2cb-1aaf7b5f{-ms-grid-column:1;grid-column-start:1;-ms-grid-row:1;grid-row-start:1;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row-span:1;grid-row-end:2}#w-node-_6dceef8a-0bdf-77a9-76b5-7bbffaf7c332-1aaf7b5f{-ms-grid-column:1;grid-column-start:1;-ms-grid-row:2;grid-row-start:2;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row-span:1;grid-row-end:3}#w-node-_6dceef8a-0bdf-77a9-76b5-7bbffaf7c350-1aaf7b5f{-ms-grid-column:1;grid-column-start:1;-ms-grid-row:1;grid-row-start:1;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row-span:1;grid-row-end:2}#w-node-_52e56b50-1daa-a360-b0da-edc9bcea8c2c-1aaf7b5f{-ms-grid-column:1;grid-column-start:1;-ms-grid-row:1;grid-row-start:1;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row-span:1;grid-row-end:2}#w-node-_8f34195a-6b19-dba4-1914-60fd704babc0-1aaf7b5f{-ms-grid-column:1;grid-column-start:1;-ms-grid-row:2;grid-row-start:2;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row-span:1;grid-row-end:3}#w-node-_8f34195a-6b19-dba4-1914-60fd704babd5-1aaf7b5f{-ms-grid-column:1;grid-column-start:1;-ms-grid-row:1;grid-row-start:1;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row-span:1;grid-row-end:2}#w-node-ec4a65ea-2635-3d98-0695-1bc7d4b2d1ee-1aaf7b5f{-ms-grid-column:1;grid-column-start:1;-ms-grid-row:2;grid-row-start:2;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row-span:1;grid-row-end:3}#w-node-ec4a65ea-2635-3d98-0695-1bc7d4b2d209-1aaf7b5f{-ms-grid-column:1;grid-column-start:1;-ms-grid-row:1;grid-row-start:1;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row-span:1;grid-row-end:2}#w-node-_3841df74-a5be-6fe6-31dd-2360ff14b395-1aaf7b5f{-ms-grid-column:1;grid-column-start:1;-ms-grid-row:1;grid-row-start:1;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row-span:1;grid-row-end:2}#w-node-_5d67654f-59c9-e90f-b363-6ef1cdd1d6bf-1aaf7b5f{-ms-grid-column:1;grid-column-start:1;-ms-grid-row:1;grid-row-start:1;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row-span:1;grid-row-end:2}#w-node-_3268cdc1-325c-5d94-ab5e-b2f8eca9a4e3-1aaf7b5f{-ms-grid-column:1;grid-column-start:1;-ms-grid-row:1;grid-row-start:1;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row-span:1;grid-row-end:2}#w-node-e46a8671-545e-30f8-3f77-90049356d6cd-d6373161{-ms-grid-column:1;grid-column-start:1;-ms-grid-row:1;grid-row-start:1;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row-span:1;grid-row-end:2}#w-node-_2221f85b-be70-e7b8-b976-1853d7120d21-d6373161{-ms-grid-column:1;grid-column-start:1;-ms-grid-row:1;grid-row-start:1;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row-span:1;grid-row-end:2}#w-node-_06955975-d0bf-1c6e-26c0-984ea91e3ef5-d6373161{-ms-grid-column:1;grid-column-start:1;-ms-grid-row:1;grid-row-start:1;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row-span:1;grid-row-end:2}#w-node-f43c0d1b-5eaf-cdbd-13a1-43a2c7767c4b-d6373161{-ms-grid-column:1;grid-column-start:1;-ms-grid-row:2;grid-row-start:2;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row-span:1;grid-row-end:3}#w-node-f43c0d1b-5eaf-cdbd-13a1-43a2c7767c64-d6373161{-ms-grid-column:1;grid-column-start:1;-ms-grid-row:1;grid-row-start:1;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row-span:1;grid-row-end:2}#w-node-_3dce43be-7d10-8077-a3b6-6c35c7fbf44e-d6373161{-ms-grid-column:1;grid-column-start:1;-ms-grid-row:1;grid-row-start:1;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row-span:1;grid-row-end:2}#w-node-_3dce43be-7d10-8077-a3b6-6c35c7fbf46a-d6373161{-ms-grid-column:1;grid-column-start:1;-ms-grid-row:2;grid-row-start:2;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row-span:1;grid-row-end:3}#w-node-_3dce43be-7d10-8077-a3b6-6c35c7fbf486-d6373161{-ms-grid-column:1;grid-column-start:1;-ms-grid-row:1;grid-row-start:1;-ms-grid-column-span:1;grid-column-end:2;-ms-grid-row-span:1;grid-row-end:2}}
      `}</style>
      <div
        data-w-id="672d3939-dda5-4c76-5feb-8a887e3c5771"
        className="div_sticky"
      >
        <a
          href="https://gourmetlavanguardia.com/categoria/2/conservas-de-mar"
          className="link-sticky w-inline-block"
        >
          <img
            src="/images/conservas-de-mar.jpg"
            id="w-node-e46a8671-545e-30f8-3f77-90049356d6cd-d6373161"
            alt="comprar aceite de trufa caviaroli"
            className="image-6 contain sticky"
          />
          <p
            id="w-node-_0c4646b8-c154-aa87-6d68-34821583b7e2-d6373161"
            className="paragraph-2 _20px padding_left sticky"
          >
            Conservas de Mar Gourmet
          </p>
          <div
            id="w-node-_5618da03-46de-2148-7906-fe9ba447598c-d6373161"
            className="button-2 sticky"
          >
            <div className="text-block-32">VER TODO</div>
          </div>
        </a>
        <div
          id="w-node-_4309d029-136a-8835-4c9c-8a30c2c36392-d6373161"
          className="div-block-105"
        />
        <a
          href="https://gourmetlavanguardia.com/categoria/10280/conservas-de-tierra"
          className="link-sticky w-inline-block"
        >
          <img
            src="/images/conservas-de-mar-1.jpg"
            id="w-node-_2221f85b-be70-e7b8-b976-1853d7120d21-d6373161"
            alt="comprar aceite de trufa caviaroli"
            className="image-6 contain sticky"
          />
          <p
            id="w-node-_2221f85b-be70-e7b8-b976-1853d7120d22-d6373161"
            className="paragraph-2 _20px sticky"
          >
            Conservas de Tierra Gourmet
          </p>
          <div
            id="w-node-_2221f85b-be70-e7b8-b976-1853d7120d24-d6373161"
            className="button-2 sticky"
          >
            <div className="text-block-32">VER TODO</div>
          </div>
        </a>
      </div>
      <div className="columns w-row">
        <div className="column w-col w-col-6 w-col-stack">
          <a
            href="https://gourmetlavanguardia.com/"
            target="_blank"
            className="div-link-home w-inline-block"
          >
            <img
              src="/images/unnamed.jpg"
              loading="lazy"
              width={269}
              alt="regalos gourmet online en gourmet la vanguardia"
              className="image-7"
            />
          </a>
          <div className="div-block">
            <h1 className="heading">
              <strong>Conservas gourmet : </strong>delicatessen en lata
            </h1>
            <p className="paragraph">
              Ya sean conservas de mar o conservas de tierra, encontrarás una
              gran selección en nuestras secciones de conservas gourmet. A
              continuación te dejamos las claves para comprar las{' '}
              <strong>mejores conservas gourmet online</strong>.
            </p>
            <div>
              <a href="#conservas-de-mar" className="button w-button">
                VER CONSERVAS DE MAR
              </a>
              <a
                href="#conservas-de-tierra"
                className="button padding_left w-button"
              >
                VER CONSERVAS DE TIERRA
              </a>
            </div>
          </div>
        </div>
        <div className="column-2 w-col w-col-6 w-col-stack">
          <img
            src="/images/conservas-gourmet-latas-a-domicilio-1.jpg"
            loading="lazy"
            srcSet="/images/conservas-gourmet-latas-a-domicilio-1-p-500.jpeg 500w, /images/conservas-gourmet-latas-a-domicilio-1-p-800.jpeg 800w, /images/conservas-gourmet-latas-a-domicilio-1.jpg 1024w"
            width={960}
            alt="conservas gourmet online"
            sizes="(max-width: 479px) 86vw, (max-width: 767px) 85vw, (max-width: 991px) 81vw, (max-width: 1439px) 45vw, (max-width: 1919px) 46vw, 816px"
            className="image-header"
          />
        </div>
      </div>
      <div className="container-2">
        <div className="divider" />
        <div className="motto-wrap" />
        <div id="aceites-de-trufa" className="home-content-wrap">
          <p className="paragraph-light middle-text padding_down">
            Las <strong>conservas gourmet</strong> son una gran solución para
            esos días en los que no puedes permitirte el lujo de elaborar tus
            platos por falta de tiempo.{' '}
            <strong>Comprar conservas gourmet </strong>nunca fue tan fácil
            gracias a la tienda online de Gourmet La Vanguardia. Elige tu lata o{' '}
            <strong>bote de conservas delicatessen</strong> y asegúrate de que
            todo lo que comes, tanto tú como los tuyos, tiene sello gourmet.
          </p>
          <h2
            id="conservas-de-mar"
            className="section-heading middle_text padding_down padding_up"
          >
            <strong className="bold-text">
              Las conservas gourmet de mar más populares
            </strong>
            <a href="https://gourmetlavanguardia.com/categoria/2/conservas-de-mar" />
          </h2>
          <div className="w-layout-grid about-grid cc-about-2 modified _4_columns">
            <a
              data-w-id="d147c489-2c1e-02f2-a2e2-cac4a288a01c"
              href="https://gourmetlavanguardia.com/producto/2886/frantoio-di-santagata-pimientos-rellenos-de-atun-anchoas-alcaparras-280g"
              className="div-block-3 w-inline-block"
            >
              <img
                src="/images/FRANTOIODISANTAGATA-Pimientos-rellenos-Atún-anchoas-Alcaparras-280g.jpg"
                id="w-node-_06955975-d0bf-1c6e-26c0-984ea91e3ef5-d6373161"
                srcSet="/images/FRANTOIODISANTAGATA-Pimientos-rellenos-Atún-anchoas-Alcaparras-280g-p-500.jpeg 500w, /images/FRANTOIODISANTAGATA-Pimientos-rellenos-Atún-anchoas-Alcaparras-280g.jpg 555w"
                sizes="(max-width: 479px) 74vw, (max-width: 767px) 72vw, (max-width: 1439px) 87vw, 1008px"
                alt="Pimientos rellenos de Atún, anchoas, Alcaparras 280g"
                className="image-6 contain petit"
              />
              <p className="paragraph-2 _20px">
                Pimientos rellenos de Atún, anchoas, Alcaparras 280g
              </p>
              <div className="button-2">
                <div
                  style={{ backgroundColor: 'rgb(177,136,30)' }}
                  className="text-block-32"
                >
                  VER PRECIO
                </div>
              </div>
            </a>
            <a
              data-w-id="ad1336cc-6fee-75f6-25df-0d62e8065758"
              href="https://gourmetlavanguardia.com/producto/3049/arrom-sardina-marinada-con-albahaca-100g"
              target="_blank"
              className="div-block-3 w-inline-block"
            >
              <img
                src="/images/ARROM-sardina-marinadaconalbahaca-100g.png"
                srcSet="/images/ARROM-sardina-marinadaconalbahaca-100g-p-500.png 500w, /images/ARROM-sardina-marinadaconalbahaca-100g.png 555w"
                sizes="(max-width: 479px) 74vw, (max-width: 767px) 72vw, (max-width: 1439px) 87vw, 1008px"
                alt="ARROM Sardina Marinada con Albahaca 100g"
                className="image-6 contain petit"
              />
              <p className="paragraph-2 _20px">
                ARROM Sardina Marinada con Albahaca 100g
              </p>
              <div className="button-2">
                <div
                  style={{ backgroundColor: 'rgb(177,136,30)' }}
                  className="text-block-32"
                >
                  VER PRECIO
                </div>
              </div>
            </a>
            <a
              data-w-id="eb27d32c-46b1-b833-e1d6-2d908f0f41d3"
              href="https://gourmetlavanguardia.com/producto/290/sturia-caviar-classic-50g"
              className="div-block-3 w-inline-block"
            >
              <img
                src="/images/CAVIAR-CONSERVA-GOURMET.jpg"
                srcSet="/images/CAVIAR-CONSERVA-GOURMET-p-500.jpeg 500w, /images/CAVIAR-CONSERVA-GOURMET.jpg 555w"
                sizes="(max-width: 479px) 74vw, (max-width: 767px) 72vw, (max-width: 1439px) 87vw, 1008px"
                alt="COMPRAR CONSERVA DE CAVIAR"
                className="image-6 contain petit"
              />
              <p className="paragraph-2 _20px">STURIA Caviar Classic 50g</p>
              <div className="button-2">
                <div
                  style={{ backgroundColor: 'rgb(177,136,30)' }}
                  className="text-block-32"
                >
                  VER PRECIO
                </div>
              </div>
            </a>
            <a
              data-w-id="665231a2-62a9-562c-84db-6a295f3735f5"
              href="https://gourmetlavanguardia.com/producto/2598/anxoves-de-lescala-filetes-anchoa-en-aceite-de-oliva-80g"
              className="div-block-3 w-inline-block"
            >
              <img
                src="/images/anxovesdelescala-filetes-aceiteoliva-80g_1.jpg"
                srcSet="/images/anxovesdelescala-filetes-aceiteoliva-80g_1-p-500.jpeg 500w, /images/anxovesdelescala-filetes-aceiteoliva-80g_1.jpg 555w"
                sizes="(max-width: 479px) 74vw, (max-width: 767px) 72vw, (max-width: 1439px) 87vw, 1008px"
                alt="comprar anxovas de l'escala"
                className="image-6 contain petit"
              />
              <p className="paragraph-2 _20px">STURIA Caviar Classic 50g</p>
              <div className="button-2">
                <div
                  style={{ backgroundColor: 'rgb(177,136,30)' }}
                  className="text-block-32"
                >
                  VER PRECIO
                </div>
              </div>
            </a>
          </div>
          <div className="w-layout-grid about-grid">
            <div id="w-node-f43c0d1b-5eaf-cdbd-13a1-43a2c7767c4b-d6373161">
              <div className="home-section-wrap">
                <p className="paragraph-light">
                  Las <strong>conservas de mar gourmet</strong> son un manjar
                  que puedes combinar con multitud de recetas en tu día a día.
                  Solas como aperitivo, como entrante o incluso en ensalada son{' '}
                  <strong>delicias gourmet, en conserva</strong> que puedes
                  disfrutar cada día.&nbsp;
                  <br />
                  <br />
                  Comprar conservas del mar gourmet es una muy buena opción si
                  eres amante de productos como el atún rojo, las anchoas, las
                  sardinas, el bonito, etc.&nbsp;
                  <br />
                  <br />
                  Hay algunas opciones que incluso mezclan ambos conceptos de{' '}
                  <strong>conserva gourmet de mar </strong>y de tierra, como
                  pueden ser los pimientos rellenos de atún, anchoas y
                  alcaparras. Lo mejor del mar y sus delicias, también en
                  conserva.
                  <br />
                  <br />
                  Visita{' '}
                  <a href="https://gourmetlavanguardia.com/categoria/2/conservas-de-mar">
                    nuestra sección
                  </a>{' '}
                  de <strong>conservas gourmet de mar</strong> y elige los
                  productos que más te gusten.
                </p>
              </div>
            </div>
            <img
              src="/images/conservas-de-mar.jpg"
              width={813}
              id="w-node-f43c0d1b-5eaf-cdbd-13a1-43a2c7767c64-d6373161"
              alt="conservas de mar"
              className="image-5 _400px"
            />
          </div>
        </div>
        <div id="aceites-de-trufa" className="home-content-wrap">
          <h2
            id="conservas-de-tierra"
            className="section-heading middle_text padding_down padding_up"
          >
            <strong className="bold-text">
              Las conservas gourmet de tierra más populares
            </strong>
            <a
              href="https://gourmetlavanguardia.com/categoria/2/conservas-de-mar"
              className="link_normal"
            />
          </h2>
          <div className="w-layout-grid about-grid cc-about-2 modified _4_columns">
            <a
              data-w-id="3dce43be-7d10-8077-a3b6-6c35c7fbf44d"
              href="https://gourmetlavanguardia.com/producto/2883/frantoio-di-santagata-aperitivo-real-en-aceite-de-oliva-virgen-extra-290g"
              className="div-block-3 w-inline-block"
            >
              <img
                src="/images/FRANTOIODISANTAGATA-Aperitivo-Real-Aceite-Oliva-VirgenExtra-290g.jpg"
                id="w-node-_3dce43be-7d10-8077-a3b6-6c35c7fbf44e-d6373161"
                srcSet="/images/FRANTOIODISANTAGATA-Aperitivo-Real-Aceite-Oliva-VirgenExtra-290g-p-500.jpeg 500w, /images/FRANTOIODISANTAGATA-Aperitivo-Real-Aceite-Oliva-VirgenExtra-290g.jpg 555w"
                sizes="(max-width: 479px) 74vw, (max-width: 767px) 72vw, (max-width: 1439px) 87vw, 1008px"
                alt="Aperitivo Real en Aceite de Oliva Virgen Extra 290g"
                className="image-6 contain petit"
              />
              <p className="paragraph-2 _20px">
                Aperitivo Real en Aceite de Oliva Virgen Extra 290g
              </p>
              <div className="button-2">
                <div
                  style={{ backgroundColor: 'rgb(177,136,30)' }}
                  className="text-block-32"
                >
                  VER PRECIO
                </div>
              </div>
            </a>
            <a
              data-w-id="3dce43be-7d10-8077-a3b6-6c35c7fbf454"
              href="https://gourmetlavanguardia.com/producto/263/adolfo-sadaba-tomate-entero-natural-660g"
              className="div-block-3 w-inline-block"
            >
              <img
                src="/images/adolfo-sadaba-tomate-entero-natural-gourmet.jpg"
                srcSet="/images/adolfo-sadaba-tomate-entero-natural-gourmet-p-500.jpeg 500w, /images/adolfo-sadaba-tomate-entero-natural-gourmet.jpg 555w"
                sizes="(max-width: 479px) 74vw, (max-width: 767px) 72vw, (max-width: 1439px) 87vw, 1008px"
                alt="adolfo sadaba tomate entero"
                className="image-6 contain petit"
              />
              <p className="paragraph-2 _20px">
                Tomate Entero Natural 660g Adolfo Sádaba
              </p>
              <div className="button-2">
                <div
                  style={{ backgroundColor: 'rgb(177,136,30)' }}
                  className="text-block-32"
                >
                  VER PRECIO
                </div>
              </div>
            </a>
            <a
              data-w-id="3dce43be-7d10-8077-a3b6-6c35c7fbf45b"
              href="https://gourmetlavanguardia.com/producto/2884/frantoio-di-santagata--alcachofas-nature-en-aceite-de-oliva-virgen-extra-650g"
              className="div-block-3 w-inline-block"
            >
              <img
                src="/images/FRANTOIODISANTAGATA-Alcachofas-Nature-aceite-oliva-virgen-extra-650g.png"
                srcSet="/images/FRANTOIODISANTAGATA-Alcachofas-Nature-aceite-oliva-virgen-extra-650g-p-500.png 500w, /images/FRANTOIODISANTAGATA-Alcachofas-Nature-aceite-oliva-virgen-extra-650g.png 555w"
                sizes="(max-width: 479px) 74vw, (max-width: 767px) 72vw, (max-width: 1439px) 87vw, 1008px"
                alt='Alcachofas "Nature" en aceite de oliva virgen extra 650g'
                className="image-6 contain petit"
              />
              <p className="paragraph-2 _20px">
                Alcachofas "Nature" en aceite de oliva virgen extra 650g
              </p>
              <div className="button-2">
                <div
                  style={{ backgroundColor: 'rgb(177,136,30)' }}
                  className="text-block-32"
                >
                  VER PRECIO
                </div>
              </div>
            </a>
            <a
              data-w-id="3dce43be-7d10-8077-a3b6-6c35c7fbf462"
              href="https://gourmetlavanguardia.com/producto/2061/adolfo-sadaba-pack-verduras-premium"
              target="_blank"
              className="div-block-3 w-inline-block"
            >
              <img
                src="/images/pack-gourmet-adolfo-sadaba.jpg"
                srcSet="/images/pack-gourmet-adolfo-sadaba-p-500.jpeg 500w, /images/pack-gourmet-adolfo-sadaba.jpg 555w"
                sizes="(max-width: 479px) 74vw, (max-width: 767px) 72vw, (max-width: 1439px) 87vw, 1008px"
                alt="comprar anxovas de l'escala"
                className="image-6 contain petit"
              />
              <p className="paragraph-2 _20px">
                Pack Verduras Premium Adolfo Sádaba
              </p>
              <div className="button-2">
                <div
                  style={{ backgroundColor: 'rgb(177,136,30)' }}
                  className="text-block-32"
                >
                  VER PRECIO
                </div>
              </div>
            </a>
          </div>
          <div className="w-layout-grid about-grid">
            <div id="w-node-_3dce43be-7d10-8077-a3b6-6c35c7fbf46a-d6373161">
              <div className="home-section-wrap">
                <p className="paragraph-light">
                  La tierra también tiene mucho que decir en lo que a conservas
                  se refiere.{' '}
                  <strong>Comprar conservas de tierra gourmet</strong> te
                  permitirá degustar una serie de productos de la tierra listos
                  para tus recetas rápidas.&nbsp;
                  <br />
                  <br />
                  Yemas de espárragos, pimientos, alcachofas, champiñones o
                  guisantes son algunas de las conservas de tierra gourmet que
                  podrás encontrar.&nbsp;
                  <br />
                  <br />
                  ¿Con qué puedes combinarlas? Pues con ensaladas, como
                  guarnición de alguna carne o pescado o también solas y
                  aliñadas. Siempre encontrarás estos productos jugosos y listos
                  para consumir. ¿Buscas una tienda de conservas donde
                  comprarlas? ¡
                  <a href="https://gourmetlavanguardia.com/">Aquí</a> tienes
                  una!
                </p>
              </div>
            </div>
            <img
              src="/images/conservas-de-mar-1.jpg"
              width={813}
              id="w-node-_3dce43be-7d10-8077-a3b6-6c35c7fbf486-d6373161"
              alt="conservas de tierra"
              className="image-5 _400px"
            />
          </div>
        </div>
      </div>

      <div className="container-hide w-container">
        <h2 className="section-heading">
          <strong>Latas de conserva gourmet:</strong> ventajas e inconvenientes
        </h2>
        <p className="paragraph-light">
          Muchas de las mejores conservas vienen en formato de{' '}
          <strong>latas de conserva gourmet. </strong>Pero muchas personas se
          preguntan<strong>, </strong>¿qué aporta una lata a las conservas
          gourmet? ¿Es mejor que un bote o un frasco de conservas? <br />
          <br />
          No hay una respuesta mejor que otra, pero podemos desgranar un poco
          las ventajas e inconvenientes de cada una.
          <br />
          <br />
          En primer lugar, facilita su producción, ya que las{' '}
          <strong>latas de conserva gourmet</strong> facilitan que los
          fabricantes puedan utilizar máquinas empacadoras para envasar
          automáticamente estos productos.&nbsp;
          <br />
          <br />A su vez, el envasado en <strong>latas de conserva </strong>
          proporcionan una gran protección a su contenido y son más fáciles de
          almacenar. Además, en su exposición al sol no se calientan tanto como
          los botes de cristal.
          <br />
          <br />
          Otra de las grandes ventajas de{' '}
          <strong>comprar latas de conserva </strong>es que pesan menos y si se
          caen tan solo se abollan y no suelen romperse con tanta facilidad como
          las de cristal.&nbsp;
          <br />
          <br />
          Por el contrario, una de sus grandes desventajas es que una vez se
          abre la lata no se pude volver a cerrar disminuyendo el tiempo de
          conservación permitido.{' '}
        </p>
        <div className="separador" />
        <h2 className="section-heading">
          <strong>Botes de cristal gourmet</strong>: ventajas e inconvenientes
        </h2>
        <p className="paragraph-light">
          Las <strong>conservas gourmet</strong> también suelen venir en otro
          tipo de envase, los <strong>botes de cristal gourmet</strong>{' '}
          transparentes. Precisamente esta transparencia permite una
          presentación un poco más premium, incluyendo diseño y etiqueta que
          probablemente da más posibilidades que una lata.
          <br />
          <br />
          En este caso, como se ve todo el contenido, los botes de cristal
          gourmet han de tener una presentación más cuidada, ya que podemos ver
          en todo momento su interior. El cristal no engaña.
          <br />
          <br />
          Además, su producción es más manual que las{' '}
          <strong>latas gourmet, </strong>ya que en estos botes se introduce el
          producto a mano para obtener una buena presentación. <br />
          <br />
          Otro punto a favor es que una vez abierto, admite un mayor tiempo de
          conservación, ya que normalmente vienen con tapa en rosca y son
          tremendamente reutilizables.
          <br />
          <br />
          Su nota negativa es que no son tan cómodos como las latas y no se
          apilan tan bien de cara a su almacenaje. A su vez, también pesan más y
          como todo cristal, si se cae hay un riesgo elevado de que se rompa y
          que se esparzan nuestras <strong>conservas gourmet</strong>.
        </p>
        <div className="separador" />
        <h2 className="section-heading">
          <strong>Conservas españolas:</strong> un país para comérselo
        </h2>
        <p className="paragraph-light">
          Las <strong>conservas españolas </strong>son reconocidas a nivel
          mundial. Y es que pocos países tienen tanta y tan buena materia prima
          como el nuestro.&nbsp;
          <br />
          <br />
          Hay varias marcas líderes en este mercado y no queremos dejar pasar la
          ocasión para mencionar alguna de ellas.
          <br />
          <br />
          Dos de las <strong>conserveras</strong> líderes en las{' '}
          <strong>conservas españolas</strong> de mar son Anxoves de l’Escala M.
          Sureda y Conservas Ortiz.
          <br />
          <br />
          <strong>Anxoves de l’Escala-M.Sureda</strong> es un referente desde
          1940. Gracias a su prestigiosa marca l’Escala y su manera de salar las
          anchoas se han situado entre las más prestigiosas del planeta en el
          sector de las <strong>conservas de anchoa,</strong> manteniendo la
          herencia de generaciones.&nbsp;
          <br />
          <br />
          Su color de madera rojiza elegante, brillante, con aromas marinos y
          sabor yodado, son reconocidos a lo largo y ancho del planeta, además
          de una auténtica delicia.
          <br />
          <br />
          Por otro lado, <strong>Conservas Ortiz</strong> es sinónimo de amor
          por el mar. Más de 130 años comprometidos con las técnicas ancestrales
          de pesca para llenar tu mesa de sabor y para que sigas descubriendo
          nuevas maneras de cuidarte cada día.
        </p>
        <div className="separador" />
        <h3>
          <strong>Conservas de Galicia</strong> gourmet, de lo más delicatessen
          de nuestro país.
        </h3>
        <p className="paragraph-light" style={{ paddingBottom: '100px' }}>
          Las <strong>conservas de Galicia </strong>son de las más gourmet de
          nuestro país. Y es que Galicia es una de las regiones con mayor
          tradición en la elaboración en conserva de pescados y mariscos,
          experiencia que les ha permitido mejorar todos sus procesos de
          elaboración manteniendo esa esencia artesana por la que se diferencian
          sus productos.
          <br />
          <br />
          Dentro de las mejores <strong>conservas gourmet gallegas</strong>,
          destacan las procedentes de las Rías de Noia y Muros, área donde buena
          parte de la población se dedica a la captura y elaboración en conserva
          de sus pescados y mariscos.&nbsp;Así, hay{' '}
          <strong>conservas delicatessen</strong> que todos reconocemos como
          mejillones en escabeche, sardinillas en aceite de oliva, navajas y
          zamburiñas.&nbsp;¡Ñam! ¡Qué ganas de volver a Galicia!
        </p>
      </div>
      <Script src="/js/jquery.js" />
      <Script strategy="lazyOnload" src="/js/webflow.js" />
    </div>
  );
};

export const getServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

export default EnsaladasGourmet;
