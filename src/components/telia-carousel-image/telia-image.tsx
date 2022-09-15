import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'telia-image',
  styleUrl: 'telia-image.scss',
  shadow: true,
})
export class TeliaImage {
  @Prop() alt: string;

  /**
   * Large size image src
   */
  @Prop() src: string;
  /**
   * Small size image src
   */
  @Prop() small: string;

  /**
   * Medium size image
   */
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
