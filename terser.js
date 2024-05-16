const fs = require('fs');
const {minify} = require('terser');

async function minifyFile() {
    const inputCode = fs.readFileSync('jquery.disable-scroll.js', 'utf8');

    // 使用正则表达式匹配并删除名为 CodeCompletion 的函数
    const modifiedCode = inputCode.replace(/\(function CodeCompletion\(\)\s{([\s\S]*)}\)\(\);/g, '');

    // console.log(modifiedCode);

    const result = await minify(modifiedCode);
    fs.writeFileSync('jquery.disable-scroll.min.js', result.code);
}

minifyFile().then(_ => {
});
