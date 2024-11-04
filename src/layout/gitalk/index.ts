import Gitalk from 'gitalk';
import 'gitalk/dist/gitalk.css';

export default function createGitalk(path: string) {
    const gitalk = new Gitalk({
        clientID: 'Ov23lil4ze1Z5pjg8IuG',
        clientSecret: '3c970bd5030123def0919f14098db5a93f2447ff',
        repo: 'vue-super-ui-docs',
        owner: 'clearself',
        admin: ['clearself'],
        id: path,      // 确保唯一性和长度小于 50
        distractionFreeMode: false  // 类似 facebook 的无干扰模式
    });
    gitalk.render('gitalk-container');
}