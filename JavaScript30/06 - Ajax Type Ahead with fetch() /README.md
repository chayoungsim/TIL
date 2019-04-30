## Type Ahead
* json 데이터를 이용한 search 구현

### fetch() - 비동기 네트워크 통신,ajax를 구현하는 여러가지 기술 , ie에서는 안됨.
```javascript
 fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error))
```
* blob :Blob 객체는 파일과 흡사한 불변 객체로 raw data입니다. 데이터를 표현하기 때문에 필연적으로 자바스크립트 네이티브 포맷이 아닙니다. 

### push  - 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환한다.
```javascript
  var arr=['a','b','c','d'];
  arr.push('e');
  console.log(arr) // ["a", "b", "c", "d", "e"]

```

### ES6의 전개연산자
```javascript
  var arr1 = [3, 4, 5];
  var arr2 = [1, 2, ...arr1, 6, 7];
  console.log(arr2);
  // [1, 2, 3, 4, 5, 6, 7]
```

### 정규표현식 - 정규 표현식은 문자열에 나타는 특정 문자 조합과 대응시키기 위해 사용되는 패턴입니다.
* 문법 new RegExp(pattern ,[flags]) // 생성자방식 flages
-- g : 텍스트 전체에서 일치하는 문자를 찾을 때, 지정하지 않으면 첫번째 일치하는 문자만 검색
-- i : 대소문자를 구분하지 않는다.
* replace()는 특정 문자열을 찾아 다른 문자열로 바꾸는 메서드입니다.
```javascript
   string.replace( 'string1', 'string2' );
   //string 에서 string1을 찾아 string2f로 바꾼다.
```
* match() 메서드는 문자열이 정규식과 매치되는 부분을 검색합니다.
* 숫자콤마표시 (사용하고자 하는 숫자).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

### addEventListener
* 이벤트 참조 https://developer.mozilla.org/ko/docs/Web/Events

### join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.

