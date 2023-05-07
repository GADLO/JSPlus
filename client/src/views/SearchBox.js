import searchBox from '../styles/searchBox.css';

export default function Search() {
    return (`
    <div class="search-container">
        <div class="auto-kw" id="J_autoKw">推荐词</div>
        <input class="search-inp" id="J_search_kw" />
       
    </div>
    <div style="display:none" id="recomKw">
    ["123","321","1234567","7654321","bingo"]
    </div>
    `)
}