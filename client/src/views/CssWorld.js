import cssWorld from '../styles/cssWorld.css'


export default function CssWorld() {
    return `
    <p class="center"><span class='explain'>css world</span></p>
    <div class='css-world-wrap'>
    <div class="block">display为block的元素，即使没有指定其宽度，其尺寸表现会像水流一样铺满容器，这种特性，在所有浏览器中是一致的</div>
    
    <div class="inline-block">Inline-Block</div>
    456
    <div class="inline-table">123</div>
    </div>
    `
}