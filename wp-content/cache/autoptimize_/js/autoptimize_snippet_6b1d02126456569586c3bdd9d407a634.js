(function($){$(document).on('click','.vote-block a',function(){var $el=$(this);var id=$el.parent().parent().data('id');var total=$el.parent().parent().data('total');var rating=$el.parent().parent().data('rating');var num=parseInt($el.text(),10);if($el.parent().parent().hasClass('disabled')){return false;}
$.post(ajaxurl,{action:'vote_rating',id:id,num:num}).done(function(data){let pr=data.pr;let total=data.total;let abs=data.abs;let npr=data.npr;let text=data.text;if(pr==='limit'){return false;}else{$el.parent().parent().addClass('disabled');$.cookie('vote-post-'+id,true,{expires:7,path:'/'});let star_count=Math.round(pr/20);let j=1;$el.parent().find('a').each(function(i){if(j<=star_count)$(this).addClass('orange rated');if(j==star_count)$(this).addClass('active');j++;});$($el).closest('.ratings').find('.legend').text(abs+' '+'('+npr+'%) '+text);}}).fail(function(response){});return false;});})(jQuery);function decOfNum(number,titles){cases=[2,0,1,1,1,2];return titles[(number%100>4&&number%100<20)?2:cases[(number%10<5)?number%10:5]];}
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){function n(e){return u.raw?e:encodeURIComponent(e)}
function o(e){return u.raw?e:decodeURIComponent(e)}
function i(e){return n(u.json?JSON.stringify(e):e+"")}
function r(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"))
try{return e=decodeURIComponent(e.replace(c," ")),u.json?JSON.parse(e):e}catch(n){}}
function t(n,o){var i=u.raw?n:r(n)
return e.isFunction(o)?o(i):i}
var c=/\+/g,u=e.cookie=function(r,c,a){if(arguments.length>1&&!e.isFunction(c)){if(a=e.extend({},u.defaults,a),"number"==typeof a.expires){var f=a.expires,s=a.expires=new Date
s.setTime(+s+864e5*f)}
return document.cookie=n(r)+"="+i(c)+(a.expires?"; expires="+a.expires.toUTCString():"")+(a.path?"; path="+a.path:"")+(a.domain?"; domain="+a.domain:"")+(a.secure?"; secure":"")}
for(var d=r?void 0:{},p=document.cookie?document.cookie.split("; "):[],m=0,x=p.length;x>m;m++){var l=p[m].split("="),k=o(l.shift()),v=l.join("=")
if(r&&r===k){d=t(v,c)
break}
r||void 0===(v=t(v))||(d[k]=v)}
return d}
u.defaults={},e.removeCookie=function(n,o){return void 0===e.cookie(n)?!1:(e.cookie(n,"",e.extend({},o,{expires:-1})),!e.cookie(n))}});