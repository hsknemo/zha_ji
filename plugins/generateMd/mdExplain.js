import fs from 'fs';
import path from 'path';
import EventEmit  from './events'
const getMarkdonwAchor = (link) => {
  // console.log('args', link)
  return ''
}


const fileWatchMap = new Map()
const linkFileSet = new Set()

const getTitle = (num, code) => {
  return new Array(num).fill(code).join('')
}
const getTit = (code, content) => {
  return code + ' ' + content
}

const listExp = {
  content: c => c
}
const getList = (arr) => {
  if (!Array.isArray(arr) && !arr.length) return ''
  return arr.map(item => {
    return `- ${item.title}\n${listExp[item.type](item.content)}
    `
  }).join('')
}

const createCodeGroup = obj => {
  let code = "```"
  let str = []

  for (const key in obj) {
    str.push(`${code}${key}\n${obj[key]}\n${code}`)
  }
  return `::: code-group\n ${str.join('\n')} \n:::`
}

const getCodeGroup = obj => {
  if (Object.prototype.toString.call(obj) !== '[object Object]') {
    return ''
  }

  return createCodeGroup(obj)
}

const addWatchFile = fileName => {
  let fileSet = fileWatchMap.get(fileName)
  if (fileSet.size) {
    Array.from(fileSet).forEach(filePath => {
      fs.unwatchFile(filePath)
      fs.watchFile(filePath,() => {
        console.log('change txt', filePath)
        console.log(linkFileSet, 'linkFileSet')
        let link_f_set_arr = Array.from(linkFileSet)
        let _filePath = link_f_set_arr.filter(item => item.includes(fileName))
        if (!_filePath.length) return
        EventEmit.emit('generate-link-file-change', _filePath[0])
      })
    })
  }

}

const readFileObj = (obj, fileName) => {
  let fileContent = {}

  for (const objKey in obj) {
    let ptah = path.join(process.cwd(), obj[objKey])
    // 文件是否存在
    if (fs.existsSync(ptah)) {
      if (!fileWatchMap.get(fileName)) {
        fileWatchMap.set(fileName, new Set())
      }
      // 添加监听相关文件改动
      let set = fileWatchMap.get(fileName)
      set.add(ptah)
      fileWatchMap.set(fileName, set)
      addWatchFile(fileName)

      fileContent[objKey] = fs.readFileSync(ptah, 'utf-8')
      fileContent[objKey] = fileContent[objKey].toString()
    } else {
      fileContent[objKey] = `未找到文件${ptah}`
    }
  }

  return fileContent
}

const getFileContent = (obj) => {
  if (Object.prototype.toString.call(obj) !== '[object Object]') {
    return ''
  }
  let fileContent = readFileObj(obj)

  return createCodeGroup(fileContent)
}

const getBlock = content => {
  return `> ${content}\n`
}

const getPlayground = (obj, fileName, linkFilePath) => {
  if (Object.prototype.toString.call(obj) !== '[object Object]') {
    return ''
  }

  let str = (fs.readFileSync(path.join(__dirname, 'Playground.vue'))).toString()

  let fileContent = readFileObj(obj.file, fileName, linkFilePath)
  console.log(fileContent, 'fileContent')
  var codeS = "`"
  var varibleObj = {}
  for (const fileContentKey in fileContent) {
    varibleObj[fileContentKey] = fileContent[fileContentKey]
  }
  return eval(str)
}

const getSingleCodeBlock = (obj) => {
  if (Object.prototype.toString.call(obj) !== '[object Object]') {
    return ''
  }
  let codeStr = '```'
  if (obj.type === 'code') {
    return `\n ${codeStr}${obj.codeType} \n ${obj.content} \n ${codeStr}`
  }
  if (obj.type === 'file') {
    let fileContent = readFileObj({[obj.codeType]: obj.file})
    return `\n ${codeStr}${obj.codeType} \n ${fileContent[obj.codeType]} \n ${codeStr}`
  }
}

const proxyType = (...args) => {
  console.log(args, 'args')
  let linkPath = args[args.length - 1]
  if (args[args.length - 1]) {
    linkFileSet.add(linkPath)
  }
}

module.exports = {
  // 标题部分
  一级标题: content => getTit(getTitle(1, '#'), content),
  二级标题: content => getTit(getTitle(2, '#'), content),
  三级标题: content => getTit(getTitle(3, '#'), content),
  四级标题: content => getTit(getTitle(4, '#'), content),
  五级标题: content => getTit(getTitle(5, '#'), content),
  六级标题: content => getTit(getTitle(6, '#'), content),
  // 列表部分
  列表: (...args) => {
    proxyType(...args)
    return getList(...args)
  },
  代码组: getCodeGroup,
  文件代码组: (...args) => {
    proxyType(...args)
    return getFileContent(...args)
  },
  块引: getBlock,
  演示交互代码: (...args) => {
    proxyType(...args)
    return getPlayground(...args)
  },
  单一代码块: getSingleCodeBlock,

  链接: getMarkdonwAchor,

  原样输出: content => {
    let str = content
        .split('\n')
        .map(item => item.replace(/' '/g, '').trimStart())
        .join('\n')
    console.log('解析', str)
    return str
  },
}
