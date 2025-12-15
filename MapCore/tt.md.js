const mdFileName = 'test'

const mdContent = {
  表格: {
    列: [
      {
        label: '月份',
        prop: 'month',
      },
      {
        label: '收入',
        prop: 'income',
      },
      {
        label: '支出',
        prop: 'expenses',
      },
      {
        label: '利润',
        prop: 'profit',
      },
      {
        label: '增长率',
        prop: 'growthRate',
      }
    ],
    数据: [
      {
        month: 1,
        income: 'xxxxx',
        expenses: 'xx333xxx',
        profit: '333',
        growthRate: ' &#x2b50; ',
      },
      {
        month: 2,
        income: 'xxxxx',
        expenses: 'xxxxx',
        profit: 'xxxxx',
        growthRate: ' &#x2b50; ',
      },
    ]
  },
  dudu: '2323',
  换行: '3333',

  输出2用表格: {
    列: [
      {
        label: 'id',
        prop: 'id',
      },
      {
        label: 'name',
        prop: 'name',
      },
      {
        label: 'lang',
        prop: 'lang',
      }
    ],
    数据: [
      {
        id: 1,
        name: '33',
        lang: '333',
      },
      {
        id: 2,
        name: '``333 ``',
      },
      {
        id: 5,
        name: '测试测试测试测试测试',
      },
    ]
  }
}

const content = {
  // 导出md 名字
  mdFileName,
  // 导出md 内容
  mdContent,
}

export default content
