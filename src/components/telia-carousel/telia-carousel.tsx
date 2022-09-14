import { Component, Element, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'telia-carousel',
  styleUrl: 'telia-carousel.scss',
  shadow: true,
})
export class TeliaCarousel {
  @Element() el: HTMLElement;

  @Prop() width = 200;

  @Prop() height = 100;

  componentDidLoad(): void {
    console.log(this.el.childElementCount);
  }

  private get totalPages(): number {
    return this.el.childElementCount;
  }

  render() {
    return (
      <Host>
        <div class="container">
          <ul class="pagination">
            {[...Array(this.totalPages).keys()].map(page => (
              <a class="page" href={`#slide-${page}`}>
                {page + 1}
              </a>
            ))}
          </ul>
          <div class="slider">
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
