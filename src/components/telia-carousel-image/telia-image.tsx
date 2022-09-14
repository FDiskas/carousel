/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'telia-image',
  styleUrl: 'telia-image.scss',
  shadow: true,
})
export class TeliaImage {
  @Prop() src: string;
  @Prop() alt: string;
  @Prop() small: string;
  @Prop() medium: string;
  render() {
    return (
      <Host>
        <picture class="telia-image">
          <source media="(max-width:599px)" srcSet={this.small} />
          <source media="(max-width:1023px)" srcSet={this.medium} />
          <img src={this.src} alt={this.alt} class="telia-image" />
        </picture>
      </Host>
    );
  }
}
