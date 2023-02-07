import { Component, OnInit } from '@angular/core';
import { MoralisService } from 'src/app/core/services/moralis.service';
import { Web3JsService } from 'src/app/core/services/web3-js.service';
@Component({
  selector: 'app-resolver',
  templateUrl: './resolver.component.html',
  styleUrls: ['./resolver.component.scss']
})
export class ResolverComponent implements OnInit {

  customerServiceResponse: string = "Hellooo, welcome. Please enter domain name in the input box above";
  addr: string = "";
  domainName: string = "";
  counts: string = "";
  balance: string = "";
  hasError: boolean = false;

  //  0xssjsje84892dnaindi3 belongs to bima.nft with a total of 17 transaction counts and is worth 700,000 eth
  constructor(
    private moralisService: MoralisService,
    private web3Service: Web3JsService
  ) { }

  resolveDomain(domain: string) {
    this.moralisService.resolveDomain(domain).subscribe({
      next: (data: any) => {
        this.hasError = false;
        // console.log("data", data)
        if(!data?.address){
          this.customerServiceResponse = `Sorry I support only domains on the ETH network, could not find any address linked to "${this.domainName}".`
        }else {
          this.addr = data?.address;
        }
        if (this.addr) {
          this.customerServiceResponse = `${this.addr} belongs to "${this.domainName}"`
          this.getAccountBalance(this.addr);
          this.getAddrTransacCounts(this.addr);
        }
        // this.customerServiceResponse = `${this.addr} belongs to "${this.domainName}" with a total of ${this.counts} transaction counts and is worth "${this.balance}" eth`
      }, error: (err: any) => {
        // console.log("err", err)
        this.hasError = true;
        this.customerServiceResponse = "Sorry service is down or the developers set the stove on too much fire"
      },
    })
  }
checker: boolean = true;
  searchInputValue(event: any) {
    let regex = new RegExp(/^(?!-)[A-Za-z0-9-]+([\-\.]{1}[a-z0-9]+)*\.[A-Za-z]{2,6}$/);
    // console.log("val", event.target.value)
    let val = event.target.value;
    if (!regex.test(val)) {
      // console.log("not okay");
      this.customerServiceResponse = "Inputted value not looking like a domain yet";
      this.hasError = true;
      this.checker = true;
    } else {
      // console.log("okay");
      this.hasError = false;
      this.checker = false;
      this.customerServiceResponse = "Looks good, please click on Go to continue"
      this.domainName = val;
    }
    // console.log("search input value",searchInput);

  }

  go(): void {
    this.addr = "";
    this.balance =  "";
    this.counts = "";
   if(this.checker === false){
    this.customerServiceResponse = "Okay, connecting to moralis and web3.js....";
    this.resolveDomain(this.domainName);
   }
  }


  async getAccountBalance(addr: string) {
    (await this.web3Service.getBalance(addr)).subscribe({
      next: (data: any) => {
        // console.log("dataum", data);
        this.balance = data
        // this.customerServiceResponse = `${this.addr} belongs to "${this.domainName}" with a total of ${this.counts} transaction counts and is worth "${this.balance}" eth`
      }, error: (err: any) => {
        // console.log("err", err)
      },
    })
  }

  async getAddrTransacCounts(addr: string) {
    
    (await this.web3Service.getTransactionCounts(addr)).subscribe({
      next: (data: any) => {
        // console.log("acct", data);
        this.customerServiceResponse  = "Hollup please, almost done :)"
        this.counts = data;
        if(this.counts && this.balance){
          this.customerServiceResponse = `${this.addr} belongs to "${this.domainName}" with a total of ${this.counts} transaction counts and is worth "${this.balance}" eth`
        }
      }, error: (err: any) => {
        // console.log("err", err)
      }
    })
  }

  ngOnInit(): void {

  }

}
