import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TreeView, processTreeViewItems, handleTreeViewCheckChange } from '@progress/kendo-react-treeview';
const tree = [{
  text: 'Item1',
  expanded: true,
  items: [{
    text: 'Item1.1'
  }, {
    text: 'Item1.2',
    expanded: true,
    items: [{
      text: 'Item1.2.1'
    }, {
      text: 'Item1.2.2'
    }]
  }]
}, {
  text: 'Item2'
}, {
  text: 'Item3'
}];


let treeviewData=[{
    CityList:[{
        AmountKlachtenAssigned:0,
        AmountKlachtenReported:0,
                 BuildingList:[{
                    AmountKlachtenAssigned:0,
                    AmountKlachtenReported:0,
                    COMPLEX_CODE: "900",
                     LocationList:[{
                        AmountKlachtenAssigned: 0,
                        AmountKlachtenReported: 0,
                        Checked:false,
                        IsChecked:false,
                     },{
                        AmountKlachtenAssigned: 0,
                        AmountKlachtenReported: 0,
                        Checked:false,
                        IsChecked:false,
                     },{
                        AmountKlachtenAssigned: 0,
                        AmountKlachtenReported: 0,
                        Checked:false,
                        IsChecked:false,
                     }]
                 }]
              }],

    NodeType: 'Region',
    ZHVOORZ_ID: 1075, 
    ZHVOORZ_NAME_WithoutCodes: 'Regio 1',
    ZHVOORZ_NAME_WithCodes: '1075 - Regio 1'
}];

let Box = () => {
  const [items] = React.useState(treeviewData);
  const [singleMode, setSingleMode] = React.useState(false);
  const [checkChildren, setCheckChildren] = React.useState(false);
  const [checkParents, setCheckParents] = React.useState(false);
  const [check, setCheck] = React.useState({
    ids: [],
    applyCheckIndeterminate: true
  });
  const onCheckChange = event => {
    const settings = {
      singleMode,
      checkChildren,
      checkParents
    };
    setCheck(handleTreeViewCheckChange(event, check, items));
  };
  const onSingleModeChange = ({
    target: {
      checked
    }
  }) => {
    setSingleMode(checked);
    setCheckChildren(false);
    setCheckParents(false);
  };
  const onCheckChildrenChange = ({
    target: {
      checked
    }
  }) => {
    setSingleMode(false);
    setCheckChildren(checked);
  };
  const onCheckParentsChange = ({
    target: {
      checked
    }
  }) => {
    if (checked) {
      setSingleMode(false);
    }
    setCheckParents(checked);
  };
  return <div>
    
      <TreeView data={items} />
      
    </div>;
};

export default Box;

