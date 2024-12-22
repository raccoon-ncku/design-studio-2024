---
title: 'Surface Temperature of Jogging Path'
subtitle: ''
description: ''
postDate: 'December 2024'
video: '/rcs2024f/images/jin/底圖_2'
colors:
  text: 'text-pearl-bush'
  background: 'bg-black'
user:
  name: 'JIN WEI KUAN'
  avatar: ''
metadata:
  location: 'Taipei'
---

# *Surface Temperature of Jogging Path*
#### *JIN WEI KUAN*
---
---
## 1. Concept

The 2025 graduation design site is located around Taipei Stadium, where jogging has been observed as the most frequent exercise activity. This prompted me to consider what kind of spatial environments would make people choose certain routes for jogging. If I were to redesign the area around Taipei Stadium and expand the scale to urban planning, how would I design it when considering the integration of cycling and marathon activities?
In this STUDIO project, we will analyze our research questions using real environmental data from databases. Through satellite remote sensing of surface temperatures, distribution of urban pavements and street trees, as well as actual public jogging route records, we will analyze the general comfort level of these paths. The results from this research will help support my design thinking with more objective evidence for my graduation design.

2025的畢業設計基地位置選在台北體育館的周圍，而在基地中最頻繁發生的運動模式為慢跑，因此讓我開始思考甚麼樣的空間環境會讓人選擇為慢跑路徑，如果我重新規劃台北體育館周圍，並將尺度提升至都市範圍的規劃，單車與馬拉松進入此地的時候我會怎麼設計?  
此次STUDIO將透過database的真實環境數據去分析研究我想探討的議題，透過衛星遙測地表的溫度，都市鋪面與行道樹的分布以及真實大眾慢跑路徑的紀錄，去分析路徑大致的體感舒適度，而此次研究得到的結果，相信能夠幫助我的畢業設計加入更多客觀的事實去佐證設計思考。 
 

![alt text](/rcs2024f/images/jin/image.png)  
---
## 2. Research Method

The study area is focused on Taipei City, where jogging routes will be analyzed using public data collected from existing fitness applications. By utilizing satellite remote sensing data of surface temperatures, along with distribution maps of sidewalk pavements, street trees, and park green spaces, we will analyze the relationship between these factors and the general comfort level of jogging routes through GIS and charts.  

此次研究的範圍選定在台北市，慢跑路徑透過已開發的運動應用程式，去抓取程式上的公開數據，並利用遙測衛星地表溫度圖，人行道鋪面、行道樹、公園綠地的分布圖，透過GIS以及圖表去分析以上因素與慢跑路徑的大致體感舒適度的關係。

## 3. Data
### - 慢跑路徑  

The collection of jogging route data uses public data provided by the STRAVA API, searching for jogging and cycling routes within a 4-kilometer radius from Taipei Arena as the center point. However, information that could generate commercial value requires further application, so we only obtained the geographical locations of routes without access to any time-related data.  

慢跑路徑資料的蒐集使用STRAVA API提供的公開數據，以小巨蛋為中心點半徑4公里去搜尋台北市的慢跑路徑與單車路徑，但是有關能夠產生商業價值的資訊都需要更進一步的申請，所以只得到路徑的地理位置，無法得知各種與時間有關係的資料。

![alt text](/rcs2024f/images/jin/底圖.png)  

### - 遙測衛星地表溫度

The collection of remote sensing satellite surface temperature data uses LST (Land Surface Temperature) provided by USGS Earth Explorer, covering the period from January 1, 2023, to December 31, 2023. LST data from March, July, September, and December, which had less cloud cover, were selected as reference points for the four seasons. Using SCP (Semi-Automatic Classification Plugin) in GIS, BAND10 and BAND11 from the LST data were processed to generate visualized surface temperature base maps.  

遙測衛星地表溫度的資料蒐集使用USGS Earth Explorer提供的LST，時間以2023.01.01至2023.12.31，從中抓取雲覆蓋較少的三月、七月、九月與十二月的LST，作為四季的參考依據，並透過GIS裡的SCP去計算LST裡的BAND10與BAND11得到可以視覺化的地表溫度底圖。

![alt text](/rcs2024f/images/jin/底圖_2.png)

### - 台北市人行道鋪面、行道樹分布、公園綠地

The geographical distribution information of Taipei City's sidewalk pavements, street trees, and park green spaces was obtained from Taiwan's Government Open Data Platform and OSM (OpenStreetMap). These geographical information datasets were then visualized using GIS.  

台北市人行道鋪面、行道樹分布、公園綠地的地理位置分布資訊從台灣政府資料開放平台與OSM得到，並透過GIS視覺化這些地理資訊。

![alt text](/rcs2024f/images/jin/鋪面底圖.png)

## 4. Calculate

Using LST obtained from USGS Earth Explorer and processing BAND10 and BAND11 through SCP in GIS, we generated visualized surface temperature base maps. These temperature maps from March, July, September, and December were then weighted with the distribution maps of Taipei City's sidewalk pavements, street trees, and park green spaces to create surface temperature maps that more closely reflect the actual perceived comfort levels.  

利用從USGS Earth Explorer得到的LST，並透過GIS裡的SCP去計算LST裡的BAND10與BAND11得到可以視覺化的地表溫度底圖，分別以三月、七月、九月與十二月的溫度圖與台北市人行道鋪面、行道樹分布、公園綠地分布圖去做加權計算，從而得到更接近真實體感舒適度的地表溫度圖。

![alt text](/rcs2024f/images/jin/溫度計算底圖.png)
![alt text](/rcs2024f/images/jin/鋪面溫度計算底圖.png)
![alt text](/rcs2024f/images/jin/都市尺度total.png)

## 5. Result
### - Spatial Pattern

The geographic information from the STRAVA API for slow-running paths can be categorized into four spatial patterns: sports fields, urban park squares, urban cross-street sidewalks, and riverside mountain areas. You calculate the integrated ground temperature map for four months based on these spatial patterns and use GIS to calculate the average temperature map for each month.  

透過STRAVA API得到的慢跑路徑地理資訊，大致可以分成運動場、都市公園廣場、都市跨街人行道、河岸山地等等四個空間模式，我以這四種空間模式去計算四個月份的綜合底表溫度圖，並將這四種空間模式的各月份溫度透過GIS去做平均溫度圖的計算。

![alt text](/rcs2024f/images/jin/單一路徑運動場.png)
![alt text](/rcs2024f/images/jin/單一路徑都市公園廣場.png)
![alt text](/rcs2024f/images/jin/單一路徑都市跨街人行道.png)
![alt text](/rcs2024f/images/jin/單一路徑河岸山地.png)
![alt text](/rcs2024f/images/jin/不同空間模式.png)
![alt text](/rcs2024f/images/jin/平均溫度運動場.png)
![alt text](/rcs2024f/images/jin/平均溫度都市公園廣場.png)
![alt text](/rcs2024f/images/jin/平均溫度都市跨街人行道.png)
![alt text](/rcs2024f/images/jin/平均溫度河岸山地.png)

The analysis reveals that sports fields, urban park squares, and riverside mountain areas typically fall within one or two street blocks, making the comparison of comfort using temperature charts (with temperature on the Y-axis, months on the X-axis, and color-coded spatial patterns) more objective. The comfortable temperature ranges are summarized as follows: March-May (22-26°C), June-August (24-28°C), September-November (23-28°C), and December-February (above 20°C). The results indicate that in March and July, riverside mountain areas are the most comfortable for running; in September, sports fields and riverside mountain areas are most comfortable; and in December, all environments fall within the comfortable range. Exact location information is also recorded in the charts for future spatial case studies. For urban cross-street sidewalks, which span multiple blocks, cycling and marathon activities are also considered when assessing comfort. The temperature ranges are based on historical temperature and humidity averages in Taipei.  

其中運動場、都市公園廣場、河岸山地等空間模式大多屬於一至兩個街廓內的範圍，所以這三個空間模式的圖表(Y軸為溫度，X軸為月份，顏色區分為空間模式類型)去比較舒適度較為客觀，而得到結果以月份來觀察(3-5月22-26°C為舒適溫度、6-8月24-28°C為舒適溫度、9-11月23-28°C為舒適溫度、12-2月20°C以上為舒適溫度)，三月慢跑的空間環境以河岸山地較為舒適；七月慢跑的空間環境以河岸山地較為舒適；九月慢跑的空間環境以運動場與河岸山地較為舒適；十二月慢跑的空間環境都屬於較舒適的範圍，而確切的位置資訊也被記錄進了圖表上，以利後續研究個案空間時，能有好的指標案例。然而，都市跨街人行道的尺度大多跨越多個街廓，並且在觀察此空間模式時，便將其納入騎行單車與馬拉松等活動模式去探討。(舒適溫度的區間根據歷年台北的四季平均溫度與相對溼度去概略總結)

![alt text](/rcs2024f/images/jin/平均溫度圖表.png)

### - Activity Mode

The analysis of marathon and cycling activity paths from the STRAVA API shows that these activities have a similar scale to urban cross-street sidewalks, as they span multiple street blocks. By analyzing temperature variations at specific points, this research can identify spatial temperature differences and highlight areas where improvements can be made in the spatial environment's geographic information.  

透過STRAVA API得到的運動路徑地理資訊，大致可以分成馬拉松與騎行單車等活動模式，延續上一個段落分析的心得，馬拉松與騎行單車的活動方式，類似於都市跨街人行道的尺度，皆跨越多個街廓，因此點位的溫度變化的分析將幫助研究找到空間環境的溫度差異並能夠點出可以改善的空間環境地理資訊。

![alt text](/rcs2024f/images/jin/不同活動模式.png)
![alt text](/rcs2024f/images/jin/點位溫度馬拉松.png)
![alt text](/rcs2024f/images/jin/點位溫度都市單車路徑.png)

Yao Yishan is analyzing temperature variation along eight marathon routes from the STRAVA API, organized into eight line charts with temperature on the Y-axis and the point sequence of each marathon route on the X-axis. The four months are color-coded. Points where the temperature difference between adjacent points exceeds 2°C are marked with their latitude and longitude. A GIS-based visualized monthly temperature distribution map will be used to study the spatial environmental changes that lead to temperature variations and to determine whether improvements are necessary.  

從STRAVA API得到八條馬拉松路徑點位溫度圖，將其整理成八張折線圖表，以Y軸為溫度，X軸為每條馬拉松路徑點位的點位順序，顏色區分為四個月份去作分析，其中標記出相鄰點位溫度差距超過2°C以上的點位經緯度，以GIS的視覺化月份溫度分布圖，研究空間環境發生了何種變化導致溫度改變的發生，並思考路徑是否需要作出規畫改善。

![alt text](/rcs2024f/images/jin/馬拉松點位溫度圖表.png)
![alt text](/rcs2024f/images/jin/馬拉松點位溫度圖表2.png)

Yao Yishan is analyzing temperature variation along cycling routes from the STRAVA API, organized into 24 line charts with temperature on the Y-axis and the point sequence of each cycling route on the X-axis. A GIS-based visualized monthly temperature distribution map will be used to study the spatial environmental changes that lead to temperature variations and to determine whether improvements are necessary.  

而單車路徑的觀察也同於此，將其整理成二十四張折線圖表，GIS的視覺化月份溫度分布圖，研究空間環境發生了何種變化導致溫度改變的發生，並思考路徑是否需要作出規畫改善。

![alt text](/rcs2024f/images/jin/單車路徑點位溫度圖表.png)
![alt text](/rcs2024f/images/jin/單車路徑點位溫度圖表2.png)
![alt text](/rcs2024f/images/jin/單車路徑點位溫度圖表3.png)
![alt text](/rcs2024f/images/jin/單車路徑點位溫度圖表4.png)
![alt text](/rcs2024f/images/jin/單車路徑點位溫度圖表5.png)
![alt text](/rcs2024f/images/jin/單車路徑點位溫度圖表6.png)

## 6. Discussions

By comparing the average temperature maps of different spatial types and the integrated temperature maps of various activity points, you can identify which spaces are more suitable for slow-running paths in different seasons. This analysis provides valuable insight for urban planning and architectural design to create more comfortable environments for slow-running path users. Additionally, during marathon and cycling events, temperature environment data can serve as a reference for both route and station planning.  

透過個空間類型模式的平均溫度圖表，以及不同活動模式的點位綜合溫度圖表的比較，可以分析出甚麼空間在甚麼季節較適合做為慢跑路徑，在後續都市規劃與建築設計時，能夠有參考依據去做思考，甚麼樣的都市空間可以讓慢跑路徑的使用者在行活動時能夠有更舒適的溫度環境，同時當有馬拉松與騎行單車活動的發生時，溫度環境的依據也可以做為不論時路徑規劃與站點規劃的參考。

## 7. Tools
- Strava API
- QGIS
- Chatgpt
- Google Colab
- Python
- Panda
- Markdown
