(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02567a98"],{1:function(t,e){},2:function(t,e){},"2ebe":function(t,e,i){"use strict";i("d4f3")},4599:function(t,e,i){"use strict";i("c7ef")},c7ef:function(t,e,i){},d4f3:function(t,e,i){},e3f4:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("el-card",{staticStyle:{"margin-top":"10px"}},[i("el-form",{ref:"form",attrs:{"label-position":"top","label-width":"80px",model:t.form,rules:t.rules}},[i("el-row",[i("el-col",{attrs:{span:24}},[i("el-form-item",{attrs:{label:"模板名称",prop:"name"}},[i("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],1)],1),t._v(" "),i("el-row",{attrs:{hidden:""}},[i("el-col",{attrs:{span:24}},[i("el-form-item",{attrs:{label:"计费方式",prop:"type"}},[i("el-radio-group",{on:{change:t.changeType},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},[i("el-radio",{staticClass:"radio",attrs:{label:"3"}},[t._v("计件")]),t._v(" "),i("el-radio",{staticClass:"radio",attrs:{label:"1"}},[t._v("重量")]),t._v(" "),i("el-radio",{staticClass:"radio",attrs:{label:"2"}},[t._v("体积")])],1)],1)],1)],1),t._v(" "),i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData.filter((function(e){return t.handleAdd||e.name.toLowerCase().includes(t.handleAdd.toLowerCase())}))}},[i("el-table-column",{attrs:{prop:"code",align:"center",label:"配送区域"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(t._f("areaFilters")(e.row.regionList))+"\n          ")]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"billableQuantity",align:"center",width:"200px",label:"首"+t.first},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-input",{staticStyle:{width:"120px"},attrs:{placeholder:"请输入内容",type:"text",onkeyup:"if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\\D/g,'')}",onafterpaste:"if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'0')}else{this.value=this.value.replace(/\\D/g,'')}"},model:{value:e.row.billableQuantity,callback:function(i){t.$set(e.row,"billableQuantity",i)},expression:"scope.row.billableQuantity"}}),t._v("\n            "+t._s(t.unit)+"\n          ")]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",prop:"billablePrice",label:"运费",width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-input",{attrs:{placeholder:"请输入内容",type:"number"},model:{value:e.row.billablePrice,callback:function(i){t.$set(e.row,"billablePrice",i)},expression:"scope.row.billablePrice"}})]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"additionQuantity",align:"center",width:"200px",label:"续"+t.Continued},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-input",{staticStyle:{width:"120px"},attrs:{placeholder:"请输入内容",type:"text",onkeyup:"if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\\D/g,'')}",onafterpaste:"if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'0')}else{this.value=this.value.replace(/\\D/g,'')}"},model:{value:e.row.additionQuantity,callback:function(i){t.$set(e.row,"additionQuantity",i)},expression:"scope.row.additionQuantity"}}),t._v(" "),i("span",[t._v(t._s(t.unit))])]}}])}),t._v(" "),i("el-table-column",{attrs:{prop:"additionPrice",align:"center",width:"150px",label:"运费"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-input",{attrs:{placeholder:"请输入内容",type:"number"},model:{value:e.row.additionPrice,callback:function(i){t.$set(e.row,"additionPrice",i)},expression:"scope.row.additionPrice"}})]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",width:"200px",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{size:"mini",type:"primary",plain:""},on:{click:function(i){return t.handleEdit(e.$index,e.row)}}},[t._v("\n              设置地区\n            ")]),t._v(" "),i("el-button",{attrs:{size:"mini",type:"danger",plain:""},on:{click:function(i){return t.handleDelete(e.$index,e.row)}}},[t._v("\n              删除\n            ")])]}}])})],1),t._v(" "),i("el-form-item",[i("el-button",{attrs:{size:"mini",plain:"",icon:"el-icon-plus"},on:{click:function(e){return t.handleAdd()}},model:{value:t.handleAdd,callback:function(e){t.handleAdd=e},expression:"handleAdd"}},[t._v("\n          添加一行自定义区域\n        ")])],1),t._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:t.handleCreate}},[t._v("确认提交")])],1)],1)],1),t._v(" "),i("el-dialog",{attrs:{width:"70%",visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("many-area-select",{attrs:{selectedData:t.manyAreaValue},on:{"update:selectedData":function(e){t.manyAreaValue=e},"update:selected-data":function(e){t.manyAreaValue=e}}}),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.handleConfirmArea}},[t._v("确 定")])],1)],1)],1)},n=[],s=(i("a481"),i("28a5"),i("96cf"),i("3b8d")),r=(i("ac6a"),i("8a9d")),l=(i("2f62"),i("fa53")),c={components:{manyAreaSelect:l["a"]},filters:{areaFilters:function(t){if(0===t.length)return"无";var e=[];return t.forEach((function(t){e.push(t.regionName)})),e.join(",")}},data:function(){return{manyAreaValue:"",form:{name:"",type:"3",itemList:[]},transferTitles:["全部地区","已选择地区"],tableData:[],pieces:"件数",heavy:"重",volume:"体积",piece:"件",stere:"立方米",g:"克",unit:"件",first:"件",Continued:"件数",dialogVisible:!1,allValue:[],selectValue:[],currentRow:"",currentIndex:"",allArea:[],rules:{name:[{required:!0,message:"请输入模板名称",trigger:"blur"}],type:[{required:!1,message:"请选择活动区域",trigger:"change"}]}}},created:function(){this.getAreaList()},methods:{changeType:function(){var t=this;this.$confirm("切换计价方式后，当前模板的运费信息将被清空，确定继续吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){switch(t.tableData=[],t.form.type){case"1":t.first=t.heavy,t.Continued=t.heavy,t.unit=t.g;break;case"2":t.first=t.volume,t.Continued=t.volume,t.unit=t.stere;break;case"3":t.first=t.pieces,t.Continued=t.pieces,t.unit=t.piece;break}}))},getAreaList:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(r["c"])({});case 2:e=t.sent,this.allArea=e.result[0];case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),handleConfirmArea:function(){console.log(this.manyAreaValue);var t=[];if(0!==this.manyAreaValue.length)for(var e=0;e<this.manyAreaValue.length;e++){var i=this.manyAreaValue[e],a=i.regionId.split("-"),n=i.regionName.split("-");if(0!=a[2]){var s={regionId:"",regionName:""};s.regionId=a[2],s.regionName=n[2],t.push(s)}else this.allArea.child.forEach((function(e){e.regionId!=a[1]||(t=t.concat(e.child))}))}this.currentRow.regionList=t,this.currentRow.selectRegionList=this.manyAreaValue,this.tableData.splice(this.currentIndex,1,this.currentRow),this.manyAreaValue=[],this.dialogVisible=!1},handleAdd:function(){var t={billableQuantity:0,billablePrice:0,additionQuantity:0,additionPrice:0,regionList:[],selectRegionList:[]};this.tableData.push(t)},handleEdit:function(t,e){console.log(e),this.manyAreaValue=e.selectRegionList,this.currentIndex=t,this.currentRow=e,this.dialogVisible=!0},handleDelete:function(t,e){this.tableData.splice(t,1)},handleCreate:function(){var t=this;this.$refs.form.validate(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(i){var a,n,s,l,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!i){e.next=41;break}if(console.log(t.tableData),a=!0,0!==t.tableData.length){e.next=7;break}a=!1,e.next=29;break;case 7:n=0;case 8:if(!(n<t.tableData.length)){e.next=29;break}s=t.tableData[n],e.t0=regeneratorRuntime.keys(s);case 11:if((e.t1=e.t0()).done){e.next=26;break}if(l=e.t1.value,"regionList"!==l){e.next=19;break}if(0!==s[l].length){e.next=17;break}return a=!1,e.abrupt("break",26);case 17:e.next=24;break;case 19:if(!s.hasOwnProperty(l)){e.next=24;break}if(c=s[l],""!==c){e.next=24;break}return a=!1,e.abrupt("break",26);case 24:e.next=11;break;case 26:n++,e.next=8;break;case 29:if(a){e.next=33;break}t.$message({type:"warning",message:"模板中有未填写的值，请检查后提交！"}),e.next=39;break;case 33:return t.form.itemList=t.tableData,e.next=36,Object(r["a"])(t.form);case 36:e.sent,t.$message({message:"创建成功！",type:"success"}),t.$router.replace({path:"/delivery/config"});case 39:e.next=42;break;case 41:return e.abrupt("return",!1);case 42:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}},o=c,u=(i("4599"),i("2877")),h=Object(u["a"])(o,a,n,!1,null,"de010612",null);e["default"]=h.exports},fa53:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"manyAreaSelect"},[i("div",{staticClass:"item"},[t._m(0),t._v(" "),i("div",{staticClass:"item-content"},[i("ul",t._l(t.chinaArea,(function(e,a){return i("li",{key:a,class:e.selected?"active":"",on:{click:function(i){return t.getCityList(e)}}},[t._v(t._s(e.regionName))])})),0)]),t._v(" "),i("div",{staticClass:"item-footer"})]),t._v(" "),i("div",{staticClass:"item"},[t._m(1),t._v(" "),i("div",{staticClass:"item-content"},[i("ul",{directives:[{name:"show",rawName:"v-show",value:0===t.cityList.length,expression:"cityList.length===0"}]},[i("li",[t._v("请选择省")])]),t._v(" "),i("ul",{directives:[{name:"show",rawName:"v-show",value:!t.notLimitButton.notLimitCity&&0!==t.cityList.length,expression:"!notLimitButton.notLimitCity &&cityList.length!==0"}]},t._l(t.cityList,(function(e,a){return i("li",{key:a,class:e.selected?"active":"",on:{click:function(i){return t.getDistricList(e)}}},[t._v(t._s(e.regionName))])})),0)]),t._v(" "),i("div",{staticClass:"item-footer"})]),t._v(" "),i("div",{staticClass:"item"},[t._m(2),t._v(" "),i("div",{staticClass:"item-content"},[i("ul",{directives:[{name:"show",rawName:"v-show",value:0===t.districList.length,expression:"districList.length===0"}]},[i("li",[t._v("\n          请选择地区")])]),t._v(" "),i("ul",{directives:[{name:"show",rawName:"v-show",value:!t.notLimitButton.notLimitCity&&!t.notLimitButton.notLimitDistrict&&0!==t.districList.length,expression:"!notLimitButton.notLimitCity && !notLimitButton.notLimitDistrict && districList.length!==0"}]},t._l(t.districList,(function(e,a){return i("li",{key:a,class:e.selected?"active":"",on:{click:function(i){return t.getAreaCombineID(e)}}},[t._v(t._s(e.regionName))])})),0)]),t._v(" "),i("div",{staticClass:"item-footer"},[i("button",{staticClass:"button",class:t.notLimitButton.notLimitDistrict?"success":"",attrs:{disabled:!t.selectItem.city.regionName||!t.selectItem.province.regionName||t.notLimitButton.notLimitCity},on:{click:function(e){return t.districNotLitmit({regionName:"不限",regionId:"0"})}}},[t._v("全选地区")])])]),t._v(" "),i("div",{staticClass:"trangle"},[i("div",{staticClass:"trangle-wrap"},[i("div",{staticClass:"left"},[i("button",{staticClass:"button",attrs:{disabled:t.direactionStatusToRight},on:{click:t.transferToRight}},[i("i",{class:this.iconDirection.right})])]),t._v(" "),i("div",{staticClass:"right"},[i("button",{staticClass:"button",attrs:{disabled:t.direactionStatusToLeft},on:{click:t.transferToLeft}},[i("i",{class:this.iconDirection.left})])])])]),t._v(" "),i("div",{staticClass:" item "},[t._m(3),t._v(" "),i("div",{staticClass:"item-content "},[i("ul",{staticClass:"selectedContent"},t._l(t.selectedList,(function(e,a){return i("li",{key:a,class:e.selected?"active":"",on:{click:function(i){return t.selectedAreaSingle(e)}}},[t._v(t._s(e.regionName))])})),0)]),t._v(" "),i("div",{staticClass:"item-footer"},[i("button",{staticClass:"button",class:t.selectedAllButtonStatus?"success":"",attrs:{disabled:0===t.rightDataList.length},on:{click:function(e){return t.selectedAllArea()}}},[t._v(t._s(t.selectedAllButtonStatus?"反选":"全部"))])])])])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item-title"},[i("span",[t._v(" 选择国家")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item-title"},[i("span",[t._v("请选择省")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item-title"},[i("span",[t._v("选择地区")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item-title "},[i("span",[t._v("已选地区")])])}],s=(i("28a5"),i("96cf"),i("3b8d")),r=i("8a9d"),l=i("2ef0"),c=i.n(l),o=(i("b64a"),{name:"manyAreaSelect",data:function(){return{chinaArea:JSON.parse(window.localStorage.getItem("chinaArea"))||[],notLimitButton:{notLimitCity:!1,notLimitDistrict:!1},selectedAllButtonStatus:!1,selectItem:{province:{},city:{},distric:{}},cityList:[],districList:[],rightDataList:[],rightData:[],leftData:[]}},props:{selectedData:{type:[String,Object,Array]},iconDirection:{type:Object,default:function(){return{left:"el-icon-arrow-left",right:"el-icon-arrow-right"}}}},created:function(){this.AreaTree()},computed:{selectedList:function(){return this.selectedData&&""!==this.selectedData?(this.rightDataList=this.selectedData,this.rightDataList):this.rightDataList},direactionStatusToRight:function(){return this.notLimitButton.notLimitCity||this.notLimitButton.notLimitDistrict?this.notLimitButton.notLimitCity?(this.removeAllSelected(this.cityList),this.removeAllSelected(this.districList),!1):!!this.notLimitButton.notLimitDistrict&&(this.removeAllSelected(this.districList),!1):!this.selectItem.distric.regionName},direactionStatusToLeft:function(){return 0===this.rightData.length}},methods:{AreaTree:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(r["c"])({});case 2:e=t.sent,this.chinaArea=e.result;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),mapSelect:function(t,e,i){var a=this;return i?t.map((function(t){t.regionId===e.regionId&&(e.selected&&!0===e.selected?a.$delete(t,"selected"):a.$set(t,"selected",!0))})):t.map((function(t){t.regionId===e.regionId?e.selected&&!0===e.selected?a.$delete(t,"selected"):a.$set(t,"selected",!0):a.$delete(t,"selected")}))},resetToDefault:function(){this.leftData=[],this.notLimitButton={notLimitCity:!1,notLimitDistrict:!1},this.selectItem.city={},this.selectItem.distric={},this.removeAllSelected(this.cityList),this.removeAllSelected(this.districList),this.cityList=[],this.districList=[]},getCityList:function(t){this.resetToDefault(),t&&(this.cityList=t.child,this.selectItem.province=t,this.mapSelect(this.chinaArea,t))},getDistricList:function(t){this.leftData=[],this.notLimitButton.notLimitDistrict=!1,this.removeAllSelected(this.districList),this.selectItem.distric={},this.districList=[],t&&(this.districList=t.child,this.selectItem.city=t,this.mapSelect(this.cityList,t))},getAreaCombineID:function(t){t&&(this.selectItem.distric=t,this.mapSelect(this.districList,t,"manySelect"),this.leftData.push({regionName:this.selectItem.province.regionName+"-"+this.selectItem.city.regionName+"-"+t.regionName,regionId:this.selectItem.province.regionId+"-"+this.selectItem.city.regionId+"-"+t.regionId}),this.leftData=c.a.uniqBy(this.leftData,"regionId"),this.leftData.length===this.districList.length&&(this.leftData=[],this.notLimitButton.notLimitDistrict=!0,this.leftData.push({regionName:this.selectItem.province.regionName+"-"+this.selectItem.city.regionName+"-不限",regionId:this.selectItem.province.regionId+"-"+this.selectItem.city.regionId+"-0"})))},cityNotLitmit:function(t){this.leftData=[],this.notLimitButton.notLimitCity=!this.notLimitButton.notLimitCity,this.leftData.push({regionName:this.selectItem.province.regionName+"-不限-不限",regionId:this.selectItem.province.regionId+"-0-0"})},districNotLitmit:function(t){this.leftData=[],this.notLimitButton.notLimitDistrict=!this.notLimitButton.notLimitDistrict,this.leftData.push({regionName:this.selectItem.province.regionName+"-"+this.selectItem.city.regionName+"-不限",regionId:this.selectItem.province.regionId+"-"+this.selectItem.city.regionId+"-0"})},transferToRight:function(){var t=this;if(this.leftData&&0!==this.leftData.length){if(1===this.leftData.length){var e=this.leftData[0].regionId.split("-");this.rightDataList.map((function(i){var a=i.regionId.split("-");e[0]===a[0]&&("0"===e[1]?t.rightDataList=t.rightDataList.filter((function(t){var i=t.regionId.split("-");if(e[0]!==i[0])return t})):"0"===e[2]?t.rightDataList=t.rightDataList.filter((function(t){var i=t.regionId.split("-");if(e[0]===i[0]&&e[1]===i[1]){if("0"===t[2])return t}else if(e[0]!==i[0]||e[1]!==i[1])return t})):t.rightDataList=t.rightDataList.filter((function(t){var i=t.regionId.split("-");if(e[0]!==i[0])return t;if(e[1]===i[1]){if("0"!==i[2])return t}else if("0"!==i[1])return t})))}))}else{var i=this.leftData[0].regionId.split("-");this.rightDataList=this.rightDataList.filter((function(t){var e=t.regionId.split("-");if(i[0]!==e[0])return t;if(i[1]===e[1]){if("0"!==e[2])return t}else if("0"!==e[1])return t}))}this.leftData.map((function(e){t.rightDataList.push(e)})),this.rightDataList=c.a.uniqBy(this.rightDataList,"regionId"),this.resetToDefault()}},selectedAreaSingle:function(t){var e=this;t&&(this.rightData=[],this.mapSelect(this.rightDataList,t,"manySelect"),this.rightDataList.map((function(t){t.selected&&e.rightData.push(t)})))},selectedAllArea:function(){var t=this;this.selectedAllButtonStatus?(this.removeAllSelected(this.rightDataList),this.rightData=[]):(this.rightDataList.map((function(e){return t.$set(e,"selected",!0)})),this.rightData=this.rightDataList),this.selectedAllButtonStatus=!this.selectedAllButtonStatus},transferToLeft:function(){this.rightData&&0!==this.rightData.length&&(this.rightDataList=this.rightDataList.filter((function(t){if(!t.selected)return t})),this.rightData=[])},removeAllSelected:function(t){var e=this;t.map((function(t){return e.$delete(t,"selected")}))}},watch:{rightDataList:function(t,e){t.length!==this.rightData.length||0===t.length?this.selectedAllButtonStatus=!1:this.selectedAllButtonStatus=!0,this.$emit("update:selectedData",t)}}}),u=o,h=(i("2ebe"),i("2877")),d=Object(h["a"])(u,a,n,!1,null,"767d3b08",null);e["a"]=d.exports}}]);