## Geolocation API
- Geolocation API는 navigator.geolocation 객체를 통해 공개되었습니다
- getCurrentPosition(), watchPosition()
- 사용자의 위치는 Coordinates 객체를 참조하는 Position 객체를 사용하여 나타냅니다.

### geolocation.watchPosition(success,error, option )
- 비동기 함수가입니다.
- 디바이스의 현재 위치에 대 한 변경 시계.
-- success : 현재의 위치를 전달 되는 콜백.
-- error : (선택 사항) 오류가 발생 하면 실행 되는 콜백.
-- option : (선택 사항) 지리적 위치 옵션.

### navigator.geolocation.watchPosition(success, error)

#### textContent
- innerHTML 은 요소의 자식들만 가져옴.
- outerHTML 은 요소 자체를 가져옴.
- textContent 는 innerHTML 과 비슷하지만 태그를 문자로 인식하여 가져옴.



