import {
  Directive,
  Type,
  TemplateRef,
  Input,
  ComponentRef,
  HostListener,
  ComponentFactoryResolver,
  ViewContainerRef,
  Injector,
  ReflectiveInjector,
  ElementRef,
  Renderer2
} from '@angular/core';
import { TipsComponent } from './tips.component';
/*tslint:disable*/
@Directive({
  selector: '[tips-tool]'
})
export class TipstoolDirective {
  @Input("tips-tool") content: string | TemplateRef<any> | Type<any>;
  outComponent: ComponentRef<any>;
  constructor(public cfr: ComponentFactoryResolver,
    public vcr: ViewContainerRef,
    public element: ElementRef,
    public rd2: Renderer2,
    public injector: Injector) { }

  @HostListener("mouseenter")
  mouseenter() {
    if(this.outComponent) return;
    const factory = this.cfr.resolveComponentFactory(TipsComponent);
    const injector = ReflectiveInjector.resolveAndCreate([{
      provide: 'tipsConfig',
      useValue: {
        'host': this.element.nativeElement
      }
    }])
    this.outComponent = this.vcr.createComponent(factory, 0, injector, this.createContent());
    (<TipsComponent>this.outComponent.instance).name = "我是可以自定义组件的公共属性";
    console.log(this.rd2)
  }

  createContent(): Array<any> {
    if(typeof this.content === "string") {
      const dom = this.rd2.createText(this.content);
      return [[dom]];
    }
    if(this.content instanceof TemplateRef) {
      const viewRef = this.content.createEmbeddedView({});
      return [viewRef.rootNodes];
    }
    const factory = this.cfr.resolveComponentFactory(this.content);
    const componentRef = factory.create(this.injector);
    return [[componentRef.location.nativeElement]];
  }

  @HostListener("mouseout")
  mouseout() {
    this.destroyCom();
  }

  destroyCom() {
    this.outComponent && this.outComponent.destroy();
    this.outComponent = null;
  }

  ngOnDestroy() {
    this.destroyCom();
  }

}
