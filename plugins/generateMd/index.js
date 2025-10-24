import fs from 'fs';
import path from 'path';
import explain from './mdExplain.js'
import EventEmit  from './events'



let hasFileHistory = false
/**
 * @desc 根据对象数据模板 生成md 文件
 * {
 *   // 导出md 名字
 *   mdFileName,
 *   // 导出md 内容
 *   mdContent: { 语法相关 }
 * }
 * @param mdFilePath md 文件需要生成的路径
 * @param requireContent 数据模板
 * @param fileName md 名称，用于关联数据模板中引用的文件进行改动监听
 */
const createFileByObjContent = async (mdFilePath, historyPath, fileName) => {
  let lastMdRes = []
  let requireContent = (await import(historyPath)).default
  for (const requireContentKey in requireContent.mdContent) {
    let res = requireContent.mdContent
    let runRes
    if (requireContentKey == 'mdFileName') {
      continue
    }


    // 获取使用的解析模板方法
    if (requireContentKey.includes('用')) {
      let useExpMethod = requireContentKey.split('用')[1]
      runRes = explain[useExpMethod](res[requireContentKey], fileName, mdFilePath)
    } else {
      runRes = explain[requireContentKey](res[requireContentKey], fileName, mdFilePath)
    }
    lastMdRes.push(runRes)
  }
  let name = (requireContent.mdFileName || 'noop') + '.md'
  let ptah = path.resolve(mdFilePath, '../' + name)
  fs.writeFileSync(ptah, lastMdRes.join('\n'))
  console.log(`【文件】${name} created`)
}


const generateFile = async (mdFilePath) => {
  let content = fs.readFileSync(mdFilePath, 'utf-8')
  if (!content) return
  let mdFileName = mdFilePath.split('/')[mdFilePath.split('/').length - 1]
  let fileName = `${mdFileName.split('md.js')[0]}-${Date.now()}-.mjs`

  if (!fs.existsSync(process.cwd() + '/.jsMdHistory')) {
    // 创建文件夹
    fs.mkdirSync(process.cwd() + '/.jsMdHistory')
  }
  let historyPath = process.cwd() + '/.jsMdHistory/' + fileName
  fs.writeFileSync(historyPath, content, 'utf-8')
  await createFileByObjContent(mdFilePath, historyPath, mdFileName)
  if (!hasFileHistory) {
    fs.unlinkSync(historyPath)
  }
}
// 监听关联文件改动
EventEmit.on('generate-link-file-change', async (mdFilePath) => {
  console.log('重新生成 run...', mdFilePath)
  let filePath = path.resolve(process.cwd(), mdFilePath)
  await generateFile(filePath)
})
export default () => ({
  name: 'generate-mjs-to-md',
  configureServer(server) {
    const targetDir = path.resolve(process.cwd());

    // 监听目标文件夹的文件变化（新增、修改、删除）
    server.watcher.add(targetDir);

    server.watcher.on('change', async (filePath) => {
      // 仅处理目标文件夹内的文件
      if (filePath.startsWith(targetDir)) {
        // console.log(`文件被修改: ${filePath}`);
        if (!filePath.includes('md.js')) return

        // 1. 读取文件内容
        generateFile(filePath, server)
      }
    });
  }
})
