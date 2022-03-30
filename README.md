# [국제화(i18n) 자동화 가이드](https://ui.toast.com/weekly-pick/ko_20210303?fbclid=IwAR0squBMJzSaezvJjV3r8cTnbxQ5ubBmMLnq2xjsnY3PAvAj0fdphgGTz4Y)

**Google Sheet를 이용한 다국어 환경 자동화**

[Example Google Docs](https://docs.google.com/spreadsheets/d/1BV_bfEBuRlgdMPjxQkVfHaZ0EakRIE4XNikpPYPymKs/edit#gid=0)

<br />

---

## Package

<br />

**Install i18**

    yarn add i18next

**scanner, google-spreadsheet**

    yarn add -D i18next-scanner google-spreadsheet

**Nodejs Folder Management**

    yarn add mkdirp

<br />

---

## scripts

<br />

    yarn scan:i18n

```js
// i18next-scanner.config.js
// 아래의 경로에서 i18을 사용한 모든 다국어 처리 함수를 각 locales에 json으로 저장한다.
  input: [
    `./pages${COMMON_EXTENSIONS}`,
    `./components${COMMON_EXTENSIONS}`,
    `./stories${COMMON_EXTENSIONS}`,
  ],
```

<br />

    yarn upload:i18n

로컬 기준 `i18n/locales` 내부 각 폴더에 json 파일의 입력값을 [Google Docs](https://docs.google.com/spreadsheets/d/1BV_bfEBuRlgdMPjxQkVfHaZ0EakRIE4XNikpPYPymKs/edit#gid=0)에 업로드 한다.

<br />

    yarn download:i18n

[Google Docs](https://docs.google.com/spreadsheets/d/1BV_bfEBuRlgdMPjxQkVfHaZ0EakRIE4XNikpPYPymKs/edit#gid=0) 기준 각 셀의 입력값을 로컬로 다운로드 한다.

<br />

---

## Sequence

1. `i18n/locales` 내부 각 폴더에 번역 요청이 필요한 키 값을 입력 및 업로드 스크립트 실행

   ```js
    {
        "이름": "nameUS",
        "주소": "서울2"
        "추가로 번역할 값": "",
    }
   ```

   **scripnt** -> **yarn upload:i18n**

2. [Google Docs](https://docs.google.com/spreadsheets/d/1BV_bfEBuRlgdMPjxQkVfHaZ0EakRIE4XNikpPYPymKs/edit#gid=0) 에서 번역이 완료되면 다운로드 스크립트 실행

   **script** -> **yarn download:i18n**

---
