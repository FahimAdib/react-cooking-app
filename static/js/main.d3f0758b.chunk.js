(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{14:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(7),c=t.n(r),l=t(1),s=t(5);function m(e){var n=e.name,t=e.amount;return i.a.createElement(i.a.Fragment,null,i.a.createElement("span",null,n),i.a.createElement("span",null,t))}function u(e){var n=e.ingredients.map((function(e){return i.a.createElement(m,Object.assign({key:e.id},e))}));return i.a.createElement("div",{className:"ingredient__grid"},n)}function o(e){var n=e.id,t=e.name,r=e.cookTime,c=e.servings,l=e.instructions,s=e.ingredients,m=Object(a.useContext)(E),o=m.handleRecipeDelete,d=m.handleRecipeSelect;return i.a.createElement("div",{className:"recipe"},i.a.createElement("div",{className:"recipe__header"},i.a.createElement("h3",{className:"recipe__title"},t),i.a.createElement("div",null,i.a.createElement("button",{className:"btn btn-primary mr-1",onClick:function(){return d(n)}},"Edit"),i.a.createElement("button",{className:"btn btn-danger",onClick:function(){return o(n)}},"Delete"))),i.a.createElement("div",{className:"recipe__row"},i.a.createElement("span",{className:"recipe__label"},"Cook Time:"),i.a.createElement("span",{className:"recipe__value"},r)),i.a.createElement("div",null,i.a.createElement("span",{className:"recipe__label"},"Servings:"),i.a.createElement("span",{className:"recipe__value"},c)),i.a.createElement("div",null,i.a.createElement("span",{className:"recipe__label"},"Instructions:"),i.a.createElement("div",{className:"recipe__value recipe__value--indented recipe__instructions"},l)),i.a.createElement("div",null,i.a.createElement("span",{className:"recipe__label"},"Ingredients:"),i.a.createElement("div",{className:"recipe__value recipe__value--indented"},i.a.createElement(u,{ingredients:s}))))}function d(e){var n=e.recipes,t=Object(a.useContext)(E).handleRecipeAdd;return i.a.createElement("div",{className:"recipe-list"},i.a.createElement("div",null,n.map((function(e){return i.a.createElement(o,Object.assign({key:e.id},e))}))),i.a.createElement("div",{className:"recipe-list-add-recipe-btn-container"},i.a.createElement("button",{className:"btn btn-primary",onClick:t},"Add Recipe")))}var p=t(2);function v(e){var n=e.ingredient,t=e.handleIngredientChange,a=e.handleIngredientDelete;function r(e){t(n.id,Object(p.a)(Object(p.a)({},n),e))}return i.a.createElement(i.a.Fragment,null,i.a.createElement("input",{className:"recipe-edit__input",type:"text",value:n.name,onChange:function(e){return r({name:e.target.value})}}),i.a.createElement("input",{className:"recipe-edit__input",type:"text",value:n.amount,onChange:function(e){return r({amount:e.target.value})}}),i.a.createElement("button",{className:"btn btn-danger",onClick:function(){return a(n.id)}},"\xd7"))}var g=t(16);function b(e){var n=e.recipe,t=Object(a.useContext)(E),r=t.handleRecipeChange,c=t.handleRecipeSelect;function s(e){r(n.id,Object(p.a)(Object(p.a)({},n),e))}function m(e,t){var a=Object(l.a)(n.ingredients),i=a.findIndex((function(n){return n.id===e}));a[i]=t,s({ingredients:a})}function u(e){s({ingredients:n.ingredients.filter((function(n){return n.id!==e}))})}return i.a.createElement("div",{className:"recipe-edit"},i.a.createElement("div",{className:"recipe-edit__remove-button-container"},i.a.createElement("button",{className:"btn recipe-edit__remove-button",onClick:function(){return c(void 0)}},"\xd7")),i.a.createElement("div",{className:"recipe-edit__details-grid"},i.a.createElement("label",{className:"recipe-edit__label",htmlFor:"name"},"Name"),i.a.createElement("input",{className:"recipe-edit__input",type:"text",name:"name",id:"name",value:n.name,onChange:function(e){return s({name:e.target.value})}}),i.a.createElement("label",{className:"recipe-edit__label",htmlFor:"cookTIme"},"Cook Time"),i.a.createElement("input",{className:"recipe-edit__input",type:"text",name:"cookTime",id:"cookTime",value:n.cookTime,onChange:function(e){return s({cookTime:e.target.value})}}),i.a.createElement("label",{className:"recipe-edit__label",htmlFor:"servings"},"Servings"),i.a.createElement("input",{className:"recipe-edit__input",type:"number",min:"1",name:"servings",id:"servings",value:n.servings,onChange:function(e){return s({servings:parseInt(e.target.value)||""})}}),i.a.createElement("label",{className:"recipe-edit__label",htmlFor:"instructions"},"Instructions"),i.a.createElement("textarea",{name:"instructions",id:"instructions",className:"recipe-edit__input",value:n.instructions,onChange:function(e){return s({instructions:e.target.value})}})),i.a.createElement("br",null),i.a.createElement("label",{className:"recipe-edit__label"},"Ingredients"),i.a.createElement("div",{className:"recipe-edit__ingredient-grid"},i.a.createElement("div",null,"Name"),i.a.createElement("div",null,"Amount"),i.a.createElement("div",null),n.ingredients.map((function(e){return i.a.createElement(v,{key:e.id,ingredient:e,handleIngredientChange:m,handleIngredientDelete:u})}))),i.a.createElement("div",{className:"recipe-edit__add-ingredient-btn-container"},i.a.createElement("button",{className:"btn btn-primary",onClick:function(){return function(){var e={id:Object(g.a)(),name:"",amount:""};s({ingredients:[].concat(Object(l.a)(n.ingredients),[e])})}()}}," ","Add Ingredient")))}t(14);var E=Object(a.createContext)();var _=[{id:1,name:"Plain Chiken",servings:3,cookTime:"1:45",instructions:"1. Put salt on Chicken\n2. Put Chicken in oven\n3. Eat Chicken",ingredients:[{id:1,name:"Chicken",amount:"2 lbs"},{id:2,name:"Salt",amount:"1 Tbs"}]},{id:2,name:"Plain Fish",servings:2,cookTime:"2:00",instructions:"1. Put salt on Fish\n2. Put Fish in oven\n3. Eat Fish",ingredients:[{id:1,name:"Fish",amount:"2 lbs"},{id:2,name:"Salt",amount:"1 Tbs"}]}],f=function(){var e=Object(a.useState)(_),n=Object(s.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(),m=Object(s.a)(c,2),u=m[0],o=m[1],p=t.find((function(e){return e.id===u}));Object(a.useEffect)((function(){var e=localStorage.getItem("cookingWithReact.recipes");null!==e&&r(JSON.parse(e))}),[]),Object(a.useEffect)((function(){localStorage.setItem("cookingWithReact.recipes",JSON.stringify(t))}),[t]);var v={handleRecipeAdd:function(){var e={id:Object(g.a)(),name:"",servings:"",cookTime:"",instructions:"",ingredients:[{id:Object(g.a)(),name:"",amount:""}]};r([].concat(Object(l.a)(t),[e])),o(e.id)},handleRecipeDelete:function(e){null!==u&&u===e&&o(void 0);r(t.filter((function(n){return n.id!==e})))},handleRecipeSelect:function(e){o(e)},handleRecipeChange:function(e,n){var a=Object(l.a)(t),i=a.findIndex((function(n){return n.id===e}));a[i]=n,r(a)}};return i.a.createElement(E.Provider,{value:v},i.a.createElement(d,{recipes:t}),p&&i.a.createElement(b,{recipe:p}))};c.a.render(i.a.createElement(f,null),document.getElementById("root"))},9:function(e,n,t){e.exports=t(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.d3f0758b.chunk.js.map