## django rest-framework로 작성한 REST api의 자료를 이용한 블로그와 To Do list 웹사이트 만들기
* django로 작성한 REST api는 [이쪽](https://github.com/harrykim14/nextjs_restAPI)에서 소스코드를 확인할 수 있습니다
* 해당 REST api는 Heroku에 deploy되어 있으며 [해당 페이지](https://nextjs-api-harry.herokuapp.com/api/)를 통해 작성된 포스트와 유저 정보 등을 불러올 수 있습니다

**1. 로그인 페이지 : tailwindcss에서 제공하는 포맷을 사용하여 구현**

![image](https://user-images.githubusercontent.com/67398691/111730448-cd9c5e80-88b4-11eb-825a-42976843771d.png)

**2. 메인 페이지 : 블로그와 To do list 페이지로 접속할 수 있도록 간단하게 구현**

![image](https://user-images.githubusercontent.com/67398691/111730535-fae90c80-88b4-11eb-993c-6e56038a9fc6.png)

**3. 블로그 페이지 : REST api에서 불러온 post 정보를 토대로 리스트화 
  - 이 때, posts들은 nextjs로 build될 때 node-fetch를 통해 자동적으로 api를 호출하고 페이지를 생성함**
  - 
![image](https://user-images.githubusercontent.com/67398691/111730746-64691b00-88b5-11eb-8249-aa1b26f23dc5.png)


