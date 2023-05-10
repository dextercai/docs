"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[8776],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),c=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,k=u["".concat(d,".").concat(m)]||u[m]||p[m]||o;return a?r.createElement(k,s(s({ref:t},l),{},{components:a})):r.createElement(k,s({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4664:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(3117),n=(a(7294),a(3905));const o={title:"Backup and Restore",weight:26},s=void 0,i={unversionedId:"datastore/backup-restore",id:"datastore/backup-restore",title:"Backup and Restore",description:"The way K3s is backed up and restored depends on which type of datastore is used.",source:"@site/docs/datastore/backup-restore.md",sourceDirName:"datastore",slug:"/datastore/backup-restore",permalink:"/datastore/backup-restore",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/datastore/backup-restore.md",tags:[],version:"current",lastUpdatedAt:1683756691,formattedLastUpdatedAt:"May 10, 2023",frontMatter:{title:"Backup and Restore",weight:26},sidebar:"mySidebar",previous:{title:"Cluster Datastore",permalink:"/datastore/"},next:{title:"High Availability Embedded etcd",permalink:"/datastore/ha-embedded"}},d={},c=[{value:"Backup and Restore with SQLite",id:"backup-and-restore-with-sqlite",level:2},{value:"Backup and Restore with External Datastore",id:"backup-and-restore-with-external-datastore",level:2},{value:"Backup and Restore with Embedded etcd Datastore",id:"backup-and-restore-with-embedded-etcd-datastore",level:2}],l={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The way K3s is backed up and restored depends on which type of datastore is used."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"In addition to backing up the datastore itself, you must also back up the server token file at ",(0,n.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/k3s/server/token"),".\nYou must restore this file, or pass its value into the ",(0,n.kt)("inlineCode",{parentName:"p"},"--token")," option, when restoring from backup.\nIf you do not use the same token value when restoring, the snapshot will be unusable, as the token is used to encrypt confidential data within the datastore itself.")),(0,n.kt)("h2",{id:"backup-and-restore-with-sqlite"},"Backup and Restore with SQLite"),(0,n.kt)("p",null,"No special commands are required to back up or restore the SQLite datastore. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To back up the SQLite datastore, take a copy of ",(0,n.kt)("inlineCode",{parentName:"li"},"/var/lib/rancher/k3s/server/db/"),"."),(0,n.kt)("li",{parentName:"ul"},"To restore the SQLite datastore, restore the contents of ",(0,n.kt)("inlineCode",{parentName:"li"},"/var/lib/rancher/k3s/server/db")," (and the token, as discussed above).")),(0,n.kt)("h2",{id:"backup-and-restore-with-external-datastore"},"Backup and Restore with External Datastore"),(0,n.kt)("p",null,"When an external datastore is used, backup and restore operations are handled outside of K3s. The database administrator will need to back up the external database, or restore it from a snapshot or dump."),(0,n.kt)("p",null,"We recommend configuring the database to take recurring snapshots."),(0,n.kt)("p",null,"For details on taking database snapshots and restoring your database from them, refer to the official database documentation:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/8.0/en/replication-snapshot-method.html"},"Official MySQL documentation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/8.3/backup-dump.html"},"Official PostgreSQL documentation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://etcd.io/docs/latest/op-guide/recovery/"},"Official etcd documentation"))),(0,n.kt)("h2",{id:"backup-and-restore-with-embedded-etcd-datastore"},"Backup and Restore with Embedded etcd Datastore"),(0,n.kt)("p",null,"See the ",(0,n.kt)("a",{parentName:"p",href:"/cli/etcd-snapshot"},(0,n.kt)("inlineCode",{parentName:"a"},"k3s etcd-snapshot")," command documentation")," for information on performing backup and restore operations on the embedded etcd datastore."))}p.isMDXComponent=!0}}]);