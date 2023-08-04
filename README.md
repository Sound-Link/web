### Description

1. 프로젝트 소개: 청각적인 어려움을 겪는 장애인 및 노인을 사용자 타켓으로 한 어플리케이션이다. 회의나 수업 등 학업적, 업무적 측면에서 소통의 어려움을 겪는 사용자에게 실시간 소통 매개체를 제공함으로써 그들이 겪는 환경적 어려움을 해소한다. 원활한 의사소통 및 정보 소외 문제에서 벗어나 집단의 구성원으로써 환경에 적응하고, 집단에 섞여 고차원적 업무를 진행할 수 있도록 돕는다.
2. 시스템 구조: 웹으로 개발한 서비스를 ReactNative의 WebView로 나타내어 모바일 앱에서 가동할 수 있게 한다. ReactNative에서 빌드한 결과물을 Vercel로 배포하여 정적 호스팅한다. 모바일 기기 상에서 제공받아야하는 음성 입력 등의 기능은 ReactNative에서 구현한 후 입력받은 데이터는 Bridge를 통해 Web으로 전달받아 가용할 수 있게 한다. WebView로 앱을 구현했을 때, 핫픽스나 유지, 보수 등에 큰 이점을 가지게 되므로, 추후 계속해서 이어질 보수의 가능성에 부합하는 방식을 채택하였다. 또한 네이티브 언어로 진행하게 되었을 때, 안드로이드와 IOS에 대해 분리하여 개발하여야 하지만, WebView를 통해 이와 같은 단점을 배제하여 생산성을 높일 수 있다.

### Frontend Architecture

1. typescript
    1. 협업 과정에서 코드의 통일성을 향상 시키고, 생산성을 향상시키기 위해 채택. 뿐만 아니라, 추후, 서비스의 유지, 보수 측면에서 큰 기대값을 가지기 때문에 언어로 채택.
2. react (18)
    1. React는 자바스크립트 라이브러리이다. React는 현재 웹 개발의 프레임워크로써 큰 인프라를 구축하고 있으며, 여전히 높은 점유율을 가진 라이브러리이다. 또한 React는 싱글페이지 어플리케이션으로써 코드의 가독성을 높이고, 모바일 측면에서도 친화적인 방식이다. 또한 Component 기반의 라이브러리이기 때문에 코드의 재사용이 높고, Sound Link의 디자인 통일성에 부합하는 방식이다.
3. axios
    1. 서버 통신을 위한 라이브러리로 Promise 기반 HTTP Client 인 axios를 사용한다.
4. chakra
    1. UI 컴포넌트 라이브러리로 Chakra UI를 채택하여 사용한다.
5. tanstack query (서버 state 관리 라이브러리, 다양한 기능 지원(캐싱, suspense 등등))

### Structure

1. Home
    1. 기능: My Info, Friends List
2. Enroll
    1. 기능: Voice Enroll
3. Fiends
    1. 기능: Friend Register
4. Meeting
    1. 기능: Chatting History Or Use Chat Room
    2. Create: Create Chat Room
    3. Detail: Chatting History
    4. Chat: Use Chat Room (Real Time)
5. SignUp
    1. 기능: 로그인 (회원가입과 병합)

### Environment

1. Web (React) 관련 세팅
    1. nodeJS 설치 (16~)
    2. npm install (dependency 설치)
    3. npm start (web 실행) (이후 Network 주소 확인)
2. React Native 관련 세팅
    1. android studio
    2. java 설치 (version 표기)
    3. sdk (emulator) setting
    4. npm run android
    5. `chrome://inspect/#devices` 주소로 Debugging 가능
    6. expo로 세팅해서 expo 앱을 설치한 후 qrcode를 이용해 모바일 기기로 실시간 테스트 가능 
3. lint, prettier 세팅(Web ReadME)
    1. 협업하면서 코드 컨밴션을 지키기 위해
    2. 많이 쓰는 airbnb 룰 채택
    3. eslint-config-prettier, eslint-plugin-prettier를 연동하여 prettier 세팅