---
title: JUST Landing Page
tagline: 스타트업 동아리 JUST 랜딩 & 리크루팅 페이지, 후배들이 코드 없이 운영하는 백오피스까지
period: 2024.01 — 2026.10
role: Frontend / Design
tags: [React, Flutter, Firebase, Figma]
status: now Releasing
color: #111
web: https://justartup.github.io/just-landing/
github: https://github.com/JUSTARTUP/just-landing
---

## 개요

고등학교 스타트업 동아리 JUST의 랜딩 & 리크루팅 페이지입니다. 동아리 리더로서 디자인과 프론트엔드 개발을 맡았습니다.

- **1차 (2024)**: Flutter로 첫 랜딩 페이지를 만들었습니다.
- **2차 (2026)**: React로 다시 만들고, Firebase 기반 백오피스를 추가했습니다.

## 시스템 구성

| 영역      | 기술                |
| --------- | ------------------- |
| Front-end | React (1차 Flutter) |
| Backend   | Firebase            |
| Design    | Figma               |

## 백오피스: 후배들이 개발하지 않아도 되도록

해가 바뀔 때마다 연도, 수상 내역, 프로젝트가 늘어나는데, 이걸 반영하려고 매년 코드를 고치고 다시 배포하는 일은 작지만 반복되는 귀찮음이었습니다. 개발을 맡은 후배가 매번 이 작업에 시간을 쓰는 대신, 코드를 몰라도 누구나 업데이트할 수 있게 만들고 싶었습니다.

그래서 콘텐츠를 코드에서 분리했습니다. 연도·수상 내역·프로젝트를 Firestore에 저장하고, 랜딩 페이지는 실행될 때 그 데이터를 불러와 그립니다. 후배들은 백오피스 화면에서 항목을 추가하기만 하면 되고, 별도의 개발이나 배포 없이 바로 페이지에 반영됩니다.

## 프로젝트 회고

- Flutter에서 React로 옮긴 이유: Flutter는 웹에 최적화되어 있지 않았고, 결정적으로 동아리 안에 Flutter를 유지보수할 사람이 더 이상 없었습니다. 기술 선택이 기능뿐 아니라 그 코드를 이어받을 사람까지 고려해야 한다는 걸 배웠습니다.
- 매년 반복되는 작은 수작업도 구조로 없앨 수 있다는 걸 배웠고, 만드는 것만큼 운영하기 쉬운 구조가 중요하다는 걸 느꼈습니다.
