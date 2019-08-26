## SpeechSynthesis
- Web Speech API 주어진 텍스트를 소리로 바꿔준다.
- speak, cancel, pause, resume

```javascript
const utterance = new SpeechSynthesisUtterance("Read this string.");
window.speechSynthesis.speak(utterance);
```
### voiceschanged

### includes
- 배열이 특정 요소를 포함하고 있는지를 판별한다.

### 배열내장함수
- filter : 특정조건에 만족하는 새로운 배열을 만든다.
- map : 배열안의 모든 원소를 변환할때 사용한다. 새로운 배열을 만든다.
```javascript
  const array =[1,2,3,4,5,6,7,8]
  const newArray = array.map(n => n * n);
  console.log(newArray) // [1, 4, 9, 16, 25, 36, 49, 64]
```

### join