import{i as n,t as r}from"./index-66843b29.js";const i=r('<main class="text-center mx-auto text-gray-700 p-4">');function u(){const t={method:"GET",path:"/api/v1/photos"},o={name:"Kosio",roles:["guest"]},c=[{role:"guest",access:[["GET","^\\/api\\/v1\\/photos\\/*$"],["GET","/api/v1/settings"]]},{role:"admin",access:[["GET","/api/*"]]}];console.log(/asdasd/);const a=o.roles.some(s=>c.find(e=>e.role===s)?.access.some(e=>t.method===e[0]&&new RegExp(e[1]).test(t.path)));return(()=>{const s=i();return n(s,a?"Access":"No access"),s})()}export{u as default};
//# sourceMappingURL=roles-80f711df.js.map
