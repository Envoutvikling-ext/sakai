import{B as O,P as K,R as T,z,aj as h,_ as B,al as U,am as A,aI as R,a6 as H,ao as I,W as S,aJ as P,Z as N,an as k,a4 as M,k as j,C as Z,w as F,o as b,F as g,e as c,ar as q,m as x,D as V,q as J,c as w,n as D,d as W,r as f,at as G,a as n,A as d,u,s as m,I as _}from"./main-DX18YVhn.js";import{F as Y}from"./index-Bwyl5fL1.js";var Q=`
    .p-popover {
        margin-block-start: dt('popover.gutter');
        background: dt('popover.background');
        color: dt('popover.color');
        border: 1px solid dt('popover.border.color');
        border-radius: dt('popover.border.radius');
        box-shadow: dt('popover.shadow');
        will-change: transform;
    }

    .p-popover-content {
        padding: dt('popover.content.padding');
    }

    .p-popover-flipped {
        margin-block-start: calc(dt('popover.gutter') * -1);
        margin-block-end: dt('popover.gutter');
    }

    .p-popover:after,
    .p-popover:before {
        bottom: 100%;
        left: calc(dt('popover.arrow.offset') + dt('popover.arrow.left'));
        content: ' ';
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }

    .p-popover:after {
        border-width: calc(dt('popover.gutter') - 2px);
        margin-left: calc(-1 * (dt('popover.gutter') - 2px));
        border-style: solid;
        border-color: transparent;
        border-bottom-color: dt('popover.background');
    }

    .p-popover:before {
        border-width: dt('popover.gutter');
        margin-left: calc(-1 * dt('popover.gutter'));
        border-style: solid;
        border-color: transparent;
        border-bottom-color: dt('popover.border.color');
    }

    .p-popover-flipped:after,
    .p-popover-flipped:before {
        bottom: auto;
        top: 100%;
    }

    .p-popover.p-popover-flipped:after {
        border-bottom-color: transparent;
        border-top-color: dt('popover.background');
    }

    .p-popover.p-popover-flipped:before {
        border-bottom-color: transparent;
        border-top-color: dt('popover.border.color');
    }
`,X={root:"p-popover p-component",content:"p-popover-content"},$=O.extend({name:"popover",style:Q,classes:X}),ee={name:"BasePopover",extends:z,props:{dismissable:{type:Boolean,default:!0},appendTo:{type:[String,Object],default:"body"},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},breakpoints:{type:Object,default:null},closeOnEscape:{type:Boolean,default:!0}},style:$,provide:function(){return{$pcPopover:this,$parentInstance:this}}},L={name:"Popover",extends:ee,inheritAttrs:!1,emits:["show","hide"],data:function(){return{visible:!1}},watch:{dismissable:{immediate:!0,handler:function(e){e?this.bindOutsideClickListener():this.unbindOutsideClickListener()}}},selfClick:!1,target:null,eventTarget:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,styleElement:null,overlayEventListener:null,documentKeydownListener:null,beforeUnmount:function(){this.dismissable&&this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.destroyStyle(),this.unbindResizeListener(),this.target=null,this.container&&this.autoZIndex&&k.clear(this.container),this.overlayEventListener&&(h.off("overlay-click",this.overlayEventListener),this.overlayEventListener=null),this.container=null},mounted:function(){this.breakpoints&&this.createStyle()},methods:{toggle:function(e,r){this.visible?this.hide():this.show(e,r)},show:function(e,r){this.visible=!0,this.eventTarget=e.currentTarget,this.target=r||e.currentTarget},hide:function(){this.visible=!1},onContentClick:function(){this.selfClick=!0},onEnter:function(e){var r=this;M(e,{position:"absolute",top:"0"}),this.alignOverlay(),this.dismissable&&this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.autoZIndex&&k.set("overlay",e,this.baseZIndex+this.$primevue.config.zIndex.overlay),this.overlayEventListener=function(l){r.container.contains(l.target)&&(r.selfClick=!0)},this.focus(),h.on("overlay-click",this.overlayEventListener),this.$emit("show"),this.closeOnEscape&&this.bindDocumentKeyDownListener()},onLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.unbindDocumentKeyDownListener(),h.off("overlay-click",this.overlayEventListener),this.overlayEventListener=null,this.$emit("hide")},onAfterLeave:function(e){this.autoZIndex&&k.clear(e)},alignOverlay:function(){I(this.container,this.target,!1);var e=S(this.container),r=S(this.target),l=0;e.left<r.left&&(l=r.left-e.left),this.container.style.setProperty(P("popover.arrow.left").name,"".concat(l,"px")),e.top<r.top&&(this.container.setAttribute("data-p-popover-flipped","true"),!this.isUnstyled&&N(this.container,"p-popover-flipped"))},onContentKeydown:function(e){e.code==="Escape"&&this.closeOnEscape&&(this.hide(),H(this.target))},onButtonKeydown:function(e){switch(e.code){case"ArrowDown":case"ArrowUp":case"ArrowLeft":case"ArrowRight":e.preventDefault()}},focus:function(){var e=this.container.querySelector("[autofocus]");e&&e.focus()},onKeyDown:function(e){e.code==="Escape"&&this.closeOnEscape&&(this.visible=!1)},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var e=this;!this.outsideClickListener&&R()&&(this.outsideClickListener=function(r){e.visible&&!e.selfClick&&!e.isTargetClicked(r)&&(e.visible=!1),e.selfClick=!1},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null,this.selfClick=!1)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new A(this.target,function(){e.visible&&(e.visible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.visible&&!U()&&(e.visible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isTargetClicked:function(e){return this.eventTarget&&(this.eventTarget===e.target||this.eventTarget.contains(e.target))},containerRef:function(e){this.container=e},createStyle:function(){if(!this.styleElement&&!this.isUnstyled){var e;this.styleElement=document.createElement("style"),this.styleElement.type="text/css",B(this.styleElement,"nonce",(e=this.$primevue)===null||e===void 0||(e=e.config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce),document.head.appendChild(this.styleElement);var r="";for(var l in this.breakpoints)r+=`
                        @media screen and (max-width: `.concat(l,`) {
                            .p-popover[`).concat(this.$attrSelector,`] {
                                width: `).concat(this.breakpoints[l],` !important;
                            }
                        }
                    `);this.styleElement.innerHTML=r}},destroyStyle:function(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},onOverlayClick:function(e){h.emit("overlay-click",{originalEvent:e,target:this.target})}},directives:{focustrap:Y,ripple:T},components:{Portal:K}},te=["aria-modal"];function ne(t,e,r,l,p,s){var a=j("Portal"),v=Z("focustrap");return b(),F(a,{appendTo:t.appendTo},{default:g(function(){return[c(q,x({name:"p-anchored-overlay",onEnter:s.onEnter,onLeave:s.onLeave,onAfterLeave:s.onAfterLeave},t.ptm("transition")),{default:g(function(){return[p.visible?V((b(),w("div",x({key:0,ref:s.containerRef,role:"dialog","aria-modal":p.visible,onClick:e[3]||(e[3]=function(){return s.onOverlayClick&&s.onOverlayClick.apply(s,arguments)}),class:t.cx("root")},t.ptmi("root")),[t.$slots.container?D(t.$slots,"container",{key:0,closeCallback:s.hide,keydownCallback:function(y){return s.onButtonKeydown(y)}}):(b(),w("div",x({key:1,class:t.cx("content"),onClick:e[0]||(e[0]=function(){return s.onContentClick&&s.onContentClick.apply(s,arguments)}),onMousedown:e[1]||(e[1]=function(){return s.onContentClick&&s.onContentClick.apply(s,arguments)}),onKeydown:e[2]||(e[2]=function(){return s.onContentKeydown&&s.onContentKeydown.apply(s,arguments)})},t.ptm("content")),[D(t.$slots,"default")],16))],16,te)),[[v]]):J("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])}L.render=ne;const oe={class:"bg-surface-0 rounded-lg dark:bg-surface-950 px-8 md:px-20 py-12 md:py-20 lg:px-80"},se={class:"flex flex-col gap-4"},re={class:"flex flex-col gap-2 pb-4"},ie={class:"font-semibold text-xl text-surface-900 dark:text-surface-0 leading-tight"},le={class:"text-surface-500 dark:text-surface-300 text-base leading-tight"},ae={class:"flex flex-col gap-4"},de={class:"flex flex-col md:flex-row gap-4"},ce={class:"flex items-center gap-4 flex-1"},ue={class:"flex-1 text-surface-900 dark:text-surface-0 text-base leading-tight"},fe={class:"flex justify-end"},pe={class:"flex flex-col gap-4 w-[25rem]"},ve={class:"font-medium block mb-2"},he={class:"flex flex-col md:flex-row gap-4"},me={class:"flex items-center gap-4 flex-1"},be={class:"flex-1 text-surface-900 dark:text-surface-0 text-base leading-tight"},ge={class:"flex justify-end"},ye={class:"flex flex-col gap-4 w-[25rem]"},ke={class:"font-medium block mb-2"},xe={class:"flex flex-col md:flex-row gap-4"},we={class:"flex items-center gap-4 flex-1"},Le={class:"flex-1 text-surface-900 dark:text-surface-0 text-base leading-tight"},Ce={class:"flex flex-col md:flex-row gap-4"},Ee={class:"flex items-center gap-4 flex-1"},Se={class:"flex-1 text-surface-900 dark:text-surface-0 text-base leading-tight"},Oe=W({__name:"MyInfo",setup(t){const e=f(),r=i=>{e.value.toggle(i)},l=f(),p=i=>{l.value.toggle(i)},s=i=>{if(i==null)return"";if(typeof i=="number")return new Date(i).toLocaleDateString();const o=i.match(/Date\((\d+)\)/)??i.match(/(\d{10,})/);if(!o)return"";const E=Number(o[1]);return Number.isFinite(E)?new Date(E).toLocaleDateString():""},a=f(null),v=f(!1),C=f(null),y=async()=>{v.value=!0;try{const i=await fetch("/Component/GetExampleJson");if(!i.ok)throw new Error(`HTTP error! status: ${i.status}`);const o=await i.json();a.value=o}catch(i){C.value=i.message,console.error("Failed to fetch data",i)}finally{v.value=!1}};return G(()=>{y()}),(i,o)=>(b(),w("div",oe,[n("div",se,[n("div",re,[n("div",ie,d(a.value?.User.Name),1),n("div",le,d(a.value?.User.UserName),1)]),o[10]||(o[10]=n("div",{class:"border-t border-surface-200 dark:border-surface-700"},null,-1)),n("div",ae,[n("div",de,[n("div",ce,[o[0]||(o[0]=n("div",{class:"w-[140px] text-surface-900 dark:text-surface-0 font-medium text-base leading-tight"},"Email",-1)),n("div",ue,d(a.value?.User.Email),1)]),n("div",fe,[c(u(m),{icon:"pi pi-pen-to-square",onClick:r,rounded:"",outlined:"",severity:"secondary","icon-only":"",class:"shrink-0"}),c(u(L),{ref_key:"testEmail",ref:e},{default:g(()=>[n("div",pe,[n("div",null,[n("span",ve,[o[1]||(o[1]=_("Send test email from central service to ",-1)),n("strong",null,d(a.value?.User.Email),1)]),c(u(m),{label:"Send",class:"w-full"})])])]),_:1},512)])]),o[6]||(o[6]=n("div",{class:"border-t border-surface-200 dark:border-surface-700"},null,-1)),n("div",he,[n("div",me,[o[2]||(o[2]=n("div",{class:"w-[140px] text-surface-900 dark:text-surface-0 font-medium text-base leading-tight"},"Mobile",-1)),n("div",be,d(a.value?.User.Mobile),1)]),n("div",ge,[c(u(m),{icon:"pi pi-pen-to-square",onClick:p,rounded:"",outlined:"",severity:"secondary","icon-only":"",class:"shrink-0"}),c(u(L),{ref_key:"testSms",ref:l},{default:g(()=>[n("div",ye,[n("div",null,[n("span",ke,[o[3]||(o[3]=_("Send test SMS from central service to ",-1)),n("strong",null,d(a.value?.User.Mobile),1)]),c(u(m),{label:"Send",class:"w-full"})])])]),_:1},512)])]),o[7]||(o[7]=n("div",{class:"border-t border-surface-200 dark:border-surface-700"},null,-1)),n("div",xe,[n("div",we,[o[4]||(o[4]=n("div",{class:"w-[140px] text-surface-900 dark:text-surface-0 font-medium text-base leading-tight"}," Alert language ",-1)),n("div",Le,d(a.value?.User?.Configuration?.AlertLanguage===2?"English US":"Norsk Bokmål"),1)])]),o[8]||(o[8]=n("div",{class:"border-t border-surface-200 dark:border-surface-700"},null,-1)),n("div",Ce,[n("div",Ee,[o[5]||(o[5]=n("div",{class:"w-[140px] text-surface-900 dark:text-surface-0 font-medium text-base leading-tight"}," Date of acceptance of terms ",-1)),n("div",Se,d(s(a.value?.User?.Configuration?.Terms)),1)])]),o[9]||(o[9]=n("div",{class:"border-t border-surface-200 dark:border-surface-700"},null,-1))])])]))}});export{Oe as default};
