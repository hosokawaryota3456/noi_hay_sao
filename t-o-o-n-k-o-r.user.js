// ==UserScript==
// @name         t-o-o-n-k-o-r
// @namespace    t-o-o-n-k-o-r.user.js
// @version      2024.10.17
// @description  down t-o-o-n-k-o-r
// @author       You
// @include      /^https?://toonkor\d+\.com/.+?\.html/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=toonkor446.com
// @require      https://cdn.jsdelivr.net/npm/@zip.js/zip.js@2.7.48/dist/zip.min.js
// @downloadURL  https://github.com/hosokawaryota3456/noi_hay_sao/raw/main/t-o-o-n-k-o-r.user.js
// @updateURL    https://github.com/hosokawaryota3456/noi_hay_sao/raw/main/t-o-o-n-k-o-r.meta.js
// ==/UserScript==

(function(_0x4b2307,_0x54315e){const _0x67d8d=a0_0x20db,_0x44a50f=_0x4b2307();while(!![]){try{const _0x2daa21=-parseInt(_0x67d8d(0x185))/0x1+parseInt(_0x67d8d(0x199))/0x2*(parseInt(_0x67d8d(0x151))/0x3)+parseInt(_0x67d8d(0x175))/0x4*(parseInt(_0x67d8d(0x17a))/0x5)+parseInt(_0x67d8d(0x153))/0x6+-parseInt(_0x67d8d(0x16f))/0x7+parseInt(_0x67d8d(0x164))/0x8+parseInt(_0x67d8d(0x16b))/0x9;if(_0x2daa21===_0x54315e)break;else _0x44a50f['push'](_0x44a50f['shift']());}catch(_0x26cd63){_0x44a50f['push'](_0x44a50f['shift']());}}}(a0_0x20b2,0xd42a9));function a0_0x20b2(){const _0x3099e5=['1478007qpfrZY','.png','className','flex','1585101HjHgPV','body','stylesheet','all','gap','alignItems','12JbbLaC','heartbeat','\x0a\x20\x20\x20\x20\x20\x20\x20\x20.status-num\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20\x27Acme\x27,\x20sans-serif\x20!important;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x205rem;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#FD7377;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20-webkit-text-stroke:\x201px\x20#C62428;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x200.2rem\x20solid\x20#167975;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x201rem;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x200\x202rem;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#F9FDFD;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200.5rem\x200.6rem\x20#2E8B87;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20min-height:\x204rem;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20','50vw','origin','452255nuVvsc','link','length','map','position','.jpg','head','rel','toonkor','cursor','forEach','1072534TDKBIU','replace','remove','image/png','tai-ve','0.5rem','display','application/zip','style','arrayBuffer','img','translate(-50%)','.view-wrap','createElement','pointer','firstChild','name','1.5rem','.zip','add','509826CyXFLc','URL','div','slice','addEventListener','.status-num','absolute','center','location','download','.webp','src','ZipWriter','left','width','querySelector','click','3iyNZTJ','image/webp','5263398wEzrZT','89504e47','textContent','appendChild','justifyContent','#heartbeat','splice','getUint32','blob','push','\x0a\x20\x20\x20\x20\x20\x20.tai-ve\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20heartbeat\x202s\x20infinite;\x20/*\x20Apply\x20the\x20heartbeat\x20animation\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform-origin:\x20center;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20@keyframes\x20heartbeat\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x200%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20scale(1);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x201;\x20/*\x20Start\x20with\x20full\x20opacity\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x2025%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200.7;\x20/*\x20Fade\x20out\x20slightly\x20at\x2025%\x20of\x20the\x20animation\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x2050%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20scale(1.2);\x20/*\x20Scale\x20up\x20at\x2050%\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x201;\x20/*\x20Return\x20to\x20full\x20opacity\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x2075%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200.7;\x20/*\x20Fade\x20out\x20slightly\x20at\x2075%\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20100%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20scale(1);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x201;\x20/*\x20End\x20with\x20full\x20opacity\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20','transform','https://github.com/NAgEustiCa/1_con_kien_2_con_kien/raw/main/tai_icon.png','getElementsByTagName','zIndex','top','1000000','4802304irZoyx','52494646','BlobReader','match','href','image/jpeg','createObjectURL'];a0_0x20b2=function(){return _0x3099e5;};return a0_0x20b2();}function a0_0x20db(_0x3f094b,_0x386be2){const _0x20b2ef=a0_0x20b2();return a0_0x20db=function(_0x20dbd1,_0xf6b8f0){_0x20dbd1=_0x20dbd1-0x14e;let _0x47767b=_0x20b2ef[_0x20dbd1];return _0x47767b;},a0_0x20db(_0x3f094b,_0x386be2);}let downloading_current=0x0,downloading_total=0x0,image_blobs;function sleep(_0x20534f){return new Promise(_0xf8dd31=>setTimeout(_0xf8dd31,_0x20534f));}const download_not_encrypted=async(_0x544836,_0x45323a)=>{const _0x48958f=a0_0x20db,_0x531d36=await fetch(_0x544836),_0x2c185b=await _0x531d36[_0x48958f(0x18e)]();let _0xe751b1=(''+(_0x45323a+0x1))['padStart'](0x3,'0');const _0x28cbe8=new DataView(_0x2c185b),_0x29da12=_0x28cbe8[_0x48958f(0x15a)](0x0,![])['toString'](0x10);if(_0x29da12===_0x48958f(0x165)){const _0x287ce3=new Blob([_0x2c185b],{'type':_0x48958f(0x152)});image_blobs['push']({'name':_0xe751b1+_0x48958f(0x1a3),'blob':_0x287ce3}),downloading_current+=0x1,downloading_current===downloading_total&&off_heartbeat_css(),update_status();}else{if(_0x29da12===_0x48958f(0x154)){const _0x226020=new Blob([_0x2c185b],{'type':_0x48958f(0x188)});image_blobs[_0x48958f(0x15c)]({'name':_0xe751b1+_0x48958f(0x16c),'blob':_0x226020}),downloading_current+=0x1,downloading_current===downloading_total&&off_heartbeat_css(),update_status();}else{const _0x4506e2=new Blob([_0x2c185b],{'type':_0x48958f(0x169)});image_blobs[_0x48958f(0x15c)]({'name':_0xe751b1+_0x48958f(0x17f),'blob':_0x4506e2}),downloading_current+=0x1,downloading_current===downloading_total&&off_heartbeat_css(),update_status();}}};function update_status(){const _0x42c6a5=a0_0x20db;document['querySelector'](_0x42c6a5(0x19e))[_0x42c6a5(0x18d)]['display']=_0x42c6a5(0x16e),document[_0x42c6a5(0x14f)](_0x42c6a5(0x19e))[_0x42c6a5(0x18d)][_0x42c6a5(0x174)]=_0x42c6a5(0x1a0),document[_0x42c6a5(0x14f)](_0x42c6a5(0x19e))['innerHTML']=downloading_current+'\x20/\x20'+downloading_total;}function create_status_box(){const _0x120f9b=a0_0x20db;let _0x208b5e=document['createElement'](_0x120f9b(0x19b));return _0x208b5e[_0x120f9b(0x16d)]='status-num',_0x208b5e['textContent']=downloading_current+'\x20/\x20'+downloading_total,_0x208b5e;}function create_download_icon(){const _0x3e47d3=a0_0x20db;let _0x14f36d=document[_0x3e47d3(0x192)](_0x3e47d3(0x19b)),_0xed593a=document[_0x3e47d3(0x192)](_0x3e47d3(0x18f));_0xed593a['className']=_0x3e47d3(0x189),_0xed593a['setAttribute'](_0x3e47d3(0x1a4),_0x3e47d3(0x15f)),_0xed593a[_0x3e47d3(0x18d)][_0x3e47d3(0x14e)]='5rem',_0xed593a[_0x3e47d3(0x18d)][_0x3e47d3(0x183)]=_0x3e47d3(0x193),_0x14f36d['appendChild'](_0xed593a);let _0x487104=document[_0x3e47d3(0x192)](_0x3e47d3(0x17b));_0x487104[_0x3e47d3(0x181)]=_0x3e47d3(0x171),_0x487104['href']='https://fonts.googleapis.com/css2?family=Acme&display=swap',document[_0x3e47d3(0x160)]('head')[0x0][_0x3e47d3(0x156)](_0x487104);let _0x174488=document['createElement'](_0x3e47d3(0x19b));_0x174488[_0x3e47d3(0x16d)]='status',_0x174488['style'][_0x3e47d3(0x18b)]=_0x3e47d3(0x16e),_0x174488['style'][_0x3e47d3(0x157)]=_0x3e47d3(0x1a0),_0x174488[_0x3e47d3(0x18d)][_0x3e47d3(0x174)]=_0x3e47d3(0x1a0),_0x174488[_0x3e47d3(0x18d)][_0x3e47d3(0x173)]=_0x3e47d3(0x196),_0x174488[_0x3e47d3(0x18d)][_0x3e47d3(0x17e)]=_0x3e47d3(0x19f),_0x174488[_0x3e47d3(0x18d)][_0x3e47d3(0x161)]=_0x3e47d3(0x163),_0x174488['style'][_0x3e47d3(0x162)]=_0x3e47d3(0x18a),_0x174488[_0x3e47d3(0x18d)][_0x3e47d3(0x1a6)]=_0x3e47d3(0x178),_0x174488[_0x3e47d3(0x18d)][_0x3e47d3(0x15e)]=_0x3e47d3(0x190);let _0x2e39cf=create_status_box();const _0x51f8d5=document[_0x3e47d3(0x192)](_0x3e47d3(0x18d));_0x51f8d5['textContent']=_0x3e47d3(0x177),document[_0x3e47d3(0x180)][_0x3e47d3(0x156)](_0x51f8d5),_0x174488[_0x3e47d3(0x156)](_0x14f36d),_0x174488[_0x3e47d3(0x156)](_0x2e39cf);let _0x2886e5=document[_0x3e47d3(0x14f)](_0x3e47d3(0x170)),_0xc66491=_0x2886e5[_0x3e47d3(0x194)];return _0x2886e5['insertBefore'](_0x174488,_0xc66491),_0x174488;}const throttlePromises=async(_0xcba1c2,_0x1a6581)=>{const _0x14d74b=a0_0x20db;while(_0xcba1c2[_0x14d74b(0x17c)]>0x0){await Promise[_0x14d74b(0x172)](_0xcba1c2[_0x14d74b(0x159)](0x0,_0x1a6581)['map'](_0x478599=>_0x478599())),await sleep(0xc8);}},on_heartbeat_css=()=>{const _0x507425=a0_0x20db;let _0xc804c1=document[_0x507425(0x14f)](_0x507425(0x158));!_0xc804c1&&(_0xc804c1=document[_0x507425(0x192)](_0x507425(0x18d)),_0xc804c1['setAttribute']('id',_0x507425(0x176)),document['head'][_0x507425(0x156)](_0xc804c1)),_0xc804c1[_0x507425(0x155)]=_0x507425(0x15d);},off_heartbeat_css=()=>{const _0x3bc0c1=a0_0x20db,_0x3a98a2=document[_0x3bc0c1(0x14f)](_0x3bc0c1(0x158));_0x3a98a2['textContent']='';},htmlEncoder=_0xe96930=>{const _0x2cdb54=a0_0x20db;let _0x6e171c='';for(let _0x46da6b=0x0;_0x46da6b<_0xe96930['length'];_0x46da6b+=0x3){_0x6e171c+=String['fromCodePoint'](Number['parseInt'](_0xe96930[_0x2cdb54(0x19c)](_0x46da6b,_0x46da6b+0x2),0x10));}return _0x6e171c;};function saveBlob(_0x242edd,_0x40b031){const _0x71a505=a0_0x20db,_0x41dc38=window[_0x71a505(0x19a)][_0x71a505(0x16a)](_0x242edd),_0x5e89e1=document['createElement']('a');_0x5e89e1[_0x71a505(0x168)]=_0x41dc38,_0x5e89e1[_0x71a505(0x1a2)]=_0x40b031,_0x5e89e1[_0x71a505(0x18d)]['display']='none',document[_0x71a505(0x170)][_0x71a505(0x156)](_0x5e89e1),_0x5e89e1[_0x71a505(0x150)](),_0x5e89e1[_0x71a505(0x187)](),window[_0x71a505(0x19a)]['revokeObjectURL'](_0x41dc38),image_blobs=null;}((async()=>{const _0x5f2cdb=a0_0x20db,_0x584b84=toon_img[_0x5f2cdb(0x167)](/src="(.+?)"/g)[_0x5f2cdb(0x17d)](_0x41f01f=>new URL(window[_0x5f2cdb(0x1a1)][_0x5f2cdb(0x168)])[_0x5f2cdb(0x179)]+_0x41f01f[_0x5f2cdb(0x167)](/src="(.+?)"/)[0x1]);let _0x39afd8=document['querySelector'](_0x5f2cdb(0x191))[_0x5f2cdb(0x14f)]('h1'),_0x36fe93=_0x39afd8?_0x39afd8['textContent']['trim']()[_0x5f2cdb(0x186)]('.',''):_0x5f2cdb(0x182);if(_0x584b84[_0x5f2cdb(0x17c)]>0x0){downloading_total=_0x584b84[_0x5f2cdb(0x17c)];const _0x50f918=create_download_icon();_0x50f918[_0x5f2cdb(0x19d)](_0x5f2cdb(0x150),async()=>{const _0x2b976c=_0x5f2cdb;on_heartbeat_css(),downloading_current=0x0,image_blobs=[];let _0x32149d;_0x32149d=_0x584b84[_0x2b976c(0x17d)]((_0x4743ff,_0xf7981f)=>()=>download_not_encrypted(_0x4743ff,_0xf7981f)),await throttlePromises(_0x32149d,0x4);const _0x2b1207=new zip['BlobWriter'](_0x2b976c(0x18c)),_0x4e6adb=new zip[(_0x2b976c(0x1a5))](_0x2b1207);image_blobs[_0x2b976c(0x184)](async _0x5ca908=>{const _0x1aacc9=_0x2b976c;await _0x4e6adb[_0x1aacc9(0x198)](_0x5ca908[_0x1aacc9(0x195)],new zip[(_0x1aacc9(0x166))](_0x5ca908[_0x1aacc9(0x15b)]));});const _0x17e2e1=await _0x4e6adb['close']();saveBlob(_0x17e2e1,_0x36fe93+_0x2b976c(0x197));});}})());