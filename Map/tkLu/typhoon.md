# 台风风圈半圈画法 (利用 turf.js)
`turf.js`

:::code-group
```js
/**
 * 获取台风风圈
 * @param radiusData 根据数据类型修改四个方向半径入参
 * @param center
 * @returns {*}
 */
const getTyphoonCircle = function (radiusData, center) {
    const centerPoint = turf.point(center); // 台风中心点
    const options = { steps: 64 }; // 设置精度
    
    // 根据四个方向的半径生成弧线
    const arcNE = turf.lineArc(centerPoint, radiusData.ne, 0, 90, options);
    const arcSE = turf.lineArc(centerPoint, radiusData.se, 90, 180, options);
    const arcSW = turf.lineArc(centerPoint, radiusData.sw, 180, 270, options);
    const arcNW = turf.lineArc(centerPoint, radiusData.nw, 270, 360, options);
    
    // 合并弧线生成完整的多边形
    const combinedCoords = [
      ...arcNE.geometry.coordinates,
      ...arcSE.geometry.coordinates,
      ...arcSW.geometry.coordinates,
      ...arcNW.geometry.coordinates,
      arcNE.geometry.coordinates[0] // 闭合多边形
    ];
    return turf.polygon([combinedCoords]);
}

```
## 图片效果
![图片效果](./img/typhoon.png)
