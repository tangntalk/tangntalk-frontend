# client directory

아주 기초적인 디렉터리만 설정했습니다.

### 실행 방법

1. 디렉토리가 client인지 확인해주세요. client내에서 작업해야합니다. 전체 yonseitalk 안됩니다!
2. client 디렉토리에서 npm install
3. 이후 npm start
4. http://localhost:3000/에서 리액트 파일이 돌아갑니다.
   기존에 돌아가는 다른 프로젝트가 있을 경우 http://localhost:3001/등에 돌아갑니다.
   보통 자동으로 크롬창에 뜹니다.

### 주요 라이브러리

react:기본 라이브러리. state를 통한 상태 관리, 컴포넌트 사용, Virtual dom 등이 특징입니다.

react-router-dom: 라우팅을 하는데 사용됩니다

styled-components: css 모음을 태그로 만들어 사용할 수 있습니다. 

### 설명

/public: 퍼블릭은 가상 돔이 들어갈 빈 index.html과 기타 이미지 파일이 존재합니다. 

/src: 개발이 이루어질 메인 폴더입니다

src에 있는 index.js가 화면에 띄워지고, index.js에 띄워지는 <App/>은 app.js를 import한 것입니다.

app.js는 react-router-dom 라이브러리을 사용하여 페이지 path별로 pages 폴더 안 페이지 js 파일들과 연결되어 있습니다. 페이지 js 파일들이 app에 쓰일 페이지 코드들을 리턴합니다.

컴포넌트는 page에 들어갈 요소들입니다. 아시겠지만 뷰나 리액트 없이는 매번 다시 써야하는 걸 재활용 가능하고, props에 따라 조금만 모양/요소를 바꿔 띄울 수도 있습니다.

style 파일은 styled-components 라이브러리를 사용하여 페이지/컴포넌트에서 사용할 태그를 만듭니다.

 ### 배포

서버의 yonseitalk/client 디렉토리에서 다음과 같이 빌드와 serve를 수행합니다.

production 환경 빌드: npm run build
- production 환경에 맞춰지고 파일이 최적화 된 빌드 파일을 build 디렉토리에 생성합니다.

프론트엔드 파일 serve: pm2 serve build 8200 --spa

프로세스 확인: pm2 ls

프로세스 삭제: pm2 delete 0
