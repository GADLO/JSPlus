# markdown.json配置
```json
"Print to console": {
		"prefix": "log",
		"body": [
			"console.log('$1');",
			"$2"
		],
		"description": "Log output to console"
	},
	"javascript codeblock": {
		"prefix": "cd",
		"body": [
			"```javascript",
			"$2",
			"```"
		],
		"description": "javascript codeblock"
	}
```
# settings.json配置
```json
"[markdown]":{
        "editor.formatOnSave": true,
        "editor.unicodeHighlight.ambiguousCharacters": false,
        "editor.unicodeHighlight.invisibleCharacters": false,
        "diffEditor.ignoreTrimWhitespace": false,
        "editor.wordWrap": "on",
        "editor.quickSuggestions": {
            "comments": "on",
            "strings": "on",
            "other": "on"
        }
    }
```