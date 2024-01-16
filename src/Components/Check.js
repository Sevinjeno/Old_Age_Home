import React, { Component } from 'react';

class Check extends Component {
    constructor(props,context) {
        super(props,context); 
        this.state={
            treeviewData:[{
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
            }],
           
        }
        this.checkclicked = this.checkclicked.bind(this);

    }

    checkclicked(){
        this.setState((prevState)=>{
            debugger
            const newTreeViewData = [...prevState.treeviewData];
            console.log(newTreeViewData)
            const newLocationList = [...newTreeViewData[0].CityList[0].BuildingList[0].LocationList];
            newLocationList[1] = {
                ...newLocationList[1],
                Checked: true,
                IsChecked: true,
              };

               console.log(newLocationList)
               newTreeViewData[0].CityList[0].BuildingList[0].LocationList = newLocationList;
               return { treeviewData: newTreeViewData };

        })








        
        
    }

        render(){

             return(
                <>

                    <button style={{width:"50px",height:"50px"}} onClick={this.checkclicked} />
                    
                </>
             )

        }

   
}


export default Check;