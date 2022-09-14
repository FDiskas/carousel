import { Component, Element, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'telia-carousel',
  styleUrl: 'telia-carousel.scss',
  shadow: { delegatesFocus: true },
})
export class TeliaCarousel {
  @Element() el: HTMLElement;

  @Prop() width = 200;

  @Prop() height = 100;

  componentDidLoad(): void {
    console.log(this.getListHeight());
  }

  private getListHeight(): number {
    return this.el.getBoundingClientRect().height;
  }

  render(): any {
    return (
      <Host>
        <div class="container">
          <div class="pagination"></div>
          <div class="slider">
            <img class="image" src="https://via.placeholder.com/800x600/?text=First" alt="1" />
            <img class="image" src="https://via.placeholder.com/800x600/?text=Second" alt="2" />
            <img class="image" src="https://via.placeholder.com/800x600/?text=Fourth" alt="3" />
            <img class="image" src="https://via.placeholder.com/800x600/?text=Fourth" alt="4" />
            <img class="image" src="https://via.placeholder.com/800x600/?text=Fifth" alt="5" />
          </div>
        </div>
      </Host>
    );
  }
}
