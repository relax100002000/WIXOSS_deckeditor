# ALLSTAR 版 (index_allstar.html)

オールスター = 全カード使用可能。`index_allstar.html` 會載入
`js/card_info.js`（Diva 世代）＋ `js/card_info_allstar.js`（ALLSTAR 世代）。

## 檔案
| 檔案 | 說明 |
|---|---|
| `index_allstar.html` | 由 `allstar/build_index_allstar.py` 從 index.html 產生 |
| `js/function_allstar.js` | 由 `allstar/build_function_allstar.py` 從 function.js 產生（牌組/註解存在 `AS_` 前綴的 localStorage，不會跟 Diva 版混在一起） |
| `js/card_info_allstar.js` | 由 `allstar/scrape_allstar.bat` 從官網抓取產生 |
| `js/allstar_restriction.js` | オールスター 繭の部屋（使用禁止／同時使用制限），手動維護 |

## 和 index.html 的關係
- 卡片資料、繭の部屋、牌組存檔（`AS_` 前綴）都和 Diva 版分開。
- 頁面與程式是「從 index.html / function.js 產生」：Diva 版改了介面或功能，重跑兩支 build script 就會帶進 ALLSTAR 版。
- ALLSTAR 版刻意拿掉的東西（由 build script 處理）：卡價（yuyu-tei 價格列、牌組卡價總和、卡價來源連結）、手機版自動跳轉、Diva 預設牌組。
- 不要直接改 `index_allstar.html` / `js/function_allstar.js`，下次重跑 build 會被覆蓋；ALLSTAR 專屬的修改請寫進 build script。

## 更新步驟
1. 雙擊 `allstar/scrape_allstar.bat`（需要 Node 18+，約 15–20 分鐘；中斷後重跑會從 `allstar/cache.json` 接續）
2. index.html / function.js 有改版時：`python allstar/build_index_allstar.py` 和 `python allstar/build_function_allstar.py`
