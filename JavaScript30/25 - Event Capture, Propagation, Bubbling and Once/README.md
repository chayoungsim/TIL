## 버블링(Bubbling) / 캡처링(Capturing)

### 버블링(Bubbling)
해당엘리먼트 포함 부모엘리먼트를 통하여 최상위까지 이벤트가 전달되는것을 버블링
- 이를 박기 위해 event.stopPropagation() 
--
### 캡처링(Capturing)
최초 이벤트가 발생한 자식 요소로 내려가는 과정을 말합니다. 
