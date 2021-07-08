# boiler-plate-login

[Node.js and React] 노드,리액트, 몽고DB를 이용한 '회원가입/로그인' 보일러 플레이트 만들기

## 📖 Introduction

### node.js, React와 MongoDB를 이용한 '회원가입/로그인' 보일러 플레이트를 제작합니다.

## 📝 list

### 제작할 코드와 문서들입니다.

ver 1.0

- [x] node js와 expres js 설치

- [x] MongoDB 연결

- [x] MongoDB Model & Schema 생성

- [x] github 연결

<br />
ver 1.1

- [x] BodyPaser

- [x] PostMan을 이용한 회원가입 기능 확인

<br />
Add: nodemon dev

- [x] nodemon을 이용해 코드 변경시 바로 반영

<br />
Add: Protection of confidential information about DB access

- [x] heroku를 이용해서 앱 배포와 git commit시에 DB 정보에 대한 내용을 보호

<br />
Add: Password encryption using bcrypt

- [x] bcrypt를 이용해 비밀번호를 암호화 DB에 저장

<br />
Add: login function

- [x] bcrypt를 이용한 로그인 기능 구현

- [x] jsonwebtoken을 이용한 토큰 생성

<br />
Add: logout function

<br />

- [x] db에 저장된 token값을 지움으로써 로그아웃 기능 구현

<br />
install React and Make new directory

- [x] boiler-plate에 유리한 디렉토리 구조를 만들고 리액트를 설치함

<br />
Add: Setting Proxy, fix CORS issue

- [x] Proxy설정을 통해 CORS issue 해결

<br />
install and Setting Redux, Concurrently

- [x] Concurrently를 이용한 server, client 동시 실행, 그리고 redux에 대한 이해와 설치를 통한 다음 작업 진행.

<br />
Add: client login page

- [x] Client의 login 페이지 제작 / 기능 구현

- ![login](/front/src/images/login.JPG)

<br />
Add: register page

- [ ] Client의 register 페이지 제작 / 기능 구현

<br />
Add: Authentication Check

- [ ] Client의 LandingPage logout 기능 구현 및 Authentication check을 통한 페이지 접근 권한 확인 후 접근 가능 유무 판단
