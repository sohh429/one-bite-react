### Promise

#### Promise는 비동기 작업이 완료되었을 때 결과를 처리할 수 있는 방법을 제공

1. Pending (대기): 비동기 작업이 아직 완료되지 않은 상태
2. Resolved (이행): 비동기 작업이 성공적으로 완료되어 결과를 반환한 상태
3. Rejected (거부): 비동기 작업이 실패한 상태

#### Promise를 사용하기 위한 메서드
1. then(onFulfilled, onRejected): 비동기 작업이 성공했을 때 실행될 함수를 정의
2. catch(onRejected): 비동기 작업이 실패했을 때 실행될 함수를 정의


### Node.js

#### 자바스크립트 실행환경(run time)
javascript -> 웹 환경에서 동작하도록 설계된 언어

current ( 최신버전 )
LTS ( 안정적 버전 )

node -v 20

패키지 : node.js에서 사용되는 프로젝트 단위
package 단위로 사용

npm init 
package name: 패키지 이름
version: (1.0.0)  : 배포 버전
description: 패키지 설명
entry point: (index.js) 메인으로 사용된 엔트리 포인트

``` * node 명령어  + js 파일 실행 // 경로를 정확히 기입
package.script ( package.json) 에 명령어 설정 ```

### 모듈 시스템
기능별로 분리
common,js
es module : package.json에 “type” : “module” 명시
common,js과 es module는 혼용해서 사용불가


라이브러리는 경로가 아닌 이름으로 명시
package.json은 명시한 dependencies 를 자동으로 설치해줌

유의적 버전 
주 버전(Major Version): 기존 버전과 호환되지 않게 변경한 경우
부 버전(Minor version): 기존 버전과 호환되면서 기능이 추가된 경우
수 버전(Patch version): 기존 버전과 호환되면서 버그를 수정한 경우
