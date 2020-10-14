const bodyNodes = (node, index) => {
    if (node.nodeType === document.ELEMENT_NODE) {
      if (index >= 0 && index < node.showBodyNodes.length) {
        console.log(node.showBodyNodes[index]);
      } else {
        console.log("CSULB IS Courses");
      }
    } else {
      console.log("Fall Classes Taken");
    }
  };

bodyNodes(document.body, 1);
bodyNodes(document.body, -1);
bodyNodes(document.body, -1);
bodyNodes(document.body, 8);
bodyNodes(document.showNodes[0],0);