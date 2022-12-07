(()=>{"use strict";var e={745:(e,t,a)=>{var n=a(1533);t.createRoot=n.createRoot,t.hydrateRoot=n.hydrateRoot},5215:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useLanguage=t.LangContext=void 0;const n=a(7363),l=a(8080);t.LangContext=(0,n.createContext)((0,l.getInitialLanguage)()),t.useLanguage=function(){return(0,n.useContext)(t.LangContext)}},8080:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getInitialLanguage=t.saveLanguage=t.SUPPORTED_LANGUAGES=void 0,t.SUPPORTED_LANGUAGES=["en_US","zh_TW"];const a="MaiToolsLang";t.saveLanguage=function(e){window.localStorage.setItem(a,e)},t.getInitialLanguage=function(){const e=new URLSearchParams(location.search);if(e.get("hl"))return e.get("hl").startsWith("zh")?"zh_TW":"en_US";return function(){switch(window.localStorage.getItem(a)){case"en_US":return"en_US";case"zh_TW":return"zh_TW"}return null}()||(navigator.language.startsWith("zh")?"zh_TW":"en_US")}},7991:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getFinaleRankTitle=t.getRankTitle=t.getRankByAchievement=t.getRankIndexByAchievement=t.getRankDefinitions=void 0;const a=[{minAchv:100.5,factor:22.4,title:"SSS+"},{minAchv:100,factor:21.6,title:"SSS"},{minAchv:99.5,factor:21.1,title:"SS+"},{minAchv:99,factor:20.8,title:"SS"},{minAchv:98,factor:20.3,title:"S+"},{minAchv:97,factor:20,title:"S"},{minAchv:94,factor:16.8,title:"AAA"},{minAchv:90,factor:15.2,title:"AA"},{minAchv:80,factor:13.6,title:"A"},{minAchv:75,factor:12,title:"BBB"},{minAchv:70,factor:11.2,title:"BB"},{minAchv:60,factor:9.6,title:"B"},{minAchv:50,factor:8,title:"C"}];function n(){return a}function l(e){return a.findIndex((t=>e>=t.minAchv))}function i(e){const t=l(e);return t<0?"D":a[t].title}t.getRankDefinitions=n,t.getRankIndexByAchievement=l,t.getRankByAchievement=function(e){const t=l(e);return t<0?null:n()[t]},t.getRankTitle=i,t.getFinaleRankTitle=function(e){return i(e).replace("SSS+","SSS")}},1499:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.IntervalLines=void 0;const l=n(a(7363));class i extends l.default.PureComponent{render(){const{interval:e,heightUnit:t,onClick:a}=this.props,n=e[0]===e[1];let i,o;const r={bottom:(i=(e[0]-.5)*t-1)+"px"},s={bottom:(o=(e[1]+.5)*t)+"px"};n?i+=4:o-i<14&&(o+=2,i-=5);const c={bottom:i+"px"},u={bottom:o+"px"};return l.default.createElement("div",{onClick:a},l.default.createElement("div",{className:"intervalBoundary",style:s}),l.default.createElement("div",{className:"intervalBoundary",style:r}),l.default.createElement("div",{className:"intervalLabel",style:c},l.default.createElement("span",{className:"intervalLabelText axisLabelText"},e[0])),!n&&l.default.createElement("div",{className:"intervalLabel",style:u},l.default.createElement("span",{className:"intervalLabelText axisLabelText"},e[1])))}}t.IntervalLines=i},1919:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.LvLabel=void 0;const l=n(a(7363));class i extends l.default.PureComponent{render(){const{canZoomIn:e,onClick:t,title:a}=this.props;return l.default.createElement("div",{className:"lvLabel"},l.default.createElement("div",{className:"lvLabelButtonContainer"},l.default.createElement("button",{className:"lvLabelButton",disabled:!e,onClick:t},a)))}}t.LvLabel=i},2330:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.LvRankRatingSegment=void 0;const l=n(a(7363));class i extends l.default.PureComponent{constructor(){super(...arguments),this.minRt=0,this.maxRt=0,this.handleClick=()=>{this.props.highlightInterval(this.minRt,this.maxRt)}}render(){const{minLv:e,minAchv:t,rankFactor:a,maxLv:n,maxAchv:i,heightUnit:o,title:r}=this.props;this.minRt=Math.floor(e*t*a/100),this.maxRt=Math.floor(n*i*a/100);const s={bottom:(this.minRt-.5)*o+"px",height:(this.maxRt-this.minRt+1)*o+"px"},c="ratingSegment segment"+r.replace("+","P");return l.default.createElement("div",{className:c,style:s,title:this.hoverText(),tabIndex:0,onClick:this.handleClick},l.default.createElement("div",{className:"ratingSegmentLabel"},r))}hoverText(){return this.minRt<this.maxRt?`${this.minRt} - ${this.maxRt}`:this.maxRt.toString()}}t.LvRankRatingSegment=i},8758:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.LvRatingContainer=void 0;const l=n(a(7363)),i=a(1919),o=a(2330);class r extends l.default.PureComponent{constructor(){super(...arguments),this.handleLabelClick=()=>{const{lvTitle:e}=this.props;this.props.onZoomIn(e,e)}}render(){const{canZoomIn:e,lvTitle:t,minLv:a,maxLv:n,heightUnit:r,containerHeight:s,ranks:c}=this.props,u={height:s+"px"};return l.default.createElement("div",{className:"lvRatingContainer",style:u},l.default.createElement(i.LvLabel,{title:t,onClick:this.handleLabelClick,canZoomIn:e}),r?c.map(((e,t)=>{const i=0===t?e.minAchv:c[t-1].minAchv-1e-4;return l.default.createElement(o.LvRankRatingSegment,{key:e.title,minLv:a,maxLv:n,minAchv:e.minAchv,maxAchv:i,rankFactor:e.factor,heightUnit:r,title:e.title,highlightInterval:this.props.highlightInterval})})):null)}}t.LvRatingContainer=r},2977:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MultiplierTable=void 0;const l=n(a(7363)),i=a(5215),o=a(7991),r=["qlRankTitleCell","qlThresholdCell"],s={en_US:{rankFactorTable:"Rank Factor Table",rank:"Rank",achievement:"Achievement",factor:"Factor",multiplier:"Multiplier (Factor × Achievement)"},zh_TW:{rankFactorTable:"Rank 係數表",rank:"Rank",achievement:"達成率",factor:"係數",multiplier:"倍率 (係數 × 達成率)"}},c=e=>{const{isHeading:t}=e;return l.default.createElement("tr",null,e.values.map(((e,a)=>{let n="qlRankFactorCell";return a<r.length&&(n+=" "+r[a]),t||0===a?l.default.createElement("th",{key:a,className:n},e):l.default.createElement("td",{key:a,className:n},e)})))};t.MultiplierTable=()=>{const e=(0,o.getRankDefinitions)(),t=e.findIndex((e=>"A"===e.title))+1,a=s[(0,i.useLanguage)()];return l.default.createElement("div",{className:"quickLookup"},l.default.createElement("h2",{className:"quickLookupHeading"},a.rankFactorTable),l.default.createElement("table",{className:"lookupTable"},l.default.createElement("thead",{className:"lookupTableHead"},l.default.createElement(c,{values:[a.rank,a.achievement,a.factor,a.multiplier],isHeading:!0})),l.default.createElement("tbody",null,e.slice(0,t).map(((e,t,a)=>{const n=e.minAchv*e.factor/100,i=t>0?(a[t-1].minAchv-1e-4)*e.factor/100:n,o=n.toFixed(3),r=i.toFixed(3),s=o!==r?`${o} - ${r}`:o;return l.default.createElement(c,{key:t,values:[e.title,e.minAchv,e.factor,s]})})))))}},3828:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.OptionsInput=void 0;const l=n(a(7363)),i=a(6729);class o extends l.default.PureComponent{constructor(){super(...arguments),this.handleChangeMinLv=e=>{const t=e.currentTarget.value,a=(0,i.getLvIndex)(t),n=(0,i.getLvIndex)(this.props.maxLv);this.props.onSetRange(t,i.DX_LEVELS[Math.max(a,n)].title)},this.handleChangeMaxLv=e=>{const t=e.currentTarget.value,a=(0,i.getLvIndex)(this.props.minLv),n=(0,i.getLvIndex)(t);this.props.onSetRange(i.DX_LEVELS[Math.min(a,n)].title,t)},this.handleChangeHeightUnit=e=>{console.log(e.target);const t=parseInt(e.currentTarget.value);this.props.onChangeUnit(t)},this.handleChangeMinRank=e=>{this.props.onSetMinRank(e.currentTarget.value)},this.handleChangeTableDisplay=e=>{this.props.onSetTableDisplay(e.currentTarget.value)}}render(){const{heightUnit:e,minLv:t,minRank:a,maxLv:n,tableDisplay:i}=this.props;return l.default.createElement("div",{className:"optionsContainer"},l.default.createElement("div",{className:"container",tabIndex:-1},l.default.createElement("span",{className:"lvRangeLabelContainer"},l.default.createElement("label",{className:"optionGroup"},"Min Lv: ",l.default.createElement("select",{onChange:this.handleChangeMinLv,value:t},this.renderLvOptions())),l.default.createElement("label",{className:"optionGroup"},"Max Lv: ",l.default.createElement("select",{onChange:this.handleChangeMaxLv,value:n},this.renderLvOptions()))),l.default.createElement("label",{className:"optionGroup"},"Min Rank: ",l.default.createElement("select",{onChange:this.handleChangeMinRank,value:a},l.default.createElement("option",{value:"AAA"},"AAA"),l.default.createElement("option",{value:"S"},"S"),l.default.createElement("option",{value:"SS"},"SS"),l.default.createElement("option",{value:"SSS"},"SSS"))),l.default.createElement("br",null),l.default.createElement("label",{className:"optionGroup"},"Graph: ",l.default.createElement("select",{onChange:this.handleChangeHeightUnit,value:e.toFixed(0)},l.default.createElement("option",{value:"0"},"Hide"),l.default.createElement("option",{value:"3"},"3x"),l.default.createElement("option",{value:"4"},"4x"),l.default.createElement("option",{value:"5"},"5x"),l.default.createElement("option",{value:"8"},"8x"),l.default.createElement("option",{value:"12"},"12x"))),l.default.createElement("label",{className:"optionGroup"},"Table values: ",l.default.createElement("select",{onChange:this.handleChangeTableDisplay,value:i},l.default.createElement("option",{value:"MIN"},"MIN"),l.default.createElement("option",{value:"MAX"},"MAX"),l.default.createElement("option",{value:"RANGE"},"RANGE")))))}renderLvOptions(){const e=[];for(let t=i.DX_LEVELS.length-1;t>=0;t--){const a=i.DX_LEVELS[t];e.push(l.default.createElement("option",{key:t,value:a.title},a.title))}return e}}t.OptionsInput=o},2343:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.RatingAxis=void 0;const l=n(a(7363));t.RatingAxis=({step:e,maxRating:t,heightUnit:a,containerHeight:n,onClick:o})=>{const r={height:n+"px"},s=[];for(let a=0;a<t+e;a+=e)s.push(a);return l.default.createElement("div",{className:"axisLabelContainer",style:r,onClick:o},s.map((e=>l.default.createElement(i,{key:e,value:e,heightUnit:a}))))};const i=({value:e,heightUnit:t})=>{const a={bottom:e*t+"px"};return l.default.createElement("div",{className:"axisLabel",style:a},l.default.createElement("span",{className:"axisLabelText"},e))}},9731:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.RatingTable=void 0;const l=n(a(7363));class i extends l.default.PureComponent{render(){const{displayValue:e,levels:t,ranks:a}=this.props;return l.default.createElement("table",{className:"lookupTable"},l.default.createElement("thead",{className:"lookupTableHead"},l.default.createElement("tr",null,l.default.createElement("th",{className:"lookupTopLeftCell"}),a.map(((e,t)=>l.default.createElement("th",{key:t},e.title))))),l.default.createElement("tbody",{className:"lookupTableBody"},t.map(((t,n)=>l.default.createElement("tr",{key:n},l.default.createElement("th",null,t.title),a.map(((n,i)=>{const o=0===i?n.minAchv:a[i-1].minAchv-1e-4,r=Math.floor(t.minLv*n.minAchv*n.factor*.01);if("MIN"===e)return l.default.createElement("td",{key:i},r);const s=Math.floor(t.maxLv*o*n.factor*.01);if("MAX"===e)return l.default.createElement("td",{key:i},s);const c=r===s?r:`${s} - ${r}`;return l.default.createElement("td",{key:i},c)}))))).reverse()))}}t.RatingTable=i},3003:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.RatingVisualizer=void 0;const l=n(a(7363)),i=a(1499),o=a(8758),r=a(2343);class s extends l.default.PureComponent{constructor(){super(...arguments),this.removeIntervalTimeout=0,this.state={},this.highlightInterval=(e,t)=>{const a=this.state.highlightInterval;a&&a[0]===e&&a[1]===t?this.removeHighlightInterval():this.setState({highlightInterval:[e,t]})},this.removeHighlightInterval=()=>{this.removeIntervalTimeout=window.setTimeout((()=>{this.setState({highlightInterval:void 0}),this.removeIntervalTimeout=0}),0)},this.cancelRemoveHighlightInterval=()=>{this.removeIntervalTimeout&&(clearTimeout(this.removeIntervalTimeout),this.removeIntervalTimeout=0)}}render(){const{axisLabelStep:e,canZoomIn:t,handleSetRange:a,heightUnit:n,levels:s,maxRating:c,ranks:u}=this.props,{highlightInterval:m}=this.state,h=this.getContainerHeight();return n?l.default.createElement("div",{className:"container",onBlur:this.removeHighlightInterval,onFocus:this.cancelRemoveHighlightInterval,tabIndex:-1},l.default.createElement("div",{className:"ratingContainer"},l.default.createElement(r.RatingAxis,{maxRating:c,heightUnit:n,containerHeight:h,step:e,onClick:this.removeHighlightInterval}),s.map(((e,i)=>l.default.createElement(o.LvRatingContainer,{key:i,canZoomIn:t,lvTitle:e.title,minLv:e.minLv,maxLv:e.maxLv,heightUnit:n,containerHeight:h,ranks:u,onZoomIn:a,highlightInterval:this.highlightInterval}))),m&&l.default.createElement(i.IntervalLines,{interval:m,heightUnit:n,onClick:this.removeHighlightInterval}))):null}getContainerHeight(){const{axisLabelStep:e,maxRating:t,heightUnit:a,topPadding:n}=this.props;return(t+e)*a+n}}t.RatingVisualizer=s},6815:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.RootComponent=void 0;const l=n(a(7363)),i=a(8080),o=a(5215),r=a(7991),s=a(6729),c=a(2977),u=a(3828),m=a(9731),h=a(3003);class d extends l.default.PureComponent{constructor(e){super(e),this.handleChangeHeightUnit=e=>{window.localStorage.setItem("visualizerHeightUnit",e.toFixed(0)),this.setState({heightUnit:e})},this.handleSetRange=(e,t)=>{const a=s.DX_LEVELS.find((e=>e.title===t));window.localStorage.setItem("visualizerMinLv",e),window.localStorage.setItem("visualizerMaxLv",t),this.setState({minLv:e,maxLv:t,maxRating:v(a.maxLv)})},this.handleSetMinRank=e=>{window.localStorage.setItem("visualizerMinRank",e),this.setState({minRank:e})},this.handleSetTableDisplay=e=>{window.localStorage.setItem("visualizerTableDisplay",e),this.setState({tableDisplay:e})};const t=parseInt(window.localStorage.getItem("visualizerHeightUnit")),a=isNaN(t)?0:t,n=(0,i.getInitialLanguage)();g(n),this.state={lang:n,minLv:window.localStorage.getItem("visualizerMinLv")||"10",minRank:window.localStorage.getItem("visualizerMinRank")||"SS",maxLv:window.localStorage.getItem("visualizerMaxLv")||"14",width:30,heightUnit:a,maxRating:v(15),tableDisplay:window.localStorage.getItem("visualizerTableDisplay")||"RANGE",topPadding:2*a+50,axisLabelStep:5}}componentDidUpdate(e,t){this.state.lang!==t.lang&&g(this.state.lang)}render(){const{lang:e,heightUnit:t,maxRating:a,axisLabelStep:n,minLv:i,minRank:s,maxLv:d,tableDisplay:v,topPadding:g}=this.state,f=d!==i,p=this.getLevels(),L=(0,r.getRankDefinitions)(),x=L.findIndex((e=>e.title==s)),E=L.slice(0,x+1);return l.default.createElement(o.LangContext.Provider,{value:e},l.default.createElement("div",{className:"ratingVisualizer"},l.default.createElement(u.OptionsInput,{heightUnit:t,maxLv:d,minLv:i,minRank:s,tableDisplay:v,onChangeUnit:this.handleChangeHeightUnit,onSetMinRank:this.handleSetMinRank,onSetRange:this.handleSetRange,onSetTableDisplay:this.handleSetTableDisplay}),l.default.createElement(h.RatingVisualizer,{canZoomIn:f,heightUnit:t,maxRating:a,levels:p,topPadding:g,axisLabelStep:n,ranks:E,handleSetRange:this.handleSetRange}),l.default.createElement("div",{className:"container"},l.default.createElement(m.RatingTable,{ranks:E,levels:p,displayValue:v}),l.default.createElement("hr",{className:"sectionSep"}),l.default.createElement(c.MultiplierTable,null),l.default.createElement("footer",{className:"footer"},l.default.createElement("hr",{className:"sectionSep"}),l.default.createElement("span",null,"Made by "),l.default.createElement("a",{className:"authorLink",href:"https://github.com/myjian",target:"_blank"},"myjian"),l.default.createElement("span",null,".")))))}getDetailLevels(e,t){const a=[],n=s.DX_LEVELS[t].maxLv;let l=s.DX_LEVELS[e].minLv;for(;l<=n;)a.push({title:l.toFixed(1),minLv:l,maxLv:l}),l+=.1;return a}getLevels(){const{minLv:e,maxLv:t}=this.state,a=(0,s.getLvIndex)(e),n=(0,s.getLvIndex)(t);return n-a<2?this.getDetailLevels(a,n):s.DX_LEVELS.slice(a,n+1)}}function v(e){const t=(0,r.getRankDefinitions)()[0];return Math.floor(t.minAchv*t.factor*e/100)}function g(e){switch(e){case"en_US":document.title="maimai DX Rating Lookup Table & Visualization";break;case"zh_TW":document.title="maimai DX R值圖表"}}t.RootComponent=d},6729:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getLvIndex=t.DX_LEVELS=void 0,t.DX_LEVELS=[{title:"8",minLv:8,maxLv:8.6},{title:"8+",minLv:8.7,maxLv:8.9},{title:"9",minLv:9,maxLv:9.6},{title:"9+",minLv:9.7,maxLv:9.9},{title:"10",minLv:10,maxLv:10.6},{title:"10+",minLv:10.7,maxLv:10.9},{title:"11",minLv:11,maxLv:11.6},{title:"11+",minLv:11.7,maxLv:11.9},{title:"12",minLv:12,maxLv:12.6},{title:"12+",minLv:12.7,maxLv:12.9},{title:"13",minLv:13,maxLv:13.6},{title:"13+",minLv:13.7,maxLv:13.9},{title:"14",minLv:14,maxLv:14.6},{title:"14+",minLv:14.7,maxLv:14.9},{title:"15",minLv:15,maxLv:15}],t.getLvIndex=function(e){return t.DX_LEVELS.findIndex((t=>t.title===e))}},9875:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=n(a(7363)),i=n(a(745)),o=a(6815);i.default.createRoot(document.getElementById("root")).render(l.default.createElement(o.RootComponent,null))},7363:e=>{e.exports=React},1533:e=>{e.exports=ReactDOM}},t={};!function a(n){var l=t[n];if(void 0!==l)return l.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,a),i.exports}(9875)})();