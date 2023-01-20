// const fs = require('fs')
// const path = require('path')

// function dateFormat (date, fstr, utc) {
//     utc = utc ? 'getUTC' : 'get';
//     return fstr.replace (/%[YmdHMS]/g, function (m) {
//       switch (m) {
//       case '%Y': return date[utc + 'FullYear'] (); // no leading zeros required
//       case '%m': m = 1 + date[utc + 'Month'] (); break;
//       case '%d': m = date[utc + 'Date'] (); break;
//       case '%H': m = date[utc + 'Hours'] (); break;
//       case '%M': m = date[utc + 'Minutes'] (); break;
//       case '%S': m = date[utc + 'Seconds'] (); break;
//       default: return m.slice (1); // unknown code, remove %
//       }
//       // add leading zero if required
//       return ('0' + m).slice (-2);
//     });
//   }

// const conf = {
//     work: ['wd', 'dp', 'ss', 'ikt', 'cc_real'],
//     // proj: ['wd_msg_center', 'devops', 'desense_cli', 'dag', 'stock_mgt', 'other'],
//     proj: ['wd_msg_center', 'apsara', 'devops_v2', 'desense_cli', 'dag', 'stock_mgt',],
// }

// f = String(fs.readFileSync(__dirname + '/segments/info_def.md'))

// function read_segment(type, key='def') {
//     let p = path.join(__dirname, 'segments', `${type}_${key}.md`)
//     if (!fs.existsSync(p)) {
//         p = path.join(__dirname, 'segments', `${type}_def.md`)
//     }
//     return String(fs.readFileSync(p))
// }



// content = `---
// title: 个人简历 - 廖锦锋
// date: ${dateFormat(new Date(), '%Y-%m-%d %H:%M:%S')}
// ---
// <style>
// .hightlight {
//     color: #FF3300;
//     font-weight: bold;
// }
// .bold {
//     font-weight: bold;
// }
// </style>

// ${read_segment('info')}

// ${read_segment('intro')}

// ${read_segment('home')}


// ## ♨　工作经历

// ${conf.work.map(w => {
//     return read_segment('work', w)
// }).reduce((p, n) => p + '\n\n' + n)}


// ## ♨　项目经历

// ${conf.proj.map(p => {
//     return read_segment('proj', p)
// }).reduce((p, n) => p + '\n\n' + n)}

// `

// fs.writeFileSync(__dirname + '/1.md', content)
