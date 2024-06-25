# 实时获取父元素的可视区的内子元素

- 使用IntersectionObserver API来检测哪些子元素位于父元素的可视区域内。IntersectionObserver 是现代浏览器提供的一个API，可以用来监视元素与其祖先或视窗(viewport)的交叉状态。通过设置root选项为父元素，我们可以限制观察的范围仅在父元素的区域内，当子元素进入父元素的可视区域。

- 在回调函数中执行你需要的操作，比如记录或处理这些子元素。

### 具体代码实现如下：

```vue
<template>
  <div class="wrapper pt-3" ref="parentElement">
    <div class="box mt-2">
      <div class="item" :data-id="item.id" v-for="(item, index) in list" :key="item.id"
        :style="{ 'height': itemHeight() + 'px' }" ref="childElement">
        <h3 class="title">{{ item.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const nums = [100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]
export default {
  name: 'Demo',
  data() {
    return {
      ids: [],
      list: [
        {
          id: uuidv4(),
          name: '测试1'
        },
        {
          id: uuidv4(),
          name: '测试2'
        },
        {
          id: uuidv4(),
          name: '测试3'
        },
        {
          id: uuidv4(),
          name: '测试4'
        },
        {
          id: uuidv4(),
          name: '测试5'
        },
        {
          id: uuidv4(),
          name: '测试6'
        },
        {
          id: uuidv4(),
          name: '测试7'
        },
        {
          id: uuidv4(),
          name: '测试8'
        },
        {
          id: uuidv4(),
          name: '测试9'
        },
        {
          id: uuidv4(),
          name: '测试10'
        },
        {
          id: uuidv4(),
          name: '测试11'
        },
        {
          id: uuidv4(),
          name: '测试12'
        },
        {
          id: uuidv4(),
          name: '测试13'
        },
        {
          id: uuidv4(),
          name: '测试14'
        },
        {
          id: uuidv4(),
          name: '测试15'
        },
        {
          id: uuidv4(),
          name: '测试16'
        },
        {
          id: uuidv4(),
          name: '测试17'
        },
        {
          id: uuidv4(),
          name: '测试18'
        },
        {
          id: uuidv4(),
          name: '测试19'
        },
        {
          id: uuidv4(),
          name: '测试20'
        },
        {
          id: uuidv4(),
          name: '测试21'
        },
        {
          id: uuidv4(),
          name: '测试22'
        },
        {
          id: uuidv4(),
          name: '测试23'
        },
        {
          id: uuidv4(),
          name: '测试24'
        },
        {
          id: uuidv4(),
          name: '测试25'
        },
        {
          id: uuidv4(),
          name: '测试26'
        },
        {
          id: uuidv4(),
          name: '测试27'
        },
        {
          id: uuidv4(),
          name: '测试28'
        },
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.getVisibleChildElements();
    });
  },
  methods: {
    getVisibleChildElements() {
      const parent = this.$refs.parentElement;
      const childElements = this.$refs.childElement;
      // 确保父元素存在
      if (parent) {
        const intersectionObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              let id = entry.target.dataset.id
              if (entry.isIntersecting) {
                // 这里你可以做你需要的操作，比如记录可见的子元素
                // console.log(entry.target.textContent, '可见');
                this.ids.push(id)
                // console.log(this.ids, 'this.ids')
              } else {
                // console.log(entry.target.textContent, '不可可见');
                let index = this.ids.findIndex(item => item === id)
                if (index > -1) {
                  this.ids.splice(index, 1)
                  // console.log(this.ids, 'this.ids')
                }
              }
            });
          },
          { root: parent, threshold: 0.5 } // 设置观察者的根元素为父元素
        );

        // 观察所有子元素
        childElements.forEach(child => {
          intersectionObserver.observe(child);
        });
      }
    },
    itemHeight: () => {
      const num = getRandomInt(0, nums.length - 1)
      return nums[num]
    }
  },

}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 50%;
  height: 700px;
  margin: 100px auto;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, .1);
  overflow-x: hidden;
  overflow-y: auto;
}

.box {
  padding: 10px;
  column-count: 5;
  column-gap: 10px;
}

.item {
  margin-bottom: 10px;
  break-inside: avoid;
  border: 1px solid #f1f1f1;

  &.active {
    background-color: red;
  }

  h3 {
    font-size: 14px;
    font-weight: 600;
  }

  li {
    line-height: 26px;

    a {
      font-size: 14px;
      color: #666;

      &:hover {
        color: red;
      }
    }
  }
}
</style>

```