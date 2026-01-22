import{B as c,z as g,c as m,o as f,n as h,m as u,i as y,d as w,r as x,w as $,F as z,u as i,a as e,e as l,s as _}from"./main-DX18YVhn.js";import{a as k,s as o,b as S}from"./index-C1YL5F7d.js";var F={root:"p-fluid"},I=c.extend({name:"fluid",classes:F}),P={name:"BaseFluid",extends:g,style:I,provide:function(){return{$pcFluid:this,$parentInstance:this}}},v={name:"Fluid",extends:P,inheritAttrs:!1};function B(a,n,s,r,t,d){return f(),m("div",u({class:a.cx("root")},a.ptmi("root")),[h(a.$slots,"default")],16)}v.render=B;var O=`
    .p-textarea {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('textarea.color');
        background: dt('textarea.background');
        padding-block: dt('textarea.padding.y');
        padding-inline: dt('textarea.padding.x');
        border: 1px solid dt('textarea.border.color');
        transition:
            background dt('textarea.transition.duration'),
            color dt('textarea.transition.duration'),
            border-color dt('textarea.transition.duration'),
            outline-color dt('textarea.transition.duration'),
            box-shadow dt('textarea.transition.duration');
        appearance: none;
        border-radius: dt('textarea.border.radius');
        outline-color: transparent;
        box-shadow: dt('textarea.shadow');
    }

    .p-textarea:enabled:hover {
        border-color: dt('textarea.hover.border.color');
    }

    .p-textarea:enabled:focus {
        border-color: dt('textarea.focus.border.color');
        box-shadow: dt('textarea.focus.ring.shadow');
        outline: dt('textarea.focus.ring.width') dt('textarea.focus.ring.style') dt('textarea.focus.ring.color');
        outline-offset: dt('textarea.focus.ring.offset');
    }

    .p-textarea.p-invalid {
        border-color: dt('textarea.invalid.border.color');
    }

    .p-textarea.p-variant-filled {
        background: dt('textarea.filled.background');
    }

    .p-textarea.p-variant-filled:enabled:hover {
        background: dt('textarea.filled.hover.background');
    }

    .p-textarea.p-variant-filled:enabled:focus {
        background: dt('textarea.filled.focus.background');
    }

    .p-textarea:disabled {
        opacity: 1;
        background: dt('textarea.disabled.background');
        color: dt('textarea.disabled.color');
    }

    .p-textarea::placeholder {
        color: dt('textarea.placeholder.color');
    }

    .p-textarea.p-invalid::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }

    .p-textarea-fluid {
        width: 100%;
    }

    .p-textarea-resizable {
        overflow: hidden;
        resize: none;
    }

    .p-textarea-sm {
        font-size: dt('textarea.sm.font.size');
        padding-block: dt('textarea.sm.padding.y');
        padding-inline: dt('textarea.sm.padding.x');
    }

    .p-textarea-lg {
        font-size: dt('textarea.lg.font.size');
        padding-block: dt('textarea.lg.padding.y');
        padding-inline: dt('textarea.lg.padding.x');
    }
`,V={root:function(n){var s=n.instance,r=n.props;return["p-textarea p-component",{"p-filled":s.$filled,"p-textarea-resizable ":r.autoResize,"p-textarea-sm p-inputfield-sm":r.size==="small","p-textarea-lg p-inputfield-lg":r.size==="large","p-invalid":s.$invalid,"p-variant-filled":s.$variant==="filled","p-textarea-fluid":s.$fluid}]}},E=c.extend({name:"textarea",style:O,classes:V}),H={name:"BaseTextarea",extends:k,props:{autoResize:Boolean},style:E,provide:function(){return{$pcTextarea:this,$parentInstance:this}}};function p(a){"@babel/helpers - typeof";return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},p(a)}function A(a,n,s){return(n=N(n))in a?Object.defineProperty(a,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[n]=s,a}function N(a){var n=R(a,"string");return p(n)=="symbol"?n:n+""}function R(a,n){if(p(a)!="object"||!a)return a;var s=a[Symbol.toPrimitive];if(s!==void 0){var r=s.call(a,n);if(p(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(a)}var b={name:"Textarea",extends:H,inheritAttrs:!1,observer:null,mounted:function(){var n=this;this.autoResize&&(this.observer=new ResizeObserver(function(){requestAnimationFrame(function(){n.resize()})}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){if(this.$el.offsetParent){var n=this.$el.style.height,s=parseInt(n)||0,r=this.$el.scrollHeight,t=!s||r>s,d=s&&r<s;d?(this.$el.style.height="auto",this.$el.style.height="".concat(this.$el.scrollHeight,"px")):t&&(this.$el.style.height="".concat(r,"px"))}},onInput:function(n){this.autoResize&&this.resize(),this.writeValue(n.target.value,n)}},computed:{attrs:function(){return u(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)},dataP:function(){return y(A({invalid:this.$invalid,fluid:this.$fluid,filled:this.$variant==="filled"},this.size,this.size))}}},T=["value","name","disabled","aria-invalid","data-p"];function L(a,n,s,r,t,d){return f(),m("textarea",u({class:a.cx("root"),value:a.d_value,name:a.name,disabled:a.disabled,"aria-invalid":a.invalid||void 0,"data-p":d.dataP,onInput:n[0]||(n[0]=function(){return d.onInput&&d.onInput.apply(d,arguments)})},d.attrs),null,16,T)}b.render=L;const U={class:"flex flex-col md:flex-row gap-8"},j={class:"md:w-1/2"},C={class:"card flex flex-col gap-4"},q={class:"flex flex-col gap-2"},G={class:"flex flex-col gap-2"},K={class:"flex flex-col gap-2"},Z={class:"card flex flex-col gap-4"},D={class:"flex flex-wrap gap-4"},J={class:"flex flex-col grow basis-0 gap-2"},M={class:"flex flex-col grow basis-0 gap-2"},Q={class:"md:w-1/2"},W={class:"card flex flex-col gap-4"},X={class:"grid grid-cols-12 gap-2"},Y={class:"col-span-12 md:col-span-10"},ee={class:"grid grid-cols-12 gap-2"},te={class:"col-span-12 md:col-span-10"},ae={class:"card flex flex-col gap-4"},ne={class:"flex flex-wrap items-start gap-4"},se={class:"field"},ie={class:"field"},le={class:"card flex flex-col gap-4"},re={class:"flex flex-wrap gap-2"},oe={class:"flex mt-8"},de={class:"card flex flex-col gap-4 w-full"},pe={class:"flex flex-col md:flex-row gap-4"},fe={class:"flex flex-wrap gap-2 w-full"},ue={class:"flex flex-wrap gap-2 w-full"},xe={class:"flex flex-wrap"},ce={class:"flex flex-col md:flex-row gap-4"},me={class:"flex flex-wrap gap-2 w-full"},ve={class:"flex flex-wrap gap-2 w-full"},he=w({__name:"FormLayout",setup(a){const n=x([{name:"Option 1",code:"Option 1"},{name:"Option 2",code:"Option 2"},{name:"Option 3",code:"Option 3"}]),s=x();return(r,t)=>(f(),$(i(v),null,{default:z(()=>[e("div",U,[e("div",j,[e("div",C,[t[4]||(t[4]=e("div",{class:"font-semibold text-xl"},"Vertical",-1)),e("div",q,[t[1]||(t[1]=e("label",{for:"name1"},"Name",-1)),l(i(o),{id:"name1",type:"text"})]),e("div",G,[t[2]||(t[2]=e("label",{for:"email1"},"Email",-1)),l(i(o),{id:"email1",type:"text"})]),e("div",K,[t[3]||(t[3]=e("label",{for:"age1"},"Age",-1)),l(i(o),{id:"age1",type:"text"})])]),e("div",Z,[t[7]||(t[7]=e("div",{class:"font-semibold text-xl"},"Vertical Grid",-1)),e("div",D,[e("div",J,[t[5]||(t[5]=e("label",{for:"name2"},"Name",-1)),l(i(o),{id:"name2",type:"text"})]),e("div",M,[t[6]||(t[6]=e("label",{for:"email2"},"Email",-1)),l(i(o),{id:"email2",type:"text"})])])])]),e("div",Q,[e("div",W,[t[10]||(t[10]=e("div",{class:"font-semibold text-xl"},"Horizontal",-1)),e("div",X,[t[8]||(t[8]=e("label",{for:"name3",class:"flex items-center col-span-12 mb-2 md:col-span-2 md:mb-0"},"Name",-1)),e("div",Y,[l(i(o),{id:"name3",type:"text"})])]),e("div",ee,[t[9]||(t[9]=e("label",{for:"email3",class:"flex items-center col-span-12 mb-2 md:col-span-2 md:mb-0"},"Email",-1)),e("div",te,[l(i(o),{id:"email3",type:"text"})])])]),e("div",ae,[t[13]||(t[13]=e("div",{class:"font-semibold text-xl"},"Inline",-1)),e("div",ne,[e("div",se,[t[11]||(t[11]=e("label",{for:"firstname1",class:"sr-only"},"Firstname",-1)),l(i(o),{id:"firstname1",type:"text",placeholder:"Firstname"})]),e("div",ie,[t[12]||(t[12]=e("label",{for:"lastname1",class:"sr-only"},"Lastname",-1)),l(i(o),{id:"lastname1",type:"text",placeholder:"Lastname"})]),l(i(_),{label:"Submit",fluid:!1})])]),e("div",le,[t[16]||(t[16]=e("div",{class:"font-semibold text-xl"},"Help Text",-1)),e("div",re,[t[14]||(t[14]=e("label",{for:"username"},"Username",-1)),l(i(o),{id:"username",type:"text"}),t[15]||(t[15]=e("small",null,"Enter your username to reset your password.",-1))])])])]),e("div",oe,[e("div",de,[t[22]||(t[22]=e("div",{class:"font-semibold text-xl"},"Advanced",-1)),e("div",pe,[e("div",fe,[t[17]||(t[17]=e("label",{for:"firstname2"},"Firstname",-1)),l(i(o),{id:"firstname2",type:"text"})]),e("div",ue,[t[18]||(t[18]=e("label",{for:"lastname2"},"Lastname",-1)),l(i(o),{id:"lastname2",type:"text"})])]),e("div",xe,[t[19]||(t[19]=e("label",{for:"address"},"Address",-1)),l(i(b),{id:"address",rows:"4"})]),e("div",ce,[e("div",me,[t[20]||(t[20]=e("label",{for:"state"},"State",-1)),l(i(S),{id:"state",modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=d=>s.value=d),options:n.value,optionLabel:"name",placeholder:"Select One",class:"w-full"},null,8,["modelValue","options"])]),e("div",ve,[t[21]||(t[21]=e("label",{for:"zip"},"Zip",-1)),l(i(o),{id:"zip",type:"text"})])])])])]),_:1}))}});export{he as default};
