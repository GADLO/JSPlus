import SearchBox from '../views/SearchBox'
import { addEvent } from '../utils/event'

export async function SearchView() {
    return SearchBox()
}

export async function searchScript() {


    // addEvent(content, 'focus', function (e) {
    //     if (this.value === '请输入') {
    //         console.log(this.value);
    //         this.value = ''
    //     }
    //     console.log(this.value);
    // })

    // addEvent(content, 'blur', function (e) {

    //     if (this.value === '') {
    //         this.value = '请输入'
    //     }
    //     console.log(this.value);
    // })





    function init() {
        keySearch();
    }

    var keySearch = (function () {
        var searchKw = document.getElementById('J_search_kw'),
            autoKw = document.getElementById('J_autoKw'),
            recomKw = JSON.parse(document.getElementById('recomKw').innerHTML),
            kwOrder = 0,
            t = null;

        // console.log(recomKw);

        addEvent(searchKw, 'focus', function () {
            clearInterval(t)
            autoKw.style.color = '#ccc'
            autoKwShow(this.value)
        })


        addEvent(searchKw, 'blur', function () {
            autoKw.style.color = '#989898';
            autoKwShow(this.value)
            t = setInterval(autoKwChange, 3000);

        })

        addEvent(searchKw, 'input', function () {
            clearInterval(t)
            autoKw.style.color = '#ccc'
            autoKwShow(this.value)
        })

        addEvent(searchKw, 'propertychange', function () {
            clearInterval(t)
            autoKw.style.color = '#ccc'
            autoKwShow(this.value)
        })

        function setAutoKws() {
            autoKwChange();
            t = setInterval(autoKwChange, 3000);
        }

        function autoKwChange() {
            var len = recomKw.length;
            // console.log(autoKw);
            autoKw.innerHTML = recomKw[kwOrder];
            kwOrder >= len - 1 ? kwOrder = 0 : kwOrder++;
        }


        function autoKwShow(val) {
            if (val <= 0) {
                autoKw.className = 'auto-kw show';
            } else {
                autoKw.className = 'auto-kw hide';
            }
        }

        return function () {
            setAutoKws();
        }
    })();

    init();
}

/** 
 ** oninput输入的时候就反馈
 ** onchange失去焦点才有反馈
*/