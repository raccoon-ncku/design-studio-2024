---
title: '城市水災避難所規劃'
subtitle: '利用數據分析與GIS技術優化避難規劃，提升防洪韌性與城市韌性'
description: 'GIS技術、水災、避難選址'
postDate: 'December 2024'
video: '/rcs2024f/videos/yishan-main'
colors:
  text: 'text-pearl-bush'
  background: 'bg-orient'
user:
  name: 'Zheng, Yi-Shan'
  avatar: '/rcs2024f/images/avatars/yishan.jpg'
metadata:
  distance: '4.35 mi'
  altitude: '23 ft'
  location: 'Kaohsiung, Taiwan'
---

# 極端氣候下加劇城市水災風險，利用數據分析與GIS技術優化避難規劃，提升防洪韌性與城市韌性

## 主題說明

隨著極端氣候事件的頻率和強度逐年增加，城市地區面臨的水災風險也日益嚴峻。特別是在高度都市化的環境中，由於地面不透水層的增加與排水系統的負載過重，暴雨和洪水災害往往導致大規模的居民疏散與基礎設施受損。如何有效規劃避難所配置，確保災害發生時居民的安全與基本需求，是城市防災規劃的核心挑戰之一。

目前，許多城市缺乏針對水災情境設計的避難所分佈策略，這導致災害發生時居民避難效率低下、安全性不足，甚至可能因收容所空間不足而加劇混亂。

本案選擇以易淹水之高雄市三民區為研究區域，研究族群為65歲以上之老年人口，利用數據分析、GIS技術，提出助於創建更有效的防災系統，與提升城市韌性。

### 使用數據

| **分析數據** | **資料名稱** | **網址** | **檔案類型** |
| --- | --- | --- | --- |
| 使用分區 | 非都市土地使用分區圖 (112年) | [link](https://data.gov.tw/dataset/169538) | .dbf |
| 使用分區 | 高雄市政府都市發展局 都市計畫圖資供應開放平台 | [link](https://urbangisdata.kcg.gov.tw/ODA/web_page/ODA020100.jsp) | .dbf |
| 淹水潛勢 | 淹水潛勢圖 | [link](https://data.gov.tw/dataset/25766) | .dbf |
| 人口統計 | 113年6月行政區三段年齡組性別人口統計_村里_高雄市 | [link](https://segis.moi.gov.tw/STATCloud/QueryInterfaceView?COL=EAh3wNVSRpareHiA%252fB4FxA%253d%253d&MCOL=wkSxTrtu2R0aeijQI%252bApbQ%253d%253d) | .csv |
| 活動中心分佈 | 高雄市里活動中心 | [link](https://data.gov.tw/dataset/47063) | .csv (座標) |
| 消防局分佈 | 高雄市政府消防局 服務據點 | [link](https://fdkc.kcg.gov.tw/cp.aspx?n=4928082F113B77BE&s=46E51698F56B4018) | .csv (座標) |
| 超商分佈 | 全國5大超商資料集 | [link](https://data.gov.tw/dataset/32086?fbclid=IwAR1-5ekeNM6TZSC-1jyXoVrbAR8fPlnnLaXGPUrETnzMR9CujVtdzku81OM) | .csv (座標) |

---

## 研究流程

![mermaid-diagram-2024-12-16-140724.png](/rcs2024f/images/yishan/a1.png)

---

## 研究區域選擇

![分析圖_工作區域 1.jpg](/rcs2024f/images/yishan/a2.jpg)

透過高雄市政府水利局的資料，篩選出高雄市的易淹水地區，並結合各鄉鎮市區的老年人口數進行分析，最終選定老年人口數最多的三民區作為研究地區。

---

## 分析說明

### 各項數據說明

| **分析數據** | **篩選條件** |
| --- | --- |
| 土地使用分區 | 篩選土地使用分區中適合設置避難所的用地（如，公共設施用地）。 |
| 淹水潛勢 | 將淹水潛勢圖層中的高潛勢區域（例如，淹水深度 > 0.5m 的區域）設定為篩選條件，排除這些區域。 |
| 人口數/人口密度 | 將人口密集區域設定為優先考量的範圍，確保服務覆蓋更多人口。 |
| 活動中心、消防局與超商分佈 | 計算這些設施的服務範圍（例如，500m 或 1km 緩衝區），重疊分析適合的地點，將靠近多個設施的區域列為高潛力地點。 |

### 圖層疊加說明

| **分析數據** | **篩選條件** |
| --- | --- |
| 淹水潛勢 ＆ 土地使用分區 | 確認避難所的用地屬性是否適合（如，公共設施用地），並避開高淹水潛勢區。 |
| 活動中心 ＆ 消防局 ＆ 超商分佈 | 確認避難所是否位於便於緊急支援與物資供應的區域內。<br>• 活動中心：可能已具備設施，可直接利用，排除已有區域。<br>• 消防局：靠近消防局的地點便於緊急支援。<br>• 超商：作為物資補給站的便利性考量。 |
| 淹水潛勢 ＆ 人口密度 ＆ 活動中心/消防局/超商 | 綜合多層數據，篩選最適合的避難所地點。 |

### 基地篩選條件總結

選址基於多圖層疊加，重點避開淹水高風險區，靠近人口密集區，並考量緊急設施的分佈。

---

## 分析圖

### 淹水潛勢 ＆ 土地使用分區

![分析圖-02-02.jpg](/rcs2024f/images/yishan/a3.jpg)

- 分析目的：確認避難所的用地屬性是否適合（如，公共設施用地），並避開高淹水潛勢區。
- 篩選條件：
    - 避開高淹水潛勢區：淹水深度 > 0.5m 的區域。
    - 選擇公共設施用地：市場用地、停車場用地、社會福利、廣場用地、體育場用地。
- 結果說明：由結果圖可以得出，將無受淹水潛勢影響之用地納入基地選址考量。

### 活動中心 ＆ 消防局 ＆ 超商分佈

![分析圖-03.jpg](/rcs2024f/images/yishan/a4.jpg)

- 分析目的：確認避難所是否位於便於緊急支援與物資供應的區域內。
- 篩選條件：
    - 活動中心：可能已具備設施，可直接利用，排除已有區域。
    - 消防局：靠近消防局的地點便於緊急支援，設定消防局1公里服務範圍。
    - 超商：作為物資補給站的便利性考量。
- 結果說明：由圖可見在三民區之消防局服務範圍內，易淹水地區有足夠的超商可作為補給站。

### 綜合適宜性分析圖

![分析圖-04.jpg](/rcs2024f/images/yishan/a5.jpg)

- 分析目的：綜合多層數據，篩選最適合的避難所地點。
- 篩選條件：重點避開淹水高風險區，靠近人口密集區，並考量緊急設施的分佈。
- 結果說明：根據篩選條件，篩選出以下三處基地皆為市場用地，其分別位於灣中里、寶龍里、安發里。

---

## 避難所建築類型建議

### 市場用地現況
三處用地皆符合基地篩選條件，為公共設施用地、避開高淹水潛勢區、位於三民區消防局服務範圍內，且周邊皆有足夠的超商補給站。
![20241202_報告-13.png](/rcs2024f/images/yishan/a6.png)

### 避難所建築類型 – 多功能市場

![主視覺.jpg](/rcs2024f/images/yishan/a7.jpg)

- 結合平時用途和災害應對功能的建築設計不僅提升了資源利用率，也增強了城市的防災韌性。
- 多功能性：平時用於日常活動，可做為市場販售空間，災害時可轉為避難空間。
