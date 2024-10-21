// src/directives/loadingDirective.ts
import { createVNode, render, nextTick } from 'vue';
import Loading from '../components/LoadingBall.vue';
// import Loading from '../components/Loading.vue';
import { DirectiveBinding } from 'vue';

const positionBox = ['relative', 'absolute', 'fixed', 'sticky'];
const getSize = (width: number, height: number) => {
  return Math.min(Math.min(width, height) * 0.3, 40); // 使用 30% 的最小值作为 loading 大小
  // return Math.min(Math.min(width, height) * 0.3, 125) + 'px'; // 使用 30% 的最小值作为 loading 大小
};
const loadingDirective = {
  async mounted(el: HTMLElement, binding: DirectiveBinding) {
    const container = document.createElement('div');
    el.appendChild(container);

    // 使用 nextTick 确保 DOM 更新完成
    await nextTick();
    let positionEl = window?.getComputedStyle(el)?.getPropertyValue('position');
    if (!positionBox.includes(positionEl)) {
      el.style.position = 'relative';
    }

    // 获取元素的宽和高
    const { width, height } = el.getBoundingClientRect();
    const size = getSize(width, height); // 使用 30% 的最小值作为 loading 大小
    const loaderVNode = createVNode(Loading, {
      size: size, // 传递自适应大小
      text: '正在加载中...',
    });

    render(loaderVNode, container);

    // 存储容器和加载状态
    (el as any).__loadingContainer__ = container;
    (el as any).__loadingVNode__ = loaderVNode;
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
    const container = (el as any).__loadingContainer__;
    const loaderVNode = (el as any).__loadingVNode__;

    if (binding.value) {
      // 使用 nextTick 确保 DOM 更新完成
      nextTick(() => {
        // 重新获取元素的宽高并更新大小
        const { width, height } = el.getBoundingClientRect();
        const size = getSize(width, height);

        // 更新加载器的 props
        loaderVNode.props.size = size;

        render(loaderVNode, container); // 更新渲染
      });
    } else {
      render(null, container); // 隐藏
    }
  },
  unmounted(el: HTMLElement) {
    const container = (el as any).__loadingContainer__;
    if (container) {
      render(null, container); // 清理
      el.removeChild(container); // 移除
      delete (el as any).__loadingContainer__;
      delete (el as any).__loadingVNode__;
    }
  },
};

export default loadingDirective;
