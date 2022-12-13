import { Component, OnInit } from '@angular/core';
import { ColDef, GridApi, GridOptions, GridReadyEvent } from 'ag-grid-community';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  private gridApi!: GridApi<any>;
  public overlayNoRowsTemplate =
  '<span style="padding: 10px; border: 2px solid #444; background: lightgoldenrodyellow;">\'no records found\' </span>';


 
  ngOnInit(): void {
  
    
    
  }

  
  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 100,
    filter: true,
    sortable: true,
    resizable: true,
  }; 

  public columnDefs = [];
  public btn1: any;
  public btn2: any;
  public btn3: any;
//  public columnDefs: ColDef[] = [];
  public rowData1!: any[];

  public rowData = [];
  public gridOptions:GridOptions = {

    defaultColDef: {
        sortable: true,
        filter: 'agTextColumnFilter',
        resizable: true
    },

    columnDefs: this.columnDefs
    
   
    
};

  buttonOne() {
    this.columnDefs=[];
   
    this.btn1 = [
      {
      "Customer_Name" : "shiva kumar",
      "DOB" : "22/06/1990",
      "SEX": "M",
      "Occupation": "Private Sector",
      "Address": "abbbb dhjdshc",
      "Country": "INDIA"     
    },
    {
      "Customer_Name" : "XXXXXXXX",
      "DOB" : "22/06/1992",
      "SEX": "M",
      "Occupation": "Govt Sector",
      "Address": "bchdshchds ",
      "Country": "INDIA"     
    },
    {
      "Customer_Name" : "Bonala",
      "DOB" : "22/06/1988",
      "SEX": "M",
      "Occupation": "Private Sector",
      "Address": "Mind space, HYD",
      "Country": "INDIA"     
    }
  ];
    const colDefs: any = [] ;   
      
     
    //  this.gridOptions.api ?.setColumnDefs(colDefs);
    //  this.gridOptions.api ?.setRowData(Object.values(this.btn1));
    if(this.btn1 !=null && this.btn1.length > 0) {
     
      const keys = Object.keys(this.btn1[0]);
      keys.forEach(key => colDefs.push({field : key}));
      this.columnDefs = colDefs;
      this.rowData = Object.values(this.btn1)
    }
    else {
      this.gridApi.showNoRowsOverlay();
    }   
   
  }

  buttonTwo() {
    this.columnDefs=[];
    this.btn2 = [
      {
      "Customer_Name" : "shiva kumar",
      "PolicyNo": "12356343264732",
      "Policy expiry": "02/12/2023",
      "Plan Name": "TATA AIA",
      "Payment Mode": "Annual",
      "Nominee": "sjksacsajc",
    },
    {
      "Customer_Name" : "XXXXXXX",
      "PolicyNo": "898493948932948923",
      "Policy expiry": "02/12/2025",
      "Plan Name": "ICICI ",
      "Payment Mode": "Quaterly",
      "Nominee": "jddsdkasdka",
    },
    {
      "Customer_Name" : "Bonala",
      "PolicyNo": "3764637432847234832",
      "Policy expiry": "07/08/2024",
      "Plan Name": "HDFC Life",
      "Payment Mode": "Quaterly",
      "Nominee": "sjdsadjsaj",
    },
  ]

    const colDefs: any = [] ;   
    const keys = Object.keys(this.btn2[0])
   
    if(colDefs !=null) {
      keys.forEach(key => colDefs.push({field : key}));
   //   this.gridOptions.api ?.setColumnDefs(colDefs);
  //    this.gridOptions.api ?.setRowData(Object.values(this.btn2));
      this.columnDefs = colDefs;
      this.rowData = Object.values(this.btn2)
    }
  }

  buttonThree() {
    this.btn3 = [
      {
      "PolicyNo": "12356343264732",
      "Transactio_Date":"21/06/2022",
      "Receipt_No": "PV231312", 
      "Payment_Type": "Renewal", 
      "Amount_Received": "$1500", 
      "Mobile": "9618644243", 
      "Alternate_No": "9726373232", 
       
    },
    {
      "PolicyNo": "12356343264732",
      "Transactio_Date":"11/05/2021",
      "Receipt_No": "SV2323213", 
      "Payment_Type": "New", 
      "Amount_Received": "$1750", 
      "Mobile": "7535134975", 
      "Alternate_No": "8515673982", 
       
    },
    {
      "PolicyNo": "3764637432847234832",
      "Transactio_Date":"05/09/2022",
      "Receipt_No": "BK2312321", 
      "Payment_Type": "Renewal", 
      "Amount_Received": "$1400", 
      "Mobile": "96186442111", 
      "Alternate_No": "8662957471", 
       
    }
  ]

    const colDefs: any = [] ;   
    const keys = Object.keys(this.btn3[0])
   
    if(colDefs !=null) {
      keys.forEach(key => colDefs.push({field : key}));
    //  this.gridOptions.api ?.setColumnDefs(colDefs);
    //  this.gridOptions.api ?.setRowData(Object.values(this.btn3));
      this.columnDefs = colDefs;
      this.rowData = Object.values(this.btn3)
    }
  }

  onGridReady(params: GridReadyEvent<any>) {
    this.gridApi = params.api;
  }
 
  }

  
  

