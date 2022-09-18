import { Component, Host, h, Prop } from '@stencil/core';
import { postfixDimensions } from '../../utils/utils';

@Component({
  tag: 'telia-image',
  styleUrl: 'telia-image.scss',
  shadow: true,
})
export class TeliaImage {
  @Prop() width: string = '100%';

  @Prop() height: string = 'inherit';

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

  private get styles(): { [key: string]: string | undefined } {
    const width = postfixDimensions(this.width);
    const height = postfixDimensions(this.height);

    return {
      width,
      height,
    };
  }

  render() {
    return (
      <Host>
        <picture class="telia-image">
          <source media="(max-width:599px)" srcSet={this.small} />
          <source media="(max-width:1023px)" srcSet={this.medium} />
          <img src={this.src} alt={this.alt} style={this.styles} />
        </picture>
      </Host>
    );
  }
}
