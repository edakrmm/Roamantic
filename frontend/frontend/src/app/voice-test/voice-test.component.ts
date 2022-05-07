import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-voice-test',
  templateUrl: './voice-test.component.html',
  styleUrls: ['./voice-test.component.css']
})
export class VoiceTestComponent{

  constructor(private shared: SharedService) { }

  isCamelChecked = false;
  isSTPChecked = false;
  isSTPListChecked = false;
  isMSCListChecked = false;


  mscList = [{msc:'SOM01', isSelected: false},
             {msc:'BSKM1', isSelected: false},
             {msc:'MBM03', isSelected: false},
             {msc:'MBM01', isSelected: false},
             {msc:'GBM01', isSelected: false},
             {msc:'BVM01', isSelected: false}];

  stpList = [{stp: 'BSSTP1', isSelected:false},{stp: 'GBSTP1', isSelected: false}];

  checkUncheckAll() {
    this.mscList.forEach((msc) => msc.isSelected = this.isMSCListChecked);
    this.stpList.forEach((stp) => stp.isSelected = this.isSTPListChecked);
  }

  onPrepClick(): void {
    
  }
  onExecClick() {

  }
  onstpDataDownloadClick() {
    if(this.apiResponse){
      let data = this.apiResponse.join('')
      data = "data:application/txt, " + encodeURIComponent(data);
      var x  = document.createElement("A");
      x.setAttribute("href",data);
      x.setAttribute("download", "stpdata.txt");
      document.body.appendChild(x);
      x.click();
    } 
  }

  onRollClick(): void {

  }

  IMSIList:string[] = [];

  addIMSI(imsi: string){
    if (imsi.trim().length > 0){
      this.IMSIList.push(imsi);
    }
  }

  deleteIMSI(imsi: string){ 
    this.IMSIList = this.IMSIList.filter(value => value!=imsi);
  }

  apiResponse:string[] = [];

  onSubmit(data:any) {

    data["IMSIList"] = this.IMSIList;

    for (const key in data) {
      if(data[key] == ""){
        data[key] = null;
      };         
    }
    
    this.shared.sendPostRequest(data).subscribe((result)=>{
        this.apiResponse = Object.values(result);
        if (this.isSTPChecked){
          var disable = document.getElementById("stpDataDownload");
          disable?.removeAttribute("disabled");    
        }
        else {
          var disable = document.getElementById("stpDataDownload");
          disable?.setAttribute("disabled","");   
        }

    });
  }
}


// fetch("http://127.0.0.1:8000/api/voicetest", {
//   method: "POST",
//   headers: {'Content-Type': 'application/json'}, 
//   //body: JSON.stringify(data)
// }).then(res => {
//   console.log(res);
// });