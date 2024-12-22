---
title: 'Shape of Memory'
subtitle: 'Nanke/Matsu'
description: 'Sentiment Analysis based on Instagram Posts'
postDate: 'Dec. 2024'
video: '/rcs2024f/videos/ccover_ko'
colors:
  text: 'text-purple'
  background: 'bg-white'
user:
  name: 'Ko, Pin-Yuan'
  avatar: '/rcs2024f/images/avatars/avatar_ko.jpg'
metadata: 
  location: 'Tainan/Matsu, Taiwan'
  
---

## Research Topic 研究主題

分析並歸納都市空間中感知與物理上的節點，作為輪迴日常中的斷裂點與某種感知空間設計依據

### Detail Description
現在社會中，Instagram平台共有24億的使用者，年齡區間18-29歲、30-49歲與50-64歲的人口裡分別有78%、59%及35%的人會使用Instagram。我想知道在這個數位媒體成為日常的時代下，媒體平台是如何影響人們對生活空間及都市的記憶。
因此，我藉由Instagram資料收集平台收集社群平台的貼文內容及打卡定位，結合語意分析模型分析基地及周圍的都市空間給人的感受、體驗與認知，並通過instagram的商業行為了解網路媒體對空間記憶的意象營造。研究前半段以馬祖東莒島作為嘗試，後半部則結合大五畢業設計議題，以近年來外來人口快速增加的南科出發，探討蓬勃發展的房地產廣告如何在不經意間營造或引導大家對於"家"的記憶與認知。

## Key Sources

### Datasets
1. Social media posts 社群平台上公開的貼文與打卡地點
2. Building and infrastructure data from Open Data Taiwan 基地現況與周圍建物資訊、道路邊界等細節資料
### Tools & Simulation Model & Implementation
1. Phantombuster
2. Ollama
3. QGIS
### Workflow

![image_example](/rcs2024f/images/ko/workflow_ko.jpg)

---
## Matsu Sentiment Analysis 馬祖情緒地圖
大家對馬祖的記憶是什麼呢?軍事遺構?海?或是強勁的風?
### 情緒熱力圖
藉由Instagram中"#馬祖"的標籤收集相關的公開貼文，並透過語意分析模型分析貼文文字情緒。分析結果以1(負面)-5(正面)表示，我採取兩種不一樣的呈現方式，分別展示了集體與個人認知的差異。

```python
import panda
from tramsformers import pipeline

sentiment_pipelune=pipeline("sentiment_analysis",model="nlptown/bert-base-multilingual-uncased-sentiment")
```

- 每一筆資料的情緒分數(1-5分)

<div class="w-full relative">
  <div class="relative w-full" style="padding-top: 49%;">
    <iframe 
      src="/rcs2024f/webpages/sentiment_analysis_map.html"
      class="absolute top-0 left-0 w-full h-full"
    ></iframe>
  </div>
</div>

- 每個地點貼文情緒分數平均，越亮處則情緒越正面
![image_example](/rcs2024f/images/ko/emotion_score_ko.png)

### 關鍵字雲圖
除了對文字情緒的分析，我同時也針對文字本身做進一步的拆解，透過語意分析模型(Ollama-llama2)提取每個地點的關鍵字並在地圖上呈現。

![image_example](/rcs2024f/images/ko/keyword_matsu_ko.jpg)

文字呈現的是個人的意志，卻似乎仍有某些共通性。我針對幾個有趣的關鍵字地點進行圖片的光線方向分析，想了解光線、環境與感知之間的關聯。
- 日夢 影像分析有大面積藍綠色，顯示光線方向分散且均勻，照片中光影變化較少，這種光線分佈會讓人感覺到疏離、平靜或帶有一絲空洞感。
![image_example](/rcs2024f/images/ko/light_ko.jpg)
- 神性 雖然較無整體的趨勢，但其中幾張影像在上半部呈現紅色意為垂直向下的光，垂直向下或具放射性的光線分布較有可能營造神聖的感受。
![image_example](/rcs2024f/images/ko/light2_ko.jpg)

--- 
## Memory of Nanke 南科與"家"的記憶
由於Instagram平台上的資料具有商業價值，造就了相關平台資訊的難以取得，這種透過日常觀察鎖定商業推播對象的行為除了發生在網路世界，在這個各路媒體崛起的時代下是否也發生在現實生活中?
我觀察到南科周圍頻繁出現的大型房地產廣告看板，他們似乎就像都市尺度的"業配現象"一般，鎖定來自四面八方的就業遊牧民族，藉由各種標語、概念及圖像營造著家與居住的想像，我想透過這些建商廣告探索當代台灣居住空間的趨勢，空間型態及與都市關係上是否有新的詮釋?

### 南科生活圈
透過Instagram平台在#南科標籤下的貼文發現，與南科相關的活動足跡並不侷限在園區周圍，高速公路及快速道路交流道周圍也漸具優勢。

![image_example](/rcs2024f/images/ko/NAN_ad.jpg)

### 建案廣告關鍵字雲圖
藉由廣告文字分析試圖探討在機能之下，建商意圖營造的居住意象。"家"能提供什麼樣的空間感受?
![image_example](/rcs2024f/images/ko/NAN_kw.jpg)

### 建案廣告圖分析
如果說從文字分析可以大概了解建商對消費者提出的家的想像，那我認為圖面則是在不經意間透露設計者想以什麼手法來達到想像中的狀態或感受。同時也透過圖面表達了與周圍環境、動線及都市的關係。
![image_example](/rcs2024f/images/ko/NAN_per.jpg)




