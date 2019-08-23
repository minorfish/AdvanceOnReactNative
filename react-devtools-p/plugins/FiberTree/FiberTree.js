// const fibers = [{
//     "id": 0,
//     "desc": "0_HostRoot_",
//     "return": -1,
//     "child": 22,
//     "sibling": -1,
//     "alternate": 1,
//     "firstEffect": 28,
//     "lastEffect": 28,
//     "nextEffect": -1
// }, {
//     "id": 22,
//     "desc": "22_ClassComponent_",
//     "return": 0,
//     "child": 23,
//     "sibling": -1,
//     "alternate": 3,
//     "firstEffect": 28,
//     "lastEffect": 28,
//     "nextEffect": -1
// }, {
//     "id": 23,
//     "desc": "23_ForwardRef_",
//     "return": 22,
//     "child": 24,
//     "sibling": -1,
//     "alternate": 4,
//     "firstEffect": 28,
//     "lastEffect": 28,
//     "nextEffect": -1
// }, {
//     "id": 24,
//     "desc": "24_ContextConsumer_",
//     "return": 23,
//     "child": 25,
//     "sibling": -1,
//     "alternate": 5,
//     "firstEffect": 28,
//     "lastEffect": 28,
//     "nextEffect": -1
// }, {
//     "id": 25,
//     "desc": "25_HostComponent_",
//     "return": 24,
//     "child": 26,
//     "sibling": -1,
//     "alternate": 6,
//     "firstEffect": 28,
//     "lastEffect": 28,
//     "nextEffect": -1
// }, {
//     "id": 26,
//     "desc": "26_ForwardRef_",
//     "return": 25,
//     "child": 9,
//     "sibling": 27,
//     "alternate": 7,
//     "firstEffect": -1,
//     "lastEffect": -1,
//     "nextEffect": -1
// }, {
//     "id": 9,
//     "desc": "9_ContextConsumer_",
//     "return": 7,
//     "child": 10,
//     "sibling": -1,
//     "alternate": -1,
//     "firstEffect": 17,
//     "lastEffect": 10,
//     "nextEffect": -1
// }, {
//     "id": 10,
//     "desc": "10_HostComponent_Ref,",
//     "return": 9,
//     "child": 11,
//     "sibling": -1,
//     "alternate": -1,
//     "firstEffect": 17,
//     "lastEffect": 11,
//     "nextEffect": 8
// }, {
//     "id": 11,
//     "desc": "11_ClassComponent_Update,PlacementAndUpdate,",
//     "return": 10,
//     "child": 12,
//     "sibling": -1,
//     "alternate": -1,
//     "firstEffect": 17,
//     "lastEffect": 12,
//     "nextEffect": 10
// }, {
//     "id": 12,
//     "desc": "12_ClassComponent_Update,PlacementAndUpdate,",
//     "return": 11,
//     "child": 13,
//     "sibling": -1,
//     "alternate": -1,
//     "firstEffect": 17,
//     "lastEffect": 17,
//     "nextEffect": 11
// }, {
//     "id": 13,
//     "desc": "13_ForwardRef_",
//     "return": 12,
//     "child": 14,
//     "sibling": -1,
//     "alternate": -1,
//     "firstEffect": 17,
//     "lastEffect": 17,
//     "nextEffect": -1
// }, {
//     "id": 14,
//     "desc": "14_ContextConsumer_",
//     "return": 13,
//     "child": 15,
//     "sibling": -1,
//     "alternate": -1,
//     "firstEffect": 17,
//     "lastEffect": 17,
//     "nextEffect": -1
// }, {
//     "id": 15,
//     "desc": "15_HostComponent_",
//     "return": 14,
//     "child": 16,
//     "sibling": -1,
//     "alternate": -1,
//     "firstEffect": 17,
//     "lastEffect": 17,
//     "nextEffect": -1
// }, {
//     "id": 16,
//     "desc": "16_ForwardRef_",
//     "return": 15,
//     "child": 17,
//     "sibling": -1,
//     "alternate": -1,
//     "firstEffect": 17,
//     "lastEffect": 17,
//     "nextEffect": -1
// }, {
//     "id": 17,
//     "desc": "17_ClassComponent_Update,PlacementAndUpdate,",
//     "return": 16,
//     "child": 18,
//     "sibling": -1,
//     "alternate": -1,
//     "firstEffect": -1,
//     "lastEffect": -1,
//     "nextEffect": 12
// }, {
//     "id": 18,
//     "desc": "18_ContextConsumer_",
//     "return": 17,
//     "child": 19,
//     "sibling": -1,
//     "alternate": -1,
//     "firstEffect": -1,
//     "lastEffect": -1,
//     "nextEffect": -1
// }, {
//     "id": 19,
//     "desc": "19_ContextProvider_",
//     "return": 18,
//     "child": 20,
//     "sibling": -1,
//     "alternate": -1,
//     "firstEffect": -1,
//     "lastEffect": -1,
//     "nextEffect": -1
// }, {
//     "id": 20,
//     "desc": "20_HostComponent_",
//     "return": 19,
//     "child": 21,
//     "sibling": -1,
//     "alternate": -1,
//     "firstEffect": -1,
//     "lastEffect": -1,
//     "nextEffect": -1
// }, {
//     "id": 21,
//     "desc": "21_HostText_",
//     "return": 20,
//     "child": -1,
//     "sibling": -1,
//     "alternate": -1,
//     "firstEffect": -1,
//     "lastEffect": -1,
//     "nextEffect": -1
// }, {
//     "id": 27,
//     "desc": "27_ClassComponent_",
//     "return": 25,
//     "child": 28,
//     "sibling": -1,
//     "alternate": 8,
//     "firstEffect": 28,
//     "lastEffect": 28,
//     "nextEffect": -1
// }, {
//     "id": 28,
//     "desc": "28_ClassComponent_Update,PlacementAndUpdate,",
//     "return": 27,
//     "child": -1,
//     "sibling": -1,
//     "alternate": 29,
//     "firstEffect": -1,
//     "lastEffect": -1,
//     "nextEffect": -1
// }, {
//     "id": 29,
//     "desc": "29_ClassComponent_",
//     "return": 8,
//     "child": -1,
//     "sibling": -1,
//     "alternate": 28,
//     "firstEffect": -1,
//     "lastEffect": -1,
//     "nextEffect": -1
// }, {
//     "id": 8,
//     "desc": "8_ClassComponent_",
//     "return": 6,
//     "child": 29,
//     "sibling": -1,
//     "alternate": 27,
//     "firstEffect": -1,
//     "lastEffect": -1,
//     "nextEffect": -1
// }, {
//     "id": 7,
//     "desc": "7_ForwardRef_",
//     "return": 6,
//     "child": 9,
//     "sibling": 8,
//     "alternate": 26,
//     "firstEffect": -1,
//     "lastEffect": -1,
//     "nextEffect": -1
// }, {
//     "id": 6,
//     "desc": "6_HostComponent_",
//     "return": 5,
//     "child": 7,
//     "sibling": -1,
//     "alternate": 25,
//     "firstEffect": -1,
//     "lastEffect": -1,
//     "nextEffect": -1
// }, {
//     "id": 5,
//     "desc": "5_ContextConsumer_",
//     "return": 4,
//     "child": 6,
//     "sibling": -1,
//     "alternate": 24,
//     "firstEffect": -1,
//     "lastEffect": -1,
//     "nextEffect": -1
// }, {
//     "id": 4,
//     "desc": "4_ForwardRef_",
//     "return": 3,
//     "child": 5,
//     "sibling": -1,
//     "alternate": 23,
//     "firstEffect": -1,
//     "lastEffect": -1,
//     "nextEffect": -1
// }, {
//     "id": 3,
//     "desc": "3_ClassComponent_",
//     "return": 1,
//     "child": 4,
//     "sibling": -1,
//     "alternate": 22,
//     "firstEffect": -1,
//     "lastEffect": -1,
//     "nextEffect": -1
// }, {
//     "id": 1,
//     "desc": "1_HostRoot_",
//     "return": -1,
//     "child": 3,
//     "sibling": -1,
//     "alternate": 0,
//     "firstEffect": -1,
//     "lastEffect": -1,
//     "nextEffect": -1
// }];
const RealDOMElements = ['HostComponent', 'HostText'];
let Radius;
let DOMRadius;
let FontSize;
let DOMFontSize;
let DescFontSize;
let FontColor;
let DescFontColor;
let Font;
let DOMFont;
let DescFont;
let XStep;
let RootXStep;
let YStep;
let InitX;
let InitY;
let DOMXStep;
let DOMRootXStep;
let DOMYStep;
let DOMInitX;
let DOMInitY;
let InvalidID;

function init(ratio) {
  if (ratio > 0) {
    Radius = 30 * ratio;
    DOMRadius = 50 * ratio;
    FontSize = 20 * ratio;
    DOMFontSize = 22 * ratio;
    FontColor = 'black';
    Font = FontSize + 'px  Arial';
    DOMFont = DOMFontSize + 'px  Arial';
    DescFontColor = 'gray';
    DescFontSize = 10;
    DescFont = DescFontSize + 'px  Arial';
    XStep = 4 * Radius;
    RootXStep = 4 * XStep;
    YStep = 3 * Radius;
    InitX = 2 * Radius;
    InitY = 2 * Radius;
    DOMXStep = 2 * DOMRadius;
    DOMRootXStep = 4 * DOMXStep;
    DOMYStep = 3 * DOMRadius;
    DOMInitX = 3 * DOMRadius;
    DOMInitY = 2 * DOMRadius;
    InvalidID = -1;
  }
}

const NodeColor = '#FF0000';
const RealDOMNodeColor = '#32cd32';
const NodeAlternateLineColor = 'purple';
const NodeChildLineColor = 'green';
const DOMNodeChildLineColor = 'black';
const NodeSiblingLineColor = 'blue';
const NodeNextEffectLineColor = 'orange';
const LineWidth = 2;

function drawFiberLine(cxt, id, fiberXYObj, alternateIDSet) {
  if (id !== InvalidID) {
    const fiber = fiberXYObj[id];
    const {x, y} = fiber;
    cxt.lineWidth = LineWidth;
    // alternate line
    if (fiber.alternate !== InvalidID && !alternateIDSet.has(id) && !alternateIDSet.has(fiber.alternate)) {
      alternateIDSet.add(id);
      alternateIDSet.add(fiber.alternate);
      const alternateFiber = fiberXYObj[fiber.alternate];
      cxt.strokeStyle = NodeAlternateLineColor;
      cxt.beginPath();
      cxt.moveTo(x, y);
      cxt.bezierCurveTo(x, y - 2 * Radius, alternateFiber.x, alternateFiber.y - 2 * Radius, alternateFiber.x, alternateFiber.y);
      cxt.stroke();
    }
    // child line
    if (fiber.child !== InvalidID) {
      const childFiber = fiberXYObj[fiber.child];
      cxt.strokeStyle = NodeChildLineColor;
      cxt.beginPath();
      cxt.moveTo(x, y);
      cxt.lineTo(childFiber.x, childFiber.y);
      cxt.stroke();
    }
    // sibling line
    if (fiber.sibling !== InvalidID) {
      const siblingFiber = fiberXYObj[fiber.sibling];
      cxt.strokeStyle = NodeSiblingLineColor;
      cxt.beginPath();
      cxt.moveTo(x, y);
      cxt.lineTo(siblingFiber.x, siblingFiber.y);
      cxt.stroke();
    }
    // nextEffect
    if (fiber.nextEffect !== InvalidID) {
      const nextEffectFiber = fiberXYObj[fiber.nextEffect];
      cxt.strokeStyle = NodeNextEffectLineColor;
      cxt.beginPath();
      cxt.moveTo(x, y);
      let cp1x = x;
      let cp1y = y;
      let cp2x = nextEffectFiber.x;
      let cp2y = nextEffectFiber.y;
      const deltaX = x - nextEffectFiber.x;
      const deltaY = y - nextEffectFiber.y;
      const offsetX = deltaX === 0 ? 2 * Radius : deltaX / 2;
      const offsetY = deltaY === 0 ? 2 * Radius : deltaY / 2;
      if (deltaX === 0) {
        if (deltaY === 0) {
          cp1x -= offsetX;
          cp1y -= offsetY;
          cp2x += offsetX;
          cp2y += offsetY;
        } else if (deltaY > 0) {
          cp1x -= offsetX;
          cp2x -= offsetX;
        } else {
          cp1x -= offsetX;
          cp2x -= offsetX;
        }
        ;
      } else if (deltaX > 0) {
        if (deltaY === 0) {
          cp1y += offsetY;
          cp2y += offsetY;
        } else if (deltaY > 0) {
          cp1x -= offsetX;
          cp2x += offsetX;
        } else {
          cp1x -= offsetX;
          cp2x += offsetX;
        }
        ;
      } else {
        if (deltaY === 0) {
          cp1y += offsetY;
          cp2y += offsetY;
        } else if (deltaY > 0) {
          cp1x -= offsetX;
          cp2x += offsetX;
        } else {
          cp1x -= offsetX;
          cp2x += offsetX;
        }
        ;
      }
      ;
      cxt.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, nextEffectFiber.x, nextEffectFiber.y);
      cxt.stroke();
    }

    drawFiberLine(cxt, fiber.child, fiberXYObj, alternateIDSet);
    drawFiberLine(cxt, fiber.sibling, fiberXYObj, alternateIDSet);
  }
};

function drawFiberNode(cxt, id, fiberXYObj) {
  if (id !== InvalidID) {
    const fiber = fiberXYObj[id];
    const {x, y, tag, effectTag, type, nativeTag} = fiber;
    // circle
    if (isRealDOMElement(fiber)) {
      cxt.fillStyle = RealDOMNodeColor;
      cxt.beginPath();
      cxt.rect(x - Radius, y - Radius, 2 * Radius, 2 * Radius);
      cxt.closePath();
      cxt.fill();
    } else {
      cxt.fillStyle = NodeColor;
      cxt.beginPath();
      cxt.arc(x, y, Radius, 0, Math.PI * 2, true);
      cxt.closePath();
      cxt.fill();
    }
    // text
    const text = id;
    cxt.fillStyle = FontColor;
    cxt.font = Font;
    cxt.fillText(text, x - cxt.measureText(text).width / 2, y);
    // desc
    cxt.fillStyle = DescFontColor;
    cxt.font = DescFont;
    cxt.fillText(tag, x - cxt.measureText(tag).width / 2, y + 0.7 * FontSize);
    cxt.fillText(type, x - cxt.measureText(type).width / 2, y + 1.4 * FontSize);
    cxt.fillText(nativeTag, x - cxt.measureText(nativeTag).width / 2, y + 2.1 * FontSize);
    cxt.fillText(effectTag, x - cxt.measureText(effectTag).width / 2, y + 2.8 * FontSize);

    drawFiberNode(cxt, fiber.child, fiberXYObj);
    drawFiberNode(cxt, fiber.sibling, fiberXYObj);
  }
};

function isRealDOMElement(fiber) {
  if (fiber) {
    const {tag} = fiber;
    return RealDOMElements.includes(tag);
  }
  return false;
}

function layoutFiberNode(id, fiberXYObj, x, y) {
  if (id !== InvalidID) {
    const fiber = fiberXYObj[id];
    fiberXYObj[id].x = x;
    fiberXYObj[id].y = y;

    layoutFiberNode(fiber.child, fiberXYObj, x, y + YStep);
    layoutFiberNode(fiber.sibling, fiberXYObj, x + XStep, y);
  }
};

function getDomNodeXY(domNode, offsetLeafCount, index) {
  const {allLeafCount, rightLeafCount, level} = domNode;
  const {allLeafCount: parentAllLeafCount = 0, rightLeafCount: parentRightLeafCount = 0, children: parentChildren = null} = domNode.parent || {};
  let parentOffsetLeafCount = 0;
  if (parentChildren && index > (parentChildren.length - 1) / 2) {
    parentOffsetLeafCount = parentAllLeafCount - parentRightLeafCount;
  }
  const x = DOMInitX + (allLeafCount - rightLeafCount + offsetLeafCount + parentOffsetLeafCount) * DOMXStep;
  const y = DOMInitY + level * DOMYStep;

  return {x, y};
}
function drawDomNode(cxt, domNode, offsetLeafCount, index) {
  if (!domNode) {
    return;
  }
  const {name, nativeTag, children, style, allLeafCount, leftLeafCount, rightLeafCount, level} = domNode;
  const styleStr = JSON.stringify(style);
  const {x, y} = getDomNodeXY(domNode, offsetLeafCount, index);
  // line
  cxt.strokeStyle = DOMNodeChildLineColor;
  cxt.lineWidth = LineWidth;
  children && children.forEach((childDomNode, childIndex) => {
    if (childDomNode) {
      const {x: xx, y: yy} = getDomNodeXY(childDomNode, offsetLeafCount, childIndex);
      cxt.beginPath();
      cxt.moveTo(x, y);
      cxt.lineTo(xx, yy);
      cxt.stroke();
    }
  });


  console.log('SSU', 'drawDomNode', {x, y, domNode});
  cxt.lineWidth = LineWidth;
  cxt.fillStyle = RealDOMNodeColor;
  cxt.beginPath();
  cxt.rect(x - DOMRadius, y - DOMRadius, 2 * DOMRadius, 2 * DOMRadius);
  cxt.closePath();
  cxt.fill();

  cxt.fillStyle = FontColor;
  cxt.font = DOMFont;
  cxt.fillText(name, x - cxt.measureText(name).width / 2, y + 0.0 * DOMFontSize);
  cxt.fillText(nativeTag, x - cxt.measureText(nativeTag).width / 2, y + 1 * DOMFontSize);
  cxt.fillText(styleStr, x - cxt.measureText(styleStr).width / 2, y + 2 * DOMFontSize);
  children && children.forEach((childDomNode, childIndex) => {
    drawDomNode(cxt, childDomNode, offsetLeafCount, childIndex);
  });
}

function travelDomNodeLeafCount(domNode) {
  if (domNode.children && domNode.children.length > 0) {
    domNode.allLeafCount = 0;
    domNode.leftLeafCount = 0;
    domNode.rightLeafCount = 0;
    const childCount = domNode.children.length;
    const halfChildCount = (childCount - 1) / 2;
    domNode.children.forEach((childDomNode, index) => {
      childDomNode.parent = domNode;
      childDomNode.level = domNode.level + 1;

      travelDomNodeLeafCount(childDomNode);
      const childLeafCount = childDomNode.allLeafCount;

      domNode.allLeafCount += childLeafCount;

      if (index < halfChildCount) {
        domNode.leftLeafCount += childLeafCount;
      } else if (index === halfChildCount) {
        domNode.leftLeafCount += childDomNode.leftLeafCount;
        domNode.rightLeafCount += childDomNode.rightLeafCount;
      } else {
        domNode.rightLeafCount += childLeafCount;
      }
    });
  } else {
    domNode.allLeafCount = 1;
    domNode.leftLeafCount = 0;
    domNode.rightLeafCount = 0;
  }

  if (domNode.allLeafCount > 0 && domNode.allLeafCount % 2 === 0) {
    domNode.allLeafCount += 1;
  }
  const {name, nativeTag, children, style, allLeafCount, leftLeafCount, rightLeafCount, level} = domNode;
  console.log('SSU', 'travelDomNodeLeafCount', { nativeTag, allLeafCount, leftLeafCount, rightLeafCount, level  });
}

export default function drawFiberTree(fibers, doms, ratio) {
  const canvas = document.getElementById('myCanvas');
  if (!canvas) {
    return;
  }
  init(ratio);
  const cxt = canvas.getContext('2d');
  cxt.clearRect(0, 0, canvas.width, canvas.height);
  console.log('SSU', 'drawFiberTree', {fibers, doms});
  // doms
  if (doms) {
    const domRootTagSet = new Set();
    const domTag2NodeMap = new Map();
    doms.forEach((dom) => {
      const {name, nativeTag, children, style} = dom;
      domRootTagSet.add(nativeTag);
      domTag2NodeMap.set(nativeTag, {
        name,
        style,
        nativeTag,
        parent: null,
        children: null,
        allLeafCount: 0,
        leftLeafCount: 0,
        rightLeafCount: 0,
        level: 0,
      });
    });
    doms.forEach((dom) => {
      const {name, nativeTag, children, style} = dom;
      const domNode = domTag2NodeMap.get(nativeTag);
      domNode.children = [];
      children && children.forEach((childNativeTag) => {
        const childDomNode = domTag2NodeMap.get(childNativeTag);
        domNode.children.push(childDomNode);

        domRootTagSet.delete(childNativeTag);
      });
    });

    console.log('SSU', 'drawFiberTree.doms', {domRootTagSet, domTag2NodeMap});

    let rootDomNodeOffsetLeafCount = 0;
    domRootTagSet.forEach((nativeTag) => {
      const domNode = domTag2NodeMap.get(nativeTag);
      travelDomNodeLeafCount(domNode);
      console.log('SSU', 'travelDomNodeLeafCount all', {domNode});
      rootDomNodeOffsetLeafCount += domNode.allLeafCount;
      drawDomNode(cxt, domNode, rootDomNodeOffsetLeafCount, 0);
    });
    cxt.translate(rootDomNodeOffsetLeafCount * DOMRadius, 0);
  }

  // fibers
  // if (fibers) {
  //   const fiberXYObj = {};
  //   const fiberRoots = [];
  //   fibers.forEach(fiber => {
  //     fiberXYObj[fiber.id] = fiber;
  //     if (fiber.return === InvalidID) {
  //       fiberRoots.push(fiber.id);
  //     }
  //   });
  //   fiberRoots.forEach((id, index) => {
  //     layoutFiberNode(id, fiberXYObj, InitX + index * RootXStep, InitY);
  //   });
  //   const alternateIDSet = new Set();
  //   fiberRoots.forEach((id) => {
  //     drawFiberLine(cxt, id, fiberXYObj, alternateIDSet);
  //   });
  //   fiberRoots.forEach((id) => {
  //     drawFiberNode(cxt, id, fiberXYObj);
  //   });
  //   console.log('SSU', 'drawFiberTree.fibers', {fiberXYObj, fiberRoots});
  //
  // }
  // console.log('SSU', JSON.stringify(fiberXYObj));
};


