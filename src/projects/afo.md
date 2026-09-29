---
title: AFO
tagline: 멀티 에이전트 스쿼드의 문제 해결 과정을 노드 그래프로 시각화하는 도구
period: 2026.08
role: Frontend · 한정판콩국수
tags: [React, TypeScript, Vite]
color: #0a0a0a
github: https://github.com/bean-noodles/afo-client
---

## 개요

> JunctionX Korea 2026 참가작입니다.

AFO(All Forward One)는 Planner와 여러 전문 에이전트로 구성된 스쿼드가 사용자의 요청을 해결해 나가는 과정을 노드 기반 그래프로 보여주는 도구입니다.

여러 에이전트가 병렬로 수행한 작업을 하나의 선형적인 대화로 뭉뚱그려 보여주는 기존 AI 인터페이스와 달리, 스쿼드의 구성과 각 에이전트의 실행 순서(세로축)·병렬 관계(가로축)·입출력을 인터랙티브하게 따라갈 수 있습니다.

- 팀: 한정판콩국수
- 담당: Frontend

## 시스템 구성

| 영역 | 기술 | 역할 |
|---|---|---|
| 클라이언트 | React · TypeScript · Vite | 요청 입력, 스쿼드/세션 관리, 웨이브 단위 에이전트 실행 과정을 노드 그래프로 시각화 |
| 서버 | FastAPI · Python | 스쿼드 구성·실행 계획 수립, 에이전트 병렬 실행 및 결과 요약 |
| 데이터베이스 | Supabase | 인증, 스쿼드·세션·대화 기록 저장 |

<!--
## 프로젝트 회고

- 부딪힌 문제와 해결 과정
- 다시 한다면 다르게 할 것
-->
