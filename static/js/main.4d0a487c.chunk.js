(this["webpackJsonpts-todo"]=this["webpackJsonpts-todo"]||[]).push([[0],{24:function(A,g,C){"use strict";C.r(g);var n,B,E,Q,I,t,e,i,o,a,r,d,c,s,w,f,D,u,j,P=C(0),b=C.n(P),l=C(10),J=C.n(l),x=C(3),k=C(4),U=C(5),Y=C(2),y=function(A){A.key&&A.value&&localStorage.setItem(A.key,A.value)},v=C(1),R=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],h=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],G=function(){var A=Object(P.useState)({year:0,month:"",date:0,day:"",hour:"",minute:""}),g=Object(U.a)(A,2),C=g[0],n=g[1];Object(P.useEffect)((function(){B(),setInterval((function(){B()}),1e4)}),[]);var B=function(){var A=new Date;n(Object(k.a)(Object(k.a)({},C),{},{year:A.getFullYear(),month:R[A.getMonth()],date:A.getDate(),day:h[A.getDay()],hour:E(A.getHours()),minute:E(A.getMinutes())}))};function E(A){return A<10?"0"+A:""+A}return Object(v.jsxs)(S,{children:[Object(v.jsxs)(m,{children:[Object(v.jsx)(L,{children:C.date}),Object(v.jsxs)("span",{children:[Object(v.jsx)("span",{children:C.month}),Object(v.jsx)("span",{children:C.year})]})]}),Object(v.jsxs)(M,{children:[Object(v.jsx)("span",{children:C.day}),Object(v.jsxs)("span",{children:[C.hour,":",C.minute]})]})]})},S=Y.default.section(n||(n=Object(x.a)(["\n   display: flex;\n   justify-content: space-between;\n   align-items: center;\n   margin-bottom: 50px;\n   padding: 20px 50px 0;\n   width: 100%;\n"]))),m=Y.default.div(B||(B=Object(x.a)(["\n   display: flex;\n   padding-top: 3px;\n   > span {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      span {\n         font-size: 0.9em;\n         &:last-child {\n            margin-top: 3px;\n            font-weight: 300;\n         }\n      }\n   }\n"]))),L=Y.default.span(E||(E=Object(x.a)(["\n   margin-right: 5px;\n   color: var(--main);\n   font-size: 2.5em;\n"]))),M=Y.default.div(Q||(Q=Object(x.a)(["\n   display: flex;\n   flex-direction: column;\n   align-items: center;\n   padding-top: 3px;\n   span {\n      font-size: 1em;\n      &:first-child {\n         margin-bottom: 3px;\n         font-size: 0.8em;\n         font-weight: 300;\n      }\n   }\n"]))),p=C.p+"static/media/check.c03f3a64.png",F=C.p+"static/media/edit.030371b7.png",O=C.p+"static/media/trash.7c39a18f.png",N=function(A){var g=A.index,C=A.item,n=A.updateItem,B=A.deleteItem;return Object(v.jsxs)(H,{children:[Object(v.jsx)(W,{children:C.split("\n").map((function(A,g){return Object(v.jsxs)("span",{children:[A,Object(v.jsx)("br",{})]},g)}))}),Object(v.jsxs)(T,{children:[Object(v.jsx)("button",{className:"check"}),Object(v.jsx)("button",{className:"update",onClick:function(){return n(g)}}),Object(v.jsx)("button",{className:"delete",onClick:function(){return B(g)}})]})]})},H=Y.default.div(I||(I=Object(x.a)(["\n   display: flex;\n   justify-content: space-between;\n   position: relative;\n   left: 0;\n   width: 140%;\n   transition: 0.2s ease-in-out;\n   &:hover {\n      left: -40%;\n      background: #f2f2f2;\n   }\n"]))),W=Y.default.div(t||(t=Object(x.a)(["\n   padding: 20px 50px;\n   width: 95%;\n   height: 100%;\n   text-align: left;\n"]))),T=Y.default.div(e||(e=Object(x.a)(["\n   display: flex;\n   justify-content: flex-end;\n   align-items: stretch;\n   position: relative;\n   width: 40%;\n   button {\n      width: 100%;\n      height: 100%;\n      border: none;\n      opacity: 0.9;\n      &.check {\n         background: url(",") no-repeat;\n         background-size: 20px;\n         background-position: 53%;\n         background-color: #46b39d;\n      }\n      &.update {\n         background: url(",") no-repeat;\n         background-size: 20px;\n         background-position: 53%;\n         background-color: #f0ca4d;\n      }\n      &.delete {\n         background: url(",") no-repeat;\n         background-size: 20px;\n         background-position: 53%;\n         background-color: #de5b49;\n      }\n      &:hover {\n         opacity: 1;\n      }\n   }\n"])),p,F,O),z="data:image/png;base64,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8SPWIAECBAgQ6AICQDdRIUCAAAEC8QICQPyINUiAAAECBLqAANBNVAgQIECAQLyAABA/Yg0SIECAAIEuIAB0ExUCBAgQIBAvIADEj1iDBAgQIECgCwgA3USFAAECBAjECwgA8SPWIAECBAgQ6AICQDdRIUCAAAEC8QICQPyINUiAAAECBLqAANBNVAgQIECAQLyAABA/Yg0SIECAAIEuIAB0ExUCBAgQIBAvIADEj1iDBAgQIECgCwgA3USFAAECBAjECwgA8SPWIAECBAgQ6AICQDdRIUCAAAEC8QICQPyINUiAAAECBLqAANBNVAgQIECAQLyAABA/Yg0SIECAAIEuIAB0ExUCBAgQIBAvIADEj1iDBAgQIECgCwgA3USFAAECBAjECwgA8SPWIAECBAgQ6AICQDdRIUCAAAEC8QICQPyINUiAAAECBLqAANBNVAgQIECAQLyAABA/Yg0SIECAAIEuIAB0ExUCBAgQIBAvIADEj1iDBAgQIECgCwgA3USFAAECBAjECwgA8SPWIAECBAgQ6AICQDdRIUCAAAEC8QICQPyINUiAAAECBLqAANBNVAgQIECAQLyAABA/Yg0SIECAAIEuIAB0ExUCBAgQIBAvIADEj1iDBAgQIECgCwgA3USFAAECBAjECwgA8SPWIAECBAgQ6AICQDdRIUCAAAEC8QICQPyINUiAAAECBLqAANBNVAgQIECAQLyAABA/Yg0SIECAAIEuIAB0ExUCBAgQIBAvIADEj1iDBAgQIECgCwgA3USFAAECBAjECwgA8SPWIAECBAgQ6AICQDdRIUCAAAEC8QICQPyINUiAAAECBLqAANBNVAgQIECAQLyAABA/Yg0SIECAAIEuIAB0ExUCBAgQIBAvIADEj1iDBAgQIECgCwgA3USFAAECBAjECwgA8SPWIAECBAgQ6AICQDdRIUCAAAEC8QICQPyINUiAAAECBLqAANBNVAgQIECAQLyAABA/Yg0SIECAAIEuIAB0ExUCBAgQIBAvIADEj1iDBAgQIECgCwgA3USFAAECBAjECwgA8SPWIAECBAgQ6AICQDdRIUCAAAEC8QICQPyINUiAAAECBLqAANBNVAgQIECAQLyAABA/Yg0SIECAAIEuIAB0ExUCBAgQIBAvIADEj1iDBAgQIECgCwgA3USFAAECBAjECwgA8SPWIAECBAgQ6AICQDdRIUCAAAEC8QICQPyINUiAAAECBLqAANBNVAgQIECAQLyAABA/Yg0SIECAAIEuIAB0ExUCBAgQIBAvIADEj1iDBAgQIECgCwgA3USFAAECBAjECwgA8SPWIAECBAgQ6AICQDdRIUCAAAEC8QICQPyINUiAAAECBLqAANBNVAgQIECAQLyAABA/Yg0SIECAAIEuIAB0ExUCBAgQIBAvIADEj1iDBAgQIECgCwgA3USFAAECBAjECwgA8SPWIAECBAgQ6AICQDdRIUCAAAEC8QICQPyINUiAAAECBLqAANBNVAgQIECAQLyAABA/Yg0SIECAAIEuIAB0ExUCBAgQIBAvIADEj1iDBAgQIECgCwgA3USFAAECBAjECwgA8SPWIAECBAgQ6AICQDdRIUCAAAEC8QICQPyINUiAAAECBLqAANBNVAgQIECAQLyAABA/Yg0SIECAAIEuIAB0ExUCBAgQIBAvIADEj1iDBAgQIECgCwgA3USFAAECBAjECwgA8SPWIAECBAgQ6AICQDdRIUCAAAEC8QICQPyINUiAAAECBLqAANBNVAgQIECAQLyAABA/Yg0SIECAAIEuIAB0ExUCBAgQIBAvIADEj1iDBAgQIECgCwgA3USFAAECBAjECwgA8SPWIAECBAgQ6AICQDdRIUCAAAEC8QICQPyINUiAAAECBLqAANBNVAgQIECAQLyAABA/Yg0SIECAAIEuIAB0ExUCBAgQIBAvIADEj1iDBAgQIECgCwgA3USFAAECBAjECwgA8SPWIAECBAgQ6AICQDdRIUCAAAEC8QICQPyINUiAAAECBLqAANBNVAgQIECAQLyAABA/Yg0SIECAAIEuIAB0ExUCBAgQIBAvIADEj1iDBAgQIECgCwgA3USFAAECBAjECwgA8SPWIAECBAgQ6AICQDdRIUCAAAEC8QICQPyINUiAAAECBLqAANBNVAgQIECAQLyAABA/Yg0SIECAAIEuIAB0ExUCBAgQIBAvIADEj1iDBAgQIECgCwgA3USFAAECBAjECwgA8SPWIAECBAgQ6AICQDdRIUCAAAEC8QICQPyINUiAAAECBLqAANBNVAgQIECAQLyAABA/Yg0SIECAAIEuIAB0ExUCBAgQIBAvIADEj1iDBAgQIECgCwgA3USFAAECBAjECwgA8SPWIAECBAgQ6AICQDdRIUCA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8nT1RoAAAQIEBgEBYIBRJkCAAAECyQICQPJ09UaAAAECBAYBAWCAUSZAgAABAskCAkDydPVGgAABAgQGAQFggFEmQIAAAQLJAgJA8nT1RoAAAQIEBgEBYIBRJkCAAAECyQICQPJ09UaAAAECBAYBAWCAUSZAgAABAskCAkDydPVGgAABAgQGAQFggFEmQIAAAQLJAgJA8nT1RoAAAQIEBgEBYIBRJkCAAAECyQICQPJ09UaAAAECBAYBAWCAUSZAgAABAskCAkDydPVGgAABAgQGAQFggFEmQIAAAQLJAgJA8nT1RoAAAQIEBgEBYIBRJkCAAAECyQICQPJ09UaAAAECBAYBAWCAUSZAgAABAskCAkDydPVGgAABAgQGAQFggFEmQIAAAQLJAgJA8nT1RoAAAQIEBgEBYIBRJkCAAAECyQICQPJ09UaAAAECBAYBAWCAUSZAgAABAskCAkDydPVGgAABAgQGAQFggFEmQIAAAQLJAgJA8nT1RoAAAQIEBgEBYIBRJkCAAAECyQICQPJ09UaAAAECBAYBAWCAUSZAgAABAskCAkDydPVGgAABAgQGAQFggFEmQIAAAQLJAgJA8nT1RoAAAQIEBgEBYIBRJkCAAAECyQICQPJ09UaAAAECBAYBAWCAUSZAgAABAskCAkDydPVGgAABAgQGAQFggFEmQIAAAQLJAgJA8nT1RoAAAQIEBgEBYIBRJkCAAAECyQICQPJ09UaAAAECBAYBAWCAUSZAgAABAskCAkDydPVGgAABAgQGAQFggFEmQIAAAQLJAgJA8nT1RoAAAQIEBgEBYIBRJkCAAAECyQICQPJ09UaAAAECBAYBAWCAUSZAgAABAskCAkDydPVGgAABAgQGAQFggFEmQIAAAQLJAgJA8nT1RoAAAQIEBgEBYIBRJkCAAAECyQICQPJ09UaAAAECBAYBAWCAUSZAgAABAskCAkDydPVGgAABAgQGAQFggFEmQIAAAQLJAgJA8nT1RoAAAQIEBgEBYIBRJkCAAAECyQICQPJ09UaAAAECBAYBAWCAUSZAgAABAskCAkDydPVGgAABAgQGAQFggFEmQIAAAQLJAgJA8nT1RoAAAQIEBgEBYIBRJkCAAAECyQICQPJ09UaAAAECBAYBAWCAUSZAgAABAskCAkDydPVGgAABAgQGAQFggFEmQIAAAQLJAgJA8nT1RoAAAQIEBgEBYIBRJkCAAAECyQICQPJ09UaAAAECBAYBAWCAUSZAgAABAskCAkDydPVGgAABAgQGAQFggFEmQIAAAQLJAgJA8nT1RoAAAQIEBgEBYIBRJkCAAAECyQICQPJ09UaAAAECBAYBAWCAUSZAgAABAskCAkDydPVGgAABAgQGAQFggFEmQIAAAQLJAgJA8nT1RoAAAQIEBgEBYIBRJkCAAAECyQICQPJ09UaAAAECBAYBAWCAUSZAgAABAskCAkDydPVGgAABAgQGAQFggFEmQIAAAQLJAgJA8nT1RoAAAQIEBgEBYIBRJkCAAAECyQICQPJ09UaAAAECBAYBAWCAUSZAgAABAskCAkDydPVGgAABAgQGAQFggFEmQIAAAQLJAgJA8nT1RoAAAQIEBgEBYIBRJkCAAAECyQICQPJ09UaAAAECBAYBAWCAUSZAgAABAskCAkDydPVGgAABAgQGAQFggFEmQIAAAQLJAgJA8nT1RoAAAQIEBgEBYIBRJkCAAAECyQICQPJ09UaAAAECBAYBAWCAUSZAgAABAskCAkDydPVGgAABAgQGAQFggFEmQIAAAQLJAgJA8nT1RoAAAQIEBgEBYIBRJkCAAAECyQICQPJ09UaAAAECBAYBAWCAUSZAgAABAskCAkDydPVGgAABAgQGAQFggFEmQIAAAQLJAgJA8nT1RoAAAQIEBgEBYIBRJkCAAAECyQICQPJ09UaAAAECBAYBAWCAUSZAgAABAskCAkDydPVGgAABAgQGAQFggFEmQIAAAQLJAgJA8nT1RoAAAQIEBgEBYIBRJkCAAAECyQICQPJ09UaAAAECBAYBAWCAUSZAgAABAskCAkDydPVGgAABAgQGAQFggFEmQIAAAQLJAgJA8nT1RoAAAQIEBgEBYIBRJkCAAAECyQICQPJ09UaAAAECBAYBAWCAUSZAgAABAskCAkDydPVGgAABAgQGAQFggFEmQIAAAQLJAgJA8nT1RoAAAQIEBgEBYIBRJkCAAAECyQICQPJ09UaAAAECBAYBAWCAUSZAgAABAskCAkDydPVGgAABAgQGAQFggFEmQIAAAQLJAgJA8nT1RoAAAQIEBgEBYIBRJkCAAAECyQICQPJ09UaAAAECBAYBAWCAUSZAgAABAskCAkDydPVGgAABAgQGAQFggFEmQIAAAQLJAgJA8nT1RoAAAQIEBgEBYIBRJkCAAAECyQICQPJ09UaAAAECBAYBAWCAUSZAgAABAskCAkDydPVGgAABAgQGAQFggFEmQIAAAQLJAgJA8nT1RoAAAQIEBgEBYIBRJkCAAAECyQICQPJ09UaAAAECBAYBAWCAUSZAgAABAskCAkDydPVGgAABAgQGAQFggFEmQIAAAQLJAgJA8nT1RoAAAQIEBgEBYIBRJkCAAAECyQICQPJ09UaAAAECBAYBAWCAUSZAgAABAskCAkDydPVGgAABAgQGAQFggFEmQIAAAQLJAgJA8nT1tssCD+7y5k/be1Ivp7XmXQK7KyAA7O7s7Dxb4EdB7f04qBetEIgREABiRqmRMIGkAPBA2Gy0QyBCQACIGKMmAgW+FdRTUi9BY9HKvgsIAPv+L0D/WxW4fasbO499JfVyHu37FALbFBAAtjkXuyJwWxGcDGG4JaQPbRCIEhAAosapmRSBg4OD71Yvtwb0c3v18p2APrRAIE5AAIgbqYaCBP4toJeEHgLGoAUCXUAA6CYqBLYi8KGtbOQC9pHQwwW071MJbFfgYLtbszMC+y1w8uTJx5fA3bWevqMS99S+n1U/AvBCQDs6QNvOFnAFIHu+utthgTpx/qy2/w873MI/Ovnv8PRsPV7AFYD4EWtwlwXqKsDVtf87a125Y32sV/97dgWA7+3Yvm2XwN4IuAKwN6PW6C4K1Al0/TbAe3dw73/n5L+DU7PlvRJwBWCvxq3ZXRSoqwBPqn2v1wV46o7sf73y37UVAH64I/u1TQJ7KeAKwF6OXdO7JFAn0h/Ufv9kh/b8Fif/HZqWrRIgQIDAtgXqSsAHa239+KdtK9odAQJHAn4EcCThlsDGBerM/4Ta4n/Uun6jW12vXPii+u7fX//b6IBsi8CpAn4EcKqGtwlsWODwxPra2uK9G9zm3bWnVzv5b3AytkRgEBAABhhlAlsUqBPsXbWv365134b29+3ay2trb+uFfxwECOyIgACwI4OyTQJHAnWivbne/q1a6/UBLvfxldrAbx7u6XLvxdcnQIAAAQL5AvWcgKtrfewyPivwk/W1d+VXE/P/QeiQAAECBPZHoE7Aj6v1tlo/rXWpjvW13l7LFcT9+aemUwIECBDYokCdjK+pdSmuBnyivs6JLRrYEwECBAgQ2FuBOjn/bq3P17rYx4frAV+6t7AaJ0CAAAECuyBQJ+tra72z1tdrne9xZ33iu2pdtws92yMBAucm4IWAzs3LvQnsnECdwJ9Xm76p1gtrrcv3z6r15FrrLwyu/w9YL9zz/VrrVwzvqPWlWp+uZ/Z/tW4dBAiECvwfF6BCywu7XzcAAAAASUVORK5CYII=",V="data:image/png;base64,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",X=function(A){var g=A.adding,C=A.addTask,n=A.closing,B=Object(P.useState)(""),E=Object(U.a)(B,2),Q=E[0],I=E[1],t=Object(P.useRef)(null);Object(P.useEffect)((function(){g&&setTimeout((function(){var A;return null===(A=t.current)||void 0===A?void 0:A.focus()}),600)}),[g]);return Object(v.jsxs)(Z,{is_display:g,children:[Object(v.jsx)(K,{onClick:function(){I(""),n()}}),Object(v.jsx)("h2",{children:"Add New Task"}),Object(v.jsx)(q,{ref:t,value:Q,onChange:function(A){var g=A.target.value;return I(g)},placeholder:"wirte here..."}),Object(v.jsx)(_,{onClick:function(){I(""),C(Q)}})]})},Z=Y.default.div(i||(i=Object(x.a)(["\n   position: absolute;\n   left: 0;\n   bottom: ",";\n   padding: 30px 10% 0;\n   height: 85%;\n   width: 100%;\n   text-align: right;\n   background: #fff;\n   transition: 0.6s ease-in-out;\n   h2 {\n      margin-bottom: 30px;\n      font-size: 1.2em;\n      font-weight: 500;\n      text-align: left;\n   }\n"])),(function(A){return A.is_display?"0":"-85%"})),K=Y.default.button(o||(o=Object(x.a)(["\n   width: 20px;\n   height: 20px;\n   border: none;\n   background: url(",") no-repeat;\n   background-size: 100%;\n   filter: invert(50%);\n"])),V),q=Y.default.textarea(a||(a=Object(x.a)(["\n   margin-bottom: 20px;\n   width: 100%;\n   height: 60%;\n   font-weight: 300;\n   border: none;\n   outline: none;\n   overflow: auto;\n   resize: none;\n"]))),_=Y.default.button(r||(r=Object(x.a)(["\n   position: absolute;\n   left: 10%;\n   bottom: 20px;\n   width: 80%;\n   height: 60px;\n   border: none;\n   border-radius: 10px;\n   background: url(",") no-repeat;\n   background-size: 20px;\n   background-position: 51%;\n   background-color: var(--main);\n   opacity: 0.9;\n   transition: 0.2s ease-in-out;\n   &:hover {\n      opacity: 1;\n   }\n"])),z),$=function(A){var g=A.updating,C=A.item,n=A.item_id,B=A.updateTask,E=A.closing,Q=Object(P.useState)(""),I=Object(U.a)(Q,2),t=I[0],e=I[1],i=Object(P.useRef)(null);Object(P.useEffect)((function(){g&&(e(C),setTimeout((function(){var A;return null===(A=i.current)||void 0===A?void 0:A.focus()}),600))}),[g]);return Object(v.jsxs)(AA,{is_display:g,children:[Object(v.jsx)(gA,{onClick:function(){e(""),E()}}),Object(v.jsx)("h2",{children:"Update Task"}),Object(v.jsx)(CA,{ref:i,value:t,onChange:function(A){var g=A.target.value;return e(g)},placeholder:"wirte here..."}),Object(v.jsx)(nA,{onClick:function(){e(""),B(n,t)},children:"Update"})]})},AA=Y.default.div(d||(d=Object(x.a)(["\n   position: absolute;\n   left: 0;\n   bottom: ",";\n   padding: 30px 10% 0;\n   height: 85%;\n   width: 100%;\n   text-align: right;\n   background: #fff;\n   transition: 0.6s ease-in-out;\n   h2 {\n      margin-bottom: 30px;\n      font-size: 1.2em;\n      font-weight: 500;\n      text-align: left;\n   }\n"])),(function(A){return A.is_display?"0":"-85%"})),gA=Y.default.button(c||(c=Object(x.a)(["\n   width: 20px;\n   height: 20px;\n   border: none;\n   background: url(",") no-repeat;\n   background-size: 100%;\n   filter: invert(50%);\n"])),V),CA=Y.default.textarea(s||(s=Object(x.a)(["\n   margin-bottom: 20px;\n   width: 100%;\n   height: 130px;\n   font-weight: 300;\n   border: none;\n   outline: none;\n   overflow: auto;\n   resize: none;\n"]))),nA=Y.default.button(w||(w=Object(x.a)(["\n   position: absolute;\n   left: 10%;\n   bottom: 20px;\n   width: 80%;\n   height: 60px;\n   color: #fff;\n   font-weight: 700;\n   letter-spacing: 0.05em;\n   border: none;\n   border-radius: 10px;\n   /* background: url(",") no-repeat;\n   background-size: 20px;\n   background-position: 51%; */\n   background-color: var(--main);\n   opacity: 0.9;\n   transition: 0.2s ease-in-out;\n   &:hover {\n      opacity: 1;\n   }\n"])),z),BA="todolist";var EA,QA=function(){var A=Object(P.useState)([]),g=Object(U.a)(A,2),C=g[0],n=g[1],B=Object(P.useState)({adding:!1,updating:!1,update_id:0}),E=Object(U.a)(B,2),Q=E[0],I=E[1];Object(P.useEffect)((function(){var A;n(JSON.parse((A=BA,localStorage.getItem(A)))||[])}),[]);var t=function(){I(Object(k.a)(Object(k.a)({},Q),{},{adding:!1,updating:!1,update_id:0}))},e=function(A){y({key:BA,value:JSON.stringify(C.filter((function(g,C){return C!==A})))}),n(C.filter((function(g,C){return C!==A})))};return Object(v.jsxs)(IA,{is_display:!Q.adding&&!Q.updating,children:[Object(v.jsx)(G,{}),Object(v.jsx)(tA,{children:C.length?C.map((function(A,g){return Object(v.jsx)(N,{index:g,item:A,updateItem:function(A){return I(Object(k.a)(Object(k.a)({},Q),{},{updating:!0,update_id:A}))},deleteItem:e},g)})):Object(v.jsx)(eA,{onClick:function(){return I(Object(k.a)(Object(k.a)({},Q),{},{adding:!0}))},children:"\uc0c8\ub85c\uc6b4 \ud560 \uc77c\uc744 \ub4f1\ub85d\ud574\ubcf4\uc138\uc694!"})}),Object(v.jsx)(iA,{onClick:function(){return I(Object(k.a)(Object(k.a)({},Q),{},{adding:!0}))}}),Object(v.jsx)(X,{adding:Q.adding,addTask:function(A){A&&(y({key:BA,value:JSON.stringify(C.concat(A))}),n(C.concat(A)),t())},closing:t}),Object(v.jsx)($,{updating:Q.updating,item:C[Q.update_id],item_id:Q.update_id,updateTask:function(A,g){console.log(A,g),g&&(y({key:BA,value:JSON.stringify(C.map((function(C,n){return n===A?g:C})))}),n(C.map((function(C,n){return n===A?g:C}))),t())},closing:t})]})},IA=Y.default.div(f||(f=Object(x.a)(["\n   display: flex;\n   flex-direction: column;\n   align-items: center;\n   margin: 0 auto;\n   padding: 20px 0;\n   position: relative;\n   width: 100%;\n   max-width: 500px;\n   height: 100vh;\n   border: 1px solid #eaeaea;\n   border-width: 0 1px;\n   text-align: center;\n   background: ",";\n   transition: 0.6s ease-in-out;\n"])),(function(A){return A.is_display?"#fff":"rgba(0, 0, 0, 0.1)"})),tA=Y.default.div(D||(D=Object(x.a)(["\n   width: 100%;\n   max-height: 67%;\n   overflow-x: hidden;\n   overflow-y: auto;\n"]))),eA=Y.default.span(u||(u=Object(x.a)(["\n   display: block;\n   padding: 30px 0;\n   color: var(--main);\n   font-weight: 300;\n   cursor: pointer;\n"]))),iA=Y.default.button(j||(j=Object(x.a)(["\n   position: absolute;\n   bottom: 20px;\n   width: 70px;\n   height: 70px;\n   border: none;\n   border-radius: 50%;\n   background: url(",") no-repeat;\n   background-size: 50% 50%;\n   background-position: 52% 49%;\n   background-color: var(--main);\n   /* box-shadow: 0 0 5px 1px var(--main); */\n"])),z),oA=C(14),aA=Object(Y.createGlobalStyle)(EA||(EA=Object(x.a)(["\n  ","\n\n  :root {\n    --main: #ff7e36;\n  }\n\n  @font-face {\n    font-family: 'GmarketSans';\n    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff') format('woff');\n    font-weight: 300;\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'GmarketSans';\n    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');\n    font-weight: 500;\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'GmarketSans';\n    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff');\n    font-weight: 700;\n    font-style: normal;\n  }\n\n  html,\n  body {\n    overflow: hidden;\n  }\n\n  body {\n    font-family: GmarketSans;\n    font-style: 400;\n    color: #333333;\n    background-color: #fff;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  button {\n    cursor: pointer;\n    outline: none;\n  }\n"])),oA.normalize);J.a.render(Object(v.jsxs)(b.a.StrictMode,{children:[Object(v.jsx)(aA,{}),Object(v.jsx)(QA,{})]}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.4d0a487c.chunk.js.map