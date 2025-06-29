# Memory Game

Ez a projekt egy **Memory Game**, amely React, Redux, TypeScript és Vite felhasználásával készült. A játék célja, hogy a játékos megtalálja az összes páros kártyát egy adott időn belül, miközben a hibák száma is számít.

## Főbb technológiák

- **React** – felhasználói felület komponensekhez
- **TypeScript** – típusbiztos fejlesztéshez
- **Redux Toolkit** – állapotkezeléshez
- **Vite** – gyors fejlesztői szerver és build rendszer
- **React Bootstrap** – stílusos, reszponzív komponensekhez
- **Sass (SCSS)** – egyedi stílusokhoz
- **Jest & React Testing Library** – teszteléshez
- **vite-plugin-svgr** – SVG-k React komponensként való importálásához

## Főbb komponensek

- [`App`](src/app/App.tsx): A fő alkalmazás komponens, amely összefogja a többi részt.
- [`Header`](src/app/components/header/Header.tsx): Játék címsor, időzítő, statisztikák, beállítások és újraindítás gomb.
- [`GameBoard`](src/app/components/gameboard/GameBoard.tsx): A játéktábla, amely a kártyákat jeleníti meg.
- [`GameCard`](src/app/components/card/GameCard.tsx): Egy-egy memória kártya komponense.
- [`SettingsModal`](src/app/components/modal/SettingsModal.tsx): Beállítások módosítására szolgáló modal ablak.
- [`MessageModal`](src/app/components/modal/MessageModal.tsx): Játék végi üzenetek (győzelem/vereség) megjelenítése.

## Főbb funkciók

- Páros kártyák keresése időre
- Hibák számlálása
- Játék újraindítása
- Beállítások módosítása (kártyák száma, idő, hibalehetőségek száma, nyelv)
- Reszponzív, modern UI

## Parancsok

A projekt futtatásához és fejlesztéséhez az alábbi npm parancsokat használhatod:

| Parancs           | Leírás                              |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Fejlesztői szerver indítása (Vite)  |
| `npm run build`   | Production build készítése          |
| `npm run preview` | Buildelt alkalmazás helyi szerveren |
| `npm run test`    | Tesztek futtatása (Jest)            |
| `npm run lint`    | Kódellenőrzés (ESLint)              |

## Fejlesztői környezet

- Node.js 18+ ajánlott
- A projekt SCSS-t és egyedi fontokat is használ, ezek a `src/app/assets/scss` és `build/assets` mappában találhatók.

## Futtatás

1. Függőségek telepítése:
   ```sh
   npm install
   ```
2. Fejlesztői szerver indítása:
   ```sh
   npm run dev
   ```
3. Tesztek futtatása:
   ```sh
   npm run test
   ```

## Mappastruktúra

- `src/app/components/` – UI komponensek
- `src/app/assets/` – Stílusok, képek, fontok
- `src/app/store.ts` – Redux store konfiguráció
- `src/app/slice.ts` – Játék logika (Redux slice)
- `src/app/consts/` – Konstansok, emojik

---

Készítette: Mészöly Márton