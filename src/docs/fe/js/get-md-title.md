# 根据markdown生成的html字符串获取h1-6标题 组合成treeData

### 具体代码实现如下：

```js
export const getContentTree = (contentHtmlStr: string) => {
  if (!contentHtmlStr) {
    return []
  }
  const hDomList = contentHtmlStr.match(/<h[1-6]{1}[^>]*>([\s\S]*?)<\/h[1-6]{1}>/g)
  if (!Array.isArray(hDomList)) {
    return []
  }
  const dirTree: any[] = []
  //最大的h标签值
  let maxhLevel: number
  hDomList.forEach((hDom, index) => {
    const startIndex = hDom.indexOf('id="')
    const endIndex = hDom.indexOf('">')
    if (startIndex != -1 && endIndex != -1) {
      const re = /<h([1-6]{1})[^>]*>([\s\S]*?)<\/h[1-6]{1}>/
      const hLevel = Number(hDom.replace(re, '$1'))
      const domId = hDom.slice(startIndex + 4, endIndex)
      const titleContent = hDom.replace(re, '$2')
      // 有可能匹配到的是这样’我<strong>是</strong>h1<em>斜体</em>介绍‘ 里面还有标签（直接去掉标签）
      const title = titleContent.replaceAll(/<([\s\S]*?)>|<\/([\s\S]*?)>/g, '').replace(' &ZeroWidthSpace;', '')
      const currentDir: Record<any, any> = {
        id: index + 1, //用于点击的时候选中态
        key: index + 1, //用于点击的时候选中态
        href: '#' + domId,
        title,
        domId,
        hLevel, //h标签值（1，2，3，4，5，6）
        isOpen: true
      }
      if (dirTree.length > 0) {
        //查找最近的父类(将数组反转才能找到最近的)
        //reverse会改变原数组，JSON.parse(JSON.stringify())方法去一下生成新数组
        const reverseDirTree = JSON.parse(JSON.stringify(dirTree)).reverse()
        const findParent = reverseDirTree.find((i: any) => currentDir.hLevel > i.hLevel)
        if (findParent) {
          currentDir.pid = findParent.id
        } else {
          currentDir.pid = 0
        }
      } else {
        currentDir.pid = 0
      }
      if (maxhLevel) {
        if (currentDir.hLevel < maxhLevel) {
          maxhLevel = currentDir.hLevel
        }
      } else {
        maxhLevel = currentDir.hLevel
      }
      dirTree.push(currentDir)
    }
  })
  dirTree.forEach((item) => {
    item.parentTreeLevel = 0 //父类默认是0
    item.treeLevel = item.hLevel - maxhLevel + 1 //目录树层级，也代表当前h标签解析的内容在父类属于第几层级，1是最大层级
    if (item.pid !== 0) {
      const findParent = dirTree.find((i) => i.id === item.pid)
      if (findParent) {
        if (!Array.isArray(findParent.children)) {
          findParent.children = []
        }
        item.parentTreeLevel = findParent.hLevel - maxhLevel + 1 //父目录树层级，也代表当前h标签解析的内容在父类属于第几层级，1是最大层级
        findParent.children.push(item)
      }
    }
  })
  return dirTree.filter((i) => i.pid === 0)
}

```