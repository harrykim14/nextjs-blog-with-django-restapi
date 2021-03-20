## django rest-framework로 작성한 REST api를 이용해 블로그와 To Do List 웹사이트 만들기
* django로 작성한 REST api는 [이쪽](https://github.com/harrykim14/nextjs_restAPI)에서 소스코드를 확인할 수 있습니다
* 해당 REST api는 Heroku에 deploy되어 있으며 [해당 페이지](https://nextjs-api-harry.herokuapp.com/api/)를 통해 작성된 포스트와 유저 정보 등을 불러올 수 있습니다

**1. 로그인 페이지 : tailwindcss에서 제공하는 포맷을 사용하여 구현**

![image](https://user-images.githubusercontent.com/67398691/111730448-cd9c5e80-88b4-11eb-825a-42976843771d.png)

(사진1: tailwindcss에서 무료로 제공하는 Sign-in and Registration 포맷을 이용한 로그인 화면)

**2. 메인 페이지 : 블로그와 To do list 페이지로 접속할 수 있도록 간단하게 구현**

![image](https://user-images.githubusercontent.com/67398691/111730535-fae90c80-88b4-11eb-993c-6e56038a9fc6.png)

(사진2: 정적 페이지들로 구성된 블로그 사이드와 CRUD가 가능한 To Do list 페이지를 나눠 구성)

**3. 블로그 페이지 : REST api에서 불러온 post 정보를 토대로 리스트화**

![image](https://user-images.githubusercontent.com/67398691/111730746-64691b00-88b5-11eb-8249-aa1b26f23dc5.png)

(사진3: posts들은 build될 때 getStaticProps를 통해 api를 호출하고 페이지를 정적으로 생성)

**4. To Do List 페이지 : REST api로 데이터의 CRUD를 간단하게 구현**

![image](https://user-images.githubusercontent.com/67398691/111858083-80ce8b80-8979-11eb-8cfd-d04f3f77ff85.png)

(사진4: swr 라이브러리를 통해 CRUD를 실시간으로 반영하는 To Do List 페이지를 구현)

![image](https://user-images.githubusercontent.com/67398691/111858224-b0ca5e80-897a-11eb-8299-334c9013d175.png)

(사진5: 오른쪽 수정 버튼을 클릭하면 UPDATE 버튼으로 변경되며 휴지통 버튼을 통해 삭제 가능)

* __Next.js를 사용해보며 느낀 점__
1. 정적인 페이지를 미리 빌드함으로써 사용자에게 더욱 빠른 페이지 이동과 경험을 제공할 수 있다
2. 상세 페이지를 폴더별로 구성(파일명에 대괄호로 해당 props를 설정)함으로써 폴더만 보고도 웹 앱의 구조를 파악하기 용이했다
3. 페이지 수가 적은 웹사이트라면 Next.js가 좋을 듯 하지만 정적으로 생성해야 하는 페이지가 많아질 수록 사용자가 부담해야 할 데이터 또한 많아지므로, 쇼핑몰 같은 페이지가 많은 웹사이트에는 어울리지 않을 것이라 쉽게 유추할 수 있었다
