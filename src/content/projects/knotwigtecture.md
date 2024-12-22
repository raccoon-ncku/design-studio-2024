---
title: 'KNOTTWIGTECTURE'
subtitle: '結·枝·構'
description: '樹枝以綁紮在構築上的造型達成與控制'
postDate: 'December 2024'
video: '/rcs2024f/videos/knotwigtecture'
colors:
  text: 'text-pearl-bush'
  background: 'bg-orient'
user:
  name: '林承頤'
  avatar: '/rcs2024f/images/avatars/CenfiLin.jpg'

---

# KNOTTWIGTECTURE

## 樹枝以綁紮在構築上的造型達成與控制

![主視覺](/rcs2024f/images/knotwigtecture/siteP.png)

## 主題說明

**研究主題:**

樹枝(不規則材料)以綁紮在構築上的造型達成與控制

**詳細說明:**

先以3D掃描的方式將不規則材料(樹冠樹枝)掃描建檔，並在合適特徵區段以石膏翻模搭配綁紮形成同時能兼顧性能(抗彎、抗扭轉等)的綁紮接頭設計。

下一步將此接頭位置與材料打包建檔後作為材料庫，並以排列邏輯擬和於目標造型曲面中後生成確切3D造型單元。

爾後再以MR混合實境搭配輔助腳架協助材料定位角度並進行造型單元石膏綁紮接頭的施作，單元完成後再於基地現場組立完成最終構築體。

**關鍵資源:**

 **數據庫:**

- 材料3D掃描建檔

 **模型:**

- Grasshopper(Cockroach)
- RHINO

 **器材:**

- 3D掃描設備
- 石膏注射器
- 輔助腳架
- MR設備

## 思考背景

### 以材料循環與廢物利用為出發，建立無用材料進行構築的可能性

- 而能夠再利用的前提是要「能用」、「會用」，因此目標在於建立一**可被再現的工作流程**。*(具示範性質)*

- 在流程中則以數位設計的切入解決樹枝原本不易於利用的特性：**不規則且落差大**

## 參考案例與切入點

**Woodchip Barn**
*(AA DESIGN + MAKE)*

在樹林中以3D掃描找出分岔枝(Y Branch)後進行造型演算，並用機械手臂進行接合處的減法加工，最終構築成一棚架的結構體。

![案例照片](/rcs2024f/images/knotwigtecture/case.png)

**以範例發想的切入點：**

- **非破壞性的接合構造：**
讓材料在構築後仍能再利用、建立共享材料庫 *(類似於建材銀行)*

- **縮小到個人尺度：**
使套用工作流程更容易 *(促進再利用守法的推廣)*

## 綁紮與石膏

### 以麻繩綁紮作為接合

- **優點：**
非破壞性的加法接合、可個人實作的尺度、契合不規則材料

- **缺點：**
接合點位不精確、接合點對造型控制能力低

### 強化綁紮接頭的性能

![接頭性能](/rcs2024f/images/knotwigtecture/moment.jpeg)

1. 防止軸向滑動

2. 防止軸向轉動

3. 可控制的接合間距

4. 可控制的接合角度

## 材料性質

### 以鳳凰木樹枝為材料

![樹枝](/rcs2024f/images/knotwigtecture/branch.png)

**傘狀樹形：**
樹枝較曲折多特徵、材質較輕

**取得容易：**
校內多種植 *(材料多取得於小東路旁路樹落枝)*

現已蒐集25枝，直徑1.5公分至5公分不等，長度從40公分至220公分不等

## 設計與脈絡

### 基地

目前設定構築基地： **院圖前草地**

### 設計發想

**以材料鳳凰木為發展脈絡**
建立基地、材料與構築者間的共通性：

![五級分層](/rcs2024f/images/knotwigtecture/layers.jpeg)

---

**台南市：**
鳳凰花城

**成功大學：**
校徽圖樣

**基地：**
曾存有一棵鳳凰木 *(於今年一月因病害移除)*

**構築物：**
以鳳凰木落枝構成

**我：**
構築者、應屆畢業生

---

### 造型

**花瓣造型：**
以單片鳳凰花瓣為造型單元發想，回應整體設計中鳳凰木(花)的脈絡

**造型的挑戰：**
這個造型在斷面上輕微向外出挑，會對構築的接頭產生抗彎矩需求

![造型](/rcs2024f/images/knotwigtecture/shape.jpeg)

### 能體現可控制角度綁紮接頭的優勢

---

## 整體操作流程

**操作流程**
![操作流程](/rcs2024f/images/knotwigtecture/schedule.jpeg)

**時程安排**
![時間安排](/rcs2024f/images/knotwigtecture/time.jpeg)

## 造型生成邏輯

### 材料內容

#### 將掃描的樹枝歸類

---

- **直桿材**
 作為垂直骨架

- **彎桿材**
 骨架的水平固定、加密曲面

- **多分岔枝**
 加密曲面

![材料分類](/rcs2024f/images/knotwigtecture/categorize.jpeg)

 ---

### 特徵尋找

#### 尋找合適作為接頭特徵所在的區位

![特徵](/rcs2024f/images/knotwigtecture/feature.jpeg)

### 貼面邏輯

#### 以垂直骨幹為主輻射排列

將直桿材先貼合骨幹曲線，貼合後再以該區現為軸旋轉並窮舉出最佳解。

![貼面1](/rcs2024f/images/knotwigtecture/fitting1.jpeg)

完成各骨幹單元後再安排水平向固定。

![貼面2](/rcs2024f/images/knotwigtecture/fitting2.jpeg)

## 操作與細節

### 節點

為達成接頭性能要求，於樹枝與樹之間的間隙置入**石膏氣球**，待固化後的石膏可作為樹枝間**間距與角度**的控制。*(固化後的接頭可拆卸重新組裝)*

石膏在氣球束制與樹枝間擠壓之下也能形成一獨立的有機造型。

### 基礎

![基礎](https://scontent-tpe1-1.xx.fbcdn.net/v/t1.15752-9/462649283_931633238524280_443171416307924537_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_ohc=lK497MBZk-EQ7kNvgGij99g&_nc_zt=23&_nc_ht=scontent-tpe1-1.xx&oh=03_Q7cD1QGTUXtliWvniDWC8Z2AC2GCJc-bZq1tF0UmvbVmxuiSFA&oe=677F0A33)

### 工具與操作

1. 將欲固定的兩樹枝先固定到位

2. 調配石膏 *(石膏重150克、水重150克)* 並以改造注射器將石膏注入氣球

3. 塞入固定好的樹枝中間並簡單綁紮等待固化

4. 固化後將石膏氣球卸下來移除氣球後乾燥

5. 待石膏乾燥後即可組裝

![操作流程](/rcs2024f/images/knotwigtecture/process.jpeg)

#### 石膏注射器

![石膏注射器](/rcs2024f/images/knotwigtecture/tool.png)

## 後續規劃



### 輔助支撐

以可調整高低之腳架搭配萬向虎鉗

![輔助支撐](/rcs2024f/images/knotwigtecture/vise2.jpeg)


### MR系統

以MR協助輔助支撐與待接合樹枝的架設

![MR](/rcs2024f/images/knotwigtecture/MR.jpeg)

**預期產出：**
可將生成的3D造型加上輔助支撐後進行擴增實境協助製造的系統或設備

### 構築物

最終將整個工作流程完整構築一次

![構築物](/rcs2024f/images/knotwigtecture/finish.png)

**預期產出：**
於選定基地上的構築物