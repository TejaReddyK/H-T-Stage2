import { Component, ContentChild, ContentChildren, ElementRef, Renderer2,  ViewChild } from '@angular/core';


@Component({
  selector: 'card',
  template: `
    <div class="card">
      <ng-content select="header"></ng-content>
      <ng-content select="p1"></ng-content>
         </div>
  `,
  styles: [
    ` .card {  margin: 5px; background-color: yellow  }
    `
  ]
})
export class CardComponent {

  @ContentChild("header") cardContentHeader!: ElementRef;
  @ViewChild("header") cardViewHeader!: ElementRef;

  @ContentChild("p1") p1ContentData!: ElementRef;
  @ViewChild("p1") p1ViewData!: ElementRef;


  constructor(private renderor:Renderer2) {
    console.log("CardComponent ->constructor "+this.cardContentHeader)
  }

  ngOnChanges() {
    //first time returns undfined
    console.log("CardComponent ->ngOnChanges "+this.cardContentHeader)
  }

  ngOnInit() {
    //returns undfined
    console.log("CardComponent ->ngOnInit "+this.cardContentHeader)
  }

  ngDoCheck() {
    //first time returns undfined
    console.log("CardComponent ->ngDoCheck "+this.cardContentHeader)
  }

  ngAfterContentInit() {
    //cardContentHeader is available here
    console.log("CardComponent ->ngAfterContentInit-contentHeader "+this.cardContentHeader)

    this.renderor.setStyle(this.cardContentHeader.nativeElement,"font-size","20px")

    //this.cardContentHeader.nativeElement.innerHTML="<h1>Test</h1>"
    //console.log("CardComponent ->ngAfterContentChecked-viewHeader")
    //console.log(this.cardViewHeader)   //undefined
  }

  ngAfterContentChecked() {
    //cardContentHeader is available here
    console.log("CardComponent ->ngAfterContentInit-contentHeader "+this.cardContentHeader)
  }

  ngAfterViewInit() {
    console.log("CardComponent ->ngAfterViewInit-viewHeader "+this.cardViewHeader)
  }

  ngAfterViewChecked() {
    console.log("CardComponent ->ngAfterViewChecked-viewHeader "+this.cardViewHeader)
  }




}