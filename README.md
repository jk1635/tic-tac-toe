# Tic Tac Toe

[1. 프로젝트 소개](#1-프로젝트-소개)<br/>
[2. 실행 방법](#2-실행-방법)<br/>
[3. 주요 기능 리스트](#3-주요-기능-리스트)<br/>
[4. 기술 스택 및 라이브러리](#4-기술-스택-및-라이브러리)<br/>
[5. 프로젝트 구조](#5-프로젝트-구조)<br/>

## 1\. 프로젝트 소개

Tic Tac Toe 게임으로 웹과 모바일 환경에서 모두 이용 가능합니다.<br/>
다양한 크기의 보드 사이즈, 승리 조건, 플레이어 마크 및 색상 등을 설정할 수 있으며, 무르기 기능도 제공합니다.

[배포 링크](https://tic-tac-toe-seven-gold.vercel.app)

![tic-tac-toe](https://github.com/jk1635/tic-tac-toe/blob/main/docs/tic-tac-toe.gif)

## 2\. 실행 방법

```sh
> yarn install
> yarn start
```

## 3\. 주요 기능 리스트

| 구분 | 주 기능 | 상세 기능 | 설명 |
| --- | --- | --- | --- |
| 1. 홈 | 1.1 게임 시작 버튼 |  | 게임 설정 페이지로 이동한다. |
|  | 1.2 게임 기록 보기 버튼 |  | 게임 기록 페이지로 이동할 수 있으며, 기록이 없는 경우 이동이 제한된다. |
| 2. 게임 설정 | 2.1 게임 설정하기 | 2.1.1 보드 사이즈 설정 | 보드 사이즈를 3X3부터 10X10까지 선택 가능하다. |
|  |  | 2.1.2 승리 조건 | 승리 조건을 설정한다. |
|  |  | 2.1.3 플레이어 마크 | 플레이어의 마크를 선택한다. |
|  |  | 2.1.4 플레이어 색상 | 플레이어 1과 2의 색상을 선택하며, 같은 색상 및 마크 선택 시 게임 진행이 불가하다. |
|  |  | 2.1.5 스타팅 멤버 | 스타팅 멤버를 '랜덤', '플레이어 1', '플레이어 2' 중에서 선택한다. |
|  | 2.2 설정 초기화 버튼 |  | 설정을 기본값으로 되돌린다. |
|  | 2.3 시작하기 버튼 |  | 게임 화면으로 이동한다. |
| 3. 게임 화면 | 3.1 설정 상태 보기 | 3.1.1 보드 사이즈 및 승리 조건 확인 | 설정한 보드 사이즈와 승리 조건을 표시한다. |
|  |  | 3.1.2 진행 안내 | 다음 순서의 마크와 색상을 안내하며, 게임 종료 시 승리 또는 무승부를 표시한다. |
|  | 3.2 게임 진행 |  | 가로, 세로, 대각선 승리 조건 충족 시 게임이 종료된다. |
|  | 3.3 무르기 기능 | 3.3.1 무르기 버튼 | 각 플레이어는 게임당 최대 3회까지 무르기가 가능하다. 무르기 횟수를 초과하면 비활성화된다. |
|  |  | 3.3.2 무르기 횟수 | 남은 무르기 가능 횟수를 보여준다. |
|  | 3.5 게임 초기화 |  | 게임을 처음부터 다시 시작한다. |
|  | 3.6 게임 저장 |  | 게임이 종료되면 기록을 저장한다. |
|  | 3.7 헤더 |  | 헤더의 로고는 홈으로 이동한다. |
| 4. 게임 기록 | 4.1 기록 보기 | 4.1.1 게임 종료 시 상황 | 게임 종료 시의 최종 상황을 보여준다. |
|  |  | 4.1.2 마크 놓인 순서 확인 | 게임 진행 중 마크가 놓인 순서를 확인한다. |
|  | 4.2 홈 버튼 |  | 홈 페이지로 이동한다. |


## 4\. 기술 스택 및 라이브러리
- React
- TypeScript
- Emotion
- Recoil
- React-Select

## 5\. 프로젝트 구조

<details>
<summary><strong>프로젝트 구조 (더보기)</strong></summary>

  ```sh
  src
 ┣ __test__
 ┃ ┗ BoardPage.spec.tsx
 ┣ components
 ┃ ┣ Button
 ┃ ┃ ┣ Button.styled.ts
 ┃ ┃ ┣ Button.tsx
 ┃ ┃ ┗ index.ts
 ┃ ┣ Common
 ┃ ┃ ┣ BasicContainer.tsx
 ┃ ┃ ┣ Common.styled.ts
 ┃ ┃ ┣ Loading.tsx
 ┃ ┃ ┣ NotFound.tsx
 ┃ ┃ ┗ index.ts
 ┃ ┣ Dialog
 ┃ ┃ ┣ Dialog.styled.ts
 ┃ ┃ ┣ Dialog.tsx
 ┃ ┃ ┗ index.ts
 ┃ ┣ FixedBottom
 ┃ ┃ ┣ FixedBottom.styled.ts
 ┃ ┃ ┣ FixedBottom.tsx
 ┃ ┃ ┗ index.ts
 ┃ ┣ GameBoard
 ┃ ┃ ┣ GameBoard.styled.ts
 ┃ ┃ ┣ GameBoard.tsx
 ┃ ┃ ┗ index.ts
 ┃ ┣ Header
 ┃ ┃ ┣ Header.styled.ts
 ┃ ┃ ┣ Header.tsx
 ┃ ┃ ┗ index.ts
 ┃ ┣ Icon
 ┃ ┃ ┣ Icon.styled.ts
 ┃ ┃ ┣ Icon.tsx
 ┃ ┃ ┗ index.ts
 ┃ ┣ Layout
 ┃ ┃ ┣ Layout.styled.ts
 ┃ ┃ ┣ Layout.tsx
 ┃ ┃ ┗ index.ts
 ┃ ┣ LogBoard
 ┃ ┃ ┣ LogBoard.styled.ts
 ┃ ┃ ┣ LogBoard.tsx
 ┃ ┃ ┗ index.ts
 ┃ ┣ PlayAction
 ┃ ┃ ┣ PlayAction.styled.ts
 ┃ ┃ ┣ PlayAction.tsx
 ┃ ┃ ┗ index.ts
 ┃ ┣ Select
 ┃ ┃ ┣ Select.styled.ts
 ┃ ┃ ┣ Select.tsx
 ┃ ┃ ┗ index.ts
 ┃ ┗ StatusIndicator
 ┃ ┃ ┣ StatusIndicator.styled.ts
 ┃ ┃ ┣ StatusIndicator.tsx
 ┃ ┃ ┗ index.ts
 ┣ constants
 ┃ ┗ gameConstants.ts
 ┣ hooks
 ┃ ┣ useGameStatus.ts
 ┃ ┗ useInitializeBoard.ts
 ┣ pages
 ┃ ┣ BoardPage.tsx
 ┃ ┣ HistoryPage.tsx
 ┃ ┣ HomePage.tsx
 ┃ ┗ SettingPage.tsx
 ┣ stores
 ┃ ┣ atoms.ts
 ┃ ┗ selectors.ts
 ┣ styles
 ┃ ┣ global.ts
 ┃ ┣ reset.ts
 ┃ ┗ theme.ts
 ┣ types
 ┃ ┣ index.ts
 ┃ ┗ theme.d.ts
 ┣ App.tsx
 ┣ GlobalPortal.tsx
 ┣ index.css
 ┗ index.tsx
  ```

</details>