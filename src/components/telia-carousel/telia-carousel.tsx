import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'telia-carousel',
  styleUrl: 'telia-carousel.scss',
  shadow: true,
})
export class TeliaCarousel {
  @Prop() width: number = 200;
  @Prop() height: number = 100;

  render() {
    return (
      <Host>
        <div class="container">
          <slot></slot>
        </div>
      </Host>
    );
  }

}
