# iPhone 17 Pro 問答遊戲（詐騙廣告演示）

這是一個教育性的響應式網頁應用，展示三個問答題目，並在第三題時彈出模擬詐騙廣告的彈窗。

## 功能特色

- ✅ 響應式設計，支援桌面和移動設備
- ✅ 三個互動式問答題目
- ✅ 進度條顯示
- ✅ 動畫效果
- ✅ 模擬詐騙廣告彈窗（iPhone 17 Pro）
- ✅ 倒數計時器
- ✅ 教育性質的警示訊息

## 安裝步驟

1. **確保已安裝 Python 3.7 或更高版本**

2. **安裝依賴套件**
```bash
pip install -r requirements.txt
```

## 執行方式

1. **啟動應用**
```bash
python app.py
```

2. **開啟瀏覽器訪問**
```
http://localhost:5000
```

## 專案結構

```
iphone_web/
├── app.py              # Flask 主程式
├── requirements.txt    # Python 依賴套件
├── templates/
│   └── index.html     # 主要 HTML 模板
├── static/
│   ├── style.css      # CSS 樣式
│   └── script.js      # JavaScript 邏輯
└── README.md          # 說明文件
```

## 使用說明

1. 開啟網頁後，依序回答三個問答題
2. 點擊選項後，"下一題"按鈕會啟用
3. 進入第三題時，會自動彈出模擬的詐騙廣告
4. 廣告包含：
   - 閃爍的恭喜訊息
   - iPhone 17 Pro Max 圖示
   - 倒數計時器
   - 假的用戶評論
   - 誘導性的領取按鈕

## 教育目的

⚠️ **重要提醒**：此應用純粹用於教育目的，展示常見的網路詐騙手法。

請記住：
- 真實的獎品不會通過彈窗廣告發放
- 不要輕易點擊可疑的彈窗
- 不要提供個人資訊給不明來源
- 保持警惕，保護好自己的資料安全

## 技術棧

- **後端**: Python Flask
- **前端**: HTML5, CSS3, JavaScript
- **特色**: 響應式設計, CSS 動畫, 互動式 UI

## 自訂修改

您可以輕鬆修改：
- `templates/index.html` - 修改問題內容
- `static/style.css` - 調整樣式和顏色
- `static/script.js` - 修改互動邏輯和彈窗行為

## 授權

此專案僅供學習和教育用途。

