import iframe from '../styles/iframe.css'

export default function Iframe() {
    return `
    <h1 class="explain">Iframe</h1>   
    <div class="wrap">
    <aside class="aside-wrap">
        <ul class="nav-list">
            <li class="nav-item"><a href="https://www.jd.com" target="navIframe" class="nav-lk">京东</a></li>
            <li class="nav-item"><a href="https://www.taobao.com" target="navIframe" class="nav-lk">淘宝</a></li>
            <li class="nav-item"><a href="https://www.tmall.com" target="navIframe" class="nav-lk">天猫</a></li>
            <li class="nav-item"><a href="https://m.pinduoduo.com" target="navIframe" class="nav-lk">拼多多</a></li>
            <li class="nav-item"><a href="https://www.suning.com" target="navIframe" class="nav-lk">苏宁</a></li>
            <li class="nav-item"><a href="https://www.jd.com" target="navIframe" class="nav-lk"></a></li>
        </ul>
        <section class="frame-wrap">
            <iframe src="https://www.tmall.com" name="navIframe"></iframe>
        </section>
    </aside>
</div>
<div class="wrap">
	<div class="code-panel">
		<form action="server/script.php" method="post" target="codesFrame">
			<div class="hd">
				<input type="submit" value="提交代码" class="submit-btn" />
			</div>
			<div class="edit-panel">
				<textarea name="codes" class="edit-textarea"></textarea>
			</div>
		</form>
	</div>
</div>
<div class="iframe-wrap">
	<iframe src="server/script.php" name="codesFrame"></iframe>
</div>
    `
}